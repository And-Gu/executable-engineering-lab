# Research index — Executable Engineering Lab v3

<!-- EEL_RESEARCH_NOT_FOR_PUBLICATION -->
**For editors and AI agents.** Start here before drafting, revising or sourcing a v3 chapter. This file is in the GitHub repository but **not published on the Astro site**.

**Version:** 2026-11-12 · **Curriculum:** 13 chapters · **Status:** background material awaiting source and quotation verification.

## Source register

| ID | Background document | Scope / tags | Status |
|---|---|---|---|
| EEL-R-2026-11-12-V3 | [External Reference and Research Baseline](v3/2026-11-12-external-research.md) | Linux Foundation / AAIF, MCP, OpenSpec, GitHub Spec Kit, SysML, OSLC, digital thread, agent use, engineering data, DORA, GUI vs prompt, source quotes | Research proposal; factual and quote verification before citation |

## Routing by chapter

| Chapter | Search themes and suggested source types | Read first |
|---|---|---|
| 01 — From Engineering Intent to Evidence | Engineering factory, organizational performance, intent-to-evidence, DORA, cost-shift claim (not established as a numerical majority) | DORA 2025, software product-line and continuous delivery ideas in the research baseline |
| 02 — Engineering Information Models | Federated information, SysML v2, information semantics, document-as-code, prompt-driven modeling | OMG SysML v2, OSLC |
| 03 — Digital Threads and Knowledge Graphs | Lifecycle information, linked data, relationships, greenfield/brownfield impact | NIST Digital Thread, OSLC, INCOSE linked-information studies |
| 04 — Executable Engineering Models | Model fidelity, behavior, simulations, MBSE definitions and limitations | INCOSE / OMG |
| 05 — From Exploration to Engineering Definition | Progressive specifications, OpenSpec, spec-to-code, GitHub Spec Kit, decisions | OpenSpec, GitHub Spec Kit |
| 06 — Engineering Data: From Measurements to Decisions | Quality, annotation, provenance, enrichment, reuse, FAIR, source reliability | FAIR Guiding Principles, related data/knowledge papers |
| 07 — Verification and Engineering Evidence | Verification versus validation, reproducibility, evidence, assurance | NASA IV&V, Gemara |
| 08 — Agentic Engineering | What agents actually do, human planning, delegation, field studies, usage limitations | Anthropic Claude Code research, GitHub Octoverse, METR |
| 09 — Agents and Engineering Context | MCP, Agent Skills, AGENTS.md, context, tool architecture, interoperability | AAIF / Linux Foundation, Microsoft Research |
| 10 — Continuous Engineering | Build AND operate engineering factory, 24-hour *eligible change* objective, lead time, platform engineering, CI/CD | DORA, CNCF, software engineering empirical studies |
| 11 — Governance and Assurance | Model provenance, permissions, cyber, safety, risk controls and evidence | OpenSSF Gemara, Linux Foundation research |
| 12 — Engineering Knowledge at Scale | Reuse across products, federated source-of-truth, OSLC, FAIR | OSLC, INCOSE, FAIR |
| 13 — The Integrated Engineering Environment | Intent interface, prompts and agents, dynamic/specialist GUIs, review visualizations | OpenAI Codex as a Platform, GitHub ambient interface, ACL / Microsoft research |

## Discovery checklist for drafting agents

1. Locate the chapter in the table above.
2. Read [the archived external research baseline](v3/2026-11-12-external-research.md), focusing on the relevant topic and quote candidate.
3. Read `project/TUTORIAL-SPEC.md`, `project/EDITORIAL-GUIDE.md`, and the **owner-approved chapter manuscript** where one exists. **Chapter 1–4 are editorially approved in discussion; the legacy published source files are not those v3 manuscripts.**
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
