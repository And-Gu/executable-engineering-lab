# Executable Engineering Lab

**From engineering intent to working systems.**

A practical learning site built around a fictional Distributed Monitoring System (DMS). All twelve chapters are published, from engineering intent through executable experiments and qualified evidence to an integrated engineering handover. The learning path was completed on 2026-10-23; Home and Learn share the completed-chapter register. See [ROADMAP.md](ROADMAP.md) for release evidence and [Milestone 12 verification](docs/MILESTONE_12_VERIFICATION.md) for the final capstone checks and limits. The demonstrator remains V0: multiple sensors, dynamics, actual agents and governance integrations are separate, unimplemented future capabilities.

Created by **Anders Gustafsson** · [Connect on LinkedIn](https://www.linkedin.com/in/anders-gustafsson-359438/).

## Reproduce locally

Use the Node version pinned in `.nvmrc` (currently 22.23.3) and npm 10. Astro's installed dependency requires at least Node 22.22; the earlier 22.12 minimum was insufficient. Local checks and CI use the same preflight. From the repository root:

```sh
npm ci
npm run preflight
npm run validate
npm test
npm run evidence
npm run build
npm run dev
```

Open the Local URL printed by Astro, normally `http://localhost:4321/executable-engineering-lab/` (the port can change if occupied). `npm run preview` serves the production build at the same path. `npm run typecheck` checks Astro and TypeScript. `npm run check -- --preview` runs the complete local verification with explicit working-tree status; `npm run check -- --release` requires a clean committed checkout. See the delivery commands below when a delivery owner is active.

The reference scenario returns approximately **38.5% estimated geometric coverage**, so the proposed **50% requirement intentionally FAILS**. The test suite passes when it correctly observes that engineering outcome. Nothing substitutes a hardcoded status for the evaluator.

Standalone `npm run evidence` writes ignored `artifacts/reference-evidence.json`. Managed `npm run check` executions write it inside their own `artifacts/runs/<run-id>/`, together with proposal analyses, test results and phase timings; no run reuses another run's directory. It contains test/requirement/scenario/model IDs, model version, inputs, threshold, method, grid, result, margin, source commit, working-tree status, timestamp and execution context. Run from a clean committed checkout for revision-bound local evidence. CI retains this file as a workflow artifact for 30 days after successful checks. This is calculation evidence, not a certificate or operational assurance claim.

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

PRs run the reusable validation workflow: environment/source-revision preflight, type checking, validated build, artifact-revision check, all tooling and engineering tests, and reference/proposal evidence. PR evidence uses the actual PR head commit rather than labeling a synthetic merge revision as the source. CI should be inspected before merge.

Pages deployment runs on pushes to `main` and can also be triggered manually. It calls that same validation workflow once and deploys its verified `dist/` artifact; a second parallel main-branch workflow no longer repeats the full suite/build. The publication job depends on successful validation. A final job checks the public build revision before and after HTTP checks of Home, Learn, Lab, Reference and the Chapter 1 preview. These checks verify identity and returned pages, not browser interactions or visual accessibility. Keep the relevant browser review for UI changes.

The repository is configured for **GitHub Actions** as its Pages source. After an authorized merge, inspect all deployment jobs, including hosted verification. For a fork, configure **Settings → Pages → Build and deployment → Source: GitHub Actions** first. Only `main` deploys. The foundation is published at [Executable Engineering Lab](https://and-gu.github.io/executable-engineering-lab/); local/PR checks do not establish a new publication. The shared workflow follows GitHub's [reusable-workflow](https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations) and [Pages artifact/deployment](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) contracts.

### Delivery commands and ownership

The delivery pattern is adapted from [Document-as-Code Lab's verified delivery work](https://github.com/And-Gu/document-as-code-lab/issues/37). Commands and source rules are maintained here; execution evidence stays under ignored `artifacts/`. No new service, browser-test framework or teaching material is introduced.

Read `npm run delivery -- report` first. If no delivery is active:

```sh
npm run delivery -- start --owner release-chat
export DELIVERY_ACTOR=release-chat
npm run delivery -- assign --task local-preview --worker release-chat --preview \
  --check typecheck --check build --check unit --check evidence --check proposals
npm run delivery -- test --task local-preview
```

One owner edits sources, changes checkout/build state and performs authorized Git/publication actions. Assign independent checks to named workers with repeated `--check` flags. Build and type checking write shared files and belong to the owner; `unit`, `evidence`, `proposals` and `hosted` can be assigned separately. Identical check/revision/stage/target assignments cannot overlap or run again silently. `delivery retry --task <name> --reason "..."` preserves the earlier attempt. `delivery handoff --owner <next-owner> --reason "..."` transfers ownership after active work ends. This coordinates cooperating processes, not arbitrary Git commands.

After an authorized commit, assign a new task at that revision without `--preview`. Release mode rejects dirty or unexpected sources before expensive work, builds once and checks the manifest before the full unit suite. `dist/build-information.json` identifies clean releases; working-tree builds contain a null commit. CI always uses release mode. A moved/dirty checkout fails the final guard. Local checks outside an active delivery default to preview; supply the mode explicitly when recording evidence.

After authorized publication and checkout of its revision:

```sh
npm run delivery -- assign --task live --worker release-chat --check hosted \
  --target https://and-gu.github.io/executable-engineering-lab/
npm run delivery -- test --task live
```

The Pages workflow already owns the normal hosted check. Inspect and reuse its evidence instead of assigning a duplicate manual run without a failure or changed input to investigate. Outside a managed delivery, the same check is available with `EXPECTED_REVISION=<sha> npm run verify:hosted -- --target=<public-base-url>`; HTTP failures and revision mismatches fail visibly.

`npm run ci:impact -- origin/main` maps engineering sources to model/site/evidence consumers, site changes to site consumers, and archived Markdown to editorial isolation. Unknown files expand to all consumers. The map is currently **advisory**: every mandatory gate remains enabled until later measurements justify narrower scope. The immediate CI saving is removal of the duplicate main-branch suite/build; elapsed savings are not yet measured.

### Evidence and phase timings

Every managed verification creates a new `artifacts/runs/<timestamp-id>/`; `TEST_RUN_ID` may name it but an existing directory is rejected. `run.json` records the checkout, preview/release status, outcome and each phase's start/end/duration. Vitest writes `tests.json` in that run. Reference/proposal records use the same run's `EVIDENCE_DIR`; standalone commands retain their historical paths and should have one writer. Builds use an exclusive `artifacts/build.lock`; inspect its PID before removing a lock after a crash. The build directory and Astro cache still have one writer.

The owner record is `artifacts/delivery.json`. `DELIVERY_RECORD` may specify an absolute shared path for cooperating checkouts. Short writes are atomic and locked; this does not coordinate separate machines. A new delivery archives the previous explicitly finished record. Run `delivery finish` when the delivery is complete; it is not a declaration of publication success.

Time extra commands with `delivery run --phase <name> -- <command> [args]` (repository-root working directory). Use `delivery begin/end --phase <name> --at <ISO timestamp>` for known review/CI/job boundaries and `--evidence <URL>` on begin. Mark observed milestones with `delivery mark --phase requested|ready|authorized|committed|merged|published --at <ISO timestamp>`. Missing times stay unknown; record creation does not imply request time or permission. Reports preserve overlapping intervals without summing them. Keep Actions queue/job timestamps distinct from command execution, and include rework reasons in the relevant PR/retrospective observation.

Canonical engineering authority remains `engineering/` → `schemas/` and `models/` → scripts and Astro views → engineering tests/evidence. `site/src/data/chapters.ts` owns completed-lesson navigation. Editorial sources retain the separate status/approval registers linked in AGENTS.md. A change to the delivery environment grants no editorial or publication approval.

## Contributing

Use a short-lived branch and reviewable PR. Read [SITE_SPEC.md](SITE_SPEC.md), [DEMONSTRATOR_SPEC.md](DEMONSTRATOR_SPEC.md) and [MILESTONE_01.md](MILESTONE_01.md) as planning inputs. Preserve their scope boundaries. Change engineering definitions in canonical YAML and keep model computation outside the UI. Run `npm run check` and inspect `npm run evidence` before opening a PR. Do not commit generated evidence or build output. See [ROADMAP.md](ROADMAP.md) for remaining work and [docs/VERIFICATION.md](docs/VERIFICATION.md) for recorded browser checks and verification limits.

## V3 technical visualization reference (proposal)

The open [V3 master issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) defines the editorial and planning boundary for the owner-approved **fourteen-chapter V3** curriculum (editorial plan; no site publication). The [Engineering Visualization: From Models to Understanding](docs/v3/ENGINEERING-VISUALIZATION.md) guide is proposed supporting material for V3 Chapters 03, 04 and 06, including the V03 interactive knowledge-graph specification, bounded executable behavior and engineering data views. It is **not** an implemented visualization, an approved reader-facing manuscript or an authorization to begin implementation. Published V0/v2 routes and definitions remain unchanged.

## V2 transition proposal

A Stage 0–1 draft reframes Home/Learn around **Engineering at the Speed of AI** while preserving the published twelve-lesson course and V0. The revised curriculum and multidisciplinary/recorded-agent demonstrations are planned, not implemented. Start with the [foundation overview](docs/v2/FOUNDATION-SPEC.md), [adoption status](docs/v2/ADOPTION-STATUS.md), [tutorial proposal](project/TUTORIAL-SPEC.md) and [staged delivery plan](implementation/IMPLEMENTATION-PLAN.md). This branch is not a publication or acceptance record.

## Unpublished editorial research and agent source index

Research, source assessments and quotation candidates for the v3 curriculum are stored under [`research/`](research/). See the [chapter-by-chapter index](research/INDEX.md) and [archival / non-publication procedure](research/README.md). Agents drafting educational text must read the index before selecting source material. The research is visible in this public GitHub repository but is excluded from the Astro website unless separately approved. The build runs `npm run research:check` as an additional isolation safeguard.

## V3 editorial curriculum — approved fourteen chapters (16 November 2026)

The authoritative new course is [the owner-approved fourteen-chapter plan](project/CURRICULUM-MAP.md), with [a 13-source→14 migration map](project/v3/CHAPTER-MIGRATION-13-TO-14-2026-11-16.md) and a [new Chapter 09 interface/integration brief](project/v3/CHAPTER-09-INTEGRATION-BRIEF-2026-11-16.md). The [independent review](project/v3/reviews/INDEPENDENT-FULL-COURSE-REVIEW-2026-11-16.md) motivates the structural change. **Thirteen complete original manuscripts remain archived unchanged; a separate [full set of fourteen revised reader-facing drafts](project/v3/manuscripts/revised/INDEX.md) is now complete but remains unapproved and unpublished.** The [T1 illustrative source/trace/decision package](project/v3/case-study/README.md) supports the revised texts, with explicit calculation and review limitations. The [worked-case P0 issue](https://github.com/And-Gu/executable-engineering-lab/issues/45) tracks examples to make the course inspectable. Legacy pages and V2 navigation are preserved.
