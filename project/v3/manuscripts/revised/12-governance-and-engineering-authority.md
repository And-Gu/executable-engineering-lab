---
id: eel-v3-ch12-governance-authority
chapter: 12
part: "IV — Establish Trust and Sustain Change"
title: "Governance and Engineering Authority"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — proposed interface discrepancy and fictional deferred decision"
---

# Governance and Engineering Authority

*Who may accept a change when its technical consequences are not yet understood?*

Our fictional intersection team has found a mismatch between two proposed interface definitions. The controller design expects acknowledgment of an applied indication. A proposed adapter definition acknowledges only that a message was received.

The difference is small enough to disappear behind a single word in a diagram. It is large enough to prevent the team from concluding that the interfaces are compatible.

An AI agent could help compare source definitions. A software engineer could propose a change to the message format. An integration specialist could plan a bench observation. But who may decide the result is acceptable for the product?

That question brings us to **engineering authority**. Governance should make the answer clear without turning every exploratory model edit into a full product-release decision.

## Authority is attached to a role and a decision

Consider the following fictional team responsibilities:

| Role | What the role may decide within this example |
|---|---|
| Model/test maintainer | Whether T1's educational calculation and editorial checks are internally consistent |
| Controller interface owner | Which controller-side interface meaning to propose |
| Integration/electronics reviewer | Whether the proposed compatibility evidence and observation plan are relevant |
| Accountable product decision-maker | Whether a product interface step can be accepted after technical and risk review |

These are **illustrative responsibilities**, not claims about a particular municipality, supplier or certified engineering organization.

An agent that can edit an interface definition does not inherit the interface owner's authority. A test runner that can execute a check does not accept residual risk. A manager can delegate preparation and analysis without delegating every subsequent decision.

The task, available tools, authority to modify sources and authority to approve a product are separate boundaries.

## Work through one incomplete assurance argument

The proposed change is to treat the adapter's “message received” acknowledgment as sufficient for the controller's expected “state applied” acknowledgment.

Start with the claim the proposal would need to support:

> For this controller/adapter configuration, the system can determine whether the commanded physical indication was applied.

The source comparison tells us that the adapter currently claims something narrower: receipt of the command message. That is not evidence of the physical indication.

A compact assurance argument can make the gap visible:

| Element | T1 teaching record |
|---|---|
| Proposed claim | Applied indication can be established for a particular controller/adapter revision |
| Risk/question | Message receipt may be mistaken for physically applied state |
| Available evidence | Two fictional interface definitions with incompatible acknowledgment semantics |
| Missing evidence | Agreed semantics, error/recovery behavior and an appropriate bench/physical observation |
| Proposed control | Defer compatibility acceptance; identify responsible owners and plan a discriminating test |
| Accountable decision | **Do not accept the product interface as equivalent yet** |

Notice that the decision is not “the system is unsafe.” The teaching record does not establish that claim either. The supported conclusion is that **the proposed equivalence has not been justified**.

This distinction helps an organization avoid both unjustified confidence and unnecessary prohibition.

## Non-functional concerns belong in the design

Even a change described as “only software” may affect availability, diagnosis, recoverability, security or safety.

Suppose a future version allows remote changes to a signal configuration. The team would need to ask who can initiate the change, how the intended configuration is identified, what happens if communication fails, how operators learn that an update is incomplete and what evidence would support the intended behavior.

Some of these are access-control questions. Others are product behavior and operational response requirements. Classifying everything as a vague “non-functional” concern can hide concrete behaviors that must be specified and verified.

Hardening, cybersecurity, fault detection, recovery, maintenance and system integrity therefore deserve engineering attention **from the start of design**, not merely a checklist before release.

The tools used to engineer the product also have a trust boundary. Sources can be stale; agent instructions can be incomplete; execution logs can be missing. A deployment token should not be available to every exploratory task. The controls should match the permitted activity and the consequences of failure.

## A control is not the same as its outcome

Consider two kinds of evidence.

An access policy might show that an agent is **not permitted** to push to a protected branch. That is a useful configured control. It says nothing about whether the agent's proposed interface change is technically correct.

A test report might show that a source parser accepted a schema. That says nothing about whether an electrical adapter can substantiate a physical state.

Governance needs both technical enforcement and accountable review. It should preserve which action was proposed, by whom, against which configuration, what checks were made, which issues remained and who made the decision.

A well-written decision record also captures *why* an alternative was rejected or deferred. This becomes engineering knowledge for the next revision rather than disappearing into an approval email.

## Proportionate controls can enable speed

Governance does not have to mean a slow, universal gate.

The team might treat a purely editorial diagnostic-label correction differently from a change in signal-command semantics. The first could follow a bounded review path with relevant regression checks. The second crosses controller, electronics and operational boundaries and needs a different evidence and authority path.

The correct classification depends on the **actual effect and applicable configuration**, not the number of code lines or the confidence of the agent proposing the edit.

This is the balance between engineering protection and useful effect: strong controls where the claim requires them, less friction where a change is genuinely bounded and the necessary evidence can be produced reliably.

An engineering factory designed around such distinctions can operate faster without pretending that every change has the same risk.

## Record a decision, then improve the capability to make it

In our T1 case, the accountable fictional team **defers** interface equivalence. The next action is to clarify the contracts and plan an observation that can distinguish message reception from applied indication. The team can continue its educational model work while that product-level question remains open.

That is not an unproductive delay. It identifies the missing engineering capability: a way to establish the physical-state claim for a known controller/adapter configuration.

The engineering environment should make that work repeatable, with maintained sources, reviews, tests and evidence. When the next relevant change arrives, the team ought to be able to ask the same question with less effort and better information.

## Which changes can move quickly?

We have now made the technical and decision boundaries visible. The next challenge is to design and operate the environment that moves *eligible* changes from accepted request through implementation, appropriate checks, review and controlled release preparation.

Can that be done quickly and repeatedly without flattening every type of product change into one software pipeline?

Chapter 13, **Continuously Integrated Engineering**, answers by examining the engineering factory as both something we **build** and something we **operate**.

**Engineering takeaway:** Governance is the explicit connection between authority, risk, controls, evidence and decisions. The right controls help teams move when the necessary claims are supported—and stop when they are not.

---

*Inspect the fictional decision:* [Interface mismatch, role and deferred acceptance](../../case-study/DECISION-CHAIN.md) · [Single case source](../../case-study/source-graph-v1.json). These are instructional records, not evidence of certification or real operational authority.
