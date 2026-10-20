# Milestone 4 educational increment — verification

Checked 2026-10-20. Planning PR #9 is merged. Chapter 4 is ready for review, not published. This development record is separate from generated engineering evidence.

## Scope and automated checks

- Chapter 4 contains 834 words of main prose, excluding the lab, experiment and quiz. It explains sampling, clipping, pure input/output behavior, separate evaluation, repeatability, execution metadata and physical limitations, then asks four reasoning questions.
- The existing CoverageLab already exposes covered/total cells, estimated percentage, margin, method and grid. This increment reuses it unchanged. No new formula, client script, model API, resolution control, schema, dependency or test assertion was needed.
- `npm run check` passes: 86 tests across six files, canonical/proposal validation, zero Astro/TypeScript errors/warnings/hints and eight static routes.
- Built HTML inspection resolves 183 local links/assets/fragments under the Pages base path and confirms unique IDs per page.
- Generated no-JavaScript HTML retains the canonical count, estimated result, method/resolution, disabled controls, assumptions, repository instructions and native quiz. A full JavaScript-disabled browser audit was not performed.
- Existing independent geometry, invalid-input, determinism and evaluator equality tests remain intact. Canonical YAML, model version, model/evaluator and reference-test assertions are unchanged. No test was added merely to mirror lesson text.

## Production-build browser smoke review

The static build was reviewed using the existing Astro preview at `/executable-engineering-lab/` on port 4327.

| Check | Observed behavior |
| --- | --- |
| Initial/reset | 3852/10000 centers, 38.52%, FAIL, −11.48 pp |
| Radius ArrowUp to 36 then 37 | Counts 4060 then 4304; same fixed total and updated margin |
| x=0 with y=50, radius=35 | Footprint moves to boundary; count 1926, margin −30.74 pp |
| Record boundary trial then reset via Enter | Comparison row retained; current count returns to 3852 |
| Radius zero | Valid zero count, −50 pp |
| Blank radius | Not evaluated; detail cleared and SVG hidden to avoid stale geometry |
| Reload | Canonical values/calculation restored and temporary comparison rows cleared |
| Home/Learn → Chapter 4 | Complete lesson loads |
| Chapter 4 → Chapter 3 → Chapter 4 | Chapter 3 proposal baseline still evaluates to 38.52% FAIL; continuation returns to new lesson |
| Evidence instructions → source view → Chapter 4 | Correct base-prefixed links and source return |
| Existing proposal exercise link | Reaches Chapter 2 exercise with canonical initial proposal |
| Explanation and first quiz via Enter | Native disclosures open and reveal reasoning |
| First Tab after chapter refresh | Skip-to-content link receives focus |
| 375px | Document width remains 375px; controls stack and count/result text wraps; comparison region stays within 343px |
| 1280px | No document overflow; readable narrative and navigation |
| Browser errors | None observed during checked flows |

These are manual smoke checks, not comprehensive accessibility or cross-browser certification. Chapter 1's full exercise was not repeated; its unchanged component/model and local links remain covered by existing checks. Existing comparison behavior was preserved, not expanded into architecture trade studies.

## Evidence reproduction

Two `npm run evidence` executions at clean revision `81de229` produced identical `definition` and `calculation` fields, including the expected 38.52% FAIL. Their result identifiers and timestamps differed, while source revision and clean working-tree status agreed. This verifies repeatability separately from execution metadata. `npm run proposals` remains a separate unapproved-analysis path, not execution of TEST-COV-001 against proposals.

## Acceptance and remaining release work

Local review supports M4-EDU-01, MOD-01, EXP-01, VAL-01, EVD-01, UI-01 and REG-01 within the limits above. M4-REP-01 is supported by the two-execution comparison above. Browser numbers remain temporary calculations; no retained CI result is loaded by the lesson.

M4-PUB-01 remains pending: review/merge, inspect validation and Pages deployment for the main revision, then publicly smoke-test direct refresh, Home/Learn/Chapter 3→4, counts/radius/boundary/reset, invalid input, source return and quiz. Intended path: `/executable-engineering-lab/learn/04-executable-models/`.

V0 provides neither an established universal discretization bound nor physical sensor validity. Its geometric criterion cannot establish optimality, detection performance or operational suitability. CI artifacts expire after 30 days and can require sign-in. Full screen-reader/cross-browser and JavaScript-disabled browser audits remain unperformed.
