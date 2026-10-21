# Executable Engineering Lab

**From engineering intent to working systems.**

A practical learning site built around a fictional Distributed Monitoring System (DMS). Chapters 1–7 connect engineering intent, executable experiments, qualified evidence and bounded task review. Milestone 7 was published on 2026-10-21; Home and Learn share the completed-chapter register. See [ROADMAP.md](ROADMAP.md) for release evidence and [MILESTONE_08.md](MILESTONE_08.md) for the proposed context/action-review lesson. No agent runtime is introduced.

## Reproduce locally

Use Node.js 22.12 or newer (Node 22 is used in CI) and npm. From a clean checkout:

```sh
npm ci
npm run validate
npm test
npm run evidence
npm run build
npm run dev
```

Open the Local URL printed by Astro, normally `http://localhost:4321/executable-engineering-lab/` (the port can change if occupied). `npm run preview` serves the production build at the same path. `npm run typecheck` checks Astro and TypeScript; `npm run check` runs type checking, all tests, source validation and the static build.

The reference scenario returns approximately **38.5% estimated geometric coverage**, so the proposed **50% requirement intentionally FAILS**. The test suite passes when it correctly observes that engineering outcome. Nothing substitutes a hardcoded status for the evaluator.

`npm run evidence` writes ignored `artifacts/reference-evidence.json`. It contains test/requirement/scenario/model IDs, model version, inputs, threshold, method, grid, result, margin, source commit, working-tree status, timestamp and execution context. Run it from a clean committed checkout for revision-bound local evidence. CI produces and retains this file as a workflow artifact for 30 days after successful checks. This is calculation evidence, not a certificate or operational assurance claim.

For reproducibility compare `definition` and `calculation`; `id` and `execution` contain run-dependent metadata. Local execution is labeled `local-cli`, CI `github-actions`. No saved CI result is presented on the site. The lab labels browser what-if runs as temporary; they neither edit YAML nor create retained verification artifacts.

## Engineering intent, definition and evidence

- **Intent:** `engineering/needs/NEED-001.yaml` expresses the operator’s need without prescribing an architecture.
- **Definition:** `engineering/requirements/REQ-COV-001.yaml` sets a measurable reference criterion, and `engineering/scenarios/SCN-001.yaml` provides inputs. The 50% threshold is a teaching assumption, not an operationally derived target. `engineering/manifest.yaml` registers the model and test plus explicit relationships.
- **Evidence:** An execution of `TEST-COV-001` evaluates the model output against the requirement. Its result is meaningful only with the specified inputs, assumptions and source revision.

The trace chain is `NEED-001 → REQ-COV-001 → SCN-001 → MODEL-COV-001 → TEST-COV-001 → RESULT-*`. The arrows are a teaching sequence; actual source fields distinguish need origin, reference scenario, implemented model and verification test relationships.

## Milestone 2 proposal exercise (repository increment)

Run `npm run proposals` after `npm run check` to analyze the separate unapproved threshold/radius fixtures in `exercises/proposals/`. Reports are written to ignored `artifacts/proposals/`, with exact definitions, calculated outcomes and source provenance. These are proposal analyses, explicitly not executions of TEST-COV-001 against changed inputs. Reference verification remains unchanged. See [the exercise](docs/02-proposal-exercise.md) for isolated edits, invalid-reference diagnostics, reproduction and limitations. The published Chapter 2 integrates this shared analysis into a temporary browser workspace. See [Milestone 2 verification](docs/MILESTONE_02_VERIFICATION.md) for release checks and limitations.

## Learning path

Start at Home → Learn → **From Engineering Intent to Evidence**, then **Engineering Information Models**. The chapter moves from the operator’s problem to a measurable criterion, a bounded model, an embedded experiment, evidence interpretation and four reasoning questions with revealable explanations. Its main narrative is approximately 850 words, excluding the interactive lab, exercise and quiz. Chapter 2 explains structure, relationship consistency and engineering meaning, then compares temporary threshold/radius proposals with the canonical baseline and tests a broken reference. It uses the same `analyzeProposal` function as the repository exercise and tests; reset/leaving restores the canonical definition. The proposed statement and numeric threshold stay consistent. Continue to Reference for source relationship roles and chosen-revision verification/analysis artifact instructions. See [Milestone 2 verification](docs/MILESTONE_02_VERIFICATION.md) for checks, publication status and limits.

## Interactive lab and traceability

