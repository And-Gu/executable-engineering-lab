---
id: eel-v3-ch04-engineering-knowledge
chapter: 4
part: "II — Build and Test Knowledge"
title: "Engineering Knowledge as Code"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — synthetic editorial source"
---

# Engineering Knowledge as Code

*What does a recorded engineering relationship actually let us conclude?*

A city wants to explore whether a four-way intersection could operate more effectively. The engineers have an intended outcome, a candidate signal-selection function, a simple interface idea and several unknowns. A proposed adaptive control strategy could change far more than the timing algorithm: it might affect what detector information is available, how signal commands are represented and which properties need checking.

Someone asks: “What would this change affect?”

A diagram of connected boxes might be a useful starting point. But the answer depends on what each box means, what each line asserts, and whether the information refers to the same revision of the concept. The useful capability is not drawing a network. It is maintaining engineering information that people and tools can inspect, question and revise.

## Documents, engineering information and views

Documents are convenient ways to communicate. They can explain a need, record a decision, or give an overview of a design. The difficulty appears when the same requirement, interface or assumption is copied into several independently maintained files. After a change, each copy may tell a different story.

An **engineering information model** gives important concepts stable identities and defined meanings. For our small intersection case, we use candidate source objects with IDs rather than relying solely on a paragraph's wording.

| Teaching record | Meaning in the fictional T1 concept | What it does not establish |
|---|---|---|
| INT-NEED-001 | Intent to investigate more useful intersection operation | A settled operational performance target |
| INT-FUN-001 | Candidate function to select signal phases | A controller that has been built or qualified |
| INT-REQ-001 | Candidate rule against simultaneous NS/EW permissive greens | Safety in every real operating situation |
| INT-IF-001 | Proposed controller-side signal command interface | Compatibility with installed electronics |
| INT-MOD-001 | Simplified phase-state model | The behavior of a physical traffic signal |

These records are from a [single fictional T1 source set](../../case-study/source-graph-v1.json), not actual city project documents. Their IDs make it possible to show the same object in different views while preserving a link to its meaning and status.

A **view** is a purposeful representation of those sources. A functional diagram answers what the controller needs to do. An interface view asks which information crosses a system boundary. A requirements view asks which rules constrain behavior. A behavioral model explores change over time.

The views may look quite different. They should not quietly create competing definitions of the same interface.

## One source, several useful perspectives

Consider the candidate phase-selection function.

A functional view might show inputs, decisions and commanded states. A structural view might show the controller and a signal-driving interface. A requirement view might show the no-conflicting-permissive rule. A behavior view might point to a phase state machine, which we will investigate in the next chapter.

