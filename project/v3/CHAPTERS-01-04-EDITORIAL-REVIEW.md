# Current V3 Chapters 01–04 — Editorial Reconciliation and Review

**Status:** Concrete editorial review/proposed corrections, **not** owner approval of revised full manuscripts  
**Date:** 2026-11-15 · **Course authority:** [current approved 13-chapter curriculum](../CURRICULUM-MAP.md)  
**Owner decision applied:** [Four-way traffic intersection](REFERENCE-INTERSECTION.md) is the **only recurring V3 product example**.

## Executive judgment

**Review Chapters 01–04 first:** yes. The published Chapter 01 pilot and current Ch02–04 briefs predate the reference-case decision and still describe a condition-monitoring/DMS system. The **approved course titles and sequence do not need to change**. Chapter 01's actual story and examples must be reauthored for the future V3 reader; Chapters 02–04 need more substantive briefs and a coherent conceptual progression.

**Do not overwrite** the four historically approved alternative-structure manuscripts under `project/v3/manuscripts/approved/`: their source prose was accepted in an earlier arrangement, but their chapter numbers/titles do **not** match the current approved curriculum. Preserve text and credit its contribution after deliberate selection. Do not merge the existing preview route or publish these proposals without a separate instruction.

### Proposed four-chapter knowledge progression

| Chapter | One new capability the reader gains | Traffic intersection question | Product ↔ engineering environment | Primary teaching view |
|---|---|---|---|---|
| 01 — The New Engineering Paradigm | Explain *why* engineering practice changes | We want better traffic flow. What can we investigate, build and learn? | Signal system ↔ models, teams, tools, tests and agents | Two-system cause-and-effect view, conceptual only |
| 02 — Planning Under Uncertainty | Choose what to **explore vs commit** and what capability to create | Which unknown is most decision-critical: arrivals, safety conflicts, sensing, physical installation? | Product/roadmap priorities ↔ engineering capability priorities | Uncertainty-to-next-investigation decision map |
| 03 — Engineering Knowledge as Code | Structure and connect **engineering definitions and relationships** | What does changing the proposed signal strategy affect? | Definitions and interfaces ↔ usable, versioned information and views | **Required interactive typed graph** plus multi-view source context |
| 04 — Learning Through Models and Prototypes | Design **a fitting experiment** and interpret model/physical limits | How do phase transitions and different arrivals affect vehicle queues? | Candidate controller behavior ↔ reproducible models, experiments and tests | Bounded signal-state/arrival simulation and fidelity view |

The progression is a teaching sequence, **not a mandated product waterfall**: exploration and controlled work can run in parallel. Chapter 05 later treats **data quality and reuse**, and Chapter 06 treats **progressive specification**. Chapters 01–04 should lead into those topics but not pre-teach the entire chapters.

## Chapter 01 — The New Engineering Paradigm

**Existing reader pilot:** Published route `/learn/v2/01-new-engineering-paradigm/` from PR #36, dark layout, condition-monitoring vignette, product/environment lanes, expandable findings, AI distinctions, different cadences and reflection.

**Decision:** The pilot remains accessible **unchanged now**, but is **not a content baseline for the future V3 example**. It is a useful *layout, diagrams and narrative technique* reference. Rework the full current-plan Chapter 01 with the intersection when the owner reviews its new text.

**Proposed opening tension:**
> A city wants traffic to move more smoothly through a busy intersection. Before its engineers can choose a new signal-control approach, they must understand the operating problem—and improve the models, data, tests and collaboration needed to investigate it.

**Keep from the published pilot:** Direct explanation of software and AI changes, two systems that co-evolve; greenfield and real operational purpose; illustrative findings and what they change in engineering capability; distinct model/software/physical feedback cadences; readable early diagram; context-first vocabulary; a short, nonmandatory information disclosure.

