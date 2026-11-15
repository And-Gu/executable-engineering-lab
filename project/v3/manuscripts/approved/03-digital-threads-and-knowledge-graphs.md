# Chapter 3 — Digital Threads and Knowledge Graphs

## Why relationships matter

In the previous chapter, we explored how engineering information can be structured into specifications, models, decisions, and other connected objects.

The next step is to make the relationships between these objects useful.

Consider a change to a software-controlled product. A new function may affect system behavior, interfaces, performance, tests, and operating instructions.

Understanding these consequences can require substantial manual effort when engineering information is distributed across different tools and disciplines.

A connected engineering information environment makes this work more systematic.

Two important concepts are the **digital thread** and the **knowledge graph**.

They are related, but they serve different purposes.

## Digital threads: Connecting the engineering lifecycle

A digital thread connects relevant engineering information across the lifecycle of a product.

It allows us to follow relationships between intent, specifications, design decisions, implementation, verification, and operational feedback.

For example, a requirement may be associated with a system function, an implementing component, a verification procedure, and a recorded test result.

These connections make it possible to understand not only what the system is supposed to do, but also how it was defined, implemented, and evaluated.

A digital thread does not require every engineering discipline to use the same tool. Information can remain in different authoritative sources while being connected through shared identifiers and meaningful relationships.

The result is greater continuity between engineering activities that have traditionally been separated.

## Knowledge graphs: Making relationships useful

A knowledge graph represents information as entities and relationships.

An entity might represent a function, requirement, component, interface, decision, test, or engineering artifact.

Relationships describe how these entities are connected.

For example:

- A component implements a function.
- A test verifies a requirement.
- A design decision depends on an assumption.

These relationships can be explored, queried, and visualized.

A knowledge graph makes it possible to move beyond navigating individual documents. Instead, engineers can investigate the information surrounding a particular function, requirement, or decision.

The distinction becomes clearer when we consider a practical engineering question:

*If we change the traffic controller's signal-selection algorithm, what else needs to change, and which previous verification results remain applicable?*

A knowledge graph helps identify connected functions, interfaces, requirements, components, and tests.

The digital thread provides the lifecycle context: which configurations were implemented, why decisions were made, what was verified, and which evidence belongs to each product baseline.

**A digital thread connects engineering information across the lifecycle. A knowledge graph provides a structured way to represent and explore relationships within that information.**

The two concepts complement one another. A knowledge graph may even provide part of the technical foundation for implementing a digital thread.

## Greenfield Engineering: Building Knowledge

Greenfield engineering begins without an established product baseline. The challenge is to explore the problem and progressively develop a useful system definition.

We may understand the operational need and some constraints without knowing the architecture or detailed behavior.

At this stage, connected information helps us explore the problem.

For our traffic intersection, we might begin by identifying the surrounding road network, traffic participants, operational objectives, and safety constraints.

An AI agent can propose candidate functions and relationships, identify missing information, and suggest questions for further investigation.

As the concept develops, the information network becomes richer.

Functions become associated with candidate components. Interfaces are identified. Models are introduced to investigate behavior. Design decisions are recorded with their rationale.

The digital thread grows as engineering knowledge matures.

Experiments may challenge earlier assumptions, and alternative architectures may remain open until sufficient information is available to make a decision.

## Brownfield Engineering: Managing Change

Brownfield engineering begins with an existing system. The challenge is to understand its current definition, dependencies, and evidence before introducing changes.

We now have an established product configuration, implemented functions, verified requirements, and a history of engineering decisions.

A proposed change must be understood in relation to this existing baseline.

Suppose operational feedback indicates that vehicles experience excessive waiting times during peak hours.

The engineering team considers introducing an adaptive signal-control strategy.

Before implementing the change, we need to understand which functions, components, interfaces, requirements, and tests may be affected.

The information model helps identify these relationships.

A knowledge graph can visualize the affected elements, while the digital thread connects the proposed change to existing engineering definitions and evidence.

This supports change-impact analysis and helps the team understand the consequences before committing to implementation.

Greenfield and brownfield engineering are not fundamentally different methodologies. Both involve exploration, modeling, specifications, and verification. The difference lies primarily in the starting conditions and the information already available.

## From impact analysis to engineering change

A useful digital thread supports more than identifying affected files.

It helps engineers understand the technical consequences of a proposed change.

An AI agent can inspect the relevant engineering information and prepare a change proposal.

The proposal may identify affected specifications, candidate design modifications, new verification needs, and unresolved questions.

After implementation, the engineering environment can check that relevant artifacts have been updated and that applicable tests have been executed.

New verification results become associated with the changed configuration.

The engineering history remains available, allowing the team to understand how the system evolved and which evidence applies to each configuration.

## Supporting rapid delivery

Connected engineering information also influences how quickly a product can be changed.

Consider an organization aiming to release eligible software changes within 24 hours.

The implementation itself may take only a few hours.

But the organization must also understand the change, evaluate its consequences, update relevant information, execute appropriate verification, and prepare the release.

If these activities depend on manually searching disconnected systems, the delivery objective becomes difficult to achieve.

A well-maintained digital thread reduces the effort required to find and interpret relevant information.

Automation can support impact analysis, consistency checking, test selection, and documentation updates.

The delivery target therefore influences how engineering information should be structured and maintained.

## Connected information as context for AI agents

AI agents depend on relevant context.

An agent asked to modify a traffic controller needs more than the source code of the function being changed.

It may need applicable requirements, interfaces, operating assumptions, architectural constraints, previous decisions, and verification procedures.

A connected information model makes it possible to assemble this context systematically.

Instead of providing every available document, the engineering environment can identify information relevant to the specific task.

This makes engineering context more focused and easier to maintain.

The same relationships that support human understanding can therefore support agent-driven engineering activities.

## Applied to the traffic intersection

Our reference system now contains a small network of engineering information.

The reader can select a function, such as signal phase selection, and explore its relationships to the controller, relevant constraints, behavior models, and verification activities.

We then introduce a proposed change: adaptive control based on vehicle detections.

The reader examines which parts of the system may be affected and which additional information is needed before implementation.

The same information network will later support agent-assisted change proposals, automated verification, and continuous delivery.

## From connected information to executable models

Structured information and meaningful relationships help us understand how a system is defined and how its elements depend on one another.

But understanding these relationships does not necessarily tell us how the system will behave.

How long will vehicles wait at our intersection? What happens when traffic arrives unevenly? How does a different signal-control strategy affect queues and throughput?

To investigate these questions, we need models that can be executed.

In the next chapter, we will explore how executable engineering models turn assumptions and specifications into experiments, simulations, and measurable results.

## Key takeaway

**Digital threads connect engineering knowledge across the product lifecycle. Knowledge graphs make relationships inspectable and analyzable. Together, they support engineering decisions, change-impact analysis, agent context, and continuous product evolution.**
