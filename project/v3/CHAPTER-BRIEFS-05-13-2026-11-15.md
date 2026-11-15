# V3 Editorial Briefs — Current Approved Chapters 05–13

**Status:** Updated writing proposals, not approved chapter manuscripts or authorization to publish  
**Curriculum authority:** `project/CURRICULUM-MAP.md` — the **current owner-reviewed, approved 13-chapter plan**  
**Companion:** [Curriculum alignment and gap register](EDITORIAL-ALIGNMENT-2026-11-15.md)  
**Prepared:** 2026-11-15 · Draft language: American English

The previous version of this file used an **alternative chapter numbering from earlier V3 discussions**. That numbering has been rejected as the working sequence in favor of the **current** reviewed plan. The useful ideas are redistributed below without inventing a new curriculum.

## Shared educational commitments

Executable Engineering Lab teaches the transition toward connected, executable, software-driven and agent-supported **systems engineering**, not programming a traffic controller, using Astro, or operating an agent platform.

Bring two evolving perspectives into the story: **what changes in the product** and **what changes in the engineering environment**. Lead with an engineering decision or uncertainty, then a meaningful visualization, and explain what was learned. Include software, electronics, physical design and operational concerns. Keep brief technical caveats located where the model/result requires them, not a repeated AI warning.

Use the published front page and Chapter 1 pilot for visual and explanatory *style*, not permission to rewrite its monitoring story or earlier approved manuscripts. **The owner confirmed the fictional four-way traffic intersection as the single recurring V3 product case**, described in [REFERENCE-INTERSECTION.md](REFERENCE-INTERSECTION.md). Carry that same case from greenfield uncertainty through model, data, specification, agent work, delivery, assurance and evolution. Do not create a second V3 condition-monitoring story. The published V2 pilot and original DMS V0 lab remain unchanged.

Cross-project division: **Document-as-Code Lab** owns audience-facing storytelling, presentations and HTML decks/scrollytelling; **Executable Engineering Lab** owns technically meaningful representations (SysML, knowledge graph, simulations, data/assurance views). No dedicated presentation chapter or engineering IDE.

## Chapter 05 — Engineering Data: From Measurements to Decisions

**Single V3 reference case:** Illustrative arrival events and model-computed queues/wait times from the same intersection need units, source identity, timestamps, annotations and comparable versions. Do not call model outputs field measurements.

**Learning question:** How do observations, simulated outputs and measurements become data that support sound engineering decisions?

**Distinct contribution:** Data quality, annotation, provenance, enrichment, independent review, visualization, preservation and reuse. This chapter is NOT a reintroduction to specifications/relations (Ch 03), model implementation (Ch 04), or trade-off/decision governance (Ch 06/10).

**Proposed narrative:** Start with two apparently contradictory measurements or simulated results associated with different configurations. Distinguish raw observations, assumed parameters, calculated results and physical measurements. Show transformations from raw → curated (units, time, duplicate/missing records, source identity) → enriched (cross-disciplinary annotations, known assumptions, component/baseline links) → derived (metrics, plots, meaningful comparison). Connect the improvement in information quality to the **engineering environment**: repeatable data pipelines, versioned evaluation datasets, provenance and tests. Where the product contains AI, mention evaluation datasets without conflating product AI with agents assisting development.

**Reused source:** The existing published **v2 Engineering Data** article, its calculated DMS example and source Markdown, as material to adapt, not silently duplicate.

**Primary view:** **V06 data investigation** with a raw/curated/enriched/derived representation, linked chart and table, explicit source/version status. More useful than a decorative dashboard.

**Research:** FAIR principles, data quality/annotation literature, appropriate standards. Quotes are candidates pending primary-source checking.

**Next question:** Even well-curated data is only useful if it can guide the next increment; what should we specify now without falsely freezing remaining uncertainty?

**Acceptance for the draft:** The reader can identify at least two improvements to data usefulness, distinguish evidence origin from the conclusion, and see reuse/value across disciplines.

---

## Chapter 06 — Spec-Driven Development Without Waterfall

**Single V3 reference case:** Select a bounded improvement to the intersection concept and progressively define interfaces, operating assumptions, decision records and acceptance criteria while leaving unselected adaptive alternatives open.

**Learning question:** How do we turn an uncertain, evolving engineering problem into bounded specifications and useful increments, without demanding a complete design up front?

**Distinct contribution:** Progressive specification is an operating practice for **engineering changes**, broader than spec-to-code. It builds on Ch 02 (planning uncertainty), Ch 03 (engineering knowledge as code), Ch 04 (model-based learning) and Ch 05 (usable data).

