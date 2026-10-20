# Milestone 02 — Engineering Information Models

**Status:** Plan accepted through PR #3; repository exercise merged as PR #4; Chapter 2/workspace ready for review, publication pending · **Version:** 0.1 · **Date:** 2026-10-20

## 1. Objective and relationship to the baseline

Teach how structured engineering definitions make a change explicit, checkable and reproducible. A reader should distinguish a syntactically valid record, a resolvable relationship, a justified engineering definition and evidence from a particular execution.

Build on SITE_SPEC.md, DEMONSTRATOR_SPEC.md and the published MILESTONE_01.md implementation. This increment delivers Chapter 2 from the proposed curriculum while retaining the **V0 single-sensor teaching capability**. Milestone numbers identify delivery increments; they do not map directly to demonstrator versions. V1 multi-sensor capability remains later work.

This document is a planning input for later implementation PRs. It does not publish a lesson or authorize the rest of the curriculum.

## 2. Learning objective and chapter contract

**Title:** Engineering Information Models.

**Objective:** Given a proposed requirement or scenario change, identify which definition changed, validate its structure and references, rerun the appropriate evaluation, and explain which earlier evidence still applies.

**Prerequisite:** Chapter 1 and the existing DMS V0 exercise. Assume engineering literacy; do not require graph tooling or a specialized modeling language.

Use approximately 800–1,200 words of main prose, plus an experiment and short reasoning quiz. Begin with a concrete engineering question: “If the criterion or configuration changes, what must we check again?” Introduce fields and IDs only when they help answer it.

Proposed sequence:

1. Inspect a proposed change to the existing requirement or scenario; distinguish intent, definition and evidence.
2. Read the small information model already embodied in YAML, Zod contracts and the manifest: identity, numeric fields, units and relationship roles.
3. Separate three checks: parsing/schema validity, reference consistency, and engineering meaning. Passing the first two does not justify a threshold or validate a physical sensor assumption.
4. Perform the controlled-change experiment below, one change at a time.
5. Compare definitions and fresh results; identify the source revision and execution context of retained evidence.
6. Explain why a previous result is not automatically evidence for a changed definition.
7. Quiz and transition: how could larger sets of relationships support systematic change-impact analysis? Do not implement that analysis here.

Quiz prompts should ask readers to explain why changing a threshold can change PASS/FAIL without changing coverage; why valid YAML can contain an unjustified requirement; why changing a referenced ID is different from changing a parameter; and which inputs/revision are needed to reproduce an execution.

## 3. Existing sources and their relationship meanings

Keep the established IDs and canonical records. Do not add illustrative references without resolvable sources.

| Existing definition | Field / relationship | Meaning |
| --- | --- | --- |
| REQ-COV-001 | source_need → NEED-001 | Need motivating the requirement |
| REQ-COV-001 | verification.scenario_id → SCN-001 | Reference configuration for verification |
| REQ-COV-001 | verification.model_id → MODEL-COV-001 | Executable model used for that criterion |
| REQ-COV-001 | verification.test_id → TEST-COV-001 | Registered reference verification test |
| SCN-001 | model_id → MODEL-COV-001 | Model interpreting the scenario inputs |
| Manifest test record | requirement_id, scenario_id, model_id | Definitions bound to the registered test |
| Generated RESULT-* | definition + calculation + execution | Result for specified definitions, inputs and source revision |

Explain that arrows in a teaching chain have different meanings. Show field names and source links in a small table/source view, not an interactive graph or generic relationship platform. These relationships are already validated; the new learning experience should expose their significance rather than present existing validation as a new capability.

## 4. Controlled-change experiment

Provide a no-install browser exercise and a documented repository path. Use the existing coverage model and evaluator in both paths. Keep the area, numerical method, grid and assumptions unchanged.

### Browser path: temporary proposals

Start with validated canonical YAML imported at build time. Allow a small, labeled proposal workspace for the requirement threshold and sensor radius, with an unchanged baseline alongside it. Show the relevant source fields and a field-level difference. This workspace is temporary: it cannot edit repository YAML, create an approved requirement or produce retained CI evidence.

Use separate trials, resetting between them:

- **Criterion change:** propose a threshold of 35 instead of the baseline 50, keeping the scenario unchanged. Both the numeric threshold and the displayed proposed requirement statement must agree. Coverage should be identical while evaluation/margin can differ. This hypothetical value is a teaching input, not an operational recommendation or a justification for relaxing the real requirement.
- **Configuration change:** retain the baseline threshold and propose radius 45 instead of 35, keeping the center unchanged. Coverage is recalculated. A passing proposed configuration does not replace the unchanged SCN-001 reference result.
- **Broken relationship:** demonstrate a deliberately unresolved source reference in a temporary copy, show a useful validation error, then restore it. Do not evaluate an invalid proposal or retain its stale result. Do not commit the broken example as canonical data.

All displayed percentages, margins and outcomes must be calculated. No preset PASS labels or manually maintained result values. Baseline and proposal should identify which inputs/criterion they use. Label every proposed definition and browser result as unapproved and temporary; leaving/resetting the workspace restores the baseline as documented.

### Repository path: versioned definitions and retained execution

Document a clean checkout at an identified revision, `npm ci`, validation/tests, and `npm run evidence`. Then guide a proposal on a separate branch or isolated exercise fixture, review its field differences and rerun validation/evaluation. Record the actual revision, working-tree state and inputs in any generated evidence; do not relabel a dirty local run as CI evidence.

