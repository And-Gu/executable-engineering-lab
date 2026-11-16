# Current approved V3 curriculum map — 14 chapters, four parts
**V3 editorial authority:** The owner approved the **fourteen-chapter** learning sequence and the *From Models to an Integrated Product* bridge on 2026-11-16 after [independent review #42](https://github.com/And-Gu/executable-engineering-lab/pull/42) and [decision #44](https://github.com/And-Gu/executable-engineering-lab/issues/44). The chapter count and the reordered V&V, governance and continuous-engineering topics are now agreed. Complete revised manuscripts, technical fixtures and Astro publication remain **unapproved**.

**Single case:** A fictional four-way traffic intersection across all 14 chapters ([reference](v3/REFERENCE-INTERSECTION.md)). The published V2 Chapter 01 monitoring preview, original DMS V0 lessons and separately published V2 Engineering Data article remain unchanged. **Do not infer that any V3 route exists or that the 14-chapter manuscripts are complete.**

**Title status:** The proposed capstone title *Choosing the Next Engineering Capability* appears in the owner-accepted fourteen-chapter plan. Retain the existing Chapter 06 title *Spec-Driven Development Without Waterfall* for now; the independent review's alternative *Specifying the Next Engineering Increment* remains a separate editorial naming decision. Older 13-chapter text remains preserved as source material and must not be silently renumbered.

| Part | # | Chapter | Distinct learning gain | Primary intersection teaching view |
|---|---:|---|---|---|
| I — Frame the Work | 01 | The New Engineering Paradigm | Explain why the product and the engineering environment co-evolve | Uncertain intersection purpose, two-system impact and different learning cadences |
| I | 02 | Planning Under Uncertainty | Select a meaningful investigation and decide what is ready to commit | Compare investigation choices, dependencies and decision criteria |
| II — Build and Test Knowledge | 03 | Engineering Knowledge as Code | Explain controlled engineering information, typed relationships and change impact | Source-backed functional/interface views and mandatory interactive knowledge graph |
| II | 04 | Learning Through Models and Prototypes | Select a model, define assumptions and interpret a bounded experiment | Fixed-phase state model and traceable queue/arrival comparison |
| II | 05 | Engineering Data: From Measurements to Decisions | Curate, annotate, inspect and reuse engineering observations | Original, checked and derived records from the same teaching model |
| II | 06 | Spec-Driven Development Without Waterfall | Define a bounded next increment while leaving other uncertainties open | Progressive specification, valid/invalid scenarios and decisions |
| III — Develop an Integrated Product | 07 | Directing AI Engineering Agents | Bound, observe and review delegated engineering work | Illustrative task context, tool actions and handover |
| III | 08 | Engineering in Small, Reviewable Increments | Establish useful review boundaries and cross-discipline dependencies | Thin vertical improvement and dependent interface change |
| III | **09** | **From Models to an Integrated Product** | Bridge model/software work to product interfaces, physical integration and intended use | Interface semantics mismatch, proposed bench/emulator and operator needs |
| IV — Establish Trust and Sustain Change | 10 | Verification, Validation and Engineering Evidence | Qualify claims against the integrated configuration and intended use | Claim–method–result–applicability and open physical evidence |
| IV | 11 | Governance and Engineering Authority | Identify controls, authority, technical integrity and residual risks | One deferred/restricted change with evidence gaps |
| IV | 12 | Continuously Integrated Engineering | Design **and operate** an engineering factory for eligible controlled changes | Qualified change class, blocked release, hypothetical 24-hour capability |
| IV | 13 | Managing Engineering Knowledge at Scale | Reuse sources, models, tests and working methods while judging applicability | Cross-variant compatibility and shared-asset stewardship |
| IV | **14** | **Choosing the Next Engineering Capability** | Synthesize a complete two-system story into an informed investment decision | Constrained choice between data, integration tests and expanded delegation |

**This is an educational progression, not a waterfall process.** Integration, verification, security, assurance and risk reasoning are relevant from the earliest stages, although their detailed lessons appear later.

**Migration and status:** See [chapter migration map](v3/CHAPTER-MIGRATION-13-TO-14-2026-11-16.md), [editorial manuscript index](v3/manuscripts/INDEX.md), [independent assessment](v3/reviews/INDEPENDENT-FULL-COURSE-REVIEW-2026-11-16.md), and [P0 worked-case package](v3/reviews/WORKED-CASE-REVISION-PACKAGE-2026-11-16.md).

## Terminology and introduction sequence

The owner approved this terminology direction on 15 November 2026 during the front-page review. These are editorial definitions for the tutorial; the chapter sequence and future demonstrations remain planned. Systems engineering establishes the scope, executable engineering describes the approach, and AI agents are one capability within it.

| Term | Meaning and usage in this tutorial | Introduce and develop |
|---|---|---|
| Systems engineering | Understanding and developing the whole system across disciplines, people and operating conditions. Keep software, electronics, physical design and use in view. | Establish in Chapter 01; apply throughout. |
| Executable engineering | The site's working description for engineering where models, analyses, tests and parts of the workflow can be run, evaluated and improved. It does not imply that every engineering activity is executable or automated. | Introduce on Home and in Chapter 01; develop through Chapters 03–06 and synthesize in Chapter 14. |
| Software-driven workflows | Software supports how engineering work is performed across disciplines: running models, handling data, testing, reviewing and preparing releases. This is broader than software development. | Introduce in Chapter 01; apply in Chapters 04–06, 08, 12 and 14. |
| AI-assisted engineering | The broad use of AI in engineering work, including interactive assistance and delegated agent tasks. “AI-assisted systems engineering” is a useful description of that application, not the name for the entire tutorial approach. | Introduce in Chapter 01; illustrate in Chapter 04 and deepen in Chapter 07. |
| AI agents / agentic engineering | Agents pursue a defined task, use tools, inspect results and adapt their next steps. Prefer “AI agents” in introductory prose; use “agentic engineering” for this way of working. Engineers direct and evaluate the work. | Explain AI agents in Chapter 01; develop task delegation, tool use, context and evaluation in Chapter 07, then apply in Chapters 08, 12 and 14. |
| AI in products | AI contributing to product behavior, including prediction, perception or decision support. Product AI need not be agentic or based on an LLM. | Distinguish from AI used in engineering in Chapter 01; revisit when evaluating models and system behavior in Chapters 04, 05 and 10. |
| Large language model (LLM) | A model technology underlying many AI assistants and agents. Explain the model's role separately from the surrounding tools and workflow. Spell out the term at first use; use it where the underlying mechanism matters. | Explain in Chapter 07, or at first use if a preceding example requires the mechanism. Do not lead Home with the acronym. |

Use the opening engineering situation to introduce the distinctions, rather than requiring readers to memorize a glossary before seeing the problem. Carry the same meanings into subsequent chapter briefs and the future Reference glossary. The scope of AI in products remains separate from the choice to use agents during development.

“We build the machine that builds the machine” describes the co-development of the product system and its engineering environment: people, methods, models, tools and workflows. Chapter 01 introduces the two systems; Chapter 14 brings the idea together. Frequent software releases, model iterations and physical validation retain their different cadences.

The systems scope follows [INCOSE's systems engineering definition](https://www.incose.org/about-systems-engineering/). The agent distinction draws on [Anthropic's explanation of predefined workflows and agents that choose their steps and tools](https://www.anthropic.com/research/building-effective-agents). “Executable engineering” is the tutorial's working description, not a claim of a standardized discipline.

## Content dependency model

- **01→02:** The whole-system and engineering-environment argument leads to selecting meaningful uncertainties and commitments.
- **02→03:** Planning decisions and open assumptions need durable engineering information and typed relationships.
- **03→04→05:** One source-backed concept drives a bounded model and inspectable data; Ch03's graph and Ch04's transparent experiment are required teaching roles, not yet implemented features.
- **05→06:** Data quality decisions drive the next controlled specification and its unresolved questions.
- **06→07→08:** A bounded specification can guide delegated agent work and a coherent, reviewable increment.
- **08→09:** Reviewable changes are not an integrated product; interface, electronics, physical/operational and installer/maintainer questions must be addressed concretely.
- **09→10→11:** Integrated configuration and open operational questions lead to scoped verification/validation evidence and accountable risk/authority decisions.
- **11→12:** Release eligibility, evidence and authority constrain what engineering-factory delivery automation can legitimately do.
- **12→13→14:** Reusable engineering capability informs product variants and the decision about what to improve next.

The course shows connections and feedback **in both directions**. A change in operation can reopen Chapters 02–06, while an engineering-environment improvement may enable new product options. Chapter order does not prescribe when real engineering teams must perform verification or integration work.

## Narrative controls
- Planning, spec development, agents and review are core; do not subordinate them to V0 geometric explanation.
- Keep **one illustrative traffic-intersection V3 storyline**, but each chapter must move a new and specific engineering question forward. The published DMS V0 remains a legacy teaching system, not the recurring V3 product.
- Show feedback upstream to planning, hypotheses and interface decisions.
- Keep long-lead electronics/mechanical/physical-test cadences visible.
- Link existing V0 topics to optional sidebars/references where main narrative would become repetitive.
