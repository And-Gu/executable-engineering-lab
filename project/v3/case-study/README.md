# One inspectable V3 teaching case — the four-way intersection

**Current edition.** The chapter numbers and publication plans below come from the November 2026 proposal. In the published course, you can [inspect three of T1’s eight graph relationships in Chapter 4](https://and-gu.github.io/executable-engineering-lab/learn/v3/04-engineering-knowledge-as-code/#change-impact-figure). Use the [fixed-phase inputs](model-inputs-v1.json) to [move one arrival in Chapter 5](https://and-gu.github.io/executable-engineering-lab/learn/v3/05-learning-through-models-and-prototypes/#arrival-experiment) or [carry both queues into a second cycle in Chapter 6](https://and-gu.github.io/executable-engineering-lab/learn/v3/06-engineering-data-from-measurements-to-decisions/#two-cycle-experiment).

The [interface comparison is in Chapter 10](https://and-gu.github.io/executable-engineering-lab/learn/v3/10-from-models-to-an-integrated-product/#one-word-two-different-interfaces) and the [whole-product release decision is in Chapter 13](https://and-gu.github.io/executable-engineering-lab/learn/v3/13-continuously-integrated-engineering/#make-the-whole-product-decision). The [active sequence](../manuscripts/revised/INDEX.md) ends with Chapter 14, [From Engineering Question to Useful Release](https://and-gu.github.io/executable-engineering-lab/learn/v3/14-from-engineering-intent-to-continuous-integration/).

**Editorial status:** proposed teaching-source contract (revision T1); awaiting owner acceptance and eventual independent review. **Not** an approved traffic engineering design or published Astro experience.

**Purpose:** Give all fourteen chapters the same small set of source objects, model definitions, inspectable outputs, decisions and open questions. The owner-approved [course order](../../CURRICULUM-MAP.md) and the [single traffic-intersection concept](../REFERENCE-INTERSECTION.md) remain authoritative for educational goals.

## Source of truth and evidence status

| Source | Role | Recorded status |
|---|---|---|
| [source-graph-v1.json](source-graph-v1.json) | Stable teaching IDs, typed relations, source semantics, status and proposed impact | Fictional source assertions; no physical confirmation |
| [model-inputs-v1.json](model-inputs-v1.json) | Fixed eight-slot teaching model, event order, A/B arrival sequences, invalid input rules | Invented model and input assumptions |
| [trace-v1.csv](trace-v1.csv) | Sixteen computed state records, eight per scenario | Recomputed deterministic **toy-model calculation**, not a deployed V3 simulation or field measurement |
| [two-cycle-run.json](two-cycle-run.json) | Both scenarios across the cycle boundary with source checksums | Computed by running `node project/v3/case-study/run-two-cycles.mjs` from the repository root |
| [data-quality-v1.json](data-quality-v1.json) | Legitimate derived comparison and the deliberately inapplicable legacy C row | Editorial data-quality decisions |
| [queue-initiative.json](queue-initiative.json) | Before-and-after planning excerpt linked to the saved arrival-edit observation | Illustrative proposed update for team review, not an actual city or agent decision |
| [DECISION-CHAIN.md](DECISION-CHAIN.md) | Controlled next increment, agent task, reviewable slice, integration mismatch, evidence, governance, release, reuse and capstone | Proposed engineering decisions, not executed project actions |
| [MODEL-CHECK.md](MODEL-CHECK.md) | Exact model formula, checks and limitations for a future implementer/editor | Independent editorial recomputation record; not software/system qualification |

These files are outside Astro's site source, so GitHub access does **not** make them published lessons. The JSON and CSV are machine-readable *teaching* materials; no real-world data or physical traffic design claims are made.

**Status language:** “Recorded” means present in our fictional versioned educational source. “Proposed” means a candidate or task idea. “Computed” means only the declared toy-state transition was evaluated against invented inputs. “Not run” means no physical, deployment, agent-tool or integration test was performed. “Accepted” applies only to the owner-approved curriculum structure, not this fixture's product facts.

## Why there is one small reference case

The earlier manuscript review found a gap: the narrative repeatedly asks readers to inspect models, graphs and decisions without supplying any records. The remedy is not a complex controller, a graph database or a mandatory code exercise. A small, readable fictional system is enough to show **what information would matter and which claim could actually be defended**.

The system-of-interest is a **candidate control subsystem** with a function for selecting permissive phases. Road users, actual visible indications, the cabinet, and maintainers are **outside** that controller subsystem but matter to the whole product and its intended use. This explicit boundary prevents later chapters quietly treating a software state as a verified physical indication.

## Graph source → insight (Chapter 03)

The graph contains **12 nodes and 8 explicitly typed relations**. It supports two useful questions:

- A candidate conflict rule constrains the phase-selection function; a teaching state model represents that function. If a new phase-selection strategy is proposed, the model is a reasonable **review candidate**.
- A proposed adaptive strategy may affect the controller interface, but that is explicitly a **possible impact**. A graph edge, and especially a missing edge, cannot establish real system independence, implementation completion or verification success.

A deliberately invalid proposed link to an unknown ID must be shown as unresolved/rejected, not silently drawn as an authoritative connection.

**Required public learning experience later:** a typed interactive graph based on exactly these or an approved successor fixture, with selected-node details, relationship meaning, source/revision and a keyboard-accessible static relationship table. No graph runtime exists in this editorial PR.

## The toy model → data (Chapters 04–05)

The model has **eight abstract slots, not seconds**. Both scenarios use the fixed phases:

| Slot | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---:|---|---|---|---|---|---|---|---|
| Phase | NS green | NS green | NS amber | All-red | EW green | EW green | EW amber | All-red |

In every slot, add arrivals **before** service; at most one vehicle departs from the active green group. The other group waits. Both start with empty queues.

| Outcome after eight slots | Scenario A, staggered | Scenario B, clustered |
|---|---:|---:|
| NS + EW arrivals | 2 NS + 2 EW | 2 NS + 2 EW |
| Total departures | **3** | **2** |
| Remaining NS + EW vehicles | **1** | **2** |

This comparison is about the consequence of **arrival placement within a short fixed schedule**. It does not compare adaptive control, produce a mean waiting time, recommend signal timing, validate physical safety or establish representative traffic conditions. The original input records, trace rows and derived totals all refer to **T1**.

**Chapter 05 complication:** A fictional spreadsheet supplies “queue_final = 20” but no unit, horizon, definition or model revision. Its source remains visible and the comparison is **withheld**. Do not guess a conversion or silently exclude the row while suggesting all records were analyzed.

**One decision:** Before recommending a signal strategy, improve the reproducibility/validity of the comparison and establish which operating criteria matter. A failed data-quality comparison can be an educational success.

## The product bridge and later chapters

Chapter 06 specifies a narrow next increment: reject malformed inputs and reproduce the T1 trace. Chapter 07 may show a **clearly illustrative** agent instruction and source-selection process; it must not invent a recorded agent execution. Chapter 08 compares a thin vertical change with a cross-discipline interface change.

**New Chapter 09** confronts the product integration question: controller-side interface revision A expects acknowledgment of an **applied indication**, whereas a fictional adapter at revision B acknowledges only **message receipt**. A delivered message is not evidence that a physical signal is showing the requested state. The instructional decision is to **defer compatibility acceptance**, define the semantic gap, and plan a bench/emulator or physical observation. No supplier hardware or test has been used.

Chapter 10 assesses evidence **per claim and configuration**; Chapter 11 decides who may accept or defer risk. Chapter 12 connects change eligibility to the factory that engineers **build and operate**, with the optional hypothetical 24-hour request-to-releasable objective. Chapter 13 examines reuse across related configurations, while Chapter 14 asks which engineering capability to improve next.

## Decisions that still require review

1. Approve or revise the minimal relationship vocabulary, object ownership, source versions and model/system boundary.
2. Review all calculated data and invalid-input test cases; then create a validated isolated pure teaching model only when explicitly authorized.
3. Approve the integration mismatch semantics as a **fictional learning case**, with a credible test/observability plan; do not call any physical result complete.
4. Revise the **fourteen complete reader manuscripts** using these records, including newly written Chapter 09. Keep all old manuscript sources unchanged.
5. Commission independent re-review of the new manuscript set and separately approve any Astro implementation/publication.

Track the editorial work under [issue #45](https://github.com/And-Gu/executable-engineering-lab/issues/45), the [fourteen-chapter migration](../CHAPTER-MIGRATION-13-TO-14-2026-11-16.md), and master [issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32).
