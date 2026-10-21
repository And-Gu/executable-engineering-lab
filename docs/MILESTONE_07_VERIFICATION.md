# Milestone 7 educational increment — verification

Checked 2026-10-21. Planning PR #15 is merged. Chapter 7 is published through PR #16. This development record is separate from generated engineering evidence.

## Scope and automated checks

- Chapter 7 contains 806 words of main prose excluding the status callout, workspace, exercise and quiz. It introduces a local pedagogical task contract, separates proposal/check/review, contrasts the same radius/threshold cases under fixed scope, and explains absent enforcement and missing engineering justification.
- The manual exercise is explicitly labeled: no actual agent runs, provider/API calls, permission enforcement, mock transcripts or attributed agent outputs. Existing fixtures are designed teaching examples.
- Shared ProposalWorkspace, analysis/model/evaluator, canonical YAML, schemas, artifact formats, model version and reference assertions are unchanged. No client script, dependency or new executable helper was needed.
- `npm run check` passes: 86 tests across six files, source/proposal validation, zero Astro/TypeScript diagnostics and eleven static routes. No test was added to mirror prose.
- Built HTML inspection resolves 267 local links/assets/fragments under the Pages base path and confirms unique IDs per page.
- Generated no-JavaScript HTML retains canonical baseline, disabled proposal controls, task narrative, written-contract/repository links and native quiz. Full JavaScript-disabled browser testing was not performed.
- Chapter registration uses the shared `site/src/data/chapters.ts`; no separate Home list was introduced.

## Repository exercise

Executed the exact Node inspection snippet from `docs/07-task-review.md` against newly generated proposal files. The radius proposal's `definition.differences` contains only `scenario.sensor.radius`. The threshold proposal contains threshold, statement and threshold-basis differences. Both calculate PASS under their respective definitions; both retain `verification.testExecuted: false`.

The written fixed-criterion contract permits the radius edit and excludes criterion relaxation. This is a manual review conclusion, not an automated classifier or approval decision. Both records remain unapproved, and neither establishes physical suitability. The instructions also require inspecting exact baseline/proposed definitions and actual source revision/dirty state, rather than treating a summary or proposer claim as evidence.

Reference evidence and proposal records are regenerated and inspected from the committed checkout for handoff. Canonical TEST-COV-001 remains independently tested against its expected geometric FAIL. No unexecuted assertion run or agent provenance is claimed.

## Production-build browser smoke review

Reviewed the static build at `/executable-engineering-lab/` using Astro preview on port 4327.

| Check | Observation |
| --- | --- |
| Radius example | 63.76% PASS against 50%, only scenario.sensor.radius differs |
| Threshold example | 38.52% PASS against 35%, threshold/statement/basis differ visibly |
| Broken source reference | Result withheld and difference rows cleared |
| Restore/reset via Enter | Valid analysis recovers; canonical 38.52% FAIL returns |
| Review explanation and permission-boundary quiz via Enter | Native disclosures reveal explanations |
| Direct chapter reload after trial | Canonical baseline restored |
| Home and Learn | Both contain seven entries; Chapter 7 opens from its Home card |
| Chapter 7→6→7 | Chapter 6 baseline still gives 38.52% FAIL and continuation returns to new lesson |
| Reference/source return | Base-prefixed links and return to Chapter 7 work |
| 375px | No document overflow; instructions wrap; Home shows seven cards without overflow |
| 1280px | No document overflow and readable chapter layout |
| First Tab after chapter refresh | Skip-to-content receives focus |
| Browser errors | None observed in checked flows |

These are manual smoke checks, not comprehensive accessibility/cross-browser certification. Older full exercises were not repeated beyond Chapter 6 regression navigation; shared code and model behavior remain unchanged.

## Acceptance and release work

Local review supports M7-EDU-01, SCP-01, EVD-01, STOP-01, UI-01 and REG-01 within the limits above. Stop/reject decisions are reasoning tasks; the workspace deliberately permits valid out-of-scope teaching cases. A readable contract does not enforce runtime permissions, and an in-scope edit is not design acceptance.

M7-PUB-01 was completed on 2026-10-21. [PR #16](https://github.com/And-Gu/executable-engineering-lab/pull/16) merged at 16:31:07 UTC (18:31:07 Europe/Stockholm) as `ee1555fa56f8f05fa44180724da02f51066e86da`. [Pages deployment](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39635487713) and [main-revision validation](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39635487759) succeeded. The merged checkout passed all 86 tests, validation, types, build, reference generation and proposal analysis. Public Home/Learn display seven chapters. The Chapter 7 card, Chapter 6→7, direct refresh, both proposal outputs/differences, broken-reference withholding, restore/reset, source return and permission-boundary quiz via Enter passed. No browser errors were observed. [Chapter 7 is published](https://and-gu.github.io/executable-engineering-lab/learn/07-agentic-engineering/) within the audit limits above.

No real agent integration, V3 capability, autonomous editing or physical validation is delivered. V0 modeling limits, artifact expiry/sign-in and unperformed comprehensive assistive-technology audits remain limitations. This educational increment does not authorize a later runtime integration implicitly.
