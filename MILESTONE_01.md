# Milestone 01 — From Engineering Intent to Evidence

**Status:** Ready for implementation planning · **Version:** 0.1 · **Date:** 2026-10-16

## 1. Objective

Deliver a publicly accessible, functioning **vertical slice** of Executable Engineering Lab: an operational need, a structured requirement, a reference scenario, a deterministic executable coverage model, an interactive experiment, a verification result, and a chapter that teaches how these elements relate.

**Not the objective:** Build a general engineering platform, production monitoring system, agent framework, or exhaustive documentation site.

## 2. Milestone deliverables

1. New repository and working Astro/TypeScript site deployed on GitHub Pages at the repository base path.
2. Home page, essential navigation, accessible layout and Chapter 1.
3. Canonical engineering records `NEED-001`, `REQ-COV-001` and `SCN-001` with source validation.
4. Pure `MODEL-COV-001` TypeScript calculation, `TEST-COV-001` evaluator and automated tests.
5. Interactive V0 lab with sensor position/range controls, visualization, computed coverage, pass/fail, and reset.
6. Simple traceability display connecting the source requirement, scenario, model, test and result.
7. CI workflows for validation/test/build and GitHub Pages deployment.
8. Repository README, minimal contribution instructions, agent guidance (`AGENTS.md`) and clearly labeled roadmap.

## 3. Functional requirements

| ID | Requirement | Acceptance evidence |
|---|---|---|
| SITE-01 | Site builds as a static Astro project and deploys under its GitHub Pages base path | Successful CI build and public page loads with correct asset URLs |
| SITE-02 | Home and Chapter 1 have working navigation | Manual smoke test, including deep-link refresh |
| EDU-01 | Chapter 1 explains intent, requirement, model, test, result and limitations | Editorial review and short understanding quiz |
| DATA-01 | Structured requirement and scenario are maintained outside the Astro presentation components | Repository inspection and schema validation |
| DATA-02 | All documented source IDs and references resolve | Automated relationship validation |
| MOD-01 | Coverage model estimates fraction of rectangular area inside circular sensor footprint | Unit tests against known geometries |
| MOD-02 | Model rejects invalid inputs with useful error messages | Invalid-input unit tests |
| LAB-01 | Sensor x/y/radius controls drive SVG and numeric result | Browser interaction test or manual recorded test |
| LAB-02 | Reset restores SCN-001 reference values | UI test |
| VER-01 | Requirement PASS/FAIL is calculated from coverage result and 50% threshold | Evaluator unit tests, including boundary equality |
| VER-02 | Browser and test runner use the same coverage module | Source inspection and import structure |
| TRC-01 | Reader can follow REQ-COV-001 to scenario/model/test/result | Clickable source or on-site source views |
| EVD-01 | Reference verification result includes model/scenario/test IDs, method, code revision and run time | CI artifact or generated report inspection |
| QLT-01 | UI explicitly identifies the idealized model, limitations and approximate result | Manual editorial review |
| A11Y-01 | Lab is keyboard accessible, labeled, mobile usable and not color-only | Accessibility smoke review |

## 4. Chapter 1 — content contract

**Title:** From Engineering Intent to Evidence.

**Learning objective:** Given an operational need, explain why an explicit requirement, executable model, test and qualified evidence are separate engineering artifacts.

**Suggested sequence:**

1. A bounded industrial area requires monitoring; what does success mean?
2. Operational need versus measurable reference-scenario requirement.
3. The simplified circular-coverage model and its assumptions.
4. Interactive experiment: vary sensor radius and position until the threshold passes.
5. Examine the requirement, scenario and test record; identify what produced the displayed result.
6. What the evidence does **not** establish (detection performance, occlusion, reliability, real-world suitability).
7. Short quiz and next engineering question: what changes when there are several sensors?

**Writing guidance:** Main narrative ~800–1,200 words. Short paragraphs, concrete examples, no unsupported claims about technologies or real sensors. Move implementation details to reference pages.

**Exercise:** Start from default SCN-001 (expected FAIL); vary sensor radius or location to achieve PASS; explain which parameter changed and what remains unverified.

**Quiz examples:** Why does a passing geometric coverage test not establish operational detection performance? What makes a verification result reproducible? Which information is a requirement versus an assumption?

## 5. Implementation sequence

Execute in vertical increments; do not start with a large speculative abstraction layer.

### Increment A — Site and engineering data

- Initialize Astro with base path appropriate for `/executable-engineering-lab/`.
- Establish basic navigation, home page and Chapter 1 placeholder with a clear status.
- Add `NEED-001`, `REQ-COV-001`, `SCN-001` and minimal validation rules.
- Create a build check that fails on an invalid reference or non-finite parameter.

**Exit:** Site builds and canonical engineering inputs validate.

### Increment B — Executable model and independent tests

