# Executable Engineering Lab v3 — Editorial Manuscript Index

**Status:** Editorial baseline, not published  
**Last confirmed:** 2026-11-15  
**Language:** American English  
**Tracking issue:** [#32 — v3 master plan](https://github.com/And-Gu/executable-engineering-lab/issues/32)

## Approved v3 manuscripts

These four files preserve the complete English **editorially approved** chapter drafts from the owner's review discussions. They are source manuscripts, **not copies of the previously published DMS-based Astro chapters**. They do not include the separately proposed interactive visualizations or other implementation specifications.

| Chapter | Manuscript | Editorial status | Notes |
|---|---|---|---|
| 01 — From Engineering Intent to Evidence | [Read Chapter 01](approved/01-from-engineering-intent-to-evidence.md) | **Approved** | Includes “We build the machine that builds the machine” and the two-system framing |
| 02 — Engineering Information Models | [Read Chapter 02](approved/02-engineering-information-models.md) | **Approved** | Includes the revised, non-repetitive information-quality treatment |
| 03 — Digital Threads and Knowledge Graphs | [Read Chapter 03](approved/03-digital-threads-and-knowledge-graphs.md) | **Approved** | Greenfield/brownfield explained; interactive knowledge graph is a separate **required visualization** in v3 |
| 04 — Executable Engineering Models | [Read Chapter 04](approved/04-executable-engineering-models.md) | **Approved** | Traffic signal-state and arrival-model learning case; simulation is an educational illustration |

**Scope of approval:** text accepted for the editorial v3 baseline. Approval does **not** mean the contents are published, that external references and quotations have been source-verified, or that planned diagrams/models/interactive features have been implemented or approved. Preserve the approved prose; propose substantive alterations for a separate owner review.

## Remaining chapters and decisions

The owner confirmed a **13-chapter curriculum** on 2026-11-11. The *direction and title* of Chapter 05, **From Exploration to Engineering Definition**, are accepted; the complete text has **not** been explicitly approved. Chapter 06 will cover **Engineering Data: From Measurements to Decisions**; a v2 article is published but has not become an approved v3 manuscript. Chapters 07–13 remain subject to manuscript review.

| Chapter | Planned v3 title | Manuscript status |
|---|---|---|
| 05 | From Exploration to Engineering Definition | Concept/title accepted; text under review |
| 06 | Engineering Data: From Measurements to Decisions | v2 article exists; v3 text not approved |
| 07 | Verification and Engineering Evidence | Pending |
| 08 | Agentic Engineering | Pending |
| 09 | Agents and Engineering Context | Pending |
| 10 | Continuous Engineering | Pending |
| 11 | Governance and Assurance | Pending |
| 12 | Engineering Knowledge at Scale | Pending |
| 13 | The Integrated Engineering Environment | Pending |

**Known handover to resolve later:** The approved Chapter 04 ends by introducing alternative strategies/experiment design for the next chapter, whereas the now accepted Chapter 05 direction is broader (moving from exploration to engineering definition). Preserve the approved text today; propose only a small transition edit for owner review when Chapter 05 is finalized.

## New site direction review — proposed only (2026-11-15)

A new public front page and **v2 Chapter 1 reader preview** were released in [PR #36](https://github.com/And-Gu/executable-engineering-lab/pull/36). Their title, example and Chapter 2 transition are not identical to the **approved v3 Chapters 01–04** archived here. This difference is documented, **not resolved by this planning PR**.

- [Full curriculum alignment review](../EDITORIAL-ALIGNMENT-2026-11-15.md) — scope, two-system framing, competing chapter maps, example choice and adoption questions.
- [Updated proposed briefs for Chapters 05–13](../CHAPTER-BRIEFS-05-13-2026-11-15.md) — distinct learning questions, narrative, product/environment linkage and educational visualizations.

These are **proposal documents, not approved manuscripts**. Do not edit approved Chapters 01–04 or published routes based only on these proposed briefs. The new public [site direction](../../SITE-DIRECTION.md) and [chapter reading guide](../../CHAPTER-STYLE-GUIDE.md) should inform drafts for the still-unapproved chapters.

## Mandatory reading path for editorial agents

1. Read **this index** to establish which chapters have owner-approved manuscripts; do not infer approval from older published pages or previously proposed planning files.
2. For editing or implementing v3 Chapter 01–04, read its **exact approved manuscript** under \`project/v3/manuscripts/approved/\`. These files take precedence over older DMS-based published pages **for v3 editorial text only**; existing engineering-model authority remains elsewhere.
3. Read [issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) for current scope, chapter order and open decisions.
4. Consult \`project/EDITORIAL-GUIDE.md\` for existing style conventions. The updated v3 editorial rule: explain important qualifications once when they affect reader understanding; do not litter the prose with generic AI caveats.
5. Consult \`research/INDEX.md\` and dated archival material **when present after its separate PR is merged**. Never silently promote a quote or source claim into published text without source verification.
6. Draft any proposed substantive change in a new review document or PR discussion. Never silently rewrite approved manuscript content or replace it with prior V0/v2 pages.
7. Keep these manuscripts outside Astro's \`site/src/\` and public assets. Do not register a v3 chapter as published, create a route or deploy until a distinct implementation/publication task is authorized.

## Non-publication and preservation

This archive resides in the repository's **\`project/\`** directory, outside Astro's configured source directory (\`site/src/\`); no v3 site routes, content entries or static assets are changed by the manuscript archival PR.

**Non-published means not rendered on the public Astro website; the repository is public and these files are visible on GitHub.** Do not place confidential content here. Existing twelve legacy published lessons, the separate v2 engineering-data article, links, experiments and tests remain unchanged.

This index is a **manual, deterministic entry point**, not a background search index or automatic semantic retrieval system.
