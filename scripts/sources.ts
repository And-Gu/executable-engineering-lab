import { readFileSync, existsSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { parse } from 'yaml';
import { needSchema, requirementSchema, scenarioSchema, manifestSchema } from '../schemas/engineering.js';
import { GRID_WIDTH, GRID_HEIGHT, MODEL_VERSION } from '../models/coverage/coverage.js';
// Commands run from the repository root; this remains stable after Astro bundling.
export const root = resolve(process.cwd());
export function readYaml(path: string): unknown {
  return parse(readFileSync(resolve(root, path), 'utf8'), { uniqueKeys: true });
}
export function validateSources(raw: { need: unknown; requirement: unknown; scenario: unknown; manifest: unknown }) {
  const need = needSchema.parse(raw.need);
  const requirement = requirementSchema.parse(raw.requirement);
  const scenario = scenarioSchema.parse(raw.scenario);
  const manifest = manifestSchema.parse(raw.manifest);
  const records = [need, requirement, scenario, manifest.model, manifest.test];
  const ids = new Set(records.map(record => record.id));
  if (ids.size !== records.length) throw new Error('Duplicate source ID');
  const link = (actual: string, expected: string) => {
    if (actual !== expected) throw new Error(`Broken relationship: ${actual}; expected ${expected}`);
  };
  link(need.id, 'NEED-001'); link(requirement.id, 'REQ-COV-001'); link(scenario.id, 'SCN-001');
  link(manifest.model.id, 'MODEL-COV-001'); link(manifest.test.id, 'TEST-COV-001');
  link(requirement.source_need, need.id);
  link(requirement.verification.scenario_id, scenario.id);
  link(requirement.verification.model_id, manifest.model.id);
  link(requirement.verification.test_id, manifest.test.id);
  link(scenario.model_id, manifest.model.id);
  link(manifest.test.requirement_id, requirement.id);
  link(manifest.test.scenario_id, scenario.id);
  link(manifest.test.model_id, manifest.model.id);
  for (const path of [manifest.model.source, manifest.test.source]) {
    const rel = relative(root, resolve(root, path));
    if (rel.startsWith('..') || isAbsolute(rel) || !existsSync(resolve(root, path))) {
      throw new Error(`Missing or invalid source path: ${path}`);
    }
  }
  link(manifest.model.source, 'models/coverage/coverage.ts');
  link(manifest.test.source, 'models/coverage/verification.test.ts');
  link(manifest.model.version, MODEL_VERSION);
  link(manifest.model.boundary_rule, 'distance <= radius');
  if (manifest.model.grid_width !== GRID_WIDTH || manifest.model.grid_height !== GRID_HEIGHT) {
    throw new Error('Manifest grid does not match executable model');
  }
  return { need, requirement, scenario, manifest };
}
export function loadSources() {
  return validateSources({ need: readYaml('engineering/needs/NEED-001.yaml'),
    requirement: readYaml('engineering/requirements/REQ-COV-001.yaml'),
    scenario: readYaml('engineering/scenarios/SCN-001.yaml'), manifest: readYaml('engineering/manifest.yaml') });
}
