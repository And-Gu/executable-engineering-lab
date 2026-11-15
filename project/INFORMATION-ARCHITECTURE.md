# Information architecture v2.0

## Routes (target, not existing)
Home: systems engineering practice changing through software, executable models and AI; clear routes into useful reading and examples.
Learn: 4 parts, 13 chapters, unique outcomes, progress markers without mandatory gating.
Lab: V0 coverage plus staged isolated D1+ experimental tools.
Explore: knowledge graph, architecture alternatives, roadmap, decision/evidence paths.
Reference: glossary, assumptions, canonical sources, example specifications, review artifacts, citations and reproducibility.

## Content types
- `project/` v2 strategic editorial/product specs.
- `chapters/` per-chapter implementation briefs.
- Existing `engineering/`, `schemas/`, `models/`, `scripts/` authoritative V0 definitions and computation.
- New experimental demonstrations isolated under a namespaced future directory agreed in PR, with versioned scenario fixtures.
- `site/src/data/chapters.ts` remains the published chapter registry; do not register incomplete/unpublished routes.
- Its separate `chapterPreviews` export holds complete local reader previews present in the build, explicitly distinguished from published articles. The first pilot is `learn/v2/01-new-engineering-paradigm/`; it does not replace the original Chapter 1.
- Historical milestone documents retained with historical labels.

## Information presentation
Reader-facing narrative displays decisions/diagrams before raw source.
Each interactive result links to an explanation of underlying inputs, assumption status and limitations.
Use 'canonical', 'proposed', 'hypothetical', 'recorded run', 'unverified', 'approved' as precise status terms; never conflate.
Preserve existing URL paths by redirects, aliases, or published fallback until migration acceptance; verify GitHub Pages base path.

## Navigation and deep links
Every page has clear location (part/chapter), forward/back, Learn index, source/reference links.
A migrated old slug should lead to appropriate new content or historical archived lesson; no 404s.
Never claim a scenario/agent run is live if it is a static replay.

The Chapter 1 pilot uses the shared four-part curriculum grouping, marks the current chapter, links available articles and labels planned chapters without dead links. On narrow screens, course navigation is collapsed. The next planned chapter links to its part on Learn. Other chapter layouts wait for pilot review.
