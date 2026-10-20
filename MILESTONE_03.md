# Milestone 03 — Digital Threads and Knowledge Graphs

**Status:** Plan accepted through PR #6; bounded trace preparation in review · **Version:** 0.1 · **Date:** 2026-10-20

## Objective and baseline

Teach a practicing engineer to follow an engineering question through typed definitions to a particular execution, then explain what a proposed change requires checking again. Chapter 2 establishes structured records and controlled proposals; Chapter 3 should make the reasoning across those records explicit.

SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md remain authoritative. Build on the published Milestone 2 release `7a5dc2b86c180500d1ecc162d93f0549309f6c1d`. This is a proposed delivery increment, not demonstrator V1. Retain the existing V0 single-sensor calculation, canonical YAML, stable IDs, model version and reference test.

For this lesson, a digital thread means the inspectable connections between intent, definitions and revision-bound execution records in this repository. A knowledge graph can be explained as typed entities and relationships; the chapter title does not require graph infrastructure. The existing contributor restrictions remain in force.

## Chapter contract

Target 800–1,200 words of main prose, excluding the experiment and short quiz. Start with: “A proposal now passes. Which earlier conclusions can we still use?”

1. Revisit the operational monitoring question and a changed criterion or radius.
2. Follow backward from an execution to its exact requirement, scenario, model and motivating need. Distinguish a stable ID from the evaluated definition/version.
3. Follow forward from a changed field to the calculation, evaluation and interpretation that depend on it.
4. Explain relationship roles using actual YAML field paths. A motivating need, a scenario binding and an execution's source revision have different meanings.
5. Explore the bounded experiment below, including an invalid reference and an explicit engineering-judgment question.
6. Explain that reachable records are candidates for review, not proof that every linked calculation must rerun or that the design is acceptable.
7. End with reasoning questions and a transition to future engineering automation, without implementing it.

Quiz prompts should distinguish threshold changes from radius changes, unchanged numerical output from applicable evidence, missing references from unjustified assumptions, and structural connectivity from a justified impact decision.

## Bounded trace view

Expose the existing relationship roles through a read-only table or small static diagram, with source links and readable text. Derive definition relationships from validated canonical sources and the existing manifest; do not maintain a second list of engineering edges or invent relationships for illustration. Reuse or extract the Chapter 2 relationship projection where useful.

Keep definition relationships separate from execution provenance. A record's ID alone must never imply an execution used its current contents. Show exact evaluated definitions, revision, working-tree status and context when an actual execution record is inspected. If no retained record is loaded, say so and link reproduction instructions; do not synthesize a historical result or silently use the newest revision.

Unknown IDs or unsupported relationships must produce useful validation errors. Do not silently omit them to produce a complete-looking thread. No generic traversal API, dependency registry, graph editor, graph database or new modeling language is required.

## Experiment: explain the impact

Reuse the existing isolated threshold and radius proposals and the same pure `analyzeProposal`, coverage calculation and evaluator. Keep browser copies temporary and unapproved; keep baseline reference evidence and proposal analyses distinct. Do not execute or label a proposal as TEST-COV-001 unless a future reviewed change actually introduces that behavior.

| Trial | Learner identifies | Required interpretation |
| --- | --- | --- |
| Threshold proposal, unchanged scenario | Changed criterion/statement/basis and affected evaluation | Coverage can remain identical; fresh evaluation must bind the changed definition. Relaxing a criterion does not improve the design. |
| Radius proposal, unchanged criterion | Changed scenario input and affected calculation/evaluation | Recalculate and evaluate; a modeled footprint does not establish physical sensor performance. |
| Broken motivating-need reference in a temporary copy | Structural inconsistency | Validation blocks analysis and clears stale results; restoring the link does not justify the requirement. |
| Assumption challenged in the narrative | An interpretation requiring engineering review | The same number may cease to support the intended conclusion. Do not fabricate a numerical adjustment for an unmodeled physical effect. |

Show field differences, typed source connections and an explanation of required checks together. Numerical outcomes must come from the shared model. Any coded impact explanation is deliberately limited to the supported threshold/radius/reference cases and tested against those field changes; it must not claim general impact completeness. Prefer a small explicit presentation over a reusable impact engine.

Let readers compare their reasoning with an explanation. Do not mark a design approved, optimal or operationally suitable. An unchanged field or identical result does not transfer old evidence to a newly evaluated definition automatically. A fresh proposal analysis remains an analysis, not approval or reference-test evidence.

Document a repository reproduction path using the existing proposal fixtures, `npm run check`, `npm run evidence` and `npm run proposals`. Preserve actual timestamps, revisions and dirty status. CI artifact expiration and possible sign-in remain visible limitations.

## Boundaries

- Canonical YAML remains the source of engineering definitions. Proposals cannot overwrite it in the browser.
- Reuse source validation, source links and the exact-definition proposal record format. Do not introduce a second coverage implementation, manually maintained PASS values or hand-entered execution evidence.
- Preserve Chapter 1/2 behavior and the static Astro/GitHub Pages base path, approved palette and accessible navigation.
- Publish Chapter 3 navigation only with the complete lesson and working exercise.
- No multi-sensor behavior, moving objects, probabilities, architecture search, AI agents, Gemara/OSCAL, graph infrastructure, backend, authentication, persistence or automated evidence invalidation/approval.

## Acceptance gates

These are planned checks, not completed verification claims.

| Gate | Observable outcome | Evidence required |
| --- | --- | --- |
| M3-EDU-01 | Reader traces an engineering question to definitions and an execution, and explains bounded change impact | Complete chapter, experiment and reasoning quiz review |
| M3-TRC-01 | Every displayed definition relationship has its actual role, field path and resolvable source | Source-derived projection checks, negative reference cases and base-path link review |
| M3-EXP-01 | Threshold/radius trials reuse existing analysis and explain different required checks | Meaningful tests of projection/interpretation and existing calculation regressions |
| M3-EVD-01 | Stable IDs, evaluated definitions and execution provenance remain distinct | Inspection of real generated records; no invented retained evidence or test-execution claims |
| M3-VAL-01 | Invalid proposals produce useful diagnostics without stale conclusions | Existing negative tests plus relevant browser checks |
| M3-UI-01 | Trace view, experiment and quiz work with keyboard and narrow screens | Manual keyboard/mobile review, readable diagram alternative and no-JavaScript fallback inspection |
| M3-REG-01 | Existing engineering contracts and Chapters 1/2 remain intact | Validation, tests, Astro/type checks, build, evidence/proposal generation and navigation smoke review |
| M3-PUB-01 | Complete chapter is published at the Pages base path after review | Main-revision deployment/validation and public deep-link, refresh, navigation and exercise checks |

Record observations and unresolved limitations separately from generated engineering evidence. Manual browser smoke checks must not be described as a comprehensive accessibility audit. Passing the geometric criterion remains insufficient for real-world suitability.

## Reviewable delivery sequence

1. **This planning PR:** record the Milestone 2 release and propose the Chapter 3 contract. No runtime changes or empty lesson.
2. **Bounded trace preparation:** inspect the existing relationship rendering and exact-definition records, extract only a necessary pure source projection, and test source roles, invalid references and supported change explanations. Keep it small; omit a new helper if current code already suffices.
3. **Educational vertical slice:** write Chapter 3, integrate the trace/experiment explanations, connect navigation and source views, document checks and propose publication. Split only if needed to keep review practical.

Implementation and publication are separate review steps. This proposal does not claim Chapter 3 exists or authorize later demonstrator capabilities.
