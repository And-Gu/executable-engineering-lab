# Chapter 06 — Directing AI Engineering Agents
Status: v2 implementation brief (proposed)
Part: III — Engineering with AI Agents

## The one question
What can an agent do on our behalf, and how do we know what actually happened?

## What the reader must gain
Set task objective, sources, permissions, tool boundaries, stop conditions and review deliverable; distinguish agent narration from trace and evidence.

## Opening engineering situation
Agent investigates a bounded DMS proposal, reads approved sources, modifies an isolated fixture, runs checks and opens a reviewable diff.

## Narrative arc
1. Start with a concrete decision or unexpected constraint, not a definition.
2. Show why the current working practice is insufficient for this question.
3. Introduce only the concepts needed to reason about it.
4. Let the reader examine a clear example and make a prediction/choice.
5. Interpret the outcome, including limitations and authority.
6. Connect the decision to the next engineering question.

## Primary learning experience
Inspect an *authentic captured* agent run: instructions, tool calls, sources read, diff, verification, human review; optional labeled mock until recorded.

## Reuse and migration from v1
Consolidate old Ch 7 and Ch 8; stop repeating radius/threshold exercise as main interaction.

## Technical/editorial constraints
Never invent transcript or imply active AI runtime. Secrets sanitized. Agent may not change criterion or approve itself.

## Suggested article skeleton
- Opening question and scenario
- Why the usual approach is difficult here
- A new engineering capability or method
- The demonstration and what to look for
- How to interpret results and unresolved uncertainty
- A short engineering takeaway
- Next question / suggested deeper reference

## Verification and acceptance
- The main question can be answered by a reader using the chapter, without prior local setup.
- The chapter contributes a *new* insight not reproduced verbatim from its predecessor.
- Its primary demo has an explicit data origin and limitations; no claims of unimplemented functions.
- A meaningful link exists to canonical or clearly illustrative source information.
- Text, controls and results work with keyboard/screen reader as applicable.
- Existing V0 technical checks and old deep links remain intact following migration.

## Bridge
Even with correct boundaries, a single large change can overwhelm a reviewer. How should we divide work?
