---
id: eel-v3-ch07-spec
chapter: 7
part: "II — Build and Test Knowledge"
title: "Spec-Driven Development Without Waterfall"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — proposed next-increment contract"
---

# Spec-Driven Development Without Waterfall

*How can we specify enough for the next change without pretending we know the entire system?*

In our intersection study, a tiny fixed-phase model has produced two inspectable results. Different invented arrival patterns left different numbers of vehicles queued. The data-quality review also revealed that a third spreadsheet record cannot be compared because its meaning and model revision are unknown.

The team has learned something useful. It has **not** learned that a particular signal-control strategy should be deployed.

Suppose someone now asks an engineer—or an AI agent—to “improve the intersection model.”

That request leaves too much open. Improve what? Realistic traffic behavior, input validation, the display, or numerical performance? A powerful tool could make many plausible changes without addressing the next engineering decision.

We need a **bounded specification** that captures what we want to learn or deliver next and how we will judge its result.

## Make the next increment explicit

The immediate problem is not an inadequate controller. It is that the experiment's inputs and outputs must remain comparable and reproducible.

A useful next engineering increment is therefore:

**Make the T1 arrival comparison reproducible and reject malformed scenarios without producing a misleading result.**

That does not require the team to define every future controller mode, physical interface or operating constraint. It requires enough detail to make this **specific outcome** understandable and testable.

A compact example follows. It is a proposed engineering specification for an educational source model, not an approved traffic-control requirement.

| Specification field | Proposed T1 increment |
|---|---|
| Purpose | Permit a reviewer to reproduce the eight-slot A/B queue comparison |
| Controlled source | Model INT-MOD-001 revision T1 and declared input cases |
| Input | Two NS/EW arrival arrays, each eight slots, using nonnegative integers |
| Behavior | Add arrivals before processing at most one vehicle from the green group |
| Valid acceptance case | Replaying the exact A and B inputs produces the same sixteen trace rows and final queue counts 1 and 2 |
| Invalid acceptance case | A negative/fractional arrival, unknown phase or incorrect slot count produces a clear rejection, **not** a plausible output |
| Remaining uncertainty | Whether this abstraction is sufficient for any real-world traffic question |
| Review owner | Named fictional engineering reviewer with an identified source revision |

This is short, but it changes what a second person can do. The expected result is not a vague improvement. It is an observable behavior that can be checked against a versioned source.

## A specification is not the same as an implementation plan

The specification does not say which programming framework must be used or how many source files an agent should edit. It identifies the **meaning** and the criteria that a solution must satisfy.

For instance, the rule “reject negative arrivals” should be enforced consistently if a later implementation has a source parser, a calculation module and a web view. The requirement is not fulfilled by merely displaying a warning while the calculation silently accepts a negative queue.

An engineer can choose an architecture that maintains the rule once and presents its outcome through appropriate views. That is the relationship between a durable specification and implementation freedom.

Our [T1 case source](../../case-study/README.md) also names the interface and model identities. Those references help keep the specification connected to the broader engineering information instead of leaving it as an isolated task description.

## Keep two learning loops active

Chapter 4 separated exploration from delivery commitments. This increment demonstrates how the loops can work together.

The team is **delivering** a bounded engineering capability: reproducible scenario analysis with input checking. At the same time, it is **exploring** a product question: how meaningful are the results and which model assumptions need improvement?

If a source record is incomplete, the team can revise that record and repeat the relevant check. A new observation may change the next experiment. None of this requires reopening the entire system specification.

This is what *without waterfall* means here. It is not the absence of engineering definition. It is the deliberate practice of specifying the **next useful step**, retaining open questions and allowing findings to reshape later commitments.

## What changes when the evidence changes?

Imagine the next data review discovers that a case labeled “T1” actually used a different phase schedule. The correct response is not to overwrite the old result with a more convenient number.

The team should retain the original record, identify the source mismatch and decide what needs to be rerun. It can then propose a new source revision, state which behavior changed and inspect whether existing evidence is still applicable.

A decision record can explain why a revised scenario or model was adopted and which alternatives remain unselected. That makes change understandable rather than treating every update as a loss of control.

One useful discipline is to distinguish **acceptance of an engineering increment** from **selection of a product design**. Our input-validation increment can pass its own criteria while the real traffic-control strategy remains an open question.

## Prompts can direct work; sources preserve the result

A natural-language request is a convenient way for an engineer to communicate with a tool or agent:

“Check that the T1 experiment rejects negative arrivals and remains reproducible.”

But that request by itself should not become the only maintained record of what the system must do. Conversations are not a stable source of engineering configuration.

The enduring source should include the controlled input meaning, expected behavior, test criteria, revision and decision status. An AI system may help create, analyze or update those sources; people still review and accept the changes they are authorized to make.

Software-oriented projects such as [GitHub Spec Kit](https://github.github.com/spec-kit/) and [OpenSpec](https://github.com/Fission-AI/OpenSpec) illustrate ways to organize specifications and changes. They are examples of workflow approaches, **not** universal standards for every engineering discipline.

This course applies the broader principle to engineering information, models, interfaces and evidence—not only to code generation.

## Specify the engineering environment as well as the product

The T1 increment is itself an improvement to the **engineering environment**. It gives the team a repeatable way to check an exploratory model before using its results.

Later, a product-side change might require a new hardware interface or a different integration method. That need should become an explicit engineering-capability requirement rather than an unexpected burden at the end of development.

The current specification leaves those future questions open. It does not hide them; it gives them a place in the engineering knowledge and future planning.

## Ready for delegated work

We now have something an AI agent could reasonably help with: a defined objective, relevant source references, valid and invalid examples, known exclusions and a reviewer who can assess the result.

That is still not permission to let an agent approve a product change. It tells the agent **what work is requested** and gives the engineer a basis for deciding whether the output addresses it.

The next chapter, **Directing AI Engineering Agents**, investigates what happens when an agent can use tools, inspect outcomes and adapt its steps within a bounded engineering task.

**Engineering takeaway:** Progressive specification captures enough controlled meaning to make the next useful change reviewable. It allows exploration and delivery to advance together without pretending unknown parts of a multidisciplinary product have already been decided.

---

*Inspect the proposed contract:* [Shared decision chain](../../case-study/DECISION-CHAIN.md) · [T1 model and invalid-input rules](../../case-study/model-inputs-v1.json) · [Verification limits](../../case-study/MODEL-CHECK.md).
