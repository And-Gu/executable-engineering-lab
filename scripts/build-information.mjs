import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { root, checkout } from './delivery-environment.mjs';
const state = checkout();
writeFileSync(path.join(root, 'dist/build-information.json'), JSON.stringify({
  schema_version: 1, source_commit: state.dirty ? null : state.revision, built_at: new Date().toISOString(),
}, null, 2) + '\n');
console.log(`Build revision: ${state.dirty ? 'working-tree preview' : state.revision}`);
