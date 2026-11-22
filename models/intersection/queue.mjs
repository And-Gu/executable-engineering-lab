/** @typedef {{ NS: number, EW: number }} Counts */
/** @typedef {{ horizon_slots: number, initial_queue: Counts, phase_sequence: string[], service: Record<string, Counts> }} QueueModel */

/** @param {Counts | undefined} counts */
function validCounts(counts) {
  return counts && [counts.NS, counts.EW].every(value => Number.isSafeInteger(value) && value >= 0);
}

/** @param {QueueModel} model @param {Counts[]} arrivals */
export function runQueue(model, arrivals) {
  if (model.horizon_slots !== model.phase_sequence.length || arrivals.length !== model.horizon_slots) {
    throw new Error('Each slot needs a phase and an arrival record.');
  }
  if (!validCounts(model.initial_queue)) throw new Error('Invalid initial queue.');
  let queue = { ...model.initial_queue };
  return model.phase_sequence.map((phase, index) => {
    const arrival = arrivals[index];
    const capacity = model.service[phase];
    if (!validCounts(arrival) || !validCounts(capacity)) throw new Error(`Invalid arrivals or phase at slot ${index + 1}.`);
    const waitingNS = queue.NS + arrival.NS;
    const waitingEW = queue.EW + arrival.EW;
    const departures = { NS: Math.min(waitingNS, capacity.NS), EW: Math.min(waitingEW, capacity.EW) };
    queue = { NS: waitingNS - departures.NS, EW: waitingEW - departures.EW };
    return { slot: index + 1, phase, arrival, departures, queue };
  });
}

/** Move one vehicle, using the one-based slot numbers shown in the chapter.
 * @param {Counts[]} arrivals @param {'NS' | 'EW'} group @param {number} from @param {number} to */
export function moveArrival(arrivals, group, from, to) {
  if (!['NS', 'EW'].includes(group) || ![from, to].every(slot => Number.isInteger(slot) && slot >= 1 && slot <= arrivals.length)) {
    throw new Error('Choose a vehicle group and two valid slots.');
  }
  if (from === to || arrivals[from - 1][group] < 1) throw new Error('Move an existing arrival to a different slot.');
  const edited = arrivals.map(arrival => ({ ...arrival }));
  edited[from - 1][group]--;
  edited[to - 1][group]++;
  return edited;
}
