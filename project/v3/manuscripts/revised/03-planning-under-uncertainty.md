---
id: eel-v3-ch03-planning
chapter: 3
part: "I — Frame the Work"
title: "Planning Under Uncertainty"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional planning decision"
---

# Planning Under Uncertainty

*What should change in the plan when an experiment changes what the team knows?*

The city wants to improve its intersection. The team has a question about arrivals and an idea for a small prototype. Signal timing, new detectors and adaptive control remain possible directions. Choosing the next investigation lets the team make progress while those choices are open.

A useful first increment produces something colleagues can examine together. Its result can change the next experiment, reveal a dependency or justify a delivery commitment. The plan needs room for each of those outcomes.

## Begin with the next decision, not a backlog

The initial purpose is broader than any one solution: improve useful intersection operation without losing sight of competing road-user, physical and operational needs.

Imagine the team has capacity for **one substantial investigation**. It has three options.

| Candidate investigation | What is uncertain? | Smallest useful result | Dependency or stopping condition |
|---|---|---|---|
| **A. Define movement conflicts** | Which intended movements and users must never receive incompatible indications? | A reviewed conceptual movement/constraint map | If the intended scope is unclear, clarify stakeholders and system boundary first |
| **B. Compare arrival patterns** | Does the proposed fixed-phase abstraction respond differently to invented arrival clustering? | A transparent model and reproducible trace | Requires an agreed simplified function and input meaning; stop if the model cannot answer the question |
| **C. Commit to new detection equipment** | Will hardware provide the information and behavior needed? | An interface and feasibility hypothesis before procurement | Premature until the intended sensing, command and installation needs are understood |

Option C is not a bad idea. It is simply too early to call it a responsible product commitment in this hypothetical situation. Option A helps define what the system must consider. A bounded part of option B may then test a specific modeling hypothesis.

The team proposes to clarify the movement conflicts and investigate a small fixed-phase model. It can revisit detector procurement and adaptive control once it knows what those options would need to achieve.

## Vision, initiative, increment and backlog are different things

Planning language helps only when each term carries a useful distinction.

A **vision** describes the intended longer-term outcome for users. A **theme** groups a direction of effort, such as improving confidence in traffic-control alternatives. An **initiative** identifies a problem worth addressing. A **roadmap** makes the intended progression and key dependencies visible. A **delivery increment** is a bounded capability or result that can be evaluated; a **backlog** holds the more detailed work needed to create it.

None of these labels makes uncertainty disappear.

The initiative might be “understand whether different fixed-time concepts warrant further study.” Its first increment could be **a controlled, inspectable model comparison**. That increment does not promise reduced real-world traffic delay.

A different initiative might concern physical installation feasibility. Its first result could be a reviewed interface assumption, not a delivered piece of equipment.

The question is whether each activity earns the commitment implied by its position on the roadmap.

## Exploration and delivery can run together

It is tempting to picture a sequence in which all questions are resolved, then every requirement is specified, then the product is implemented. In an unfamiliar engineering problem, that is often neither practical nor desirable.

A team may investigate a new control concept while implementing a well-understood reporting improvement. It may build an emulator for a risky interface while another group prepares a bounded software change. Exploration and controlled delivery are **concurrent loops**, linked by evidence and decisions.

This is not a license for unrecorded improvisation. It is a reason to distinguish what is **candidate**, **controlled**, **observed** and **approved** at each point.

For our intersection, the fixed-phase model is an exploratory learning baseline. It can help the team ask a sharper question without becoming an approved traffic-control architecture.

## Two roadmaps should influence each other

A product question may require a new engineering capability before it can be answered.

Consider the selected model investigation. The **product-side** question concerns how a control concept behaves with different arrivals. The **engineering-environment** work is to maintain a simple source definition, construct valid input scenarios, compute reproducible outputs and review what those outputs mean.

Those tasks deserve planning attention, but they are not products for their own sake.

The team should ask whether a new fixture, an automated check or a source relation will support one investigation or a broad set of recurring questions. A lightweight script may be enough for one study. A reusable integration test may be justified when similar changes occur frequently or have serious consequences.

“We build the machine that builds the machine” becomes a planning discipline when the team explicitly chooses **which engineering capability is worth investing in now**.

## Plan for more than software

The software and modeling team may iterate on a candidate behavior quickly. New sensors or electrical adapters may need supplier interface agreements, physical samples and installation considerations. Operational evaluation depends on users, conditions and evidence that a simple model cannot supply.

A useful roadmap displays those different dependencies without pretending they share one cadence. It also reveals when an early model result can change a costly later commitment.

The team should not create fictitious durations to make the roadmap appear precise. It can still identify critical dependencies, which unknowns must be answered first and which commitments would be expensive to reverse.

## Define a stopping and replanning rule

A decision to explore is more useful when everyone knows what would make the team change course.

For the fixed-phase comparison, the question is narrow: *Can the same invented vehicle totals produce different end-of-window queues when arrival placement changes?*

If the team cannot clearly define the arrival units, event order or model scope, it should **stop interpreting results** and repair the source definition before extending the experiment.

If the comparison is reproducible but does not address operational needs, the next action is not necessarily to build an adaptive controller. It may be to improve data, revisit stakeholder criteria or choose a different type of experiment.

A failed or inconclusive exploration can be progress when it reveals what is not yet fit for decision.

The plan should therefore track both completed work and **knowledge gained, remaining uncertainties, decision owners and triggers for change**.

Suppose one team counts arriving vehicles just before the signal serves the queue and another counts them just after. Their results can differ even when their input files match. The immediate task is to agree on event order and rerun a small comparison.

> **Explore further**
>
> The [model input and event-order rule](../../case-study/model-inputs-v1.json) show where the two teams can check which convention applies.

## Keep a small decision record

The team records its decision while the assumptions are fresh.

**Decision:** Use a fixed-phase teaching model as an exploratory reference.  
**Reason:** It makes one arrival-pattern question inspectable with a limited, understandable source set.  
**Not decided:** Adaptive control, real signal timing, detector procurement, physical interface selection or operational readiness.  
**Needed engineering capability:** Versioned model assumptions, scenario inputs and a transparent result trace.  
**Review trigger:** A changed system boundary, invalid scenario data or findings that make the model unfit for the question.  
**Decision status:** Provisional, for learning.

> **Concept**
>
> Correcting the order of events changes the next increment and its backlog. If the city decides that pedestrian access is its principal concern, the team has a reason to revisit the initiative itself.

The [case source collection](../../case-study/README.md) gives the investigation a common set of definitions to work from.

<!-- interactive: chapter-quiz -->

## Why the information must become connected

The two teams have agreed when arrivals enter a queue. Where should they record that decision so that a model, a diagram and a later experiment all refer to the same rule? [Chapter 4 follows an engineering decision into its maintained sources](04-engineering-knowledge-as-code.md).
