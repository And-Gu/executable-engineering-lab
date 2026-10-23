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
