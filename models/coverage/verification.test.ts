import { expect, it } from 'vitest';
import { loadSources } from '../../scripts/sources.js';
import { calculateCoverage } from './coverage.js';
import { evaluateCoverage } from './evaluate.js';
it('TEST-COV-001: evaluates REQ-COV-001 independently of the site', () => {
  const { requirement, scenario } = loadSources();
  const result = calculateCoverage({ area: scenario.area, sensor: scenario.sensor });
  const evaluation = evaluateCoverage(result, requirement.threshold_percent);
  expect(result.coveragePercent).toBeGreaterThan(38);
  expect(result.coveragePercent).toBeLessThan(39);
  expect(requirement.threshold_percent).toBe(50);
  expect(evaluation.pass).toBe(false);
  expect(evaluation.marginPercentagePoints).toBeLessThan(0);
});