Open `/executable-engineering-lab/lab/` from the home navigation. The lab imports `calculateCoverage` and `evaluateCoverage` from the same DOM-free engineering modules exercised by Vitest. Both its build-time fallback and browser updates use those functions. Input defaults and the threshold come from validated canonical YAML, serialized into the page at build time.

Numeric x/y/radius controls update the clipped SVG, accessible description, sampled percentage, threshold status and margin immediately. Reset restores all SCN-001 inputs. Record up to four independent one-sensor configurations in a temporary comparison table, including inputs, model-calculated coverage, margin and outcome against the same threshold. Reset keeps recorded rows; Clear comparison removes them. Reloading or leaving the page discards them. No results are stored or exported as verification evidence. Blank, fractional or out-of-range UI edits hide stale geometry/results until corrected; the model itself permits any finite center and nonnegative radius. The diagram uses the SVG coordinate convention (origin upper-left, y down), stated beside the graphic. Without JavaScript, controls stay disabled and the build-time reference result remains readable.

`/executable-engineering-lab/reference/` exposes canonical need, requirement, scenario, model, test, evaluator and manifest sources from this build, with stable ID anchors. A short typed relationship sequence connects the sources to retained CI evidence. This is a source view, not a graph engine.

## Numerical contract

`models/coverage/coverage.ts` is a pure, DOM-free TypeScript model. It samples the centers of a fixed 100×100 grid of equal-area cells over `[0,width] × [0,height]`. A cell is covered when its center’s distance from the sensor is **≤ radius**. Radius zero explicitly gives zero coverage even when positioned at a sample center. Outputs identify counts, percentage, method and resolution. The evaluator compares the **unrounded** percentage against the threshold; equality passes.

This is a discretized **area estimate**, not exact circle/rectangle intersection or detection probability. The tests independently compare a contained disk and a quarter disk against analytic geometry within 0.25 percentage points, and cover non-square geometry, boundary inclusion, invalid inputs, outside centers, full and zero coverage, repeatability and threshold boundaries. The tolerance applies to those fixtures, not a general error bound for all geometries.

Inputs must be finite, area dimensions positive and radius nonnegative. Sensor centers may lie outside the area. Zod is the single input contract used by source validation and model execution. Validation rejects unknown keys, duplicate YAML keys, duplicate IDs, unresolved or mismatched references, missing source files and model metadata drift. `npm run build` always validates canonical sources first.

The ideal circular footprint excludes occlusion, terrain, directionality, uncertainty, time, moving objects, faults and communication effects. Model units are generic. Even a PASS establishes only this model/scenario’s geometric criterion.

## Repository map

```text
engineering/       Canonical YAML need, requirement, scenario and manifest
schemas/           Zod contracts, independent of the presentation
models/coverage/   Pure model, evaluator and independent tests
scripts/           Validation, source loading and provenance-bearing evidence
site/src/          Home, Chapter 1, shared lab/comparison component and source views
.github/workflows/ PR validation/evidence and main-branch Pages deployment
```

The root-level Astro configuration uses `site/src` as its source directory. This small adaptation keeps one package/lockfile while preserving canonical engineering data outside the site.

## CI and publication

PRs and pushes to `main` run validation, types, tests, static build and evidence generation. PR evidence uses the actual PR head commit rather than labeling a synthetic merge revision as the source. CI should be inspected before merge.

Pages deployment runs on pushes to `main` after checks pass and can also be triggered manually. The repository is configured for **GitHub Actions** as its Pages source. After merge, inspect the deployment run, or run **Deploy to GitHub Pages** on `main` to retry. For a fork, configure **Settings → Pages → Build and deployment → Source: GitHub Actions** first. The workflow only deploys `main`. No merge is performed as part of preparing this PR. The foundation is published at [Executable Engineering Lab](https://and-gu.github.io/executable-engineering-lab/). New PR content appears there only after merge and a successful deployment; local/PR verification does not establish that it is already live. Configuration follows the [official Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Contributing

Use a short-lived branch and reviewable PR. Read [SITE_SPEC.md](SITE_SPEC.md), [DEMONSTRATOR_SPEC.md](DEMONSTRATOR_SPEC.md) and [MILESTONE_01.md](MILESTONE_01.md) as planning inputs. Preserve their scope boundaries. Change engineering definitions in canonical YAML and keep model computation outside the UI. Run `npm run check` and inspect `npm run evidence` before opening a PR. Do not commit generated evidence or build output. See [ROADMAP.md](ROADMAP.md) for remaining work and [docs/VERIFICATION.md](docs/VERIFICATION.md) for recorded browser checks and verification limits.
