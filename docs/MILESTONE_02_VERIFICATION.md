# Milestone 2 educational increment — verification

Checked 2026-10-20. PR #4’s repository exercise is merged. Chapter 2 and the browser workspace are ready for review, not yet published. This is a development verification record, distinct from generated model/proposal evidence.

## Automated and editorial checks

- `npm run check` passes: canonical/proposal validation, 74 tests across five files, zero Astro/TypeScript errors/warnings/hints, and six static routes.
- The original model/evaluator, canonical engineering YAML and reference verification test are unchanged. One additional regression ensures an unchanged criterion/reset yields identical definitions and no differences, including the original threshold basis.
- Built HTML inspection resolves 115 local link/asset/fragment targets under `/executable-engineering-lab/`, with no duplicate IDs per page.
- Rendered Chapter 2 main prose is 897 words, excluding the workspace, exercise and quiz. It starts from a proposed engineering change, distinguishes structure/reference checks from engineering meaning, includes controlled trials, and ends with four reasoning questions and a transition to dependency reasoning.
- Browser and CLI call the same pure analyzeProposal function and existing model/evaluator. No second coverage implementation or new dependency is introduced. Browser modules import no filesystem loader.
- Without JavaScript, built HTML retains the canonical baseline calculation, disabled proposal controls, the narrative/source tables/native quiz, and a noscript repository-exercise link. This fallback was reviewed in generated HTML; a full JavaScript-disabled browser audit was not performed.

## Production-build browser review

Served the build through Astro preview at the Pages base path. Observations are manual smoke checks, not an automated end-to-end suite.

| Action | Observed behavior |
| --- | --- |
| Home continuation → Chapter 2 | Full lesson and section navigation load |
| Initial/reset proposal | Same baseline threshold 50%, radius 35, estimate 38.52%, FAIL; no definition differences |
| Threshold example 35% | Estimate stays 38.52%; PASS, +3.52 pp; threshold, requirement statement and unapproved basis differ consistently |
| Radius example 45 | Estimate 63.76%; PASS under unchanged 50% criterion, +13.76 pp; only radius differs |
| Break source_need | Useful unresolved-reference error; proposal result, field rows and validated-definition preview clear; canonical baseline remains visible |
| Restore source_need | Current valid proposal recalculates |
| Radius zero | Valid 0% coverage and FAIL |
| Blank numeric edit | No evaluation or stale output |
| Threshold 101 | Range error, no evaluation |
| Threshold exactly 38.52 | PASS at zero margin using unrounded coverage |
| Reset via Enter; threshold ArrowUp | Baseline restored without spurious basis diff; threshold 51 gives FAIL with unchanged coverage |
| Quiz disclosure via Enter | Answer is revealed using native details/summary |
| Relationship view | Eight field/role rows link actual canonical IDs; direct refresh and return-to-Chapter-2 link work |
| Analysis artifact instructions | Explain record kind, exact definitions, provenance, false testExecuted flag, expiry/sign-in and local reproduction |
| Navigate away and return | Temporary proposal edits disappear |
| Chapter 1 regression | Original embedded lab/reset still gives 38.52% FAIL; its next link reaches Chapter 2 |
| Learn index | Chapters 1 and 2 appear in sequence with their learning purposes |
| Direct Chapter 2 refresh | Loads at base-prefixed path; canonical initial proposal restored |
| First Tab after refresh | Skip to content receives focus |
| 375px viewport | Page width remains 375px; controls stack and wrap; field table stays in its own focusable scroll region |
| Mobile table ArrowRight | Horizontal scroll moves inside a 343px region; dynamic cells have padding, borders and word wrapping |
| 1280px viewport | Baseline and controls are two 500px columns within the 1024px workspace |
| Browser console | No error logs observed during checked flows |

The initial mobile review found that dynamically inserted table cells did not receive Astro-scoped styles. The fix targets those cells under the workspace root; a refreshed production build confirmed padding and wrapping. The approved palette is preserved, and errors/statuses are expressed in text as well as visual styling.

## Acceptance status and release gate

Local implementation/review covers M2-EDU-01, DATA-01, VAL-01, EXP-01/02, TRC-01, EVD-01, UI-01 and REG-01 as bounded by the checks above. EVD-01 is supported by exact-definition CLI/CI records and explicit temporary-browser labeling; no browser result is promoted to retained evidence. The recorded test suite remains the baseline/proposal contract coverage, not proof of engineering suitability.

M2-PUB-01 remains pending: review/merge the educational PR, inspect the automatic main-branch Pages deployment and validation, then smoke-test the public Home/Learn/Chapter 1→2 path, both proposal trials, broken/restore reference, source/evidence links and direct chapter refresh. The intended chapter URL is https://and-gu.github.io/executable-engineering-lab/learn/02-engineering-information-models/; preparing this PR does not claim it is live.

## Limitations

The workspace is deliberately bounded to one changed numeric definition plus a temporary need-reference check. It has no persistence/export/approval and no general patch language, dependency engine or graph infrastructure. Browser input limits are 0–100% for threshold and 0–200 model units for radius; the shared model itself accepts any finite nonnegative radius. Unsupported canonical requirement wording is rejected rather than guessed.

Baseline values come from validated canonical YAML at build time. Proposals use isolated copies and remain unapproved. Relaxing a threshold does not improve coverage; increasing an assumed footprint does not establish a real sensor’s performance. V0 discretization and omitted-effects limitations still apply.

The Chapter 2 statement “reference test was not executed against the proposal” concerns the proposal analysis path; the registered reference test continues to run independently against canonical definitions. Its assertions were not relaxed for passing proposals. Model version stays 0.1.0 because the coverage calculation is unchanged.

Keyboard/mobile checks are smoke review, not a full assistive-technology or cross-browser audit. Saved CI artifacts expire after 30 days and can require GitHub sign-in. The pure analysis and repository exercise remain available for reproduction at the recorded revision.
