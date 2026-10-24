# Chapter 03 — Engineering Knowledge as Code
Status: v2 implementation brief (proposed)
Part: II — Building Engineering Knowledge

## The one question
When one discipline changes a design decision, how do we know what else might be affected?

## What the reader must gain
Distinguish intent/hypothesis/requirement/interface/decision/evidence; explain typed relations and traceability; test impact across multiple disciplines.

## Opening engineering situation
Changing sensor position influences coverage, cable length, installation, electrical interface and a pending validation plan.

## Narrative arc
1. Start with a concrete decision or unexpected constraint, not a definition.
2. Show why the current working practice is insufficient for this question.
3. Introduce only the concepts needed to reason about it.
4. Let the reader examine a clear example and make a prediction/choice.
5. Interpret the outcome, including limitations and authority.
6. Connect the decision to the next engineering question.

## Primary learning experience
Interactive typed digital-thread graph with click-to-inspect semantics and affected/possibly affected nodes; text/table fallback.

## Reuse and migration from v1
Merge old Ch 2 and 3 plus source-view aspects of Ch 1 and Ch 11.

## Technical/editorial constraints
Canonical vs proposed vs recorded state must be visible. No graph infrastructure required: derive graph from fixtures. Never treat all links as proof.

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
The graph exposes relationships, but a hypothesis remains uncertain. What experiment would test it?
