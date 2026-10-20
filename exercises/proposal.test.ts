import { describe, expect, it } from 'vitest';
import { analyzeProposal } from './proposal.js';
import { loadProposalAnalyses } from '../scripts/proposal-sources.js';
import { loadSources, readYaml } from '../scripts/sources.js';
import { calculateCoverage } from '../models/coverage/coverage.js';

const criterion = () => readYaml('exercises/proposals/threshold-35.yaml') as Record<string, unknown>;
const radius = () => readYaml('exercises/proposals/radius-45.yaml') as Record<string, unknown>;
describe('isolated V0 proposal analysis', () => {
  it('validates every committed fixture and leaves canonical sources intact', () => {
    const before = loadSources();
    const snapshot = structuredClone(before);
    const analyses = loadProposalAnalyses();
    expect(analyses.map(item => item.analysis.proposal.id)).toEqual(expect.arrayContaining(['PROPOSAL-RADIUS-45', 'PROPOSAL-THRESHOLD-35']));
    for (const item of analyses) analyzeProposal(before, item.analysis.proposal);
    expect(before).toEqual(snapshot);
    expect(loadSources()).toEqual(snapshot);
    expect(snapshot.requirement.threshold_percent).toBe(50);
    expect(snapshot.scenario.sensor.radius).toBe(35);
  });
  it('changes the criterion and its text without changing coverage or the scenario', () => {
    const a = analyzeProposal(loadSources(), criterion());
    expect(a.proposed.scenario).toEqual(a.baseline.scenario);
    expect(a.calculation.proposed.coverage).toEqual(a.calculation.baseline.coverage);
    expect(a.calculation.baseline.evaluation.pass).toBe(false);
    expect(a.calculation.proposed.evaluation.pass).toBe(true);
    expect(a.proposed.requirement.statement).toContain('at least 35 percent');
    expect(a.proposed.requirement.statement).not.toContain('at least 50 percent');
    expect(a.proposed.requirement.threshold_basis).toContain('Unapproved');
    expect(a.proposed.requirement.source_need).toBe(a.baseline.requirement.source_need);
    expect(a.differences.map(d => d.field)).toContain('requirement.statement');
  });
  it('recalculates a larger footprint under the unchanged requirement', () => {
    const a = analyzeProposal(loadSources(), radius());
    expect(a.proposed.requirement).toEqual(a.baseline.requirement);
    expect(a.proposed.scenario.sensor.x).toBe(a.baseline.scenario.sensor.x);
    expect(a.proposed.scenario.sensor.y).toBe(a.baseline.scenario.sensor.y);
    const independentGeometry = 100 * Math.PI * 45 ** 2 / 10000;
    expect(Math.abs(a.calculation.proposed.coverage.coveragePercent - independentGeometry)).toBeLessThan(0.25);
    expect(a.calculation.proposed.evaluation.pass).toBe(true);
    expect(a.calculation.proposed.coverage.coveragePercent).toBeGreaterThan(a.calculation.baseline.coverage.coveragePercent);
    expect(a.proposed.manifest).toEqual(a.baseline.manifest);
  });
  it('passes exact equality on a proposed criterion without rounding', () => {
    const baseline = loadSources();
    const measured = calculateCoverage({ area: baseline.scenario.area, sensor: baseline.scenario.sensor });
    const fixture = { ...criterion(), change: { kind: 'requirement-threshold', threshold_percent: measured.coveragePercent } };
    expect(analyzeProposal(baseline, fixture).calculation.proposed.evaluation).toEqual({ pass: true, marginPercentagePoints: 0 });
  });
  it('accepts zero radius as a valid zero-coverage proposal', () => {
    const a = analyzeProposal(loadSources(), { ...radius(), change: { kind: 'sensor-radius', radius: 0 } });
    expect(a.calculation.proposed.coverage.coveragePercent).toBe(0);
    expect(a.calculation.proposed.evaluation.pass).toBe(false);
  });
  it.each([NaN, Infinity, -Infinity, -1, 101])('rejects invalid threshold %s', value => {
    expect(() => analyzeProposal(loadSources(), { ...criterion(), change: { kind: 'requirement-threshold', threshold_percent: value } })).toThrow();
  });
  it.each([NaN, Infinity, -Infinity, -1])('rejects invalid radius %s', value => {
    expect(() => analyzeProposal(loadSources(), { ...radius(), change: { kind: 'sensor-radius', radius: value } })).toThrow();
  });
  it('rejects unsupported edits, multi-field patches and missing rationale', () => {
    const b = loadSources();
    expect(() => analyzeProposal(b, { ...criterion(), change: { kind: 'sensor-count', count: 2 } })).toThrow();
    expect(() => analyzeProposal(b, { ...criterion(), change: { kind: 'requirement-threshold', threshold_percent: 35, radius: 45 } })).toThrow();
    expect(() => analyzeProposal(b, { ...criterion(), rationale: '' })).toThrow();
    expect(() => analyzeProposal(b, { ...criterion(), status: 'approved' })).toThrow();
  });
  it.each(['requirement_id', 'scenario_id', 'model_id', 'model_version'])('rejects a mismatched fixture baseline %s', field => {
    const fixture = criterion();
    fixture.baseline = { ...(fixture.baseline as Record<string, string>), [field]: 'UNKNOWN' };
    expect(() => analyzeProposal(loadSources(), fixture)).toThrow(/Proposal baseline/);
  });
  it('rejects broken relationships in a temporary copy before returning an analysis', () => {
    const b = loadSources(); b.requirement.source_need = 'UNKNOWN';
    expect(() => analyzeProposal(b, criterion())).toThrow(/Broken relationship/);
    expect(loadSources().requirement.source_need).toBe('NEED-001');
  });
  it('rejects malformed definitions, invalid numeric parameters and contradictory criterion text', () => {
    const b = loadSources();
    expect(() => analyzeProposal({ ...b, scenario: {} }, criterion())).toThrow();
    b.scenario.area.width = Infinity;
    expect(() => analyzeProposal(b, criterion())).toThrow();
    const inconsistent = loadSources(); inconsistent.requirement.statement = 'Cover at least 70 percent.';
    expect(() => analyzeProposal(inconsistent, criterion())).toThrow(/statement and threshold/);
  });
  it('produces deterministic analyses without runtime metadata', () => {
    expect(analyzeProposal(loadSources(), criterion())).toEqual(analyzeProposal(loadSources(), criterion()));
  });
});
