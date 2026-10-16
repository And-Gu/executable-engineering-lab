import { coverageInputSchema } from '../../schemas/engineering.js';
import type { z } from 'zod';
export type CoverageInput = z.infer<typeof coverageInputSchema>;
export type Area = CoverageInput['area'];
export type Sensor = CoverageInput['sensor'];
export const MODEL_VERSION = '0.1.0';
export const GRID_WIDTH = 100;
export const GRID_HEIGHT = 100;
export type CoverageResult = {
  coveredCells: number; totalCells: number; coveragePercent: number;
  method: 'cell-center-grid'; gridWidth: number; gridHeight: number;
};
/** Fixed 100×100 equal-area cell centers; disk boundary is inclusive.
 * An estimate of area fraction, not detection probability or exact geometry.
 */
export function calculateCoverage(input: CoverageInput): CoverageResult {
  const { area, sensor } = coverageInputSchema.parse(input);
  let coveredCells = 0;
  // Radius zero is explicitly zero coverage, even at a cell center.
  if (sensor.radius > 0) {
    for (let row = 0; row < GRID_HEIGHT; row++) {
      const y = ((row + 0.5) / GRID_HEIGHT) * area.height;
      for (let col = 0; col < GRID_WIDTH; col++) {
        const x = ((col + 0.5) / GRID_WIDTH) * area.width;
        // hypot avoids overflow from squaring otherwise valid finite inputs.
        if (Math.hypot(x - sensor.x, y - sensor.y) <= sensor.radius) coveredCells++;
      }
    }
  }
  const totalCells = GRID_WIDTH * GRID_HEIGHT;
  return { coveredCells, totalCells, coveragePercent: 100 * coveredCells / totalCells,
    method: 'cell-center-grid', gridWidth: GRID_WIDTH, gridHeight: GRID_HEIGHT };
}
