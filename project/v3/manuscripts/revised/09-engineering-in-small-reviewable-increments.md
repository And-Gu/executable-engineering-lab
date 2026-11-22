---
id: eel-v3-ch09-reviewable-increments
chapter: 9
part: "II — Build and Test Knowledge"
title: "Planning and Controlling Agents"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — recorded two-cycle calculation and illustrative planning conversation"
---

# Planning and Controlling Agents

<span id="engineering-in-small-reviewable-increments"></span><span id="what-is-the-outcome"></span>

Imagine the traffic engineer opening Chapter 7’s reviewed brief in an agent’s **planning mode**. The agent can inspect the existing model, suggest alternatives and revise the plan with the engineer before changing any code. [The reviewed brief](07-spec-driven-development-without-waterfall.md#the-agent-brief) · [Planning in VS Code](https://code.visualstudio.com/docs/agents/run/planning).

**Traffic engineer** “I want to see whether either queue grows between the end of the first cycle and the end of the second. Use the original A and B arrival patterns. What would you build first?”

**Agent** “For each pattern we could repeat the phases and arrivals in one 16-slot run. Or we could run eight slots at a time and pass both ending queues into the next call. Do you need to stop and resume the model between cycles?”

**Traffic engineer** “One continuous run will do. Use the existing queue calculation. Plan both cycles for A and B, but implement just the carry-over first. How will we know it works?”

**Agent** “I’ll compare the first eight rows for each pattern with the saved trace. Then look at B. The two north–south vehicles waiting after slot 8 should still be there when slot 9 starts, before arrivals or service.”

## Put the first checkpoint at the cycle boundary

<span id="a-small-but-real-review-question"></span><span id="architecture-is-about-stable-responsibilities"></span><span id="definition-of-done-is-more-than-a-checklist"></span>

The first checkpoint answers one question. Can the engineer trust the change across the boundary? Compare every first-cycle row for A and B, then inspect B’s first green in cycle two. The recorded run shows a north–south departure before any new north–south vehicle arrives. With those checks in hand, the engineer can authorize the full comparison. [First-cycle reference rows](../../case-study/trace-v1.csv) · [Recorded two-cycle calculation](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/project/v3/case-study/two-cycle-run.json).

Suppose B shows zero north–south vehicles at the start of slot 9. The next job is to find where the two vehicles went. Compare the last row of cycle one with the state passed into the next slot. If the calculation initializes the queue twice, the agent can fix that error and rerun the checks. If the calculation carries two vehicles but the report shows zero, inspect which state the report reads. If the agent finds conflicting definitions of what to count, it should bring the first disputed row and the two definitions to the model owner. The answer changes what the experiment measures.

## Delegate a day’s work with room for exceptions

<span id="make-review-effort-proportional-to-exceptions"></span><span id="parallel-work-needs-explicit-integration-contracts"></span>

In Chapter 8, the engineer could ask for help with one task or delegate an outcome. Before handing over a larger outcome, ask the agent to predict B’s first departure from the brief. Try a deliberate queue reset and see whether an independently written check catches it. Once the smaller assignments have shown that the agent understands the specification and that the tests catch mistakes, the engineer can put more work between reviews. [Chapter 8’s working agreement](08-directing-ai-engineering-agents.md).

For a package that might span a working day, the engineer and agent could agree on three separately reviewable changes.

1. Test the handoff with vehicles waiting east–west as well as north–south. Both original patterns end the first cycle with the east–west queue empty.
2. Complete both continuous runs and save the directional counts at slots 8 and 16 with the model revision, inputs and checks used.
3. Prepare the comparison for the traffic engineer. Link each reported count to its run so the reviewer can check any surprising row.

> **Concept**
>
> **Review by exception** gives the engineer time to work on another problem. The agent can correct a slot index and report the repair at handoff with the rerun results. A request to measure individual waiting time deserves the engineer’s attention before work starts on it. The current model counts waiting vehicles, and the new question would require following each one.

<!-- interactive: chapter-quiz -->

## The Digital Thread

Chapter 1 asked how a new engineer could recover the reason for an interface limit and rerun its check. Chapter 4 gave those connections a name. In the intersection, the traffic engineer supplies the reason for the carry rule. A cycle ends, but vehicles still waiting will need service on a later green. The reviewed brief puts that knowledge beside the model inputs and reference trace. These become the agent’s context for planning, changing the queue function and testing it within the permissions agreed in Chapter 8. [Chapter 1’s interface example](01-the-new-engineering-paradigm.md#software-inspired-engineering-moves-beyond-software) · [Chapter 4’s definition of a digital thread](04-engineering-knowledge-as-code.md#digital-threads-and-knowledge-graphs).

<!-- interactive: digital-thread -->

Now suppose the traffic engineer wants to study two independent windows, each starting empty. If the engineer approves that change, record the reason for the reset in a new revision of the brief. Change how the model initializes the second window, add a check for B’s empty starting queues there and rerun both patterns. The engineer must revisit any decision based on growth in a continuous queue. Keep the continuous run with its original inputs and revision, and link the new results to theirs. The next planning session can recover why each experiment starts the way it does.

> **Explore further**
>
> The carry-over assumption appears in both the brief and the report. Chapter 4’s companion lab shows how several documents can draw on one reviewed source. [Document-as-Code Lab](https://and-gu.github.io/document-as-code-lab/).

<span id="some-changes-cannot-be-isolated-as-software-work"></span><span id="integration-and-iteration-are-different-questions"></span><span id="the-next-boundary-is-the-real-product"></span>

The queue calculation can show which group had green in the model. At the roadside, an adapter might acknowledge a signal command as soon as it receives the message. What observation would tell the engineer that the signal actually changed? That question opens Part III. [Chapter 10, From Models to an Integrated Product](10-from-models-to-an-integrated-product.md).
