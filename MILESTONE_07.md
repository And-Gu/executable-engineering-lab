# Milestone 07 — Agentic Engineering

**Status:** Proposed for review · **Version:** 0.1 · **Date:** 2026-10-21

## Objective and baseline

Teach a practicing engineer to define a bounded engineering-assistance task, separate a proposal from its independently executed checks, and retain responsibility for interpreting and approving any change.

SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md remain authoritative. Build on published Chapter 6 at `3d8829e73a03c2d2d63d2d32a6c9bbd6b2cf6f9e`. Preserve V0: canonical YAML, one ideal circular sensor, fixed grid, stable IDs, model version, reference assertions and evidence meanings.

The curriculum introduces bounded agent tasks here, but repository guidance still excludes agents. This increment therefore proposes a **lesson and manual task-contract/review exercise**, not a deployed agent, external model call or claimed V3 demonstrator capability. Do not change that restriction implicitly. Any future executable agent integration requires separate explicit scope and review.

## Chapter contract

**Title:** Agentic Engineering.

**Question:** “What may an assistant change, and what must an engineer still verify?”

Target 800–1,200 words of main prose, excluding experiment and quiz. Start from the monitoring team's request for help with a failing geometric configuration, rather than tools or prompting syntax.

1. Define the requested engineering assistance in concrete terms: inspect a bounded problem, propose an allowed change and provide its rationale and actual execution context.
2. Explain a local pedagogical distinction between generating a proposal and performing authorized actions. Do not imply that a language-model response has engineering authority or that all tools use the same agent architecture.
3. Introduce a task contract: objective, source revision, required context, allowed edit, prohibited changes, executable checks, stop conditions and deliverables.
4. Apply that contract to an existing unapproved radius proposal. Inspect exact field changes and the separate analysis, rather than accepting the proposer's own PASS claim.
5. Contrast a threshold-relaxation proposal that can pass geometrically but violates this particular task's fixed-criterion boundary. It remains a valid teaching proposal in its original Chapter 2 context; context determines what is authorized.
6. Explain independent execution and review: use existing calculation/test paths, preserve provenance and separate test assertions from record generation as Chapter 6 established.
7. End with a quiz and transition to engineering context, tool permissions and review, without implementing Chapter 8 or real agent permissions.

Claims about AI/agent behavior, specific tools or standards need current authoritative sources when writing the lesson. Prefer narrow statements and explicitly labeled teaching conventions. Do not invent real agent performance, transcripts or claimed executions.

## Proposed task contract

Use a readable document, not a new schema language or machine-enforced permission system.

| Contract part | Concrete teaching scope |
| --- | --- |
| Objective | Propose a single-sensor radius change that can be evaluated against the unchanged geometric criterion; report limitations rather than claiming an operational design |
| Baseline | Identify actual checkout/revision and inspect the canonical need, requirement, scenario, model assumptions and registered test |
| Allowed change | One finite nonnegative radius in an isolated unapproved proposal fixture; stay within the existing browser exercise range when using its controls |
| Fixed context | Area, sensor center, threshold, requirement wording/basis, source relationships, method, grid and model version |
| Prohibited actions | Alter canonical YAML, relax the criterion, edit test expectations, change model code, merge/publish, approve a requirement or claim physical sensing capability |
| Checks | Validate the proposal and references, inspect its diff, run existing analysis through the shared model/evaluator, and separately run the canonical regression suite |
| Stop conditions | Missing/contradictory context, invalid references, a requested edit outside scope, or evidence insufficient to support the intended claim |
| Deliverable | Exact proposed input, rationale, scoped diff, actual commands/results and provenance where recorded, omitted effects and a question/decision for the reviewer |

The contract is an instruction and review aid, not a security boundary. Merely describing a prohibition does not enforce it. No claim of sandboxing, runtime policy enforcement or safe autonomous execution is made.

## Browser exercise: review two proposals

Reuse the existing ProposalWorkspace and the actual radius/threshold fixtures; do not create a second calculation or new agent UI.

- Read the fixed-criterion task contract and predict which fields may change.
- Inspect the radius example's field differences and actual calculated result. Decide whether it fits the stated edit scope, then identify what remains unjustified.
- Reset and inspect the threshold example. Explain why a passing outcome does not make that proposal acceptable for this task. Its criterion/statement/basis changes are visible, not hidden or relabeled as an improved sensor.
- Break a source reference in a temporary copy, observe withheld analysis, restore/reset and name the stop condition.
- Write a short review: within scope, out of scope or insufficient evidence, with reasons. Reveal a native explanation after answering.

