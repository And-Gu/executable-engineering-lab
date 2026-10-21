# Milestone 06 — Verification and Engineering Evidence

**Status:** Plan accepted through PR #13; Chapter 6 ready for review, publication pending · **Version:** 0.1 · **Date:** 2026-10-21

## Objective and baseline

Teach a practicing engineer to judge which claim a verification activity supports, inspect what actually executed, and distinguish software checks, modeled requirement outcomes and operational suitability.

SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md remain authoritative. Build on published Chapter 5 at `9df4fc5774151d266a5ac115dadb506515484d25`. Keep the V0 single-sensor calculation, fixed grid, canonical YAML, stable IDs, model version and reference-test assertions unchanged. Chapter numbering does not authorize V1, agents or an assurance platform.

Earlier chapters introduce evidence and repeatability. Chapter 6 should consolidate them into a concrete review: can a reviewer explain what a green workflow, an expected geometric FAIL and a passing browser trial each establish? Reuse existing executions and artifacts; do not introduce a new verification engine.

## Chapter contract

**Title:** Verification and Engineering Evidence.

**Question:** “The checks are green. Has the engineering requirement been satisfied?”

Target 800–1,200 words of main prose, excluding experiment and quiz. Begin with a reviewer facing apparently conflicting results: the software suite passes while the canonical coverage criterion fails.

1. State the claim under review: the geometric criterion for the exact reference configuration under explicit V0 assumptions.
2. Distinguish input/schema/reference checks, independent model checks, the registered reference assertion, requirement evaluation and operational justification. Avoid presenting these as interchangeable levels of approval.
3. Inspect TEST-COV-001: it expects the canonical configuration to fail the 50% criterion. A successful assertion reports the expected finding correctly; it does not turn that finding into engineering PASS.
4. Compare a temporary passing trial with the unchanged canonical reference. Identify what was recalculated and which definitions the registered test actually uses.
5. Inspect real execution provenance and the generation path for retained records. Separate exact evaluated inputs/calculation from source revision, dirty status, timestamp and context.
6. Explain that repeatability and independent numerical checks do not establish fidelity to physical sensors or validate an assumed operational threshold.
7. End with a reasoning quiz and transition to bounded assistance under review, without adding agents or claiming autonomous engineering authority.

Use local, concrete meanings rather than unsupported claims of standards conformity. Any normative terminology or external verification/validation standard introduced during writing requires an authoritative source and a precise distinction from this teaching example.

## Browser exercise: reconcile three observations

Reuse CoverageLab or the existing proposal workspace, choosing the smaller coherent integration. Do not display a hand-maintained green test indicator or imply the browser ran Vitest.

- Start at canonical SCN-001; inspect the geometric outcome and threshold from the shared calculation/evaluator.
- Make a valid single-sensor candidate pass, for example a larger assumed radius, while keeping the criterion fixed. Ask what the result establishes and what remains outside the model.
- Follow the actual source for TEST-COV-001. Ask whether changing browser controls changed the YAML or the test's input. The answer must be explicit: the browser trial does not execute or replace the registered canonical test.
- Reset. Predict why canonical reference evaluation and candidate evaluation can differ without contradicting a successful software suite.
- Challenge the unobstructed-circle assumption in a short review question. Do not add an occlusion model or manufacture corrected detection performance.

A native disclosure can compare the reader's explanation with the documented interpretation. No numerical evidence score, automated acceptance decision, dashboard, artifact importer or new persistence is needed. Reuse source-driven labels and calculated outcomes, including invalid-input withholding.

## Repository exercise: inspect execution, not just status

From an identified checkout, install dependencies and run the existing validation/test/build path. Provide a focused command for the registered reference test, such as `npm test -- models/coverage/verification.test.ts`, and explain its assertions. Preserve the expected engineering FAIL; never teach editing expectations to obtain a passing requirement.

Then run `npm run evidence` and inspect `artifacts/reference-evidence.json`. Explain the current implementation accurately: this command validates/loads sources and calls the calculation/evaluator to generate a reference evaluation record. **It does not itself invoke Vitest or execute the test assertions.** The record's test ID associates the registered reference context; it is not, by itself, proof that the named test executed. Inspect workflow steps/logs to establish test execution and their ordering separately. Do not silently expand the generator's meaning or conflate calculation evidence with a test-run report.

