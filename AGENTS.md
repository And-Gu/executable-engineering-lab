# Contributor and agent guidance

Read SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md as authoritative planning inputs. Their descriptions of future capabilities do not authorize extra scope.

Keep operational intent, engineering definition and execution evidence distinct. Canonical engineering data lives in engineering/, schemas in schemas/, and pure calculations in models/. Astro presents these sources; never maintain a second model formula or handwritten PASS value in UI code.

V0 is one fixed ideal circular sensor, a rectangular area, deterministic cell-center sampling and a threshold evaluator. Do not add multiple sensors, tracking, probabilities, agents, graph infrastructure, governance integrations, authentication or a backend.

Use strict source validation. Resolve every ID and source path. Include provenance and honest working-tree status in generated evidence; never fabricate timestamps, results or CI outcomes. An expected engineering FAIL must not be disguised as PASS.

Make reviewable PR-sized changes. Run npm run check and npm run evidence before handoff. For UI work check keyboard access, labels, text outcomes, mobile layout and GitHub Pages base-path links. Follow ROADMAP.md for subsequent increments. Do not merge or publish changes merely because checks pass.

When completing a new lesson, register its path, title and summary in site/src/data/chapters.ts. Home chapter cards and the Learn index share this list; keep it in reading order and include only complete lessons present in the build. Verify both surfaces and base-path links before handoff.

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

## V3 current approved curriculum — read first

**The owner has reaffirmed the CURRENT 13-chapter curriculum in [project/CURRICULUM-MAP.md](project/CURRICULUM-MAP.md) as the V3 planning authority.** Do not substitute the alternative chapter titles or numbering discussed earlier in V3.

Before drafting, revising, visualizing or publishing V3 educational material:

1. Read the **current chapter map** above, [project/SITE-DIRECTION.md](project/SITE-DIRECTION.md) and [project/CHAPTER-STYLE-GUIDE.md](project/CHAPTER-STYLE-GUIDE.md).
2. Read [project/v3/manuscripts/INDEX.md](project/v3/manuscripts/INDEX.md). It describes the **previously approved early V3 manuscript texts for Chapters 01–04** as preserved source material **pending re-alignment to the current chapters**, not as the current course's ready-to-publish Chapters 01–04.
3. Read the **owner-confirmed single V3 product case** in [project/v3/REFERENCE-INTERSECTION.md](project/v3/REFERENCE-INTERSECTION.md). Then read the [current Chapter 01–04 editorial review](project/v3/CHAPTERS-01-04-EDITORIAL-REVIEW.md), its proposed briefs under `chapters/01-...` to `chapters/04-...`, the [alignment/gap register](project/v3/EDITORIAL-ALIGNMENT-2026-11-15.md) and the [current-plan Chapter 05–13 briefs](project/v3/CHAPTER-BRIEFS-05-13-2026-11-15.md). These are **proposals**, not full approved manuscript texts. Never use the old condition-monitoring/DMS story as a second recurring V3 case; the published monitoring Chapter 01 pilot and legacy V0 model remain unchanged until separately authorized publication.
4. Read [research/INDEX.md](research/INDEX.md) and the source notes for the **current** chapter's theme. The historical archived research table uses an earlier chapter numbering; the index maps sources by topic and title. Verify claims and quotes against primary sources.
5. Read [docs/v3/ENGINEERING-VISUALIZATION.md](docs/v3/ENGINEERING-VISUALIZATION.md) for technical illustrations, ensuring its visual IDs are mapped to the current chapters; Document-as-Code Lab covers presentation/storytelling rather than engineering-specific diagrams.

Do not rewrite previously approved source text, update published Astro pages, create engineering authoring applications, or publish new chapters based only on a planning document. Existing public routes and the working V0 model remain protected. Any migration needs its own authorization. Keep [master issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) open during review.

## V3 research sources and unpublished background (agent entry point)

**Before drafting, revising, or reviewing any v3 chapter, read [research/INDEX.md](research/INDEX.md) and the relevant item in [research/v3/](research/v3/).** The index maps all 13 chapters to relevant research, source types, and candidate quotes. Also consult the current course map, editorial status index and [issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) for decisions and the applicable chapter brief. A background research note is not approved chapter prose and does not authorize changes to product code or the public site.

The root `research/` folder is a **non-published archive**: it is outside Astro's `site/src/` and static assets, and must never be imported into a public route or copied to public assets without explicit editorial approval. GitHub itself is public, so do not put confidential material in this folder. Register every new source note in `research/INDEX.md` (chapter mapping, topic, date, verification status, source URL). Follow `research/README.md` when updating the archive.

Before citing an archived claim or chapter quote in published prose, open the authoritative primary source and verify precise text, context, date and scope. Distinguish peer-reviewed results, standards, surveys, and vendor/project positioning. Do not auto-promote quotations or repeat generic AI caveats. Run `npm run build` and `npm run research:check` on any PR affecting research or publication; this checks for accidental leakage into the generated site.


## V3 complete manuscript drafts and independent review — 2026-11-16

The current 13 chapters now each have a **complete reader-facing draft** under [project/v3/manuscripts/drafts/INDEX.md](project/v3/manuscripts/drafts/INDEX.md). All are **unapproved, unpublished drafts**; chapter-plan approval does not approve the prose. The earlier alternative-title approved source manuscripts remain preserved separately.

Before reviewing, implementing or preparing a new public chapter, read the **entire current draft**, current site/curriculum authority and [independent reviewer brief](project/v3/reviews/INDEPENDENT-REVIEW-BRIEF-2026-11-16.md). [Review issue #40](https://github.com/And-Gu/executable-engineering-lab/issues/40) requests a genuinely independent agent critique of the whole course, including Chapter 01–13, language and structure; the reviewer is free to recommend changing the chapter count, but no recommendation is applied automatically.

A [dedicated reviewer agent definition](.github/agents/v3-curriculum-reviewer.agent.md) is available for explicit selection in supported Copilot/VS Code sessions. **Adding an agent definition or issue is not proof that the agent was executed.** The independent review is complete only when its separate report has actually been submitted and inspected. No change to the public Astro site, original V0 model or historically approved sources is implied.
