# Executable Engineering Lab

**From engineering intent to working systems.**

A practical learning site built around a fictional Distributed Monitoring System (DMS). This first PR establishes the V0 engineering core and a minimal static Astro foundation. It does **not** complete Milestone 1: the interactive lab and final Chapter 1 are subsequent increments.

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

For reproducibility compare `definition` and `calculation`; `id` and `execution` contain run-dependent metadata. Local execution is labeled `local-cli`, CI `github-actions`. No saved CI result or browser what-if run is presented on the landing page.

## Engineering intent, definition and evidence

- **Intent:** `engineering/needs/NEED-001.yaml` expresses the operator’s need without prescribing an architecture.
- **Definition:** `engineering/requirements/REQ-COV-001.yaml` sets a measurable reference criterion, and `engineering/scenarios/SCN-001.yaml` provides inputs. The 50% threshold is a teaching assumption, not an operationally derived target. `engineering/manifest.yaml` registers the model and test plus explicit relationships.
- **Evidence:** An execution of `TEST-COV-001` evaluates the model output against the requirement. Its result is meaningful only with the specified inputs, assumptions and source revision.

The trace chain is `NEED-001 → REQ-COV-001 → SCN-001 → MODEL-COV-001 → TEST-COV-001 → RESULT-*`. The arrows are a teaching sequence; actual source fields distinguish need origin, reference scenario, implemented model and verification test relationships.

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
site/src/          Minimal Astro landing page and clearly marked chapter placeholder
.github/workflows/ PR validation/evidence and manual Pages deployment
```

The root-level Astro configuration uses `site/src` as its source directory. This small adaptation keeps one package/lockfile while preserving canonical engineering data outside the site.

## CI and publication

PRs and pushes to `main` run validation, types, tests, static build and evidence generation. PR evidence uses the actual PR head commit rather than labeling a synthetic merge revision as the source. CI should be inspected before merge.

Pages deployment is prepared but **manual** in this foundation PR. After merge, set repository **Settings → Pages → Build and deployment → Source: GitHub Actions**, then run **Deploy foundation to GitHub Pages** on `main`. The workflow only deploys `main`. The intended URL is `https://and-gu.github.io/executable-engineering-lab/`; it is not a claim that the site is already published. Configuration follows the [official Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Contributing

Use a short-lived branch and reviewable PR. Read [SITE_SPEC.md](SITE_SPEC.md), [DEMONSTRATOR_SPEC.md](DEMONSTRATOR_SPEC.md) and [MILESTONE_01.md](MILESTONE_01.md) as planning inputs. Preserve their scope boundaries. Change engineering definitions in canonical YAML and keep model computation outside the UI. Run `npm run check` and inspect `npm run evidence` before opening a PR. Do not commit generated evidence or build output. See [ROADMAP.md](ROADMAP.md) for remaining work.
