import { mkdtempSync, mkdirSync, cpSync, writeFileSync, existsSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { expect, it } from 'vitest';
import { root } from './sources.js';

it.each(['broken reference', 'duplicate fixture IDs', 'duplicate YAML keys'])('CLI rejects %s and clears stale proposal reports', mode => {
  const temp = mkdtempSync(join(tmpdir(), 'proposal-exercise-'));
  try {
    cpSync(resolve(root, 'engineering'), join(temp, 'engineering'), { recursive: true });
    mkdirSync(join(temp, 'models/coverage'), { recursive: true });
    // These files are checked for existence, not imported: calculations use the actual repo modules.
    writeFileSync(join(temp, 'models/coverage/coverage.ts'), '');
    writeFileSync(join(temp, 'models/coverage/verification.test.ts'), '');
    mkdirSync(join(temp, 'exercises/proposals'), { recursive: true });
    cpSync(resolve(root, 'exercises/proposals/threshold-35.yaml'), join(temp, 'exercises/proposals/one.yaml'));
    if (mode === 'broken reference') {
      writeFileSync(join(temp, 'engineering/needs/NEED-001.yaml'), 'id: UNKNOWN\ntitle: Invalid\nstatement: Temporary invalid source\n');
    } else if (mode === 'duplicate fixture IDs') {
      cpSync(join(temp, 'exercises/proposals/one.yaml'), join(temp, 'exercises/proposals/two.yaml'));
    } else {
      writeFileSync(join(temp, 'exercises/proposals/one.yaml'), 'id: ONE\nid: TWO\n');
    }
    mkdirSync(join(temp, 'artifacts/proposals'), { recursive: true });
    writeFileSync(join(temp, 'artifacts/proposals/stale.json'), '{}');
    const run = spawnSync(process.execPath, ['--import', import.meta.resolve('tsx'), resolve(root, 'scripts/proposals.ts')], { cwd: temp, encoding: 'utf8' });
    expect(run.status).not.toBe(0);
    expect(run.stderr).toMatch(mode === 'broken reference' ? /Broken relationship/ : mode === 'duplicate fixture IDs' ? /Duplicate proposal ID/ : /unique/);
    expect(existsSync(join(temp, 'artifacts/proposals'))).toBe(false);
  } finally {
    rmSync(temp, { recursive: true, force: true });
  }
});
