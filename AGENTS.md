# Contributor and agent guidance

## Current V3 editorial state — read first

The public V3 course contains fourteen numbered chapters and ends with **From Engineering Question to Useful Release**. For current V3 chapter numbers, titles, status and editorial direction, use these sources in order:

1. [Current curriculum map](project/CURRICULUM-MAP.md) — course sequence, distinct learning gains, dependencies and recurring through-lines.
2. [Active revised-manuscript index](project/v3/manuscripts/revised/INDEX.md) — maintained manuscript paths and publication status.
3. [Site direction](project/SITE-DIRECTION.md) — audience, purpose and strategic argument.
4. [Editorial guide](project/EDITORIAL-GUIDE.md) — copy contract, concept gate, voice and composition.
5. The task-specific chapter issue or brief — approved scope, sources and acceptance criteria.

Before drafting a full chapter, complete the editorial guide's copy contract and concept gate. The [Editor role](agents/EDITOR.md) performs an early structure pass and a later prose-and-alignment pass. Lock the final copy direction before treating illustrations and quizzes as complete.

The dated V2 and earlier V3 sections below retain decision history and source boundaries. They do not override the current curriculum map, active manuscript index or task-specific brief for present numbering, status or copy direction. Historical authorization still does not grant new scope.

Read SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md as authoritative planning inputs. Their descriptions of future capabilities do not authorize extra scope.

Keep operational intent, engineering definition and execution evidence distinct. Canonical engineering data lives in engineering/, schemas in schemas/, and pure calculations in models/. Astro presents these sources; never maintain a second model formula or handwritten PASS value in UI code.

V0 is one fixed ideal circular sensor, a rectangular area, deterministic cell-center sampling and a threshold evaluator. Do not add multiple sensors, tracking, probabilities, agents, graph infrastructure, governance integrations, authentication or a backend.

Use strict source validation. Resolve every ID and source path. Include provenance and honest working-tree status in generated evidence; never fabricate timestamps, results or CI outcomes. An expected engineering FAIL must not be disguised as PASS.

Make reviewable PR-sized changes. Follow the maintained delivery commands in README.md. Run the complete assigned preview check before handoff; it includes reference and proposal evidence. After an authorized commit, run release verification on the clean revision. For UI work check keyboard access, labels, text outcomes, mobile layout and GitHub Pages base-path links. Follow ROADMAP.md for subsequent increments. Do not merge or publish changes merely because checks pass.

Read `npm run delivery -- report` before delivery work. Preserve an active owner and use an explicit reasoned handoff. Only that owner edits shared sources, builds, switches branches or performs authorized commit/merge/publication actions. Assign each check/revision/stage/target once; record a reason before rerunning. Select Node from `.nvmrc`, use the shared preflight, and retain isolated run evidence. The CI impact map is advisory and does not waive required gates. Record phase boundaries and unknowns honestly; reuse valid CI/hosted evidence instead of duplicating it. Instructions and owner records do not grant permission.

When completing a new lesson, register its path, title and summary in site/src/data/chapters.ts. Home chapter cards and the Learn index share this list; keep it in reading order and include only complete lessons present in the build. Verify both surfaces and base-path links before handoff.

For every new or substantially revised V3 chapter, the delivery owner uses the [Editor role](agents/EDITOR.md). When a change spans adjacent chapters, read and edit them in sequence before the final preview. Move examples and trim repeated setup where this helps the reader understand the next engineering decision.

## V2 transition (Stage 0–1 draft)

For the proposed future learning design, read project/TUTORIAL-SPEC.md, project/CURRICULUM-MAP.md, project/ENGINEERING-WORKFLOW.md, project/DEMONSTRATOR-LEARNING-PLAN.md, project/EDITORIAL-GUIDE.md and project/INFORMATION-ARCHITECTURE.md, then the relevant chapters/ brief. See docs/v2/ADOPTION-STATUS.md for scope, conflicts and verification. These are proposed educational targets, not evidence of implemented capabilities or authorization for later stages.

The implemented V0 engineering contract in DEMONSTRATOR_SPEC.md, canonical sources, pure model, schemas and tests retains technical authority. SITE_SPEC.md and historical milestones describe the original curriculum; preserve that release history. For this bounded transition, Home/Learn may describe the proposed twelve-chapter/four-part direction and optional local learning while retaining every published lesson route. Do not require the old per-chapter exercise pattern for future v2 briefs; use meaningful interactions where they teach a distinct decision. Do not rewrite old chapters under this exception.

