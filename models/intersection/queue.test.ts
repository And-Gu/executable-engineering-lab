import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import inputs from '../../project/v3/case-study/model-inputs-v1.json';
import { moveArrival, runQueue } from './queue.mjs';

const trace = readFileSync(new URL('../../project/v3/case-study/trace-v1.csv', import.meta.url), 'utf8')
  .trim().split(/\r?\n/).slice(1);
const clustered = inputs.scenarios.find(s => s.id === 'B')!.arrivals;

describe('fixed-phase intersection experiment', () => {
  it('matches every arrival, phase, departure and queue in the independent reference trace', () => {
    const calculated = inputs.scenarios.flatMap(scenario => runQueue(inputs, scenario.arrivals)
      .map(({ slot, phase, arrival, departures, queue }) =>
        [scenario.id, slot, phase, arrival.NS, arrival.EW, departures.NS, departures.EW, queue.NS, queue.EW].join(',')));
    expect(calculated).toEqual(trace);
  });

  it('moves one NS arrival to the last NS green and preserves the baseline', () => {
    const edited = moveArrival(clustered, 'NS', 3, 2);
    expect(runQueue(inputs, edited).at(-1)?.queue).toEqual({ NS: 1, EW: 0 });
    expect(runQueue(inputs, clustered).at(-1)?.queue).toEqual({ NS: 2, EW: 0 });
    expect(edited.reduce((n, row) => n + row.NS + row.EW, 0)).toBe(4);
  });

  it('rejects an empty origin, an unchanged slot and slots outside the horizon', () => {
    expect(() => moveArrival(clustered, 'EW', 3, 2)).toThrow();
    expect(() => moveArrival(clustered, 'NS', 3, 3)).toThrow();
    expect(() => moveArrival(clustered, 'NS', 3, 9)).toThrow();
    expect(() => moveArrival(clustered, 'NS', 0, 2)).toThrow();
  });

  it('rejects malformed records before reporting a result', () => {
    for (const count of [-1, 0.5]) {
      expect(() => runQueue(inputs, [{ NS: count, EW: 0 }, ...clustered.slice(1)])).toThrow();
    }
    expect(() => runQueue(inputs, clustered.slice(1))).toThrow();
    expect(() => runQueue({ ...inputs, phase_sequence: ['UNKNOWN', ...inputs.phase_sequence.slice(1)] }, clustered)).toThrow();
  });
});
