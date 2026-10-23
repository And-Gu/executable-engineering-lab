# V2 Stage 0 inventory and Stage 1 review notes
Observed main commit: `5087f980a181bb5f2a51856871068b062d7d3788`.

## Confirmed
- Existing Home: `site/src/pages/index.astro`.
- Existing learning index: `site/src/pages/learn/index.astro`.
- Published chapter list: `site/src/data/chapters.ts`, twelve entries.
- Legacy chapter sources: `site/src/pages/learn/01-*.astro` through `12-*.astro`.
- V0 canonical sources and models remain untouched by this PR.
- Existing `SITE_SPEC.md` and `AGENTS.md` are still operational/historical V0 guidance.

## Migration decisions
The new Home/Learn distinguish future titles from functional currently published lessons.
No legacy lesson path is removed or redirected in this PR. The new curriculum is a **proposal**, not a promise of implemented capabilities.

## Verification
Repository checks, CI and Pages smoke tests must be run against this new branch. The integrator must record actual outcomes and any limitations; proposal preparation does not count as verification.

## Follow-up
After this PR is reviewed, adopt the full v2 specification pack and begin Chapter 1 and Chapter 2 implementation in separate reviewable increments.
