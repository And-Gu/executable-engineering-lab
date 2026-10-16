import { describe, expect, it } from 'vitest';
import { loadSources, validateSources, readYaml } from './sources.js';
import { parse } from 'yaml';
const raw = () => ({ need: readYaml('engineering/needs/NEED-001.yaml'),
  requirement: readYaml('engineering/requirements/REQ-COV-001.yaml'),
  scenario: readYaml('engineering/scenarios/SCN-001.yaml'), manifest: readYaml('engineering/manifest.yaml') });
describe('canonical source validation', () => {
  it('validates every committed record and relationship', () => expect(() => loadSources()).not.toThrow());
  it('rejects missing required fields and unknown fields', () => {
    const records = loadSources();
    expect(() => validateSources({ ...records, scenario: { id: 'SCN-001' } })).toThrow();
    expect(() => validateSources({ ...records, need: { ...records.need, typo: true } })).toThrow();
  });
  it('rejects non-finite YAML model parameters', () => {
    const records = raw();
    const scenario = parse('id: SCN-001\ntitle: Invalid\narea: {width: .inf, height: 100}\nsensor: {x: 50, y: 50, radius: 35}\nunits: model-units\nmodel_id: MODEL-COV-001');
    expect(() => validateSources({ ...records, scenario })).toThrow();
  });
  it('rejects duplicate source IDs', () => {
    const records = loadSources();
    records.need.id = records.scenario.id;
    expect(() => validateSources(records)).toThrow(/Duplicate/);
  });
  it.each(['source_need', 'model_id', 'test_id', 'scenario_id'])('rejects unknown requirement relationship %s', field => {
    const records = loadSources();
    if (field === 'source_need') records.requirement.source_need = 'UNKNOWN';
    else records.requirement.verification[field as 'model_id' | 'test_id' | 'scenario_id'] = 'UNKNOWN';
    expect(() => validateSources(records)).toThrow(/Broken relationship/);
  });
  it('rejects unknown scenario model', () => {
    const records = loadSources(); records.scenario.model_id = 'UNKNOWN';
    expect(() => validateSources(records)).toThrow(/Broken relationship/);
  });
  it.each(['requirement_id', 'scenario_id', 'model_id'] as const)('rejects broken test %s', field => {
    const records = loadSources(); records.manifest.test[field] = 'UNKNOWN';
    expect(() => validateSources(records)).toThrow(/Broken relationship/);
  });
  it('rejects missing source files', () => {
    const records = loadSources(); records.manifest.test.source = 'missing.ts';
    expect(() => validateSources(records)).toThrow(/source path/);
  });
  it('rejects manifest drift from executable grid and model version', () => {
    const records = loadSources(); records.manifest.model.grid_width = 10;
    expect(() => validateSources(records)).toThrow(/grid/);
    records.manifest.model.grid_width = 100; records.manifest.model.version = '99';
    expect(() => validateSources(records)).toThrow(/Broken relationship/);
  });
});
