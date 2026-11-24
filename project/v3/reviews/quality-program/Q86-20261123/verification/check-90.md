# Independent verification of issue 90

**Pass for integration.** I found zero material defects or release blockers in commit `4f80f75294949d98a7aeb00f225f73b8a6ace0b6`. Its parent is B2 `3d752d994ab5c47f865140ca0a005e13e6aa7f82`. The diff covers the two authorized manuscripts and the Chapter 5 quiz. `git diff --check` passed. [Assignment](../tasks.json) · [Decision D11](../decisions.md) · [Chapter 6 pilot](../chapter-reviews/pilot-06.md)

Q86-20261123 · EEL-Q-S4-CHECK-90-P1 · EEL-Q-S4-CHECK-90-P1-A01 · independent change verifier. The dispatch requested `gpt-6.2-astra` at maximum reasoning effort. The runner did not report effective settings.

## Waiting at the horizon and over the completed cohort

I read the pinned T1 inputs and `RESULT-B-NS-3-TO-2` with `git show` and replayed the service rule in independent Python. All 16 original A/B rows matched the saved CSV for phase, arrivals, departures and closing queues. I then moved the recorded NS arrival from slot 3 to slot 2. Its departure changes in slot 2. Both queues still match there. The NS queue first differs in slot 3 and stays one vehicle smaller through slot 8.

| Four-arrival run | Total vehicles waiting after service in each of slots 1–8 | Accrued vehicle-slots through slot 8 | Vehicles waiting after slot 8 | First empty slot after the horizon | Eventual mean wait |
| --- | --- | ---: | ---: | ---: | ---: |
| Original B | 2, 2, 4, 4, 3, 2, 2, 2 | 21 | 2 NS | 10 | 22 ÷ 4 = 5.5 slots |
| Edited B | 2, 2, 3, 3, 2, 1, 1, 1 | 15 | 1 NS | 9 | 15 ÷ 4 = 3.75 slots |

For the last two columns I stopped admissions after slot 8 and continued the fixed phases. Summing matched departure slot minus arrival slot for the four vehicles gave the same totals as summing the queues. The one-vehicle change in the last row, the six vehicle-slots saved through slot 8 and the 1.75-slot difference in eventual means answer three distinct questions. At the pilot’s shorter horizon, original B ends slot 5 with two NS and one EW waiting and 15 vehicle-slots already accrued. Swapping the service order of the two EW vehicles that arrived together in slot 1 leaves all queue rows identical while changing a particular vehicle’s wait from four slots to five.

## Two cycles and the operations handoff

For each original pattern, the recalculation matched all fields of the saved slot 8, 9 and 16 observations. In B, slot 9 opens with two NS, receives two EW and serves one NS. A deliberate reset serves zero NS there. Both variants close slot 16 with two NS and zero EW. The continuous B run accrues 43 vehicle-slots through slot 16. In the separate completion exercise, one further vehicle-slot accrues before the queue empties in slot 18, giving 44 ÷ 8 = 5.5 slots. The chapter presents this extension as a proposed measurement. The saved observation ends at slot 16.

Chapter 4 introduces the one-arrival move. Chapter 5 records the edit and names original B in its handoff to Chapter 6. Both revised links to Chapter 3 passed the repository’s Markdown link transformation and resolve to the decision-record heading present in the captured B2 page. Chapter 6 asks operations which approach-specific arrivals can be matched to phase history. Field collection remains a proposed step. Chapter 7 takes up the brief for the two original patterns, and Chapters 7 and 9 reserve tracking individual vehicles for a question about individual waits. Chapter 6 still withholds the unexplained spreadsheet value 20 and treats send-to-receipt timing under load as a proposed physical measurement.

## Quiz and observation limits

A parsed parent-to-commit comparison isolated the change to the third option’s feedback in `bounded-claim`. The second option remains the sole key and `capture-observation` is identical to its parent. The revised feedback gives the six-vehicle-slot difference and the completion procedure for four arrivals. I also checked the queue figures’ inputs, both activity markers in each manuscript and the quiz component’s option-to-feedback mapping in source.

This disposition covers the pinned source and independently calculated synthetic cases. Browser behavior on the combined revision, publication, learner transfer and conditions at an actual intersection require separate observations.
