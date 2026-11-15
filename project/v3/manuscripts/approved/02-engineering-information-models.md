# Chapter 2 — Engineering Information Models

## What makes engineering information useful?

An engineering project produces a considerable amount of information.

Some of it describes what a system should achieve. Other information describes its architecture, interfaces, behavior, constraints, implementation, or verification.

Traditionally, this information has been maintained in different tools. Requirements may live in a dedicated database, architecture in a modeling environment, simulations in MATLAB, and implementation in software repositories.

These tools serve different purposes. The challenge is that the information they contain often becomes difficult to connect, interpret, and change consistently.

An engineering information model addresses this problem.

It defines the information we need, what that information means, and how different engineering objects relate to one another.

The objective is not to collect everything in one database or replace every specialized engineering tool. It is to establish enough shared structure that people, software, and AI agents can work with engineering knowledge reliably.

## Documents, models, and information

A document is a way of presenting information.

A model is a representation of some aspect of a system or problem.

An engineering information model describes the concepts and relationships that make engineering information meaningful.

These are related, but they are not interchangeable.

For example, a system architecture document may contain descriptions of components and interfaces. A SysML diagram may visualize those components and their relationships. A structured information model can identify the same components and connect them to requirements, decisions, tests, and other information.

The value comes from maintaining meaningful relationships rather than repeatedly copying information between representations.

Different sources can remain authoritative for different kinds of information. A CAD system may own detailed mechanical geometry, while a version-controlled specification owns an interface contract.

The information model connects these sources without pretending that every engineering discipline can be represented adequately in one format.

## From engineering intent to structured information

Consider our traffic intersection example.

An engineer begins with the intent to improve traffic flow while maintaining safe operation.

An AI agent can help explore this intent by identifying possible functions, assumptions, constraints, and unanswered questions.

The initial model might identify a traffic controller, signal groups, vehicle detectors, pedestrian requests, and the external traffic environment.

It might also identify functions such as detecting vehicles, selecting signal phases, managing transitions, and responding to faults.

These elements provide an initial structure for the engineering work. As the concept develops, the model becomes more detailed and new relationships emerge.

This is an important aspect of specification-driven engineering.

The engineer does not need to manually author every model element. Instead, engineering work can increasingly focus on developing the definition, exploring alternatives, and making decisions using a shared information base.

## The role of specifications

A specification describes some aspect of what is required, intended, constrained, or defined.

Early specifications may be exploratory. They can contain open questions, alternative solutions, and assumptions that have not yet been resolved.

As development progresses, selected information becomes more precise and controlled.

For example:

*The controller shall prevent conflicting vehicle movements from receiving permissive signals simultaneously.*

This is a candidate safety-related requirement.

To make it useful for verification, we must define what constitutes a conflicting movement, which signal states are permissive, and under which operating conditions the rule applies.

The requirement can then be connected to a behavior model and appropriate verification methods.

Specification-driven engineering does not mean producing a complete specification before development begins.

It means maintaining enough explicit engineering information to guide the next meaningful activity and preserve the knowledge gained.

## Modeling through natural language

AI agents introduce a new way to develop and maintain engineering models.

An engineer can ask an agent to identify missing interfaces, propose a functional breakdown, compare alternative architectures, or generate a view of the current system definition.

Natural language becomes an important engineering interface.

The results are captured in structured specifications, model elements, decisions, and relationships that can be versioned and reused.

This creates a workflow in which engineers can direct modeling activities through dialogue while maintaining persistent engineering knowledge beyond individual conversations.

**Prompts direct engineering work. Specifications preserve engineering knowledge.**

## One model, multiple views

The same engineering information can support different representations.

A functional view can show how the system's responsibilities are decomposed.

A structural view can show components and interfaces.

A behavior view can show states, transitions, and interactions.

A requirements view can show constraints and verification relationships.

SysML can be useful for expressing and visualizing formal systems engineering concepts. Mermaid and other diagramming tools can provide simpler explanatory views.

The important architectural principle is that views should reflect shared engineering information rather than become independent, contradictory descriptions.

Formal representations may require additional semantics or specialized source models. The appropriate representation depends on what the engineering work needs to express.

## Maintaining information quality

An engineering information model needs more than a consistent file structure.

Identifiers, relationships, assumptions, and definitions must remain meaningful as the system evolves. Changes need to be traceable, and important technical conclusions need suitable review and verification.

These principles apply whether information is created manually, generated by software, or developed with AI agents.

## Applied to the traffic intersection

In the reference system, we begin with a small set of engineering objects:

- An operational intent.
- A system boundary.
- Candidate functions and components.
- External interfaces.
- Initial constraints and assumptions.
- Open engineering questions.

We then generate different views of the same information.

The reader can inspect how a traffic controller relates to signal groups, detectors, and control functions.

Later chapters will extend this model with behavior, requirements, experiments, verification results, and engineering changes.

The objective is not to create the most sophisticated traffic model. It is to demonstrate how engineering knowledge can evolve without losing its structure or meaning.

## Key takeaway

**An engineering information model makes technical knowledge explicit, connected, and reusable. AI agents can help develop and maintain that knowledge, while structured specifications provide continuity across engineering activities.**
