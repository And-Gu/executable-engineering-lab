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

## V3 research sources and unpublished background (agent entry point)

**Before drafting, revising, or reviewing any v3 chapter, read [research/INDEX.md](research/INDEX.md) and the relevant item in [research/v3/](research/v3/).** The index maps all 13 chapters to relevant research, source types, and candidate quotes. Also consult the approved manuscript and [issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) for actual editorial decisions. A background research note is not approved chapter prose and does not authorize changes to product code or the public site.

The root `research/` folder is a **non-published archive**: it is outside Astro's `site/src/` and static assets, and must never be imported into a public route or copied to public assets without explicit editorial approval. GitHub itself is public, so do not put confidential material in this folder. Register every new source note in `research/INDEX.md` (chapter mapping, topic, date, verification status, source URL). Follow `research/README.md` when updating the archive.

Before citing an archived claim or chapter quote in published prose, open the authoritative primary source and verify precise text, context, date and scope. Distinguish peer-reviewed results, standards, surveys, and vendor/project positioning. Do not auto-promote quotations or repeat generic AI caveats. Run `npm run build` and `npm run research:check` on any PR affecting research or publication; this checks for accidental leakage into the generated site.
