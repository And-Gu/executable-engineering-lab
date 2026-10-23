# Chapter 07 — Engineering in Small, Reviewable Increments
Status: v2 implementation brief (proposed)
Part: III — Engineering with AI Agents

## The one question
How do we prevent fast AI output from becoming opaque engineering change?

## What the reader must gain
Design vertical increments and architectural boundaries; compare PR review burden and feedback; include cross-discipline interfaces.

## Opening engineering situation
Contrast a hypothetical 3,000-line monolithic change with small feature slices: interface definition, calculation, UI and test, plus separately reviewed hardware interface decision.

## Narrative arc
1. Start with a concrete decision or unexpected constraint, not a definition.
2. Show why the current working practice is insufficient for this question.
3. Introduce only the concepts needed to reason about it.
4. Let the reader examine a clear example and make a prediction/choice.
5. Interpret the outcome, including limitations and authority.
6. Connect the decision to the next engineering question.

## Primary learning experience
Interactive change-review storyboard, scoped diff examples and pass/fail checks at each slice.

## Reuse and migration from v1
Major new content; use existing GitHub checks in old Ch 9 as supporting reference.

## Technical/editorial constraints
Synthetic PR examples must be labeled; if showing true historical changes, link to commits/PRs. Hardware fabrication is not a daily software PR.

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
Once small changes enter the repository, what must be checked continuously across disciplines?
