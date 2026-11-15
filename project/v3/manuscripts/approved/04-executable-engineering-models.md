# Chapter 4 — Executable Engineering Models

## From describing a system to understanding its behavior

An engineering information model helps us describe a system: its functions, components, interfaces, requirements, and relationships.

But describing a system does not necessarily tell us how it will behave.

Consider a traffic intersection. We may understand that a controller operates traffic signals, receives information from vehicle detectors, and follows defined safety constraints.

This gives us a system definition, but it does not answer questions such as:

- How long will vehicles wait during peak traffic?
- What happens when vehicles arrive unevenly?
- How do signal timings influence queue lengths?
- Can the controller transition between signal phases without allowing conflicting traffic movements?

To investigate these questions, we need models that can be executed.

An **executable engineering model** represents selected aspects of a system in a form that allows us to calculate, simulate, or evaluate its behavior.

It makes it possible to explore engineering questions before committing to a complete implementation.

## Different models answer different questions

Engineering models can take many forms.

A structural model describes components and their relationships. A functional model describes what a system does. A behavior model describes how the system responds to events, inputs, or changing conditions.

Executable models add the ability to calculate or simulate outcomes.

For example:

- A mathematical model can estimate the braking distance of a vehicle.
- A state machine can represent the operating modes of a traffic controller.
- A discrete-event simulation can represent vehicles arriving, waiting, and passing through an intersection.
- A dynamic model can describe how a mechanical or electrical system responds over time.

The choice of model depends on the question we want to answer.

A sophisticated model is not necessarily a better model. A simple representation may provide sufficient insight for an early engineering decision.

The challenge is to select an appropriate level of detail.

## Developing models through specifications

Traditionally, executable models have often been created directly in specialized tools or programming environments.

These tools remain valuable, particularly when domain-specific mathematics, simulation engines, or established engineering libraries are required.

AI agents introduce another way to develop models.

An engineer can describe the system behavior to investigate, define relevant assumptions, and ask an agent to propose an executable representation.

For our intersection, an initial instruction might be:

*Develop a simple simulation of a four-way traffic intersection. Model vehicle arrivals, signal phases, and queues. Begin with fixed signal timing and identify the assumptions needed to calculate waiting times and throughput.*

The agent can propose a model structure, define inputs and outputs, and implement an initial simulation.

The engineer can then explore its behavior, refine the specification, and introduce additional complexity where it provides useful information.

This is specification-driven engineering in practice.

The executable model becomes a maintained engineering artifact rather than an isolated calculation created for a single investigation.

## Modeling the traffic controller

We can begin with the traffic controller itself.

The intersection has two opposing traffic directions: north–south and east–west.

For our initial model, traffic traveling in opposite directions along the same road receives the same signal phase.

The controller cycles through a sequence of states:

1. North–south traffic receives green while east–west traffic remains red.
2. North–south traffic transitions to amber.
3. All vehicle signals remain red during a clearance interval.
4. East–west traffic receives green while north–south traffic remains red.
5. East–west traffic transitions to amber.
6. Another all-red interval completes the cycle.

This is a simplified state machine.

The model can be executed to investigate state transitions, timing behavior, and basic safety properties.

We can also express the state machine visually, making it easier to inspect and discuss.

The same behavior definition should support both the simulation and its corresponding engineering view.

## Introducing traffic flow

A working traffic controller does not tell us much about how efficiently vehicles move through the intersection.

For that, we need to represent traffic arriving at the signals.

We can start with two different arrival models.

**Model A — Regular arrivals**

Vehicles arrive at fixed intervals. This provides a predictable traffic pattern and makes it easier to understand the relationship between arrival rate, signal timing, and queue development.

**Model B — Random arrivals**

Vehicles arrive at irregular intervals. A Poisson arrival process is one possible simplified representation, where arrivals occur independently at a defined average rate.

The two models can use the same average number of vehicles per hour.

However, their behavior may differ considerably.

Under regular arrivals, traffic demand is distributed evenly over time. Under random arrivals, several vehicles may arrive close together, followed by periods with little traffic.

These differences influence how queues develop and how vehicles experience waiting times.

By changing the arrival model while keeping the traffic controller unchanged, we can investigate how assumptions about the environment influence predicted system performance.

## Executing the model

A useful simulation needs clearly defined inputs, outputs, and execution conditions.

For the intersection, inputs might include traffic arrival rates, signal timings, simulation duration, and the traffic arrival model.

The simulation produces observations such as:

- Average vehicle waiting time.
- Maximum queue length.
- Vehicles passing through the intersection.
- Number of vehicle stops.
- Signal-state transitions.

The reader should be able to change selected parameters and see the resulting behavior.

To compare simulations meaningfully, we also need reproducible execution conditions. For random arrivals, this includes controlling the random seed and recording the scenario configuration.

Repeated simulations can then be used to investigate variability rather than relying on a single result.

## Model fidelity and engineering decisions

Every engineering model is an abstraction.

Our initial traffic simulation might assume that vehicles are identical, travel through the intersection at a fixed rate when signals permit, and do not change lanes or turn.

It may exclude pedestrians, weather conditions, emergency vehicles, and physical limitations of the road layout.

These simplifications are intentional.

The model is designed to help us understand how arrival patterns and signal timing influence traffic behavior.

If we later need to investigate pedestrian safety or the interaction between turning vehicles, we will need additional detail.

Model fidelity should therefore evolve with the engineering questions.

The important consideration is whether the model represents the behavior needed for the current investigation, not whether it captures every aspect of the real system.

## Connecting models to engineering knowledge

An executable model becomes more valuable when it is connected to the engineering information introduced in earlier chapters.

The traffic simulation can reference the functions it represents, the assumptions it uses, and the scenarios it evaluates.

Its results can be associated with specific model versions and input configurations.

A requirement may define an expected behavior, while an executable test evaluates whether that behavior is represented correctly.

These relationships allow the model to become part of a broader engineering workflow.

When a specification changes, we can identify which simulations or tests may need to be updated. When a simulation produces an unexpected result, we can investigate the assumptions and decisions behind it.

The model is no longer simply a tool for calculating an answer. It becomes a reusable source of engineering knowledge.

## Applied to the traffic intersection

In this chapter, we extend our reference system with two executable capabilities.

First, we introduce a traffic signal state machine that represents the controller's basic behavior.

Second, we introduce a traffic flow simulation that models vehicles arriving, waiting, and passing through the intersection.

The reader can compare regular and random traffic arrivals using the same signal-control strategy.

The objective is to understand how different modeling assumptions influence system behavior.

In the next chapter, we will use these models to investigate alternative control strategies, design experiments, and evaluate engineering trade-offs.

## Key takeaway

**Executable engineering models turn specifications and assumptions into opportunities for investigation. By connecting models, simulations, and results to structured engineering information, we can progressively improve our understanding of a system and make better-informed engineering decisions.**