**Select carefully from archived *From Engineering Intent to Evidence*:** How intent matures through learning; the phrase *We build the machine that builds the machine*; specification/verification relationship; evidence ties to assumptions. Limit the broad digital-thread explanation to a teaser: technical depth belongs in current Ch03, not Chapter 01.

**Proposed three example findings** (all *conceptual*, not model/run results):
1. Uneven vehicle arrivals challenge the initial timing assumption → the product concept must be reconsidered; the team needs a representative arrivals scenario and repeatable model.
2. Turning movements or pedestrian needs expose a conflict not represented in a first drawing → the product definition needs explicit safety conditions; the engineering environment needs a better requirements/interface view and review technique.
3. A possible software timing change is easy to propose but not necessarily easy to qualify → the team needs integration checks, tested configuration and an appropriate path toward physical evaluation.

**AI distinction:** An engineering agent might help prepare a traffic-arrival experiment, inspect model outputs and propose documentation changes. A predictive traffic model **inside** an adaptive controller is a separate optional product design possibility; it is **not** part of the initial fixed-time traffic demonstration. A deterministic script is not automatically agentic.

**Visual:** Reuse the dark reader's product/environment semantic color convention, simple two-lane illustration and one finding→two consequences; replace monitoring-specific text and graphics only in a separate future publishing PR. No fabricated experimental improvements.

**Transition to Ch02:** "Which uncertainty do we investigate first, and which product/engineering capability can we responsibly commit to now?"

**Acceptance questions:** Can a reader explain the difference between engineering the product and improving engineering methods? Are engineering AI and product AI distinct? Is the intersection's uncertainty, not a finished controller, the narrative driver? Are software/physical cadences accurately different? Does the preview still remain available until a release is approved?

**Status:** Future V3 Chapter 01 revised manuscript required. The archived alternative-structure text stays intact.

## Chapter 02 — Planning Under Uncertainty

**Current brief weakness:** Relies on a DMS coverage/sensor supply example and generic roadmap-board interaction; gives little space to uncertainty that drives investments in the *engineering environment*.

**Proposed opening:** Choose among exploring arrival patterns, studying conflicting movements and investigating detector/installation feasibility before promising improved traffic operation. Recognize that a safe, useful system design is not yet known.

**Teach distinctly:**
- Why an intent/vision is not a settled architecture or specification.
- Themes and initiatives, hypotheses, decision dependencies, constrained exploration, validation and release increments.
- *What do we need to learn?* vs *what product capability is ready to deliver?* vs *what engineering capability must be built first?*
- A capability backlog for the engineering environment (reusable arrivals simulation, source/requirements views, model checks) distinct from a product delivery backlog.
- Multiple rates: simulation can move rapidly while signal hardware/cabinet/fabrication/approval work may take longer.
- Roadmaps change as evidence develops; one failed experiment can be productive if it resolves uncertainty.

**Primary view:** **Uncertainty-to-decision map** rather than a compulsory drag-and-drop Kanban. Let readers inspect a few candidate investigations, a risk/knowledge dependency and its impact on the product roadmap and engineering environment; include a static decision table. The site is **not a planning system**.

**Do not preempt:** Chapter 03's detailed information schema, Chapter 04's model algorithms, Chapter 06's refinement of formal bounded specifications, or Chapter 09's detailed CI/CD.

**Select old sources:** Archived Ch01 intent-to-knowledge/evidence maturity, `project/ENGINEERING-WORKFLOW.md` two concurrent loops, older Ch02 planning hierarchy; use concepts, not mismatched traffic or sensor prose.

**Bridge to Ch03:** "Once we choose what to learn, how do we give each assumption, interface and decision a durable identity and connect the relevant information?"

**Acceptance questions:** Can the reader identify an uncertainty and an experiment to resolve it? Can they distinguish product work from investment in engineering capability? Are lead-time differences and decisions visible without a pretend cost estimate?

## Chapter 03 — Engineering Knowledge as Code

