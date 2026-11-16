---
id: eel-v3-ch07-agents
chapter: 7
part: "III — Engineering with AI Agents"
title: "Directing AI Engineering Agents"
status: draft
reference_case: four-way-traffic-intersection
publication: unpublished
---

# Directing AI Engineering Agents

*What changes when an AI system can do more than answer a question?*

An engineer asks for help evaluating a proposed change to the intersection's signal-phase model. A conventional assistant can describe possible approaches. A scripted workflow can run the same predefined checks whenever a model changes.

An **agent** can be assigned a bounded objective, inspect permitted information, select tools, execute steps, observe results and adjust its next action. It might discover that a test fixture has the wrong model revision, inspect the relevant source and propose a correction.

That can be valuable engineering work. But it also changes what the engineer needs to specify, observe and review.

The question is no longer only whether an AI response sounds useful. It is whether delegated work has a clear purpose, relevant context, visible actions and an outcome that can be assessed.

## Assistance, automation and agency

These terms describe different mechanisms.

An **AI assistant** helps someone draft, explain or analyze information through an interaction. It need not perform any action outside that conversation.

A **predefined workflow** follows established steps: validate an input, execute a model, compare results and publish a report. Its sequence may have been designed with AI, but running it does not itself require agentic reasoning.

An **AI agent** uses a model, often a large language model (LLM), together with instructions and tools to pursue a task. It can choose between allowed actions, examine tool output and continue until a stopping condition is reached.

The LLM supplies language and reasoning capabilities; the surrounding context, tools and execution loop make the work operational. No single definition makes every system with a prompt an agent.

Our intersection's **product system** also might someday use a predictive traffic model. That would be AI *inside the product*, which has its own engineering and validation requirements. It is separate from using an agent to help develop the controller.

*Suggested explanatory comparison: Three paths from “evaluate a proposed phase-timing change”: an assistant returns advice; a fixed workflow runs a named comparison; an agent selects permitted sources and checks, then proposes a reviewable result. Label all three as hypothetical.*

## Begin with a task contract

Consider this deliberately limited instruction:

*Assess the proposed fixed-time signal-phase adjustment against the existing simplified intersection model. Identify the relevant definition and tests, run allowed comparison checks, and prepare a report of observed results and unresolved questions. Do not change the controlled baseline or claim physical suitability.*

That is more useful than “optimize the intersection.”

The task describes a **goal**, a **boundary** and a **reviewable output**. To be actionable, it also needs identified source authority, the available tools, time or resource constraints where relevant, and a stop condition.

If the agent encounters conflicting requirements or missing simulation inputs, it should make the problem visible rather than invent a physical assumption merely to finish.

An engineering task contract is not a universal prompt template. It is a way to make delegation deliberate: what may be investigated, what may be changed provisionally and who has authority to accept the result?

## Context is an engineering capability

An agent cannot reliably infer the current controlled definition from a collection of unrelated documents.

For this task, it may need the intersection concept, applicable phase-state model, permitted transition rule, scenario revisions, existing test procedures, decision notes and a way to inspect the proposed change.

A connected information model makes the selection of context easier. So do clear project instructions, source identifiers, version history and controlled tool interfaces.

There is a difference between **information that the agent can read** and **actions the agent is permitted to take**. A source file may describe an approved constraint without giving an agent permission to revise it. A tool may be capable of deploying software without that deployment being authorized by the current task.

The engineering environment must make both distinctions understandable.

## Follow the work, not the narration

Imagine the agent reports:

*“I checked the phase-model tests and the new timing behaves as expected.”*

That sentence is an account of work. To evaluate it, an engineer needs the actual tool outputs, tested model revision, input configuration, checks performed and the precise conclusion each check supports.

A model-level property check can support a statement about represented states. It cannot establish the behavior of physical signal heads, cabinets or an installed system.

A useful handover makes the proposed changes inspectable, links to the evidence produced and identifies what still requires review. If a test fails, the agent should retain that result. If no relevant check exists, the output should say so.

We should not create a fictitious “agent transcript” merely to illustrate accountability. A conceptual walkthrough can teach the process; any labeled record of a real run must actually come from an executed, retained run.

## Human and agent responsibilities evolve

Delegation is not the same as transferring all technical judgment to an agent.

The engineer determines the relevant engineering problem, decides what evidence matters and accepts or rejects the proposed result. Within those boundaries, an agent may perform substantial preparation, investigation or implementation work.

That relationship is valuable because the engineering environment contains reusable models, checks and context. An agent with well-defined tools can execute tasks that would otherwise require repeated manual navigation. A poorly defined environment may instead produce large volumes of plausible but hard-to-review output.

An investment in source clarity, tests, accessible tool interfaces and task contracts can improve both human engineering and agent-supported work.

## Move in reviewable increments

A successful task should not create a single opaque change that touches every engineering artifact at once.

For the intersection, we could begin with a bounded model input correction, examine its evidence, then decide whether a separate software change or new test fixture is justified. Some findings may produce no implementation change at all.

That raises the next challenge: when agents can make changes quickly, how do we keep those changes understandable, integrable and proportionate to the decisions they support?

That is the subject of **Engineering in Small, Reviewable Increments**.
