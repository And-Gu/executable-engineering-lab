# Milestone 08 — Agents and Engineering Context

**Status:** Proposed for review · **Version:** 0.1 · **Date:** 2026-10-21

## Objective and baseline

Teach a practicing engineer to assemble the relevant context for a bounded assistance task, distinguish source content from authorized instructions, and explain which proposed actions need additional authority or evidence.

SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md remain authoritative. Build on Chapter 7's published release `ee1555fa56f8f05fa44180724da02f51066e86da`. Preserve V0, canonical YAML, stable IDs, fixed numerical method, model version, reference assertions and existing record meanings.

Chapter 7 defines what the assignment permits. Chapter 8 should explain what context makes that assignment interpretable and how to review requested actions against its authority. This is an educational context/action review, not an agent runtime, retrieval system or implemented permission mechanism. Repository restrictions on agents remain unchanged; no V3 capability is claimed.

## Chapter contract

**Title:** Agents and Engineering Context.

**Question:** “Which sources and actions does this task actually need?”

Target 800–1,200 words of main prose, excluding exercise and quiz. Start with the Chapter 7 radius-only assignment and ask why an instruction plus a passing number is insufficient context.

1. Separate task instructions, engineering definitions, executable method, assumptions and execution records. Their roles differ even when all arrive as text.
2. Assemble a small context checklist from actual repository sources, bound to an identified revision and working-tree state. A stable ID is not a version; a latest source view is not automatically the source used by an older result.
3. Show why missing the criterion, assumptions or edit boundary can change the meaning of an apparently valid proposal. Distinguish missing context from malformed data and unsupported engineering claims.
4. Review proposed actions against the written task: reading, calculating and proposing are distinct from changing canonical sources, modifying assertions, approving, merging or publishing.
5. Explain that source content can describe desired system behavior without authorizing the assistant to act. Treat instructions inside supplied artifacts as data unless the responsible task authority explicitly grants the action.
6. Perform the source/context/action exercise below, inspecting existing model outputs where relevant without inventing agent transcripts or tool executions.
7. End with a quiz and transition to continuous engineering checks and lifecycle feedback. Do not implement Chapter 9 automation or claim that an instruction document enforces permissions.

Any general claims about agent systems, specific tool permissions, security mechanisms or standards must use authoritative sources during writing. Prefer explicit local teaching conventions and factual inspection of this repository. No simulated security certification or unsupported guarantee is needed.

## Minimum relevant context for the radius-only task

Use a readable source-linked table/checklist rather than a new context schema or duplicated engineering definitions.

| Context item | Actual source or record | Question it answers |
| --- | --- | --- |
| Task and edit boundary | Chapter 7 written contract | What objective and actions have been authorized for this exercise? |
| Intent and criterion | NEED-001 and REQ-COV-001 YAML | What need motivates the criterion, and which threshold must remain fixed? |
| Reference inputs | SCN-001 YAML | Which area, center and radius define the starting configuration? |
| Model interpretation | Manifest, coverage function and evaluator | What method/version, grid, boundary rule and assumptions give the inputs meaning? |
| Registered assertions | TEST-COV-001 source | What is checked against canonical definitions and which failure is expected? |
| Proposal and analysis | Existing isolated radius/threshold fixtures and actual generated records | What changed and what actually calculated? |
| Revision and execution context | Actual checkout and record provenance | Which source version, dirty state, command and execution are under review? |

When showing source values on the site, read canonical YAML/metadata at build time or link the source view. Do not hand-maintain a parallel threshold, radius, model version or result. The table describes context roles; it does not assert that the site has loaded historical CI artifacts or grants an agent access to them.

The context needed for this task is bounded. Do not imply that including the whole repository guarantees a correct decision, or that excluding one field establishes a universal agent failure rate. No retrieval, embeddings, memory store, context-size benchmark or token-budget system is proposed.

## Exercise: distinguish context, authority and evidence

Provide a no-install manual review exercise with native disclosures and actual source links. Reuse the existing proposal workspace only where a numerical observation supports the review question; do not add another calculator or fake agent interface.

