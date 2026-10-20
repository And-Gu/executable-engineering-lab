import { readFileSync, existsSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { parse } from 'yaml';
import { validateDefinitions } from '../schemas/sources.js';
// Commands run from the repository root; this remains stable after Astro bundling.
export const root = resolve(process.cwd());
export function readYaml(path: string): unknown {
  return parse(readFileSync(resolve(root, path), 'utf8'), { uniqueKeys: true });
}
export function validateSources(raw: Parameters<typeof validateDefinitions>[0]) {
  const definitions = validateDefinitions(raw);
  for (const path of [definitions.manifest.model.source, definitions.manifest.test.source]) {
    const rel = relative(root, resolve(root, path));
    if (rel.startsWith('..') || isAbsolute(rel) || !existsSync(resolve(root, path))) {
      throw new Error(`Missing or invalid source path: ${path}`);
    }
  }
  return definitions;
}
export function loadSources() {
  return validateSources({ need: readYaml('engineering/needs/NEED-001.yaml'),
    requirement: readYaml('engineering/requirements/REQ-COV-001.yaml'),
    scenario: readYaml('engineering/scenarios/SCN-001.yaml'), manifest: readYaml('engineering/manifest.yaml') });
}