**Current brief weakness:** Focuses on change-impact graph of a DMS sensor. Risk: the reader never learns what information objects, source authority and modeling views *mean* before seeing connections.

**Proposed opening:** A change to signal-phase selection appears local but may affect the signal command interface, conflict requirement, behavior model, detectors and verification approach. What information must be defined before a credible impact view is possible?

**Teach distinctly and in this order:**
1. **Information model vs documents vs diagrams vs executable model**. Engineering objects, stable IDs, attributes, typed relations, source status, revisions and authority.
2. **Source-to-view approach**: versioned structured knowledge can drive functional, structural, requirements, interface and behavior views. SysML v2 is one specialized representation, **not** required as a primary authoring environment. Distinguish actual valid SysML syntax from conceptual illustrations.
3. **Digital thread vs knowledge graph**: thread relates lifecycle objects/versions/evidence; typed graph is an inspectable relationship projection that can support the thread.
4. **Greenfield and brownfield**: developing definitions for a new concept versus assessing a proposed change to a controlled configuration.
5. **Prompt-based specification work** introduced lightly: a natural-language request helps create or review durable model content, but detailed progressive spec belongs in Ch06 and agent mechanisms in Ch07.
6. **Impact reasoning**: typed direct links are recorded; possible downstream review candidates are not automatically proven effects.

**Mandatory primary view V03:** **Interactive typed knowledge graph**, with stable names/IDs, typed edge labels and provenance, current/proposed status, selected-object source details, guided impact traversal, filters/reset, keyboard access and text/table fallback. Display a small static graph/text reading path before requiring interaction. V02 multi-view illustration may be supplementary.

**Reference objects:** Use the *proposed* IDs in [the single reference spec](REFERENCE-INTERSECTION.md) only as example labels; do not assert the source fixtures are implemented until a separate approved implementation.

**Select old sources:** Archived *Engineering Information Models* (document/model/information distinction, views), archived *Digital Threads and Knowledge Graphs* (explicit thread/graph distinction, greenfield/brownfield, impact). Avoid repeating these entire source chapters or their old numbered transitions.

**Bridge to Ch04:** "Relations tell us what is defined and possibly affected. Which executable model or prototype would help us learn how the intersection behaves?"

**Acceptance questions:** Can the reader distinguish a structured source from a visual projection? Can they inspect and explain **one specific typed relation**? Can they tell *recorded dependency* from *hypothesized impact*? Does the graph answer a meaningful question rather than act as a decorative network?

## Chapter 04 — Learning Through Models and Prototypes

**Current brief weakness:** DMS single/multiple-sensor options, hypothetical cable length and physical mounting assumptions do not carry the new reference case. Modeling/experimentation needs to build on Ch03 without becoming a technical controller coding exercise.

**Proposed opening:** Two signal-control proposals appear plausible. Which model would help us learn how different arrivals and phase rules influence queues, and where must real-world evaluation begin?

**Teach distinctly:**
- Model question and **fidelity** first, not a choice of diagram library or programming language.
- Describe functional, state/behavioral, discrete-event and simple stochastic model roles; state which engineering question each can answer.
- Use a **minimal two-phase traffic-signal state machine**, amber/all-red clearance, and a clearly bounded non-conflicting vehicle-phase property.
- Compare regular arrivals with **seeded random arrivals**, interpret waiting/queue/throughput outcomes, variability and repeatability.
- Separate controller/model definition, pure calculation, visualization and any retained execution evidence.
- Distinguish simulation outputs from measurements; note possible pedestrian/turning/hardware issues as missing scope rather than silently invented implementation.
- Show where electrical controls, physical installation and operational evaluation require other methods and different iteration cadences.

**Primary view V04:** **Simple educational phase-state and queue visualization** with accessible input definitions, pause/run/reset semantics, configuration/seed, a short state/timing history, calculated counters, explanatory text and tabular fallback. It is not a real controller or traffic-safety simulation. If interactivity is not yet implemented, full prose should still teach the concept through a traceable static example.

