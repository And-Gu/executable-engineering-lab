# Milestone 04 — Executable Engineering Models

**Status:** Plan accepted through PR #9; Chapter 4 ready for review, publication pending · **Version:** 0.1 · **Date:** 2026-10-20

## Objective and baseline

Teach a practicing engineer to explain how a mathematical definition becomes a deterministic executable calculation, distinguish calculation from requirement evaluation, and reproduce a result with its numerical method and limitations intact.

Use SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md as authoritative inputs. Build on published Chapter 3 at `4430d28b37612f3c64b9c0729fedba13aff24952`. Chapter numbering does not introduce a new demonstrator capability: this increment retains V0, one fixed ideal circular sensor and the existing fixed 100×100 cell-center estimate. Multiple sensors and dynamics remain later work.

Chapter 3 explains connections and evidence applicability. Chapter 4 should open the calculation itself: what is executed, which inputs determine it, and why reproducibility does not establish physical validity. This plan proposes educational integration, not a replacement algorithm or general simulation framework.

## Chapter contract

**Title:** Executable Engineering Models.

**Question:** “What exactly did the model execute, and can another engineer reproduce it?”

Target 800–1,200 words of main prose, excluding experiment and quiz. Assume engineering literacy; introduce TypeScript only where reading the actual function helps explain the model.

1. Start with the monitoring decision and distinguish geometric coverage from real sensing performance.
2. Connect the continuous circle/rectangle area definition to its discrete approximation: equally sized cells, cell centers, inclusive disk boundary and covered-cell count.
3. Follow the existing pure calculation from validated dimensions/position/radius to method, grid, counts and estimated percentage. Use actual source links and output fields rather than a second executable formula.
4. Separate the evaluator: the coverage calculation does not choose or justify a threshold. Explain equality passing and evaluation using the unrounded result.
5. Explore position and radius in the existing lab, inspect counts, restore inputs and compare repeatability.
6. Reproduce the canonical run using the repository commands and inspect revision-bound evidence. Explain what changes between executions even when numerical results repeat.
7. End with reasoning questions and a transition to experimentation and trade-offs, without adding architecture comparison or optimization.

Quiz should test why small parameter changes can leave a finite-grid result unchanged; why identical input/method yields repeatable output; why displayed rounding must not drive PASS/FAIL; and why a reproducible numerical calculation can remain unsuitable for an operational decision.

## Experiment and calculation inspection

Reuse the current interactive coverage lab and pure `calculateCoverage`/`evaluateCoverage` modules. Add a compact, readable calculation breakdown only where the existing view does not already expose it: actual covered cells, total cells, grid dimensions, method, estimated coverage and criterion. Derive every value from the same result used by the visualization and evaluator. Keep UI and calculation independent.

Use a short predict–observe–explain sequence:

- Reset to canonical SCN-001. Inspect validated inputs and the model-produced counts, estimate and evaluation. Identify the assumptions behind the result.
- Change radius in small increments. The sample count may change in steps or remain unchanged for some edits; do not promise a particular plateau or hardcode its outcome. Explain that a smooth ideal footprint and a discrete area estimate are different representations.
- Move the sensor toward a boundary while retaining its radius. Explain why only footprint inside the rectangle contributes. Do not substitute full-circle area for clipped coverage.
- Restore exactly the same inputs and observe the same deterministic result. Reset must restore canonical YAML values rather than a separately maintained default.
- Keep the geometry fixed and use the existing Chapter 2/3 proposal exercise to revisit a criterion change. Link that exercise rather than adding another threshold control or proposal implementation.

No grid-resolution control is proposed. The fixed grid and model version remain unchanged. Do not duplicate sample inclusion logic for a decorative grid overlay, introduce an analytical coverage implementation in the browser, or imply a smaller display increment increases model fidelity.

The existing independent geometric tests can explain useful checks for known configurations. They are not a universal error bound or proof of physical validity. Do not assert a worst-case discretization tolerance that has not been established. Detailed mathematics belongs in reference material if needed.

