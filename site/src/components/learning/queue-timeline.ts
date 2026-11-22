import type { runQueue } from '../../../../models/intersection/queue.mjs';

type Trace = ReturnType<typeof runQueue>;
export type Direction = keyof Trace[number]['queue'];
export type Comparison = { rows: Trace; from: number; to: number };

export const directionNames = { NS: 'North–south', EW: 'East–west' };
export const phaseLabels: Record<string, string> = {
  NS_GREEN: 'NS green', EW_GREEN: 'EW green', NS_AMBER: 'NS amber', EW_AMBER: 'EW amber', ALL_RED: 'All red',
};

export function makeTimeline(scenario: string, group: Direction, original: Trace, edit?: Comparison) {
  const firstDifference = edit?.rows.findIndex((row, i) => row.queue[group] !== original[i].queue[group]) ?? -1;
  let caption = 'Each bar counts the vehicles still waiting after arrivals and service in that slot.';
  if (edit) {
    const at = edit.to - 1;
    const move = edit.rows[at].departures[group] > original[at].departures[group]
      ? `The moved vehicle arrives and leaves on green in slot ${edit.to}.`
      : `One arrival moved from slot ${edit.from} to slot ${edit.to}.`;
    const difference = firstDifference < 0
      ? 'Both queues have the same count after service in every slot.'
      : `The queues first differ after slot ${original[firstDifference].slot}, with ${original[firstDifference].queue[group]} waiting in the original and ${edit.rows[firstDifference].queue[group]} in the edit.`;
    caption = `${move} ${difference}`;
  }

  function cells(rows: Trace, highlight = -1) {
    return rows.map((row, i) => {
      const arriving = row.arrival[group], waiting = row.queue[group];
      return {
        slot: row.slot,
        arrivalMark: arriving ? `↓${arriving}` : '', waiting, firstDifference: i === highlight,
        description: `Slot ${row.slot}, ${phaseLabels[row.phase]}. ${arriving} arriving, ${row.departures[group]} leaving, ${waiting} waiting after service.`,
      };
    });
  }

  const greenBands: { start: number; length: number }[] = [];
  for (const row of original) {
    if (row.phase !== `${group}_GREEN`) continue;
    const previous = greenBands.at(-1);
    if (previous && previous.start + previous.length === row.slot) previous.length++;
    else greenBands.push({ start: row.slot, length: 1 });
  }

  return {
    title: `${directionNames[group]} queue · Scenario\u00a0${scenario}`,
    // Use the same scale for both lanes and for every move within this scenario.
    scale: Math.max(1, original.reduce((sum, row) => sum + row.arrival[group], 0)),
    caption, greenBands,
    lanes: [
      { label: 'Original', visible: true, cells: cells(original) },
      { label: 'Edited', visible: Boolean(edit), cells: cells(edit?.rows ?? original, firstDifference) },
    ],
  };
}

export type Timeline = ReturnType<typeof makeTimeline>;

export function updateTimeline(figure: HTMLElement, view: Timeline) {
  figure.querySelector('h3')!.textContent = view.title;
  figure.querySelector('figcaption')!.textContent = view.caption;
  figure.style.setProperty('--queue-scale', String(view.scale));
  const signals = figure.querySelector('.timeline-signals')!;
  signals.replaceChildren(...view.greenBands.map(band => {
    const signal = document.createElement('span');
    signal.textContent = 'Green';
    signal.style.gridColumn = `${band.start} / span ${band.length}`;
    return signal;
  }));
  const lanes = figure.querySelectorAll<HTMLElement>('.timeline-lane');
  for (const [i, lane] of view.lanes.entries()) {
    lanes[i].hidden = !lane.visible;
    const slots = lanes[i].querySelectorAll('li');
    for (const [j, cell] of lane.cells.entries()) {
      const slot = slots[j];
      slot.toggleAttribute('data-first-difference', cell.firstDifference);
      slot.style.setProperty('--waiting', String(cell.waiting));
      slot.querySelector('.timeline-description')!.textContent = cell.description;
      slot.querySelector('.timeline-arrival')!.textContent = cell.arrivalMark;
      slot.querySelector('.timeline-count')!.textContent = String(cell.waiting);
    }
  }
}
