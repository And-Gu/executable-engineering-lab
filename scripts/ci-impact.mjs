import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { root } from './delivery-environment.mjs';

// Advisory until later runs demonstrate that narrower gates preserve coverage.
export function impact(files) {
  const affected = new Set();
  for (const file of files) {
    if (/^(engineering|schemas|models|exercises)\//.test(file)) ['engineering', 'site', 'evidence'].forEach(x => affected.add(x));
    else if (/^site\//.test(file)) affected.add('site');
    else if (/^(research|project|chapters)\/.*\.md$/.test(file)) affected.add('editorial-isolation');
    else ['engineering', 'site', 'evidence', 'delivery'].forEach(x => affected.add(x));
  }
  return { affected: [...affected], checks: ['typecheck', 'build', 'unit', 'evidence', 'proposals'], policy: 'full required gate; impact is advisory', files };
}
if (process.argv[1] && fileURLToPath(import.meta.url) === path.resolve(process.argv[1])) {
  const base = process.argv[2] || process.env.BASE_REVISION || 'origin/main';
  const files = execFileSync('git', ['diff', '--name-only', base], { cwd: root, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  const untracked = execFileSync('git', ['ls-files', '--others', '--exclude-standard'], { cwd: root, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  console.log(JSON.stringify(impact([...new Set([...files, ...untracked])]), null, 2));
}
