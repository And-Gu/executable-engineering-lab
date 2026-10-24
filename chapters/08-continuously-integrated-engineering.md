# Chapter 08 — Continuously Integrated Engineering
Status: v2 implementation brief (proposed)
Part: III — Engineering with AI Agents

## The one question
What can be continuously integrated when physical products evolve on different timescales?

## What the reader must gain
Differentiate source validation, model/test CI, software releasability, electronics/mechanical baselines and physical qualification; understand readiness by claim.

## Opening engineering situation
DMS model and software pass CI; mechanical mount unresolved; electronics interface checked; environmental test not yet run.

## Narrative arc
1. Start with a concrete decision or unexpected constraint, not a definition.
2. Show why the current working practice is insufficient for this question.
3. Introduce only the concepts needed to reason about it.
4. Let the reader examine a clear example and make a prediction/choice.
5. Interpret the outcome, including limitations and authority.
6. Connect the decision to the next engineering question.

## Primary learning experience
Engineering readiness dashboard with distinct statuses and evidence provenance; genuine CI links for V0.

## Reuse and migration from v1
Develop old Ch 9; fold in verification/check distinction from old Ch 6.

## Technical/editorial constraints
Never fake green checks. UI must separate synthetic illustrative states from actual recorded CI. Different lead times explicit.

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
A green dashboard is not yet proof that the operational need is satisfied. What evidence is sufficient?
