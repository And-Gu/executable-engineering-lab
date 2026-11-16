# V3 chapter migration — thirteen source drafts to approved fourteen-chapter plan

> **Editorial draft update (2026-11-16):** A full **fourteen-chapter revised manuscript set** now exists at [manuscripts/revised/INDEX.md](manuscripts/revised/INDEX.md), including newly written Ch09. All are **draft/unpublished**, not independently re-reviewed or owner-approved. The original 13 source drafts remain untouched. The mapping below preserves original-to-revised lineage; any text asserting Ch09 remains unwritten describes the historical state before this update.


**Status:** Owner-approved **course structure**, adopted 2026-11-16; manuscript revisions and new integrations remain **editorial drafts, not published**  
**Single authority:** [Current V3 curriculum map](../CURRICULUM-MAP.md) · [Structure decision #44](https://github.com/And-Gu/executable-engineering-lab/issues/44)  
**Evidence:** [Independent review](reviews/INDEPENDENT-FULL-COURSE-REVIEW-2026-11-16.md) · [Structure analysis](reviews/POST-REVIEW-STRUCTURE-PROPOSAL-2026-11-16.md) · [Worked-case P0 specification](reviews/WORKED-CASE-REVISION-PACKAGE-2026-11-16.md)

## What was decided

- **Fourteen chapters, four parts.** Insert **09 — From Models to an Integrated Product** after reviewable engineering increments.
- Current **10 Verification and Validation** and **11 Governance** remain positions 10 and 11, now following the new integration chapter.
- Previous **09 Continuously Integrated Engineering → 12**; previous **12 Managing Engineering Knowledge at Scale → 13**; previous **13 capstone → 14**, with the focus/title **Choosing the Next Engineering Capability** in the accepted proposal.
- **06** retains the previously approved *Spec-Driven Development Without Waterfall* title for now. The independent review's alternative *Specifying the Next Engineering Increment* remains an editorial naming suggestion, **not an approved rename**.
- The fictional **four-way traffic intersection** remains the only V3 recurring system case. This does not create a real traffic-control development or installation project.
- No existing source prose, previously reviewed manuscripts, old DMS model or published Astro routes is deleted/renamed/published by this restructuring.

## Exact source-to-new-course mapping

Use this mapping for **editorial planning**, not as permission to rename files or claim reviewed content automatically works in the new position. The filenames in `manuscripts/drafts/` retain their historical 13-chapter numbers until a separately reviewed manuscript revision migrates them.

| Approved V3 # | Approved chapter title | Existing 13-draft source | Current editorial status / next task |
|---:|---|---|---|
| 01 | The New Engineering Paradigm | [old 01](manuscripts/drafts/01-the-new-engineering-paradigm.md) | Source draft to strengthen: product boundary and one worked finding |
| 02 | Planning Under Uncertainty | [old 02](manuscripts/drafts/02-planning-under-uncertainty.md) | Source draft: constrained prioritization, stopping condition |
| 03 | Engineering Knowledge as Code | [old 03](manuscripts/drafts/03-engineering-knowledge-as-code.md) | Source draft: typed graph fixture, explicit source link and inference |
| 04 | Learning Through Models and Prototypes | [old 04](manuscripts/drafts/04-learning-through-models-and-prototypes.md) | Source draft: transparent state/queue experiment contract and trace |
| 05 | Engineering Data: From Measurements to Decisions | [old 05](manuscripts/drafts/05-engineering-data-from-measurements-to-decisions.md) | Source draft: one worked data-quality comparison from Ch04 trace |
| 06 | Spec-Driven Development Without Waterfall | [old 06](manuscripts/drafts/06-spec-driven-development-without-waterfall.md) | Source draft: concrete valid/invalid conditions and revision |
| 07 | Directing AI Engineering Agents | [old 07](manuscripts/drafts/07-directing-ai-engineering-agents.md) | Source draft: bounded context and honestly labeled replay |
| 08 | Engineering in Small, Reviewable Increments | [old 08](manuscripts/drafts/08-engineering-in-small-reviewable-increments.md) | Source draft: thin vertical outcome and coupled physical interface |
| **09** | **From Models to an Integrated Product** | **None — new chapter** | [Full revised manuscript draft now exists](manuscripts/revised/09-from-models-to-an-integrated-product.md), editorial review pending. Also see [brief](CHAPTER-09-INTEGRATION-BRIEF-2026-11-16.md) |
| 10 | Verification, Validation and Engineering Evidence | [old 10](manuscripts/drafts/10-verification-validation-and-engineering-evidence.md) | Same number/title; new handoff from actual integration questions and worked evidence |
| 11 | Governance and Engineering Authority | [old 11](manuscripts/drafts/11-governance-and-engineering-authority.md) | Same number/title; concrete deferred control/approval choice |
| **12** | Continuously Integrated Engineering | [old 09](manuscripts/drafts/09-continuously-integrated-engineering.md) | **Renumber at manuscript revision only**; release eligibility after evidence and authority |
| **13** | Managing Engineering Knowledge at Scale | [old 12](manuscripts/drafts/12-managing-engineering-knowledge-at-scale.md) | **Renumber at manuscript revision only**; reusable method vs configuration-specific evidence |
| **14** | **Choosing the Next Engineering Capability** | [old 13](manuscripts/drafts/13-the-ai-native-engineering-environment.md) | **Retitle and rework** the old recap as an investment/decision capstone after owner editorial review |

## Four-part progression

**Part I — Frame the Work (01–02):** The problem, the product and its engineering environment; what to investigate and what to commit.  
**Part II — Build and Test Knowledge (03–06):** A **single** source/relationship → model → data → progressive specification chain.  
**Part III — Develop an Integrated Product (07–09):** Agent work, reviewable changes and the missing physical/interface/operational integration.  
**Part IV — Establish Trust and Sustain Change (10–14):** Evidence → authority → eligible release capability → cross-product reuse → next engineering investment.

These parts are **teaching groups**, not sequential product-development gates. Verification, security, integration and change reasoning start early in real projects.

## Single continuous teaching case — required editorial dependency

The independent review found a critical gap between explaining things and actually letting readers inspect them. The new course must carry **specific records** through chapters:

1. **Ch03:** Small, source-backed typed relation set, current/proposed status and a deliberately unsupported inference.
2. **Ch04:** A bounded, auditable **hand-worked or genuinely executed** fixed-time two-group phase/arrival trace, with assumptions, inputs and counts.
3. **Ch05:** Original data rows, unit/configuration checks, an explicit withheld comparison and a legitimate derived conclusion based on the same trace.
4. **Ch06–08:** A revision-bound specification, source/context selection for an agent and one coherent, reviewable change.
5. **Ch09:** An **applied-state vs received-message acknowledgement** interface mismatch, product boundary and bench/emulator plan, plus operator/maintainer questions.
6. **Ch10–11:** Scoped evidence applicability and one deferred authority decision for that configuration.
7. **Ch12:** Distinguish an eligible rapid software change from a control-interface/safety-affecting change, showing factory design **and** operation. The example 24-hour target is hypothetical.
8. **Ch13–14:** Check cross-variant asset/evidence reuse and have the reader choose the next engineering-environment investment.

The [P0 worked-case proposal](reviews/WORKED-CASE-REVISION-PACKAGE-2026-11-16.md) is a **draft teaching specimen**, not a validated runtime simulation, measured traffic performance or certified system. Validate the source/model semantics and arithmetic independently before treating it as a controlled reference.

## Technical / editorial implementation discipline

- Before any drafting, read **this map** and [the current V3 curriculum](../CURRICULUM-MAP.md). Do not derive current numbers from old 13-draft file paths.
- The thirteen original draft files are a **frozen source baseline**, not the completed new fourteen-chapter curriculum. Preserve them while preparing a separate `project/v3/manuscripts/revised/` (or another approved namespace) for revised current-sequence texts.
- The earlier four historically approved alternative-structure manuscripts under `project/v3/manuscripts/approved/` also remain intact as source prose.
- The new Ch09 **now has a complete revised draft manuscript**, still pending editorial acceptance. Do not fabricate '14/14 manuscripts ready' or convert the historical 13-file index into such a claim.
- The V2 preview's `site/src/data/v2-curriculum.ts` is **historical/published-site navigation data**, not current V3 authority. It and all current Astro routes stay unchanged pending separate publication authorization.
- Interactive graph, educational model, any visualization source fixture and valid test results require later scoped implementation, validation, accessibility and review; this decision authorizes **curriculum structure**, not an engineering app or site deployment.
- Independently re-review substantively revised manuscripts and confirm credible source citations before publication.
- Existing [master issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) remains open. [P0 worked-case issue #45](https://github.com/And-Gu/executable-engineering-lab/issues/45) now precedes major manuscript rewriting.

## Remaining editorial decision (not blocking the adopted structure)

The current Chapter 06 title is kept as *Spec-Driven Development Without Waterfall*. The suggested alternative *Specifying the Next Engineering Increment* may be proposed again when its revised manuscript is reviewed. It is not necessary to settle that title before producing the source/graph/model/data and integration teaching records.

**Structure accepted; manuscripts, source fixtures, visuals and publishing are separate approval gates.**
