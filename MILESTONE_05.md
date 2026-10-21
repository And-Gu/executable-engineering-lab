# Milestone 05 — Experimentation and Trade-offs

**Status:** Published through PR #12 on 2026-10-21; planning PR #11 merged · **Version:** 0.1 · **Date:** 2026-10-20

## Objective and baseline

Teach a practicing engineer to frame a comparison, control its variables, distinguish satisfying a criterion from selecting a preferred solution, and state what additional evidence a recommendation requires.

SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md remain authoritative. Build on Chapter 4's release `5c93196767d514bf5a4fc4bbe5bdb9cc09a0b80d`. Retain the V0 single-sensor model, fixed grid, canonical YAML, model version and reference test.

The curriculum's Chapter 5 working capability is architecture comparison. This increment deliberately teaches the prerequisites through **configuration comparisons within the existing architecture**. It does not claim to compare distributed architectures. V1 multiple sensors, footprint unions and blind spots remain a separate future scope decision; chapter numbering does not authorize them.

Chapter 4 explains how the calculation runs. Chapter 5 should explain how to design a useful experiment and qualify a decision made from several runs. Reuse existing single-sensor comparison rows rather than building a trade-study platform.

## Chapter contract

**Title:** Experimentation and Trade-offs.

**Question:** “Several configurations can pass. What would make one preferable?”

Target 800–1,200 words of main prose excluding the experiment and quiz. Introduce artifacts only when needed for the decision.

1. Start from the monitoring team's choice between candidate placements and assumed footprints under the same geometric criterion.
2. Define the comparison question, factors being varied, controlled inputs and measured response before running trials.
3. Distinguish a reference configuration, a candidate configuration and a different architecture. These trials are separate one-sensor runs, never combined sensors.
4. Explore controlled placement and radius trials below. Compare exact inputs, coverage estimate, margin and criterion outcome from the shared model.
5. Explain that passing is a feasibility observation under assumptions, while preference requires explicit objectives and justified constraints. Coverage margin alone is not a complete objective.
6. Discuss missing evidence and qualitative concerns without inventing cost, reliability, installation or physical-range numbers.
7. End with a short reasoning quiz and transition to verification and evidence quality, without implementing that later chapter.

Quiz should test why lowering the criterion spoils a same-requirement comparison; why changing two factors obscures attribution; why a larger modeled radius does not demonstrate an available sensor; and what evidence is missing from a proposed recommendation.

## Guided experiment

Reuse CoverageLab's existing record/reset/clear behavior and up-to-four temporary comparison rows. Keep area, threshold, grid and model fixed across recorded trials. Explain that reset restores current inputs while retaining recorded rows, and clear/reload discards the table as documented.

Use a small, explicit protocol with predictions before observations:

| Set | Controlled inputs | Changed factor | Question |
| --- | --- | --- | --- |
| Placement | Area, criterion, model, radius and y | x, first centered then near a boundary | How does clipping affect coverage under otherwise identical assumptions? |
| Assumed footprint | Area, criterion, model and center | Radius across two separate trials | Does the modeled margin change, and what would establish that a physical sensor can provide either footprint? |
| Decision review | Recorded definitions and results | No new numerical input | Which candidates meet the stated criterion, and what additional objectives/evidence would be needed to prefer one? |

Choose valid whole-unit trial inputs during implementation, document them in the exercise and derive all results from the existing calculation. Avoid promises of exact estimates, equal increments or globally optimal locations. A two-candidate observation does not prove a global optimum or robustness across untested scenarios.

Keep threshold changes in the existing proposal exercise. Link it as a contrast: relaxing the criterion changes the question rather than improving a configuration against the original criterion. Do not add another threshold control, combined-sensor view or approval mechanism.

Prefer predictions, recorded trials and a native disclosure explaining their interpretation. No new runtime metrics or ranking algorithm are required. If recording a result needs clearer context, make only a bounded presentation change using existing model outputs; do not generalize the experiment engine.

## Trade-off integrity

Separate what the model measures from what a reviewer still needs to know:

