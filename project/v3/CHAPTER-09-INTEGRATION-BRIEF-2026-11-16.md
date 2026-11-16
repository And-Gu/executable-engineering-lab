# Chapter 09 editorial brief — From Models to an Integrated Product

**Status:** Chapter **position and title approved** by the course owner, 2026-11-16. **Full reader-facing manuscript not written or approved.**  
**Part:** III — Develop an Integrated Product  
**Placement:** Immediately after Chapter 08 *Engineering in Small, Reviewable Increments*, before Chapter 10 *Verification, Validation and Engineering Evidence*  
**Authority:** [14-chapter curriculum](../CURRICULUM-MAP.md) · [migration map](CHAPTER-MIGRATION-13-TO-14-2026-11-16.md) · [independent review](reviews/INDEPENDENT-FULL-COURSE-REVIEW-2026-11-16.md)

## 1. One new learning capability

**Question:** A team has an executable model, versioned interface expectations and several reviewable code changes. What else must agree before those artifacts can contribute to an **integrated, usable product**, and how would we discover what still does not work?

**Outcome:** The reader can recognize a *product-level* discrepancy between software, signal-driving electronics, physical indication and intended use; propose a relevant integration approach; explain which engineering capabilities are missing; and distinguish a provisional integrated configuration from an accepted operational system.

This is **not** another coding chapter, an interface-tool tutorial, a replacement for Ch10 V&V, or a complete traffic-signal installation design.

## 2. The educational intersection situation

Use the same **fictional, non-operational four-way intersection** from all previous chapters. The initial Ch04 model has two abstract mutually exclusive vehicle signal groups and a simplistic queue experiment. Ch06–08 introduced proposed, bounded changes and an interface concept. The new chapter tests what happens when a model's abstraction meets another engineering discipline.

**Single, explicit discrepancy:** The proposed controller-interface definition `INT-IF-001` revision A expects an *applied-state acknowledgement* for a signal command, associated with the relevant configuration. A fictional adapter/interface at revision B supplies a *message-received acknowledgement* only. Both may casually be labeled "acknowledged," but they establish **different properties**. It would be wrong for the software design to conclude that the visible physical signal was applied simply because the command message was accepted.

The example is intentionally conceptual. It does **not** specify electrical pinout, fault timings, certified signal hardware, traffic engineering limits or any operational command to implement.

## 3. Proposed reader narrative — from model to product

### A. First reveal: what the model does not establish

Start with one short trace from the earlier model and one interface record. The trace may establish the model's internal phase behavior under its stated assumptions. It says nothing about a real signal device's wiring, actual indication, installation or operator response.

Ask readers to predict: *What does an acknowledgement mean in each source?*

### B. The product-level interface discrepancy

Show a **two-row interface contract** with provenance, revision and stated semantics. One side defines a property needed by the controller; the other side does not claim it. Both should have **proposed** status until reviewed. Identify the product boundary and system-of-interest so the diagrams do not quietly change what is inside or outside the system.

Teach what constitutes an engineering discrepancy: not two labels that disagree visually, but two versioned expectations whose meaning, assumptions or responsibility differs.

### C. What would make integration possible?

Choose a bounded next activity, not an automatic solution:

- Agree the interface semantics and identify the responsible engineering owners.
- Define a **bench or emulator** investigation that can discriminate a message receipt from an applied/observable indication.
- Preserve the equipment/adapter revisions and expected observation in the integration plan.
- Record unresolved failure/recovery behavior and any installation constraint that must still be evaluated physically.
- Show how the engineering environment must evolve: interface checks, test harness, trace logging, configuration/revision management, relevant expertise and future integration workflow.

The proposed bench/emulator is a **plan, not an executed test**. The text must not imply successful compatibility, real hardware testing or a deployed traffic controller.

### D. What does the product's intended use demand?

An installer or maintainer must be able to answer at least one operational question. For example: *If the command message was received but the indicated state is unknown, what can the operator see and how is a failure reported and investigated?*

