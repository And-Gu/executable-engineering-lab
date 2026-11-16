---
id: eel-v3-ch10-verification-evidence
chapter: 10
part: "IV — Establish Trust and Sustain Change"
title: "Verification, Validation and Engineering Evidence"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional integrated configuration and evidence register"
---

# Verification, Validation and Engineering Evidence

*Which statement can we actually support—and for which configuration?*

The previous chapter introduced a problem that a model of our fictional intersection could not answer. The proposed controller interface expects acknowledgment that an indicated state was applied. A fictional adapter contract only acknowledges that a message was received.

Both definitions are readable. The mismatch is real **within our illustrative source records**. But no physical device has been tested, and no operational intersection has been installed.

An engineer reviewing the product asks a deceptively simple question: “Which parts of this configuration are ready?”

The answer cannot responsibly be one percentage or one green symbol. It depends on the **claim** we want to make and the **evidence** relevant to that claim.

## Begin with the claim, not the test report

Suppose an automated checker finishes successfully. We learn that its specified checks ran and gave their recorded outcomes. We do not automatically learn that the intersection is safe, useful, physically integrated or ready for service.

A claim should name the behavior, the model or product configuration, the conditions and the applicable evidence.

In the T1 case, the team can formulate several different claims. Compare the sources and what each would justify:

| Candidate claim | Available record | Current evidence status | Decision |
|---|---|---|---|
| The fixed T1 **toy schedule** never includes NS and EW green at the same slot | Declared eight-slot phase sequence | **Inspected synthetic source definition** | Support only the narrow statement about the listed sequence |
| The T1 A/B **queue totals** follow its stated calculation | Source inputs and sixteen-row computed trace | **Editorially recomputed toy result** | Support only the eight-slot numerical result |
| Controller rev A and adapter rev B have the **same acknowledgment meaning** | Two fictional interface definitions | **Mismatch** | Do not accept compatibility |
| A physical signal visibly reached the commanded state | Proposed bench/physical observation | **Not run** | No supported applied-state claim |
| The system is suitable for the city's intended use | Stakeholder and operating-condition evaluation | **Not run** | No operational validation claim |

A result may be technically correct and still be **irrelevant to the claim** someone wants to make. The first two rows do not resolve the last three.

The [worked evidence record](../../case-study/DECISION-CHAIN.md) retains these distinctions and source references. They are examples for reasoning, not a completed product certification package.

## Verification and validation answer different questions

**Verification** asks whether specified requirements or properties are met for the relevant configuration. Appropriate methods can include testing, analysis, inspection and demonstration. A requirement about interface semantics may be examined using a controlled document comparison before hardware exists; a behavior claim may require an executed check or test.

**Validation** asks whether the system is suitable for its intended use in its relevant environment, including the needs of users and operators.

The two questions interact. A system might conform to a narrow specification while the specification fails to address an operator's actual need. Conversely, a promising demonstration may reveal value while leaving important requirements unverified.

For our intersection, a finite toy phase sequence is useful for teaching model behavior. It does not exercise the physical controller, real signal indications, turning movements, pedestrian needs or fault conditions.

The source-defined property that the two abstract green phases never overlap is **not proof of operational safety**. To make a stronger statement, the team would need to define the relevant requirements, configuration and evidence methods for that purpose.

## A configuration is part of the evidence

A result cannot be interpreted without knowing **what** it applies to.

Our teaching calculation identifies model **INT-MOD-001, revision T1**, two declared scenarios and an eight-slot observation horizon. The evidence about the queue result is meaningful only within those assumptions.

The interface discrepancy uses a different scope: controller-side **INT-IF-001 rev A** and proposed adapter **INT-IF-ADAPTER-002 rev B**. It is not a model outcome, and it is not evidence that physical hardware behaved one way or another.

A later interface revision could change the technical question. Older data might still be useful as history but not automatically applicable as acceptance evidence for a new configuration.

This is why the source, method, observed result and applicability must travel together. A test title alone is not enough.

## Product readiness has several dimensions

A complete engineering handover may involve system and interface definitions, software, electronics, physical installation, operational procedures, maintenance considerations, verification records, validation results and applicable decisions.

Those are not universal document names or a fixed checklist for every product. The appropriate deliverables depend on the system, its risks and the organization responsible.

For our fictional integrated configuration, consider three questions:

**Interface:** Do both sides agree on what an acknowledgment establishes?

**Integration:** Is there a proposed observation or test that can distinguish a received message from an applied physical indication?

**Use:** Would an operator or maintainer have enough information to recognize, diagnose and respond to a failure?

Today, the interface question is unresolved, the physical observation is not run, and the operational-use question has not been validated. A product readiness score that collapses those states into “mostly complete” would conceal the important differences.

## A green tool result can coexist with an open engineering result

A developer may run all available source and model tests and see them pass. That is valuable information about the **checks that actually ran**.

The engineering question may nevertheless remain unanswered. A toy calculation can balance its queues while the required physical observation has never been attempted. An interface definition may be syntactically valid while the two parties disagree about meaning.

We should therefore report tool execution, criterion result and engineering conclusion separately. In a well-designed engineering environment, the reader can inspect each step and understand what was supported.

This practice also makes improvement easier. If an important interface claim lacks a relevant test, the team can invest in a better emulator or integration observation rather than rerunning unrelated software checks.

## Evidence influences decisions before release

The right response to the current interface discrepancy is not to mark every activity as failed. It is to **limit the claim** and identify the next needed investigation.

The team can continue exploring the traffic model and improving input validation while deferring acceptance of the controller/adapter interface. It can define a bench investigation, review its planned configuration and identify which roles must assess the resulting observation.

Evidence gathering is not something to add only when development is finished. It shapes design, architecture, task division and the engineering environment from the beginning.

For the broader concepts, [NASA's Product Verification guidance](https://www.nasa.gov/reference/5-3-product-verification/) and [Product Validation guidance](https://www.nasa.gov/reference/5-4-product-validation/) provide useful examples of method and intended-use distinctions. They are **not** applicable traffic regulations or validation of this fictional intersection.

## Who can accept the remaining risk?

We now have enough information to make an important distinction: some narrow claims are supported, some are explicitly contradicted by the proposed sources, and some have no relevant observation.

The next decision is not only technical. It is also about authority, responsibility and risk. Who can allow continued exploration? Who can accept a change affecting a physical signal? What should a tool be permitted to do automatically, and which decisions require accountable review?

That is the question for **Governance and Engineering Authority**.

**Engineering takeaway:** Verification and validation are reasoning about claims in context. A useful evidence record identifies the claim, configuration, method, outcome and limits. Passing a tool check cannot establish a property the check never examined.

---

*Inspect the evidence and open gaps:* [T1 source/trace](../../case-study/README.md) · [Worked claim and integration record](../../case-study/DECISION-CHAIN.md) · [Editorial model-check note](../../case-study/MODEL-CHECK.md).