- Coverage estimate and margin are calculated geometric observations under V0 assumptions.
- Position and assumed radius are input choices, not prices or calibrated physical capabilities.
- Cost, installation access, reliability and actual sensing performance may matter, but have no numerical model here. Keep them explicit unanswered questions; do not assign arbitrary weights or scores.
- A passing trial neither approves a requirement nor establishes an optimal or operationally suitable design. Equal outputs do not establish equal real-world performance.

Use the term trade-off to explain a decision requiring competing objectives and evidence. Do not manufacture a numerical trade-off merely to make a chart. A legitimate outcome of this exercise is that the available model is insufficient to choose between candidates.

## Reproduction and source traceability

Preserve canonical source records and baseline reference assertions. Browser comparisons stay temporary and unapproved, with no saved CI evidence or source changes. All displayed numerical outputs must use the existing coverage/evaluator modules.

For repository reproduction, reuse the documented checkout/install/check/evidence commands and the existing radius proposal fixture path where applicable. State precisely which browser trials the committed fixtures reproduce: the radius proposal path does not reproduce arbitrary position edits automatically. Readers can reproduce placement calculations by executing the existing pure function with the explicitly recorded inputs in an isolated local exercise; do not claim TEST-COV-001 verified those modified inputs.

During implementation, supply a short executable repository example or documented command for the chosen placement/radius trials if the current instructions are insufficient. Import the existing functions, validate inputs, print actual results, and keep this example separate from canonical reference verification. Do not invent a retained artifact format or add a generic candidate schema unless the concrete exercise requires it.

Explain exact inputs, method/version, source revision, dirty status and execution context whenever generating a retained record. Existing proposal analyses remain separate from baseline verification; artifact expiry/sign-in limitations remain visible.

## Boundaries and acceptance gates

Keep static Astro/GitHub Pages, existing palette, keyboard controls, textual outcomes and readable narrow-screen comparisons. Add Chapter 5 navigation only with a complete lesson. No multi-sensor/union coverage, moving objects, probabilistic behavior, architecture search, optimization, invented cost model, agents, graph infrastructure, Gemara/OSCAL, backend, persistence or new external runtime service.

These are planned gates, not completed checks.

| Gate | Observable outcome | Required evidence |
| --- | --- | --- |
| M5-EDU-01 | Reader frames a controlled comparison and distinguishes feasibility, preference and suitability | Complete lesson, prediction exercise, interpretation and quiz review |
| M5-EXP-01 | Recorded trials use the same criterion/area/method and clearly identified changed factors | Shared-module inspection and browser protocol review |
| M5-REP-01 | Chosen trial inputs can be executed outside the browser with the existing pure functions | Reproducible repository example and comparison of actual outputs |
| M5-INT-01 | No unsupported cost/ranking/optimality claims or fabricated retained evidence | Editorial review and source inspection |
| M5-UI-01 | Comparison table, reset/clear semantics and quiz work with keyboard and mobile | Manual narrow-screen/keyboard review, stale-output checks and generated no-JavaScript fallback inspection |
| M5-REG-01 | Chapters 1–4, canonical definitions, reference verification and proposal path remain intact | Validation, tests, type checks, build, evidence/proposal generation and navigation smoke checks |
| M5-PUB-01 | Complete reviewed lesson is published at the Pages base path | Exact main-revision deployment/validation and public refresh/navigation/experiment checks |

Document observations and unresolved limitations separately from generated engineering evidence. Manual smoke review is not a comprehensive assistive-technology or cross-browser audit.

## Reviewable delivery sequence

1. **This planning PR:** record Milestone 4's release and propose this bounded comparison lesson. No runtime changes or empty Chapter 5.
2. **Educational vertical slice:** inspect existing comparison behavior, write the chapter/protocol/quiz, provide the minimal repository reproduction example, add only necessary presentation fixes and connect navigation. Test any new executable behavior meaningfully; do not add tests that mirror prose.
3. **Release after review:** merge, verify main-revision CI/Pages and publicly exercise the learning path and trial protocol.

This proposal preserves the existing architecture. Any V1 architecture-comparison capability needs its own explicit scope, model contract and independent tests.
