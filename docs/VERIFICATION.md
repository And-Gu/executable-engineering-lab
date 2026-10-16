# Milestone 1 — learning-completion verification

Checked 2026-10-16. This is a development and editorial review record, distinct from retained model-execution JSON and operational assurance.

## Scope and editorial review

The learning increment preserves engineering/, models/, schemas/, root scripts/ and .github/workflows/. It adds no dependencies or new engineering calculation. The shared CoverageLab component is embedded in Chapter 1 and used by the standalone lab. Both current results and comparison rows call the existing calculateCoverage/evaluateCoverage modules.

The chapter’s main narrative is approximately 850 words, excluding the exercise, interactive component and quiz. It starts with an operator’s question, introduces stable source IDs as the artifacts become relevant, explains the assumed threshold and model limits, separates software-test success from reference requirement failure, and ends with four reasoning questions and a transition to connected engineering definitions. Reference inputs, threshold and displayed reference percentage are imported/calculated from canonical sources rather than copied into prose as handwritten results.

## Automated checks

`npm run check` passes: source validation, Astro/TypeScript checks (zero errors/warnings/hints), 48 Vitest tests across three files, and a four-route static build. Existing tests cover independent disk/quarter-disk geometry, invalid inputs, boundary behavior, threshold equality, deterministic reference verification and source relationships.

An offline inspection of the built HTML resolved all 62 local navigation/asset/fragment targets under `/executable-engineering-lab/`, and found no duplicate IDs within pages. The rendered main-prose sections were counted independently to confirm the 800–1,200-word target.

`npm run evidence` reproduces the reference estimate: 3852 / 10000 cell centers = 38.52%, FAIL against 50%. Evidence includes the actual source revision, working-tree status and execution metadata. CI retains the chosen revision’s JSON for 30 days. Numerical reproducibility compares definition/calculation fields, not timestamps or execution IDs.

## Browser checks on the production build

Served dist through `npm run preview` under the Pages base path. Checks were performed in the in-app browser; these are recorded smoke checks rather than an automated end-to-end suite.

| Check | Observed result |
| --- | --- |
| Home → Chapter 1 → Experiment | Chapter opens and section anchor reaches the embedded lab |
| Record reference at (50,50), radius 35 | Trial 1: 38.52%, −11.48 pp, FAIL |
| Set radius 45, retain center | Trial 2: 63.76%, +13.76 pp, PASS |
| Keep radius 45, move to (0,0) | Trial 3: 15.94%, −34.06 pp, FAIL |
| Same radius at (40,50) | Trial 4: 62.34%, +12.34 pp, PASS |
| Four-row bound | Record disables at four rows; limit is explained in status text |
| Reset | Restores (50,50), radius 35, 38.52% FAIL; four recorded rows remain unchanged |
| Clear via keyboard Enter | Removes all rows; returns focus to Sensor x |
| Blank radius | Current result becomes “Not evaluated”; recording disables and stale geometry is hidden |
| Reset then radius ArrowUp | Radius 36; 40.60% FAIL; text and SVG description update |
| Quiz disclosure via Enter | Explanation becomes visible using native details/summary |
| Table keyboard flow | Region is focusable; Tab continues to Clear comparison |
| Navigate away and return | Comparison rows disappear; no browser persistence is implied |
| Standalone lab | Same reference and radius-45 results as embedded lab |
| Requirement source link + deep-link refresh | Correct source section remains available under Pages base path |
| Source → evidence interpretation return link | Returns to Chapter 1 #evidence |
| 375px-wide chapter/lab | Document width remains 375px; single-column controls and wrapped chapter navigation |
| Narrow comparison table | Table scrolls within its 343px region (454px content); keyboard ArrowRight changes horizontal scroll |
| 1280px-wide chapter | Readable prose width, visible section navigation and two-column lab |
| First keyboard Tab after reload | Skip to content receives focus |

The layout preserves the approved color palette. Status is textual and does not rely on color. Tables have a caption and row/column headers, and the overflow region has an accessible label and keyboard focus. Native disclosures require no quiz-specific script. Browser what-if labeling remains adjacent to controls and comparison rows.

## Publication and unresolved limitations

The foundation was successfully deployed previously. This learning-completion PR intentionally remains unmerged for review. The complete Milestone 1 published Definition of Done is therefore pending review/merge, automatic Pages deployment, and a public smoke check of Home → Learn → experiment → sources → evidence interpretation, including direct chapter refresh and script/asset loading. Expected public root: https://and-gu.github.io/executable-engineering-lab/.

Retained evidence is downloaded from the selected validation run; the site does not fetch or claim a live latest result. GitHub may require sign-in for artifact downloads, and artifacts expire after 30 days. Local reproduction remains available. Temporary comparison rows are neither persisted nor exported; changing them does not change the reference scenario or its retained CI outcome.

This review is not a full screen-reader audit or cross-browser compatibility study. Manual browser checks are not a regression test suite. Without JavaScript the reference result remains readable, but configuration changes/comparison need JavaScript.

The model remains an idealized fixed-resolution area estimate with discretization error and generic units. It excludes terrain, occlusion, directional sensitivity, uncertainty, time, moving objects, faults and communications. It has no cost or optimization criterion. Neither a geometric PASS nor a successful software test suite establishes physical sensor performance, operational suitability or optimality. No later-milestone functionality is included.
