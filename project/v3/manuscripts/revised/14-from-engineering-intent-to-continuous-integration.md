---
id: eel-v3-ch14-course-wrap-up
chapter: 14
part: "IV — Establish Trust and Sustain Change"
title: "From Engineering Intent to Continuous Integration"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — recorded queue simulations and interface decision, with a proposed product investigation and an illustrative release"
---

# From Engineering Intent to Continuous Integration

Picture a maintainer filling out a service report for the lab’s fictional four-way intersection. The controller requested amber for the north signal head. The adapter acknowledged the command. The last field asks what the head displayed. Would you enter “amber”? A driver approaching the intersection has to act on the light they can see.

## The journey through Chapters 1–13

### Choose a question the workshop can answer

Chapter 1 asks where earlier feedback could save a team from an expensive change. Comparing two interface definitions while the team can still choose its equipment is one opportunity. Chapter 2 brings the people who use the intersection into that decision. Drivers want shorter queues after bursts of traffic. Pedestrians want to know when they can cross safely. The maintainer wants to distinguish what the controller asked for from what the lamp showed. The team picks a question it can explore on paper. Could the same number of arrivals leave different queues under the same signal sequence? [The New Engineering Paradigm](01-the-new-engineering-paradigm.md#where-earlier-feedback-improves-delivery) · [Setting Up the Intersection Workshop](02-introducing-the-engineering-challenge.md#a-prototype-for-the-first-question).

Two sketches of the first green give different answers. One serves the empty queue before adding the arriving car. The other lets that car leave on green. In Chapter 3, the team postpones its request for traffic records until both groups can reproduce the same step. Chapter 4 puts the agreed order in a versioned source. A link labeled *represents* identifies the model to revisit if the team changes how it selects phases. An engineer can now find both the model to run and the assumption to inspect. [Planning Under Uncertainty](03-planning-under-uncertainty.md#keep-a-small-decision-record) · [Engineering Knowledge as Code](04-engineering-knowledge-as-code.md#a-change-impact-question-the-graph-can-answer).

### Save the observation someone else will need

The team can now run the two-queue model with invented arrivals. In the clustered pattern, scenario B, two north–south vehicles arrive on amber. Move one into the preceding green and it can leave immediately. After eight abstract slots, one vehicle is still waiting, down from two. The team saves the original input, the single edit, model revision T1 and the point at which it counted the queues. A colleague can repeat the experiment or use it to ask a different question. [Learning Through Models and Prototypes](05-learning-through-models-and-prototypes.md#record-what-the-experiment-changed) · [Saved change and observation](https://github.com/And-Gu/executable-engineering-lab/blob/9b8d57b0a18846ec22d927bd76447855b68ce886/project/v3/case-study/data-quality-v1.json?plain=1#L31-L50).

Chapter 6 follows the original patterns through a second cycle. The clustered pattern ends both cycles with two vehicles waiting. Did the model carry the queues forward, or could it have started over and arrived at the same total? Look at the first green of cycle two. One north–south vehicle departs even though only east–west vehicles arrive in that slot. It came from the queue already there. That departure gives the next engineer a way to check the handoff between cycles. [Engineering Data: From Measurements to Decisions](06-engineering-data-from-measurements-to-decisions.md#carry-the-queues-through-a-second-cycle) · [The recorded departure in slot 9](https://github.com/And-Gu/executable-engineering-lab/blob/9b8d57b0a18846ec22d927bd76447855b68ce886/project/v3/case-study/two-cycle-run.json?plain=1#L120-L143).

### Agree on the work an agent can take on

A colleague who wants to repeat that run needs a specification. The traffic engineer and model owner settle what “run it twice” means. Use each original pattern, preserve both queues between cycles, and compare each first-cycle row with the independently checked reference. With that agreement in place, they can give an agent the objective, a model it may run and a reference it may read. If it selects the edited arrival pattern by mistake, it can trace the first difference to an input and rerun the comparison. [Spec-Driven Development Without Waterfall](07-spec-driven-development-without-waterfall.md#the-agent-brief) · [Directing AI Engineering Agents](08-directing-ai-engineering-agents.md#coordinate-several-agents-around-one-engineering-outcome).

Before delegating a larger assignment, the engineers choose a change small enough to review. Ask the agent to implement just the carry-over and try a deliberate queue reset against an independently written test. Once the engineer sees that the change preserves the queues and that the test catches the reset, they can delegate both full runs and the comparison report. If a vehicle disappears at the boundary, trace where it went. If two sources disagree about whether it should carry over, take that assumption back to the model owner. [Planning and Controlling Agents](09-engineering-in-small-reviewable-increments.md#delegate-a-days-work-with-room-for-exceptions).

### Follow the command from the controller into service

Return to the maintainer’s report. Chapter 10 turns their question into a proposed product requirement. When a receipt arrives without independent feedback for that head and command, the display should say “received, indication unknown.” The model still has something to contribute. Its third slot gives the firmware engineer a reference for the expected north–south amber request. Checking what the head displays calls for an observation at the lamp. [From Models to an Integrated Product](10-from-models-to-an-integrated-product.md#define-the-first-product-increment).

Chapter 11 shows how engineers and their agents could bring compatible changes to one review. A coordinator can pair the controller with the display candidate that keeps receipt and observation separate. A candidate that confirms amber on receipt goes back to its engineer. If the electronics team moves a sensor connector, the coordinator also needs the board and enclosure revisions from the mechanical fit review. The proposed contracts explain why. Controller revision A expects confirmation that the indication was applied. Adapter revision B promises receipt of the message. [Reviewing an Integrated Product Change](11-verification-validation-and-engineering-evidence.md#choose-a-combination-to-integrate) · [Recorded contract comparison](https://github.com/And-Gu/executable-engineering-lab/blob/9b8d57b0a18846ec22d927bd76447855b68ce886/project/v3/case-study/DECISION-CHAIN.md?plain=1#L50-L68).

In Chapter 12, Maya Chen, the accountable product decision-maker, defers acceptance of that pair. The interface owners have to agree on the meaning of the reply, including what happens when feedback is missing. The integration reviewer proposes a bench test that would match an independent camera image to the head, command and configuration. That test has yet to run. The maintainer can record receipt and leave the displayed color unknown. [Governance and Engineering Authority](12-governance-and-engineering-authority.md#record-a-decision-then-improve-the-capability-to-make-it).

> **Concept**
>
> To test two explanations, look where they predict different observations. The continuous run ends with two vehicles waiting in scenario B. Starting over with an empty queue would predict two as well. The departure at the first green of cycle two distinguishes them. At the signal head, a receipt could accompany either an amber lamp or a dark one. An independent observation could distinguish those outcomes for that command.

For Chapter 13’s release exercise, assume the current configuration is authorized to report an unknown indication. The service team requests clearer wording for its existing diagnostic, `IND-UNKNOWN`. In the proposed rehearsal, a technician would read the running display, follow the localized instruction and find the right observation kit. The release therefore includes the operator manual, service editions, logistics entry and training exercise. One required translation still awaits review in the example. The release lead holds the candidate. After approval, the team checks that the display opens the revised instruction in the assembled package. If the other evidence still applies, the lead can record that the configuration is releasable. Operations chooses when to deploy it. [Continuously Integrated Engineering](13-continuously-integrated-engineering.md#make-the-whole-product-decision).

## Three practices to take to your next project

### Software-driven product development

Software-driven product development uses versioned sources, short iterations and executable checks to bring changes across the product together frequently. Firmware engineers can check an input mapping each time it changes. Their mechanical colleague can check plug clearance on the drawing while waiting for the board to arrive for a fit check. A release manifest identifies the revisions that belong together. The late translation suggests an improvement to the engineering environment itself. Use the diagnostic code to open the affected language reviews when the change is requested, while the other disciplines still have time to act on their feedback. [The connector and enclosure](10-from-models-to-an-integrated-product.md#follow-an-electronics-change-into-the-enclosure) · [The release manifest](13-continuously-integrated-engineering.md#follow-the-diagnostic-into-service).

### Agentic engineering

An engineer practicing agentic engineering gives an agent an outcome, tools, feedback it can act on and limits on its authority. For the two-cycle simulation, the agent can plan a run, investigate a failed row, correct an indexing error and return the changed calculation with the results of its checks. The model owner judges whether the run answers the traffic engineer’s question. Asking for individual waiting times would change what the model measures, a decision for those engineers. The same division of work lets Maya delegate a display check and retain the product compatibility decision. [Chapter 9’s review by exception](09-engineering-in-small-reviewable-increments.md#delegate-a-days-work-with-room-for-exceptions) · [Maya’s proposed assignment](12-governance-and-engineering-authority.md#give-the-coordinator-a-task-it-can-finish).

### Context engineering

Context engineering means selecting, connecting and keeping current the information someone needs for a particular task. To investigate the adapter, gather the maintainer’s need, the two interface revisions and the test condition that separates receipt from confirmation. The emulator would acknowledge receipt and withhold indication feedback. Link the discrepancy the reviewers found in the contracts and identify the independent lamp observation still to be collected. Those connections form a **digital thread**. A reviewer can trace Maya’s decision back to its reasons. Starting from a revised adapter definition, the same reviewer can locate the display requirement and checks to revisit, keeping the earlier decision with the revisions Maya reviewed. [Chapter 9’s digital thread](09-engineering-in-small-reviewable-increments.md#the-digital-thread) · [Chapter 11’s verification and validation plan](11-verification-validation-and-engineering-evidence.md#verify-the-requirement-and-validate-the-task).

Suppose a colleague picks up the next revision. Which part of the earlier work can they use, and which observation do they owe the next reviewer?

<!-- interactive: evidence-handoffs -->

> **Explore further**
>
> Follow one instruction into a handbook, a training guide and a website in the companion course. Then consider what it costs a small team to keep that work repeatable in the lab’s unnumbered bonus article. [Document-as-Code Lab, Bringing It Together](https://and-gu.github.io/document-as-code-lab/chapters/13-course-summary/) · [Building the Machine That Builds the Machine](/executable-engineering-lab/bonus/building-the-machine-that-builds-the-machine/).

<!-- interactive: chapter-quiz -->

Choose a change on your own desk. What would someone using the product be able to do afterward? Identify an observation that could change your mind, the version it would cover and the person who can make the decision. Leave the next engineer enough of the reasoning to see why you made that choice.
