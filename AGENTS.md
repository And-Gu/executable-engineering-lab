# Contributor and agent guidance

Read SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md as authoritative planning inputs. Their descriptions of future capabilities do not authorize extra scope.

Keep operational intent, engineering definition and execution evidence distinct. Canonical engineering data lives in engineering/, schemas in schemas/, and pure calculations in models/. Astro presents these sources; never maintain a second model formula or handwritten PASS value in UI code.

V0 is one fixed ideal circular sensor, a rectangular area, deterministic cell-center sampling and a threshold evaluator. Do not add multiple sensors, tracking, probabilities, agents, graph infrastructure, governance integrations, authentication or a backend.

Use strict source validation. Resolve every ID and source path. Include provenance and honest working-tree status in generated evidence; never fabricate timestamps, results or CI outcomes. An expected engineering FAIL must not be disguised as PASS.

Make reviewable PR-sized changes. Run npm run check and npm run evidence before handoff. For UI work check keyboard access, labels, text outcomes, mobile layout and GitHub Pages base-path links. Follow ROADMAP.md for subsequent increments. Do not merge or publish changes merely because checks pass.
