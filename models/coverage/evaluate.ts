import { percentSchema } from '../../schemas/engineering.js';
import type { CoverageResult } from './coverage.js';
/** Compare the unrounded estimate. Equality passes. */
export function evaluateCoverage(result: CoverageResult, requiredPercent: number) {
  const measured = percentSchema.parse(result.coveragePercent);
  const threshold = percentSchema.parse(requiredPercent);
  return { pass: measured >= threshold, marginPercentagePoints: measured - threshold };
}
