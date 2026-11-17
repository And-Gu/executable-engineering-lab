---
id: eel-v3-ch09-reviewable-increments
chapter: 9
part: "III — Develop an Integrated Product"
title: "Engineering in Small, Reviewable Increments"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional engineering change and interface proposal"
---

# Engineering in Small, Reviewable Increments

*When engineering changes become easier to generate, what makes them easier to trust?*

Imagine an agent producing a large proposed change to our intersection teaching environment. It alters the model, scenario inputs, expected results, visualization code, interface definitions and tests in one pull request.

Everything appears to fit together. But a reviewer cannot tell which result comes from which change. The model may behave differently because its rule changed, because a source scenario changed, or because the expected answer was simply rewritten.

Fast implementation has created a slow engineering decision. When multiple agents produce these changes in parallel, the problem grows: each contribution may be correct on its own, yet their combined sources and assumptions may be incompatible.

A **pull request** (PR) is a proposed set of source changes presented for review before integration. A **diff** shows how the source changed. Neither of those mechanisms, by itself, establishes a useful unit of engineering work.

The goal of a reviewable increment is not the smallest diff. It is a **coherent outcome whose meaning and consequences can be assessed**.

## What is the outcome?

Return to the next increment specified in Chapter 7: malformed traffic-arrival inputs must be rejected without producing a plausible-looking queue trace, while the existing T1 comparison remains reproducible.

That is one engineering capability. It reaches across several possible source/code layers:

- A source definition says what a valid arrival count means.
- A validation step rejects an invalid value.
- The calculation runs only when its input is valid.
- A user-facing view explains why a calculation was not run.
- An applicable check distinguishes the valid and invalid behavior.

If the team builds the parser today, the calculation next week and the diagnostic later, those preparations may be useful. But until the whole behavior is present, the claimed capability has not been demonstrated.

A **thin vertical slice** follows one meaningful outcome through the necessary layers. It is not the same as splitting a large change into tiny pieces solely because they affect different files.

## A small but real review question

Consider the following fictional change package:

| Review field | Proposed change |
|---|---|
| Reason | An invalid negative arrival could otherwise appear to produce a model result |
| Affected source | T1 model input contract |
| Outcome | Invalid arrival rejected; no queue trace emitted |
| Required check | A valid A/B input still produces the same T1 result; a negative/fractional arrival is rejected |
| Out of scope | Phase-selection redesign, physical signal behavior, adapter acknowledgment semantics |
| Reviewer question | Does this change preserve the declared meaning and make the invalid case visible? |

A reviewer should be able to answer that question by examining the source definition, actual change and recorded check outcomes.

The current [T1 model-check source](../../case-study/MODEL-CHECK.md) already provides the reference calculation and invalid-input expectations. An eventual implementation must preserve those definitions instead of maintaining separate formulas in the UI.

This is a strong candidate for an outcome-driven increment because it can be evaluated without settling the rest of the intersection design.

## Architecture is about stable responsibilities

Good architectural boundaries help make such increments easier to implement and review.

For this small model, the necessary separations are modest: a controlled input definition, a deterministic calculation and a presentation that renders the calculation's result. The validation rule should have one maintained meaning. The visualization must not secretly recalculate the queue using slightly different assumptions.

The same principle extends beyond software. An interface definition has an owner and a revision; a physical integration check has an observation method; an operational decision has someone accountable for it.

The purpose of architecture is to make responsibilities and dependencies understandable. It is not to create modules merely for the sake of a neat repository tree.

## Parallel work needs explicit integration contracts

Suppose the fictional T1 team divides one improvement among three workstreams: input validation, a model-impact review, and the related checks and user-facing diagnostic. Each may run in a separate Git branch or worktree to avoid accidental file collisions. That isolation is useful for developing changes; **it does not prove that the changes work together**.

Before parallel work starts, the team should agree on the shared source revision, the permitted edits, the expected integration behavior and who owns changes to common definitions.

| Workstream | Can progress independently? | Must be reconciled before acceptance |
|---|---|---|
| Input-validation change | Yes, against an agreed T1 input contract | A malformed scenario cannot yield a plausible-looking queue result |
| Model-impact investigation | Yes, as a read-only analysis of a proposed T2 variant | Any new phase assumptions require a reviewed source revision; they cannot silently replace T1 |
| Calculation/check/view changes | Some checks and view work can proceed in parallel | Their expected results must match the integrated source, not each agent's private version |

These are **hypothetical work packages**, not executed multi-agent runs. The important distinction is between parallel *activity* and an integrated *engineering outcome*.

