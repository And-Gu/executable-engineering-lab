---
id: eel-v3-ch03-knowledge
chapter: 3
part: "II — Building Engineering Knowledge"
title: "Engineering Knowledge as Code"
status: draft
reference_case: four-way-traffic-intersection
publication: unpublished
---

# Engineering Knowledge as Code

*If we change the signal-control strategy, how will we know what else might be affected?*

Our team has agreed to investigate the intersection using a simple fixed-time control concept. The question looks manageable until someone proposes adaptive control. The proposal may affect signal-phase selection, detector interfaces, safety constraints, operating modes, tests and the assumptions of the traffic simulation.

There is no reliable change-impact picture if these things exist only as unrelated sentences and diagrams. The team first needs information with defined meaning—and relationships it can inspect.

Engineering knowledge as code means treating important definitions as maintained, versioned and processable information. That does not require replacing every specialist engineering tool. It means giving people and software a coherent way to recognize engineering objects and their relationships.

## A document is not the same thing as an information model

A design note may describe the signal controller in prose. A structural diagram may show the controller connected to the signal heads. A requirements table may list the rule that conflicting movements should not be permitted simultaneously.

All three can be useful. They become difficult to maintain when each contains a separate, independently edited version of the same definition.

An **engineering information model** names the meaningful things: system, function, component, interface, requirement, assumption, decision, test and evidence record. Each needs a stable identity and attributes suited to its type. Relationships say, for example, that a requirement **constrains** a function, an interface **connects** two elements or a test **evaluates** a stated property.

A machine-readable source might be a versioned text file, a modeling repository or structured data from a specialist system. The format matters less than its semantics, ownership and consistency. Being valid YAML or JSON does not make an engineering statement technically correct.

*Suggested introductory visual: One maintained function and requirement shown in three derived views—functional, structural and requirement relationships. A reader can follow the shared identifiers back to their sources.*

## One definition, different engineering views

Different engineering questions need different representations.

A **functional view** shows what the intersection must do: observe inputs, choose a permitted phase and indicate signals. A **structural view** shows candidate components and their interfaces. A **behavior view** shows states and transitions. A **requirements view** relates intended properties to their definitions and checks.

These are views of related engineering knowledge, not interchangeable pictures. A line in a functional view need not mean an electrical wire. A diagram that looks like a SysML model is not automatically a valid SysML v2 definition. Where formal semantics matter, the source and tool must establish them.

SysML can provide useful technical representations. Lightweight diagrams can be better for explaining a simple concept. Neither should create a second hidden source of truth for the important definition.

This separation is useful for engineers and AI agents alike. A natural-language prompt can ask for a view or propose a change, but controlled definitions and decisions need to persist beyond the conversation.

## Relationships make the digital thread useful

A **digital thread** connects meaningful product and engineering information across stages of the lifecycle. It can lead from a need through a requirement and implementation to a test, a configuration and a later change.

A **knowledge graph** provides a way to represent and explore entities and their typed relationships. It can form part of a digital thread, but the terms describe different things. The thread emphasizes continuity across the lifecycle; the graph makes relationships inspectable and queryable.

In our intersection, selecting *signal-phase selection* might reveal a relation to a controller component, a candidate no-conflicting-movements requirement, a phase state model and an associated test.

What should the reader conclude? Only what the relation actually says. If the source records that a test **evaluates** a model-level rule, it does not prove that every physical roadside condition has been verified.

A good graph therefore shows relation type, provenance and status—not just a colorful network of boxes.

## Explore a proposed change

Imagine the reader selects the current signal-phase function in an interactive graph.

The first view shows directly recorded relationships. The reader then chooses a **proposed adaptive-control change**. A new detector input and modified phase-selection behavior appear as proposed information, visually distinguished from the maintained reference.

Following the links may reveal a requirement, controller interface, state model and test that deserve review. Some connections are explicit; others are **possible impact candidates** identified for further investigation.

The graph should not silently promote a plausible effect into an established dependency. The reader must be able to inspect a node, see its source, examine the meaning of a link and reset the proposed change. A table containing the same objects and relationships makes the lesson understandable without a graphical interaction.

That is the central educational interaction of this chapter: not drawing a graph, but learning to ask what a relationship authorizes us to conclude.

## Creating knowledge and changing knowledge

For a new product—**greenfield engineering**—many objects begin as candidates. The team develops the information model as it learns which functions, interfaces and constraints matter.

For an existing baseline—**brownfield engineering**—a proposed modification must be considered against previous definitions, configurations, decisions and evidence. Which tests remain applicable? Which assumptions changed? Which release records belong to the older version?

The same information concepts support both, although the starting conditions differ.

Agents can help identify missing references, propose candidate relations or assemble task context. Engineering review still has to confirm that the underlying relation is meaningful and that the source is authoritative.

## Information supports the next experiment

The intersection's information model gives the team a shared account of what it is trying to investigate. It tells us which function a behavior model represents, what its assumptions are and which candidate requirement it might evaluate.

But relationships alone do not establish how queues develop or when phases change. For that, we need an experiment.

The next step is to use these definitions to **learn through models and prototypes**.
