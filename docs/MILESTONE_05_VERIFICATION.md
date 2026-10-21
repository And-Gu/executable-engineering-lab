# Milestone 5 educational increment — verification

Checked 2026-10-20. Planning PR #11 is merged. Chapter 5 is published through PR #12 on 2026-10-21. This development record is separate from generated engineering evidence.

## Scope and automated checks

- Chapter 5 contains 836 words of main prose excluding the interactive lab, protocol and quiz. It teaches factor control, geometric feasibility versus preference, missing objectives/evidence and limits on architecture/optimality claims.
- The existing CoverageLab and shared model/evaluator execute all browser trials. No new formula, client behavior, model version, canonical definition, dependency or reference-test assertion is introduced.
- A small shared styling fix makes dynamically inserted comparison cells receive the existing table padding, borders and header background. Astro-scoped selectors did not apply to those generated cells; selectors are now scoped explicitly under the lab root. No geometry or comparison behavior changes.
- `npm run check` passes after that fix: 86 tests across six files, source/proposal validation, zero Astro/TypeScript diagnostics and nine static routes. No test was added merely to mirror prose or styling.
- Built HTML inspection resolves 210 local links/assets/fragments under the Pages base path and confirms unique IDs on every page.
- Generated no-JavaScript HTML retains baseline counts/outcome, assumptions, disabled controls, protocol, repository reproduction link and native quiz. A complete JavaScript-disabled browser audit was not performed.

## Four-trial reproduction

Executed the exact fenced command from `docs/05-configuration-experiment.md` with Node/tsx. It loads validated canonical definitions and calls the existing calculation/evaluator. The printed values agree with recorded browser rows (browser formatting uses two decimals):

| Trial | x | y | Radius | Covered / total | Estimate | Margin (pp) | Criterion |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 50 | 50 | 35 | 3852 / 10000 | 38.52% | −11.48 | FAIL |
| 2 | 0 | 50 | 35 | 1926 / 10000 | 19.26% | −30.74 | FAIL |
| 3 | 50 | 50 | 45 | 6376 / 10000 | 63.76% | +13.76 | PASS |
| 4 | 50 | 50 | 50 | 7860 / 10000 | 78.60% | +28.60 | PASS |

All use canonical area 100×100, threshold 50%, MODEL-COV-001 v0.1.0 and the fixed 100×100 cell-center method. These are observed exploratory outputs, not new retained verification evidence or executions of TEST-COV-001 against candidates. The example prints no invented provenance. The radius-45 proposal fixture reproduces only the relevant radius trial, not all placements.

## Production-build browser review

Used Astro preview at `/executable-engineering-lab/` on port 4327. Manual checks covered:

- All four protocol rows agree with CLI output. After row four, record is disabled with a useful limit message.
- Reset restores canonical current inputs while retaining rows. Clear removes rows and focuses Sensor x. Reload and browser Back after leaving restore an empty comparison in the checked browser.
- Blank radius withholds evaluation and disables recording. Reset recovers baseline calculation.
- Explanation and first quiz disclosure open via Enter; the first Tab after refresh reaches Skip to content.
- Home/Learn→Chapter 5, Chapter 5→4→5, artifact/source return and threshold-exercise contrast links work. Chapter 4 baseline still returns 3852/10000; Chapter 2 proposal baseline remains 38.52% FAIL.
- At 375px the document remains 375px wide and the comparison scroll region fits 343px. ArrowRight moves table scroll by 40px. After the styling fix, dynamic cells have 10.4px padding and 1px borders. Controls and result text remain readable.
- At 1280px there is no document overflow and the chapter navigation/narrative are readable.
- No browser error logs were observed in checked flows.

These are smoke checks, not comprehensive accessibility or cross-browser testing. Shared lab styling affects its other uses; model/component behavior was preserved. Full Chapter 1/3 exercises were not repeated in this increment.

## Acceptance and remaining work

Local review supports M5-EDU-01, EXP-01, REP-01, INT-01, UI-01 and REG-01 within the limits above. Numerical costs, ranking, optimization and multi-sensor behavior remain absent. It is an intended educational conclusion that geometric results alone cannot justify selecting a preferred operational design.

M5-PUB-01 was completed on 2026-10-21. [PR #12](https://github.com/And-Gu/executable-engineering-lab/pull/12) merged at 05:44:27 UTC (07:44:27 Europe/Stockholm) as `9df4fc5774151d266a5ac115dadb506515484d25`. [Pages deployment](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39551268225) and [main-revision validation](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39551268218) succeeded. The merged checkout passed all 86 tests, validation, type checks, build, reference evidence generation and proposal analysis. Public trials reproduced the four outcomes above. The four-row limit, reset retaining rows, clear removing rows, invalid-input withholding and refresh restoring baseline passed. Home/Learn/Chapter 4→5, artifact/source return and quiz via Enter worked, and no browser errors were observed. [Chapter 5 is published](https://and-gu.github.io/executable-engineering-lab/learn/05-experimentation/) within the audit limits above.

Browser rows and terminal calculations remain temporary/exploratory. Canonical reference evidence and unapproved proposal analyses retain their distinct meanings. V0 physical assumptions, discretization limits, artifact expiry/sign-in and unperformed comprehensive assistive-technology audits remain limitations.
