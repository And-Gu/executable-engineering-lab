# Independent Editorial and Curriculum Review Assignment — V3

> **Historical completed review assignment (13 original drafts).** The first independent review was delivered in [PR #42](https://github.com/And-Gu/executable-engineering-lab/pull/42). The new owner-approved course now has **14 revised draft manuscripts**. For a second independent review, use [issue #50](https://github.com/And-Gu/executable-engineering-lab/issues/50) and the [current fourteen-chapter review brief](INDEPENDENT-REVIEW-BRIEF-REVISED-14-2026-11-16.md), not the source paths/targets below.


**Status:** Review brief for a **separate reviewing agent**; not the review itself  
**Date:** 2026-11-16  
**Target:** All 13 full draft reader-facing chapters, written by a different agent/author  
**Source of truth:** `main` after the manuscript archival PR is merged; review only the full manuscript contents under `project/v3/manuscripts/drafts/`  
**Draft directory:** project/v3/manuscripts/drafts/  
**Index:** [Read all 13 manuscripts in order](../manuscripts/drafts/INDEX.md)  
**Course owner:** [Master issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32)

## Role and independence

You are an **independent course editor, learning-experience reviewer and systems-engineering critic**. Do not act as a copywriter continuing the manuscript author's work. Assess the complete material critically and identify weaknesses, redundancy, missing concepts, unsupported claims, poor sequencing and opportunities for a stronger learning experience.

You have full freedom to recommend **renaming, moving, merging, splitting or adding chapters**, including a different number than 13, *if the reader benefit justifies it*. The currently **owner-approved 13-chapter sequence remains the baseline** until a human accepts such proposals. Distinguish findings from recommendations; never silently change the approved curriculum.

**Do not edit the 13 manuscript drafts** as part of the independent review. Produce an independent Markdown report with prioritized findings, concrete proposed revisions and a proposed alternative table of contents *only if justified*. No site publishing, no rewriting approved historical source material, no changes to the canonical DMS V0 model.

## Read this material before reviewing

### Executable Engineering Lab — authoritative current plan

- [Current approved curriculum map](../../CURRICULUM-MAP.md): thirteen titles, four parts, approved by owner.
- [Site direction](../../SITE-DIRECTION.md): audience, engineering thesis, product vs engineering environment, greenfield-first and co-evolution.
- [Chapter style guide](../../CHAPTER-STYLE-GUIDE.md): dark reading layout, plain-English prose, early purposeful graphics, no mandatory six tiles.
- [Intersection reference](../REFERENCE-INTERSECTION.md): the **one recurring fictional V3 product example**, fixed by owner.
- [Chapter 01–04 editorial reconciliation](../CHAPTERS-01-04-EDITORIAL-REVIEW.md), [chapter 05–13 briefs](../CHAPTER-BRIEFS-05-13-2026-11-15.md) and [gap register](../EDITORIAL-ALIGNMENT-2026-11-15.md).
- [Engineering visualizations](../../../docs/v3/ENGINEERING-VISUALIZATION.md): typed graph, models, data and source/view semantics.
- [External research index](../../../research/INDEX.md): background only, historical quote labels; no unverified direct quotes.
- [Published Chapter 01 reader pilot](../../../site/src/pages/learn/v2/01-new-engineering-paradigm.astro): design/reading reference with an **older condition-monitoring** example, not the future V3 reference.
- [Four earlier approved source texts](../manuscripts/INDEX.md): preserve them as **previously accepted source prose**, not ready-to-publish chapters under the current titles.

### Document-as-Code Lab — real lessons to apply

Read the publicly accessible repository **And-Gu/document-as-code-lab** and especially:
- [CONTRIBUTING.md](https://github.com/And-Gu/document-as-code-lab/blob/main/CONTRIBUTING.md) — editorial voice, stable source identity, conceptual opening, reader-first examples, helpful visuals, no mandatory word quota or chapter formula.
- [Product/tutorial specification](https://github.com/And-Gu/document-as-code-lab/blob/main/spec/tutorial/02-DOCUMENT-AS-CODE-LAB-V1-SPECIFICATION.md) — audience promise, unique educational gain per chapter, browser-first core, questions rather than tool demos.
- [Design decisions](https://github.com/And-Gu/document-as-code-lab/blob/main/spec/tutorial/04-DESIGN-DECISIONS.md) — concise core chapters, appropriate depth in reference pages, meaningful knowledge checks, context rather than repetition.
- [Making Information Usable by AI Agents](https://github.com/And-Gu/document-as-code-lab/blob/main/docs/08-ai-native.md) — relevant project instructions, information architecture, terminology, decisions, sources and checks; distinguish source knowledge from permissions.
- [Beyond Slides: Presentations as Explorable Knowledge](https://github.com/And-Gu/document-as-code-lab/blob/main/docs/13-explorable-presentations.md) — knowledge versus narrative versus experience versus delivery, guided versus exploratory reading, progressive disclosure and evidence-linked visual explanation.
- [Information/learning evidence practice](https://github.com/And-Gu/document-as-code-lab/blob/main/spec/tutorial/working-methods-upgrade/verification/README.md) — checks and publication are distinct from actual reader learning evidence.

Lessons from previous owner feedback that must influence your critique:
1. Each chapter earns its place with **one central distinct insight**; reduce repetitious overview/technical detail.
2. Start with a situation and a **reader decision** before explaining terminology. Do not assume software development is the primary reader's activity.
3. One maintained source may produce multiple **derived views**. Every view must reveal how it answers a question; no decorative knowledge-graph screenshots, dashboards or abstract visuals.
4. Browser-first: no required repository clone, coding, tool installation or AI account for the main learning goals. Optional depth belongs in references.
5. A learning interaction should often follow **predict → inspect/act → observe → explain**. Do not invent quizzes simply to create “engagement.”
6. Use **progressive disclosure**, caption an engineering consequence, and provide an accessible text path. Avoid forcing six at-a-glance tiles or repeated visual sequences onto every chapter.
7. Keep distinctions precise where they matter: **source vs view, recorded check vs engineering conclusion, model vs physical system, review vs approval, agent context vs permission**.
8. Avoid formulaic AI-sounding prose, repetitive caveats, exaggerated claims, invented statistics and broad “inevitable future” language. Use active natural US English and cohesive paragraphs.
9. Keep the **presentation split**: Document-as-Code teaches presentation craft/HTML decks/scrollytelling/mindmaps; EEL teaches technical engineering visualization, knowledge graphs, models, simulations, linked data, evidence and decisions. Link rather than duplicate.

## Review tasks

### A. Whole-course structural and reader-outcome analysis

Read **all 13 drafts in order**, not snippets. Map the reader's new ability after each chapter and the question that leads to the next. Look for overlapping concepts, missing steps, premature technical depth, weak or disconnected transitions and the risk that the course becomes a repeated manifesto about AI. Check whether the **single intersection case** develops through meaningful, coherent events and whether both systems (product and engineering environment) evolve naturally.

Assess whether Part I–IV grouping helps learning. **Recommend topic movement, chapter addition/removal/reorder and a changed chapter count if it materially improves the experience.** Explain any proposed changes against the current approved 13-chapter baseline. Do not optimize for minimal change alone.

### B. Chapter-by-chapter review (all 13)

For every chapter, record:
- Core reader question and unique learning gain; is it clearly achieved?
- Strength of opening situation, real systems engineering relevance and reader audience fit.
- Narrative progression, coherence, language, excessive repetition, jargon and conclusions.
- Authenticity and limits of the intersection example; no fake actual engineering measurements/agent transcripts.
- Purpose and explanation of the proposed teaching visual or interaction.
- Important missed topic, misleading statement, unsupported claim or source needing verification.
- A **concrete improvement with priority** (not only generic advice).

### C. Language and writing audit

Audit natural American English, clarity for engineers/technical leaders, transitions, heading style, wordiness and jargon. Identify at least **8 specific sentences or passages** that should be rewritten, with original excerpt, suggested replacement and reason. Avoid turning editing into a list of generic “use active voice” comments.

### D. Engineering accuracy, evidence and education

Test distinctions between fixed-time and hypothetical adaptive control, the simplified model and real traffic control, simulation data and physical measurements, knowledge graph relations and claimed impact, CI vs release/deployment vs physical qualification, safety/cyber governance, AI in the engineering environment vs AI in the product, and agent-assisted work vs actual executed agent evidence.

Look for the gaps in a full life-cycle account: architecture, product integration, validation, deployment, user operation, maintainability and reuse. Determine whether the topic of **prompt-driven/spec-driven engineering** and the engineering factory are sufficiently developed without becoming tool instruction.

### E. Visual and interactive experience

Create a per-chapter proposal for one or zero **essential** explanatory interaction. Explain what the reader should be able to infer or decide, what the view draws from, and how to teach it without interactive code. Distinguish:
- Already implemented features in the published legacy site.
- Proposed V3 visualizations that are **not implemented**.
- Figures that can be static without reducing educational value.

For Chapter 03, preserve the **mandatory interactive typed knowledge graph** as a requirement in the current approved plan, but evaluate whether it is introduced and used pedagogically well. For Chapter 04, examine the bounded simulation and its intended learning outcome.

### F. Publication/editorial readiness

Compare drafts with the [current approved curriculum and site style]. List content that is already suitable for owner review versus content that needs technical research, a stronger scenario, a missing illustrative figure or source verification.

## Required deliverable

Prepare **one standalone Markdown report** at:

**project/v3/reviews/INDEPENDENT-FULL-COURSE-REVIEW-2026-11-16.md**

with these sections:
1. **Executive assessment** (strengths, risks, suitability; an explicit judgment about the full course).
2. **Proposed chapter structure** (retain or change count, titles and order; rationale and a before/after table if changes).
3. **Whole-course continuity map** and topic overlaps/gaps.
4. **13-row chapter-by-chapter review** with individual priority and concrete change.
5. **Language audit** with at least 8 before/after examples.
6. **Visual and learning-experience plan** per chapter (show evidence/source status, browser-first constraints).
7. **Engineering accuracy and references** requiring source checks.
8. **Prioritized editorial backlog** (P0 blockers, P1 high-value, P2 polish) and suggested review sequence.
9. **What should remain unchanged** (to protect validated design).
10. **Limitations of this review** (what you actually read, did not execute or could not confirm).

**The report must cite local file paths and chapter headings for each substantial finding.** It is a review proposal, not an approval. The reviewer is permitted to recommend a fourteenth chapter or other structural changes even though the owner must decide them. Create a review-only PR against the **manuscript branch** or a review branch, and link it to the manuscript PR. Do not modify the manuscript text automatically.

**Do not claim the independent review is complete until the separate agent's report actually exists and has been inspected.**