**Select old sources:** Archived *Executable Engineering Models* (state and arrivals, fidelity and engineering decisions), earlier actual V0 lessons for reproducible-test **principles**, not sensor geometry or numerical outputs. Reuse current visualization guide's V04 source/projection/view separation.

**Bridge to Ch05:** "The model generates events and calculated results. How do we know those data are complete, comparable, annotated, reproducible and fit to support our next engineering decision?"  
**Important:** The earlier archived Chapter 04 bridges to experimental trade-offs/new definition. That historical bridge is not suitable for current Ch05; **do not change the archived manuscript**, replace it only in a newly approved current-plan manuscript.

**Acceptance questions:** Can the reader state what the model answers and what it does not? Can they compare regular/seeded arrivals meaningfully? Do visuals and any numbers come from one defined scenario/model? Are physical uncertainties and engineering-tool capability visible?

## Old approved source-to-current-chapter reuse map

| Preserved approved source prose | Reuse in current Chapters 01–04 | Reuse later (avoid premature repetition) |
|---|---|---|
| Old 01 *From Engineering Intent to Evidence* | 01: two systems, intent; 02: uncertainty and maturity | 06: controlled specifications; 10: qualified evidence |
| Old 02 *Engineering Information Models* | 03: objects vs documents, views, prompts as entry point | 06: evolving specification; 12: source reuse |
| Old 03 *Digital Threads and Knowledge Graphs* | 03: thread/graph distinction, greenfield/brownfield, typed impact | 07: context; 12: cross-lifecycle reuse |
| Old 04 *Executable Engineering Models* | 04: state machine, arrivals, simulation assumptions | 05: data outputs; 10: simulation evidence boundaries |

Approved **source wording is preserved**, and old source approval is not transferred automatically to a new current-title full manuscript.

## Cross-chapter editorial and visual quality gate

1. **One current course:** Chapter title, number, Part and links come from `project/CURRICULUM-MAP.md`. The published V2 pilot is a preview. The four older approved manuscripts are archival source material.
2. **One recurring product:** the fictional four-way traffic intersection. The published monitoring preview and old DMS V0 lab remain separate, unchanged historical assets until a new publication decision.
3. **One new insight per chapter:** Ch01 *why*, Ch02 *what to investigate*, Ch03 *how knowledge is made connected*, Ch04 *what model can tell us*; Ch05 *data quality*, Ch06 *progressive specification*.
4. **Product and engineering environment co-evolve** without repeating a universal two-column template.
5. **One visual question per chapter**, consistent source/typed relation/model status and an accessible noninteractive alternative. Use teal/gold as intended; no color-only meaning.
6. **No fake records**: distinguish conceptual scenarios, actual executed calculations and real physical observations. Any future agent trace must be genuine.
7. **No mandatory implementation lab**, no source authoring UI and no new graph database. The site is educational.
8. **No new published routes or overwritten approved prose** in this review PR. When owner approves the revised chapter scope, prepare separate complete current-plan drafts for Chapter 01–04 and then sequentially Chapter 05 onwards.
9. **Cross-project presentation boundary**: Document-as-Code Lab teaches communication/storytelling and interactive presentation formats; engineering visualization here teaches meaningful system/model/data relationships.

## Proposed owner review order

1. Confirm the single traffic reference and its minimal semantics (the user already confirmed the example; exact visual/model fixtures still need review).
2. Review Chapter 01 replacement *direction* (not a silent overwrite of published preview), and its deliberate separation of agent engineering from hypothetical product AI.
3. Review Chapter 02–04 chapter-specific additions and the **02→03→04→05** transitions.
4. After accepted, draft current-plan text of Chapters 01–04 under `project/v3/manuscripts/drafts/`, taking care to preserve earlier accepted source prose.
5. Only then start complete current-plan manuscripts for Chapters 05–13; a single change PR need not publish any of them.
