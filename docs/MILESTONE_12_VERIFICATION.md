# Milestone 12 educational increment — verification

Checked 2026-10-23. Planning PR #25 is merged. Chapter 12 is ready for review, not published. This development record is separate from generated engineering evidence.

## Scope and automated review

- Main narrative: 817 words excluding headings, source route, exercise/workspace, handover guide and quiz. It starts with the operational question and ends with the intent/definition/evidence principle and explicit future capability boundary.
- Source route uses validated canonical IDs, criterion and model version. One unchanged ProposalWorkspace is embedded. Reasoning guide is labeled guidance, not an execution or approval record. The written handover is outside the page and persists nothing.
- No historical artifact is fetched, no additional model/calculation is introduced and no operational acceptance or implemented V1–V4 capability is claimed. No empty next chapter appears; remediation links lead to existing chapters.
- Existing canonical YAML, schemas, stable IDs, model/evaluator, assertions, workflows, dependencies and workspace code remain unchanged.
- `npm run check` passes: 86 tests across six files, zero Astro/TypeScript errors/warnings/hints, source/proposal validation and sixteen static routes. Final narrative addition was followed by the full check again.
- `npm run evidence` retains expected canonical 38.52% FAIL. Proposal generation yields radius 63.76%/50% PASS and threshold 38.52%/35% PASS, both unapproved analyses. Assertion execution remains distinct from generated evaluations.
- Built HTML inspection resolves 417 local links/assets/fragments with unique IDs. Generated fallback retains source context/baseline, disabled pre-initialization controls and native guide/quiz. Full JavaScript-disabled browser testing was not performed.
- No tests were added merely to mirror prose.

## Static-preview browser smoke review

Reviewed at port 4327 under `/executable-engineering-lab/`.

| Check | Observation |
| --- | --- |
| Home/Learn | Twelve cards/entries; correct Chapter 12 path |
| Chapter 12→11→12 | Back/continuation resolve |
| Source view and return | Base-prefixed reference and Chapter 12 return resolve |
| Radius and threshold examples via Enter | Distinct expected shared-calculation outcomes |
| Broken reference | Analysis withheld and previous result removed |
| Restore/reset/reload | Canonical 38.52% FAIL returns |
| Handover guide and software-test/engineering-FAIL quiz via Enter | Native disclosures open with bounded reasoning |
| 375px and 1280px | Document width matches viewport; no document overflow; radius control works at mobile width |
| First Tab after reload | Skip-to-content receives focus |
| Browser errors | None observed during checked flows |

Final text count and preview were inspected after rebuild. Screenshot: workspace outputs/chapter-12-preview.png. This is manual smoke review, not comprehensive accessibility/cross-browser certification. Older full exercises were not repeated; shared implementation remains unchanged.

## Evidence and release limits

Inspect generated reference/proposal records at the clean committed checkout for actual revision/dirty-state provenance. The capstone loads no historical CI artifact. Artifact expiry/sign-in, V0 numerical/physical limits and inability of a dirty flag to snapshot every modification remain explicit.

Local checks support M12-EDU-01, TRC-01, EVD-01, UI-01 and REG-01 within these limits. M12-PUB-01 remains pending review/merge, exact main-revision validation/Pages success and public Home/Learn/Chapter 11→12/source-return/capstone/refresh checks. Curriculum publication is distinct from operational acceptance and future V1–V4 delivery.

## Publication observation — 2026-10-23

This observation supersedes the prepublication status above. PR #26 merged at 16:01:30 UTC (18:01:30 Europe/Stockholm) as `bae571bdd7f79b638b8ec2a8a952a74fba4c020b`. [Main validation](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39983281753) and [Pages](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39983281781) succeeded for that exact revision. The merged checkout passed check (86 tests, zero diagnostics, sixteen routes), evidence and proposals. Canonical modeled 38.52% FAIL remains expected.

Public browser review confirmed twelve Home cards and twelve Learn entries, Chapter 11→12, direct refresh, source return, both proposal outcomes, invalid-reference withholding, restore/reset/reload and keyboard handover-guide/quiz disclosures. An initially cached eleven-entry Learn page required reload; refreshed Learn, Chapter 11 continuation and source return then matched the new release. No browser console errors observed. M12-PUB-01 is satisfied within the earlier smoke-review limits. No new comprehensive accessibility/cross-browser audit was performed for publication.

The twelve-lesson learning path is complete. V0 remains the implemented demonstrator capability; multiple sensors, dynamics, actual agents and governance integrations are separate future work. Completion of the curriculum is not physical-system acceptance.
