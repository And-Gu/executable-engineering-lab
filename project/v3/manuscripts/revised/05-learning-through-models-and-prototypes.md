---
id: eel-v3-ch05-models-prototypes
chapter: 5
part: "II — Build and Test Knowledge"
title: "Learning Through Models and Prototypes"
status: draft
publication: published
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — synthetic editorial inputs and calculated trace"
---

# Learning Through Models and Prototypes

*Four vehicles arrive at a four-way intersection. If the lights follow the same sequence, can moving one arrival leave fewer vehicles waiting at the end?*

The city wants traffic to flow while people can cross safely. In the Chapter 2 workshop, the team asked how queues would change if vehicles arrived at different times under fixed signal phases. Chapter 3 exposed a disagreement that could spoil the comparison. When one vehicle arrives at an empty queue on green, can it leave in that same slot? The team agreed to add arrivals before serving the queue. We can now turn that decision into a working prototype. [Intersection workshop](02-introducing-the-engineering-challenge.md) · [Planning under uncertainty](03-planning-under-uncertainty.md).

The loop below follows one proposed way of working. The agent dialogue is illustrative; the queue rows later in the chapter are calculated from the saved synthetic inputs.

<!-- interactive: engineering-loop -->

## Different questions demand different models

In Chapter 4, an engineer reviewed the proposed adaptive strategy `INT-CHG-001`. It could affect the phase-selection function, `INT-FUN-001`. The two-queue model `INT-MOD-001` *represents* that function, so the engineer selected it for review. The graph also says which experiment examines the model and which data it uses. Its separate check for conflicting greens is still proposed. [Chapter 4 review](04-engineering-knowledge-as-code.md) · [T1 source relationships](../../case-study/source-graph-v1.json).

To investigate the queue question, an engineer can give a large language model (LLM) agent the city intent, intersection layout, pedestrian concerns and the relevant arrival, phase and event-order text. The agent can translate the selected assumptions and data into a runnable draft. A colleague reviewing it can go straight to the rule and revision it should implement. A state diagram would show which light comes next; this question also needs a count of who is waiting.

Below is the queue initiative before the simulation, alongside the event order from the maintained T1 inputs. The excerpt is shared information for the task, not a transcript of an agent run.

<!-- interactive: initiative-before -->

## Define the experiment before interpreting its output

The arrival-pattern experiment, `INT-EXP-001`, uses the invented arrivals in `INT-DAT-001` and model `INT-MOD-001`, revision **T1**. Both the north–south (NS) and east–west (EW) queues start empty. The model covers eight ordered slots with no assigned duration in seconds. On green, at most one vehicle from that group can leave. During amber and all-red both groups wait. The schedule stays fixed throughout the comparison.

> **Concept**
>
> Read a queue count as a snapshot *after* arrivals and service in that slot. A count of zero can mean that a vehicle came and went in the same slot.

<span id="determinism-is-the-starting-point"></span>
<span id="design-the-feedback-around-the-engineering-question"></span>

## Turn the agreed rule into a queue update

In this illustrative exchange, the engineer gives an agent T1’s phase capacities, event-order rule and the first row of scenario A and asks, “Draft one slot of the model. Return departures and the queue remaining for each direction.” A plausible draft limits departures to the vehicles waiting *at the start* of the slot, then adds new arrivals. This dialogue illustrates a review; it is not a recorded agent session.

The engineer checks A’s first NS green by hand. Zero vehicles are waiting, one arrives and there is capacity for one departure. The draft serves zero and leaves one. The agreed rule gives **0 waiting + 1 arrival − 1 departure = 0 waiting**. The engineer asks for one correction. Compute the available vehicles as the previous queue plus arrivals, then serve the smaller of that number and the phase capacity. This gives one departure and an empty queue, exactly what the first reference row records.

The browser uses this rule in its queue calculation. It is deterministic, so the same inputs give the same rows.

