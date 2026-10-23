# Milestone 11 educational increment — verification

Checked 2026-10-23. Planning PR #23 is merged. Chapter 11 is ready for review, not published. This development record is separate from generated engineering evidence.

## Scope and automated review

- Main prose: 816 words excluding headings, table, exercise/workspace and quiz. Configuration/baseline are explicit local teaching terms; no formal process conformance or industrial-scale performance is claimed.
- Source-role table reads validated canonical identifiers, criterion, geometry and model version. It distinguishes stable identity, revision, method, execution and working-tree state. No historical source or CI artifact is loaded by the page.
- Existing V0, YAML, model/evaluator, schemas, assertions, workflows, dependencies and workspace implementation remain unchanged. Reuse cases are explicitly hypothetical; no combined candidate, historical run or approval is invented.
- `npm run check` passes: 86 tests across six files, zero Astro/TypeScript errors/warnings/hints, engineering/proposal validation and fifteen static routes.
- `npm run evidence` retains canonical 38.52% FAIL. Proposal generation produces radius 63.76%/50% PASS and threshold 38.52%/35% PASS, both unapproved analyses. Record generation remains separate from assertion execution.
- Built HTML inspection resolves 382 local links/assets/fragments and confirms unique IDs per page. Static fallback includes baseline/context, disabled pre-initialization controls and native disclosures. Full JavaScript-disabled browser testing was not performed.
- No implementation-mirroring prose tests were added.

## Static-preview browser smoke review

Reviewed at port 4327 under `/executable-engineering-lab/`.

| Check | Observation |
| --- | --- |
| Home/Learn | Eleven cards/entries and correct Chapter 11 path |
| Chapter 11→10→11 | Back/continuation resolve |
| Source view and return | Correct base-prefixed reference and Chapter 11 return |
| Radius and threshold examples via Enter | Distinct expected shared-calculation outcomes |
| Broken reference | Analysis withheld; previous result removed |
| Restore/reset/reload | Canonical 38.52% FAIL returns |
| Dirty-checkout case and implementation/evidence quiz via Enter | Native explanations open with qualified reuse reasoning |
| 375px | Document width 375px; source table in its own 343px region with 481px content; ArrowRight scrolls it |
| 1280px | No document overflow |
| First Tab after reload | Skip-to-content receives focus |
| Browser errors | None observed during checked flows |

Screenshot: workspace outputs/chapter-11-preview.png. These checks are manual smoke review, not comprehensive accessibility/cross-browser certification. Older full exercises were not repeated; shared implementation is unchanged.

## Evidence and remaining work

Generated reference/proposal records are inspected at the committed checkout for actual revision and dirty-state provenance. The written reuse template is a manual review aid, not an approved baseline or new engineering evidence format. A dirty-state flag does not snapshot every uncommitted modification; the lesson explicitly retains that limitation.

Local observations support M11-EDU-01, SRC-01, EVD-01, UI-01 and REG-01 within these limits. M11-PUB-01 remains pending review/merge, successful exact main-revision validation/Pages and public Home/Learn/Chapter 10→11/source-return/proposal/disclosure/refresh checks. V0 physical/numerical limits and historical artifact expiry/sign-in remain. No operational suitability or universal evidence applicability is claimed.

## Publication observation — 2026-10-23

This observation supersedes the prepublication status above. PR #24 merged at 15:52:48 UTC (17:52:48 Europe/Stockholm) as `f13f700527da5af69b0fe7b0c2a7314549ec8246`. [Main validation](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39982049107) and [Pages](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39982049116) succeeded for that exact revision. The merged checkout passed check (86 tests, zero diagnostics, fifteen routes), evidence and proposals; all generated records identify the clean merge revision. Canonical modeled 38.52% FAIL remains expected.

Public browser review confirmed eleven Home cards and eleven Learn entries, Chapter 10→11, direct refresh, source return, both proposal outcomes, invalid-reference withholding, restore/reset/reload and keyboard dirty-checkout/quiz disclosures. No browser errors observed. M11-PUB-01 is satisfied within the earlier smoke-review limits. No new comprehensive accessibility/cross-browser audit was performed for publication.
