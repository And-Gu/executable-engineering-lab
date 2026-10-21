# Milestone 6 educational increment — verification

Checked 2026-10-21. Planning PR #13 is merged. Chapter 6 and the synchronized homepage are published through PR #14. This development record is separate from generated engineering evidence.

## Scope and automated checks

- Chapter 6 contains 863 words of main prose excluding workspace, exercise and quiz. It distinguishes assertions, requirement evaluation, reference-record generation, proposal analysis, provenance and physical limitations.
- Existing ProposalWorkspace, analyzeProposal, model/evaluator, canonical YAML, model version, reference assertions and artifact format remain unchanged. No client script, dependency, assurance engine or new numerical behavior is introduced.
- The reference page now clarifies that reference-record generation does not itself invoke Vitest; its stable `retained-evidence` anchor is preserved. The heading says reference evaluation record, and source/return links remain available.
- `npm run check` passes: 86 tests across six files, source/proposal validation, zero Astro/TypeScript diagnostics and ten static routes.
- `npm test -- models/coverage/verification.test.ts` passes separately: one test with assertions for the canonical expected engineering FAIL. Its source, the evidence generator and validation workflow were inspected to distinguish execution paths and ordering.
- Built HTML inspection resolves 238 local links/assets/fragments under the Pages base path and confirms unique IDs per page.
- Generated no-JavaScript HTML retains baseline, disabled controls, narrative, repository review instructions and native quiz. A complete JavaScript-disabled browser audit was not performed.

## Repository review

`docs/06-evidence-review.md` supplies commands for a focused assertion run, actual reference generation/inspection and separate proposal analysis. The reference generator calls source validation, calculateCoverage and evaluateCoverage directly; it does not invoke Vitest. The test ID is a registered association, not execution attestation.

The record's `definition` stores IDs, model version, exact inputs, units, threshold and assumptions, rather than the complete YAML statement/title. Its `calculation` stores numerical method/grid/counts/evaluation. Its `execution` stores source revision, dirty status, timestamp, context, run URL where applicable and runtime. Inspect sources at that revision for surrounding meaning. Proposal records separately retain exact baseline/proposed definitions and `verification.testExecuted: false`.

The handoff generation commands inspect actual records from the committed clean checkout. No saved artifact is loaded by the lesson, no generator behavior was changed and no test execution claim was added to the record.

## Production-build browser smoke review

Reviewed the static build using Astro preview at `/executable-engineering-lab/` on port 4327.

| Check | Observation |
| --- | --- |
| Initial/reset | Canonical 38.52% FAIL against 50%, radius 35; no definition changes |
| Radius example | 63.76% PASS against the unchanged 50% criterion, radius 45; scenario diff shown |
| Broken reference | Useful diagnostic, proposal result withheld and difference rows cleared |
| Restore/reset via Enter | Valid analysis recovers and canonical FAIL returns |
| Review explanation and second quiz via Enter | Native disclosures open |
| Home/Learn→Chapter 6 | Complete lesson loads |
| Chapter 6→5→6 | Chapter 5 still evaluates canonical 38.52% FAIL; continuation returns to lesson |
| TEST-COV-001 source and artifact instructions | Base-prefixed links reach actual source/record guidance; return to Chapter 6 works |
| Updated reference wording | Explicitly states generator does not invoke Vitest |
| 375px | Document remains 375px wide; narrative/instructions wrap, workspace uses existing stacked layout |
| 1280px | No document overflow, readable heading/navigation/narrative |
| First Tab after refresh | Skip-to-content receives focus |
| Browser error logs | None observed during checked flows |

These are manual smoke checks, not comprehensive screen-reader/cross-browser certification. Chapters 1–4 full exercises were not repeated; their unchanged model/component behavior and local links remain covered by existing checks. Existing workspace lifetime/fallback limitations remain documented in the earlier verification records.

## Acceptance and remaining work

Local review supports M6-EDU-01, EXP-01, EXE-01, EVD-01, LIM-01, UI-01 and REG-01 within the checks above. No loaded CI record, fabricated successful test badge or automated acceptance decision is presented. Expected geometric FAIL is preserved alongside successful assertion execution.

M6-PUB-01 was completed on 2026-10-21. [PR #14](https://github.com/And-Gu/executable-engineering-lab/pull/14) merged at 12:21:07 UTC (14:21:07 Europe/Stockholm) as `3d8829e73a03c2d2d63d2d32a6c9bbd6b2cf6f9e`. [Pages deployment](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39598903854) and [main-revision validation](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39598904031) succeeded. The merged checkout passed all 86 tests, validation, types, build, reference evidence generation and proposal analysis. Public Home and Learn both display six chapters; the Chapter 6 card, direct refresh, Chapter 5→6, radius trial, broken/restored reference, reset, artifact/source return and quiz via Enter worked. The reference page explicitly distinguishes evidence generation from Vitest invocation. No browser errors were observed. [Chapter 6 is published](https://and-gu.github.io/executable-engineering-lab/learn/06-verification-evidence/) within the manual-review limits above.

Physical model validity, an operational basis for the threshold and a universal discretization error bound remain unestablished. Artifact expiry/sign-in and unperformed comprehensive accessibility audits remain limitations. More automation or repeated numerical output does not establish engineering authority.

## Homepage follow-up — 2026-10-21

Home now introduces all six completed lessons through numbered cards instead of three activity shortcuts and repeated continuation paragraphs. Home and Learn share `site/src/data/chapters.ts`; contributor guidance requires registering each new completed lesson there. The approved card accents repeat across rows, and Lab/Reference remain direct links.

`npm run check` passes with 86 tests and ten routes. Built-output inspection confirms all six Learn entries have Home links and existing base-prefixed chapter routes. Browser review confirms six cards in three columns at 1280px, one 343px column with no overflow at 375px, visible keyboard focus and the Chapter 6 card opening its actual lesson. No new model or engineering-data behavior is introduced. This is a bounded manual review, not a comprehensive accessibility audit.
