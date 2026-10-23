# V2 adoption — Stage 0/1 draft

Prepared 2026-10-23 from the owner-supplied review archive. Implementation of this bounded transition was requested; owner acceptance of the full v2 curriculum, merge and publication are not recorded. The public original course remains published. This branch changes Home/Learn framing and imports proposed specifications; it does not migrate chapters or implement new demonstrations.

## Baseline and actual inventory

- Fetched origin/main and started from clean `5087f980a181bb5f2a51856871068b062d7d3788` (PR #27); the archive reports the same revision.
- Sixteen static routes: Home, Learn, twelve lessons, Lab and Reference. Exact legacy paths/fragments are recorded in [route inventory](ROUTE-INVENTORY.json).
- Completed registry: `site/src/data/chapters.ts`, unchanged. Proposed four-part/twelve-title structure: `site/src/data/v2-curriculum.ts`; no unpublished route is registered or linked.
- Canonical records: NEED-001, REQ-COV-001, SCN-001, MODEL-COV-001 and TEST-COV-001 in engineering/manifest.yaml and source files. Pure calculation/evaluator: models/coverage/. Strict contracts: schemas/. Typed relationships and isolated proposal analyses: exercises/.
- UI: CoverageLab.astro, ProposalWorkspace.astro and Layout.astro remain unchanged. Their shared scripts/calculation are retained.
- Tests: six files, 86 tests reported by Vitest. GitHub validation and Pages workflows remain unchanged.
- Evidence commands generate ignored artifacts/reference-evidence.json and artifacts/proposals/*.json. Canonical output remains 3852/10000 sampled cells, 38.52%, FAIL against 50%; proposal analyses remain unapproved, not reference-test executions.
- Public original Home was inspected during this task: original hero and all twelve lesson cards present. No v2 page is published by this branch.

## Reconciled conflicts

| Conflict | Resolution in this draft | Preserved boundary |
| --- | --- | --- |
| Original SITE_SPEC.md curriculum vs revised teaching direction | Import project/ and chapters/ as proposed v2 design; expose planned structure on Home/Learn | Original lessons and historical release specifications untouched |
| Old expectation of an experiment in each chapter vs optional meaningful interactions | Root AGENTS.md scopes the v2 editorial exception to future briefs and this Home/Learn transition | No rewrite or removal of current experiments |
| Old ten-chapter references vs twelve coordinated briefs | Use current package README/curriculum map and twelve briefs; note stale text in PACKAGE-PROVENANCE.md | No silent deletion of received proposal context |
| “Accepted in user dialogue” in imported decision log | Replace introduction with proposed status; no owner approval inferred from attached text | Actual task authorization covers this bounded implementation only |
| V1 course vs V0 demonstrator labels | Use “original course” for published lessons; keep curriculum and demonstrator version labels distinct | No claim of distributed-sensor V1 capability |
| Proposed AGENTS.md vs implemented contract | Reconcile root guidance and retain received proposed text under docs/v2/PROPOSED-AGENTS.md | Technical V0 constraints retain authority |
| Proposed duplicated curriculum arrays | One presentation-only v2Parts module serves both pages | Completed chapter registry remains separate and unchanged |
| Missing templates/ and older prompts | Record absence; do not invent files or execution evidence | Future briefs remain scoped individually |

## Files and migration policy

Imported project/, chapters/, agents/, implementation/ and prompts/ hold proposed design/role/delivery inputs. CONTRIBUTING.md is explicitly proposed. docs/v2/ retains package context, provenance, inventory and actual observations. README and root AGENTS.md point to this transition. Runtime changes are limited to Home, Learn and their planned-curriculum data.

All legacy pages stay at their existing paths with existing IDs/fragments. No redirect, slug rename, registry replacement, tag or deletion is performed. Before a later chapter migration, select a new noncolliding slug in its reviewed slice, document semantic mapping from old material, and keep the original page accessible. Redirect only after content/fragment compatibility is reviewed; never send an old deep link to unrelated content. The package's legacy-to-v2 content map in implementation/CURRENT-STATE-AND-MIGRATION.md is a reuse proposal, not a route migration already applied.

## Verification and acceptance

See [verification record](VERIFICATION.md) for actual commands and browser observations. A draft PR and passing checks are not owner acceptance, publication, empirical learning gains or completion of Stage 2–5. No actual agent replay, multidisciplinary engine, graph or physical evidence is claimed.

Open decisions: future public slugs, inline versus Lab/Explore placement, authentic agent-run capture environment and redaction, hypothetical physical parameters, and acceptance of the new hero before publishing. No templates were included in the received archive. Later slices need their own engineering/editorial review.

Next proposed PR after Stage 0/1 acceptance: Stage 2 B1, Chapters 01–02 with a distinct workflow/roadmap learning experience. Do not start that slice merely because this draft passes CI.
