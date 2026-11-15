# V3 reference system — Four-way traffic intersection

**Status:** Owner-confirmed editorial reference scenario · 2026-11-15  
**Applies to:** The current, owner-approved 13-chapter curriculum in [CURRICULUM-MAP.md](../CURRICULUM-MAP.md)  
**What is approved:** Use the **four-way traffic intersection** as the **single recurring example** across V3.  
**What is not approved here:** A completed engineering specification, safety-valid controller, model/simulation implementation, reworking the already-published Chapter 01 reader preview, or publishing any new V3 pages.

## Why this is the example

A four-way intersection is easy for an engineer or manager to picture, yet it raises rich systems questions: road users, conflicting movements, real-time behavior, electrical and mechanical equipment, software, interfaces, failure handling, operational use, and system updates. It can illustrate engineering without making the site an application-development or programming tutorial.

Follow **one fictional intersection** from uncertain greenfield intent, through architectural views and experiments, into a defined illustrative product concept; then use its change history to teach brownfield impact and controlled release. Readers observe and reason about engineering work rather than implement an actual controller.

**Example policy:** Do not introduce condition-monitoring/DMS as a second recurring V3 product story. The existing published v2 Chapter 01 preview uses a condition-monitoring vignette and the original V0 lab is a DMS single-sensor teaching model. **Leave both published historical assets unchanged until separately authorized migration**; revise the *future V3 Chapter 01* around the intersection during chapter editorial review. DMS may be linked as a legacy example, clearly separated from V3 continuity.

## The shared engineering question

> How could a city improve traffic flow through a busy four-way intersection while maintaining safe, understandable and maintainable signal operation?

This is **engineering intent**, not a verified performance target, an authorized traffic engineering project, or an implementation contract.

We know **neither** the optimum control strategy nor the appropriate sensing/installation design. Start with questions, not a preselected AI solution:
- Whose travel and waiting conditions matter, including pedestrians and cyclists?
- What does “better traffic flow” mean in operational context, across different arrival patterns?
- Which movements conflict, and which signal sequences are intended to separate them?
- Can the controller, electrical installation, detectors, cabinets and interfaces be integrated and maintained?
- What must be established before anyone could trust a physically installed system?

## Explicit modeling scope (illustrative, not a traffic engineering design)

**First learning model (Chapter 04):** A highly simplified two-group vehicle-signal controller:
- North–south and east–west permissive vehicle phases are mutually exclusive.
- Conceptual phase sequence includes green, amber and all-red clearance intervals.
- A discrete model may count waiting vehicles and aggregate throughput under regular or seeded random arrivals.
- Fixed-time control is a simple **candidate baseline** for comparison; adaptive signaling is an **unselected proposed change**.
- Report each model's defined inputs, assumptions, revision and simulation outputs.
- Do **not** assert realistic road-network performance, operational safety, compliant signal timings or physical qualification.

**Deferred physical scope:** Pedestrian/cyclist movements, turning conflicts, detector faults, emergency priorities, secure remote operations, local regulations and fail-safe hardware introduce additional requirements. A small demonstration must *surface these as open questions*, not pretend it evaluates them.

The case is not an instructions package to build or deploy real traffic-control equipment.

## Product system and engineering environment evolve together

| Product engineering question | Needed engineering capability |
|---|---|
| What conflicts and signal functions exist? | Versioned functional/structural/requirements information and views |
| What does a signal phase transition do? | Explainable state model, representative scenarios, repeatable checks |
| How does uneven arrival traffic affect waiting? | Seeded arrival experiment, logged assumptions and comparable results |
| What if adaptive control is proposed? | Typed change-impact links, experimental baseline, decision records |
| Are defined requirements and physical constraints satisfied? | Evidence for the actual claim, interface/installation assessment and review |
| Can an eligible software correction move rapidly? | Integration tests, controlled configuration, release/rollback and approval methods |
| How can another project benefit? | Reusable scenario fixtures, source definitions, test patterns and instructions |

The two systems should appear **naturally in the same case**, without forcing identical dual-column layouts onto every chapter.

## Proposed vocabulary and durable identity

Before any visualization implementation, approve the minimum, versioned information objects and their typed relationships. **The following IDs are illustrative proposals only**; they do not claim to exist in a runtime, source schema or controlled product baseline.

| Candidate ID | Role | Example relation or question |
|---|---|---|
| INT-NEED-001 | Operational intent | Motivates signal-flow investigation |
| INT-SYS-001 | Intersection concept | Has signal controller and external users |
| INT-FUN-001 | Signal-phase selection function | Constrained by conflict rule |
| INT-REQ-001 | Candidate no-conflicting-permissive rule | Tested only in a bounded model |
| INT-IF-001 | Controller-to-signal command interface | Used by proposed control implementation |
| INT-MOD-001 | Simplified phase state model | Represents INT-FUN-001 with assumptions |
| INT-DAT-001 | Illustrative arrivals dataset/scenario | Input to traffic model |
| INT-EXP-001 | Versioned simulation experiment | Evaluates INT-MOD-001 under INT-DAT-001 |
| INT-DEC-001 | Provisional fixed-time concept decision | Records rationale and unresolved questions |
| INT-CHG-001 | Proposed adaptive-control change | Candidate downstream change-impact investigation |
| INT-TST-001 | Illustrative conflicting-phase check | Applies to a specific model revision only |

