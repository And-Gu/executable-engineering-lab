# Milestone 3 educational increment — verification

Checked 2026-10-20. Trace preparation PR #7 is merged as `b3c1d18`; Chapter 3 is published through PR #8. This is a development verification record, separate from generated engineering evidence.

## Automated and editorial checks

- `npm run check` passes: 86 tests across six files, source/proposal validation, zero Astro/TypeScript errors/warnings/hints, and seven static routes.
- Chapter 3 has 837 words of main prose excluding interactive components, the relationship table, experiment instructions and quiz. It starts from the operational decision, explains backward trace and forward impact, distinguishes IDs/definitions/executions, and includes assumption review and four reasoning questions.
- The eight relationship rows use the validated source projection introduced in PR #7. All numerical results use the unchanged ProposalWorkspace → analyzeProposal → coverage/evaluator path. No new calculation, impact classifier, graph engine, dependency or client script is introduced.
- Canonical YAML, model version, coverage/evaluator and reference test assertions are unchanged. Existing tests cover threshold/radius differences, references and the fact that unchanged connectivity can coexist with changed definitions.
- Built HTML inspection resolves 156 local links/assets/fragments under the Pages base path and confirms unique IDs on each of seven pages.
- Generated HTML retains the baseline calculation, disabled controls, typed source table, native disclosures and repository exercise fallback without JavaScript. A full JavaScript-disabled browser audit was not performed.

## Production-build browser smoke review

Astro preview served the actual static build at `/executable-engineering-lab/`. Port 4326 was occupied by another project; preview selected 4327. Only the lab preview process is owned by this work.

| Check | Observation |
| --- | --- |
| Initial state/direct refresh | Baseline threshold 50, radius 35, coverage 38.52%, FAIL; no spurious differences |
| Threshold example | Coverage 38.52%, PASS against 35%, +3.52 pp; exact requirement field changes shown |
| Radius example | Coverage 63.76%, PASS against 50%, +13.76 pp; scenario radius changes |
| Broken source_need | Useful unresolved-reference error, result withheld and difference rows cleared |
| Restore reference/reset via Enter | Valid proposal recovers; reset returns baseline FAIL |
| Blank value/threshold 101 | No evaluation or stale result |
| Browser Back after a trial | Proposal resets to canonical baseline |
| Home → Chapter 3; Learn → Chapter 3 | Complete lesson loads |
| Chapter 3 → Chapter 2 → Chapter 3 | Chapter 2 baseline still evaluates to 38.52% FAIL; new continuation reaches Chapter 3 |
| Proposal evidence link → source view → return to Chapter 3 | Base-prefixed navigation and return work, including keyboard activation |
| Impact explanation and first quiz disclosure via Enter | Native details open and reveal explanations |
| First Tab after chapter refresh | Skip-to-content link receives focus |
| 375px layout | Document width stays 375px; controls stack/wrap; relationship and difference tables remain within their own 343px scroll regions |
| Relationship table ArrowRight | Focus stays on region; horizontal scroll advances 40px |
| 1280px layout | No document overflow; heading, narrative, navigation and table remain readable |
| Browser error logs | None observed during checked flows |

These are manual smoke checks, not an automated end-to-end suite or full screen-reader/cross-browser accessibility audit. Chapter 1 behavior is covered by unchanged model tests and existing navigation/link checks; its full interactive exercise was not repeated in this increment.

## Acceptance and remaining release work

Local review supports M3-EDU-01, TRC-01, EXP-01, EVD-01, VAL-01, UI-01 and REG-01 within the checks above. No saved execution is displayed in Chapter 3: it explicitly directs readers to actual artifact/reproduction instructions. The relationship table describes definitions from the site build, not a historical execution. Impact reasoning is narrative and exercise-based, not automated evidence invalidation or a general impact decision.

M3-PUB-01 was completed on 2026-10-20. [PR #8](https://github.com/And-Gu/executable-engineering-lab/pull/8) merged at 21:00:33 UTC as `4430d28b37612f3c64b9c0729fedba13aff24952`. [Pages deployment](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39496821993) and [main-revision validation](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39496821997) succeeded. The merged checkout passed `npm run check`, `npm run evidence` and `npm run proposals` with 86 tests and a clean working tree. Public Home/Learn/Chapter 2→3 navigation, direct load/refresh, both proposal trials, broken/restored reference, reset, source/evidence return and quiz via Enter passed. The baseline remained 38.52% FAIL; threshold and radius trials remained separate unapproved analyses. No browser error logs were observed. [Chapter 3 is published](https://and-gu.github.io/executable-engineering-lab/learn/03-digital-threads/), within the audit limitations above.

A geometric PASS remains insufficient for operational suitability or optimality. The wall/obstruction exercise is a judgment question: the model does not simulate occlusion. Browser copies remain temporary and unapproved; retained proposal analyses still do not claim TEST-COV-001 executed changed inputs. CI artifacts expire after 30 days and can require sign-in. Physical validity, artifact persistence and comprehensive assistive-technology testing remain outside the demonstrated checks.
