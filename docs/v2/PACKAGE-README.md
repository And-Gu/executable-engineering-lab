# Executable Engineering Lab — v2.0 specification and implementation package
Status: **Proposed editorial/engineering target; not adopted or deployed**
Date: 2026-10-23
Audience: repository owner and implementing AI agents.

## Start here
1. Read `project/TUTORIAL-SPEC.md`, `project/CURRICULUM-MAP.md`, `project/ENGINEERING-WORKFLOW.md`.
2. Read `implementation/CURRENT-STATE-AND-MIGRATION.md` and `implementation/IMPLEMENTATION-PLAN.md`.
3. Read the twelve individual briefs under `chapters/`.
4. Read `AGENTS.md` and the relevant specialist-agent file.
5. Run `prompts/07-V2-ADOPTION-AND-DELIVERY.md` **in the repository** on a review branch, not on `main`.

## What this is
A complete specification package, derived from the 2026-10-23 editorial audit and subsequent full-redesign decision.
The new target has twelve chapters and four parts; chapter count is a deliberate v2 decision.
The original V0 coverage engine, source identities, threshold and expected engineering FAIL must remain intact.
V1+ demonstrations are **proposals**, not existing capabilities. No actual agent runtime or multidisciplinary calculation is assumed to exist.

## Authority
- Existing source code, YAML, schemas, tests and historical milestone evidence remain authoritative for **implemented V0**.
- These v2 project documents are authoritative proposals for **future tutorial design** once explicitly adopted.
- Historical root `SITE_SPEC.md`, `DEMONSTRATOR_SPEC.md`, `MILESTONE_*.md`, and milestone verification reports must not be rewritten to pretend the original release had v2 functionality.
- Do not publish, merge, or claim tests passed without actual evidence.

## Primary deliverables
- `project/`: seven coordinated specifications.
- `chapters/`: twelve individually scoped chapter briefs.
- `implementation/`: content migration, PR-sized delivery plan, QA/acceptance matrix.
- `agents/`: five specialist role contracts.
- `prompts/`: reusable adoption and chapter implementation prompts.
- `templates/`: reusable structures for future changes.

## Completion
V2 is complete only when the published experience matches the acceptance criteria in `implementation/QUALITY-GATES.md`, and the repository checks and human review are recorded.