This is a manual review exercise. The existing controls intentionally allow both teaching cases; do not present them as enforced task permissions. The fixtures are designed teaching examples, **not outputs attributed to a real agent run**. No mock transcript, artificial agent progress, fixed agent-success badge or simulated autonomous execution is needed.

Neither a valid diff nor a calculated PASS approves the change. The reviewer must distinguish edit scope, requirement justification, numerical evidence and physical suitability. No persistent review state or approval button is proposed.

## Repository reproduction

Use the existing isolated proposal exercise, validated sources, pure analyzeProposal function and coverage/evaluator. Add concise instructions for comparing the radius and threshold fixture diffs against the written contract.

From an identified checkout, run `npm ci`, `npm run check` and `npm run proposals`. Inspect exact baseline/proposed definitions, differences, model method/version and actual execution provenance in generated analyses. Preserve canonical TEST-COV-001 and its expected geometric FAIL. If reference evidence is generated, explain that its generator is separate from assertion execution.

Independent checking here means executing the defined checks and inspecting their outputs rather than accepting a proposer’s narrative as proof. The same deterministic model is deliberately shared; this is not an independent physical validation or an alternative numerical implementation. Do not claim an unexecuted test, fabricate a clean revision or attribute a local run to CI.

Keep browser trials temporary and unapproved. CI artifacts remain revision-bound, expire after 30 days and may require sign-in. Source inspection at a recorded revision supplies context that a stable ID alone cannot provide.

## Boundaries and acceptance gates

Retain static Astro/GitHub Pages, the approved palette, source-driven labels, accessible controls, textual outcomes and responsive layout. Register the completed chapter once in `site/src/data/chapters.ts` so Home and Learn update together; connect Chapter 6→7 and source return navigation only when the lesson is complete.

Exclude actual agent/LLM runtime, external APIs, credentials, provider selection, autonomous repository edits, tool-permission enforcement, multi-agent orchestration, multi-sensor modeling, dynamics, optimization, graph infrastructure, Gemara/OSCAL, backend, authentication and new persistence. This document does not authorize the coding assistant implementing the lesson to spawn or run agents.

These are proposed gates, not completed checks.

| Gate | Observable outcome | Required evidence |
| --- | --- | --- |
| M7-EDU-01 | Reader writes a bounded task and separates proposal, check and approval authority | Complete lesson, contract exercise and reasoning quiz review |
| M7-SCP-01 | Radius/threshold examples are reviewed against the same explicit fixed-criterion contract | Source-derived diffs and reader-facing explanation; no fake enforcement claim |
| M7-EVD-01 | Actual analyses are separate from claimed agent output and canonical verification | Fixture/source inspection, real command output/provenance and accurate labels |
| M7-STOP-01 | Invalid references/out-of-scope edits lead to a reasoned stop or rejection, not automatic approval | Existing negative checks plus browser review and explicit manual exercise interpretation |
| M7-UI-01 | Exercise, quiz, cards and source navigation work with keyboard and mobile | Manual smoke review and generated no-JavaScript fallback inspection |
| M7-REG-01 | Chapters 1–6, model, canonical definitions and reference/proposal paths remain intact | Validation, tests, types, build, evidence/proposals and navigation checks |
| M7-PUB-01 | Complete reviewed chapter is published under the Pages base path | Exact main-revision CI/deployment and public chapter/card/experiment checks |

Document unresolved limitations. Manual smoke checks are not comprehensive accessibility or cross-browser certification. Passing geometry never establishes operational suitability.

## Reviewable delivery sequence

1. **This planning PR:** record Milestone 6 and the synchronized homepage release; propose the bounded educational scope. No runtime changes or empty chapter.
2. **Educational vertical slice:** write Chapter 7, a readable task contract and repository review instructions; reuse the existing workspace, add only necessary presentation, register the chapter centrally and document verification. Do not introduce agent code.
3. **Release after review:** merge, verify exact-revision CI/Pages and smoke-test public cards, navigation and proposal review.

Completion is an engineer who can identify authorized work, required checks and retained review responsibility. A functioning autonomous assistant is explicitly not this increment's deliverable.
