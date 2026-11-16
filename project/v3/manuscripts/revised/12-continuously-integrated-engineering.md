---
id: eel-v3-ch12-continuous-engineering
chapter: 12
part: "IV — Establish Trust and Sustain Change"
title: "Continuously Integrated Engineering"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional change eligibility and engineering-factory decision"
---

# Continuously Integrated Engineering

*What would it take to make a suitable engineering change releasable within one day?*

Imagine a team responsible for a software-enabled physical product. It wants to move an **eligible**, bounded software improvement from an accepted engineering request to a controlled, releasable configuration within **24 hours**.

That is a useful architectural challenge. It asks more than how quickly someone can edit code. The team must understand the change, locate applicable sources, implement it, run relevant checks, assess evidence, obtain required decisions and prepare the configuration for delivery.

In our fictional intersection case, that capability does **not** exist yet. We have only a small teaching model and an unresolved interface discrepancy. The 24-hour window is therefore a **hypothetical design objective**, not an achieved metric, an operational promise or a claim that a roadside signal can be changed in a day.

The interesting question is what the product and its **engineering environment** would need before the objective could be realistic for a carefully defined class of changes.

## Not every small edit is eligible

A tiny software diff may have a large system effect. Before designing the fast path, we need to decide which changes can safely and legitimately use it.

Consider three fictional proposals:

| Proposed change | Hypothetical eligibility | Why |
|---|---|---|
| Correct an isolated diagnostic-report label without changing behavior, configuration meaning or interfaces | **Potential candidate**, pending applicable checks and review | Its effect may be bounded and separable |
| Change the command acknowledgment from “message received” to “state applied” | **Not automatically eligible** | The meaning crosses controller, electronics, physical indication and unresolved integration evidence |
| Change phase timing or introduce adaptive control | **Not automatically eligible** | Product behavior and operating consequences need different evidence |

Even the first row needs review. Calling a change “diagnostic only” is an assertion to check, not a blanket exemption. The team must know which version of the product is affected and what its test environment can genuinely demonstrate.

The interface mismatch from Chapter 9 is particularly useful. The source comparison cannot be fixed by merely putting an ambiguous acknowledgment into a new software release.

## Building the factory is engineering work

The phrase **engineering factory** describes the people, methods, models, tools and infrastructure that make repeated engineering changes possible. It is not simply a continuous integration server.

For the hypothetical rapid-change capability, the team would need several mutually supporting elements.

The **product architecture** must have coherent interfaces, configuration identification, appropriate modularity and recovery behavior. If every software change can alter unrelated physical functions, a short release process will struggle to keep its claims bounded.

The **engineering environment** needs controlled information sources, reproducible models, automated source/test checks, relevant integration fixtures, review procedures, evidence records, documentation and a release/rollback mechanism appropriate to the product.

Some of that infrastructure can be purchased or reused. Some must be created for the product and its disciplines. The right investments follow recurring engineering questions rather than a desire to automate every step.

Designing this capability is itself an engineering project: it has requirements, costs, dependencies, acceptance criteria, maintenance and evolution.

## Operating the factory is a different job

Building a test harness does not mean a team will operate it reliably.

Follow a hypothetical eligible change through the engineering work:

| Step | What must actually happen | What can block progress |
|---|---|---|
| Accept request | State intended outcome, effect and change class | Ambiguous product scope |
| Select context | Identify relevant source revisions, interfaces and dependencies | Stale or missing information |
| Make proposal | Implement a bounded, reviewable change | Coupled change outside agreed scope |
| Check | Run the relevant automated and, where needed, integration evaluations | A failing criterion or unavailable fixture |
| Assess | Link results to the correct configuration and claim | Evidence applicable only to another revision |
| Authorize | Obtain the decision required for that change class | Open safety, interface or operational question |
| Prepare | Produce an identifiable releasable package and recovery information | Missing packaging, version or rollback capability |

A successful automation step advances one part of the process. A blocked result is useful if it shows which product or factory capability is missing.

For example, if an interface-impact check finds that the proposed adapter acknowledgment has no suitable observation, the correct factory response is not to waive it because a build passed. The team needs an integration capability or a different change classification.

## Continuous integration, delivery and deployment

These terms are related but should not be collapsed.

**Continuous integration** means frequently combining and checking changes so problems are found relatively early.

**Continuous delivery** maintains a software configuration in a state where release can be performed when its applicable conditions are met.

**Continuous deployment** goes further by automating deployment to an operational environment under a suitable policy.

A physical system may have release preparation, hardware baselines, installation work and qualification gates that differ from software release cadence. A releasable software package does not, by itself, mean an installed intersection configuration has been accepted for operation.

When AI agents assist, they can prepare bounded changes, inspect sources or execute permitted checks. That may help the factory operate, but it does not transform missing physical evidence into a valid approval.

## The 24-hour target is a requirement to analyze

To make the target meaningful, define what starts and stops the clock.

For this educational discussion, it starts when a **bounded eligible engineering request is accepted** and stops when a configuration is **releasable under the defined process**, not necessarily deployed to an installed system.

That differs from [DORA's change lead time](https://dora.dev/guides/dora-metrics/), which is concerned with commit-to-production deployment in software delivery measurement. Mixing definitions would make the performance claim misleading.

The team should look beyond typing speed. How long does change impact take? Are checks relevant and repeatable? Does a reviewer have the necessary sources? Can a failed integration check be diagnosed? How reliably can the team reproduce a release and recover from an error?

No invented duration is needed for every step. The value of the target is that it exposes dependencies that the architecture and engineering environment must address.

## What would we improve after a blocked release?

Suppose a proposed software change depends on the controller-to-adapter acknowledgment. The factory finds that the interface semantics differ and that applied-state evidence is absent.

The immediate product decision is to **defer that change's release eligibility**.

The engineering-environment decision may be to improve interface source checks, define a relevant emulator/bench observation, retain configuration evidence or clarify which change classes the fast path can support.

This creates a feedback loop. The product reveals a bottleneck in how it is engineered. The improved factory makes future investigations more repeatable and reviewable.

That is why we need to **build** the engineering capability and **operate** it, then improve it based on real product questions.

## The factory becomes reusable knowledge

After the team establishes a reliable source, test and review method for one configuration, other teams may want to reuse it. But reusable tooling and reusable evidence are different.

A new supplier adapter or product variant may use the same model/checking pattern while requiring new interface compatibility evidence. A shared test procedure is valuable; the original result is not automatically transferable.

That is the next problem for **Managing Engineering Knowledge at Scale**.

**Engineering takeaway:** Rapid, controlled engineering delivery is a system capability, not a coding-speed trick. Its architecture depends on eligible change classes, the right product and engineering interfaces, relevant evidence and a factory that can be both built and operated reliably.

---

*Inspect the case decision:* [Eligibility and blocked-change reasoning](../../case-study/DECISION-CHAIN.md) · [Integration discrepancy](09-from-models-to-an-integrated-product.md) · [DORA continuous delivery](https://dora.dev/capabilities/continuous-delivery/).
