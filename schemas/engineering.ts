import { z } from 'zod';
const finite = z.number(); // Zod 4 numbers reject NaN and infinities.
const text = z.string().min(1);
export const areaSchema = z.strictObject({ width: finite.positive(), height: finite.positive() });
export const sensorSchema = z.strictObject({ x: finite, y: finite, radius: finite.nonnegative() });
export const coverageInputSchema = z.strictObject({ area: areaSchema, sensor: sensorSchema });
export const percentSchema = finite.min(0).max(100);
export const needSchema = z.strictObject({ id: text, title: text, statement: text });
export const requirementSchema = z.strictObject({
  id: text, title: text, source_need: text, statement: text,
  threshold_percent: percentSchema, threshold_basis: text,
  verification: z.strictObject({ method: z.literal('simulation'), model_id: text, test_id: text, scenario_id: text }),
});
export const scenarioSchema = coverageInputSchema.extend({
  id: text, title: text, units: z.literal('model-units'), model_id: text,
});
export const manifestSchema = z.strictObject({
  model: z.strictObject({ id: text, version: text, source: text,
    method: z.literal('cell-center-grid'), grid_width: z.number().int().positive(),
    grid_height: z.number().int().positive(), boundary_rule: text, assumptions: z.array(text).min(1) }),
  test: z.strictObject({ id: text, source: text, requirement_id: text, scenario_id: text, model_id: text }),
});
