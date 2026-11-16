# V3 revised fourteen-chapter set — author-side QA and handoff

**Status:** **Author-side structural/source audit only** (2026-11-16). **Not** an independent curriculum review, owner editorial approval, learning-effectiveness evaluation, executed Astro test, product verification or publication authorization.  
**Curriculum authority:** [14 approved chapters](../../CURRICULUM-MAP.md)  
**Manuscript source:** [14 revised full texts](../manuscripts/revised/INDEX.md)  
**Model and graph:** [T1 case study](../case-study/README.md) · [verification note](../case-study/MODEL-CHECK.md)  
**Issues:** [P0 teaching case #45](https://github.com/And-Gu/executable-engineering-lab/issues/45) · [master #32](https://github.com/And-Gu/executable-engineering-lab/issues/32)

## What was checked in this editorial session

**Manuscript structure:**
- The **14 full revised Markdown manuscripts** exist in one separate directory, numbered **01–14**, matching the exact title/order in the approved curriculum.
- Every file contains a unique manuscript ID, the correct chapter number, appropriate new part title, **draft** and **unpublished** status and the fictional **four-way traffic intersection** reference.
- All manuscript bodies contain substantive reader-facing explanations, not only briefs. A programmatic text count found approximately **18,833 body words** including Markdown headings, tables, links and other prose: individual chapters about **1,199–1,690** words.
- The new Ch09 full reader manuscript exists and is linked from Chapters 08 and 10; its proposed integration issue is an applied-state vs message-received acknowledgment mismatch.
- The prior **13 full source drafts** and **four earlier approved alternative-title manuscripts** are left untouched.

**Source/data integrity:**
- The T1 source graph contains **12 uniquely identified nodes** and **8 explicitly typed relationships**. All existing edge endpoints and declared relation types resolve; a deliberately missing edge target remains flagged as invalid.
- Both scenarios use the **same fixed eight-slot phase schedule** and two NS + two EW invented arrivals, with **arrivals applied before service**. Every one of the **16 computed trace records** was independently recalculated by a second editorial JavaScript algorithm from the persisted GitHub fixture. The results agree.
- The end-of-horizon result is **A: one queued vehicle; B: two**. The counts satisfy directional conservation of arrivals = departures + remaining vehicles.
- Negative and fractional arrivals, an unknown phase and incomplete scenario inputs are specified as invalid; a standalone reproducibility script has been supplied. **That Node script has not been integrated into GitHub Actions or independently executed in a checked-out copy in this QA session.**
- The unrelated fictional legacy-C record lacks unit, model revision and observation window; its comparison is **withheld**, not silently converted.
- The interface discrepancy is explicitly **fictional, proposed and not physically observed**; no claim of real supplier behavior, traffic timing suitability, certification, system deployment or executed agent work was made.

**Link/path and authority check:**
- Reader-facing revised chapter links resolve to existing repository paths in the PR branch, including graph/source JSON, model inputs, trace CSV, curation records, Chapter 09 and the curriculum authority. Separately checked source-document and earlier-draft link targets also resolve. Directory links to preserved historical sources are kept.
- The edited files belong to the non-public **project/v3** documentation/manuscript space. There are **no changes to site/src, engineering models, V0 schemas/tests, deployment or public pages**.
- The new content intentionally uses the **same source set across chapters**. Future interactive graphs/charts must derive from it rather than maintaining independent copies of the numbers.

## Learning and editorial quality checkpoints

| Current chapter range | Specific new reader decision now supported by source/prose | Further work |
|---|---|---|
| 01–02 | Move from stakeholder finding to one constrained, reversible investigation with stop criteria | Owner reviews intended audience and systemic scope |
| 03 | Inspect actual fictional typed edges, distinguish source vs view and reject an unsupported impact inference | Mandatory interactive graph still **not implemented** |
| 04 | Follow transparent fixed-phase queue update and correct end-state counts | Browser model, broader domain/fidelity review and real user testing still pending |
| 05 | Compare A/B only, preserve and withhold legacy C due to missing provenance | Linked chart/table interaction still unimplemented |
| 06 | Specify repeatable valid/invalid behavior, not the entire product solution | Validate final source schema and acceptance meaning |
| 07 | Inspect a bounded agent context/handover contract **without inventing execution** | If retaining the authentic-run course criterion, capture a real source-pinned run later |
| 08 | Review a coherent vertical outcome and a cross-discipline coupled interface change | Domain review for any actual electronics interface assumptions |
| **09** | Identify the acknowledgment mismatch, plan relevant integration observation and defer equivalence | First full manuscript pending independent/owner review |
| 10–11 | Distinguish model/interface/physical evidence, defer acceptance and attach accountable roles | Formal safety/cyber claims, applicability and real hardware never verified |
| 12 | Classify an illustrative eligible vs blocked change and connect factory construction to operation | No demonstrated 24-hour delivery or operational release |
| 13 | Reuse method but reassess configuration evidence and shared-asset ownership | Variant lifecycle remains fictional |
| 14 | Choose an integration-observability investment under constrained assumptions | Reader testing and decision-design feedback remain needed |

## Priority issues for independent re-review

1. **Model and domain semantics:** Is the eight-slot toy model pedagogically honest and clear? Are the terms “green”, “amber” and “applied indication” handled with sufficient caution that learners do not infer real traffic-system guidance? Does the case need an alternative non-operational system to avoid misreading?
2. **Graph/source semantics:** Are direction, status, provenance and expected impact sufficiently meaningful, without claiming missing links prove independence?
3. **Ch03–05 linkage:** Can a reader independently follow exactly which T1 values led to the comparison? Are conclusions bounded and metrics correctly defined?
4. **New Ch09:** Is the product-level discrepancy technically intelligible and does it materially add electronics, integration, installer/maintainer and intended-use content rather than another software-check caveat?
5. **Ch10–12 progression:** Are evidence and authority independent educational abilities, and does the factory example show eligible release behavior *after* its prerequisites are explained, without implying a qualified product exists?
6. **Language and length:** Are some chapters (especially Ch03 and Ch09) longer than needed or repetitive? Should sections move rather than merely be shortened?
7. **Source verification:** Check external source versions and specific claims against current official documents. This author-side audit did **not** revalidate every external link/claim or research quotation.
8. **Reader experience:** Decide which illustrations and interactions are essential and which are better as static comparisons; inspect rendered dark site layouts only after separate implementation authorization.

## What was deliberately not done

- No independent external editor/subagent has examined the **new** fourteen-chapter set yet.
- No chapter manuscript has received owner approval or been published.
- No V3 graph, browser simulator, cross-chapter UI or real traffic controller was implemented.
- No physical/electronics integration, AI-agent task, traffic safety review or operational measurement was executed.
- No complete official standards/compliance audit, reader comprehension study, accessibility test or real software delivery test was performed for this revised course.

**Handoff recommendation:** Merge this *unpublished* draft/source package after basic repository CI and change-scope checks, then hand the fourteen manuscripts plus T1 case set to a **separate independent reviewer**. Ask for a P0/P1 report and exact line-level proposed edits. Keep [issue #45](https://github.com/And-Gu/executable-engineering-lab/issues/45) open until the technical and owner editorial gates are actually met.