Give **one concrete decision**: defer acceptance of interface compatibility, establish the meaning of the acknowledgement and plan the appropriate observation. Do not invent an official municipal authority or legal compliance finding.

### E. Hand off a provisional configuration to verification

End with a **provisional integration configuration**, an explicit list of **open evidence** and a question for Chapter 10:

> Which statements about this configuration have actually been verified, and which still require analysis, inspection, demonstration or physical testing before it can be accepted for use?

The reader need not build anything. The site should supply enough information to make that judgment from one concise, inspectable example.

## 4. Primary visual and accessible reading equivalent

**One explanatory comparison:** controller-side assumption → adapter-side actual claim → unresolved indication consequence → proposed bench/emulator observation. Prefer an annotated, accessible **interface/sequence diagram and a short semantic contract table** to a large or interactive 3D scene.

An optional second row shows the product and engineering-environment consequences of the same discrepancy, using established **teal / gold** semantics only where relevant. No new dashboard or engineering authoring UI is needed.

**Fallback:** the complete meaning must be clear in ordinary text/table with readable revision IDs, source status, and a consequence-focused caption. No visual may claim that an unexecuted bench test passed.

## 5. Reuse existing material without repeating it

| Source | Reuse here | Do not repeat |
|---|---|---|
| Chapter 03 information/graph | Typed interface relationship, source identity and impact candidate | Full digital-thread/graph tutorial |
| Chapter 04 model | Exactly what phase trace establishes | Model calculation/arrival process mechanics |
| Chapter 06 specification | Controlled interface expectations, open questions | Spec development workflow |
| Chapter 07–08 agents and increments | Why a small software change can still require cross-discipline coordination | Agent architecture, PR tooling or generic DoD |
| Chapter 10 V&V | Introduce the question of evidence **only as bridge** | Full claim/evidence reasoning, which belongs in Ch10 |
| Chapter 11 governance | Name accountable engineering owners and unresolved risk | Comprehensive assurance-control theory |
| Chapter 12 continuous engineering | Identify future need for integration tests in engineering factory | CI/CD process, 24h target and release eligibility analysis |

## 6. Content and review acceptance

The full manuscript, when drafted, must pass all of these criteria:

1. The reader sees the **same fictional intersection**, not a separate new product or generic software stack.
2. A specific interface-contract mismatch is shown in a **source/status/revision-aware** table; the difference between message receipt and applied indication is technically intelligible.
3. The learner can identify at least **one software/electrical/physical/operational consequence**, the test/experiment needed to investigate it, and one accountable handoff.
4. The chapter develops both **product** and **engineering-environment** capability with a concrete causal link.
5. One justified **deferred decision** is visible. No implicit integration success, claimed traffic safety, or invented lab result.
6. Visuals do not require an account, local development environment, specialized engineering GUI or mandatory coding.
7. Text is natural American English, addresses a technically engaged manager/engineer, avoids repeated AI caveats and ends with the evidence question that motivates Ch10.
8. Earlier approved source manuscripts, legacy Astro routes and the V0 teaching engine remain unchanged.
9. The draft is peer-reviewed after the shared [worked-case record set](reviews/WORKED-CASE-REVISION-PACKAGE-2026-11-16.md) is technically reconciled. Integration semantics and scope are **proposed** here; the user approved this *chapter's place and purpose*, not the adequacy of an untested interface definition.

## 7. Draft and implementation boundaries

- Add the **full Ch09 manuscript** later under an approved revised-manuscript namespace (e.g. `project/v3/manuscripts/revised/09-from-models-to-an-integrated-product.md`), not under Astro's `site/src/` during content review.
- Keep current 13 source draft files unchanged so the migration remains auditable.
- No operational controller, physical bench, simulation runtime, agent executor, 3D world, deployment or publication is authorized by this editorial brief.
- The teaching interface semantics and derived model/data values must be reviewed as part of [worked-case issue #45](https://github.com/And-Gu/executable-engineering-lab/issues/45) before a reader-facing source is called "validated."