- Implement deterministic coverage function and evaluator as pure TypeScript modules.
- Choose and document a fixed cell-center grid resolution; include it in outputs.
- Test edge cases, invalid inputs, reference configuration and threshold equality.
- Confirm reference scenario at radius 35 returns approximately 38.5% and FAIL; avoid hardcoded coverage values.

**Exit:** A command-line test run independently evaluates the scenario without a website.

### Increment C — Interactive vertical slice

- Render the area and sensor footprint using SVG or lightweight client-side components.
- Connect x/y/radius controls directly to the shared model, with reset.
- Show coverage percentage, threshold and textual PASS/FAIL.
- Expose requirement/test references, source links, assumptions and limitations.

**Exit:** Reader can change a parameter, observe new evidence and understand its limits.

### Increment D — Publication and editorial completion

- Write and review final Chapter 1 with exercise and quiz.
- Add a minimal human-readable trace view, not a full graph engine.
- Produce reference evidence with provenance (source commit, timestamp, method).
- Wire PR validation and Pages deployment.
- Test keyboard, mobile, deep links and build artifacts.

**Exit:** Site is usable publicly and another contributor can reproduce results locally.

## 6. Agent execution rules

An implementation agent should:

- Treat `SITE_SPEC.md`, `DEMONSTRATOR_SPEC.md` and this file as design inputs, not authorization to introduce extra features.
- Keep engineering computation separate from UI/presentation.
- Make small commits or PR-sized increments and explain design decisions.
- Run tests and build before presenting completion.
- Never fabricate PASS values, evidence, test runs or source provenance.
- Record and explain deviations or unresolved issues.
- Avoid introducing a backend, database, multi-agent framework or Gemara in this milestone.
- Preserve the distinction between an interactive browser result and a retained CI result.

## 7. Test matrix

| Test | Input | Expected behavior |
|---|---|---|
| Default reference | 100×100, center (50,50), r=35 | ≈38.5% and FAIL against 50% |
| Full coverage | 100×100, center (50,50), r=80 | 100% sampled coverage and PASS |
| No radius | radius=0 | 0%, FAIL |
| Sensor outside | x=1000, y=1000, r=10 | 0%, FAIL |
| Invalid dimensions | width=0 or negative height | Input rejected |
| Invalid numeric input | radius=NaN or Infinity | Input rejected |
| Boundary evaluator | result coverage equals threshold | PASS |
| Reset | Change x/y/radius then reset | Original SCN-001 values restored |
| Missing relationship | Unknown requirement/test/source ID | Validation fails |
| Repeatability | Same source, config and method | Same numeric result |

Numerical tests must use tolerances appropriate to grid sampling rather than falsely requiring exact continuous geometry.

## 8. Non-functional acceptance

- Responsive on desktop and narrow screens.
- Keyboard and label support on controls; outcome shown in text as well as color.
- Static hosting, no required credentials or network calls for V0 simulation.
- Documentation specifies installation, local development, tests, build and deployment configuration.
- No empty advanced navigation pages presented as complete.
- Scripts are deterministic and fail loudly on malformed data or broken relationships.
- Technical descriptions are honest about model idealizations.

## 9. Definition of Done

Milestone 1 is complete when a reviewer can:

1. Open the published site and read the complete first chapter.
2. Interact with a functioning coverage lab, not screenshots or mocked results.
3. Inspect the source requirement, scenario, model and verification link.
4. Reproduce the reference result from a clean checkout using documented commands.
5. Observe all tests and the site build passing in CI.
6. Explain why PASS applies only to the specified idealized model/scenario.
7. Confirm that browser experiments and saved CI evidence are clearly distinguished.

## 10. Out-of-scope backlog

- Multiple sensors and union-of-coverage algorithms.
- Moving objects, time-stepped simulations and probability models.
- Architecture search and multi-objective trade studies.
- Interactive full knowledge graph and change impact engine.
- AI agent integration, tool-use permissions and agent-generated PRs.
- Gemara, OSCAL or automated compliance evaluation.
- Production telemetry, authenticated dashboards or external service dependencies.

These are later learning increments, not missing Milestone 1 features.

## 11. Risks and controls

| Risk | Mitigation |
|---|---|
| Education gets buried under infrastructure | Deliver Chapter 1 and working demo in the first release |
| UI and tests disagree | Shared pure coverage module |
| Model result misread as physical-world proof | Persistent assumption and evidence labels |
| Data relationship examples become decorative | Automated source ID validation |
| Site silently depends on live services | Static build and offline-capable V0 computation |
| Scope expands into a generic engineering platform | Enforce milestone exclusions and incremental development |

## 12. Recommended first pull request

**PR 1: Establish V0 source data and executable coverage test.**

The PR should include the minimal repository framework, validated YAML records, pure model function, evaluator, tests, README commands and a basic Astro landing page. Keep the interactive UI and final chapter writing for subsequent increments. This provides a verifiable engineering core before investing in presentation.
