import { mkdirSync, openSync, closeSync, unlinkSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { root, preflight, command } from './delivery-environment.mjs';
import { checkBuildOwner } from './delivery-record.mjs';
let lock;
const file = path.join(root, 'artifacts/build.lock');
try {
  checkBuildOwner(); preflight();
  mkdirSync(path.dirname(file), { recursive: true });
  try { lock = openSync(file, 'wx'); }
  catch (error) { if (error.code !== 'EEXIST') throw error; throw new Error('Another build owns artifacts/build.lock. Inspect the writer before removing an abandoned lock.'); }
  writeFileSync(lock, JSON.stringify({ pid: process.pid, started_at: new Date().toISOString() }));
  command('npm', ['run', 'validate']);
  command(process.execPath, ['node_modules/astro/bin/astro.mjs', 'build']);
  command(process.execPath, ['scripts/check-research-isolation.mjs']);
  command(process.execPath, ['scripts/build-information.mjs']);
} catch (error) { console.error(error.message); process.exitCode = 1; }
finally { if (lock !== undefined) { closeSync(lock); unlinkSync(file); } }
