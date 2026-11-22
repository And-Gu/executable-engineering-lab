---
id: eel-v3-ch08-directing-agents
chapter: 8
part: "II — Build and Test Knowledge"
title: "Directing AI Engineering Agents"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — simulated queues and illustrative agent assignments"
---

# Directing AI Engineering Agents

The traffic engineer has a reviewed brief for comparing two signal cycles. Who should choose the next step when a result looks wrong? That depends on what the engineer delegates. [Chapter 7’s reviewed specification](07-spec-driven-development-without-waterfall.md).

## Two ways to work with an engineering agent

**“Help me draft a use case for comparing queues over two signal cycles.”** The agent might draft a few sentences about the traffic engineer, the decision ahead and what to observe. If the draft says “see whether traffic improves,” the engineer can sharpen it to “compare the number waiting in each direction after the first and second cycles.” The engineer reviews the wording and chooses the next step.

<span id="delegate-a-bounded-outcome-not-a-checklist-of-tasks"></span>

**“Simulate that use case and show whether the queues grow during the second cycle.”** Here the engineer delegates an outcome. The approved brief specifies the scenarios, the observations and the rules to preserve. Within those limits, the agent can plan the run, compare the first cycle with the saved trace, investigate a difference and try again. It returns evidence for the engineer to judge. A proposal to give one road a longer green goes back to the engineer.

Both assignments are illustrative. A team could split the second one among three agents. One prepares test cases, another runs the simulation and a third checks the first cycle against an independent reference. This is **multi-agent orchestration**. A coordinator gives them the same model revision, arranges the handoffs and brings unresolved discrepancies to the engineer.

## Context is an engineering capability

Drafting the use case takes the stakeholder’s goal and the decision the comparison will inform. Simulating it also takes model revision **T1**, its fixed eight-slot phase sequence and the original arrival patterns for A and B. The brief names the arrival-before-service rule, which inputs repeat and which queues carry over. The agent also needs the independent first-cycle trace to tell whether its change preserved earlier behavior. [T1 model and inputs](../../case-study/model-inputs-v1.json).

<span id="separate-the-model-from-the-working-agent"></span>

