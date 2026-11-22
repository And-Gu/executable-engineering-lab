---
id: eel-v3-ch07-spec
chapter: 7
part: "II — Build and Test Knowledge"
title: "Spec-Driven Development Without Waterfall"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — worked specification for the two-cycle queue experiment"
---

# Spec-Driven Development Without Waterfall

**Spec-driven development (SDD)** starts with an agreement about what the next change should do and how to check it. The traffic engineer in Chapter 6 wants to know whether queues grow when an arrival pattern repeats for a second signal cycle. Ask a coding agent to *run the eight slots twice*, and it could produce two identical runs, each starting with empty queues. The engineer needs to follow the vehicles still waiting when the first cycle ends. [Chapter 6’s experiment](06-engineering-data-from-measurements-to-decisions.md).

<span id="make-the-next-increment-explicit"></span>

## Resolve what “twice” means

In this worked example, the model owner asks an AI assistant to match the traffic engineer’s request to the model rules and flag anything the sources leave open. T1 says to start with empty queues, but its trace ends at slot 8. Does the same rule apply at slot 9? The assistant can also flag two versions of B, the original and the one with a moved arrival in Chapter 5. [Chapter 5’s arrival experiment](05-learning-through-models-and-prototypes.md#record-what-the-experiment-changed).

The traffic engineer chooses the original A and B patterns and confirms that vehicles waiting at the boundary must stay in their queues. The model owner checks the arrival-before-service rule against T1 and the starting queue for the second cycle against B’s last saved row. Together they approve the brief and its source references for the coding agent.

<span id="a-specification-is-not-the-same-as-an-implementation-plan"></span>
<span id="prompts-can-direct-work-sources-preserve-the-result"></span>

## The agent brief

| Assignment | Run two continuous cycles |
|---|---|
| **Use case** | Show the traffic engineer whether either directional queue grows between the ends of the two cycles. Compare those points separately for A and B. |
| **Model and inputs** | Use `INT-MOD-001`, revision T1. Run each original scenario separately from empty north–south (NS) and east–west (EW) queues. Repeat the eight fixed phases and that scenario’s own eight arrival rows once, giving 16 abstract slots. [T1 phases, arrivals and service capacities](../../case-study/model-inputs-v1.json). |
| **Queue behavior** | Add arrivals first. On green, serve one vehicle if that direction’s queue is nonempty. During amber and all-red, both groups wait. Record departures and remaining queues. Carry both queues from slot 8 into slot 9. In B, two NS vehicles and zero EW vehicles must be waiting before slot 9’s arrivals or service. |
| **Acceptance checks** | For A and B, match all eight first-cycle rows against their saved traces, including phase, arrivals, departures and both queues. Check that B’s first green in the second cycle serves one of the two NS vehicles carried over. [Saved first-cycle rows](../../case-study/trace-v1.csv) · [Queue regression tests](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/models/intersection/queue.test.ts). |
| **Output** | For each scenario, report vehicles waiting in each direction after service in slots 8 and 16. Link the counts to the model revision, arrival inputs and run. Refer any unresolved conflict in the rules or reference rows to the model owner. |

> **Concept**
>
> An **acceptance criterion** describes what a reviewer must be able to observe. Asking for the final count leaves two implementations possible. Asking which vehicle departs on B’s first green after the boundary distinguishes them. [Recorded two-cycle simulation](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/project/v3/case-study/two-cycle-run.json).

A role and a goal tell us enough about the person using this comparison. For a maintainer updating a field controller, the permitted update window, an interface decision or an applicable standard could change what the agent must deliver.

<span id="keep-two-learning-loops-active"></span>

## Where a prototype helps

One way to discover the reporting requirement is to show the traffic engineer a quick prototype. Ask an AI tool for a screen that displays the total queue. Try it with sample counts. Can the engineer tell which direction has vehicles waiting? Andrej Karpathy called this style of steering generated software by trying it, with little inspection of the code, **vibe coding**. A throwaway screen can reveal the need for separate directional counts. Put that finding in the brief and the agent can still choose how to present them. [Karpathy’s original description](https://x.com/karpathy/status/1886192184808149383).

<span id="specify-the-engineering-environment-as-well-as-the-product"></span>

## Turn one agreement into a failing test

**Test-driven development (TDD)** can guide implementation one agreed behavior at a time. Write a test that expects one NS departure in B’s slot 9. On a version that restarts each cycle, the test will fail because zero NS vehicles depart. Once you see that failure, change the code until this test and the first-cycle regression checks pass. Then refactor if the code can be clearer, and rerun the tests. The saved queue and the green-phase rule give the reviewer an independent basis for the expected value.

> **Explore further**
>
> GitHub’s Spec Kit shows how a software team can clarify a specification before choosing an implementation plan. Kent Beck describes how to choose one behavior at a time when writing tests. [Spec Kit quickstart](https://github.github.com/spec-kit/quickstart) · [Canon TDD](https://newsletter.kentbeck.com/p/canon-tdd).

<span id="what-changes-when-the-evidence-changes"></span>

Evidence from this increment can shape the next one. Suppose the directional counts prompt the traffic engineer to ask how long individual vehicles waited. The next specification would need a way to follow each vehicle and a rule for waits still in progress at the end of the run.

<!-- interactive: chapter-quiz -->

<span id="ready-for-delegated-work"></span>

## Hand the brief to the agent

The approved assignment gives the agent a question, the governing sources and a check that can catch a lost queue. If that check fails, which steps can the agent take on its own, and when should it bring a decision back to the engineers? [Chapter 8 turns the brief into delegated work](08-directing-ai-engineering-agents.md).
