---
id: eel-v3-ch03-planning
chapter: 3
part: "I — Frame the Work"
title: "Planning Under Uncertainty"
status: draft
publication: published
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional planning decision"
---

# Planning Under Uncertainty

*How can a first prototype change what the team works on next?*

The city wants traffic to flow more easily through its four-way intersection while people can cross safely. The workshop team can start exploring that intent while the control requirements are still taking shape. Its proposed prototype follows a fixed signal cycle. If the same number of vehicles arrive during that cycle, does the queue at the end depend on when they arrive?

The answer would shape the team's next request to operations staff. Counts for a whole period might be easy to supply. If arrival timing matters, the engineers have a reason to seek records they can match to the signal phases.

<span id="begin-with-the-next-decision-not-a-backlog"></span>

## Choose the next investigation

Before the next concept review, the team has time for one substantial investigation. Each option would prepare it for a different decision.

| Investigation | What the team could bring to the review | Decision it would inform |
| --- | --- | --- |
| Map conflicting movements | A sketch of vehicle and pedestrian movements, reviewed with operators and road users | Which movements would a proposed change to the signal sequence need to protect? |
| Compare arrival patterns | A prototype that traces two invented patterns through the same fixed phases | How much detail about arrivals does the team need to study queues? |
| Investigate detector feasibility | An account of what a candidate detector can report and what installation would require | Once the team knows what it needs to observe, could this equipment supply it? |

The team chooses the arrival comparison. The north–south and east–west vehicle groups in the workshop sketch are enough to start. Fixed phases give the engineers a reference for a later proposal, such as a controller that adjusts its phases in response to arrivals. Mapping conflicts takes priority before a change to which movements can proceed together.

## Vision, initiative, increment and backlog are different things

The **vision** describes the lasting outcome the city wants for the people who use the intersection. A **theme**, such as improving signal operation, groups related efforts toward that outcome. Within it, an **initiative** focuses on a problem worth sustained work. The vehicle-queue initiative asks under what arrival conditions a fixed sequence merits further study.

The **roadmap** shows how one decision depends on another. First the engineers plan to compare the two arrival patterns. If they can explain the traces at the review, their next increment will be to draw up that request for arrival data with operations staff. A detector study moves up the roadmap if the information they need is missing.

An **increment** is a piece of work with a result the team can evaluate. The first delivers the prototype and its two queue traces. The **backlog** orders the work for this and later increments. Entering the two patterns and tracing the queues over eight abstract time slots are tasks for this review. Further out, uncertainty is expected. A question about what a detector might need to sense is enough to keep that option on the roadmap.

<span id="two-roadmaps-should-influence-each-other"></span>

## Plan for more than software

<span id="exploration-and-delivery-can-run-together"></span>

The product roadmap leaves the choice of controller open, but the team can commit to delivering a trace for the review. Its engineering work depends on how often it expects to run that comparison. For one study, two colleagues might check a short trace by hand. If several designs will use the same model, a check that reruns a known input after each change may be worth building. The [case source collection](../../case-study/README.md) includes inputs and a reference trace for that purpose.

The modelers can try a change as soon as the inputs are ready. Assessing a new detector also depends on a supplier's interface definition and access to a sample. An installation trial would need cabinet access and a work window agreed with operators. Electrical and operations staff can identify those dependencies on the roadmap now, then schedule the physical work if the team takes the detector option forward.

## Define a stopping and replanning rule

Before the comparison, the groups agree that if they cannot reproduce one slot by hand from the same inputs, they will pause before interpreting the full traces. Otherwise, a difference caused by how they counted could look like an effect of the arrival pattern.

Suppose this happens at the review. In the first slot of the staggered pattern, the north–south queue starts empty. The signal is green for that group and one vehicle arrives. The modelers add the vehicle before serving the queue, so it leaves on green. In the operations group's sketch, service comes first. The group serves an empty queue, adds the arrival and records one vehicle waiting. What would you schedule ahead of the planned data request? Which level of the plan would that change?

> **Explore further**
>
> In each slot the model adds arrivals, serves at most one vehicle from the green group and records the remaining queues. Check the first slot of scenario A against the [event-order rule and scenario inputs](../../case-study/model-inputs-v1.json).

## Keep a small decision record

The systems lead records why the next increment has changed and what would make the team ready to move on.

| Planning decision | Entry for the concept review |
| --- | --- |
| Provisional choice and reason | Keep fixed phases as the working baseline. The first-slot disagreement concerns when a vehicle can leave, and the prototype already defines that rule. |
| Revised increment | Postpone the request for arrival data. Deliver a comparison of the two existing patterns that both groups can reproduce. |
| First backlog items | Correct the operations sketch, check the first slot together and rerun both patterns using the recorded rule. |
| Review trigger | When the modeler and operations engineer can account for the same queues slot by slot, return to the data request. Ask which available records could place an arrival within a signal phase. |

> **Concept**
>
> The disagreement about one slot changes the increment and its backlog. If the city makes pedestrian crossings its immediate priority, the team would revisit the vehicle-queue initiative and bring the movement-conflict investigation forward. Both choices serve the city's long-term intent.

<!-- interactive: chapter-quiz -->

<span id="why-the-information-must-become-connected"></span>

## From a planning decision to shared knowledge

The decision record explains why the work changed. Where should the event-order rule live so both teams use the same version as the prototype evolves? [Chapter 4 shows how teams connect shared definitions to the models that use them](04-engineering-knowledge-as-code.md).
