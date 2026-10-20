# Repository exercise — change the definition, then re-evaluate

This is the first Milestone 2 implementation increment, preceding the browser workspace and Chapter 2. It uses the unchanged V0 single-sensor model. A proposal is an **unapproved teaching input**, not an approved engineering requirement or a retained reference verification result.

## Establish a reproducible baseline

From a clean checkout at the revision you intend to inspect:

```sh
git rev-parse HEAD
npm ci
npm run check
npm run evidence
npm run proposals
```

`npm run check` validates canonical sources and proposal fixtures, runs all model/reference/proposal tests, type-checks and builds the existing site. `npm run evidence` still records the unchanged reference requirement and scenario. The reference test deliberately expects the 50% teaching criterion and the original configuration’s failure. Do not change its expected assertions to make a proposal pass.

`npm run proposals` analyzes every YAML fixture in `exercises/proposals/`. It validates all fixtures before writing reports, rejects duplicate IDs, and writes ignored JSON under `artifacts/proposals/`. Each invocation clears only that generated proposal-report directory first, so an invalid invocation cannot leave old reports looking like a new successful analysis. A geometric FAIL is a valid analysis outcome; malformed definitions or unresolved references cause a nonzero exit.

## Read the two independent trials

1. Open `exercises/proposals/threshold-35.yaml`. Its proposed threshold is 35, while the canonical criterion remains 50. Predict which output can change when no sensor input changes.
2. Inspect `artifacts/proposals/PROPOSAL-THRESHOLD-35.json`. Compare `calculation.baseline.coverage` with `calculation.proposed.coverage`: they should be identical. Evaluation and margin use different thresholds. Inspect the derived requirement statement and basis: the proposed numeric threshold, wording and unapproved status agree. A passing relaxed criterion is not evidence of improved geometric coverage or a justification for relaxing the operational requirement.
3. Open `exercises/proposals/radius-45.yaml`. It retains the baseline requirement and proposes a larger ideal radius. Inspect `PROPOSAL-RADIUS-45.json`: the footprint estimate changes while the requirement, sensor center, area, model and numerical method remain fixed. That is a different kind of change from the first trial.
4. Read the `differences` for each trial. Identify which definitions changed and what needed rerunning. Both analyses use the existing `calculateCoverage` and `evaluateCoverage`; no alternate formula is implemented here.

These are separate one-sensor trials. They do not combine footprints or identify an optimal design. Cost, installation constraints and physical sensor performance are not modeled.

## Make an isolated proposal

Create an exercise branch, then copy a fixture without editing canonical engineering data:

```sh
git switch -c exercise/my-proposal
cp exercises/proposals/threshold-35.yaml exercises/proposals/my-threshold.yaml
```

In the new file, choose a unique ID such as `PROPOSAL-MY-THRESHOLD`, update title/rationale and change `change.threshold_percent`. Keep the existing fixtures and canonical records intact. Alternatively copy the radius fixture and change its radius. The schema accepts one supported change per fixture, not both at once. All fixture baseline IDs and model version must resolve to the loaded definitions.

Run `npm run validate`, `npm test` and `npm run proposals`. A new valid fixture is allowed without editing the baseline tests. The script derives a consistent proposed statement/basis for a threshold change; it does not rewrite the canonical requirement YAML. Unsupported or contradictory baseline criterion wording is rejected rather than silently patched.

For an intentional validation failure, temporarily set the **new fixture’s** `baseline.scenario_id` to an unknown ID and rerun `npm run proposals`. Expect a baseline-reference error and no current proposal reports. Restore the reference, validate and rerun. This demonstrates reference consistency; it does not prove engineering suitability. Automated negative tests also exercise broken relationships in isolated copies of the actual definitions.

Inspect your diff. If you commit the valid new fixture and rerun, the generated report identifies that actual source revision and a clean working tree. Before committing, the report must say `workingTreeDirty: true`. Do not edit evidence metadata to hide a local change. Generated reports stay ignored; retain/export a copy separately if needed. To reproduce another run, check out its recorded revision and rerun with its fixture content. Timestamps and analysis IDs will differ; definitions and calculation outputs should agree.

## Interpret provenance and applicability

Each JSON record includes:

- `kind: unapproved-proposal-analysis`, the complete fixture and its source path;
- exact baseline and derived proposed need/requirement/scenario/manifest definitions, including assumptions, units, IDs, model version, and field differences;
- exact inputs, threshold, method/grid, coverage and evaluation for each definition;
- actual commit, working-tree status, timestamp, Node version and local/CI execution context;
- `verification.testExecuted: false` and the registered reference-test ID for context.

The proposal CLI directly executes the shared model and evaluator. It **does not execute TEST-COV-001 against the proposal**. Its reference-test link explains the baseline relationship, not a claim of proposal verification authority. The separate baseline evidence command and test retain their original meanings.

CI generates these reports after successful checks and retains them in a separate `proposal-analysis-<commit>` artifact for 30 days. The existing `reference-evidence-<commit>` artifact stays separate. GitHub sign-in may be required to download either artifact. Match the definition and source revision before applying any result to a decision.

## Limits and next increment

Schemas and reference checks establish supported structure and consistent links. They do not justify the threshold, the ideal circular assumption or real sensor suitability. The V0 numerical limitations still apply, and an unchanged numeric result may have a different interpretation after a definition changes.

The fixture mechanism is deliberately bounded to the existing single-sensor threshold and radius, not a generic patch language. Source-file existence/path checks remain in Node; reusable schema/relationship and proposal-analysis functions have no filesystem imports. Baseline source data and reference tests remain unchanged.

The browser proposal workspace, field-difference UI, Chapter 2 narrative/quiz and new navigation are the next reviewable increment. This PR does not publish Chapter 2 or complete Milestone 2.


## Verification of this increment — 2026-10-20

- `npm run check`: canonical/proposal validation, 73 tests across five files, zero type-check diagnostics and four existing static routes pass locally.
- `npm run proposals`: criterion-only fixture computes 38.52% against 35% (PASS); radius-only fixture computes 63.76% against the unchanged 50% (PASS). Both baseline comparisons remain 38.52% against 50% (FAIL).
- Tests confirm equality behavior, zero radius, invalid numbers, unsupported edits, mismatched baseline IDs/version, contradictory requirement text, canonical immutability and deterministic analysis. CLI failure tests use temporary directories to verify duplicate IDs/YAML keys and broken references clear stale proposal reports without changing real sources.
- Diff inspection confirms canonical engineering YAML, model/evaluator, original reference tests, site files, baseline evidence script and dependencies are unchanged. No new UI is present, so this increment does not claim new browser/mobile checks.
- CI generates the two proposal-analysis reports separately from reference evidence. Downloaded CI artifacts should be matched to the PR head revision before review. Publication of Chapter 2 remains pending its separate implementation and review.
