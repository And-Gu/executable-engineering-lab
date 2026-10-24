# Chapter 11 — Managing Engineering Knowledge at Scale
Status: v2 implementation brief (proposed)
Part: IV — Trust, Decisions and Evolution

## The one question
Can we reuse a conclusion when requirements, suppliers and configurations have evolved?

## What the reader must gain
Distinguish identity, revision and configuration; assess evidence applicability, variants and supplier/interface mismatches.

## Opening engineering situation
Compare two DMS variants with different electronics revision, mount configuration and algorithm version.

## Narrative arc
1. Start with a concrete decision or unexpected constraint, not a definition.
2. Show why the current working practice is insufficient for this question.
3. Introduce only the concepts needed to reason about it.
4. Let the reader examine a clear example and make a prediction/choice.
5. Interpret the outcome, including limitations and authority.
6. Connect the decision to the next engineering question.

## Primary learning experience
Variant comparison with explicit dependency/re-use warnings and source snapshot links.

## Reuse and migration from v1
Refactor old Ch 11 and Ch 3 chain reasoning, remove duplicate disclaimer passages.

## Technical/editorial constraints
Do not imply scale benchmarks without dataset; explain where physical hardware configuration control differs from Git commit.

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
With planning, modeling, agents and evidence connected, what does the full engineering workflow look like?