SysML v2 can express various system-modeling concepts formally and provide useful textual or graphical representations. Whether it is the right format depends on the engineering environment and the problem. A drawing styled to resemble a SysML view is not automatically a valid SysML model; formal claims require checking the actual language and semantics. The [OMG SysML v2 specification](https://www.omg.org/spec/SysML/2.0) is the appropriate reference for those details.

The educational principle here is independent of one tool: **give engineering meaning a maintained source, and derive useful views from it**. The purpose is to make changes and reviews easier to reason about, not to mandate that every engineering discipline store all its work in one database.

## Relationships need types, direction and a source

Our small teaching graph includes twelve objects and eight typed relationships. A few are enough to make the issue concrete:

| From | Recorded type | To | What a reader may infer |
|---|---|---|---|
| INT-REQ-001 | constrains | INT-FUN-001 | The candidate function is described as subject to that model property |
| INT-MOD-001 | represents | INT-FUN-001 | The teaching model is intended to represent that function |
| INT-EXP-001 | examines_model | INT-MOD-001 | The defined experiment is intended to examine the teaching model |
| INT-TST-001 | check_targets | INT-REQ-001 | A *proposed check* addresses a property; **no passing result is asserted** |

All four relationships have a direction and an asserted source revision. They exist in the **fictional teaching fixture**. “Recorded” means that someone can find the assertion there; it is not evidence that an actual product has implemented or satisfied it.

This distinction becomes especially important with automated reasoning. A relationship saying that a test **targets** a requirement is not a result showing that the requirement **passed**. An arrow saying that a model **represents** a function does not tell us whether the model predicts real physical behavior.

If a view hides those differences, it can make incomplete knowledge appear more complete than it is.

## A change-impact question the graph can answer

Now imagine a request to investigate adaptive signal selection, recorded as **INT-CHG-001**. It is a proposed alternative, not an approved design decision.

Which objects should the engineer examine first?

The graph explicitly connects the simplified model to the phase-selection function. That gives the engineer a defensible starting point: **INT-MOD-001 is a model-review candidate** if the function changes. The proposed change also flags the controller interface as a possible impact.

But a *possible impact* is not yet an established changed requirement, a broken interface or an evidence-based conclusion. Someone must investigate the connection and document what was found.

There is a second, easily missed case. Suppose a proposed link points to **INT-IF-UNKNOWN**, which is not an object in the maintained source. A graph interface must show the unresolved reference. It must not draw a convincing-looking line to a similarly named node or conclude that the unrecognized target does not matter.

Try the reverse question: if there is no direct edge from the proposed change to an operator procedure, have we shown the procedure is unaffected?

No. A missing recorded relationship is not proof of independence. It may reveal an information gap.

## Digital threads and knowledge graphs

A **digital thread** connects relevant engineering information across the life of a system: intent, definition, architecture, implementation, verification and later change. It becomes useful when an engineer can follow a particular question to the sources and results that bear on it.

A **knowledge graph** is one way to represent objects and their typed relationships so that those connections can be inspected or queried.

The two ideas are related but not interchangeable. A graph visualization is not the entire digital thread, and a list of traceability links is not automatically sufficient for engineering reasoning. We need object identity, revision, relation meaning, source provenance and a way to distinguish current information from an unselected proposal.

The planned interactive graph for this chapter should use the T1 source set rather than inventing another dataset for the display. Readers should be able to select a function, inspect an edge, reveal an impact candidate, then return to the original state. The [source records](../../case-study/source-graph-v1.json) and a readable relationship table already support that reasoning without requiring the interactive feature. **The browser graph itself has not yet been implemented.**

## Greenfield and brownfield need different questions

At the beginning of a new project, much engineering information is provisional. Engineers learn which functions, interfaces and constraints are worth developing further. The T1 records are a small example of that **greenfield** situation.

Later, when a team is changing an established configuration, it must identify what is actually present, which revision was tested, who owns each source and whether older evidence still applies. That is the **brownfield** impact question.

A stable identifier helps both situations, but it is never a substitute for knowing the revision and context. An interface with the same name may have different semantics after a supplier change. We will return to exactly that problem when the course reaches physical integration.

## What agents can use—and what still needs judgment

An AI agent asked to investigate a proposed change could benefit from structured sources and a typed graph. The relevant context can be selected from the source rather than copied into a very large prompt. Natural language may be the entry point to a question; the controlled engineering definitions must persist beyond a conversation.

That does not grant an agent authority to change a product. Reading a source, proposing an update, executing an authorized check and accepting a design change are different operations. Later chapters examine how an agent works within those boundaries.

The immediate result is simpler: **a reader can tell what was recorded, why a relationship exists, and where the engineering conclusion still stops**.

## From connected knowledge to a useful experiment

We now know where a candidate signal-selection function and its model sit within the information. What we do not know is how that model behaves under different conditions.

The next chapter, **Learning Through Models and Prototypes**, uses the same identified model, a small fixed phase sequence and explicit arrivals to investigate that question. The record of a relationship becomes the starting point for a **reproducible experiment**, not a substitute for one.

**Engineering takeaway:** Treat meaningful engineering information as maintained, identifiable sources. Give every important relation a type, direction, status and provenance. Then use the resulting views to find *review questions*—without mistaking a graph for verified system behavior.

---

*Explore the sources:* [T1 teaching graph](../../case-study/source-graph-v1.json) · [Case study overview](../../case-study/README.md). These are synthetic editorial examples, not authoritative traffic system records.
