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

Systems engineers use model-based systems engineering (MBSE) and modeling languages such as SysML to explore functions, interfaces, behavior and requirements. A change to phase selection gives us a practical question to ask of those sources. What else should the engineer review?

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

Each entry has a stable ID in the [intersection source records](../../case-study/source-graph-v1.json). Engineers can use the ID to find the same object in different views and check its meaning and status.

A **view** is a purposeful representation of those sources. A functional diagram answers what the controller needs to do. An interface view asks which information crosses a system boundary. A requirements view asks which rules constrain behavior. A behavioral model explores change over time.

The views may look quite different. They should not quietly create competing definitions of the same interface.

## One source, several useful perspectives

Consider the candidate phase-selection function.

A functional view might show inputs, decisions and commanded states. A structural view might show the controller and a signal-driving interface. A requirement view might show the no-conflicting-permissive rule. A behavior view might point to a phase state machine, which we will investigate in the next chapter.

A SysML model can express structure, behavior and requirements. A team can select the parts of that model that answer a particular engineering question and maintain the definitions under version control.

> **Concept**
>
> The source gives the phase-selection function its identity. A functional view shows what that function does. A behavioral model can explore how its state changes over time. Each can refer to the same function.

> **Explore further**
>
> The [OMG SysML v2 specification](https://www.omg.org/spec/SysML/2.0) defines the modeling language and its semantics.

## Relationships need types, direction and a source

Our small teaching graph includes twelve objects and eight typed relationships. A few are enough to make the issue concrete:

| From | Recorded type | To | What a reader may infer |
|---|---|---|---|
| INT-REQ-001 | constrains | INT-FUN-001 | The candidate function is described as subject to that model property |
| INT-MOD-001 | represents | INT-FUN-001 | The teaching model is intended to represent that function |
| INT-EXP-001 | examines_model | INT-MOD-001 | The defined experiment is intended to examine the teaching model |
| INT-TST-001 | check_targets | INT-REQ-001 | A *proposed check* addresses a property; **no passing result is asserted** |

Each relationship records its direction and source revision. To find what was actually checked, follow the link to the relevant test and look for its execution result.

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

The [intersection source graph](../../case-study/source-graph-v1.json) records the direction, meaning and revision of each link. Looking up an edge there gives reviewers a way to check a diagram or an assistant's suggestion.

## Greenfield and brownfield need different questions

At the beginning of a new project, much engineering information is provisional. Engineers learn which functions, interfaces and constraints are worth developing further. The T1 records are a small example of that **greenfield** situation.

Later, when a team is changing an established configuration, it must identify what is actually present, which revision was tested, who owns each source and whether older evidence still applies. That is the **brownfield** impact question.

A stable identifier helps both situations, but it is never a substitute for knowing the revision and context. An interface with the same name may have different semantics after a supplier change. We will return to exactly that problem when the course reaches physical integration.

## What agents can use—and what still needs judgment

Consider a language-model assistant helping an engineer review the proposed change to phase selection. A plausible suggestion is “review the queue model and the signal command interface.” The engineer can check each part against the [maintained relationship records](../../case-study/source-graph-v1.json).

The model record `INT-MOD-001` has a `represents` link to the phase-selection function `INT-FUN-001`. That gives the engineer a reason to inspect the model. The change record identifies the interface as a possible impact. Establishing what changes there requires a separate investigation.

Before review, the suggestion is a list in a conversation. After review, the engineering note can say “Review the phase-selection assumptions in INT-MOD-001, revision T1, and investigate the controller interface separately.” A colleague can trace both statements back to their sources.

<!-- interactive: chapter-quiz -->

## From connected knowledge to a useful experiment

The review has identified a model and the function it represents. How will its queues respond if one arrival moves to a different part of the signal cycle? [Chapter 5 runs that experiment](05-learning-through-models-and-prototypes.md).
