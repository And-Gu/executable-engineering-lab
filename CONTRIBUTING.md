# Contributing to Executable Engineering Lab

> **Proposed repository contribution guide.** This file supplements existing V0 engineering instructions; add it only after owner review. Do not alter current data/model contracts through an editorial PR.

## Scope before implementation

Read `AGENTS.md`, `SITE_SPEC.md`, `DEMONSTRATOR_SPEC.md`, `MILESTONE_01.md`, the current roadmap and relevant source/decision records. State what you will change and what you will not. The current public name and existing URL should be preserved unless explicitly approved.

## Editorial guidance

- Write in straightforward, precise English for practicing engineers, including those new to this tooling.
- Open with a meaningful question or situation before a string of definitions. Explain causal consequences using the actual DMS example where helpful.
- Maintain one significant new learning insight per chapter; avoid duplicating glossary explanations and lengthy caveat blocks.
- Use core browser interactions only when they clarify a useful relationship or decision. **Local exercises are optional**, not mandatory.
- Scenario-based knowledge checks ask readers to judge a realistic situation and then explain the reason behind the outcome. Do not treat quiz completion as evidence of professional competence.
- Use the source vocabulary and domain boundaries carefully: need/requirement/assumption/design/verification/evidence are not interchangeable.
- Support complex explanations with diagrams, tables or simulations when they actually reduce effort; no decorative graphic requirement.
- Identify optional deep references by what readers will gain, with setup/permissions when required.
- Before global editorial changes, propose before/after passages for owner approval. Rewrites must preserve source identifiers, math, documented model limits and existing meaning.

## Engineering changes

- Edit canonical YAML in `engineering/`, Zod contracts in `schemas/`, and pure functions/tests in `models/`. Browser UI must not duplicate engineering math.
- Make assumptions explicit, trace inputs and IDs, and report exactly what the verification supports. Current V0 is one fixed ideal circular sensor and sampled geometric coverage—not detection probability or an operational assessment.
- Preserve reproducible evidence; compare deterministic calculation fields separately from run-dependent IDs and timestamps.
- Treat a passing software test suite and a failing engineering acceptance condition as independent facts.

## Review and checks

For every change return a readable summary, source paths/IDs affected, what behavior was tested, why the learning interaction is meaningful, and actual limitations. Run `npm run check` and `npm run evidence` where relevant; inspect browser behavior for UI changes. Use a reviewable PR-sized diff and distinguish a ready PR from a merged/published result. Do not publish or merge without owner approval.

## Decisions

Project-wide choices should be recorded in `project/DECISIONS.md` or an ADR. A proposed agent/implementation choice is not **Accepted** until the owner confirms it. Supersede obsolete decisions rather than deleting the history of why they were made.
