import { mkdirSync, writeFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { root, checkout, preflight, requireRevision, command } from './delivery-environment.mjs';
import { availableChecks, readDelivery, recordPath, claimTask, finishTask, checkBuildOwner } from './delivery-record.mjs';
import { localIdentity, verifyHosted } from './release-identity.mjs';

const { values } = parseArgs({ options: { preview: { type: 'boolean' }, release: { type: 'boolean' }, checks: { type: 'string' }, target: { type: 'string' } } });
const preview = values.preview || (!values.release && !process.env.CI);
const checks = values.checks?.split(',') || ['typecheck', 'build', 'unit', 'evidence', 'proposals'];
let directory, record, claimed;
const save = () => writeFileSync(path.join(directory, 'run.json'), JSON.stringify(record, null, 2) + '\n');
async function phase(name, execute) {
  const entry = { name, started_at: new Date().toISOString(), status: 'running' }, start = performance.now();
  record.phases.push(entry); save();
  try { await execute(); entry.status = 'passed'; }
  catch (error) { entry.status = 'failed'; throw error; }
  finally { entry.finished_at = new Date().toISOString(); entry.duration_ms = Math.round(performance.now() - start); save(); }
}
try {
  if ((values.preview && (values.release || process.env.CI)) || !checks.length || new Set(checks).size !== checks.length || checks.some(c => !availableChecks.includes(c))) throw new Error('Choose supported distinct checks; CI always requires release mode.');
  if (checks.includes('hosted') && (preview || checks.length !== 1 || !values.target)) throw new Error('Hosted verification requires a separate release check with --target.');
  const id = process.env.TEST_RUN_ID || `${new Date().toISOString().replaceAll(':', '-')}-${randomUUID().slice(0, 8)}`;
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_.-]{0,120}$/.test(id)) throw new Error('Invalid TEST_RUN_ID.');
  const parent = path.join(root, 'artifacts/runs'); mkdirSync(parent, { recursive: true });
  directory = path.join(parent, id); mkdirSync(directory); // Never reuse another run's output.
  const initial = checkout(), expected = process.env.EXPECTED_REVISION || initial.revision;
  record = { started_at: new Date().toISOString(), source: initial, expected_revision: expected, preview, checks, status: 'running', phases: [] };
  save(); console.log(`Verification evidence: ${directory}`);
  const delivery = readDelivery();
  if (delivery && !delivery.closed_at) claimed = claimTask(recordPath(), process.env.DELIVERY_ACTOR, process.env.DELIVERY_TASK, { revision: initial.revision, checks, preview, target: values.target, runDirectory: directory });
  if (claimed) record.delivery = claimed;
  await phase('preflight', () => { preflight(root, { dependencies: !checks.includes('hosted') }); if (!preview) requireRevision(expected); if (checks.some(c => ['typecheck', 'build'].includes(c))) checkBuildOwner(); });
  // Build identity is established before the broad test suite can consume it.
  for (const check of ['typecheck', 'build', 'unit', 'evidence', 'proposals', 'hosted'].filter(c => checks.includes(c))) {
    await phase(check, async () => {
      if (check === 'unit') {
        if (!preview && checks.includes('build')) record.build = localIdentity(expected);
        command(process.execPath, ['--test', 'scripts/delivery-tests.mjs']);
        command('npm', ['run', 'test', '--', '--reporter=default', '--reporter=json', `--outputFile.json=${path.join(directory, 'tests.json')}`]);
      } else if (check === 'hosted') {
        record.hosted = { target: values.target, requests: [] };
        await verifyHosted(values.target, expected, record.hosted);
      } else command('npm', ['run', check], ['evidence', 'proposals'].includes(check) ? { EVIDENCE_DIR: directory } : {});
    });
  }
  await phase('revision-after', () => {
    if (checkout().revision !== initial.revision) throw new Error('Checkout changed during verification.');
    if (!preview) { requireRevision(expected); if (checks.includes('build')) record.build = localIdentity(expected); }
  });
  record.status = 'passed';
} catch (error) {
  console.error(error.message); process.exitCode = 1;
  if (record) { record.status = 'failed'; record.error = error.message; }
} finally {
  if (record) { record.finished_at = new Date().toISOString(); save(); }
  if (claimed) finishTask(recordPath(), claimed.task, record.status);
}
