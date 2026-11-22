import { describe, expect, it } from 'vitest';
import inputs from '../../../../project/v3/case-study/model-inputs-v1.json';
import { moveArrival, runQueue } from '../../../../models/intersection/queue.mjs';
import { makeTimeline } from './queue-timeline';

const staggered = inputs.scenarios.find(scenario => scenario.id === 'A')!.arrivals;
const clustered = inputs.scenarios.find(scenario => scenario.id === 'B')!.arrivals;

describe('Chapter 5 queue timeline', () => {
  it('distinguishes the extra departure in slot 2 from the first queue difference in slot 3', () => {
    const original = runQueue(inputs, clustered);
    const rows = runQueue(inputs, moveArrival(clustered, 'NS', 3, 2));
    const view = makeTimeline('B', 'NS', original, { rows, from: 3, to: 2 });
    const [before, after] = view.lanes;
    expect(view.greenBands).toEqual([{ start: 1, length: 2 }]);
    expect(after.cells[1]).toMatchObject({ arrivalMark: '↓1', waiting: 0, firstDifference: false });
    expect(before.cells[2].waiting).toBe(2);
    expect(after.cells.filter(cell => cell.firstDifference).map(cell => cell.slot)).toEqual([3]);
    expect(after.cells[2].waiting).toBe(1);
    expect(view.caption).toContain('leaves on green in slot 2');
    expect(view.caption).toContain('after slot 3, with 2 waiting in the original and 1 in the edit');
  });

  it('uses the selected direction and clears the comparison for an unedited baseline', () => {
    const view = makeTimeline('B', 'EW', runQueue(inputs, clustered));
    expect(view.title).toContain('East–west');
    expect(view.lanes.map(lane => lane.visible)).toEqual([true, false]);
    expect(view.greenBands).toEqual([{ start: 5, length: 2 }]);
    expect(view.lanes[0].cells[0]).toMatchObject({ arrivalMark: '↓2', waiting: 2 });
    expect(view.lanes[0].cells.some(cell => cell.firstDifference)).toBe(false);
  });

  it('leaves all slots unmarked when two different arrival patterns yield the same queues', () => {
    const rows = runQueue(inputs, moveArrival(staggered, 'NS', 1, 2));
    const view = makeTimeline('A', 'NS', runQueue(inputs, staggered), { rows, from: 1, to: 2 });
    expect(view.lanes[1].cells.some(cell => cell.firstDifference)).toBe(false);
    expect(view.caption).toContain('same count after service in every slot');
  });
});