**Proposed narrative:** Compare a vague request ("improve the intersection's operation") with a scoped next engineering increment. Demonstrate intent → questions/assumptions → candidate options → decision → controlled capability/interface/acceptance conditions. Show exploration and delivery as **concurrent feedback loops**, not sequential waterfall gates. Distinguish spec-to-engineering from software-only spec-to-code. Include prompt-led refinement of definitions: natural-language interaction starts work, durable version-controlled sources preserve results. OpenSpec and GitHub Spec Kit offer concrete *software workflow illustrations*, not universally binding engineering standards.

**Two-system emphasis:** Choosing a product increment may require new simulations, interfaces, test methods, evaluation data, and task context in the engineering environment.

**Primary view:** **V05 progressive-specification explorer**: concept and uncertainty state → scoped change contract → new product definition + new engineering-method requirement. One example decision record and a short textual equivalent. No source editor or coding exercise.

**Research:** OpenSpec, GitHub Spec Kit, progressive specification, engineering decision/ADR approaches.

**Next question:** What happens when much of the bounded work can be delegated to an agent that uses tools?

**Acceptance:** Readers can identify the next useful engineering slice, which questions remain open, and which parts of the outcome should become versioned specifications.

---

## Chapter 07 — Directing AI Engineering Agents

**Single V3 reference case:** Describe a bounded *illustrative* agent investigation of the intersection's phase model or checks, including tool/context boundaries. Do not invent executed agent traces.

**Learning question:** How does engineering work change when AI agents can use tools, inspect results and adapt the next actions within a bounded task?

**Distinct contribution:** Mechanism and collaboration: distinguish **LLM, assistant, deterministic workflow, agent** and **AI in the product**. Present the human role in setting goals, scope, context, tools, evaluation and adopting work. This is not a how-to for constructing a custom agent system.

**Proposed narrative:** Start with an agent requested to assess an engineering change across a model, its source assumptions and tests. A normal language answer is insufficient; trace the deliberate tool-assisted sequence and inspect its proposed changes. Show objectives, task contract, source revision, permissions, stop conditions, expected outputs and explicit review points. Explain what makes this *agentic* rather than a fixed script or ordinary chatbot. A real, cited external practitioner report or an honestly labeled conceptual replay is acceptable; never invent an "authentic" run.

**Two-system emphasis:** Useful delegation depends on an engineering environment containing controlled information, accessible tools, validation and review procedures; changing product AI is a different topic.

**Primary view:** **V07 assistant vs deterministic workflow vs agent** comparison plus a bounded task timeline, not an embedded live agent.

**Research:** AAIF/Linux Foundation, Anthropic practitioner/observational work, METR and software-agent evaluation studies with appropriate evidence labels.

**Next question:** An agent can generate work rapidly; how do we keep changes bounded, understandable and integrable?

**Acceptance:** Readers can recognize a genuinely agentic task and explain the importance of scope, relevant context, tool actions and reviewable outcomes.

---

## Chapter 08 — Engineering in Small, Reviewable Increments

**Single V3 reference case:** Split an intersection control-model/interface/software change into distinct reviewable increments while recognizing electrical and physical integration dependencies.

**Learning question:** How do teams maintain technical and review quality when AI can produce substantial engineering changes quickly?

**Distinct contribution:** Reviewable incremental development, architecture and human–agent collaboration with defined DoD. **Keep it as a separate chapter**; do not collapse it into Continuous Engineering.

**Proposed narrative:** Start with a large cross-system change: software interface, electronics implication, mechanical assumption, verification and user guidance all touched. Compare an opaque all-at-once change with a sequence of small, meaningful vertical increments. Introduce stable architecture and module contracts that make parallel engineering work possible. Show PR review, bounded tasks, dependency tracking, change impact, explicit Definition of Done, and a simple maturity view that reveals how deliverables approach DoD. Distinguish useful outcomes from number of PRs or generated lines of code. Explain integration across different discipline cadences, decision records and architectural ownership.

**Two-system emphasis:** The product evolves incrementally; the engineering environment needs test scaffolding, task breakdown, review conventions, agent coordination and feedback to detect gaps.

**Primary view:** **V08 change-scope comparison** — one large change vs a coherent series, with affected functions/interfaces, review/evidence coverage and status of acceptance criteria.

**Research:** DORA, studies on agent-generated PR review and coordination; source-qualified practitioner findings.

**Next question:** How do we integrate and validate these reviewable changes frequently and predictably?

**Acceptance:** Reader can propose a set of meaningful increments and explain the criteria that make each increment useful and reviewable rather than arbitrary mini-tasks.

