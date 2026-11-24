---
id: eel-v3-ch04-engineering-knowledge
chapter: 4
part: "II — Build and Test Knowledge"
title: "Engineering Knowledge as Code"
status: draft
publication: published
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — synthetic editorial source"
---

# Engineering Knowledge as Code

*If the team changes how signal phases are selected, where should the review begin?*

**Document as Code** means maintaining information as versioned text that people, ordinary software and AI agents can read and review together. The intersection team can keep its definitions, assumptions and decisions in one shared place and record which revisions its checks use. This is the software-driven approach introduced in Chapter 1. The companion [Document-as-Code Lab](https://and-gu.github.io/document-as-code-lab/) shows a definition maintained once and used in several views.

Consider an illustrative rename of a road approach. If traffic records and system definitions live in separate discipline tools without a maintained mapping, their owners must reconcile names and revisions by hand. With a shared, identified definition, a configured generator can update dependent views; a consistency check can flag a reference that still uses the old name and record the revision it checked. An AI assistant could help interpret the flag or propose an update. The owners review the meaning and the proposed change. These are capabilities the team would configure, not claims that the teaching site performs this rename.

The teams have already agreed when an arriving vehicle joins a queue. Arrivals join first, then up to one vehicle departs on green, and the model records the remaining queues. Both teams can cite the `event_order` field in the [T1 model inputs](../../case-study/model-inputs-v1.json). That text documents the rule; changing the description alone does not change the calculation. The model code and its checks must be reviewed and updated too.

Systems engineers explore what road users need, which movements may get green together and which part of a controller should select the next phase, all while the design is still open. In model-based systems engineering (MBSE), models help teams develop candidate requirements and compare ways of meeting them. Versioned definitions let engineers review a change alongside the sources it affects.

An assistant powered by a large language model (LLM) gives engineers another way into those sources. A colleague considering adaptive signal selection can ask which assumptions the fixed-time design makes and where to find them. The response can point to a model to inspect and explain why it matters to the proposal.

## Documents, engineering information and views

Documents are convenient ways to communicate. They can explain a need, record a decision or give an overview of a design. The difficulty appears when the same requirement, interface or assumption is copied into several independently maintained files. After a change, each copy may tell a different story.

An **engineering information model** gives important concepts stable identities and defined meanings. In the fictional intersection, a reviewer can refer to the same object by ID while the team is still working out the answers.

| Teaching record | Meaning in the T1 concept | A question it leaves open |
|---|---|---|
| INT-NEED-001 | Intent to investigate intersection flow | Which improvement matters most to road users? |
| INT-FUN-001 | Candidate function to select signal phases | How should it choose the next phase? |
| INT-REQ-001 | Candidate rule against simultaneous north-south and east-west permissive greens | How will the team check this property? |
| INT-IF-001 | Proposed controller-side signal command interface | How will the receiving equipment interpret a command? |
| INT-MOD-001 | Two-queue model with a fixed phase sequence | What happens to a vehicle arriving just after its green? |

## One source, several useful perspectives

A **view** is a purposeful representation of those sources. Consider the candidate phase-selection function. A functional view might show inputs, decisions and commanded states. A structural view might show the controller and a signal-driving interface. A requirements view shows the rule on conflicting greens. A behavior view can show how one phase follows another.

The diagram below presents the [SysML text introduced in Chapter 2](02-introducing-the-engineering-challenge.md#a-system-view-in-sysml). The text is the source in this example, and the diagram is a view of what the team intends to build. Its `controller : Controller` element comes from the `part controller : Controller;` definition in that same chapter and build. The view is generated from that maintained excerpt, so a reader can compare the two without relying on a separately edited picture.

<!-- interactive: intersection-structure -->

A team using the Systems Modeling Language (SysML) can express those requirements, parts, interfaces and behaviors in one model. While exploring an adaptive alternative, an engineer could give an LLM the model definitions and ask it to sketch which detector inputs the controller would need. The interface owner can compare that sketch with the existing definitions and decide which proposed inputs belong in the model. A SysML diagram and a textual view can show the same model elements. For each input in the sketch, cite its definition in the current revision or record a proposed addition. [OMG SysML v2 specification, section 7.26.1](https://www.omg.org/spec/SysML/2.0/Language/PDF#page=181).

> **Concept**
>
> The T1 model-input file is the **source** for the order of the phases. The **model**, INT-MOD-001, uses that sequence to calculate what happens to the queues. A **view**, such as a table showing the phase in each slot, lets a colleague see when each group gets a green.

## Relationships need types, direction and a source

Our small teaching graph includes twelve objects and eight typed relationships. Four of its links illustrate what a reviewer can learn about phase selection.

| From | Recorded type | To | What a reader may infer |
|---|---|---|---|
| INT-REQ-001 | constrains | INT-FUN-001 | The candidate rule constrains phase selection. |
| INT-MOD-001 | represents | INT-FUN-001 | The teaching model is intended to represent that function. |
| INT-EXP-001 | examines_model | INT-MOD-001 | The arrival-pattern experiment names this model. |
| INT-TST-001 | check_targets | INT-REQ-001 | A proposed check would examine this property. |

Each relationship records its direction and source revision. The last link, E06, has the status `proposed_check_not_run` in T1. A result would identify the revision checked and say what happened when the check ran.

## Digital threads and knowledge graphs

A **digital thread** connects relevant engineering information across the life of a system, from intent and architecture to implementation, verification and later change. A **knowledge graph** is one way to represent objects and their typed relationships so that those connections can be inspected or queried.

An engineer might ask whether the city has chosen fixed-time control. An assistant can retrieve decision INT-DEC-001, which identifies fixed timing as the provisional teaching baseline. The model inputs give the actual phase sequence. Reading the two together tells the engineer what the team chose to study and which behavior the choice applies to.

## Greenfield and brownfield need different questions

At the beginning of a new project, much engineering information is provisional. Engineers learn which functions, interfaces and constraints are worth developing further. The T1 records are a small example of that **greenfield** situation.

When changing an established configuration, the team must identify what is actually present, which revision was tested and whether older evidence still applies. That is the **brownfield** impact question. An interface with the same name may have different semantics after a supplier change. If the graph has no link to the operator's procedure, its owner can help determine whether the changed meaning affects it.

## A change-impact question the graph can answer

Consider INT-CHG-001, the proposal to investigate adaptive signal selection. An engineer gives an LLM the T1 graph and asks, “If phase selection changes, which model and interface should we revisit? Identify the links that support your answer.” Suppose the assistant suggests, “Review the queue model and change the controller's command interface.”

<!-- interactive: change-impact-figure -->

The engineer follows link E07 from INT-CHG-001 through `may_affect` to the phase-selection function, INT-FUN-001. To find a model of that function, she looks for an **incoming** `represents` link. The recorded T1 link, E03, reads **INT-MOD-001 → represents → INT-FUN-001**. Following it back from its target identifies the model. The engineer opens its T1 inputs and finds the assumption worth examining. The phases follow a fixed sequence even when arrivals change.

E08 also records `may_affect`, this time from the change to INT-IF-001. Both E07 and E08 have the status `inferred_review_candidate`. The engineer turns “change the interface” into a question for its owner. Could the controller select a different phase using the commands the interface already defines?

As a system gains more functions, interfaces and versions, following possible effects by hand becomes harder. Recorded links help identify candidates for review: the model owner examines whether the fixed sequence still represents the proposed behavior; the interface owner examines whether existing commands can express it. A link starts that examination. It does not decide that either source must change.

The source also includes a suggested link to INT-IF-UNKNOWN. Its target has no matching object. The reviewer rejects the link and keeps a question open for the interface owner. Which source, if any, identifies the intended target?

> **Explore further**
>
> The [T1 typed source graph](../../case-study/source-graph-v1.json) lists the endpoints and status of E03, E07 and E08. Its `interpretation.supported` entry preserves the conclusion that the model is a review candidate.

## What the reviewer records<span id="what-agents-can-useand-what-still-needs-judgment"></span>

The model and interface owners can pick up the work from a short, versioned note kept with the proposal.

> **Review note for INT-CHG-001, revision T1.** The model INT-MOD-001 is a review candidate (E07, E03). Ask its owner to examine the fixed phase sequence. The interface owner should check whether any command in INT-IF-001 needs to change (E08). INT-IF-UNKNOWN remains unresolved.

When an owner responds, the reviewer can attach the finding to the model or interface revision examined. An assistant can locate diagrams and reports that cite a changed definition and propose updates to their links. Their authors can check the resulting views against the revised source.

<!-- interactive: chapter-quiz -->

## From connected knowledge to a useful experiment

Shared text can help before a project reaches that complexity. In the first prototype, an assistant could relate one moved arrival to the documented queue rule and the resulting rows. An engineer can check its account against the inputs and saved results before choosing the next experiment. Experiment INT-EXP-001 uses INT-MOD-001 with four synthetic arrivals per scenario. What happens to the final queue if one north-south arrival in scenario B moves from slot 3 to slot 2? [Chapter 5 runs that comparison and records the observation](05-learning-through-models-and-prototypes.md).
