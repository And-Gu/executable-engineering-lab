# V3 alignment to the current approved 13-chapter curriculum

**Status:** Proposed editorial integration, awaiting owner review; no chapter manuscript, runtime implementation or site publication is authorized  
**Date:** 2026-11-15  
**Reviewed starting point:** `project/CURRICULUM-MAP.md` and the published front page / Chapter 1 reader pilot (PR #36). **The user has clarified that the current 13-chapter plan is the reviewed and approved curriculum.**  
**Master tracker:** [Issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32)

## 1. Decision: one current chapter plan, not two competing curricula

The **current 13-chapter plan**, now reaffirmed by the owner, is the structure to carry into V3:

| Part | # | Current chapter title | Unique question |
|---|---:|---|---|
| I — Engineering in the Age of AI | 01 | The New Engineering Paradigm | What changes in the product and in the engineering environment? |
| I | 02 | Planning Under Uncertainty | What to explore now, and which capability is ready for commitment? |
| II — Building Engineering Knowledge | 03 | Engineering Knowledge as Code | How does engineering information become structured, reusable, inspectable and connected? |
| II | 04 | Learning Through Models and Prototypes | Which models and experiments reduce uncertainty and help engineers decide? |
| II | 05 | Engineering Data: From Measurements to Decisions | How can data be checked, annotated, enriched, visualized and reused for decisions? |
| II | 06 | Spec-Driven Development Without Waterfall | How can progressively refined specifications guide engineering changes without prescribing everything upfront? |
| III — Engineering with AI Agents | 07 | Directing AI Engineering Agents | How is useful tool-assisted, multi-step work delegated, bounded and evaluated? |
| III | 08 | Engineering in Small, Reviewable Increments | How can fast agent-enabled changes remain understandable and integrable? |
| III | 09 | Continuously Integrated Engineering | How do we design and operate an engineering factory for frequent, controlled change? |
| IV — Trust, Decisions and Evolution | 10 | Verification, Validation and Engineering Evidence | What deliverables and evidence establish product readiness and support lifecycle decisions? |
| IV | 11 | Governance and Engineering Authority | How are safety, cyber, non-functional constraints and agent authority governed? |
| IV | 12 | Managing Engineering Knowledge at Scale | How do organizations reuse knowledge, models, tests, context and engineering capabilities? |
| IV | 13 | The AI-Native Engineering Environment | How does the end-to-end product / engineering-environment system work together? |

**Do not use the old alternative V3 numbering** (Ch 02 Engineering Information Models / Ch 03 Digital Threads / Ch 04 Executable Models / Ch 05 From Exploration to Engineering Definition / Ch 06 Engineering Data / Ch 07 Verification / Ch 08 Agentic / Ch 09 Agent Context / Ch 10 Continuous Engineering, etc.) as the active sequence. Those discussions produced useful **content**, not a replacement for the current approved curriculum.

The earlier owner-approved long manuscripts (the four files under `project/v3/manuscripts/approved/`) remain preserved as **approved source prose from an earlier proposed chapter arrangement**, pending a new editorial mapping. Approval of their wording is not approval to reassign their headings, replace current Chapter 01, or force their previous chapter numbers onto the current plan.

The public dark Chapter 1 preview, `The New Engineering Paradigm`, is a live reader/presentation reference. It is not automatically a final V3 manuscript and does not silently supersede reviewed source prose. Review Chapter 01–04 for consistency before drafting the remainder.

## 2. Sources and publication boundaries

- [Current curriculum](../CURRICULUM-MAP.md): **owner-confirmed sequence and titles**.
- [Site direction](../SITE-DIRECTION.md): audience, mission, engineering thesis, greenfield-first and product/environment co-evolution.
- [Chapter style guide](../CHAPTER-STYLE-GUIDE.md): dark reading shell, teal/gold semantics, early meaningful graphics, no mandatory six-card intro.
- [Public Chapter 1 preview](../../site/src/pages/learn/v2/01-new-engineering-paradigm.astro): implemented reference for layout and a monitoring vignette.
- [Archived early V3 manuscripts](manuscripts/INDEX.md): previously approved text, mapping pending.
- [Research index](../../research/INDEX.md): external research and chapter quotation *candidates*; remap to current numbering and verify before publication.
- [Engineering visualization guide](../../docs/v3/ENGINEERING-VISUALIZATION.md): methods and components; its previous V02–V06 chapter mapping must be revised to current 03–05.
- [Proposed current-plan briefs for Chapters 05–13](CHAPTER-BRIEFS-05-13-2026-11-15.md).

**Scope:** Planning/editorial review only. No automatic migration of old URLs, no rewrite of approved source text, no new engineering authoring application, agent runner, Codespaces exercise, or site publication. Root `project/` and `research/` are non-published on the Astro website, although GitHub itself is public.

## 3. Findings missing from the current plan — prioritized gap register

| ID | Topic from earlier dialogue and research | Status of current plan | Where to integrate | Required editorial addition |
|---|---|---|---|---|
| G01 | Two systems co-evolve: product and engineering environment, "We build the machine that builds the machine" | **Introduced on Home/Ch 01**, not consistently carried forward | Every chapter, especially 02, 09, 13 | Show in **consequences**, not repetitive side-by-side boilerplate |
| G02 | Prompt-led/specification-driven engineering, not vibe coding | Only partially present as progressive spec | 03, **06**, 07, 13 | Prompts direct work; structured version-controlled specs persist; spec-to-engineering is broader than spec-to-code |
| G03 | Engineering information models, SysML primarily as visualization, multiple derived views | V2 Ch 03 focuses on connections, not the full model/view distinction | **03**, 04 | Functional, structural, behavioral, requirements, interface views; authoritative semantics; SysML not main authoring UI |
| G04 | Knowledge graph **as interactive educational visualization** with typed relations and change-impact | Proposed in older plan and visualization guide, not implemented | **03**, 12 | Mandatory educational graph with provenance, source links, status and a table/text fallback; no graph database requirement |
| G05 | Greenfield versus brownfield | Greenfield visible; brownfield evolution underdeveloped | 02, 03, 09, 13 | Early concept learning, then changes against controlled baseline; avoid two artificial lifecycles |
| G06 | Exploration → progressive specification without waterfall | Conceptual material exists, but previous v3 mapped it to a different chapter | **02** and **06** | Retain Planning Under Uncertainty as distinct Ch 02 and Spec-Driven Development as distinct Ch 06; do not collapse |
| G07 | Data quality, annotation, visualization, provenance, FAIR/reuse, data supporting product AI | Published separate v2 data article exists, but new v3 context unclear | **05**, 12 | Keep data enrichment as own chapter; distinguish observed, computed, synthetic, evaluated and qualified data |
| G08 | Agentic human collaboration, task contract, model/tool/context, authentic practice reports | Ch 07 broad proposal | **07**, 08 | Distinguish assistant, automated script, agent, AI in product; use real sourced cases or clearly labeled conceptual sequences |
| G09 | Agent context infrastructure: MCP, AGENTS.md, skills, authorized tools, context retrieval | Context risks being an orphaned former Chapter 09 | **07**, 08, 12 | Treat context as practical prerequisite for directing agents; preserve permissions/sources separately from task instructions |
| G10 | Small reviewable increments, agent-measured Definition of Done, integration across disciplines | Partially proposed in current Ch 08 | **08** | Preserve Ch 08 as its own topic; explain scoped changes, reviews, decision records and how deliverables mature |
| G11 | Engineering factory **design AND operation**; 24-hour eligible software change target | Ch 09 currently mostly CI and readiness | **09** (+ 10/11) | Target drives product interfaces, test automation, docs, release criteria, monitoring and rollback; distinguish CI, delivery, deployment and physical qualification |
| G12 | Whole-product lifecycle deliverables, safety/cyber/manuals, evidence and assurance | Ch 10 focused on claim/evidence, delivery categories too narrow | **10**, 11 | Broaden beyond code/test results to complete deliverable classes and verification/validation |
| G13 | Governance, agent/model provenance, permissions, hardening, cybersecurity, operational robustness | Ch 11 mostly agent authority | **11** | Include risk-based security/safety/non-functional integrity through design, change and release |
| G14 | Organizational reuse of engineering knowledge **and** the engineering factory capability | Ch 12 focuses on configuration and evidence | **12** | Add reusable models, evaluations, interfaces, tests, agent skills, ontologies/OSLC and knowledge stewardship |
| G15 | Presentation as explorable knowledge vs engineering-specific visualization | **Split agreed**, but no cross-link/educational guidance in chapter map | **03–05**, **13** | Doc-as-Code Lab: storytelling, HTML/reveal.js, mindmaps, dashboards, presentations; EEL: SysML, graphs, model/state/data/impact visualizations. Avoid a 14th chapter |
| G16 | Prompt-based interaction, generated interfaces and coexistence with specialized GUIs | Fragmentary | **13** with links to 06–08 | Show **intent → agent/tool execution → visual review**. Not "all GUIs disappear" |
| G17 | Research foundation and a source-checked quotation candidate for every chapter | Research archived and indexed to **old alternative chapter numbering** | All 01–13 | Remap `research/INDEX.md`, verify quotes at primary sources and attach few relevant further readings |
| G18 | Two reference examples conflict: public equipment monitoring vs planned traffic intersection | **Open editorial decision** | 01–13 reference strategy | Prefer a single main red thread, with limited complementary example; no replacement of public pilot without review |
| G19 | Consistent v3 navigation and source authority | `CourseNavigation.astro` uses current V2 data; `ChapterLayout.astro` hardcodes Ch01 anchors | Future implementation of 02–13 | One current curriculum registry; per-chapter anchor metadata; keep published legacy routes and current reader pilot intact |
| G20 | Educational content, not a new engineering tool | Earlier proposals sometimes assumed an agent coding lab | All visual/interactive specs | Purposeful diagrams/simulations only; no mandatory reader coding, live agent or engineering IDE |

### Highest-value updates for the next writing phase

**First: 01–04 alignment check** with current chapter titles, model/example choice, visual conventions and transitions. Preserve their earlier accepted text as source material; extract relevant passages rather than transplant entire chapters under incorrect headings.

**Second: Chapters 05–13 briefs** under the **current approved** numbers and educational contributions; use [the refreshed briefs](CHAPTER-BRIEFS-05-13-2026-11-15.md).

**Third: remap the research index and visual IDs** so agents no longer associate Ch 03 with a standalone "Digital Threads" chapter, Ch 06 with "Engineering Data", or Ch 09 with "Agent Context" under the current curriculum.

## 4. Presentations and visualizations — previously agreed scope

Two related but distinct tutorials:

**Document-as-Code Lab** is the home for *presentations as explorable knowledge*: audience-oriented narrative, scrollytelling, HTML decks/reveal.js, mind maps/Markmap, dashboards, reusable presentation code and responsive publishing. Reference its **Beyond Slides** bonus chapter where appropriate.

**Executable Engineering Lab** shows how engineering understanding and decisions can be improved by purposeful technical views: system context, SysML where valuable, process flows, state machines, knowledge graphs, linked data charts, simulations, impact/assurance views and integrated engineering maps. Content selection starts with **which engineering question a view answers**, not an inventory of drawing libraries.

Use `docs/v3/ENGINEERING-VISUALIZATION.md` as the technical visualization contract, but **remap its chapter references to the approved sequence**. No general presentation training or additional Ch14 in this site.

## 5. Proposed checks for Chapters 01–04 before drafting 05–13

| Ch | Current title | Existing new-site material | Specific review question |
|---|---|---|---|
| 01 | The New Engineering Paradigm | Public pilot in dark chapter reader | Does it establish enough scope, product/environment development, AI in product versus agents and later lifecycle? What of old approved *Intent to Evidence* prose should be reused? |
| 02 | Planning Under Uncertainty | V2 brief; no completed new reader | How do uncertainty, product roadmap, engineering-environment backlog, physical lead times and iterative learning fit together? Preserve this as its own chapter |
| 03 | Engineering Knowledge as Code | V2 brief, approved alternative text about info models and digital threads | Merge useful explanations of information models, spec-to-engineering, digital threads/knowledge graph into coherent distinct learning outcome; preserve mandatory interactive graph requirement |
| 04 | Learning Through Models and Prototypes | V2 brief, approved alternative text about executable models | Add model fidelity, behavioral/state models, optional controlled simulation, two engineering cadences and model limitations; avoid being a traffic-controller coding tutorial |

**Only after review** should new full manuscripts be drafted for Ch 02–04 or any existing approved passages be modified.

## 6. Site design / implementation readiness (not implementation authorization)

- **Current style:** dark sans-serif reader shell, gold engineering environment and teal product system when used semantically; strong prose column; one early consequential visual.
- **Chapter 1 pilot:** `/learn/v2/01-new-engineering-paradigm/` is a published reader preview, not a complete final v3 course release.
- **Component dependency:** `site/src/layouts/ChapterLayout.astro` currently hardcodes Chapter 1 "on this page" anchors. Make navigation data-driven before reusing layout for later chapters.
- **Registry dependency:** course navigation currently imports the v2 curriculum; treat the approved current 13-chapter map as the primary planning authority, with a single versioned presentation registry at migration.
- **Non-publishing status:** this PR must not modify `site/src/`, `research/` runtime inputs, historic manuscript text, release workflows, or published pages.

## 7. Decisions for subsequent review

1. Which primary example to retain as the common reference across 13 chapters (traffic signals vs equipment monitoring), and which is supporting? Previous dialogue favored traffic signals for simple system models, public Chapter 1 uses monitoring.
2. Which **parts** of the early approved prose should be incorporated into each **current** Chapter 01–04, without declaring older titles/numbering canonical?
3. Which visualizations are essential to teach the chapter versus optional depth?
4. Which chapter quote candidates can be verified and approved from original sources? (Do not treat research archive as verified quotations.)

**No decision to publish or rewrite existing approved copy is made by this alignment proposal.**
