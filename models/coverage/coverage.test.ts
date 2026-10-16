import { describe, expect, it } from 'vitest';
import { calculateCoverage, type CoverageInput } from './coverage.js';
import { evaluateCoverage } from './evaluate.js';
const input: CoverageInput = { area: { width: 100, height: 100 }, sensor: { x: 50, y: 50, radius: 35 } };
describe('MODEL-COV-001 independent geometry checks', () => {
  it('estimates the contained disk within 0.25 percentage points of analytic area', () => {
    const result = calculateCoverage(input);
    expect(Math.abs(result.coveragePercent - Math.PI * 35 ** 2 / 10000 * 100)).toBeLessThan(0.25);
    expect(result).toEqual(calculateCoverage(input));
    expect(result.totalCells).toBe(10000);
    expect(result.coveragePercent).toBe(100 * result.coveredCells / result.totalCells);
    expect(result.method).toBe('cell-center-grid');
  });
  it('covers the entire sampled rectangle with a sufficient radius', () => {
    expect(calculateCoverage({ ...input, sensor: { ...input.sensor, radius: 80 } }).coveragePercent).toBe(100);
  });
  it('treats a zero-radius disk at a cell center as zero area', () => {
    expect(calculateCoverage({ ...input, sensor: { x: 0.5, y: 0.5, radius: 0 } }).coveredCells).toBe(0);
  });
  it('allows an outside center and finds no covered cells when far away', () => {
    expect(calculateCoverage({ ...input, sensor: { x: 1000, y: 1000, radius: 10 } }).coveredCells).toBe(0);
  });
  it('agrees with independent quarter-disk geometry at a corner', () => {
    const corner = calculateCoverage({ ...input, sensor: { x: 0, y: 0, radius: 35 } });
    expect(Math.abs(corner.coveragePercent - Math.PI * 35 ** 2 / 4 / 10000 * 100)).toBeLessThan(0.25);
    expect(corner.coveragePercent).toBeLessThan(calculateCoverage(input).coveragePercent);
  });
  it('uses both dimensions of a non-square area', () => {
    const result = calculateCoverage({ area: { width: 200, height: 100 }, sensor: { x: 100, y: 50, radius: 35 } });
    expect(Math.abs(result.coveragePercent - Math.PI * 35 ** 2 / 20000 * 100)).toBeLessThan(0.25);
  });
  it('includes cell centers exactly on the circular boundary', () => {
    const result = calculateCoverage({ ...input, sensor: { x: 0, y: 0.5, radius: 0.5 } });
    expect(result.coveredCells).toBe(1);
  });
  for (const field of ['width', 'height', 'x', 'y', 'radius'] as const) {
    for (const value of [NaN, Infinity, -Infinity]) {
      it(`rejects ${field}=${value}`, () => {
        const invalid = structuredClone(input);
        if (field === 'width' || field === 'height') invalid.area[field] = value;
        else invalid.sensor[field] = value;
        expect(() => calculateCoverage(invalid)).toThrow();
      });
    }
  }
  it.each([{ width: 0, height: 100 }, { width: -1, height: 100 }, { width: 100, height: 0 }, { width: 100, height: -1 }])('rejects invalid dimensions %o', area => {
    expect(() => calculateCoverage({ ...input, area })).toThrow();
  });
  it('rejects negative radius', () => {
    expect(() => calculateCoverage({ ...input, sensor: { ...input.sensor, radius: -1 } })).toThrow();
  });
});
describe('requirement evaluator', () => {
  const result = calculateCoverage(input);
  it('passes equality and compares unrounded values on both sides', () => {
    expect(evaluateCoverage(result, result.coveragePercent)).toEqual({ pass: true, marginPercentagePoints: 0 });
    expect(evaluateCoverage(result, result.coveragePercent - 0.0001).pass).toBe(true);
    expect(evaluateCoverage(result, result.coveragePercent + 0.0001).pass).toBe(false);
  });
  it.each([NaN, Infinity, -1, 101])('rejects invalid threshold %s', threshold => {
    expect(() => evaluateCoverage(result, threshold)).toThrow();
  });
  it('rejects invalid measured percentage', () => {
    expect(() => evaluateCoverage({ ...result, coveragePercent: NaN }, 50)).toThrow();
  });
});
