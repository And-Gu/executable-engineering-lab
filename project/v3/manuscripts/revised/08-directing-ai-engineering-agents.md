---
id: eel-v3-ch08-directing-agents
chapter: 8
part: "III — Develop an Integrated Product"
title: "Directing AI Engineering Agents"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional agent assignment; NO real agent run"
---

# Directing AI Engineering Agents

*What changes when an agent can carry an engineering outcome through its own feedback loop?*

Our fictional intersection model already produces a defined result for given inputs. The engineering team now wants a better capability: invalid scenarios should be rejected, while valid cases should retain their expected behavior.

One approach is to ask an AI assistant for suggestions, then manually issue separate instructions for coding, running tests, interpreting errors and fixing failures. Another is to give an **agent the engineering outcome** and let it work through that sequence, within agreed limits.

Executable models and automated checks allow agents to evaluate proposed changes, respond to failures, and work toward a defined engineering outcome. Engineers establish the acceptance criteria and escalation boundaries, enabling agents to complete multiple iterations without continuous human direction.

## Separate the model from the working agent

Many agents use large language models (LLMs) to interpret task descriptions and select steps. The language model is not, by itself, the complete working system.

The agent also depends on accessible context, tool interfaces, permissions, state and a mechanism for observing results. Some activities are scripted and deterministic; others allow the agent to choose among authorized actions based on feedback.

The distinction is useful, though terminology varies between vendors. A workflow does not become agentic merely because AI was used to generate it.

And this is different from **AI inside a product**. An imagined adaptive traffic controller might contain a predictive component. An engineering agent helping examine its source information is a separate capability with different responsibilities.

## Delegate a bounded outcome, not a checklist of tasks

Here is a plausible assignment for our case study. It is a **task specification**, not a record of an agent execution:

> Make the T1 scenario validator reject negative or fractional arrivals, unknown phases and incomplete inputs without emitting a queue trace. Preserve the declared A/B behavior. Inspect the relevant sources, propose a bounded implementation, execute permitted checks, evaluate any failures and revise within scope. Do not modify the reference behavior, protected acceptance checks, controller–adapter interface, legacy sources or product decisions. Stop and escalate if a source is missing, the criteria conflict, a change crosses an unauthorized interface or the iteration budget is exhausted. Report the changes, checks actually executed and remaining issues for review.

This is a **hypothetical assignment**, not a completed agent run. It specifies an outcome and the boundaries within which the agent may choose its own next actions. For example, the engineer might allow three unsuccessful revision attempts before escalation while keeping the independent acceptance checks outside the agent's write permissions. The engineer need not prompt separately for every intermediate correction.

The acceptance checks must remain trustworthy. An agent may propose additional tests, but it cannot prove success by rewriting the protected expected results to match its implementation. In particular, both **valid T1 behavior and invalid-input rejection** must be checked; a validator that rejects every input is not a solution.

## The inner loop: propose, execute, evaluate, correct

For this bounded software task, a complete agentic work cycle can look like this:

| Agent action | Automated feedback | What happens next |
|---|---|---|
| Inspect the T1 source and propose an input-validation change | Are the affected inputs and source contracts identified? | Choose a small, relevant implementation |
| Implement and run the defined checks | Does the valid A/B case still produce its declared trace? Are negative, fractional and malformed inputs rejected? | Inspect failures before changing the solution |
| Analyze an unsuccessful check | Which actual rule, input or code path failed? | Revise and execute the checks again, within the authorized scope |
| Reach the completion or escalation condition | Are the relevant criteria met, or is a source, test or assumption insufficient? | Produce a reviewable result or stop for engineering judgment |

Test results tell the agent which criteria were met and what failed. The agent can use those observations to select its next step, repeat the check, or escalate when the agreed limits are reached.

When the criteria are clear, well covered and protected from unreviewed alteration, the agent may complete several iterations autonomously. When a requirement is ambiguous or a physical interface is implicated, another code iteration may be the wrong response.

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

## Check the outcome, not the agent's narration

Imagine the agent reports, “The validation is fixed and all tests pass.”

What would you ask for before accepting that statement?

You would need to know which source revision was modified, which checks **actually executed**, which behavior they covered and whether the agent changed the criteria used to judge itself. A summary can help the reviewer navigate; it is not a substitute for the test results or an independent acceptance check.

An auditable handover should distinguish:

1. **Task objective:** Reject invalid scenarios without changing the fixed-phase model.
2. **Selected sources:** T1 source/trace identity and why each was relevant.
3. **Action:** The change or check that was actually attempted, if any.
4. **Observation:** Tool output or explicit reason for stopping, with status and revision.
5. **Proposed conclusion:** What the agent believes follows from the observation.
6. **Human decision:** Which part is accepted, revised, rejected or still open.

The handover describes a **proposed** workflow, not a recorded execution. In actual engineering work, the source revision, commands run, check outcomes and unresolved limitations should be attached to the review. The reviewer also needs to judge whether the acceptance criteria reflect the intended behavior.

## The outer loop: are we solving the right engineering problem?

The **inner loop** asks whether the proposed implementation satisfies defined, executable criteria. The **outer loop** asks whether those criteria, the model's scope and the underlying requirements address the intended product behavior.

Suppose the agent encounters an input associated with a different model revision. Another round of code changes will not establish which source should govern. The appropriate action is to **stop and escalate the ambiguity**, rather than changing expected values until the tests pass.

The engineer may then revise the experiment, seek input from an integration specialist or add a physical observation. A deterministic calculation can be internally correct while its representation of the product is inadequate. Even extensive automated tests cannot repair a wrong requirement that they faithfully encode.

This is why **agent autonomy should depend on the quality and independence of the feedback available**, not on how persuasive the agent sounds. The useful outcome may be an investigation and an engineering decision that produces no code change.

## People direct and evaluate the work

Agentic engineering changes how engineers spend effort. They can define outcomes and escalation boundaries, invest in trustworthy executable checks, assess evidence from the outer loop and improve the environment in which agents work.

Systems engineers, electronics engineers, test engineers and operational specialists contribute different expertise and decisions. A useful engineering environment makes their constraints and evidence accessible to agents while keeping authority and accountability with the appropriate roles.

An agent can help prepare a model comparison while an integration engineer investigates an electrical interface. The tasks may have different tools, evidence needs and stop conditions. Human collaboration and review remain central.

## Keep the next change reviewable

Even when an agent can complete a multi-step assignment quickly, the result may be difficult to accept if it changes too many unrelated things at once.

A validated input-quality improvement is a coherent scope. Rewriting the signal-command interface at the same time would introduce a different engineering decision.

The next chapter, **Engineering in Small, Reviewable Increments**, asks how to package changes so their behavior, dependencies and acceptance criteria remain understandable across disciplines.

**Engineering takeaway:** The opportunity is to delegate a **complete bounded engineering feedback loop**, not merely individual tasks. The stronger and more independent the automated checks, the more iteration an agent can perform without intervention. Engineers still own the questions that those checks cannot answer.

---

*Inspect the proposed handover:* [Cross-chapter decision records](../../case-study/DECISION-CHAIN.md) · [T1 model inputs](../../case-study/model-inputs-v1.json). For broader agent/workflow terminology, see [Anthropic's practitioner discussion](https://www.anthropic.com/research/building-effective-agents).