## Repository reproduction and evidence

Document an identified checkout, `npm ci`, `npm run check` and `npm run evidence`; use `npm run proposals` only for the existing separate unapproved proposal path. Preserve the reference test and its expected engineering FAIL. Do not teach changing an assertion merely to obtain green tests.

Explain the distinction between deterministic calculation fields and execution metadata. Exact inputs, criterion, method, resolution and model version support interpreting the number; source revision, dirty status, timestamp and context describe the execution. Repeating an execution can change metadata without changing the calculation. A dirty run must remain labeled honestly.

Browser calculations remain temporary, not retained CI verification artifacts. No new result export, artifact importer, persistence or automatic evidence approval is needed. Link actual artifact/reproduction instructions, including retention and sign-in limitations; do not invent a saved result for the lesson.

## Boundaries

- Canonical YAML, stable IDs, Zod contracts, model version and the reference test retain their current meanings.
- Preserve the pure TypeScript calculation/evaluator and source path validation. Avoid a parallel formula, hardcoded output or generalized simulation API.
- Retain static Astro/GitHub Pages, approved palette, responsive controls, text outcomes and keyboard operation. Any calculation breakdown must remain readable without JavaScript using the canonical build-time result; disabled controls/fallback must be honest.
- Connect Chapter 3→4, Learn, Home and relevant source return links only with a complete working lesson.
- Exclude multi-sensor/union coverage, time/moving objects, probability, architecture search, optimization, agents, graph infrastructure, Gemara/OSCAL, backend and new external runtime services.

## Acceptance gates

These are planned checks, not implementation or verification claims.

| Gate | Observable outcome | Required evidence |
| --- | --- | --- |
| M4-EDU-01 | Reader explains continuous intent, discrete calculation, evaluation and physical limitations | Complete lesson, experiment and reasoning quiz review |
| M4-MOD-01 | UI breakdown and visualization use the same coverage/evaluator output | Import/data-flow inspection, existing tests and focused tests only for any new calculation-data behavior |
| M4-EXP-01 | Counts, method and estimate update with valid edits and restore with canonical reset | Browser trials and meaningful model regressions; no hardcoded trial outcome |
| M4-REP-01 | Identical inputs/method repeat numerical output while metadata is treated separately | Existing deterministic tests and inspection of two actual evidence executions |
| M4-VAL-01 | Invalid input is rejected without a stale valid conclusion | Existing negative tests and relevant browser smoke checks |
| M4-EVD-01 | Browser results, reference evidence and unapproved proposal analysis remain distinct | Labels, generated records and reproduction instructions reviewed |
| M4-UI-01 | Lesson, controls, numerical breakdown and quiz are usable with keyboard and narrow screens | Manual responsive/keyboard review and generated no-JavaScript fallback inspection |
| M4-REG-01 | Chapters 1–3, source links, baseline verification and proposal path remain intact | Validation, tests, type checks, build, evidence/proposal generation and regression smoke checks |
| M4-PUB-01 | Reviewed complete lesson is published at the repository base path | Main-revision deployment/validation plus public refresh, navigation and experiment checks |

Record actual observations and remaining limits. Smoke review must not be described as comprehensive screen-reader/cross-browser testing. A green software test or geometric PASS does not establish operational suitability.

## Reviewable delivery sequence

1. **This planning PR:** record the Chapter 3 release and propose this scope; no runtime changes or empty Chapter 4.
2. **Educational vertical slice:** inspect existing lab outputs, add only missing calculation inspection, write Chapter 4 and its experiment/quiz, connect navigation and document verification. Reuse existing functions and components; split preparation only if a concrete refactor is necessary for reviewability.
3. **Release after review:** merge, inspect validation/deployment for the exact main revision, and smoke-test the published learning path and exercise. Record release evidence separately from pre-publication checks.

This proposal does not authorize later demonstrator capabilities. Its completion criterion is an engineer who can explain and reproduce the calculation, not a larger simulator.
