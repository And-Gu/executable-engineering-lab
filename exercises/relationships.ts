import { validateDefinitions } from '../schemas/sources.js';

/** The eight supported V0 definition relationships, not execution provenance or impact decisions.
 * Validate the complete source set before projecting; never hide an unresolved reference.
 * Field names are relative to the source record identified by `from`.
 */
export function projectRelationships(raw: Parameters<typeof validateDefinitions>[0]) {
  const { requirement, scenario, manifest } = validateDefinitions(raw);
  return [
  { from: requirement.id, field: 'source_need', to: requirement.source_need, meaning: 'Motivating operational need' },
  { from: requirement.id, field: 'verification.scenario_id', to: requirement.verification.scenario_id, meaning: 'Reference inputs for verification' },
  { from: requirement.id, field: 'verification.model_id', to: requirement.verification.model_id, meaning: 'Model used to estimate the measure' },
  { from: requirement.id, field: 'verification.test_id', to: requirement.verification.test_id, meaning: 'Registered reference test' },
  { from: scenario.id, field: 'model_id', to: scenario.model_id, meaning: 'Model interpreting these inputs' },
  { from: manifest.test.id, field: 'requirement_id', to: manifest.test.requirement_id, meaning: 'Criterion evaluated by the reference test' },
  { from: manifest.test.id, field: 'scenario_id', to: manifest.test.scenario_id, meaning: 'Reference scenario evaluated by the test' },
  { from: manifest.test.id, field: 'model_id', to: manifest.test.model_id, meaning: 'Executable model used by the test' },
];
}
