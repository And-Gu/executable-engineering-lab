# #94 verification · Lab links to the intersection experiments

**Pass for this source change.** I compared `e90027461167cbc6591538c60afb5a2bcd68ca2d` with its parent `4f80f75294949d98a7aeb00f225f73b8a6ace0b6`. The diff adds one paragraph in `site/src/pages/lab.astro`. Removing that paragraph reproduces the parent file byte for byte.

The Lab’s coverage heading and introduction come first. The new paragraph opens with “In the intersection model” and offers two ordinary links before the original Chapter 1 exercise and its sensor controls. Each link names its action and chapter. Both use `import.meta.env.BASE_URL` and match the active chapter routes under the configured Pages base.

| Link | Destination and evidence |
| --- | --- |
| Move one arrival in Chapter 5 | `/executable-engineering-lab/learn/v3/05-learning-through-models-and-prototypes/#arrival-experiment` targets the `h2` “Move one arrival.” The form lets the reader move one arrival and compare the first eight slots. |
| Follow both queues into a second cycle in Chapter 6 | `/executable-engineering-lab/learn/v3/06-engineering-data-from-measurements-to-decisions/#two-cycle-experiment` targets the `figure` labeled “Follow a queue into the second cycle.” It repeats the selected original pattern and reports north–south and east–west queues across the slot 8–9 boundary. |

I traced the manuscript markers through `[slug].astro` to `QueueExperiment.astro` line 18 and `TwoCycleExperiment.astro` line 6. Each target ID occurs once in the corresponding retained B2 HTML. The captures match their manifest hashes. The links present separate experiments, consistent with Chapter 5’s move and Chapter 6’s use of the original arrivals. [Chapter 5 capture](../capture-b2/eel-v3-ch05-models-prototypes.html) · [Chapter 6 capture](../capture-b2/eel-v3-ch06-engineering-data.html) · [B2 manifest](../baseline-B2.json)

The parent and candidate share the same coverage component, control script and navigation layout. Sensor x, y and radius, reset, record and clear retain their original definitions. The original exercise, interpretation and reference links retain their destinations and relative order. [B2 Lab capture](../capture-b2/route__lab_.html)

**Release status.** No blocking discrepancy found in this slice. The rendered evidence above comes from B2. Following both links and exercising the coverage controls on the combined candidate remain the delivery owner’s browser checks.