---

## Chapter 09 — Continuously Integrated Engineering

**Single V3 reference case:** Demonstrate how one *eligible* intersection software change might become releasable within a hypothetical 24-hour window; safety/physical changes have their own gates.

**Learning question:** How should we design and operate the engineering factory so a product can be changed and suitable software improvements prepared for release at the required frequency?

**Distinct contribution:** Two inseparable responsibilities: **build/improve the machine that builds the machine** AND **operate it to deliver changes**. The requirement for rapid delivery is an architectural driver, not a decorative CI pipeline.

**Proposed narrative:** Start with an **illustrative target** to move an eligible software fix or feature from an accepted change request to a releasable baseline **within 24 hours**. Trace implications for the product (modularity, bounded interfaces, configuration and rollout/rollback) and the factory (sources, automated checks, model/simulation evaluations, release evidence, documentation, agent tooling, approvals). Distinguish CI, continuous delivery and deployment. Show software, electronics, mechanical work and physical qualification operating at different cadences. Explain bottlenecks beyond implementation, monitoring, recovery and continuous factory improvement.

**Two-system emphasis:** The product and factory **co-evolve**. Each new product capability can require new tests and toolchain capabilities; existing automation improves the economics of subsequent changes. Do not claim that most development cost has already shifted quantitatively.

**Primary view:** **V09 dual-track factory map + change-to-releasable timeline**, showing engineering of the factory vs operation and its feedback. Duration examples must be hypothetical; distinguish the target interval from DORA's commit-to-deploy lead-time metric.

**Research:** DORA metrics and platform engineering, CNCF, continuous integration/delivery research.

**Next question:** Passing repeatable checks is part of readiness; what product-level evidence and validation must be established?

**Acceptance:** Reader can explain why delivery cadence affects both product and engineering architecture, distinguish CI/CD terms, and identify which changes require longer qualification.

---

## Chapter 10 — Verification, Validation and Engineering Evidence

**Single V3 reference case:** Distinguish a passing illustrative signal-state simulation from real-product readiness: actual signals, wiring, installation, operating instructions, verification and validation.

**Learning question:** Beyond working software and successful simulations, what information and evidence must be produced to deliver, operate and evolve a complete product?

**Distinct contribution:** Whole-lifecycle deliverables and relevant evidence: definitions, interfaces, integration, verified requirements, operational validation, physical testing, test plans/results, safety/cyber inputs, documentation, manuals, decision/approval records. Discuss which claims a result supports.

**Proposed narrative:** Start with a plausible model/CI success and ask what is missing for real equipment and operations. Distinguish V&V and different levels of evidence; explain the dependency on configuration, model fidelity and conditions. Explore how repeatable engineering processes generate the proper deliverable set, and how every change in a released product should assess applicability of previous evidence. Not a universal certification checklist.

**Two-system emphasis:** The factory must automate suitable evidence gathering, source and report generation and consistent links, but physical work and formal acceptance may require different constraints.

**Primary view:** **V10 lifecycle and deliverables map**, linking claims to engineering artifacts, model/test/physical evidence and relevant revisions. Keep educational examples distinct from certification.

**Research:** NASA IV&V, INCOSE, appropriate assurance and verification sources.

**Next question:** Who governs authority, risk and nonfunctional product integrity as more engineering work becomes automated?

**Acceptance:** Reader can distinguish software green build, simulation evidence, requirement verification and operational validation, and name classes of deliverables needed for a real product.

---

## Chapter 11 — Governance and Engineering Authority

**Single V3 reference case:** Consider a proposed adaptive-control or remote-update change with conflict constraints, cyber risk, hardware failure behavior, agent authority and proportionate assurance.

**Learning question:** What controls and decisions maintain integrity, security and accountability as humans and agents continuously change an engineering system?

**Distinct contribution:** Governance and engineering authority, including **cybersecurity, hardening, safety, robustness and other non-functional requirements from early design through operation**.

**Proposed narrative:** Start with a small change that unexpectedly affects safety or cyber and the chain of authority across software, electronics, operations. Explain model/agent identity, tool permissions, provenance, configuration and acceptance authority; which changes agents may propose versus commit; change-impact analysis and proportional gates. Use a compact claim → control → evidence → decision example, referencing Gemara and relevant control modeling where appropriate. Avoid repeated generic warnings.

**Two-system emphasis:** Governance must apply to **both** evolving product and engineering factory, including toolchain and agent permission updates. Fit risk-based controls to eligible rapid-release classes without bypassing necessary tests/approvals.