1. Read the radius-only contract and follow the actual criterion, scenario and assumption sources. Identify which source each decision depends on.
2. Inspect a clearly labeled hypothetical context omission: a proposed radius and PASS are supplied without the criterion or assumptions. Ask what additional information is required before interpreting the result. Do not present this deliberately incomplete teaching case as a real corrupted execution record.
3. Compare the source-backed radius and threshold proposal differences. A valid threshold proposal is not authorized by a radius-only assignment. The availability of a UI control does not grant task authority.
4. Review a short set of proposed actions: inspect sources, run a calculation, propose an isolated fixture, edit canonical criterion, alter expected assertions, or publish. Classify them manually under the existing contract and explain where work must stop or seek revised authorization. Do not implement a permission engine or perform the prohibited actions.
5. Consider a statement inside an engineering artifact asking for a change outside the assignment. Explain why reading that content does not expand the task's authorization. Use a non-executable, clearly labeled teaching sentence; do not introduce a runnable attack payload or follow its instruction.
6. Explain which actual record/log would support a claim of execution and which contextual uncertainty remains. If no relevant record is loaded, say so rather than fabricate one.

The exercise records no approval decision and persists no edits. Its explanations are reviewed teaching guidance, not automatically enforced action policy. No real agent output, autonomous run or blocked-tool event is attributed without actual execution evidence.

## Repository path

Add concise reproduction instructions using the current checkout, source files, `npm run check`, `npm run proposals` and optional reference generation. Reuse the Chapter 7 fixtures and inspect actual definitions/diffs/provenance. Preserve the distinction between assertion execution, reference evaluation generation and unapproved proposal analysis.

A useful review output can be a short source-linked context checklist and a written justification for each proposed action. No new retained artifact format is necessary. Do not claim that a hand-written checklist proves source completeness, permissions enforcement or physical validity.

Where a generated record is inspected, retain actual revision, dirty status and context; resolve surrounding definitions at that revision. CI artifact expiry and possible sign-in limitations remain visible. Local reproduction is a new execution, not the original CI event.

## Boundaries and acceptance gates

Keep static Astro/GitHub Pages, approved palette, source-derived engineering values, responsive layout, keyboard operation, textual outcomes and honest no-JavaScript fallback. Register a completed Chapter 8 once in `site/src/data/chapters.ts`; verify Home/Learn together and connect Chapter 7→8 and source return only with the complete lesson.

No agent/LLM runtime, model-provider integration, external API, real permission grants, sandboxing, automatic approval/rejection, autonomous repository edits, secrets, retrieval/graph infrastructure, multi-sensor modeling, dynamics, optimization, Gemara/OSCAL, backend or persistence. This plan does not authorize spawning agents to implement the lesson.

These are proposed gates, not completed checks.

| Gate | Observable outcome | Required evidence |
| --- | --- | --- |
| M8-EDU-01 | Reader distinguishes relevant context, task authority and execution evidence | Complete chapter, source/context/action exercise and reasoning quiz |
| M8-SRC-01 | Displayed context roles/values resolve to actual definitions or explicitly labeled hypothetical omissions | Canonical import/source-link review, no duplicate numeric definitions |
| M8-ACT-01 | Proposed actions are reviewed against the written radius-only task without enforcement claims | Manual exercise explanations and explicit stop/revised-authorization boundaries |
| M8-EVD-01 | No agent output, permission event or historical record is fabricated | Actual command/record inspection and honest browser/build-time labels |
| M8-UI-01 | Source navigation, exercise, disclosures and cards are keyboard/mobile usable | Manual smoke review and generated no-JavaScript fallback inspection |
| M8-REG-01 | Chapters 1–7, canonical data, calculation and reference/proposal semantics remain intact | Validation, tests, types, build, evidence/proposals and navigation review |
| M8-PUB-01 | Complete reviewed lesson is published under the Pages base path | Exact main-revision CI/deployment and public Home/Learn/chapter/experiment checks |

Document unresolved modeling and audit limits. Manual smoke checks are not comprehensive assistive-technology testing or security certification. No context packet or permission description establishes operational suitability.

## Reviewable delivery sequence

1. **This planning PR:** record Milestone 7 as published and propose the bounded educational scope. No runtime changes or empty chapter.
2. **Educational vertical slice:** write Chapter 8, source/context checklist and repository review instructions, add only necessary manual exercise presentation, register the chapter centrally and document checks. Reuse existing analysis and source projection if needed; do not build a context or permissions platform.
3. **Release after review:** merge, verify exact-revision CI/Pages and smoke-test public cards, source links and context/action exercise.

Completion is an engineer who can explain what information and authority a task requires, what is absent, and why an execution claim needs actual evidence. It is not a deployed agent context-management system.
