# V3 revised full manuscripts — fourteen chapters

**Status:** **14 of 14 complete, reader-facing US-English editorial drafts**, all labeled **draft / unpublished**. **Not yet owner-approved, independently re-reviewed, or published as Astro pages.**  
**Course authority:** [Owner-approved fourteen-chapter curriculum](../../../CURRICULUM-MAP.md) · [13-source→14 migration](../../CHAPTER-MIGRATION-13-TO-14-2026-11-16.md).  
**Editorial case:** [One fictional four-way intersection](../../case-study/README.md) with revisioned [graph](../../case-study/source-graph-v1.json), [model input](../../case-study/model-inputs-v1.json), [trace](../../case-study/trace-v1.csv), [data-quality decision](../../case-study/data-quality-v1.json) and [cross-course decision chain](../../case-study/DECISION-CHAIN.md).  
**Prepared:** 2026-11-16. Corpus includes approximately **18,833 Markdown body words**, counting tables, headings, links and other reader-facing text.

## Read all fourteen revised chapters in the approved order

| Part | # | Full revised manuscript | Distinct reader capability |
|---|---:|---|---|
| I — Frame the Work | 01 | [The New Engineering Paradigm](01-the-new-engineering-paradigm.md) | Understand product/environment co-evolution through a stakeholder finding |
| I | 02 | [Planning Under Uncertainty](02-planning-under-uncertainty.md) | Select and stop an investigation under a real constraint |
| II — Build and Test Knowledge | 03 | [Engineering Knowledge as Code](03-engineering-knowledge-as-code.md) | Inspect an actual fictional typed relationship and reject an unsupported inference |
| II | 04 | [Learning Through Models and Prototypes](04-learning-through-models-and-prototypes.md) | Follow a bounded fixed-phase queue experiment and interpret its true scope |
| II | 05 | [Engineering Data: From Measurements to Decisions](05-engineering-data-from-measurements-to-decisions.md) | Curate the same model result and withhold a source that lacks meaning |
| II | 06 | [Spec-Driven Development Without Waterfall](06-spec-driven-development-without-waterfall.md) | Define one valid/invalid controlled increment while leaving product questions open |
| III — Develop an Integrated Product | 07 | [Directing AI Engineering Agents](07-directing-ai-engineering-agents.md) | Define source/tool/authority context and a truthful illustrative task handover |
| III | 08 | [Engineering in Small, Reviewable Increments](08-engineering-in-small-reviewable-increments.md) | Distinguish a useful vertical slice from a coupled cross-discipline change |
| III | **09** | **[From Models to an Integrated Product](09-from-models-to-an-integrated-product.md)** | Find an interface acknowledgment mismatch and determine necessary integration work |
| IV — Establish Trust and Sustain Change | 10 | [Verification, Validation and Engineering Evidence](10-verification-validation-and-engineering-evidence.md) | Match claims to model, interface and unexecuted physical evidence |
| IV | 11 | [Governance and Engineering Authority](11-governance-and-engineering-authority.md) | Defer a decision that lacks necessary product/technical authority or evidence |
| IV | 12 | [Continuously Integrated Engineering](12-continuously-integrated-engineering.md) | Classify eligibility and design/operate the factory for controlled releases |
| IV | 13 | [Managing Engineering Knowledge at Scale](13-managing-engineering-knowledge-at-scale.md) | Reuse shared engineering methods while reassessing configuration-specific evidence |
| IV | **14** | **[Choosing the Next Engineering Capability](14-choosing-the-next-engineering-capability.md)** | Choose the next engineering investment from real case constraints |

The approved **Chapter 06 title remains** *Spec-Driven Development Without Waterfall*. Alternative wording proposed by the independent reviewer remains a separate editorial naming discussion.

## What changed since the independently reviewed thirteen-draft baseline

The earlier [independent review](../../reviews/INDEPENDENT-FULL-COURSE-REVIEW-2026-11-16.md) found an underspecified model/data/graph case and a missing model-to-physical-product bridge. The owner accepted the fourteen-chapter structural change, and this set implements a **proposed editorial revision**:

- A **new complete Ch09** on a concrete applied-state versus message-received acknowledgment discrepancy, which connects model/software work to electronics, observability, installation and maintainers.
- A common **T1 synthetic source** now supplies twelve typed objects, eight relations, two eight-slot scenarios, sixteen trace rows, one deliberately withheld data comparison and a cross-course decisions/evidence table.
- The material introduced in Ch03–05 now leads to a real *reader inference*: inspect source relations, audit model calculation, decide whether an extra dataset is comparable.
- Ch06–08 turn the example into a valid/invalid increment, a bounded agent task and a coherent vertical slice.
- Ch10–12 follow *the same interface mismatch* through evidence, accountable deferral and release eligibility; Ch13–14 reach variant stewardship and a constrained engineering investment decision.
- Every full revised chapter is written as a reader-facing manuscript rather than a list of future web-interface features. Interactive browser graph and model remain planned, **not implemented**.

## Preservation and authority

The prior [thirteen unapproved original draft manuscripts](../drafts/INDEX.md) and [four earlier reviewed alternative-structure sources](../approved/) are preserved unchanged for audit and content fidelity. The new fourteen complete texts are **separate revisions**, not silent renames or publication of the old drafts.

**The following remain different approval events:**
1. Owner approval of the **fourteen-chapter structure** — completed in [issue #44](https://github.com/And-Gu/executable-engineering-lab/issues/44).
2. Review of T1 **teaching source/model/integration semantics** — ongoing in [P0 issue #45](https://github.com/And-Gu/executable-engineering-lab/issues/45).
3. **Independent full-course re-review** of these revised fourteen texts, preferably using the existing editorial reviewer agent and the actual Document-as-Code Lab source practices — **not yet performed**.
4. Owner **editorial acceptance of the revised manuscript text** — not yet recorded.
5. Separately authorized Astro implementation (including required accessible Ch03 graph and Ch04 model) and public release — not yet authorized.

## Recommended independent re-review

A separate reviewer should read **every full revised manuscript**, the [T1 source package](../../case-study/README.md), [model verification note](../../case-study/MODEL-CHECK.md), [current curriculum map](../../../CURRICULUM-MAP.md), [independent first review](../../reviews/INDEPENDENT-FULL-COURSE-REVIEW-2026-11-16.md) and original Document-as-Code Lab editorial sources.

Assess structure, all fourteen chapters individually, consistency between typed links, numerical output, unknown-data disposition, integration mismatch, product/agent AI boundary, engineering factory, physical/operational constraints, language, visual learning value and repeated claims. Distinguish programmatically recomputed toy results from real engineering evidence. Propose corrections; **do not edit the archived manuscript originals**.

## Technical and educational checks still to perform

The T1 model and graph have been checked for internal arithmetic/referential consistency in the editorial session. A [standalone Node consistency script](../../case-study/verify-fixture.mjs) is provided, but **has not been added to GitHub Actions**. Before declaring the teaching fixture controlled, run it and independently review the model/interface semantics.

Future public pages must have source-backed views, readable diagrams and tables, keyboard and no-JavaScript alternatives, appropriate contrast, working routes and accurate status labels. A green Astro build is not proof of the intended learning or physical product behavior.

**No files in this manuscript directory are public Astro routes.** The already published V2 monitoring reader preview, V2 data article and original DMS V0 course/model remain unchanged.
