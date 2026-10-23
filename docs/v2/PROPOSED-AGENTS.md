# AGENTS.md — v2 proposed repository instructions
## Authority and order
Read the root technical source and tests first. Existing V0 source and model behavior remain authoritative. For proposed future teaching design read `project/TUTORIAL-SPEC.md`, `project/CURRICULUM-MAP.md`, `project/ENGINEERING-WORKFLOW.md`, `project/DEMONSTRATOR-LEARNING-PLAN.md`, `project/EDITORIAL-GUIDE.md`, `project/INFORMATION-ARCHITECTURE.md`, and individual `chapters/` briefs. Historical milestones remain immutable evidence of earlier releases.

## Non-negotiable preservation
Do not change V0: single ideal circular sensor, 100×100 area and cell-center grid, radius 35 at (50,50), expected 38.52% vs 50% educational criterion. Existing engineering YAML, source IDs, schemas, pure model, tests and evidence remain in place unless separately reviewed and authorized. Software test PASS and modeled requirement FAIL are different facts. Astro must not create a second numerical model or hardcode a PASS.

## Engineering teaching scope
Teach multidisciplinary AI-native engineering, not exclusively software. Explain planning under uncertainty, progressive specifications, concurrent exploration/delivery, agent context and authority, small reviewable increments, model/physical-test limits and cross-disciplinary cadence. Introduce AI immediately and demonstrate a real recorded agent workflow when the evidence exists. Never invent agent executions or physical measurements.

## Change process
Inspect code/docs → propose bounded scope → implement incremental slice → independently run and record checks → review engineering and learning quality → publish only on owner authorization. For implementation changes run `npm run check` and `npm run evidence` if possible. Validate URLs, chapter registry, base path, keyboard and responsive layout. Protect old routes during curriculum migration. Specialists have distinct roles in `agents/`; one integrator coordinates shared edits.