> **Concept**
>
> The **large language model (LLM)** interprets the task and proposes a next step, such as comparing two files. The **agent harness** is the software around it. It supplies the relevant context, sends permitted requests to tools and returns their results. A row that differs can then guide the model’s next step. [How a turn works in an agent harness](https://code.visualstudio.com/docs/agents/concepts/agent-harnesses#_follow-a-turn-through-an-agent-harness).

“Simulate two cycles” is the task for today. A standing instruction in `AGENTS.md` could say, “Compare the first eight slots of each scenario with the saved trace. Report the first row that differs.” The engineer can give the agent permission to run the model and write a new report while making the reference read-only. Changing that reference requires an engineering decision. [Project instructions](../../../../AGENTS.md) · [The AGENTS.md convention](https://agents.md/).

Which earlier checks still apply? Extending the run preserves the first cycle’s starting queues, inputs and service rule, so all eight rows for each scenario should still match. Suppose a later proposal changes the order to serve *before* arrivals. In A’s first slot, a north–south vehicle arrives on green and leaves immediately under T1. The proposed rule would leave it waiting. The engineer can use that row to review the change, keep the original trace with T1, and approve new expectations for a new revision if warranted. [Saved first-cycle trace](../../case-study/trace-v1.csv).

## Coordinate several agents around one engineering outcome

<span id="the-inner-loop-propose-execute-evaluate-correct"></span>

In the three-agent assignment, the test author works from the approved brief and specifies two checks. One compares the first cycle row by row. The other inspects the queue at the cycle boundary. The runner gives the checker the model revision, exact inputs, command used and resulting rows. The engineer can then review any exception with the relevant evidence in hand.

<span id="supervise-by-exception-not-by-reading-every-agent-message"></span>

Suppose the runner picks the edited B from Chapter 5. In the original B, no north–south vehicle arrives in slot 2. In the edit, one arrives and immediately departs on green. The queues *after that slot* agree. The checker can point to the arrival and departure fields in slot 2 to explain the discrepancy. The coordinator can have the runner select the original B and rerun the comparison. If the group still disagrees about whether that vehicle may depart on arrival, the coordinator takes the row and the competing interpretations to the engineer. [Chapter 5’s one-vehicle edit](05-learning-through-models-and-prototypes.md#follow-the-actual-queue-updates).

<span id="check-the-outcome-not-the-agents-narration"></span>

## Try the assignment and inspect an assumption

Give yourself five minutes. With an agent that can read the T1 sources and run the model, try “Repeat the original B for two cycles and tell me whether the north–south queue grew.” You can also do the exercise here using this illustrative reply.

> “There were two north–south vehicles waiting after slot 8 and two after slot 16. The queue was the same length at both observations.”

1. Write down what the reply tells you about B and what it leaves open. Could someone get those same numbers by running the original eight slots twice from empty queues?
2. Add one sentence to the assignment asking for an observation that would distinguish those runs. Name the queues and the moment you want to inspect.
3. Try your revised instruction or compare it with the simulation below. Could another engineer use the evidence you requested to tell whether the queue carried over?

<details class="worked-answer">
<summary>Compare your instruction with a worked answer</summary>

One possible addition is “For B, show both queues after slot 8 and at the start of slot 9 before any arrivals or service, then show how many depart in each direction during slot 9.” Each pair below gives the north–south count first and the east–west count second. The continuous run uses the invented T1 arrivals. The reset column is a prediction from replaying B’s original first cycle.

| Observation in B | Recorded continuous run | Predicted with a reset |
|---|---|---|
| After slot 8 | 2, 0 | 2, 0 |
| Before arrivals in slot 9 | **2, 0** | **0, 0** |
| After service in slot 9 | 1, 2 | 0, 2 |
| After slot 16 | 2, 0 | 2, 0 |

In B’s slot 9, two east–west vehicles arrive while north–south has green. No north–south vehicles arrive, yet one departs. The waiting queue supplied that vehicle. A ends both cycles with one north–south vehicle and none east–west. The end-of-cycle counts therefore stay the same for both directions in both scenarios. The original CSV ends at slot 8 in each scenario. The separate two-cycle report contains the boundary and second-cycle observations. [Eight-slot reference](../../case-study/trace-v1.csv) · [Two-cycle report](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/project/v3/case-study/two-cycle-run.json).

</details>

> **Explore further**
>
> Would these two scenarios catch a runner that silently clears just the east–west queue? Both reach slot 8 with that queue empty. One regression test adds three east–west arrivals in B’s last slot and checks what carries into the next cycle. [Model regression tests](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/models/intersection/queue.test.ts).

<span id="the-outer-loop-are-we-solving-the-right-engineering-problem"></span>
<span id="people-direct-and-evaluate-the-work"></span>

In Chapter 1, a test and an implementation can agree because both confuse seconds with milliseconds. Here a second calculation independently checked the original T1 rows. Those rows help catch a repeated mistake in the first cycle. The engineer still decides whether the experiment answers the traffic question. If the concern is a queue forming *within* a cycle, the two east–west vehicles waiting after slot 9 matter even though that queue is empty at both cycle ends. [Chapter 1’s example](01-the-new-engineering-paradigm.md#ai-expands-what-engineering-teams-can-do) · [How the first-cycle trace was checked](../../case-study/MODEL-CHECK.md#independent-editorial-cross-check-already-performed).

<!-- interactive: chapter-quiz -->

<span id="keep-the-next-change-reviewable"></span>

## Give the next investigation a head start

“We build the machine that builds the machine.” By making the scenario runnable and turning the boundary observation into a repeatable check, systems engineers and concept teams improve their own development environment. When a colleague brings a third arrival pattern, the team can run A and B as regression checks, then inspect the new pattern at the same boundary. Which part of that capability should the team build first, and when can it delegate more of the work? [The two systems on the homepage](https://and-gu.github.io/executable-engineering-lab/#approach) · [Chapter 9, Planning and Controlling Agents](09-engineering-in-small-reviewable-increments.md).