Guide review of a real record's evaluated inputs, threshold, model identity/version, method/grid, assumptions, outcome, source commit, dirty status, timestamp and context. Inspect the exact source for that revision. Existing records need not contain the full YAML text; do not claim fields exist without checking the record. Explain where source inspection supplies the surrounding definitions.

Use `npm run proposals` only to contrast the separate unapproved analysis records, which explicitly do not claim TEST-COV-001 executed proposed inputs. Preserve all existing distinctions. Browser rows, console calculations, baseline records, proposal records and test logs have different meanings; no single PASS label substitutes for their inspection.

Retained CI artifacts expire after 30 days and may require sign-in. Provide local reproduction commands as a durable path. Do not link a mutable latest result as if it were evidence for an older revision. If the lesson loads no saved artifact, state that clearly; describe actual generation/review instructions rather than synthesizing a historical execution for display.

## Engineering integrity and boundaries

- Keep intent, definition and evidence separate. A teaching threshold is not operationally justified merely because it is schema-valid or tested.
- Shared calculation code avoids divergent implementations; independent known geometries, invalid inputs and evaluator boundaries provide meaningful checks on it. Passing those checks is not proof of universal numerical accuracy or physical model validity.
- Keep fixed resolution and documented approximation limits. Do not assert an unestablished worst-case error bound, detection probability, reliability or calibration.
- Preserve canonical data, source links, stable identifiers, model version, test assertions and existing artifact meanings. Any discovered misleading wording should be corrected narrowly with explicit documentation; do not invent test execution metadata.
- Retain static Astro/GitHub Pages, palette, accessible labels/text outcomes, responsive layout and honest no-JavaScript baseline/fallback.
- No multi-sensor behavior, moving objects, uncertainty model, general assurance engine, optimization, graph infrastructure, agents, Gemara/OSCAL, backend, authentication or new runtime service.

## Acceptance gates

These are planned gates, not completed verification claims.

| Gate | Observable outcome | Required evidence |
| --- | --- | --- |
| M6-EDU-01 | Reader reconciles successful assertions, expected geometric FAIL and a passing candidate | Complete lesson, review exercise and reasoning quiz |
| M6-EXP-01 | Browser exercise reuses the existing model and distinguishes temporary candidate from canonical test input | Import/data-flow review and browser trials/reset/invalid-input checks |
| M6-EXE-01 | Lesson accurately identifies what validation, test, evidence and proposal commands execute | Source/workflow inspection, actual focused test run and generated-record review |
| M6-EVD-01 | Exact evaluated inputs and provenance are inspected without fabricated test-execution claims | Real clean-checkout output/log inspection; explicit absent-fields and artifact limitations |
| M6-LIM-01 | Numerical verification, model assumptions and operational suitability remain distinct | Editorial/source review; no unsupported physical or standards claims |
| M6-UI-01 | Exercise, source navigation and quiz work with keyboard and narrow screens | Manual responsive/keyboard smoke review and generated no-JavaScript fallback inspection |
| M6-REG-01 | Chapters 1–5 and reference/proposal semantics remain intact | Validation, tests, type checks, build, evidence/proposal generation and regression navigation review |
| M6-PUB-01 | Complete reviewed lesson is published at the Pages base path | Exact main-revision CI/deployment and public refresh/navigation/experiment checks |

Record observations and audit limitations separately from generated engineering evidence. Smoke checks must not be described as a comprehensive screen-reader or cross-browser audit.

## Reviewable delivery sequence

1. **This planning PR:** record Milestone 5 as published and propose the Chapter 6 review exercise; no runtime changes or empty lesson.
2. **Educational vertical slice:** write Chapter 6, integrate the existing exercise, document focused reproduction/record inspection and connect navigation. Add executable helpers only if a concrete gap requires them; do not build a verification platform.
3. **Release after review:** merge, inspect validation/deployment for the exact main revision, smoke-test the public path and record the release observations.

Completion means an engineer can state precisely what the evidence supports and what remains unjustified. It does not mean the demonstrator becomes an operationally verified monitoring system.
