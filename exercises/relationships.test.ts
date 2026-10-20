import { describe, expect, it } from 'vitest';
import { projectRelationships } from './relationships.js';
import { loadSources } from '../scripts/sources.js';
import { analyzeProposal } from './proposal.js';
import { readYaml } from '../scripts/sources.js';

const bindings = [
  ['requirement', 'source_need', 'need'],
  ['requirement', 'verification.scenario_id', 'scenario'],
  ['requirement', 'verification.model_id', 'model'],
  ['requirement', 'verification.test_id', 'test'],
  ['scenario', 'model_id', 'model'],
  ['test', 'requirement_id', 'requirement'],
  ['test', 'scenario_id', 'scenario'],
  ['test', 'model_id', 'model'],
] as const;
function records() {
  const definitions = loadSources();
  return { definitions, byKind: { ...definitions, model: definitions.manifest.model, test: definitions.manifest.test } };
}

describe('bounded V0 definition relationship projection', () => {
  it('covers every supported role with the actual source field and resolvable target', () => {
    const { definitions, byKind } = records();
    const before = structuredClone(definitions);
    const links = projectRelationships(definitions);
    expect(links).toHaveLength(bindings.length);
    for (const [kind, field, target] of bindings) {
      const link = links.find(row => row.from === byKind[kind].id && row.field === field);
      expect(link?.to).toBe(byKind[target].id);
      expect(link?.meaning).toBeTruthy();
    }
    expect(definitions).toEqual(before);
  });

  it.each(bindings)('rejects unresolved %s.%s instead of omitting it', (kind, field) => {
    const { definitions, byKind } = records();
    const parts = field.split('.');
    let record = byKind[kind] as unknown as Record<string, unknown>;
    for (const part of parts.slice(0, -1)) record = record[part] as Record<string, unknown>;
    record[parts.at(-1)!] = 'MISSING-RECORD';
    expect(() => projectRelationships(definitions)).toThrow(/Broken relationship: MISSING-RECORD/);
  });

  it('rejects unsupported relationship fields rather than silently dropping them', () => {
    const definitions = loadSources();
    Object.assign(definitions.requirement, { supersedes: 'REQ-OTHER' });
    expect(() => projectRelationships(definitions)).toThrow();
  });

  it.each(['threshold-35', 'radius-45'])('does not confuse stable connectivity with unchanged definitions or evidence: %s', fixture => {
    const analysis = analyzeProposal(loadSources(), readYaml(`exercises/proposals/${fixture}.yaml`));
    expect(projectRelationships(analysis.proposed)).toEqual(projectRelationships(analysis.baseline));
    expect(analysis.differences.length).toBeGreaterThan(0);
    expect(analysis.proposed).not.toEqual(analysis.baseline);
    // A definition-only view must never invent execution metadata or approval.
    for (const row of projectRelationships(analysis.proposed)) {
      expect(Object.keys(row).sort()).toEqual(['field', 'from', 'meaning', 'to']);
    }
  });
});
