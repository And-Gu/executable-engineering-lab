import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import inputs from '../../project/v3/case-study/model-inputs-v1.json';
import { moveArrival, runQueue, runTwoCycles } from './queue.mjs';

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

  it('preserves the reference cycle and carries both queues through the second cycle', () => {
    const firstCycle: string[] = [];
    for (const scenario of inputs.scenarios) {
      const rows = runTwoCycles(inputs, scenario.arrivals);
      for (const { slot, phase, arrival, departures, queue } of rows.slice(0, 8)) {
        firstCycle.push([scenario.id, slot, phase, arrival.NS, arrival.EW, departures.NS, departures.EW, queue.NS, queue.EW].join(','));
      }
      expect(rows).toHaveLength(16);
      expect(rows[8].opening_queue).toEqual(rows[7].queue);
      expect(rows[8].opening_queue).toEqual({ NS: scenario.id === 'A' ? 1 : 2, EW: 0 });
      expect(rows[8].departures).toEqual({ NS: 1, EW: 0 });
      expect(rows[8].queue).toEqual({ NS: 1, EW: scenario.id === 'A' ? 0 : 2 });
      expect(rows[15].queue).toEqual({ NS: scenario.id === 'A' ? 1 : 2, EW: 0 });
    }
    expect(firstCycle).toEqual(trace);
    // Both published scenarios clear EW by slot 8. Leave EW waiting to test its carry too.
    const lateEW = clustered.map(row => ({ ...row }));
    lateEW[7].EW = 3;
    const ninth = runTwoCycles(inputs, lateEW)[8];
    expect(ninth.opening_queue).toEqual({ NS: 2, EW: 3 });
    expect(ninth.queue).toEqual({ NS: 1, EW: 5 });
  });

  it('reproduces the published two-cycle record from its identified sources', () => {
    const runner = new URL('../../project/v3/case-study/run-two-cycles.mjs', import.meta.url);
    const saved = new URL('../../project/v3/case-study/two-cycle-run.json', import.meta.url);
    expect(execFileSync(process.execPath, [fileURLToPath(runner)], { encoding: 'utf8' })).toBe(readFileSync(saved, 'utf8'));
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
