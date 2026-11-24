# Independent verification of issue 93

**Pass for integration.** Commit `274e585d7b908f719cdb818e8808160f732c8e8b` gives Chapter 5 one defensible observation record. I found no release blocker. Its parent is `c3100189ce41b28c6dd1b0252eaeffb65a900343`. The combined candidate `206828b6f93c673cd09d688a0dc2204d05fd4b13` contains the identical quiz file. [Assigned change](https://github.com/And-Gu/executable-engineering-lab/commit/274e585d7b908f719cdb818e8808160f732c8e8b) · [Assignment](../tasks.json)

Q86-20261123 · EEL-Q-S4-CHECK-93-P1 · EEL-Q-S4-CHECK-93-P1-A02 · independent change verifier. The dispatch specified `gpt-6.2-astra` at maximum reasoning effort. Effective settings were unreported to the verifier.

## What can the colleague reproduce?

The stem identifies the experiment, model revision, original B inputs, units and sampling convention. I compared the option texts in alphabetical order with feedback and keys omitted. An initial schema inspection had exposed the stored key position. I used the T1 inputs and saved records to test each choice independently.

| Entry | Evidence and feedback |
| --- | --- |
| Save the move and plan a second cycle | Moving one north–south arrival from slot 3 to slot 2 lets it depart on green. Original B ends slot 8 with two vehicles waiting and edited B with one. The entry then proposes repeating original A and B through slot 16. This is the sole keyed entry. Its feedback identifies both the reproducible edit and the open question. |
| Revise the original B trace | Keeping both north–south arrivals in slot 3 makes them miss green. Changing the saved count to one would give the original inputs the edited result. The feedback directs the colleague to retain the two and create a separate observation for the edit. |
| Carry the counts forward as results | Both slot-8 counts are accurate. A queue can carry into the next slot, but intervening arrivals and service determine the slot-16 result. The feedback calls for a specified arrival pattern, extended window and separate result. |

In an independent Python calculation, all 16 original A/B rows matched the saved trace for phases, arrivals, departures and closing queues. Edited B first differs in departures in slot 2 and in queue size in slot 3. In slot 8, the north–south and east–west queues are (2, 0) in original B and (1, 0) in edited B. Chapter 6's separate run repeats the original patterns. Its B begins slot 9 with two north–south vehicles, serves one and finishes that slot with one north–south and two east–west. I matched the separate run's stored rows at slots 8, 9 and 16 for both patterns. The colleague must distinguish the records even when final counts coincide. [T1 inputs and rules](https://github.com/And-Gu/executable-engineering-lab/blob/274e585d7b908f719cdb818e8808160f732c8e8b/project/v3/case-study/model-inputs-v1.json) · [Saved edit](https://github.com/And-Gu/executable-engineering-lab/blob/274e585d7b908f719cdb818e8808160f732c8e8b/project/v3/case-study/data-quality-v1.json#L20-L50) · [Two-cycle record](https://github.com/And-Gu/executable-engineering-lab/blob/274e585d7b908f719cdb818e8808160f732c8e8b/project/v3/case-study/two-cycle-run.json)

## Answer lengths and scope

In file order, visible character counts changed from **177, 81, 85** to **167, 180, 164**. Whitespace-delimited word counts changed from **30, 15, 15** to **33, 33, 32**. The first option is keyed. Across the fourteen quizzes, 38 questions and 114 choices, uniquely longest keys declined from 32 to 31 by characters and from 27 to 26 by words. B2 and the parent gave the same starting counts. The assigned commit and combined candidate gave the same ending counts. Every item retained one key. These counts describe the available cue. Its effect on readers remains unmeasured.

Restoring the previous stem and three option texts reproduced the parent file byte for byte. All three existing feedback strings still address their new options. The complete `bounded-claim` question matches issue 90's commit `4f80f75294949d98a7aeb00f225f73b8a6ace0b6`, including the six vehicle-slots and four-arrival completion procedure. The commit touched only the authorized quiz file and passed `git diff --check`. [Issue 90 verification](check-90.md)

The existing generated page identifies the combined revision through its build-information file. I matched both prompts, all six visible options, their grading and feedback attributes, and both no-script answers and explanations to the pinned quiz. This inspection covered the generated markup. Live browser submission and reader transfer require separate observations. [Combined candidate checks](integration.md)