The existing reference verification test intentionally asserts the baseline 50% criterion and expected reference failure. Preserve that regression. The exercise must not teach editing expected assertions merely to obtain green tests. Introduce separately validated proposal fixtures/evaluation checks in the later implementation, or keep proposals outside canonical records; restore the baseline before running the unchanged reference verification. Explain any intentional mismatch rather than suppressing it.

For each change, ask the learner to identify the affected definitions and required reruns. A threshold-only change needs fresh evaluation even if coverage is unchanged; a scenario change requires recalculation and evaluation. This is a bounded, explained dependency exercise, not an automated impact engine. A change to an assumption may invalidate interpretation even when numerical output is identical.

## 5. Implementation boundaries

- YAML remains canonical for approved engineering definitions; Zod remains the single contract family. Do not introduce a parallel schema language or duplicate UI calculation.
- Preserve MODEL-COV-001, its fixed 100×100 cell-center method, numerical contract and model version while its calculation is unchanged.
- Reuse existing validators. If browser validation requires separating pure schema/relationship checks from Node filesystem loading, make only that bounded refactor and preserve source-path/build checks in Node. Do not import filesystem code into client bundles.
- Keep the baseline unchanged and use explicit proposal/fixture context; an existing stable ID must not conceal which version or temporary definition was evaluated.
- Evidence must retain exact proposed inputs and threshold, model identity/version, method/resolution, requirement/scenario/test references, source revision, dirty status, timestamp and execution context. Distinguish baseline reference evidence from proposal analysis; do not claim TEST-COV-001 executed a proposal it did not test.
- Keep the static Astro/GitHub Pages architecture, approved color system, accessible controls and repository base path. Add Chapter 2 to navigation only when it is a complete lesson with a working exercise.
- Retained CI evidence remains revision-specific; existing artifact retention/sign-in limitations must be explained wherever evidence is linked.

**Excluded:** multiple sensors, coverage unions, moving objects, probability models, automated architecture search, graph databases/visual graph engines, generic change-impact infrastructure, AI agents, Gemara/OSCAL, authentication, databases or backends. The original V0 model limitations still apply.

## 6. Proposed acceptance criteria

These are planned gates, not claims of implemented behavior or passed tests.

| Gate | Required observable behavior | Acceptance evidence |
| --- | --- | --- |
| M2-EDU-01 | Chapter 2 teaches identity, fields, relationship semantics, validation levels and evidence applicability | Editorial review, complete exercise and reasoning quiz |
| M2-DATA-01 | Baseline definitions/IDs remain intact; proposals are separately identified | Diff review and existing baseline tests |
| M2-VAL-01 | Invalid numbers, malformed records and unresolved references produce useful errors; invalid proposals are not evaluated | Negative tests and browser checks, including stale-output removal |
| M2-EXP-01 | A threshold-only proposal preserves calculated coverage but changes evaluation as appropriate | Tests deriving baseline/proposal results from the shared model/evaluator; equality boundary retained |
| M2-EXP-02 | A radius-only proposal recalculates coverage under the unchanged criterion | Shared-model fixture test and browser check |
| M2-TRC-01 | Reader follows each displayed relationship to the actual source and explains the affected reruns | Base-path link/anchor checks and exercise review |
| M2-EVD-01 | An execution is bound to the exact evaluated definition, revision and context; old evidence is not shown as applying to a new proposal | Generated evidence inspection and reproduction at the recorded revision |
| M2-UI-01 | Baseline/proposal/differences are readable and keyboard-operable on mobile; reset/navigation semantics are explicit | Keyboard, narrow-screen and no-JavaScript fallback review |
| M2-REG-01 | Chapter 1, existing lab, sources and reference evidence generation continue to work | Existing tests, source validation, type checks, static build and regression smoke check |
| M2-PUB-01 | Completed Chapter 2 and exercise are published under the Pages base path after review | Successful deployment plus public navigation/deep-link/asset checks |

Implementation is done when these gates pass and a reader can explain what changed, what was rechecked, what the evidence establishes and what remains unjustified. A green schema check or browser PASS alone does not meet this educational objective.

## 7. Proposed PR sequence

1. **Planning (merged as PR #3):** record the published Milestone 1 baseline, define this chapter/exercise and review the scope. No runtime changes or empty Chapter 2 page.
2. **Proposal validation and reproducible exercise:** implement the bounded proposal/fixture path, reuse validation/evaluation and add meaningful positive/negative checks while preserving baseline regression tests.
3. **Educational vertical slice:** write Chapter 2, integrate the browser experiment and source relationship view, verify accessibility/navigation/base paths and propose the complete lesson for publication. Keep all new features within this plan; split further only if needed for a reviewable change.

## 8. Risks and controls

- **Confusing changed criteria with improved design:** keep unchanged coverage visible during the threshold trial and require a written interpretation.
- **Proposals masquerading as approved sources/evidence:** separate baseline/proposal labels, exact inputs and execution provenance; no browser persistence or approval claims.
- **Hardcoded baseline tests being weakened for the exercise:** preserve them and add separate proposal fixtures/checks.
- **Scope drifting into Chapter 3 or V1:** expose the existing typed links and teach manual dependency reasoning; defer graph tooling and multiple sensors.
- **Planning being mistaken for publication:** keep this document marked proposed and avoid navigation to an unpublished Chapter 2.
