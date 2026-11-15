---
id: EEL-R-2026-11-12-V3
title: External Reference and Research Baseline for Executable Engineering Lab v3
date: 2026-11-12
status: source-review-pending
publication: background-only
chapters: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
topics: [digital-engineering, agentic-engineering, linux-foundation, openspec, spec-kit, digital-thread, sysml, engineering-data, ai-interfaces, continuous-delivery, governance]
---
<!-- EEL_RESEARCH_NOT_FOR_PUBLICATION -->

> **Research archive — not intended for the Astro site.** Sources, numerical claims and chapter quotations below are editorial candidates. Verify original wording, context, date and links at the primary source before including any claim or quotation in a public chapter. GitHub repository contents remain publicly visible.

# Executable Engineering Lab v3 — External Reference and Research Baseline

**Prepared:** 12 November 2026  
**Status:** Background research proposal preserved in the GitHub repository; not approved for editorial publication.  
**Target:** 13-chapter education site (American English).  
**Editorial convention:** An attributed quote is a candidate to be checked against its linked primary source before use. Research findings, standards and product/vendor claims should be identified separately. No article should imply that the same research result generalizes to all domains.

## Thesis and lessons from the literature

1. Connected and versioned engineering information is the precondition for cross-discipline change impact and useful agent context, not a sufficient guarantee of quality.
2. Prompts are emerging as a first-class interaction mechanism, but persistent specifications preserve engineering intent; specialist GUIs, structured controls and graphical reviews remain useful.
3. The engineering factory has two jobs: *build the delivery capability* and *operate and evolve it*. Fast software delivery is an architectural requirement for suitable changes, not a blanket guarantee for physical systems.
4. Agentic coding can increase throughput, but may shift bottlenecks into review, integration, architecture, governance and evidence. Evaluate total system outcomes, not code quantity.
5. The public Astro site illustrates and educates; it must not become an engineering authoring tool, agent runtime or compulsory coding exercise.

## The open ecosystem: which site serves which purpose?

