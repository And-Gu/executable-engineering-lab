# Chapter 09 — Verification, Validation and Engineering Evidence
Status: v2 implementation brief (proposed)
Part: IV — Trust, Decisions and Evolution

## The one question
What exactly do our tests and experiments establish about system effectiveness?

## What the reader must gain
Distinguish software regression, model validation, requirement verification and operational validation; reason through claim/argument/evidence.

## Opening engineering situation
A geometry model passes an educational threshold in an exploratory proposal but lacks sensor characterization and field testing.

## Narrative arc
1. Start with a concrete decision or unexpected constraint, not a definition.
2. Show why the current working practice is insufficient for this question.
3. Introduce only the concepts needed to reason about it.
4. Let the reader examine a clear example and make a prediction/choice.
5. Interpret the outcome, including limitations and authority.
6. Connect the decision to the next engineering question.

## Primary learning experience
Claim–evidence builder with applicability and gap flags; keep original baseline engineering FAIL and software-test PASS distinct.

## Reuse and migration from v1
Refactor old Ch 6, 10 and Ch 1 evidence sections.

## Technical/editorial constraints
Evidence bound to revision, inputs, assumptions and method. Physical test not done means NOT VERIFIED, never green.

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
When evidence is partial, who has authority to accept risks and authorize the next step?
