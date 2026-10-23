# Milestone 9 educational increment — verification

Checked 2026-10-23. Planning PR #19 is merged. Chapter 9 is ready for review, not publicly released. This development record is separate from generated engineering evidence.

## Scope and automated checks

- Complete chapter explains existing workflow triggers, explicit PR-head checkout, check/analysis/upload ordering, separate Pages workflow and remaining engineering decisions. Its local definition of continuous engineering makes no general platform guarantee. GitHub's default step success condition was checked against official documentation and linked in the lesson.
- Main narrative meets the approximately 800–1,200-word target, excluding exercises/workspace/quiz. Canonical criterion and registered test link use validated source imports. No historical execution is fetched or represented as current status.
- `npm run check`: 86 tests across six files, zero Astro/TypeScript errors/warnings/hints, validated engineering/proposal sources, thirteen static routes.
- `npm run evidence`: canonical estimate 38.52% FAIL, as expected. `npm run proposals`: radius candidate 63.76% against 50% PASS; threshold candidate 38.52% against 35% PASS, explicitly unapproved analyses. Reference generation remains separate from assertion execution.
- Built HTML inspection resolves 322 local links/assets/fragments with unique IDs per page. Generated HTML retains baseline/source context, disabled proposal controls before initialization and native review/quiz disclosures; full JavaScript-disabled browser testing was not performed.
- No workflow, dependency, schema, model, canonical YAML, reference assertion or workspace implementation changed. No implementation-mirroring prose tests were added.

## Production-build browser smoke review

Reviewed Astro preview at port 4327 under `/executable-engineering-lab/`.

| Check | Observation |
| --- | --- |
| Home and Learn | Nine cards/entries; each new Chapter 9 path opens correctly |
| Chapter 9→8→9 | Back/continuation reaches the correct lesson |
| Source view and return | Base-prefixed reference and Chapter 9 return resolve |
| Radius and threshold examples via Enter | Correct distinct coverage/threshold outcomes shown |
| Invalid reference | Result withheld and previous analysis removed |
| Restore/reset and direct refresh | Canonical 38.52% FAIL restored |
| Hypothetical Pages case and quiz via Enter | Native disclosures open with distinct execution/review explanations |
| 375px and 1280px | Document width equals viewport; no document overflow; radius control usable at mobile width |
| First Tab after reload | Skip-to-content receives focus |
| Browser errors | None observed during checked flows |

The early tab opening was blocked by the client; navigation in the bound tab subsequently succeeded. This was not a site model or build failure. Screenshot: `chapter-9-preview.png` in the workspace outputs directory.

## Evidence, limitations and release gate

Generated records must be inspected at the committed checkout for actual revision/dirty-state provenance. No invented CI run, artifact availability, branch protection, approval or security event is added. The repository exercise includes a written review template without new evidence schemas or persistence. It does not require a canonical edit or publication.

Local checks support M9-EDU-01, CI-01, EVD-01, UI-01 and REG-01 within these limits. Browser checks are smoke review, not comprehensive assistive-technology/cross-browser testing. Older complete exercises were not repeated; shared workspace/model code remains unchanged. V0 physical limitations, historical artifact expiry/sign-in and missing operational justification still apply.

M9-PUB-01 remains pending: review/merge, successful exact main-revision validation/Pages and public Home/Learn/Chapter 8→9/source-return/exercise/refresh checks. This PR does not publish Chapter 9. No later governance capabilities are implemented.
