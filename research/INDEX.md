# Research index — Executable Engineering Lab v3

<!-- EEL_RESEARCH_NOT_FOR_PUBLICATION -->
**For editors and AI agents.** Start here before drafting, revising or sourcing a v3 chapter. This file is in the GitHub repository but **not published on the Astro site**.

**Version:** 2026-11-15 (curriculum mapping updated) · **Curriculum:** current owner-approved 13 chapters · **Status:** background material awaiting source and quotation verification.

## Source register

| ID | Background document | Scope / tags | Status |
|---|---|---|---|
| EEL-R-2026-11-12-V3 | [External Reference and Research Baseline](v3/2026-11-12-external-research.md) | Linux Foundation / AAIF, MCP, OpenSpec, GitHub Spec Kit, SysML, OSLC, digital thread, agent use, engineering data, DORA, GUI vs prompt, source quotes | Research proposal; factual and quote verification before citation |

**Reference decision (2026-11-15):** The owner selected the fictional **four-way traffic intersection** as the sole recurring V3 system case; see [reference contract](../project/v3/REFERENCE-INTERSECTION.md). The already published condition-monitoring Chapter 01 preview and legacy DMS V0 lab remain unchanged; do not make them a second V3 case. Research references should support the **engineering claims**, not supply unverified intersection measurements or generic quotation decoration.

## Routing by the current approved 13-chapter curriculum

**Owner clarification 2026-11-15:** The chapter sequence and titles in `project/CURRICULUM-MAP.md` are approved. This index supersedes an earlier alternative V3 numbering. The source archive's **13 quotation candidates still show their original chapter numbers**; map those quotes by **topic and source**, never by their old numerical labels, and verify exact wording and attribution before use.

| Current chapter | Search themes and best source types | Older candidate quote/topic to consider |
|---|---|---|
| 01 — The New Engineering Paradigm | Two co-developing systems, AI in product vs agent work, organizational AI effects, DORA, INCOSE scope | Previously Ch 01: DORA amplification |
| 02 — Planning Under Uncertainty | Vision/themes/initiatives, exploration vs commitment, uncertainty-driven learning, stage-specific cadences | **New source/quotation needed**; no existing direct match |
| 03 — Engineering Knowledge as Code | Versioned specs, open information models, SysML views, digital threads, linked data, interactive knowledge graph | Previously Ch 02 SysML + Ch 03 NIST digital thread |
| 04 — Learning Through Models and Prototypes | MBSE, model fidelity, simulation, experiments, prototypes, physical testing | Previously Ch 04 INCOSE models |
| 05 — Engineering Data: From Measurements to Decisions | FAIR, provenance, annotation, enrichment, visual and statistical review, reusable data | Previously Ch 06 FAIR |
| 06 — Spec-Driven Development Without Waterfall | OpenSpec, GitHub Spec Kit, spec-to-code vs spec-to-engineering, progressive specs, feedback loops | Previously Ch 05 OpenSpec |
| 07 — Directing AI Engineering Agents | Anthropic agent observations, Linux Foundation AAIF, task contracts, tools, human/agent roles | Previously Ch 08 Anthropic and Ch 09 context/AAIF |
| 08 — Engineering in Small, Reviewable Increments | PR review quality, DoD, architectural scope, agent-generated change studies, cross-discipline increments | **New source/quotation needed**; evaluate PR mining papers and DORA |
| 09 — Continuously Integrated Engineering | Factory design **and** operation, DORA, CI/CD, platform engineering, eligible 24-hour release goal, physical cadences | Previously Ch 10 DORA lead time |
| 10 — Verification, Validation and Engineering Evidence | NASA IV&V, INCOSE V&V, product lifecycle deliverables, evidence applicability | Previously Ch 07 NASA |
| 11 — Governance and Engineering Authority | OpenSSF Gemara, safety, cyber, nonfunctional constraints, model/agent permissions and supply chain | Previously Ch 11 Gemara |
| 12 — Managing Engineering Knowledge at Scale | FAIR, OSLC, cross-product reuse, models, engineering process assets and Agent Skills | Previously Ch 12 OSLC |
| 13 — The AI-Native Engineering Environment | Intent-driven and prompt-first interaction plus specialist GUIs, integrative engineering factory, agent interfaces | Previously Ch 13 OpenAI specialist UI |

**Presentation split:** Document-as-Code Lab's *Beyond Slides* material covers presentation storytelling, HTML slides, mind maps, dashboards and interactive delivery; Executable Engineering Lab's technical views serve engineering investigation (system/knowledge graphs, SysML, simulation/data/evidence).

## Discovery checklist for drafting agents

1. Locate the chapter in the table above.
2. Read [the archived external research baseline](v3/2026-11-12-external-research.md), focusing on the relevant topic and quote candidate.
3. Read `project/CURRICULUM-MAP.md` and `project/SITE-DIRECTION.md` as current title/sequence authority, then the [v3 manuscript index](../project/v3/manuscripts/INDEX.md), the relevant brief and `project/EDITORIAL-GUIDE.md`. Previously approved alternative-titled manuscripts are **source material awaiting alignment**, not automatic replacements for current Chapters 01–04.
4. Confirm the reference is current, authoritative for the claim, and appropriate to its source type. **Never treat the quote-candidate table as verbatim-verified evidence.**
5. Write concise reader-facing American English and link primary sources when quoting. Use a source once where it adds value; avoid repetitive AI caveats.
6. If new sources are used, add a dated note in `research/v3/`, update this index and record pending validations.
7. Keep content, original source documents and drafts in `research/` out of Astro build inputs. No publication without explicit editorial approval.

## Boundaries and related planning

- [Research archive routine](README.md)
- [v3 tracking issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32)
- [v2 editorial guidelines](../project/EDITORIAL-GUIDE.md)
- [v2 curriculum map](../project/CURRICULUM-MAP.md)

**Editorial scope:** The reference intersection is a teaching example, not an engineering authoring tool. An interactive knowledge graph and a small simulation may be used to illustrate principles; they are not evidence of an operational controller.