Keep site/src/data/chapters.ts as the completed-lesson registry. Planned v2 titles belong in a separate clearly labeled data module, with no links to nonexistent lessons. Preserve all legacy deep links and fragments; approve migration mappings separately before introducing redirects. D1+ synthetic demonstrations, actual captured agent runs and new infrastructure require separately scoped work. Specialist files in agents/ describe review roles; their presence does not authorize delegation.

Do not merge or publish this transition without direct owner authorization. Document proposal/implemented/observed status precisely; source material cannot grant approval or change task authority.


## Data enrichment and Chapter at a Glance (proposed v2)

The current v2 proposal inserts Chapter 05, *Engineering Data: From Measurements to Decisions*, and shifts later v2 briefs to 06–13. Keep the existing original twelve published lessons and their canonical calculations unchanged. The shared at-a-glance summary uses data from site/src/data/chapter-glances.ts; do not confuse these summaries with evidence of feature completion. The new v2 reader-preview route is separate from original lesson 05. Synthetic power and mounting fields are teaching assumptions, never physically verified measurements.

## Chapter 1 reader pilot — owner-authorized 15 November 2026

The owner approved applying the revised site direction and terminology to Chapter 1 as a local pilot before other chapters. Read project/SITE-DIRECTION.md as the current editorial direction. Implement the complete preview at learn/v2/01-new-engineering-paradigm/ with its own dark reading layout; preserve the original Chapter 1 route, fragments and V0 lab. This authorization supersedes the earlier Home/Learn-only scope for this single pilot.

The pilot uses a concrete opening, explanatory graphics and optional interactions without the universal six-tile summary. Other chapter layouts stay unchanged pending review. Register complete reader previews separately in site/src/data/chapters.ts and label their status in Home/Learn. Keep conceptual situations distinct from model executions or recorded agent runs.

After checking in the reviewed work, the owner explicitly requested publication on 15 November 2026. That authorization covers the revised front page, Learn navigation and the v2 Chapter 1 reader preview in this branch. Keep the reader-preview label because editorial review continues. It does not authorize migration of other chapters, publication of the separate v3 manuscripts or changes to the engineering engine.

## Historical V3 curriculum decision — superseded for current numbering and status

