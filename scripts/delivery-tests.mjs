import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFileSync, spawnSync } from 'node:child_process';
import { randomUUID } from 'node:crypto';
import { root } from './delivery-environment.mjs';
import { localIdentity, verifyHosted } from './release-identity.mjs';
import { recordPath, startDelivery, assignTask, claimTask, finishTask, readDelivery, beginPhase, endPhase, checkBuildOwner } from './delivery-record.mjs';
import { impact } from './ci-impact.mjs';

function fixture(run) {
  const dir = mkdtempSync(path.join(tmpdir(), 'engineering-delivery-'));
  const git = args => execFileSync('git', args, { cwd: dir, stdio: 'pipe', encoding: 'utf8' }).trim();
  try {
    git(['init', '-q']); git(['config', 'user.name', 'Delivery fixture']); git(['config', 'user.email', 'fixture@example.invalid']);
    writeFileSync(path.join(dir, '.gitignore'), 'artifacts/\ndist/\n'); writeFileSync(path.join(dir, 'input'), 'source');
    git(['add', '.']); git(['commit', '-qm', 'fixture']);
    return run(dir, git(['rev-parse', 'HEAD']));
  } finally { rmSync(dir, { recursive: true, force: true }); }
}
test('release identity rejects dirty, stale, null and unexpected revisions before tests', () => fixture((dir, revision) => {
  mkdirSync(path.join(dir, 'dist'));
  const save = source_commit => writeFileSync(path.join(dir, 'dist/build-information.json'), JSON.stringify({ schema_version: 1, source_commit, built_at: new Date().toISOString() }));
  save(revision); assert.equal(localIdentity(revision, dir).source_commit, revision);
  assert.throws(() => localIdentity('0'.repeat(40), dir), /assigned revision/);
  for (const stale of [null, '0'.repeat(40)]) { save(stale); assert.throws(() => localIdentity(revision, dir), /stale build revision/); }
  save(revision); writeFileSync(path.join(dir, 'input'), 'changed'); assert.throws(() => localIdentity(revision, dir), /clean committed/);
}));
test('owner and exact test assignments reject duplicate work and preserve completion', () => fixture((dir, revision) => {
  const file = recordPath(dir); startDelivery(file, 'owner', dir);
  assert.throws(() => checkBuildOwner(dir, { DELIVERY_ACTOR: 'other' }), /owner/);
  assert.throws(() => assignTask(file, 'owner', { name: 'build', worker: 'other', checks: ['build'] }, dir), /owner runs/);
  assignTask(file, 'owner', { name: 'unit', worker: 'tester', checks: ['unit'] }, dir);
  assert.throws(() => assignTask(file, 'owner', { name: 'duplicate', worker: 'tester', checks: ['unit'] }, dir), /Overlapping/);
  const scope = { revision, checks: ['unit'], preview: false, runDirectory: '/test-evidence' };
  assert.throws(() => claimTask(file, 'other', 'unit', scope), /assigned/);
  assert.throws(() => claimTask(file, 'tester', 'unit', { ...scope, revision: '0'.repeat(40) }), /revision/);
  claimTask(file, 'tester', 'unit', scope); finishTask(file, 'unit', 'passed');
  assert.throws(() => claimTask(file, 'tester', 'unit', scope), /already/);
  assert.equal(readDelivery(file).tasks.unit.attempts[0].status, 'passed');
}));
test('phase failures keep command exit codes; unknown and overlapping times remain distinct', () => fixture(dir => {
  const file = recordPath(dir); startDelivery(file, 'owner', dir);
  beginPhase(file, 'owner', 'a', '2026-11-16T08:00:00Z'); beginPhase(file, 'owner', 'b', '2026-11-16T08:00:01Z');
  endPhase(file, 'owner', 'a', 'passed', '2026-11-16T08:00:03Z'); endPhase(file, 'owner', 'b', 'failed', '2026-11-16T08:00:04Z');
  const result = spawnSync(process.execPath, ['scripts/delivery.mjs', 'run', '--actor', 'owner', '--phase', 'command-failure', '--', process.execPath, '-e', 'process.exit(7)'], { cwd: root, env: { ...process.env, DELIVERY_RECORD: file }, encoding: 'utf8' });
  assert.equal(result.status, 7); const record = readDelivery(file);
  assert.equal(record.milestones.requested, null); assert.equal(record.phases.at(-1).status, 'failed');
  assert.deepEqual(record.phases.slice(0, 2).map(p => p.duration_ms), [3000, 3000]);
}));
test('hosted guard checks both revisions and rejects bad routes without hiding evidence', async () => {
  const expected = 'a'.repeat(40), target = 'https://example.test/executable-engineering-lab/';
  for (const mode of ['pass', 'wrong-first', 'wrong-last', 'missing-route']) {
    let manifests = 0;
    const record = { requests: [] };
    const fake = async url => {
      if (url.pathname.endsWith('build-information.json')) {
        manifests++;
        const wrong = mode === 'wrong-first' || (mode === 'wrong-last' && manifests === 2);
        return new Response(JSON.stringify({ schema_version: 1, source_commit: wrong ? 'b'.repeat(40) : expected, built_at: '2026-11-16T08:00:00Z' }));
      }
      return new Response('<html><title>Lab</title><a href="/executable-engineering-lab/">Home</a></html>', { status: mode === 'missing-route' ? 404 : 200 });
    };
    if (mode === 'pass') { await verifyHosted(target, expected, record, fake); assert.equal(record.requests.length, 7); }
    else await assert.rejects(() => verifyHosted(target, expected, record, fake), /revision|HTTP 404/);
    if (mode === 'wrong-first') assert.equal(record.requests.length, 1);
    if (mode === 'wrong-last') assert.equal(record.requests.length, 7);
  }
});
test('impact map preserves transitive engineering consumers and full gates for unknown inputs', () => {
  assert.deepEqual(impact(['models/coverage/coverage.ts']).affected, ['engineering', 'site', 'evidence']);
  assert.ok(impact(['future-tool.config']).affected.includes('delivery'));
  assert.ok(impact(['research/v3/note.md']).checks.includes('unit'));
});
test('actual runner retains early revision rejection and refuses output reuse', () => {
  const id = 'guard-test-' + randomUUID(), directory = path.join(root, 'artifacts/runs', id);
  const env = { ...process.env, TEST_RUN_ID: id, EXPECTED_REVISION: '0'.repeat(40), DELIVERY_RECORD: path.join(tmpdir(), 'absent-' + randomUUID()) };
  try {
    const run = () => spawnSync(process.execPath, ['scripts/verify.mjs', '--release'], { cwd: root, env, encoding: 'utf8' });
    assert.equal(run().status, 1);
    const first = readFileSync(path.join(directory, 'run.json'), 'utf8'), data = JSON.parse(first);
    assert.equal(data.status, 'failed'); assert.deepEqual(data.phases.map(p => p.name), ['preflight']);
    assert.equal(run().status, 1); assert.equal(readFileSync(path.join(directory, 'run.json'), 'utf8'), first);
    assert.equal(existsSync(path.join(directory, 'tests.json')), false);
  } finally { rmSync(directory, { recursive: true, force: true }); }
});
