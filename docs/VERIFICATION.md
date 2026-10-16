# First vertical slice — verification record

Checked 2026-10-16. This is a development smoke-check record, not retained model execution evidence or operational assurance.

## Automated checks

`npm run check` passes: strict source validation, Astro/TypeScript checks (zero errors/warnings/hints), 48 Vitest tests across three files, and four static Astro routes. Model tests use independent disk/quarter-disk geometry, boundary and invalid-input checks; source tests reject broken relationships and metadata drift.

`npm run evidence` generates revision-bound JSON. The reference calculation is 3852 / 10000 cell centers = 38.52%, FAIL against the 50% teaching threshold. CI retains the current head revision’s JSON, with source commit, clean/dirty status, run timestamp, inputs, method, resolution and context. Run-specific metadata is not part of deterministic numerical comparisons.

## Browser checks on the production build

Served `dist` through `npm run preview`, under `/executable-engineering-lab/`. Both the build-time result and browser updates import the same `calculateCoverage` and `evaluateCoverage` modules as Vitest.

| Action | Observed result |
| --- | --- |
| Initial (50,50), radius 35 | 38.52%, FAIL, 3852 covered cells |
| Radius 80 | 100.00%, PASS, 10000 covered cells |
| Radius zero | 0.00%, FAIL, zero covered cells |
| Move x/y to (0,0), radius 35 | 9.63%, FAIL, 963 covered cells |
| Reset after edits/invalid input | x=50, y=50, radius=35; 38.52%, FAIL |
| Blank radius | “Not evaluated”; stale geometry and numerical results hidden |
| Radius ArrowUp from reference | 36; 40.60%, FAIL; accessible SVG description updates |
| Open TEST-COV-001 source link and refresh | Correct source section remains available at the base-prefixed deep link |
| 375px-wide viewport | Single-column layout; document width equals viewport width, no page overflow |
| 1280px-wide viewport | Diagram and labeled controls sit alongside one another |

The circle is clipped to the rectangular area, and x/y position is represented both graphically and in its accessible description. PASS/FAIL and margin are textual; no color-only status. Controls support keyboard arrows and typed numbers. These are manual browser smoke checks, not automated end-to-end tests or a full assistive-technology audit.

## Deployment and remaining work

GitHub Pages is configured for Actions (`build_type: workflow`). Deployment runs only from main after `npm run check`, on push or manual dispatch. The PR remains unmerged, so a successful public deployment is **not yet verified**. After review/merge, inspect the Pages deployment and smoke-test its public root, lab, reference anchors and assets. Intended URL: https://and-gu.github.io/executable-engineering-lab/.

Chapter 1 is visibly marked as planned; full narrative, exercise and quiz remain. Saved CI evidence is downloadable through workflow artifacts, not displayed as a fresh result on the website. Broader keyboard/screen-reader review and automated browser regression tests remain possible follow-ups.

The model is a deterministic 100×100 cell-center area estimate for one ideal circular sensor footprint in generic model units. It omits terrain, occlusion, directional sensitivity, uncertainty, time, moving objects, faults and communication effects. The smooth SVG footprint is illustrative geometry; it does not turn the sampled estimate into an exact intersection calculation. A PASS does not establish operational detection performance. No later-milestone behavior is implemented.
