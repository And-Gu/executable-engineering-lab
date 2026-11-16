---
id: eel-v3-ch07-directing-agents
chapter: 7
part: "III — Develop an Integrated Product"
title: "Directing AI Engineering Agents"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional agent assignment; NO real agent run"
---

# Directing AI Engineering Agents

*What must an engineer know before delegating work to an agent?*

An engineer wants help improving the quality of our fictional intersection's model inputs. The task seems modest: reject malformed arrivals, preserve the existing T1 comparison and explain the results.

A conventional AI assistant could suggest validation rules or draft a test. A predefined script could run a known set of checks. An **AI agent** could be given a bounded objective, inspect relevant sources, choose permitted tools, act on findings and adapt its next steps when something unexpected happens.

That may save manual navigation and repetitive effort. But it creates a different engineering question: **How can the engineer understand what the agent actually did and decide whether the result is useful?**

## Separate the model from the working agent

Many agents use large language models (LLMs) to interpret task descriptions and select steps. The language model is not, by itself, the complete working system.

The agent also depends on accessible context, tool interfaces, permissions, state and a mechanism for observing results. Some activities are scripted and deterministic; others allow the agent to choose among authorized actions based on feedback.

The distinction is useful, though terminology varies between vendors. A workflow does not become agentic merely because AI was used to generate it.

And this is different from **AI inside a product**. An imagined adaptive traffic controller might contain a predictive component. An engineering agent helping examine its source information is a separate capability with different responsibilities.

## Start with a task that has a clear boundary

Here is a plausible assignment for our case study. It is a **task specification**, not a record of an agent execution:

> Inspect T1 model inputs, source graph and queue trace. Propose validation that rejects negative or fractional arrivals, unknown phases and incomplete scenarios. Preserve the existing A/B results. Use only authorized checks. Do not modify phase semantics, the controller–adapter interface, published legacy material or product decisions. Report proposed changes, actual commands/results if executed, source revisions, unresolved problems and a reviewer handover. Stop if required sources cannot be found.

The wording makes the requested outcome testable. It identifies exclusions that prevent a local input-quality task from silently becoming a controller redesign.

The last sentence matters. An agent unable to resolve a required source should report that fact, not manufacture a plausible value or continue under an assumption that changes the engineering question.

## Context is an engineering capability

A good task description cannot compensate for the wrong source revision.

Our hypothetical agent needs to know where the applicable source lives and which items are relevant:

| Needed context | Why it matters | Example permission |
|---|---|---|
| [T1 graph source](../../case-study/source-graph-v1.json) | Identify the model, candidate property and related objects | Read |
| [T1 model inputs](../../case-study/model-inputs-v1.json) | Establish the phase schedule and valid input meaning | Read |
| [T1 trace](../../case-study/trace-v1.csv) | Preserve the intended result while testing changes | Read |
| [Data-quality record](../../case-study/data-quality-v1.json) | Keep the third incompatible source out of valid A/B comparison | Read |
| Proposed isolated validation change | Add a reviewed technical improvement | Propose in a bounded working branch |
| Published V0 and V2 sources | Outside this task | No write authorization |

These are real files in the **educational editorial repository**, but the proposed agent task has not been run. A reader can already inspect them and judge whether the proposed context would be sufficient.

A source map gives the agent an entry point; it does not give it unlimited authority. The engineer or workspace configuration must separately decide which tools can read, change or execute which resources.

Standards and conventions such as **MCP** (Model Context Protocol), project instructions and reusable Agent Skills can help package tool connections or repeatable procedures. Their names are less important at this stage than the actual boundary between *information needed*, *action permitted* and *decision owned by a person*.

## Observe actions, not just a persuasive explanation

Imagine the agent reports, “The validation is fixed and all tests pass.”

What would you ask for before accepting that statement?

You would need the affected source revisions, the proposed change, the checks actually executed and their results, the invalid-input cases, and any outstanding questions. A generated summary may help you review; it cannot substitute for evidence that a tool ran or a test exercised the stated property.

An auditable handover should distinguish:

1. **Task objective:** Reject invalid scenarios without changing the fixed-phase model.
2. **Selected sources:** T1 source/trace identity and why each was relevant.
3. **Action:** The change or check that was actually attempted, if any.
4. **Observation:** Tool output or explicit reason for stopping, with status and revision.
5. **Proposed conclusion:** What the agent believes follows from the observation.
6. **Human decision:** Which part is accepted, revised, rejected or still open.

This is an illustrative **handover contract**. We do not invent a command log or pretend a Copilot/Codex agent actually performed the example. When a genuine run is later captured, its source revision and tool output should be retained and clearly labeled.

## An agent may discover a better question

Suppose the agent finds an input row that appears to use a different model revision. An appropriate response may be to **stop and ask which source is authoritative** rather than updating the expected output to make a test green.

That is one reason to give agents access to structured information and clear task authority. The agent can surface conflicting context, but it should not silently decide which engineering requirement or interface revision the team will adopt.

The useful work may be an investigation that produces **no code change**.

For the fictional intersection, the engineer still owns the question of whether the T1 model is appropriate for its intended purpose. Passing input validation makes the model easier to trust within its tiny scope, not suitable for real signal control.

## People direct and evaluate the work

Agentic engineering changes how engineers spend effort. They may increasingly define outcomes, inspect evidence, review changes, create stronger reusable context and improve the tools through which work is delegated.

That is not simply “the agent writes the code and the human approves it.” Systems engineers, electronics engineers, test engineers and operational specialists contribute different knowledge and decisions. A useful environment makes that expertise available in forms that agents can find **without implying the agent possesses their authority**.

An agent can help prepare a model comparison while an integration engineer investigates an electrical interface. The tasks may have different tools, evidence needs and stop conditions. Human collaboration and review remain central.

## Keep the next change reviewable

Even when an agent can complete a multi-step assignment quickly, the result may be difficult to accept if it changes too many unrelated things at once.

A validated input-quality improvement is a coherent scope. Rewriting the signal-command interface at the same time would introduce a different engineering decision.

The next chapter, **Engineering in Small, Reviewable Increments**, asks how to package changes so their behavior, dependencies and acceptance criteria remain understandable across disciplines.

**Engineering takeaway:** Directing an AI agent is an engineering task in its own right. Give it a meaningful objective, current and authorized context, a bounded action space and an observable handover. Evaluate the work itself rather than treating the agent's narration as evidence.

---

*Inspect the proposed handover:* [Cross-chapter decision records](../../case-study/DECISION-CHAIN.md) · [T1 model inputs](../../case-study/model-inputs-v1.json). For broader agent/workflow terminology, see [Anthropic's practitioner discussion](https://www.anthropic.com/research/building-effective-agents).
