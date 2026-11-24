# Lab links to the Chapter 5 and 6 experiments

Q86-20261123 · EEL-Q-S4-EDIT-94-P1-A01 · chapter editor · B2 `3d752d994ab5c47f865140ca0a005e13e6aa7f82`. D13/D20 activated this edit for issue 94. The dispatch specified `gpt-6.2-astra` with maximum reasoning effort. The editor did not have a per-response settings readout. The coordinator later matched the dispatch to runner turn metadata for this attempt, recorded in the [task ledger](../tasks.json). [Contract](../tasks.json) · [Decision](../decisions.md)

## Reader handoff

A reader who selected Lab from an intersection chapter reached the single-sensor exercise and had to return to Learn to find either intersection experiment. One sentence above “Follow the original Chapter 1 experiment” now offers two choices. In Chapter 5 the reader can move one arrival. In Chapter 6 the reader can follow both queues into a second cycle of an original arrival pattern. Each link names the action and chapter. A single Chapter 5 link would save a few words but leave the second experiment a chapter away. [Course-flow finding CF-06](../reviews/course-flow.md) · [Queue trace and scope](../../../../../../research/v3/2026-11-23-course-quality/theme-03.md)

## Static checks

- Read the active manuscript and activity marker for each chapter, traced the marker through the Astro renderer to its component, and checked the link against the configured Pages base. Each target occurred once in its chapter’s SHA-256-verified B2 HTML. Chapter 5’s `#arrival-experiment` is the “Move one arrival” heading. Chapter 6’s `#two-cycle-experiment` is the figure that contains “Run two cycles.” [Chapter 5 capture](../capture-b2/eel-v3-ch05-models-prototypes.html#arrival-experiment) · [Chapter 6 capture](../capture-b2/eel-v3-ch06-engineering-data.html#two-cycle-experiment)
- Confirmed that the two links are native anchors in the paragraph immediately before the original exercise introduction. Removing that paragraph reproduced B2’s Lab source byte for byte. Of 272 tracked files compared with B2, only `site/src/pages/lab.astro` differed. The original exercise link, sensor controls, calculation, evidence links and styles all matched B2. [Original Lab source](https://github.com/And-Gu/executable-engineering-lab/blob/3d752d994ab5c47f865140ca0a005e13e6aa7f82/site/src/pages/lab.astro)

These checks cover the private source edit and its destinations in the saved baseline. Keyboard navigation and the sensor calculation in the rendered candidate belong to the delivery owner’s browser checks. Reader discovery remains unmeasured.
