# Stage 0 + Stage 1 — Review report

## Completed in this package
- Compared GitHub `main` at `5087f980a181bb5f2a51856871068b062d7d3788` with the v2 specification package.
- Reviewed actual homepage, Learn index, chapter registry, legacy `SITE_SPEC.md`, `AGENTS.md` and existing 12 lesson routes.
- Preserved all v2 specifications, twelve briefs, agent roles and staged quality gates.
- Prepared complete replacements for `site/src/pages/index.astro` and `site/src/pages/learn/index.astro`.
- Created a reviewable transition status document.
- New pages deliberately label the redesigned chapters as planned and retain V1 chapter links; no fake completed features.

## Scope intentionally not executed
- Did not change GitHub `main`, create or merge PR, or publish.
- Did not modify original 12 chapters, chapter registry, source YAML, model, tests, or V0 evidence.
- Did not test Astro build/CI (container GitHub network and full checkout unavailable).
- Did not claim to have tested graphical mobile/browser behavior.

## Recommended adoption
1. Extract this package. Copy the `specification-pack/project`, `chapters`, `agents`, `templates`, `prompts` and implementation docs into a feature branch under suitable paths (with integrator reconciliation against existing docs).
2. Apply just the three files in `proposed-repository-files/` first.
3. Inspect and run full checks; open a **draft** PR for owner review.
4. Only after successful acceptance should new chapters and demonstrations be developed in subsequent PRs.

## Immediate decision
The homepage can be updated before chapter renumbering because it accurately presents future v2 direction while still linking to *actual published* lessons. Avoid replacing the chapter registry with unpublished new titles.
