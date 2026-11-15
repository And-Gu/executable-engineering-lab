# V3 Editorial Alignment Review — New Site Direction

**Status:** Proposed review baseline; **not approved chapter prose, not implementation authorization, not published**  
**Prepared:** 2026-11-15 · **Curriculum size:** 13 chapters (owner-approved)  
**Scope:** Reconcile the revised site identity and Chapter 1 reader pilot with proposed v3 content for Chapters 05–13. Preserve approved manuscripts 01–04 until their separate owner review.

## 1. Sources and precedence

Read all the sources, distinguishing their purpose:

1. [Site Direction](../SITE-DIRECTION.md) — revised public editorial purpose and approved front-page direction (PR #36).
2. [Chapter Style Guide](../CHAPTER-STYLE-GUIDE.md) — proposed visual and reading patterns. The Chapter 1 pilot implements only some of the suggestions.
3. [Current public Chapter 1 reader pilot](../../site/src/pages/learn/v2/01-new-engineering-paradigm.astro) — **published preview**, not the approved v3 manuscript; example and transition are deliberately different.
4. [Approved v3 manuscript index](manuscripts/INDEX.md) and Chapters 01–04 — owner-approved **editorial prose**, not yet public v3 routes.
5. [v3 master issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) — ongoing status and decisions.
6. [Engineering Visualization](../../docs/v3/ENGINEERING-VISUALIZATION.md) — proposed technical pedagogy and source → projection → view → evidence contracts (PR #34).
7. [External Research Index](../../research/INDEX.md) — research and proposed quotations; **all quoted text and substantive claims must be checked in original sources before publication** (PR #33).
8. [Existing v2 curriculum](../CURRICULUM-MAP.md) and [v2 briefs](../../chapters/) — historical/proposed alternative design, **not v3 approval**.

**Do not resolve disagreements by silently rewriting approved Chapters 01–04 or the published pilot.** This document is a planning proposal for future editorial decisions.

## 2. What the revised public site changes

**Core message:** "Software and AI change what we build. And how we build it."

**Two evolving systems:**
- **Product system:** intended use, functions, constraints, software, electronics, mechanics, potential product AI, operation and value.
- **Engineering environment:** people, methods, sources, models, data, tests, AI agents, workflows and delivery capability.

The defining idea is **co-evolution**. New product questions create needs for models and engineering tools; better engineering methods enable new product capabilities. The reader must see both sides through concrete findings and consequences, not repetitive dual-column boilerplate.

**The educational site is not a product-development tool.** It uses prose, conceptual workflows, static diagrams and narrowly scoped browser interactions where they teach a question. No custom engineering authoring GUI, mandatory coding lab, live agent runtime or full product controller implementation is required.

**Greenfield first, then evolution.** Start with uncertain system intent, concepts and different feedback cadences; later address changes to a working baseline. Preserve the v3 treatment of brownfield in Chapter 03 and practical continuous release in Chapter 10.

**Discipline differences are substantive.** Software and model revisions may iterate rapidly; physical prototypes, electronics and qualification have different rates and evidence needs. Avoid conflating software CI with product approval.

**AI in a product and AI used in engineering are different.** Chapter 01 reader preview makes that explicit. Continue this distinction in data, agent and integration chapters rather than turning all product AI into agentic engineering.

**Language and visual approach:** US English; dark sans-serif reading environment (Inter, IBM Plex Mono labels), gold for the engineering environment and teal for the product, meaningful accessible diagrams, text near the relevant visualization. Six introductory tiles are optional, not a required chapter template. Do not repeat generic AI caveats.

## 3. Real curriculum conflict (must be managed)

The **published v2 Chapter 1 preview** is titled *The New Engineering Paradigm* and directs readers toward v2 Chapter 02 *Planning Under Uncertainty*. The four **owner-approved v3 manuscripts** are:
01 *From Engineering Intent to Evidence*; 02 *Engineering Information Models*; 03 *Digital Threads and Knowledge Graphs*; 04 *Executable Engineering Models*.

Both remain valid assets with different roles; they are **not interchangeable**. In particular:
- The approved v3 manuscript 01 emphasizes intent, engineering information and engineering evidence.
- The published pilot emphasizes the new software/AI framing, greenfield equipment monitoring, product/environment co-development and discipline-specific feedback cadences.
- The planned v2 course uses a different 13-chapter order and distinct chapter titles. It cannot become an implicit replacement for owner-approved v3 without review.

**Interim recommendation:** Retain the approved v3 01–04 manuscripts untouched. Apply the latest site **style and framing** to proposed 05–13 briefs. Defer final title, chapter order, pilot reconciliation and bridges for 01–04 to the owner's explicit follow-up review. Do not modify the preview or published routes.

### Example conflict

The published front page and v2 reader pilot use a fictional **equipment condition-monitoring device**. The agreed v3 reference case uses a **four-way traffic intersection**.

Recommended provisional policy (awaiting explicit owner decision): use the intersection as the **single recurring, easy-to-understand system-model example** in v3 Chapters 02–13, while retaining the monitoring vignette as an **occasional complementary example** of product AI, electronics/mechanical interaction and physical evaluation. A dedicated reference overview introduces the intersection before detailed use. Do not build two parallel complete demonstration systems or overwrite the published pilot.

## 4. Chapters and distinct learning gains

| Ch. | Proposed v3 chapter | Unique reader gain | Main product/environment connection | Editorial status |
|---|---|---|---|---|
| 01 | From Engineering Intent to Evidence | Understand why engineering evolves and how intent matures to evidence | Product objective ↔ engineering capability | **Approved text; review deferred** |
| 02 | Engineering Information Models | Structure reusable, controlled engineering knowledge | Product architecture ↔ reusable engineering information | **Approved text; review deferred** |
| 03 | Digital Threads and Knowledge Graphs | Navigate meaningful cross-lifecycle relationships and change impacts | Product change ↔ context and information access | **Approved text; review deferred** |
| 04 | Executable Engineering Models | Examine model behavior and assumptions | Product behavior ↔ simulations and test methods | **Approved text; review deferred** |
| 05 | From Exploration to Engineering Definition | Progress from questions and option learning to controlled decisions and specifications | Concept choice ↔ planning next engineering work | **Title/direction approved; text review pending** |
| 06 | Engineering Data: From Measurements to Decisions | Curate and enrich raw observations into reusable decision inputs | Product observations ↔ engineering data pipelines and evaluation datasets | **v2 article exists; v3 adaptation pending** |
| 07 | Verification and Engineering Evidence | Understand deliverables, evidence and release/acceptance readiness across product lifecycle | Product acceptance ↔ verification and documentation capability | Pending |
| 08 | Agentic Engineering | Explain delegated AI work, agent mechanisms and reviewable increments | Engineering task ↔ agent workflow and bounded outputs | Pending |
| 09 | Agents and Engineering Context | Understand usable context, constraints and tool connections for agent work | Engineering change ↔ relevant authorized context and interfaces | Pending |
| 10 | Continuous Engineering | Design **and operate** an engineering factory for controlled, rapid releases | Product change cadence ↔ integration, checks, review and deployment capability | Pending |
| 11 | Governance and Assurance | Govern risk, authority, cyber/safety and changes through the lifecycle | Product integrity ↔ risk-based controls and evidence | Pending |
| 12 | Engineering Knowledge at Scale | Reuse engineering knowledge AND engineering capabilities across products | Product variants ↔ shared patterns, tests and agent knowledge | Pending |
| 13 | The Integrated Engineering Environment | Synthesize the complete two-system journey and feedback loops | Product lifecycle ↔ continuously improved engineering environment | Pending |

### v2 topics to preserve without expanding course count

| Distinctive v2 topic | Recommended v3 placement |
|---|---|
| Planning Under Uncertainty (v2 Chapter 02) | Chapter 05 — choosing next uncertainty/increment, revising decisions and roadmap (with an introductory pointer from Chapter 01 only after its later review) |
| Engineering in Small, Reviewable Increments (v2 Chapter 08) | Chapter 10 — engineering-factory delivery flow; support in Chapter 08 on bounded agent scope |
| Spec-Driven Development Without Waterfall (v2 Chapter 06) | Chapter 05 — **central** example of progressive specification, not a separate coding lab |
| Engineering Data enrichment (v2 Chapter 05) | v3 Chapter 06 — preserve/extend published article and separate its data-quality aim from Chapter 05 |
| Integrated AI-native engineering (v2 Chapter 13) | v3 Chapter 13, use the new site vocabulary and two evolving systems |

## 5. Visual design and engineering example contract

Use [Engineering Visualization](../../docs/v3/ENGINEERING-VISUALIZATION.md) for common rules. New briefs should specify a **learning question**, source/meaning, representation, reader interactions, accessibility fallback and validation boundaries.

| Visual | Educational responsibility |
|---|---|
| V02 | Multiple functional, structural and requirements views, optionally illustrated with SysML v2 |
| V03 | **Required interactive, typed knowledge graph**, with source links, baseline/proposed status and transparent change-impact mode |
| V04 | Simple bounded traffic state model and arrivals simulation, with understandable metrics |
| V05 | Concept-to-definition evolution, explicit decisions, open questions and next-slice scope |
| V06 | Raw → curated → annotated/enriched → derived data comparison, with provenance |
| V07 | Product deliverables/evidence map across disciplines |
| V08 | AI assistance vs fixed workflow vs agentic task, and bounded increment |
| V09 | Context assembly map / information and tool permission boundaries |
| V10 | Engineering factory design + operation and illustrated 24-hour eligible software release timeline |
| V11 | Risk/authority/evidence and change-integrity view |
| V12 | Reusable engineering knowledge and capability across product variants |
| V13 | End-to-end two-system story; prompt-based intent plus specialized visual review |

Do **not** infer any physical/test validity or simulated performance from an attractive diagram. Source and status should be available once per meaningful visualization. Avoid repeating disclaimers in every paragraph.

**Technical design dependency:** the current `site/src/layouts/ChapterLayout.astro` hardcodes the Chapter 1 in-page anchor list, and `CourseNavigation.astro` reads the proposed v2 curriculum. Before extending the dark chapter reader, design **chapter-specific navigation metadata and a single approved curriculum mapping** instead of copying these assumptions to Chapters 05–13. This is a future implementation/design brief, not permission to change Astro today.

## 6. Scope of drafting and review

For Chapters 05–13, use [proposed detailed briefs](CHAPTER-BRIEFS-05-13-2026-11-15.md). Their prose is **not yet an approved manuscript**.

Each future full draft should:
1. Start with a recognizable engineering question involving uncertainty, consequences or a decision.
2. Introduce a **new** concept rather than summarize earlier chapters.
3. Connect the product system and engineering environment naturally, without forcing duplicate sections.
4. Explain one illustrative event in the reference system with labeled conceptual/actual status.
5. Recommend one primary visualization with a clear teaching question, not a feature list of engineering-tool controls.
6. Close with a concrete new insight and purposeful transition.
7. Suggest a small number of source-checked further readings. A source candidate is not a quote approval.
8. Avoid repetitive AI caveats and unwarranted efficiency/cost assertions.
9. Preserve all approved v3 manuscripts and the existing v1/v2 Astro routes until explicit owner review and migration approval.

Draft **one chapter at a time** for owner review after the alignment decisions. Keep new drafts under a separate `project/v3/manuscripts/drafts/` namespace, not `site/src/`. Neither the technical reference nor this proposal authorizes publication.

## 7. Owner review questions (no implicit decisions)

1. **Anchor example:** Keep traffic intersection as v3 reference and equipment monitoring as a supporting vignette (recommended), or revise the course reference case?
2. **v3 vs pilot Chapter 1:** Preserve v3 Chapter 01–04 text until the separate agreed review, with the published v2 pilot kept as a layout/narrative reference (recommended)?
3. **Planning under uncertainty:** Integrate its distinctive contribution into Chapter 05, and review the Chapter 01/02 bridge later (recommended)?
4. **Hands-on scope:** Keep educational interactions only, not a required engineering tool, agent-runner or coding exercise (previously agreed)?
5. **Visual reader shell:** Reuse current dark design; wait for the separate typography/navigation pass before migrating chapter routes (recommended).

## 8. Change and publication boundaries

This document and its companion briefs are proposals only. They must not appear as the public course; they are visible in the GitHub repository. No existing approved 01–04 text or public site code should be edited by this planning PR.

Record reviewer decisions in [issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32), then update the appropriate future chapter briefs and only then create the full manuscripts.