Use stable identifiers, **explicit relation types** (e.g. `constrains`, `implemented-by`, `evaluates`, `depends-on`), source/provenance, and status (`candidate`, `illustrative`, `proposed`, `recorded`) without implying that every edge constitutes established engineering evidence. Do not overload legacy DMS V0 identifiers.

## A single coherent journey across the current approved curriculum

| Current chapter | What happens in the shared intersection case | Primary reader gain |
|---|---|---|
| **01 — The New Engineering Paradigm** | A city has a traffic-flow problem, not a complete product or an engineering method. Show how improving the **product** and its **engineering environment** reinforce each other; distinguish agent work from a hypothetical AI-enabled product feature | Understand the two evolving systems |
| **02 — Planning Under Uncertainty** | Choose which questions to investigate first; compare timing, sensing and physical lead times; plan both a product increment and the needed simulation/verification ability | Prioritize learning and capability |
| **03 — Engineering Knowledge as Code** | Represent needs, functions, interfaces, constraints, decisions and source relationships; explore the **required interactive typed knowledge graph**, including a proposed adaptive-control change | Understand connected reusable information |
| **04 — Learning Through Models and Prototypes** | Examine the simple signal state machine, regular vs seeded random arrivals, explainable waiting/queue output and model fidelity | Decide what a simulation establishes |
| **05 — Engineering Data: From Measurements to Decisions** | Trace arrival/time series from original inputs to curated, annotated and derived comparisons; differentiate hypothetical/simulated from measured conditions | Improve data usefulness |
| **06 — Spec-Driven Development Without Waterfall** | Turn the next intersection uncertainty into a bounded increment, with evolving specifications and explicit open questions | Specify progressively |
| **07 — Directing AI Engineering Agents** | Explain a bounded, illustrative tool-assisted analysis/proposal task with sources, permissions and review outputs | Direct and evaluate agent work |
| **08 — Engineering in Small, Reviewable Increments** | Separate interface, model, test and software improvements into reviewable changes while respecting physical dependencies | Control integration scope |
| **09 — Continuously Integrated Engineering** | Design and **operate** the relevant engineering factory; an eligible bounded software change may target a hypothetical 24-hour accepted-request-to-releasable window, unlike physical/assurance-gated changes | Connect architecture to delivery capability |
| **10 — Verification, Validation and Engineering Evidence** | Distinguish simulated property checks from controller, wiring, installation, operational and physical validation deliverables | Qualify product readiness |
| **11 — Governance and Engineering Authority** | Examine safety/security/authority and risks when signal behavior or sensing interfaces change | Govern specific engineering consequences |
| **12 — Managing Engineering Knowledge at Scale** | Compare related intersection configurations; ask which model, interface and test patterns can be reused and what evidence must be revisited | Reuse knowledge responsibly |
| **13 — The AI-Native Engineering Environment** | Revisit the greenfield question, follow an illustrative product baseline and a later change, and assess the engineering environment's growing capabilities | Understand the end-to-end two-system cycle |

**AI distinction:** AI agents may support engineering the intersection. The illustrated signal controller need not contain AI. An optional predictive traffic-model idea may illustrate **AI in products**, clearly labeled as an unselected hypothetical alternative. Do not claim the simple fixed-time controller uses AI. Do not invent agent-run logs.

## Visual and editorial consistency

- **V02/V03, current Ch03:** Show controlled system views and an interactive typed graph (source/edge/status inspectable; accessible table fallback). These are educational visualizations, not a database or modeling IDE.
- **V04, current Ch04:** Bounded phase-state and arrivals demonstration; pure calculation separate from display; seed/stated config for reproducibility; static explanatory fallback.
- **V06, current Ch05:** Raw/curated/derived data, source identity, annotations and linked explanatory charts.
- **V05, current Ch06:** Progressive spec maturity and decision consequences, not a coding tool.
- **Ch07–13:** Reuse the same illustrative definitions only where a *new learning question* justifies the view. Avoid decorative dashboards, separate contradictory datasets and redundant model definitions.
- Dark reading experience consistent with [the site design guide](../CHAPTER-STYLE-GUIDE.md); gold engineering environment / teal product in the contexts where this meaning matters.
- The general craft of HTML presentations, scrollytelling, mindmaps and narrative dashboards belongs in **Document-as-Code Lab**. This site covers engineering semantics and visual evidence; no fourteenth presentation chapter.

## Implementation/publishing controls

1. Owner reviews the updated Chapter 01–04 content proposal and reference vocabulary before approving a chapter migration.
2. The full course is **13 chapters** with titles/numbering controlled by [CURRICULUM-MAP.md](../CURRICULUM-MAP.md); the prior alternative sequence is historical only.
3. Previous owner-approved alternative-chapter prose remains in [the preserved manuscript archive](manuscripts/INDEX.md), untouched.
4. Any source fixtures, diagrams, interactive graph or simulation require their own scoped implementation PR, schema/semantics review, tests, accessibility checks and explicit publication decision.
5. Existing front page, **published condition-monitoring Chapter 01 preview**, original 12 DMS lessons, v2 Engineering Data article and V0 model are not changed by this reference decision.