**Primary view:** **V11 permission/authority and assurance graph**, with one concise concrete change-impact case and textual alternative.

**Research:** OpenSSF Gemara, supply-chain/provenance standards and risk/assurance literature.

**Next question:** How do teams reuse trustworthy decisions, models and methods in more than one project?

**Acceptance:** Reader can describe appropriate authority boundaries and identify relevant cybersecurity, safety and assurance implications of a defined change.

---

## Chapter 12 — Managing Engineering Knowledge at Scale

**Single V3 reference case:** Compare two illustrative intersection variants to decide which model/test/engineering-work patterns can be reused and which product evidence requires re-evaluation.

**Learning question:** How can engineering organizations preserve, find and reuse knowledge and working capabilities across teams, configurations, products and time?

**Distinct contribution:** From project information to **organization-level reusable knowledge and engineering-system assets**. Do not simply repeat digital thread or source versioning.

**Proposed narrative:** A second team tries to reuse a model, test result or agent skill from an earlier project, but hardware assumptions, interfaces or evidence applicability differ. Explain stable identity and revision/configuration, federated sources, links and ownership. Introduce reuse of technical decisions, model/validation patterns, curated data, reusable agent skills, evaluation datasets, interface templates, CI checks and engineering-factory capabilities. Discuss provenance, discoverability, validation and updating shared materials over time.

**Two-system emphasis:** Product assets may be reusable, but **engineering methods and environments** can also be reused and improved, making the next product exploration cheaper and more capable.

**Primary view:** **V12 reusable knowledge/capability map** showing two products, shared patterns and exceptions where evidence must be re-established.

**Research:** OSLC, FAIR, INCOSE, Linux Foundation Agent Skills / governance project references.

**Next question:** What does an integrated environment actually feel like when engineers work across all these capabilities?

**Acceptance:** Reader distinguishes reusable knowledge, reusable method and applicability of product-specific test evidence.

---

## Chapter 13 — The AI-Native Engineering Environment

**Single V3 reference case:** Trace the same fictional intersection from uncertain greenfield need to a provisional configuration and a later change, as product and engineering environment co-evolve.

**Learning question:** What does a connected, executable and agent-supporting engineering environment look like across concept exploration, implementation, delivery and system evolution?

**Distinct contribution:** End-to-end **synthesis of the approved curriculum**, not a code lab, engineering IDE or another ten-diagram recap.

**Proposed narrative:** Follow one understandable greenfield product question. As learning accumulates, the team adds useful engineering capabilities: structured info, decisions, models, data curation, simulation, agent tasks, reviewable changes, CI, V&V and governance. Introduce an operational change/brownfield scenario and trace which information and factory capabilities are reused. Make the human–agent interaction pattern clear: natural-language intent/prompt → structured definitions/context and agent/tool execution → **specialized graphical inspection and decisions**. Discuss prompt-oriented interfaces replacing some manual tool navigation without assuming all specialized GUIs disappear. Close with the question of which engineering capability the organization should improve next.

**Primary view:** **V13 explorable systems map**, connecting product milestones and engineering-environment capabilities, with optional reader pathways and links to earlier technical illustrations. This is **engineering communication** rather than a standalone presentation authoring tool.

**Presentations split:** Point interested readers to Document-as-Code Lab's *Beyond Slides* bonus chapter for HTML/deck/storytelling/scrollytelling/Markmap. Keep technical visual meaning (SysML, graphs, models, impact, simulation/data interpretation) in EEL.

**Research:** OpenAI/GitHub agent-interface approaches, AAIF, engineering integration/MBSE, DORA and a source-checked short chapter quotation.

**Acceptance:** Readers can explain the two co-developing systems, identify a reasonable next engineering investment and describe where prompts, agents and visual interfaces help at different stages.

---

## Editorial gates before full manuscripts

1. Reconcile the **current** Chapter 01–04 topics first against the newly published Chapter 01 pilot and the previously approved **alternative-structure** text. Do not silently transplant earlier chapters or republish them.
2. **Confirmed by owner:** Use the four-way traffic intersection as the sole recurring V3 reference for Chapters 01–13. Preserve the earlier published condition-monitoring preview and DMS V0 lab until a separately authorized migration.
3. Approve the **scope** of Chapters 05–13 in the **current numbering**, including the reassignment of the previously discussed v3 concepts.
4. For each manuscript: one distinctive learning question, a clear two-system consequence, appropriate engineering data/visualization, reference provenance, a relevant transition and limited caveats.
5. Keep draft manuscripts under `project/v3/manuscripts/drafts/`, not Astro pages, until separately authorized.
