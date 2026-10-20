import { proposalSchema } from '../schemas/proposal.js';
import { validateDefinitions, type SourceDefinitions } from '../schemas/sources.js';
import { calculateCoverage } from '../models/coverage/coverage.js';
import { evaluateCoverage } from '../models/coverage/evaluate.js';

type Difference = { field: string; before: string | number; after: string | number };
function evaluate(definitions: SourceDefinitions) {
  const inputs = { area: definitions.scenario.area, sensor: definitions.scenario.sensor };
  const coverage = calculateCoverage(inputs);
  return { inputs, thresholdPercent: definitions.requirement.threshold_percent, coverage,
    evaluation: evaluateCoverage(coverage, definitions.requirement.threshold_percent) };
}

/** One bounded, unapproved proposal. No I/O, mutation, persistence or alternate coverage formula. */
export function analyzeProposal(rawBaseline: Parameters<typeof validateDefinitions>[0], rawProposal: unknown) {
  const baseline = validateDefinitions(rawBaseline);
  const proposal = proposalSchema.parse(rawProposal);
  for (const [field, actual, expected] of [
    ['requirement_id', proposal.baseline.requirement_id, baseline.requirement.id],
    ['scenario_id', proposal.baseline.scenario_id, baseline.scenario.id],
    ['model_id', proposal.baseline.model_id, baseline.manifest.model.id],
    ['model_version', proposal.baseline.model_version, baseline.manifest.model.version],
  ]) {
    if (actual !== expected) throw new Error(`Proposal baseline.${field}: ${actual}; expected ${expected}`);
  }
  // This V0 exercise supports only the existing controlled requirement wording.
  // Fail explicitly rather than silently publish a contradictory statement.
  const criterion = /at least ([0-9]+(?:\.[0-9]+)?) percent/g;
  const matches = [...baseline.requirement.statement.matchAll(criterion)];
  if (matches.length !== 1 || Number(matches[0][1]) !== baseline.requirement.threshold_percent) {
    throw new Error('Requirement statement and threshold are inconsistent or unsupported for this exercise');
  }
  const proposed = structuredClone(baseline);
  const differences: Difference[] = [];
  const change = proposal.change;
  if (change.kind === 'requirement-threshold') {
    const old = baseline.requirement;
    if (change.threshold_percent !== old.threshold_percent) {
      proposed.requirement.threshold_percent = change.threshold_percent;
      proposed.requirement.statement = old.statement.replace(criterion, `at least ${change.threshold_percent} percent`);
      proposed.requirement.threshold_basis = `Unapproved teaching proposal: ${proposal.rationale}`;
    }
    for (const field of ['threshold_percent', 'statement', 'threshold_basis'] as const) {
      if (old[field] !== proposed.requirement[field]) differences.push({ field: `requirement.${field}`, before: old[field], after: proposed.requirement[field] });
    }
  } else {
    proposed.scenario.sensor.radius = change.radius;
    if (baseline.scenario.sensor.radius !== change.radius) differences.push({ field: 'scenario.sensor.radius', before: baseline.scenario.sensor.radius, after: change.radius });
  }
  // Validate the complete derived definitions before any calculation.
  const validated = validateDefinitions(proposed);
  return { proposal, baseline, proposed: validated, differences,
    calculation: { baseline: evaluate(baseline), proposed: evaluate(validated) } };
}
