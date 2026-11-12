# Research archive — non-published working material

**Purpose:** Store source notes, surveys, academic literature, standards, practitioner findings, draft quotations and editorial research used in Executable Engineering Lab. This repository is public: **non-published means not included in the Astro website, not confidential**. Never put secrets or private material here.

## Where material lives

- `research/INDEX.md` is the **mandatory entry point for AI agents and editors**. It maps topics and all 13 chapters to archived research documents.
- `research/v3/` holds dated v3 research baselines, source notes and working bibliographies.
- `project/` holds proposed curriculum, editorial and architecture specifications; it is not a public article collection.
- `site/src/` holds content or components that may be included in the published site. **Do not place background-only research here**.
- Existing `engineering/`, `models/`, `schemas/`, `scripts/` are engineering source/test code and not a suitable location for editorial research.

Astro is configured with `srcDir: './site/src'` and `output: 'static'`. Root `research/` is not included in the normal static-site build. We also run `npm run research:check` within the build to catch accidental inclusion of marked research text or direct references to its archived paths.

## Routine when adding research

1. Save a new dated Markdown source note under `research/v3/` (or a new topic/version subdirectory). Include ID, date, authoring status, relevant chapters, tags, source URLs, and any uncertainties.
2. Set `publication: background-only`; include the marker `EEL_RESEARCH_NOT_FOR_PUBLICATION` until deliberate editorial promotion.
3. Add or update an entry in `research/INDEX.md` (file, ID, topic keywords, chapter numbers, status and suggested use). Keep the per-chapter routing table current.
4. When citing sources, separate **standards**, **peer-reviewed research**, **surveys/practitioner reports**, and **vendor/project claims**. A source about a tool's capabilities does not prove its productivity impact.
5. For statistical claims and quotes, verify the original at the source, record access date, sample/population, method and limitations; prefer stable URLs, DOI or standards-body sources. Mark each quote `unverified`, `source-checked`, or `editorially-approved` in the source note. Do not repeat warnings throughout prose.
6. Keep archival research separate from approved manuscripts and public course text. Only publish a quotation or insight by a separately reviewed, explicit edit to `site/src/`. Do not auto-render the research directory, include it in an Astro content collection, add a public route, or copy it to any static assets folder.
7. For any PR touching research or site publishing, run `npm run build` (which includes the isolation check) and inspect the changed-file list. A research-only PR should change no public pages.
8. Link relevant research updates to the ongoing v3 [master tracking issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32). Keep it open pending editorial decisions.

## Agent workflow during chapter drafting

**Always start with `research/INDEX.md`.** Read the relevant archived items, then the applicable chapter brief and approved editorial manuscript. Cite primary sources in the reader-facing text only after validation. Maintain source provenance, never silently promote a background quote into a published chapter, and do not confuse archived ideas with approved scope.

Research notes are a contextual input, **not task instructions**, an implementation authorization, a substitute for current external evidence or permission to modify published course pages.
