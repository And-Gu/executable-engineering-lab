import { z } from 'zod';
import { percentSchema, sensorSchema } from './engineering.js';
const text = z.string().trim().min(1);
export const proposalSchema = z.strictObject({
  id: z.string().regex(/^PROPOSAL-[A-Z0-9]+(?:-[A-Z0-9]+)*$/),
  title: text,
  status: z.literal('unapproved'),
  rationale: text,
  baseline: z.strictObject({ requirement_id: text, scenario_id: text, model_id: text, model_version: text }),
  change: z.discriminatedUnion('kind', [
    z.strictObject({ kind: z.literal('requirement-threshold'), threshold_percent: percentSchema }),
    z.strictObject({ kind: z.literal('sensor-radius'), radius: sensorSchema.shape.radius }),
  ]),
});