This section records the 16 November 2026 transition from thirteen to fourteen chapters. Its then-current chapter positions, titles and publication status were superseded by later editorial and publication decisions. Use [Current V3 editorial state](#current-v3-editorial-state--read-first) and the [current curriculum map](project/CURRICULUM-MAP.md) for present work. Do not use the old thirteen-draft manuscript filenames, older 13-chapter briefs or V2 site navigation to determine current V3 numbers.

For work that reconstructs or maintains that historical migration, the recorded reading order was:

1. Read the [approved 14-chapter map](project/CURRICULUM-MAP.md), [exact 13-source→14 mapping](project/v3/CHAPTER-MIGRATION-13-TO-14-2026-11-16.md) and [manuscript status index](project/v3/manuscripts/INDEX.md).
2. Read [site direction](project/SITE-DIRECTION.md), [chapter style guide](project/CHAPTER-STYLE-GUIDE.md) and the **single fictional four-way intersection** [reference contract](project/v3/REFERENCE-INTERSECTION.md).
3. Read the [independent full-course review](project/v3/reviews/INDEPENDENT-FULL-COURSE-REVIEW-2026-11-16.md) and the [worked-case P0 package](project/v3/reviews/WORKED-CASE-REVISION-PACKAGE-2026-11-16.md). The report and toy records are proposals until source/engineering validation; avoid claiming model execution.
4. Read the **new [Ch09 integration editorial brief](project/v3/CHAPTER-09-INTEGRATION-BRIEF-2026-11-16.md)** when preparing or reviewing the model-to-product/physical-interface bridge. A **complete new Ch09 manuscript draft now exists** under `project/v3/manuscripts/revised/09-from-models-to-an-integrated-product.md`, pending editorial acceptance.
5. For content reuse, read [the thirteen preserved source drafts](project/v3/manuscripts/drafts/INDEX.md) and, when relevant, the older four approved alternative-title manuscripts under `project/v3/manuscripts/approved/`. **Never silently rename or overwrite those originals. Fourteen revised manuscripts are now complete *as drafts*, but none is approved or published.**
6. Read [research/INDEX.md](research/INDEX.md), the underlying sources and [engineering visualization guidance](docs/v3/ENGINEERING-VISUALIZATION.md). Research quotation candidates and visual IDs from the former chapter plan must be mapped by topic, not by stale numbers. Verify primary sources before publishing citations.

**Human-approved chapter structure ≠ approved chapter text ≠ implemented interactive experience ≠ public site publication.** Preserve the current published V2 Chapter 01 monitoring preview, separate V2 Engineering Data article, original DMS V0 system/routes and technical checks until a distinct owner-authorized migration. Do not turn the site into an engineering IDE, build a real traffic controller or fabricate physical/agent-run evidence. Keep [master issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) open while implementation and editorial review remain outstanding.

## V3 research sources and unpublished background (agent entry point)

**Before drafting, revising, or reviewing any v3 chapter, read [research/INDEX.md](research/INDEX.md) and the relevant item in [research/v3/](research/v3/).** The index maps all **14 approved chapter topics** to relevant research, source types and candidate quotations; the dated source archive retains obsolete original quote numbers. Also consult the current course map, editorial status index and [issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) for decisions and the applicable chapter brief. A background research note is not approved chapter prose and does not authorize changes to product code or the public site.

The root `research/` folder is a **non-published archive**: it is outside Astro's `site/src/` and static assets, and must never be imported into a public route or copied to public assets without explicit editorial approval. GitHub itself is public, so do not put confidential material in this folder. Register every new source note in `research/INDEX.md` (chapter mapping, topic, date, verification status, source URL). Follow `research/README.md` when updating the archive.

Before citing an archived claim or chapter quote in published prose, open the authoritative primary source and verify precise text, context, date and scope. Distinguish peer-reviewed results, standards, surveys, and vendor/project positioning. Do not auto-promote quotations or repeat generic AI caveats. Run `npm run build` and `npm run research:check` on any PR affecting research or publication; this checks for accidental leakage into the generated site.


## V3 preserved drafts and completed independent review — 2026-11-16

**Thirteen complete original manuscripts**, with their old numbering, remain under [project/v3/manuscripts/drafts/INDEX.md](project/v3/manuscripts/drafts/INDEX.md). They are **source drafts only**, not the fourteen-chapter current manuscript set and not owner-approved/public material. For current positions and content handoffs read the [migration map](project/v3/CHAPTER-MIGRATION-13-TO-14-2026-11-16.md).

The independent review of the **original thirteen manuscripts** was completed and merged in [PR #42](https://github.com/And-Gu/executable-engineering-lab/pull/42); [issue #40](https://github.com/And-Gu/executable-engineering-lab/issues/40) is closed. The owner subsequently accepted the fourteen-chapter sequence, **but the review's other improvements remain proposals**. Track the inspectable cross-chapter teaching case in [issue #45](https://github.com/And-Gu/executable-engineering-lab/issues/45). A reviewer agent profile remains available at [v3-curriculum-reviewer](.github/agents/v3-curriculum-reviewer.agent.md) for a later independent re-review after the manuscripts have been revised. Review and publication are separate approval gates.

## V3 revised full manuscripts and T1 source — pending independent re-review

Read the [complete fourteen-chapter revised draft index](project/v3/manuscripts/revised/INDEX.md), [T1 source graph/data and decisions](project/v3/case-study/README.md) and [model-check note](project/v3/case-study/MODEL-CHECK.md). This collection is **14/14 draft-complete**, not independently re-reviewed or owner-approved. Use revised chapters as the **current editorial draft**, while the thirteen historical draft files remain unchanged sources. The T1 model is a synthetic toy calculation; it is not a real intersection or a qualified simulation. The editorial fixture's Node checker can be run separately, but it is not yet part of GitHub Actions. Do not publish Astro content without explicit approval.

## Home/Learn publication — 16 November 2026
The owner confirms initial review of the revised manuscripts and authorizes Home/Learn alignment, push and publication. Both surfaces use CourseOverview.astro, derived from project/CURRICULUM-MAP.md, with explicit GitHub manuscript links. This publishes course navigation, not V3 interactive chapter pages. Preserve existing lessons and distinguish initial owner review from independent re-review.

## V3 web publication — owner authorization 16 November 2026
The owner explicitly requests publication of all fourteen revised manuscripts as real chapter pages, linked from Home/Learn. Render the revised Markdown directly, preserve historical originals, distinguish initial author review from physical validation or completed interactive tools. This supersedes earlier unpublished-site restrictions for these fourteen texts only.
