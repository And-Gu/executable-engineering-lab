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

## Trace the plan to intent

With traditional waterfall planning, an agreed requirement can be allocated to disciplines and traced down to their work and back to the check that demonstrates fulfillment. Suppose, for this hypothetical comparison, the city has agreed that a candidate plan must leave fewer vehicles on the north approach than the reference plan under the specified burst and counting conditions. The controls team defines the candidate phase plan, the modeler prepares the specified scenario, and the verification team checks whether the candidate meets that criterion. The requirement explains why each task belongs. If it changes, the team can identify those dependents and review the check as well.

In agile planning the team can start before that requirement is agreed. Three levels of intent make its changing choices traceable:

| Level | Intersection example |
| --- | --- |
| **Vision** — lasting outcome and people served | Improve traffic flow while people can cross safely. |
| **Initiative** — the problem in focus now | Understand how arrival timing affects vehicle queues under the fixed signal sequence. |
| **Increment** — the next result and decision | Produce two reproducible queue traces so the team can decide what arrival records to request from operations. |

The **backlog** orders the tasks needed for the increment: enter the two patterns, check the rule and compare the eight-slot traces. If the review accepts those traces, the planned next increment is a phase-aligned data request to operations. A roadmap can show dependencies on later work, such as a detector study. A task traces upward to its increment, initiative and vision; a decision record lets the team follow a change back through the same chain.

## Three possible initiatives

### Reduce queues during bursts

The first increment compares two invented arrival patterns under the same fixed phases. It varies arrivals to learn which field records to request. A possible later requirement for an updated signal plan is: **for an agreed burst scenario, fewer vehicles shall remain on the north approach at the end of eight slots than under the reference plan**. The requirement and the following test are illustrative proposals, not an agreed city target or a completed test.

The proposed test, **Compare the candidate and reference plans under the same burst**, starts both plans with the same initial queues and identical arrivals, then counts vehicles waiting on the north approach after service in slot eight. Unlike the first investigation, it holds arrivals fixed and varies the plan. The present T1 model combines north and south approaches, so a test of the north arm alone would need separately represented approaches and suitable inputs before it could support that requirement.

### Protect people crossing a turning path

People crossing, including those with different mobility needs, want a usable crossing without conflict with turning vehicles. Drivers need understandable indications; operators need to know how a change affects movements they manage. An exploratory increment can map crossings and turning paths with those users and ask what is known about indications, crossing distances, how people use the crossing and vehicle movements. Which conflicts need protection, and what evidence would let the team assess them? The queue model does not answer those questions.

### Keep signals understandable and diagnosable

Operators and maintainers need to recognize a wrong or missing indication and know what the controller requested. A possible increment would identify the information available to them and the observations needed to distinguish a command from what a signal actually shows. This investigation supports the same city vision but needs interface and physical evidence beyond the queue traces.

<span id="two-roadmaps-should-influence-each-other"></span>

## Plan for more than software

<span id="exploration-and-delivery-can-run-together"></span>

The product roadmap leaves the choice of controller open, but the team can commit to delivering a trace for the review. Choose the least costly investigation that could credibly change the next decision. Two colleagues can check one disputed slot by hand before investing in a model. If they expect to compare many candidate plans, keeping inputs, expected results and the reasons for choices together can make later comparisons cheaper and preserve learning. Compare the cost of building and maintaining that check with repeated manual work, delay and the potential cost of committing to the wrong design. The [case source collection](../../case-study/README.md) includes inputs and a reference trace for that purpose.

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
| Revised increment | Postpone the planned data request. Reconcile the counting convention together and deliver an agreed comparison of the two existing patterns that both groups can reproduce. |
| First backlog items | Correct the operations sketch, check the first slot together and rerun both patterns using the recorded rule. |
| Review trigger | When the modeler and operations engineer can account for the same queues slot by slot, return to the data request. Ask which available records could place an arrival within a signal phase. |

> **Concept**
>
> The disagreement about one slot changes the next increment and its backlog; the queue initiative and city vision still make sense. If the city makes pedestrian conflicts its immediate priority, the team would revisit the initiative and bring the movement-conflict investigation forward. Both choices serve the city's long-term vision, and the decision record explains why the plan changed.

For the next worked example, suppose the modeler and operations engineer check the first row together and agree to use the documented arrival-before-service convention. They can then compare both traces before requesting field records.

<!-- interactive: chapter-quiz -->

<span id="why-the-information-must-become-connected"></span>

## From a planning decision to shared knowledge

The decision record explains why the work changed. Where should the event-order rule live so both teams use the same version as the prototype evolves? [Chapter 4 shows how teams connect shared definitions to the models that use them](04-engineering-knowledge-as-code.md).