An orchestrator may coordinate ownership, dependencies, readiness and integration using ordinary repository mechanisms—source files, branches, pull requests, automated checks and review records. A separate control-plane product may become useful at greater scale, but it is not a prerequisite and cannot replace the underlying engineering contracts.

If an agent updates a shared source while another is validating against an older revision, the coordinator must surface that dependency. A green local check against T1 does not qualify a combined T2 baseline. The integration decision needs the correct version, relevant checks and accountable ownership.

## Some changes cannot be isolated as software work

Now consider a different proposal: update the acknowledgment returned when a signal command is sent through the controller interface.

A developer might change one message field and call it a small software correction. But the meaning of the acknowledgment matters to other disciplines.

If the controller expects evidence that an indication was **applied**, while an adapter reports only that a message was **received**, the difference crosses software, electronics, physical observation and operational behavior. The apparent code change is small; its engineering scope is not.

The two source definitions are **INT-IF-001 revision A** and a fictional adapter-side **INT-IF-ADAPTER-002 revision B**. Their [proposed comparison](../../case-study/DECISION-CHAIN.md) is unresolved. No real adapter or physical signal has been tested.

A reviewable increment here must include the relevant interface owners and the evidence needed to judge whether the change is compatible. Splitting the interface definition, firmware expectation and integration observation into separate uncoordinated approvals could conceal the actual product risk.

A good increment boundary follows the engineering claim, not the source-file boundary. Parallel agents may prepare separate parts, but a cross-discipline outcome still needs one coherent integration and evidence decision.

## Definition of Done is more than a checklist

A shared **Definition of Done** can define common quality expectations: reviewed changes, relevant checks run, source revisions recorded, clear outcomes and known limitations.

But every significant engineering change also needs **specific acceptance criteria**. For the input-validation increment, we need a negative-input check and preservation of the T1 trace. For a controller–adapter interface change, we need semantic agreement, integration responsibilities and evidence about the intended property.

A green build is only evidence that the build's checks completed as specified. It may say nothing about an interface that those checks do not exercise.

This is why automated progress assessment can help an engineering lead, but cannot be reduced to “how many tasks are closed.” The agent may compare deliverables with the agreed Definition of Done and flag gaps; the reviewer still needs to decide whether the engineering outcome is supported.

## Make review effort proportional to exceptions

A team does not need a human to read every agent-generated diff or tool trace in chronological order. It needs visibility into **what outcome is ready, which dependencies were resolved, what checks ran against which baseline, and what requires a decision**.

A useful combined handover for the fictional T1 increment might say: “Input validation proposed against T1; original A/B behavior still meets the protected criteria; the interface-impact analysis concerns an unselected revision; physical compatibility is not checked.” Each claim should link to the actual source or check when one exists, and remain visibly proposed when it does not.

The engineering lead would then focus on the unresolved interface dependency or a changed acceptance criterion rather than coordinate every routine implementation task. This is **exception-driven review**, not the elimination of human judgment.

If the repository and its existing review practices can maintain this information clearly, no new orchestration platform is required. If parallel work grows beyond what those mechanisms can make understandable, the need for additional coordination capability should be established from observable delays, conflicts and missed decisions.

## Integration and iteration are different questions

The previous chapters showed how information, models, data and agent work can be made more controlled. Reviewable increments let that work progress without forcing every change to wait for a major release.

However, an integrated product is not just a collection of successful increments. The combined behavior must be understood at its interfaces and within its physical and operational context.

That becomes particularly important when software can change rapidly while electrical equipment, installation and physical verification have different constraints.

An engineering environment should make cross-discipline dependencies visible early. It can preserve interface revisions, run relevant checks and identify where new integration equipment or observations are needed.

The next chapter follows exactly that kind of problem.

## The next boundary is the real product

Our teaching model selects phases and calculates imaginary queues. A proposed controller could eventually issue commands to physical signal equipment. What would an acknowledgment mean, and how would anyone know whether the indication actually changed?

A reviewable software change does not answer that question.

Chapter 10, **From Models to an Integrated Product**, examines the mismatch between a controller's expectation and an adapter's reported behavior. It shows why physical integration is its own engineering capability, not a final software merge.

**Engineering takeaway:** Make increments coherent around engineering outcomes, even when multiple agents work in parallel. Explicit source ownership, integration dependencies and protected checks keep fast local changes from turning into an opaque system-level review. Humans should resolve meaningful exceptions, not manually coordinate every step.

---

*Inspect the two proposed scopes:* [T1 source and queue checker](../../case-study/MODEL-CHECK.md) · [Input-validation and interface-change decision records](../../case-study/DECISION-CHAIN.md).
