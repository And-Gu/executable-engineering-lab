# V3 curriculum map — proposed 15-chapter sequence, four parts
**Editorial update (17 November 2026):** New Chapter 2 introduces the fictional four-way intersection after an executive-level Chapter 1. The former Chapters 2–14 become Chapters 3–15. This change is proposed in a review PR and explicitly requested for publication by the owner.

**Single case:** One fictional four-way traffic intersection, introduced in Chapter 2 and used for the technical progression. Chapter 1 stands alone as the engineering-paradigm overview.

**Title status:** The proposed capstone title *Choosing the Next Engineering Capability* appears in the owner-accepted fourteen-chapter plan. Retain the existing Chapter 06 title *Spec-Driven Development Without Waterfall* for now; the independent review's alternative *Specifying the Next Engineering Increment* remains a separate editorial naming decision. Older 13-chapter text remains preserved as source material and must not be silently renumbered.

| Part | # | Chapter | Distinct learning gain | Primary intersection teaching view |
|---|---:|---|---|---|
| I — Frame the Work | 01 | The New Engineering Paradigm | Decide where earlier feedback could save engineering time and reduce rework | Compare a product change with the repeatable check that helps teams integrate it |
| I | 02 | Setting Up the Intersection Workshop | Turn a road user's concern into a question a first prototype can investigate | Explore the four-way intersection, who uses it and what a vehicle-queue model can represent |
| I | 03 | Planning Under Uncertainty | Revise the next increment when a prototype changes what the team knows | Reconcile two readings of the same queue before requesting arrival data |
| II — Build and Test Knowledge | 04 | Engineering Knowledge as Code | Explain controlled engineering information, typed relationships and change impact | Source-backed functional/interface views |
| II | 05 | Learning Through Models and Prototypes | Select a model, define assumptions and interpret a bounded experiment | Fixed-phase state model and traceable queue/arrival comparison |
| II | 06 | Engineering Data: From Measurements to Decisions | Curate, annotate, inspect and reuse engineering observations | Original, checked and derived records |
| II | 07 | Spec-Driven Development Without Waterfall | Define a bounded next increment while leaving other uncertainties open | Progressive specification and decisions |
| III — Develop an Integrated Product | 08 | Directing AI Engineering Agents | Bound, observe and review delegated engineering work | Illustrative task context, tool actions and handover |
| III | 09 | Engineering in Small, Reviewable Increments | Establish useful review boundaries and cross-discipline dependencies | Thin vertical improvement and dependent interface change |
| III | 10 | From Models to an Integrated Product | Bridge model/software work to product interfaces, physical integration and intended use | Interface semantics mismatch and integration questions |
| IV — Establish Trust and Sustain Change | 11 | Verification, Validation and Engineering Evidence | Qualify claims against the integrated configuration and intended use | Claim, method, result and applicability |
| IV | 12 | Governance and Engineering Authority | Identify controls, authority, technical integrity and residual risks | One deferred change with evidence gaps |
| IV | 13 | Continuously Integrated Engineering | Design and operate an engineering factory for controlled changes | Eligibility and blocked-release decision |
| IV | 14 | Managing Engineering Knowledge at Scale | Reuse sources, models, tests and working methods with judged applicability | Cross-variant compatibility |
| IV | 15 | Choosing the Next Engineering Capability | Synthesize the two-system story into an investment decision | Choose next engineering capability |

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

- **01→02:** The broad engineering paradigm introduces a common fictional challenge.
- **02→03:** Stakeholders, system boundaries and uncertainty lead to planning the first investigation.
- **03→04→05→06:** Planning requires connected information; controlled models generate bounded results; data quality determines what conclusions hold.
- **06→07→08→09:** Evidence informs specifications and agent work, which can produce reviewable changes.
- **09→10→11→12:** A software increment must reach integrated-product evidence and accountable engineering authority.
- **12→13→14→15:** Release eligibility, continuous engineering and reuse support a decision about the next engineering capability.

The order is educational; real product teams address assurance, safety, integration and security from the start.

## Narrative controls
- Planning, spec development, agents and review are core; do not subordinate them to V0 geometric explanation.
- Keep **one illustrative traffic-intersection V3 storyline**, but each chapter must move a new and specific engineering question forward. The published DMS V0 remains a legacy teaching system, not the recurring V3 product.
- Show feedback upstream to planning, hypotheses and interface decisions.
- Keep long-lead electronics/mechanical/physical-test cadences visible.
- Link existing V0 topics to optional sidebars/references where main narrative would become repetitive.
