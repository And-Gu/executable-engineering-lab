import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { runTwoCycles } from '../../../models/intersection/queue.mjs';

const root = new URL('../../../', import.meta.url);
const sources = {
  inputs: 'project/v3/case-study/model-inputs-v1.json',
  calculation: 'models/intersection/queue.mjs',
  reference_cycle: 'project/v3/case-study/trace-v1.csv',
  runner: 'project/v3/case-study/run-two-cycles.mjs',
};
const read = path => readFileSync(new URL(path, root));
const model = JSON.parse(read(sources.inputs));
const record = {
  id: 'INT-RUN-T1-TWO-CYCLES',
  model: model.id,
  revision: model.revision,
  scope: 'Synthetic fixed-phase simulation. Each scenario repeats its own arrivals. Queues carry across the boundary.',
  unit: 'vehicles per direction after service in an abstract slot',
  event_order: model.event_order,
  sources: Object.fromEntries(Object.entries(sources).map(([name, path]) => [
    name, { path, sha256: createHash('sha256').update(read(path)).digest('hex') },
  ])),
  scenarios: model.scenarios.map(({ id, arrivals }) => {
    const rows = runTwoCycles(model, arrivals);
    const boundary = model.horizon_slots;
    return {
      id, after_first_cycle: rows[boundary - 1],
      before_next_arrivals: rows[boundary].opening_queue,
      first_slot_of_second_cycle: rows[boundary], after_second_cycle: rows.at(-1),
    };
  }),
};
process.stdout.write(JSON.stringify(record, null, 2) + '\n');
