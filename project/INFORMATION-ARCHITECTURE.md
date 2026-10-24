# Information architecture v2.0

## Routes (target, not existing)
Home: compelling AI-native, multidisciplinary engineering thesis plus first-step CTA.
Learn: 4 parts, 12 chapters, unique outcomes, progress markers without mandatory gating.
Lab: V0 coverage plus staged isolated D1+ experimental tools.
Explore: knowledge graph, architecture alternatives, roadmap, decision/evidence paths.
Reference: glossary, assumptions, canonical sources, example specifications, review artifacts, citations and reproducibility.

## Content types
- `project/` v2 strategic editorial/product specs.
- `chapters/` per-chapter implementation briefs.
- Existing `engineering/`, `schemas/`, `models/`, `scripts/` authoritative V0 definitions and computation.
- New experimental demonstrations isolated under a namespaced future directory agreed in PR, with versioned scenario fixtures.
- `site/src/data/chapters.ts` remains the published chapter registry; do not register incomplete/unpublished routes.
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