| Source | Primary use in course | Interpretation |
|---|---|---|
| [Linux Foundation Agentic AI Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) | 8, 9, 11, 13 | Open governance for agent integration conventions: MCP, AGENTS.md, goose; by October 2026 also Agent Skills, Open Responses, A2A, OpenSandbox and others. Technical ecosystem, not proof of agent outcomes. |
| [Linux Foundation / AAIF October 2026 announcement](https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox) | 8, 9, 11 | Agent Skills (reusable expertise), Open Responses (provider-neutral model interfaces), OpenEnv (training/evaluation environments), OpenSandbox (execution isolation). |
| [OpenSpec](https://github.com/Fission-AI/OpenSpec) | 5, 8 | Lightweight specification-driven workflow, intentionally iterative and brownfield-friendly; a project/tool, not a formal standard or an engineering data ontology. |
| [GitHub Spec Kit](https://github.github.com/spec-kit/) | 5, 8, 10 | Structured specification-to-implementation lifecycle (Specify → Plan → Tasks → Implement → Converge). Compare with OpenSpec; describe as an illustrative software methodology, not a mandatory course workflow. |
| [OMG SysML v2](https://www.omg.org/sysml/sysmlv2/) | 2, 4 | System behavior, architecture, requirements and verification modeling; formal semantics and API for interoperability. In the lab, SysML is primarily a visualization/representation, not the main UI. |
| [OSLC Primer](https://open-services.net/resources/oslc-primer/) | 3, 12 | Cross-tool linked lifecycle data; complements Git-centered examples and does not require moving all domain data into one repo. |
| [NIST Digital Thread for Manufacturing](https://www.nist.gov/programs-projects/digital-thread-manufacturing) | 3, 12 | Authoritative public reference for lifecycle data and heterogeneous engineering systems. |
| [FAIR Guiding Principles](https://doi.org/10.1038/sdata.2016.18) | 6, 12 | Findability, accessibility, interoperability, reuse, provenance, machine-actionability, including algorithms and workflows. |
| [NASA IV&V](https://www.nasa.gov/ivv-overview/) | 7 | Distinguish verification from validation and recognize evidence levels. |
| [OpenSSF Gemara](https://gemara.openssf.org/faq/) | 7, 11 | Structured controls, evaluations and audit evidence; consider with OSCAL, not as proof of full safety certification. |
| [DORA Research 2025](https://dora.dev/research/2025/dora-report/) | 1, 10 | AI as organizational amplifier; platform capabilities and delivery improvement. |
| [DORA delivery metrics history](https://dora.dev/insights/dora-metrics-history/) | 10 | Five delivery metrics and precise definition of change lead time. |

## Practitioner and empirical signals to explain

**Github Octoverse 2026:** As of September, more than 40% of pull requests started with an agent first draft; this reflects GitHub platform activity and classification, **not** the share of software developed autonomously. https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/

**Stack Overflow Developer Survey 2026:** 26.2% of 17,464 respondents indicated using AI agents or automated workflows at work; coding assistants are more widespread. The survey is self-selected. https://survey.stackoverflow.co/2026/ai/data

**Anthropic Research 2026:** Privacy-preserving analysis of approximately 400,000 Claude Code sessions suggests human planning and agent execution are distinct and expertise influences effective delegation. Provider-owned observational data; cannot prove net productivity. https://www.anthropic.com/research/claude-code-expertise

**Linux Foundation Research October 2026:** Respondents report substantial time reductions in some development tasks, while maintainers estimate roughly a quarter of inbound PRs are low-quality AI submissions. These are survey/maintainer estimates rather than independent universal measurements. https://www.linuxfoundation.org/press/new-lf-research-survey-shows-generative-ai-cuts-open-source-coding-time-in-half-but-25-of-incoming-pull-requests-are-considered-ai-slop

**METR studies:** Early-2025 randomized study reported 19% longer completion for experienced developers in its sampled environment; February 2026 update warned that sampling/selection effects undermined reliable estimation of newer-tool effects. Avoid generalizing either result. https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/ and https://metr.org/blog/2026-02-24-uplift-update/

**Empirical practitioner friction (2026):** A peer-reviewed study of 2,658 Stack Overflow posts about agent frameworks found recurring problems in configuration, tool integration, data systems and agent execution. https://doi.org/10.1016/j.infsof.2026.108183

**PR failures (2026):** A peer-reviewed mining study examined 33,000 agent-created PRs; review dynamics, CI and scope influence acceptance. https://doi.org/10.1145/3793302.3793579

**Platform engineering perspectives:** https://www.cncf.io/announcements/2026/11/10/cncf-and-slashdata-report-finds-platform-engineering-strategies-are-shaping-ai-infrastructure-adoption/ and https://dora.dev/capabilities/platform-engineering/

## Are prompts replacing GUI? Stronger hypothesis: intention + graphical review + structured action

*Intent layer:* natural language, voice and prompts express a desired outcome.
*Execution layer:* model context, specifications, tools, APIs and agents perform bounded actions.
*Review layer:* diagrams, dashboards, diffs, tables and purpose-built interfaces preserve comprehension and control.

- GitHub argues for ambient interfaces, not simply chat replacing everything: https://github.blog/news-insights/company-news/the-next-developer-interface-is-ambient-intelligence/
- OpenAI argues that agents should strengthen specialist interfaces rather than replace them with a universal chat box: https://developers.openai.com/blog/codex-as-a-platform
- ACL Findings 2026, *Generative Interfaces for Language Models*, evaluated interfaces against chat and reported stronger preferences in studied tasks (up to 72%): https://aclanthology.org/2026.findings-acl.74/
- Microsoft Research 2026, *The Devil Is in the Interface*, shows the structure of available agent tools changes outcomes even with broadly similar capabilities: https://www.microsoft.com/en-us/research/publication/the-devil-is-in-the-interface-evaluating-how-tool-architecture-shapes-coding-agent-behavior/
- Apple UX research maps how users value prompts, explainability and user control for computer-use agents: https://machinelearning.apple.com/research/mapping

## Thirteen attributed quotation candidates (source verification required)

Each quote is an attributed **candidate** for a chapter epigraph or pull quote. Verify exact wording, context and authorship from the original source before use; publication is not approved. Quotes reflect the perspective and evidentiary status of their sources; use citations and links adjacent to each quote on the site.

| Chapter | Quotation | Source, type and editorial interpretation |
|---|---|---|
| 01 — From Engineering Intent to Evidence | “AI’s primary role is as an amplifier, magnifying an organization’s existing strengths and weaknesses.” | [DORA 2025](https://dora.dev/research/2025/dora-report/) · industry research; the engineering system and organization matter. |
| 02 — Engineering Information Models | “It is used to specify requirements, behavior, structure, analysis, and verification” | [OMG SysML v2](https://www.omg.org/sysml/sysmlv2/) · standards-body description; SysML is one representation, not the course’s mandated source of truth. |
| 03 — Digital Threads and Knowledge Graphs | “Digital thread has been used to represent the information flow along the product lifecycle.” | [NIST paper](https://www.nist.gov/publications/methodology-digital-twins-product-lifecycle-supported-digital-thread) · research; lifecycle continuity and change impact. |
| 04 — Executable Engineering Models | “A formalized application of modeling to support system requirements, design, analysis, verification and validation activities” | [INCOSE 2025 paper](https://www.incose.org/wp-content/uploads/legacy/presentation/is2025-pdf/Paper-137.pdf) quoting INCOSE’s MBSE definition; modeling is much broader than software simulation. |
| 05 — From Exploration to Engineering Definition | “Agree before you build — human and AI align on specs before code gets written” | [OpenSpec](https://github.com/Fission-AI/OpenSpec) · vendor/open-source project positioning; illustrates the practice, not a universal sequencing rule. |
| 06 — Engineering Data: From Measurements to Decisions | “all components of the research process must be available to ensure transparency, reproducibility, and reusability.” | [FAIR Principles, Scientific Data 2016](https://doi.org/10.1038/sdata.2016.18) · peer-reviewed original; apply to engineering data by analogy. |
| 07 — Verification and Engineering Evidence | “Verification answers the question, ‘Are we building the product right?’” | [NASA IV&V](https://www.nasa.gov/ivv-overview/) · institutional terminology; teach alongside validation, complete deliverables and product lifecycle. |
| 08 — Agentic Engineering | “people make most of the planning decisions (what to do) and Claude makes most of the execution decisions” | [Anthropic, June 2026](https://www.anthropic.com/research/claude-code-expertise) · observational usage research; captures humans defining objectives vs agent execution. |
| 09 — Agents and Engineering Context | “Without the right context, even the most intelligent agents fall short.” | [Linux Foundation / AAIF, October 2026](https://www.linuxfoundation.org/press/agentic-ai-foundation-announces-four-new-projects-agent-skills-open-responses-openenv-and-opensandbox), attributed to David Soria Parra, Anthropic; a practitioner view of reusable skills and context. |
| 10 — Continuous Engineering | “Change lead time: Time from code commit to successful production deployment.” | [DORA, metrics history](https://dora.dev/insights/dora-metrics-history/) · metric definition; clarify that our educational 24-hour request-to-releasable target is a DIFFERENT interval. |
| 11 — Governance and Assurance | “Gemara bridges the gap between Requirements (what should happen) and Operational Reality (what actually happened).” | [OpenSSF Gemara](https://openssf.org/resources/gemara-a-governance-risk-and-compliance-engineering-model-for-automated-risk-assessment/) · project positioning; structured compliance and actual evidence. |
| 12 — Engineering Knowledge at Scale | “each application autonomously manages its own product data” | [INCOSE / OSLC study](https://incose.onlinelibrary.wiley.com/doi/10.1002/iis2.13242) · peer-reviewed study; federated authoritative information instead of a monolithic database. |
| 13 — The Integrated Engineering Environment | “The opportunity is not to replace those interfaces with a universal chat box” | [OpenAI Developers, August 2026](https://developers.openai.com/blog/codex-as-a-platform) · vendor design perspective; the lab’s synthesis should show prompt + agents + graphical comprehension/review. |

## Key questions for editorial follow-up

1. Should Chapter 05 emphasize conceptual engineering definition before implementation, even as Spec Kit uses an explicit coding workflow? **Recommendation: yes.**
2. Should the course show a true knowledge graph? **Yes, as a small interactive educational view in Astro, not a domain authoring system.**
3. Should Chapter 10 evaluate the 24-hour objective? **Yes, as an architectural/design question and tradeoff, without pretending the site deploys an operational controller.**
4. Should Chapter 13 show a prompt-led interface instead of specialist UIs? **Show a hybrid architecture and a concrete concept diagram.**
5. Do sources establish that most development cost has shifted to factory construction? **No.** Explain the shift in strategic investment and bottlenecks; avoid numerical claims about the majority of total cost.

## Research hygiene for publication

- Maintain citation metadata (title, author/organization, date, original URL, retrieval date, source category, evidence limits, chapter use).
- Prefer peer-reviewed papers, established standards, and original research for empirical statements; vendor docs for examples of capabilities and product philosophies.
- Do not present anonymized/vendor-selected usage sessions as randomized studies.
- Verify quote wording and links again immediately before publication; avoid excerpts longer than a sentence and track attribution and licenses.
- Preserve Chapter 1–4 previously approved manuscripts; quotes are optional add-ons only. Chapter 5–13 proposed citation choices await owner review.