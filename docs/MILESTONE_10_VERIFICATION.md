# Milestone 10 educational increment — verification

Checked 2026-10-23. Planning PR #21 is merged. Chapter 10 is ready for review, not published. This development record is separate from generated engineering evidence.

## Scope and source review

- Main narrative: 827 words excluding headings, source table, exercise/workspace and quiz. Claim, reasoning, control and responsibility are explicitly local teaching terms, without standards-conformance claims.
- Source-linked table distinguishes expectations, actual mechanisms, observations needed and remaining responsibility. Criterion and source IDs use validated canonical imports. Roles are illustrative review responsibilities, not appointed people or recorded approvals.
- Gemara is omitted as an editorial choice: the engineering learning objective is better served by inspecting existing checks and their limits before introducing another representation. No claims about Gemara or standards are made, and no governance integration or V4 capability is introduced.
- Existing shared workspace, model/evaluator, schemas, assertions, workflows, dependencies and canonical YAML remain unchanged. Hypothetical evidence-gap cases are labeled; no historical event, approval or enforcement result is fabricated.

## Automated checks

- `npm run check` passes: 86 tests across six files, zero Astro/TypeScript errors/warnings/hints, engineering/proposal validation and fourteen static routes.
- `npm run evidence` retains canonical 38.52% geometric FAIL. `npm run proposals` produces unapproved radius 63.76%/50% PASS and threshold 38.52%/35% PASS. Assertion execution is distinct from record generation; proposal records do not claim reference-test execution against changed inputs.
- Built HTML inspection resolves 352 local links/assets/fragments and unique IDs per page. Static fallback retains source context, baseline, disabled pre-initialization controls and native disclosures. Full JavaScript-disabled browser testing was not performed.
- No tests were added merely to mirror narrative. Final prose-only addition was followed by the same complete check/build and link review.

## Static-preview browser review

Reviewed at port 4327 under `/executable-engineering-lab/`.

| Check | Observation |
| --- | --- |
| Home/Learn | Ten cards/entries; Chapter 10 links open correctly |
| Chapter 10→9→10 | Back and continuation reach correct lessons |
| Source view and return | Base-prefixed reference and Chapter 10 return resolve |
| Radius and threshold via Enter | Distinct shared-calculation outcomes shown |
| Broken reference | Analysis withheld; previous result removed |
| Restore/reset and refresh | Canonical 38.52% FAIL restored |
| Expired-artifact case and missing-behavior quiz via Enter | Native disclosures open and distinguish unavailable evidence from a measured failure |
| 375px | Document width 375px; table in its own 343px region, 641px content; keyboard ArrowRight scrolls it |
| 1280px | No document overflow |
| First Tab after reload | Skip-to-content receives focus |
| Browser errors | None observed during checked flows |

Final narrative count and preview screenshot were checked after rebuild. Screenshot: workspace outputs/chapter-10-preview.png. Manual smoke checks do not constitute comprehensive accessibility, cross-browser or security certification; older full exercises were not repeated.

## Evidence and release limits

Inspect generated records at the clean committed checkout for actual revision and dirty-state provenance. The written repository review is an aid separate from generated engineering evidence, not an approval artifact. This lesson loads no historical CI record. Artifact expiry/sign-in and V0 physical/numerical limitations remain.

Local observations support M10-EDU-01, CTL-01, EVD-01, SRC-01 (documented omission), UI-01 and REG-01 within these limits. M10-PUB-01 remains pending review/merge, successful exact main-revision validation/Pages and public Home/Learn/Chapter 9→10/source return/exercise/refresh checks. No operational acceptance or production-system assurance is claimed.

## Publication observation — 2026-10-23

This observation supersedes the prepublication status above. PR #22 merged at 06:03:18 UTC (08:03:18 Europe/Stockholm) as `db7a0e9529063c6348098cc4367d151d79a0cf1a`. [Main validation](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39909203929) and [Pages](https://github.com/And-Gu/executable-engineering-lab/actions/runs/39909203982) succeeded for that revision. The merged checkout passed check (86 tests, zero diagnostics, fourteen routes), evidence and proposals; all generated records identify the clean merge revision. Canonical modeled 38.52% FAIL remains expected.

Public browser review confirmed ten Home cards and ten Learn entries, Chapter 9→10, direct refresh, source return, both proposal outcomes, invalid-reference withholding, restore/reset/reload and keyboard evidence-gap/quiz disclosures. No browser errors observed. M11 planning does not change those observations. M10-PUB-01 is satisfied within the earlier smoke-review limits; no new comprehensive accessibility/cross-browser audit was performed for publication.
