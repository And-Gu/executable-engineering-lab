# Milestone 09 — Continuous Engineering

**Status:** Proposed educational scope · **Version:** 0.1 · **Date:** 2026-10-21

## Objective and baseline

Teach an engineer to interpret automated feedback after a proposed engineering change, identify which revision and checks support a claim, and decide what still needs review or new evidence.

SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md remain authoritative. Build on published Chapter 8 revision `3532574dd6c4c02a852efdf858e5fbe6f10a6289`. Preserve V0, canonical YAML, stable IDs, numerical method, model version and reference/proposal record meanings.

This is a lesson about the repository's existing feedback loop, not a new automation platform. Continuous checking does not mean continuous design approval. No change to workflows or engineering calculations is required unless a specific correctness defect is demonstrated and reviewed separately.

## Chapter contract

**Title:** Continuous Engineering.

**Question:** “What must be checked again when an engineering definition changes?”

Target 800–1,200 words of main prose excluding exercises and quiz. Start with a proposed radius change that passes the geometric criterion, then ask what a green check actually establishes.

1. Connect a proposed change, source revision, validation, assertions, analysis records, review and publication as distinct activities.
2. Inspect the actual validation workflow: installation, check, reference generation, proposal analyses and artifact upload. Explain that a failed step prevents later steps from running; absent artifacts are not evidence of successful execution.
3. Separate source/schema validation, software assertion success, modeled criterion evaluation and engineering acceptance. Successful canonical assertions intentionally preserve the canonical geometric FAIL.
4. Read actual workflow triggers and revision selection. Validation checks the PR head or pushed main revision; Pages has a separate main build/deploy workflow. Do not imply that Pages depends on the separate validation job or that branch protection is configured without inspecting it.
5. Explain feedback after a definition change: inspect the difference, determine affected checks and evidence, execute the relevant checks, review results and obtain the responsible decision. A green run does not authorize changing the criterion or expected assertions to make a design pass.
6. Distinguish event history from current applicability. Match commit, inputs, model/method and actual commands; local reproduction is a new execution. CI logs and artifacts may expire or require sign-in.
7. End with a short reasoning quiz and transition to governance/assurance questions without implementing Chapter 10 controls.

Prefer repository facts and explicit teaching conventions. Cite official documentation for any general GitHub Actions behavior beyond direct workflow inspection; verify it when writing. Do not invent workflow events, protection settings, deployment guarantees or approval records.

## Exercise: review one feedback cycle

Provide a no-install manual exercise using source links, native disclosures and the existing proposal workspace. Add no second calculator, fake CI dashboard or browser-triggered workflow.

- Read the existing radius-only task and compare the radius and threshold proposal differences. Both can produce a modeled PASS; only one satisfies that task's edit boundary.
- Follow `.github/workflows/validate.yml` and `deploy.yml`. Identify what each command produces and what it does not execute. `npm run evidence` generates a reference evaluation; it does not run Vitest assertions. Proposal analyses do not execute TEST-COV-001 against changed inputs.
- Classify clearly labeled hypothetical cases: invalid reference before calculation; successful checks with canonical geometric FAIL; valid proposal with missing operational justification; successful Pages build without separate validation evidence. Explain the next review action without representing these cases as actual CI events.
- Inspect an actual run through a repository link or reproduce locally. Record revision, command, conclusion and record provenance, and state whether a historical artifact was actually available. The site must not claim it has fetched a run or artifact it has not loaded.
- Explain which earlier evidence remains informative and which claim requires a new run when inputs or criterion change. Retain temporary browser calculations as unapproved exploration.

Repository instructions should reuse `npm ci`, `npm run check`, `npm run evidence` and `npm run proposals`, and inspect the existing records. Provide a short written review template rather than a new artifact schema or persistence feature. Do not require readers to push, publish, change canonical definitions or alter assertions for the exercise.

## Boundaries

Keep static Astro/Pages, the approved palette, source-derived values, keyboard/mobile usability, textual outcomes and honest no-JavaScript fallback. Register only a complete Chapter 9 in `site/src/data/chapters.ts`; Home and Learn must gain it together. Connect Chapter 8 continuation and source return when the lesson exists, not in this planning PR.

No workflow dispatch UI, polling, remote artifact ingestion, new CI service, deployment orchestration, branch-protection changes, automatic approvals, agent runtime, multi-sensor model, dynamics, optimization, graph infrastructure, Gemara/OSCAL, backend or persistence. This plan does not authorize delegation to agents. Preserve the distinction between CI execution, engineering evidence and publication.

## Acceptance gates

These are proposed checks, not recorded outcomes.

| Gate | Observable outcome | Evidence |
| --- | --- | --- |
| M9-EDU-01 | Reader explains feedback, applicability and remaining decisions | Complete chapter, manual exercise and reasoning quiz |
| M9-CI-01 | Workflow explanation matches actual triggers, revision and command ordering | Source review of both workflows and linked command implementations |
| M9-EVD-01 | Assertions, evaluations, artifacts and deployment claims remain distinct | Actual record/run inspection; no invented historical events |
| M9-UI-01 | Chapter, sources, disclosures and shared cards work at the Pages base path | Keyboard/mobile/navigation and generated fallback review |
| M9-REG-01 | Existing sources, calculations and exercises remain intact | npm run check, evidence and proposals; relevant regression smoke checks |
| M9-PUB-01 | Reviewed chapter is publicly available | Exact main-revision CI/Pages success and public learning/source/exercise checks |

Record modeling limits, artifact expiry/sign-in constraints and incomplete accessibility/cross-browser coverage. A passing workflow cannot establish physical suitability or replace accountable engineering review.

## Delivery sequence

1. **Planning PR:** record Chapter 8 publication and propose this scope. No empty chapter or runtime change.
2. **Educational PR:** chapter, existing-workflow review exercise, reproduction instructions, central chapter registration and verification notes.
3. **Release after review:** merge, verify exact-revision CI/Pages, and smoke-test public Home/Learn/Chapter 8→9, source links, exercises and refresh.
