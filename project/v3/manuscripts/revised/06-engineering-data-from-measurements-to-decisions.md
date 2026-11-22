---
id: eel-v3-ch06-engineering-data
chapter: 6
part: "II — Build and Test Knowledge"
title: "Engineering Data: From Measurements to Decisions"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — synthetic source, computed outputs, editorial quality decisions"
---

# Engineering Data: From Measurements to Decisions

*The first signal cycle ended with one vehicle waiting in scenario A and two in B. If the same traffic arrives again, how many vehicles will be waiting at the end of the second cycle?*

Software teams keep a working build ready to test from the first increment. For the intersection team, the fixed-phase model from Chapter 5 serves that purpose. A colleague can run a longer experiment today and check its first eight slots against the behavior the team already reviewed. [Chapter 5’s recorded observation and follow-up question](05-learning-through-models-and-prototypes.md#record-what-the-experiment-changed).

For a physical product, a simulation of one function can give the team its first working version. Its digital engineering environment keeps each runnable version connected to the requirements, risks, assumptions and design decisions it addresses. A reviewer can recover why the team chose a rule, change an assumption and inspect the consequence. That opportunity to test the design as it evolves is a reason to fund the engineering tools from the outset. [Chapter 1 on the product and the environment that builds it](01-the-new-engineering-paradigm.md#two-systems-must-evolve-together).

<span id="an-inspectable-transformation"></span>

## Carry the queues through a second cycle

Run each original scenario from empty queues. In the first eight slots, both A and B receive two north–south (NS) and two east–west (EW) vehicles at different times. Revision T1 adds arrivals before serving at most one vehicle from the group with a green light. Repeat each scenario’s own arrivals and phases for slots 9 through 16, carrying both queues forward. [Arrival sequences, phases and service rules](../../case-study/model-inputs-v1.json).

Make a prediction for A and B, then try each arrival pattern below.

<!-- interactive: two-cycle-experiment -->

The simulation leaves **one NS vehicle in A and two NS vehicles in B after slot 16**. Both EW queues are empty. Those are also the counts after slot 8. To check what carried over, look at B in slot 9. It enters with two NS vehicles waiting. Its two new arrivals are EW. One waiting NS vehicle leaves on green, so the row ends with **one NS and two EW**. Had the model discarded the queue between cycles, there would have been nobody to take that green. Two fresh NS arrivals at slot 11 would still have produced the expected final count.

> **Concept**
>
> An observation window sets when you start and stop counting. Vehicles waiting at the end of one interval form the opening queue for the next. Starting a new run with empty queues changes the experiment.

> **Explore further**
>
> To reproduce `INT-RUN-T1-TWO-CYCLES`, run `node project/v3/case-study/run-two-cycles.mjs` from the repository root. The record identifies the exact inputs, calculation, baseline trace and run script by their file hashes. [Script that produces the record](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/project/v3/case-study/run-two-cycles.mjs) · [Recorded simulation result](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/project/v3/case-study/two-cycle-run.json).

<span id="what-the-models-outputs-do-not-say"></span>

B’s previous NS queue clears on the two greens, then another pair arrives on amber. That makes a different phase plan worth testing in simulation. Keep the arrival sequences and the 16-slot window fixed, vary the plan, and inspect the effect on **both** directions. Estimating mean wait would call for following individual vehicles, including those still waiting at slot 16.

<span id="why-this-changes-the-engineering-environment"></span>

## Keep a tested version available

With **docs as code**, an AI assistant can use the same versioned requirement and design rationale to update the experiment description and generate the code that runs the second cycle. A reviewer can exercise the change and compare B’s slot 9 with the agreed carry-over behavior. The regression tests compare every first-cycle row of the longer run with the original, including arrivals, departures and the queues left waiting. [Regression tests](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/models/intersection/queue.test.ts) · [Original traces](../../case-study/trace-v1.csv) · [How those traces were checked](../../case-study/MODEL-CHECK.md).

**Continuous integration** runs automated checks on each change as the team brings its work together. With **continuous deployment**, the tested simulation becomes available automatically in the shared environment. Colleagues can exercise the latest version under the same conditions as an earlier observation.

## What would it take to measure an interface under load?

Suppose an interface reviewer asks whether a detector report reaches the controller within its time budget while diagnostic traffic shares the link. In one setup, the limit lives in a requirements tool, the system description in Word and the product definition in a product data management (PDM) system. The checklist confirms that someone specified the timing. The reviewer still has to find the matching revisions and arrange a timing measurement.

In an integrated environment, the reviewer can select a known sender, receiver and link configuration, apply the specified diagnostic load, and measure the interval from sending to receipt against a common clock. The result links back to the timing requirement and the architecture decision that allocated part of the controller’s update period to communication. An overrun would give the team a reason to revisit the allocation or how the two kinds of traffic share the link. A result within the budget could reduce the estimated timing risk for that configuration, one entry in the team’s risk burndown. This is a proposed product measurement. T1’s queue simulation uses abstract slots without a duration in milliseconds.

Choose the setup to match the decision. Software-in-the-loop can exercise the real software against a simulated link. If controller hardware could introduce the delay, connect it to simulated equipment in a hardware-in-the-loop test. A rig with both devices and the actual link, or an instrumented working product, can expose timing across the physical interface. A different customer question, such as whether a technician can recognize a stale detector report, calls for watching a technician attempt that task on a prototype.

<span id="begin-with-the-meaning-of-a-record"></span>

## Data quality begins before drawing a chart

Now put the two-cycle result beside the old spreadsheet entry `queue_final = 20`. In A, a field called `queue_final` would read 1 for either window. A reader would have to look elsewhere to tell whether the run ended after eight slots or sixteen. For the spreadsheet we have neither the unit nor the observation window. Even if its author confirms that 20 means vehicles, it could be the largest queue in a day or the count in just one direction. [Original spreadsheet row and curation decisions](../../case-study/data-quality-v1.json).

<span id="original-curated-annotated-and-derived"></span>

Keep the original row as supplied. Annotate it to say which details are missing, including the metric definition, unit, model or configuration, and window. Withhold it from the comparison unless those details can be recovered. For A and B we can **curate** the inputs by checking their identities, the number of slots and whether each arrival count is a nonnegative integer. The queues are **derived** records. A colleague can trace them back through departures to the original arrivals, phase rules and model revision. That history is their **provenance**. It lets another team judge whether it can reuse the observation for its own decision.

<!-- interactive: chapter-quiz -->

## What should the team do next?

We now have a baseline against which to try a different phase plan. Before commissioning that experiment, consider what another engineer would have needed to reproduce this one. Which decisions had to be in the brief before anyone knew the count at slot 16? Chapter 7 reconstructs the specification for the two-cycle run. [Spec-Driven Development Without Waterfall](07-spec-driven-development-without-waterfall.md).