> **Explore further**
>
> Follow one slot through the [T1 queue calculation](https://github.com/And-Gu/executable-engineering-lab/blob/c4205b3a5b960d8224b6ba72bcf165342ef7322b/models/intersection/queue.mjs). The [regression tests for that revision](https://github.com/And-Gu/executable-engineering-lab/blob/c4205b3a5b960d8224b6ba72bcf165342ef7322b/models/intersection/queue.test.ts) compare both baselines with all **16 rows** of the saved trace, including arrivals, departures and queues. They also check that an unknown phase, a missing slot or an invalid arrival count is rejected.

## Two arrival patterns, one model

The [arrival table in Chapter 2](02-introducing-the-engineering-challenge.md#arrival-patterns) shows both invented patterns and the fixed phase sequence. Each has two NS and two EW arrivals; only their placement differs.

Start with **B**. Predict how many vehicles will remain after slot 8 if one NS vehicle arrives in slot 2 instead of slot 3. Choose that move, then **Run comparison**. The browser calculates eight rows for your edit alongside the original. **Restore baseline** returns to the selected starting scenario. [T1 inputs and service rules](../../case-study/model-inputs-v1.json).

<!-- interactive: intersection-model -->

## Follow the actual queue updates

These selected rows come from the **saved A and B baselines**. Each pair is the number waiting in NS and EW order. [Complete 16-row baseline trace](../../case-study/trace-v1.csv).

| After slot | A (NS, EW) | B (NS, EW) |
|---:|---|---|
| 1 | 0, 0 | 0, 2 |
| 3 | 1, 1 | 2, 2 |
| 5 | 1, 0 | 2, 1 |
| 8 | **1, 0** | **2, 0** |

In A, one NS vehicle arrives on green and leaves immediately. The other arrives on amber and is still waiting at slot 8. In B, both NS vehicles miss their green. Both EW vehicles leave in slots 5 and 6. Of four arrivals, A has three departures and B has two.

Look at the edited B in the browser. The NS vehicle moved to slot 2 leaves on that green, so the original and edited **queues still match after slot 2**. The first queue difference appears in slot 3. Just one NS vehicle now arrives on amber. It waits through slot 8, when the EW queue is empty. The edit accounts for all four vehicles as **three departures and one still waiting**, compared with two departures and two waiting in the original B. [Calculation and baseline checks](../../case-study/MODEL-CHECK.md).

<span id="when-should-fidelity-increase"></span>

## What does that comparison establish?

To count the waiting that accrued over all eight slots, add both queues after service in every row. Each vehicle still waiting contributes one vehicle-slot. A vehicle that arrives and leaves in the same slot contributes zero. The edit leaves one fewer NS vehicle waiting in each of slots 3 through 8, bringing the total from **21 vehicle-slots in the original B pattern to 15 in the edit**. For the mean wait of all four arrivals, we would also need to know how much waiting accrues before the remaining vehicles leave.

A total of four arrivals for the cycle fits either pattern. Which records could operations use to see when vehicles on each approach arrived relative to the end of green? [Chapter 3’s data request](03-planning-under-uncertainty.md#keep-a-small-decision-record).

A question about whether an actual signal shows the commanded indication would call for a bench test or physical observation. Choose the model or prototype to match the decision it will inform.

Suppose the city moves a crossing or changes its priority to pedestrian conflicts. The team would update the shared layout and question. An agent could propose a different model using crossing distances, indications, turning paths and pedestrian movement information; the engineer would compare its proposed behavior with those sources and identify observations still needed from people using the crossing. In a proposed comparison, the team could vary the crossing layout while holding assumed walking and signal conditions fixed, then compare the modeled time a person occupies a turning path with the interval when the turn is permitted. The two-queue model cannot answer that safety question, and no crossing simulation has been run here.

## Record what the experiment changed

Before the edit, the two baseline traces told the team how A and B behaved. A colleague looking up B would find two vehicles waiting. To preserve what the edit taught us, an assistant can draft an observation from the comparison. If it writes “traffic improved,” the engineer can replace that claim with the following entry and check it against the rows.

- **Computed observation.** `RESULT-B-NS-3-TO-2` belongs to `INT-EXP-001`, model `INT-MOD-001` revision T1. Start from B and move one NS arrival from slot 3 to slot 2. After arrivals and service in slot 8, one vehicle is queued. The original B has two.
- **Proposed next investigation.** If the same phases and each scenario’s own arrivals repeat for a second cycle, how many vehicles remain after slot 16?

The [saved T1 observation](https://github.com/And-Gu/executable-engineering-lab/blob/a1e4f49c2d3ef53e0fc895cdd197f659218a4d4f/project/v3/case-study/data-quality-v1.json#L31-L50) sits beside the original results in the maintained record. A colleague can now reconstruct the edit from its baseline and use the open question to specify a longer experiment. That experiment would need its own observation window.

In the illustrative workflow, an engineer could ask in ordinary language, “Move one north–south arrival from slot 3 to slot 2 and compare the rows.” An agent can run the model and draft an update to the technical sources. Suppose the engineer checks its account against the baseline, edited rows and saved observation, accepts that account of the calculation and decides to propose a narrower initiative for team review.

The result gives the team a reason to sharpen the broad timing question in the [queue initiative from Chapter 3](03-planning-under-uncertainty.md#reduce-queues-during-bursts) toward arrivals just before and after the last green. The following maintained example records the proposed wording, its reason and the next field question. It is an illustrative proposal for review, not a record that the city or an agent actually made the decision.

<!-- interactive: initiative-after -->

The next field increment would ask operations for north- and south-arm arrivals and matching signal history. The team would establish the available timestamp precision or count-bin width around the end of north–south green and whether it can distinguish the patterns in question. A whole-green total can conceal differences within that green. Those records could help determine whether the timing pattern occurs in practice. The separate proposed two-cycle calculation remains a model question, and the original scenario B remains intact.

<!-- interactive: chapter-quiz -->

## The data is now the next engineering problem

The original B pattern ends slot 8 with two north–south vehicles still waiting. Where should they appear when the lights begin the next cycle? [Chapter 6 follows both queues across that boundary](06-engineering-data-from-measurements-to-decisions.md).
