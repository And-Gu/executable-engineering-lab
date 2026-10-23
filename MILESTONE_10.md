# Milestone 10 — Governance and Assurance

**Status:** Published through PR #22; release verified · **Version:** 0.1 · **Date:** 2026-10-23

## Objective and baseline

Teach a practicing engineer to connect a bounded claim to relevant controls, actual evidence, unresolved limitations and an accountable review decision. Distinguish an implemented check from a policy expectation, and both from approval or operational assurance.

SITE_SPEC.md, DEMONSTRATOR_SPEC.md and MILESTONE_01.md remain authoritative. Build on published Chapter 9 revision `807b935b4efe3a475abc85c35382f8df27cac268`. Preserve V0, canonical YAML, stable IDs, sampling method, model version, assertions and reference/proposal record semantics.

This is an educational assurance review using existing sources and checks. It introduces no governance integration, compliance engine or V4 capability. A green workflow and a geometric PASS remain insufficient grounds for operational acceptance.

## Chapter contract

**Title:** Governance and Assurance.

**Question:** “Which claim does this evidence support, and who must decide what remains acceptable?”

Target 800–1,200 words of main prose excluding exercise, source table and quiz. Start with the monitoring team's passing radius proposal and a request to accept it for operational use. Ask which narrower claim is supported and which assumptions prevent the broader conclusion.

1. Define claim, supporting reasoning, evidence, control and decision responsibility as explicit local teaching terms. Do not imply a standards-conformant assurance case or certification.
2. Separate an engineering requirement from a process expectation: the geometric criterion concerns modeled behavior; reviewing differences and identifying execution provenance concern how a proposal is assessed.
3. Map a small set of review expectations to actual repository mechanisms: schema/reference validation, model assertions, analysis provenance and human review. State what each mechanism checks and what remains outside it. Do not invent a policy artifact, approval event or enforced branch-protection rule.
4. Explain that source traceability makes evidence inspectable but does not establish its sufficiency. Inspect definitions, assumptions, version and execution scope before using a result to support a claim.
5. Compare the radius and threshold proposals under the existing radius-only task. Both may be structurally valid and geometrically passing, while their task compliance and justification differ. Keep browser proposals temporary and unapproved.
6. Review clearly hypothetical assurance gaps: a PASS without provenance; a valid proposal with no operational evidence; a request to relax the criterion; an expired artifact. Identify the missing support, responsible next decision and bounded claim still justified.
7. End with a short reasoning quiz and transition to configuration, reuse and evolution in Chapter 11. No Chapter 11 implementation is included.

Verify any general standards, governance or named-project claims against authoritative primary sources when writing. If Gemara is introduced as the curriculum's illustrative example, use its current official documentation to explain only its conceptual relevance and the boundary between describing controls and implementing/evaluating them. No dependency, schema mapping, claimed conformance or integration is authorized. Omit the example if it distracts from the engineering question; document that editorial choice.

## Exercise: build a bounded review argument

Provide a no-install manual review using native disclosures, actual source links and the existing proposal workspace. No fake approval dashboard or automated assurance score.

- State the narrow claim supported by the radius proposal under the fixed criterion and V0 assumptions. Follow the canonical need, requirement, scenario, model and test sources.
- Compare the threshold proposal's exact differences with the radius-only task. Explain why a successful calculation cannot justify the changed criterion or authorize acceptance.
- Use a readable table: review expectation, existing check/source, actual observation needed, limitation and next responsible decision. It is a teaching aid, not a new canonical policy or generated evidence record.
- Review the hypothetical gaps above. Label them clearly as designed cases, not actual missing logs or failed controls. Distinguish missing evidence from a measured failure and from a decision outside the task's authority.
- Inspect an actual locally generated record or available CI artifact. State what was actually inspected, which revision it covers and whether assertion execution is supported by separate logs. Do not imply that the site fetches historical artifacts.

Repository instructions should reuse the existing install/check/evidence/proposals path and include a short written review template: claim, source revision, evidence actually inspected, assumptions, counterarguments/gaps, responsible next review and unresolved decision. This records no approval and requires no canonical edits, push or publication.

## Boundaries

Keep static Astro/Pages, the approved palette, canonical source-derived values, shared calculations, keyboard/mobile usability, textual outcomes and honest no-JavaScript fallback. Register a complete Chapter 10 once in `site/src/data/chapters.ts` so Home/Learn gain it together. Add Chapter 9 continuation and source return only with the complete lesson.

No new policy schema, assurance artifact format, control evaluator, conformance badge, compliance score, automatic acceptance, branch-protection changes, Gemara/OSCAL integration, agent runtime, multi-sensor behavior, dynamics, graph infrastructure, backend or persistence. No delegation to agents is authorized by this plan. Existing repository restrictions remain in force.

## Acceptance gates

These are proposed checks, not completed outcomes.

| Gate | Observable outcome | Evidence |
| --- | --- | --- |
| M10-EDU-01 | Reader constructs a bounded claim and identifies gaps and responsibility | Complete lesson, manual review exercise and reasoning quiz |
| M10-CTL-01 | Expectations and actual mechanisms remain distinct | Source-linked review table; no fabricated policy enforcement or approval |
| M10-EVD-01 | Conclusions match definitions, provenance and actual execution | Record/log inspection and explicit missing-evidence statements |
| M10-SRC-01 | Standards/project claims are qualified and sourced | Authoritative primary references verified during writing, or documented omission |
| M10-UI-01 | Lesson, review cases, source links and ten-entry learning path work | Keyboard/mobile/base-path navigation and generated fallback review |
| M10-REG-01 | V0 and existing evidence/exercise semantics remain intact | npm run check, evidence and proposals; relevant regression smoke review |
| M10-PUB-01 | Reviewed lesson is publicly accessible | Exact main-revision CI/Pages success and public navigation/exercise/refresh checks |

Record V0 physical limits, artifact expiry/sign-in and incomplete accessibility/cross-browser coverage. This lesson cannot establish production-system assurance or certification.

## Delivery sequence

1. **Planning PR:** record Chapter 9 publication and propose this bounded scope. No empty chapter or runtime changes.
2. **Educational PR:** Chapter 10, source-linked manual assurance review, reproduction instructions, central registration and verification notes.
3. **Release after review:** merge, inspect exact-revision validation/Pages and smoke-test public Home/Learn/Chapter 9→10, source return, disclosures, proposals and refresh.
