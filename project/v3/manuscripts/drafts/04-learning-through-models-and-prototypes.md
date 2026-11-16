---
id: eel-v3-ch04-models
chapter: 4
part: "II — Building Engineering Knowledge"
title: "Learning Through Models and Prototypes"
status: draft
reference_case: four-way-traffic-intersection
publication: unpublished
---

# Learning Through Models and Prototypes

*Which experiment would help us decide whether a proposed signal strategy is worth developing?*

The intersection's engineering information now contains candidate functions, constraints, interfaces and decisions. That makes the design easier to describe. It does not tell us what will happen when traffic arrives unevenly or when the controller changes phases.

We could build physical equipment and observe it. But that would be a costly first experiment for a concept whose important assumptions are still unsettled. We need a smaller model that answers a specific question without pretending to represent the entire intersection.

Models and prototypes make uncertainty easier to investigate. The important skill is not running the most elaborate simulation. It is choosing an experiment whose results can influence the next engineering decision.

## Begin with the question, not the model

Imagine two possible questions.

**Question A:** Can a proposed state sequence prevent the two conflicting vehicle-signal groups from receiving permissive signals at the same time?

**Question B:** How does irregular vehicle arrival affect queues and waiting time when the controller follows a fixed phase sequence?

The first is mainly about behavior and permitted transitions. The second needs a representation of vehicles entering and leaving queues over time.

A single diagram may communicate part of both questions, but it cannot establish the answers. Conversely, a large traffic simulator would add complexity before we know what level of detail is necessary.

The team should choose the simplest model that can produce relevant, inspectable information. It should also be explicit about what the model excludes.

## A small executable behavior model

For the first study, imagine only two vehicle-signal groups: north–south and east–west. This ignores many real movements and users, intentionally.

The controller has a simplified sequence: north–south green, north–south amber, an all-red clearance interval, east–west green, east–west amber, then another all-red interval before repeating.

This is a **state machine**. Each state has a meaning; transitions occur according to defined conditions such as elapsed time. The rule that conflicting vehicle groups must not both receive green can be expressed as a candidate property of this particular simplified model.

An executable state model can step through its sequence and check that the property holds for the represented states. It is a useful verification of a model definition. It says nothing by itself about real wiring, signal-head failures, road geometry or pedestrian conflict rules.

*Suggested first view: A labeled state sequence beside a simple intersection sketch. Selecting a state highlights its permitted vehicle group and the transition condition. The labels and state table remain available without animation.*

## Add the environment: vehicles do not arrive on command

Now consider the second question. A signal controller operates within an environment, and the environment affects what its behavior means.

A first traffic model could assume that vehicles arrive at regular intervals. This makes queues easy to reason about. When the signal is red, the queue increases; when green permits departures, vehicles leave according to a simplified service rule.

But actual arrivals may be irregular. Several vehicles can appear close together, followed by a quiet period. A stochastic model can illustrate that variability. For a teaching experiment, a seeded random generator makes the same illustrative run reproducible.

Use the **same average demand assumption** when comparing regular and stochastic arrivals. Otherwise, the reader cannot tell whether a changed queue came from arrival variability or increased demand.

The simulation may calculate queue length over time, modeled throughput and estimated waiting time. It should show both a short time history and a summary rather than reducing the experiment to one impressive number.

If two runs differ, ask which input or assumption changed. If an irregular-arrival scenario gives a longer queue, that is a result of the stated model, not a prediction of an actual intersection.

## Make the comparison interpretable

Good experiments maintain the relevant conditions.

Suppose the team changes the green-time allocation while also changing demand, clearance time and departure rate. Any difference in queue length is difficult to interpret. A controlled first comparison changes one relevant factor and records the others.

For random input, a single seeded run is reproducible but may not represent the full range of outcomes. Repeating a comparison with several documented seeds can show whether a conclusion depends on a particular generated sequence.

The reader should be able to predict, run, inspect and explain: What did we expect? What changed? What did the model report? Which explanation is justified by those inputs?

A meaningful learning interaction might let a reader choose regular or irregular arrivals, examine an illustrative phase-and-queue timeline, and reset to the same reference configuration. The corresponding table should make the result understandable without requiring a browser animation.

## Fidelity is a decision, not a badge

A model's **fidelity** is about how adequately it represents the aspects relevant to the question. More detail is not automatically more useful.

Our teaching model does not include turning conflicts, cyclists, pedestrians, realistic vehicle movements, signal faults, emergency vehicle priorities or detailed electrical equipment. It should not claim operational road safety. Those omissions matter when the engineering question expands beyond the simplified controller or queue comparison.

A functional model might help identify the responsibilities of sensors and controller. A behavioral model helps investigate state transitions. A physical prototype may reveal a wiring, installation or timing problem that a simple simulation cannot capture. A field study may be needed to understand real traffic conditions.

These methods can inform one another. Unexpected prototype behavior may invalidate an assumption in the model. A model may show which physical test is worth performing next.

## The engineering environment gains a capability

The useful output of this chapter is not merely one simulation result.

The team has developed a repeatable way to investigate an engineering question: a defined model, assumptions, scenario inputs, an execution method and a form in which another engineer can inspect the result. A new product option can be tested against that capability, and the capability itself can be improved when a new question demands it.

Keeping the calculation separate from its animation or chart helps avoid a subtle error: a beautiful interface whose numbers follow different rules from the underlying model. The source, model and view should describe the same experiment.

AI agents may help prepare tests or analyze outcomes when given appropriate context and tools. The usefulness of their work still depends on whether the model represents the relevant question and whether its results can be reproduced.

## What happens to the results?

Our simplified model now produces sequences of signal states, arrival events, waiting estimates and queue lengths. Those outputs can guide the next investigation only if we understand their origin, units, assumptions and comparability.

A simulation may run correctly and still produce data that are incomplete, poorly labeled or misunderstood. Before using results in a decision, we must improve the information itself.

That leads to **Engineering Data: From Measurements to Decisions**.
