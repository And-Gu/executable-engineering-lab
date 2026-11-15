# Current approved curriculum map — 13 chapters, four parts
**V3 editorial authority:** Chapter titles, order and four-part grouping reviewed and approved by the owner on 2026-11-15. **Full new V3 manuscript wording and implementation are not thereby approved.** The public website still has its original lessons, a V2 Chapter 01 reader preview and a separate V2 data article; do not assume the remaining V3 routes exist.

**Owner-confirmed reference for the new V3 course:** The fictional **four-way traffic intersection** across Chapters 01–13. See [reference contract](v3/REFERENCE-INTERSECTION.md) and [Chapters 01–04 editorial review](v3/CHAPTERS-01-04-EDITORIAL-REVIEW.md). The published earlier condition-monitoring preview and original DMS V0 example remain unchanged until separately approved migration.

| Part | # | Chapter | Distinct learning gain | Demonstration |
|---|---:|---|---|---|
| I — Why and what next | 01 | The New Engineering Paradigm | Establish systems scope and shared terminology; explain how software-driven workflows and AI agents change engineering | Compare systems engineering workflows and feedback cycles |
| I | 02 | Planning Under Uncertainty | Separate exploration from committed increments | DMS roadmap/option planning |
| II — Learn and specify | 03 | Engineering Knowledge as Code | Explain cross-discipline source relationships | Interactive change-impact graph |
| II | 04 | Learning Through Models and Prototypes | Qualify model fidelity and experiment results | Sensor/electronics/mount options |
| II | 05 | Engineering Data: From Measurements to Decisions | Curate, annotate, enrich, visualize, review, preserve and reuse engineering data | DMS simulated parameter study + synthetic cross-discipline constraints |
| II | 06 | Spec-Driven Development Without Waterfall | Progressively specify the next slice | Hypothesis→spec decision studio |
| III — Act with agents | 07 | Directing AI Engineering Agents | Define agent scope, context, authority | Authentic run replay / contract |
| III | 08 | Engineering in Small, Reviewable Increments | Design meaningful, limited integration slices | Compare large PR vs split PRs |
| III | 09 | Continuously Integrated Engineering | Differentiate digital CI, hardware baselines and qualification | Multidiscipline integration dashboard |
| IV — Decide and scale | 10 | Verification, Validation and Engineering Evidence | Reason from claim to relevant evidence | Claim/evidence assessment |
| IV | 11 | Governance and Engineering Authority | Distinguish checks, permissions and approval | Review gate / authority simulation |
| IV | 12 | Managing Engineering Knowledge at Scale | Track configurations, reuse and supplier interfaces | Variant/baseline comparison |
| IV | 13 | The AI-Native Engineering Environment | Synthesize integrated workflow | End-to-end DMS engineering case |

## Terminology and introduction sequence

The owner approved this terminology direction on 15 November 2026 during the front-page review. These are editorial definitions for the tutorial; the chapter sequence and future demonstrations remain planned. Systems engineering establishes the scope, executable engineering describes the approach, and AI agents are one capability within it.

| Term | Meaning and usage in this tutorial | Introduce and develop |
|---|---|---|
| Systems engineering | Understanding and developing the whole system across disciplines, people and operating conditions. Keep software, electronics, physical design and use in view. | Establish in Chapter 01; apply throughout. |
| Executable engineering | The site's working description for engineering where models, analyses, tests and parts of the workflow can be run, evaluated and improved. It does not imply that every engineering activity is executable or automated. | Introduce on Home and in Chapter 01; develop through Chapters 03–06 and synthesize in Chapter 13. |
| Software-driven workflows | Software supports how engineering work is performed across disciplines: running models, handling data, testing, reviewing and preparing releases. This is broader than software development. | Introduce in Chapter 01; apply in Chapters 04–06, 08–09 and 13. |
| AI-assisted engineering | The broad use of AI in engineering work, including interactive assistance and delegated agent tasks. “AI-assisted systems engineering” is a useful description of that application, not the name for the entire tutorial approach. | Introduce in Chapter 01; illustrate in Chapter 04 and deepen in Chapter 07. |
| AI agents / agentic engineering | Agents pursue a defined task, use tools, inspect results and adapt their next steps. Prefer “AI agents” in introductory prose; use “agentic engineering” for this way of working. Engineers direct and evaluate the work. | Explain AI agents in Chapter 01; develop task delegation, tool use, context and evaluation in Chapter 07, then apply in Chapters 08–09 and 13. |
| AI in products | AI contributing to product behavior, including prediction, perception or decision support. Product AI need not be agentic or based on an LLM. | Distinguish from AI used in engineering in Chapter 01; revisit when evaluating models and system behavior in Chapters 04, 05 and 10. |
| Large language model (LLM) | A model technology underlying many AI assistants and agents. Explain the model's role separately from the surrounding tools and workflow. Spell out the term at first use; use it where the underlying mechanism matters. | Explain in Chapter 07, or at first use if a preceding example requires the mechanism. Do not lead Home with the acronym. |

Use the opening engineering situation to introduce the distinctions, rather than requiring readers to memorize a glossary before seeing the problem. Carry the same meanings into subsequent chapter briefs and the future Reference glossary. The scope of AI in products remains separate from the choice to use agents during development.

“We build the machine that builds the machine” describes the co-development of the product system and its engineering environment: people, methods, models, tools and workflows. Chapter 01 introduces the two systems; Chapter 13 brings the idea together. Frequent software releases, model iterations and physical validation retain their different cadences.

The systems scope follows [INCOSE's systems engineering definition](https://www.incose.org/about-systems-engineering/). The agent distinction draws on [Anthropic's explanation of predefined workflows and agents that choose their steps and tools](https://www.anthropic.com/research/building-effective-agents). “Executable engineering” is the tutorial's working description, not a claim of a standardized discipline.

## Content dependency model
01→02 sets motive and direction.
02 feeds 03, 04, 05 and 06 through uncertainty priorities.
03 provides controlled context for 04, 05, 06 and 07.
04 produces model observations for 05; 05 enriches and reviews those data before feeding 06 and planning decisions.
06 prepares a bounded task for 07–09.
07–09 deliver reviewable results and expose gaps to 10–11.
10–12 inform new decisions and future roadmaps.
13 integrates all, including open decisions.
**These arrows do not imply waterfall or mandatory course navigation.**

## Narrative controls
- Planning, spec development, agents and review are core; do not subordinate them to V0 geometric explanation.
- Keep **one illustrative traffic-intersection V3 storyline**, but each chapter must move a new and specific engineering question forward. The published DMS V0 remains a legacy teaching system, not the recurring V3 product.
- Show feedback upstream to planning, hypotheses and interface decisions.
- Keep long-lead electronics/mechanical/physical-test cadences visible.
- Link existing V0 topics to optional sidebars/references where main narrative would become repetitive.
