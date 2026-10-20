import { needSchema, requirementSchema, scenarioSchema, manifestSchema } from './engineering.js';
import { GRID_WIDTH, GRID_HEIGHT, MODEL_VERSION } from '../models/coverage/coverage.js';

/** Schema and relationship checks only; safe for CLI or browser use. */
export function validateDefinitions(raw: { need: unknown; requirement: unknown; scenario: unknown; manifest: unknown }) {
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
  for (const [path, expected] of [
    [manifest.model.source, 'models/coverage/coverage.ts'],
    [manifest.test.source, 'models/coverage/verification.test.ts'],
  ]) {
    if (path !== expected) throw new Error(`Missing or invalid source path: ${path}`);
  }
  link(manifest.model.version, MODEL_VERSION);
  link(manifest.model.boundary_rule, 'distance <= radius');
  if (manifest.model.grid_width !== GRID_WIDTH || manifest.model.grid_height !== GRID_HEIGHT) {
    throw new Error('Manifest grid does not match executable model');
  }
  return { need, requirement, scenario, manifest };
}
export type SourceDefinitions = ReturnType<typeof validateDefinitions>;
