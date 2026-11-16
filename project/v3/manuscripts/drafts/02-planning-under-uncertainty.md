---
id: eel-v3-ch02-planning
chapter: 2
part: "I — Engineering in the Age of AI"
title: "Planning Under Uncertainty"
status: draft
reference_case: four-way-traffic-intersection
publication: unpublished
---

# Planning Under Uncertainty

*How should we plan when the product is still partly a question?*

The city has asked for better traffic flow through our four-way intersection. The team could change signal timings, investigate vehicle detection, redesign a physical approach or explore adaptive control. Each direction requires different information. Some work can be done in a model this week; other work depends on equipment, installation or approval.

A detailed project plan might make all of these activities look equally definite. They are not. Some are **investigations** whose outcome is uncertain. Others are **deliverables** the team can define and commit to. Treating them as the same kind of work encourages premature promises.

Planning under uncertainty means making those differences visible while still making progress.

## Plan around an outcome, not an imagined solution

A **vision** describes the intended change in the world: an intersection that serves road users more effectively while maintaining acceptable safety and operation.

A **theme** identifies a broad direction of effort, such as improving traffic-flow understanding. An **initiative** defines a meaningful problem to pursue. Roadmap increments describe capabilities the team intends to demonstrate or deliver. A backlog contains more specific work that can be taken on when its purpose and dependencies are understood.

None of those layers requires the team to decide at the outset that it must build an AI-controlled intersection. That would confuse a possible solution with the goal.

Suppose the team proposes an initiative: *Determine whether changes to signal control can reduce avoidable waiting under representative demand.* It can now identify questions that make the initiative actionable. What are the arrival patterns? Which movements are in conflict? What does the current timing achieve? Which assumptions are too weak to support a decision?

The questions themselves become planning information.

## Investigations and delivery commitments are different

Consider three possible next activities.

One is to compare regular and uneven traffic arrivals in a simplified model. Its purpose is to learn how sensitive the conclusion is to the assumed environment. It may reveal that the current timing concept is inadequate, or that the model needs additional detail.

Another is to define a common signal-phase vocabulary, with stable names for functions, interfaces and constraints. That work can be completed and reviewed even while the final controller strategy remains open.

A third is to procure a new detector system. Without knowing whether sensing is necessary or where it can be installed, that is a much stronger commitment and carries potentially long physical lead times.

The team should not force all three into a uniform definition of “done.” A useful investigation might finish with a recorded uncertainty and a decision to stop pursuing an option. A delivered information capability should have inspectable sources and checks. A hardware purchase creates a different set of obligations.

*Suggested decision view: Three candidate activities arranged by their learning purpose, current dependencies, and what decision becomes possible afterward. The reader can inspect each option. No invented priority score is needed.*

## Two roadmaps, one set of decisions

Recall the two systems developed in parallel.

The **product roadmap** concerns intended capabilities: useful signal phases, possible sensing, controller interfaces and eventual operation. The **engineering-environment roadmap** concerns the means to investigate and develop them: controlled information, arrival scenarios, simulations, test fixtures, integration checks and review practices.

These are not competing projects with independent value. An engineering capability earns its place by helping the team answer product questions or deliver product changes reliably.

For example, deciding to evaluate fixed-time control may justify a small, reproducible state model before any controller software is selected. Reusing that model when comparing adaptive-control proposals could make the investment worthwhile. Building a sophisticated simulation platform before the team knows what it needs to compare could instead consume effort without improving decisions.

The correct level of investment emerges through learning. A minimum useful model may be a better first deliverable than a complete toolchain.

## Make assumptions and decisions visible

An assumption can be useful without being established as fact. The important step is to give it a name, an owner where appropriate, and a way to test or revisit it.

The team might record: *For the first comparison, north–south and east–west traffic are represented as two signal groups; pedestrian interactions are not modeled.* That statement tells another engineer what the initial study does and does not address.

A decision record should capture what was chosen and why. If the team adopts fixed timing as a **provisional study baseline**, the record might cite simplicity and repeatability, note alternative strategies and leave actual operational suitability unresolved.

Decision maturity changes over time. A working hypothesis can be revised after a simulation; a candidate interface can become controlled once stakeholders agree on its meaning; a proposed release increment can be postponed if the evidence is insufficient.

The roadmap should change when knowledge changes. Updating a plan in response to an unexpected result is not evidence that planning failed. Ignoring a result to preserve the original dates may be.

## Work at the right cadence

Model studies, software changes, component procurement and physical verification do not share one completion cycle.

Suppose the modeling team learns that arrival variability strongly affects queues. That may be enough to improve the next simulation immediately. It is not enough to order controllers or announce an operational performance improvement. The next roadmapping conversation should show both: what can be explored quickly and which physical or organizational dependencies remain.

Planning also needs to account for the time required to create engineering capabilities. If every experiment must be assembled from incompatible files, the team has a productivity problem that is worth addressing. Yet investment in automation should be a response to repeated or strategically important work, not a substitute for choosing good questions.

## What should we investigate first?

A useful review of the intersection initiative can ask four questions:

1. What decision do we need to make next?
2. Which uncertainty most affects that decision?
3. What is the smallest credible investigation or deliverable that would change what we know?
4. What engineering capability will make that investigation repeatable or its conclusion reusable?

An answer might be: before considering adaptive signals, establish a transparent fixed-time reference scenario and check which conflicts are represented. That creates a bounded next step without freezing the whole system design.

As soon as the team starts sharing those questions and answers, another problem appears. Requirements are in notes, interfaces in diagrams, assumptions in simulation settings and decisions in meeting records. If each engineer works from a different interpretation, progress becomes fragile.

To learn and deliver together, we need **engineering knowledge we can maintain and connect**.
