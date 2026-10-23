# Milestone 11 — Engineering Knowledge at Scale

**Status:** Plan accepted through PR #23; Chapter 11 ready for review, publication pending · **Version:** 0.1 · **Date:** 2026-10-23

## Objective and baseline

Teach a practicing engineer to preserve engineering meaning when definitions are reused and revised: identify a coherent configuration, distinguish identity from revision, and assess whether evidence applies to a changed candidate.

SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md remain authoritative. Build on Chapter 10 release `db7a0e9529063c6348098cc4367d151d79a0cf1a`. Preserve V0, canonical YAML, stable IDs, calculation method/model version, assertions and reference/proposal record semantics.

“Scale” describes the review problem as engineering knowledge grows. This educational increment does not implement a large repository, configuration-management platform or performance benchmark. Use the current small demonstrator to make the reasoning inspectable.

## Chapter contract

**Title:** Engineering Knowledge at Scale.

**Question:** “Which definitions belong together, and when can their evidence be reused?”

Target 800–1,200 words of main prose excluding source tables, exercises and quiz. Start with someone reusing a passing result in another proposal because the requirement ID is unchanged. Ask which configuration actually produced the result.

1. Define configuration and baseline as local teaching terms for an identified coherent set of definitions, distinct from an approved product baseline. A commit identifies repository state; a dirty checkout may include additional uncommitted changes. Neither a branch name nor model version alone identifies every input.
2. Follow the existing need, requirement, scenario, model/test registration and actual analysis definitions. Distinguish stable identity, source revision, model version and execution metadata.
3. Explain reuse of shared implementation versus reuse of evidence. Reusing the pure coverage function avoids a second formula; reusing a previous result requires a justified applicability argument about definitions, method, assumptions and claim.
4. Compare existing isolated radius and threshold proposals. Do not combine definitions from separate candidates or attach canonical evidence to a changed candidate as though they were the same configuration.
5. Review change impact through actual source fields and typed relationships. Validation can detect broken references but cannot establish that a changed requirement is justified or that historical evidence remains sufficient.
6. Explain how explicit sources, differences, provenance and review responsibility help another engineer continue the work. A larger number of links does not prove completeness or consistent meaning.
7. End with a short reasoning quiz and transition to the integrated end-to-end exercise in Chapter 12. Do not implement Chapter 12 in this increment.

Use repository facts and explicit teaching conventions. Verify any broader configuration-management, standards or named-project claims against authoritative primary sources during writing; do not claim formal process conformance or industrial-scale performance.

## Exercise: review a reuse decision

Provide a no-install manual review using actual source links, native disclosures and the existing proposal workspace. No new configuration selector, version resolver, database or calculation.

- Identify the baseline definitions and their source roles. Explain what the build-time source view identifies and why it may differ from an older execution.
- Try the radius proposal and inspect exact differences and proposed definitions. Reset, try the threshold proposal, and explain why identical coverage does not imply identical evaluation meaning.
- Break and restore a reference. Distinguish structural consistency from evidence applicability and operational justification.
- Review clearly hypothetical cases: an old PASS with an unchanged ID but changed criterion; a source bundle mixing revisions; a dirty checkout attributed only to HEAD; a shared model used for a new scenario. Identify what must be inspected or rerun without fabricating an execution or assuming a safe reuse decision.
- Inspect an actual reference/proposal record or available CI artifact. Compare its evaluated definitions, calculation and provenance to the intended claim. Record missing information rather than treating the current source view as historical truth.

Add concise repository instructions reusing npm ci, npm run check, npm run evidence and npm run proposals. A written review template should identify the intended claim/configuration, source revision/dirty state, reused material, actual differences, evidence inspected, applicability reasoning and remaining checks. It creates no new evidence schema or approved baseline and requires no canonical edits, push or publication.

## Boundaries

Keep static Astro/Pages, palette, source-derived values, stable IDs, shared calculation and existing evidence semantics. Register only a complete Chapter 11 in site/src/data/chapters.ts so Home and Learn gain it together. Connect Chapter 10 continuation and source return only with the lesson.

No branch/tag automation, historical-source retrieval, new versioning scheme, configuration registry, variant engine, migrations, graph infrastructure, multi-sensor model, dynamics, optimization, agent runtime, governance integration, backend or persistence. Do not change canonical definitions or add demonstration duplicates merely to illustrate scale. This plan does not authorize delegation to agents.

## Acceptance gates

These are proposed checks, not recorded outcomes.

| Gate | Observable outcome | Evidence |
| --- | --- | --- |
| M11-EDU-01 | Reader identifies a coherent configuration and distinguishes implementation reuse from evidence applicability | Complete lesson, manual reuse review and quiz |
| M11-SRC-01 | Identity, revision, model version and source roles remain explicit | Canonical imports/source links and actual record inspection |
| M11-EVD-01 | Reuse conclusions match evaluated definitions and execution scope | Written comparison, explicit gaps and no fabricated historical execution |
| M11-UI-01 | Eleven-entry learning path, exercise and source navigation are usable | Keyboard/mobile/base-path and generated fallback review |
| M11-REG-01 | Existing definitions, model, assertions and proposal semantics remain intact | npm run check, evidence and proposals; relevant regression smoke checks |
| M11-PUB-01 | Reviewed lesson is publicly available | Exact main-revision CI/Pages success and public navigation/exercise/refresh checks |

Record V0 numerical/physical limits, historical artifact expiry/sign-in and incomplete accessibility/cross-browser coverage. A coherent configuration and successful tests do not establish operational suitability.

## Delivery sequence

1. **Planning PR:** record Chapter 10 publication and propose this scope. No empty lesson or runtime change.
2. **Educational PR:** Chapter 11, source-linked configuration/reuse exercise, repository review instructions, central registration and verification notes.
3. **Release after review:** merge, verify exact-revision validation/Pages and publicly smoke-test Home/Learn/Chapter 10→11, source return, proposals, disclosures and refresh.
