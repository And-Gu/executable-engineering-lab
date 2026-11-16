# V3 worked-case and substantive revision package

> **Implementation status, 2026-11-16:** This remains the original **proposal** used for editorial planning. A candidate [T1 source/trace/data record set](../case-study/README.md) and a separate [fourteen-chapter revised manuscript draft collection](../manuscripts/revised/INDEX.md) have now been authored. T1 arithmetic and graph references have undergone internal consistency checks; the fixture still requires source/domain and independent editorial acceptance, and no public browser graph, simulation or physical observation exists. Do not mistake this dated proposal for the authoritative data fixture or a publication decision.


**Status:** Concrete educational **proposal** derived from [independent review PR #42](https://github.com/And-Gu/executable-engineering-lab/pull/42); not a validated simulation, controlled engineering model, approved manuscript or site implementation  
**Date:** 2026-11-16  
**Reference:** [Single fictional traffic intersection](../REFERENCE-INTERSECTION.md)  
**Chapter structure:** Applicable to either the current approved 13-chapter plan or the separately proposed [14-chapter alternative](POST-REVIEW-STRUCTURE-PROPOSAL-2026-11-16.md).

## Why this package precedes new manuscript revisions

The independent reviewer found that the prose repeatedly **describes an inspectable model, data record, graph or review decision without supplying one**. We should remedy that with a **small, consistent, reusable set of teaching records** before polishing the text or adding interactive components.

A reader should be able to follow **one source item → model → calculated/hand-worked observation → data-quality decision → bounded specification → agent task/change → integration discrepancy → evidence/authority → eligible release decision → reuse/capstone** without having to create an engineering tool, install anything or run a real controller.

The following small examples are **candidate editorial fixtures**. They are not canonical product information, production traffic-control logic, actual measurements, or verified model execution. Approve their semantics and editorial use separately before any source/visual implementation.

## A. Minimum educational source map (P0)

Start with the **existing proposed IDs** in `project/v3/REFERENCE-INTERSECTION.md` rather than inventing independent identities per chapter. Candidate additions should be versioned in a single future teaching fixture only after a semantics review.

| ID | Meaning (illustrative) | Definition / relationship to inspect | Status |
|---|---|---|---|
| INT-NEED-001 | Desired traffic improvement | Motivates candidate behavior and studies; no quantitative goal fixed | Candidate |
| INT-FUN-001 | Signal phase selection | Has a candidate constraint and an illustrative model | Candidate |
| INT-REQ-001 | No simultaneous permissive NS and EW vehicle signals | `constrains(INT-REQ-001, INT-FUN-001)` | Candidate model property, not operational safety proof |
| INT-IF-001 | Controller-to-signal interface | Signal command meaning/version to be examined at integration | Candidate |
| INT-MOD-001 | Two-group fixed-phase toy model | `represents(INT-MOD-001, INT-FUN-001)` | Educational abstraction |
| INT-DAT-001 | Arrivals scenario inputs | `input-to(INT-DAT-001, INT-EXP-001)` | Invented data for teaching |
| INT-EXP-001 | Bounded compare-two-arrival-patterns experiment | `evaluates(INT-EXP-001, INT-MOD-001)` (experiment versus model) | **Hand-worked specimen below** |
| INT-TST-001 | Candidate no-conflict check | `test-purpose(INT-TST-001, INT-REQ-001)` | Not yet executed |
| INT-DEC-001 | Provisional fixed-time baseline | Rationale plus open alternatives | Proposed learning decision |
| INT-CHG-001 | Adaptive-control exploration request | Might affect phase logic, interface and tests | Unselected proposal |

**Relation modeling rules:** Every graph edge needs direction, type, assertion source/revision and current/proposed status. These relation names are **candidate types** awaiting approval, not established terms in a running system. `test-purpose` states a test's intention, never that a test passed. Inferred impact is presented as *review candidate*, not as an authoritative edge. Missing relations must not imply independence.

**Editorial action:** Chapter 03 should include the minimum real **teaching** records and one source-backed traversal, with an accessible table; do not show only a decorative network. A browser graph may be implemented later using exactly the same fixture.

## B. Transparent toy experiment contract (P0; source for Ch04 and Ch05)

**Question:** Given a **fixed-phase** teaching schedule, could changing the *timing of arrivals* alone change the queues left after one short observation window?

This is a deliberately tiny **hand-worked** queue illustration, not a simulation result from the repository, a physically valid signal timing plan or an estimate of real-world waiting. The numbers are invented inputs.

**Definitions:**
- Two abstract vehicle groups: north–south (NS) and east–west (EW); one queue per group.
- Eight abstract ordered slots, **not seconds**. Fixed phase sequence: NS green, NS green, NS amber, all-red, EW green, EW green, EW amber, all-red.
- A green group can process **at most one queued vehicle** in that slot. Amber and all-red process **zero**.
- Start with empty queues; in each slot first apply that slot's arrivals to its group, then permit one departure from the green group if available. All other arrivals remain queued.
- Count only aggregate *arrivals, completed departures and vehicles still queued at the horizon*. Do **not** claim average or maximum waiting time, driver experience, legal timing values, or validated intersection safety.
- Neither phase schedule nor control logic changes between the two cases. An agent or browser visualization must not imply the fixed-time controller adapts to queues.

**Two short input scenarios:** Same total and direction-specific arrivals (2 NS + 2 EW each), **different arrival clustering**.

| Slot | Fixed phase | A: NS arrivals | A: EW arrivals | B: NS arrivals | B: EW arrivals |
|---:|---|---:|---:|---:|---:|
| 1 | NS green | 1 | 0 | 0 | 2 |
| 2 | NS green | 0 | 1 | 0 | 0 |
| 3 | NS amber | 1 | 0 | 2 | 0 |
| 4 | All-red | 0 | 0 | 0 | 0 |
| 5 | EW green | 0 | 0 | 0 | 0 |
| 6 | EW green | 0 | 1 | 0 | 0 |
| 7 | EW amber | 0 | 0 | 0 | 0 |
| 8 | All-red | 0 | 0 | 0 | 0 |

**Hand-worked queue results** after arrival and service each slot. Every cell is a vehicle **count**, not a time.

| Slot | Phase | A: NS queue | A: EW queue | B: NS queue | B: EW queue |
|---:|---|---:|---:|---:|---:|
| 1 | NS green | 0 | 0 | 0 | 2 |
| 2 | NS green | 0 | 1 | 0 | 2 |
| 3 | NS amber | 1 | 1 | 2 | 2 |
| 4 | All-red | 1 | 1 | 2 | 2 |
| 5 | EW green | 1 | 0 | 2 | 1 |
| 6 | EW green | 1 | 0 | 2 | 0 |
| 7 | EW amber | 1 | 0 | 2 | 0 |
| 8 | All-red | 1 | 0 | 2 | 0 |

| Outcome | Scenario A (staggered) | Scenario B (clustered) |
|---|---:|---:|
| Total arrivals | 4 | 4 |
| Departures (NS) | 1 | 0 |
| Departures (EW) | 2 | 2 |
| Total departures | **3** | **2** |
| Still queued at slot 8 | **1** | **2** |

**Interpretation:** The phase schedule and arrival totals are identical, but arrivals at different times create a different queue/outcome within this one finite window. **The example does not tell us which scenario is 'better,' what a real controller should do, or how long vehicles waited.** Arrivals left in the queue after slot 8 must not be ignored when interpreting future delay metrics. In a real model the hand-worked example would need additional rules and independent verification.

**Editorial action:** Include a short before/after trace in current Chapter 04; the full table may be an accessible reference. An interactive implementation (if separately approved) should derive the figure and data table from a *single validated pure model*, not duplicate numbers in UI code. A static worked example is acceptable before a runtime exists; label it accurately.

## C. Data-quality decision arising from that same trace (P0; Ch05)

The **A/B results above** can be compared within this teaching contract because they explicitly share the model definition, horizon, queue units, service rule, and total direction-specific arrival counts. The difference does *not* establish representative traffic conditions.

Add an intentionally defective imported record as a **separate, visibly invalid specimen**, not as a silently comparable third scenario:

| Source row | Value | Metric | Unit | Model revision | Status |
|---|---:|---|---|---|---|
| Hand-worked A | 1 | End-of-window queued vehicles | vehicles | Candidate teaching contract T1 | Illustrative |
| Hand-worked B | 2 | End-of-window queued vehicles | vehicles | Candidate teaching contract T1 | Illustrative |
| Legacy spreadsheet C | 20 | `queue_final` | **unknown** | **unrecorded** | **Withhold comparison** |

**Reader decision:** Do not infer that C is 10× worse than B. First establish its unit, metric definition, observation window and source configuration. A missing unit cannot be 'repaired' by a guessed conversion. If the source cannot establish comparability, retain C with an annotation and *withhold* the derived comparison.

The educational transformation is **raw → checked/curated → annotated → derived → interpreted**, with the original row retained, a reason for any withholding and a linked table/plot that uses only rows qualifying for that claim. The purpose is data refinement and judgment, not teaching readers to operate a spreadsheet tool.

## D. A small progressive-specification and review chain (P1; Ch06–08)

**Ch06 — Specify the next meaningful increment:** The observed queue difference creates a question, *not* a right to change signal timings. A proposed next increment might be **add a reproducible comparison and reject invalid scenario inputs**:
- Goal: ensure one can reproduce and assess the input scenarios for the existing toy model;
- Controlled inputs: model version, eight-slot horizon, arrival counts and phase schedule;
- Valid case: an input with two valid queue-arrival series produces a repeatable trace;
- Invalid case: a negative arrival count or an unknown phase is rejected with an actionable error; **no plausible-looking run output**;
- Success criterion: both the valid trace and invalid-input handling are explained and checked;
- Open question: whether the toy model is useful for an operational traffic decision is **not** answered;
- Review owner: an explicitly named role within the fictional engineering team, not a claimed public authority.

**Ch07 — Delegate a bounded task:** An agent could inspect the current source record, the model contract and test definition; propose an isolated change; run only permitted checks; and report an actual result or reason for stopping. **No invented executed agent log.** Use an explicitly illustrative timeline unless a genuinely recorded and source-pinned run is later provided.

**Ch08 — Deliver a thin vertical outcome:** Compare (a) a single reviewable change that rejects negative arrivals from validation through a visible diagnostic and one actual applicable check with (b) a command-interface revision that **cannot be treated as only a software-layer change** because electronics/integration owners must review its meaning. Explain the difference between preparatory layers and an outcome-driven slice.

## E. Missing integration bridge (P0; Ch08→proposed Ch09→V&V)

**Single fictional interface discrepancy:**
- Controller-side candidate contract **INT-IF-001 revision A** expects a phase command to result in an *applied-state acknowledgement*, identifiable by configuration/version.
- Proposed adapter/supplier-side interface **revision B** returns a *message-received acknowledgement* only, without evidence of the actual indicated physical state.
- Both messages could be labeled “acknowledged” in a casual architecture diagram. Their **meaning differs**; neither can be assumed equivalent, and no installed hardware or supplier data exists in this teaching scenario.

**Reader inspection question:** What would be required to substantiate the controller's intended property at the **product boundary**? Who owns the semantic mapping and possible failure handling? Which test might a bench, emulator or later integration environment actually run?

**One reviewable record** (illustrative):

| Field | Teaching value |
|---|---|
| Discrepancy | Applied-state vs received-message acknowledgement semantics |
| Affected source | `INT-IF-001` (candidate interface revision comparison) |
| Product consequence | The controller cannot infer physical indication from a receipt acknowledgement |
| Engineering-environment consequence | Need a versioned interface agreement, adapter contract, emulator/bench plan and integration observation |
| Proposed response | Do not accept interface equivalence; request definition/compatibility clarification and test planning |
| Authority/evidence state | No physical integration executed; no acceptance or operational-release decision made |
| Operator/maintainer question | If a signal command is accepted but the indication is not established, what must be observable to diagnose and restore the system? |

**Chapter purpose:** Readers see how engineering *crosses* functional modeling, software, electronics, interfaces, physical installation and intended operation. They do **not** learn to design real traffic signals or wire a roadside cabinet.

A new integration chapter remains **proposed** until the owner decides on 14 chapters; under a 13-chapter choice, distribute the same substantive case across Chapters 08–11.

## F. Evidence, authority and release eligibility (P1/P0; current Ch09–11)

Carry **the exact configuration and interface discrepancy** into the next chapters:

1. **Evidence:** A toy state-model result may support only its model-level checked behavior. A declared interface-contract review supports different claims. Physical indication, fail-safe behavior, installation and intended-use validation remain `not_run` or unresolved; avoid a single completion percentage.
2. **Authority:** A named fictional reviewer can authorize further investigation or defer a change; a tool permission or automated check is not the authority to accept an untested physical implication. Show one **deferred** decision, not only successful gates.
3. **Release cadence:** Illustrative “accepted change request → releasable baseline in 24h” is an **architectural requirement for a defined eligible class**, not a claim every signal timing change is eligible. A documentation/diagnostic/report correction may be a candidate; a change to control command semantics cannot simply inherit eligibility. Show why the same change might be blocked until integration evidence and accountable review exist.
4. **Factory design AND operation:** Product needs demand versioned interfaces, model/testing fixtures, source provenance, reproducible checks, approvals, integration environments, release/rollback and operational feedback. Then show what happens when a mismatch is found during operation and what engineering capability the team improves.
5. **Later reuse:** A second illustrative intersection variant may reuse model/test patterns, but product-specific evidence may not transfer. An interface-contract revision needs steward/owner, compatibility record and consumer notification.

## G. Ownership, acceptance and boundaries

| Work package | Editorial deliverable | Completion evidence | Priority |
|---|---|---|---|
| W0 — chapter-structure decision | Approved 13/14 decision, titles and order (or documented deferral) | Owner comment in tracking issue; update one course map only after explicit decision | **P0** |
| W1 — reference information contract | Small versioned teaching IDs, relation/status semantics and provisional system boundary | Human review of source and one graph traversal/table; no runtime claims | **P0** |
| W2 — model/data truth set | Approved toy experiment, trace, original rows, withheld comparison and math/logic validation | Independently checked table, versioned source, clear `hand-worked` / `executed` distinction | **P0** |
| W3 — product integration bridge | Agreed interface discrepancy, physical/environment consequences and proposed test/evidence/decision chain | Reader can identify mismatch, required interface agreement and open test claim | **P0** |
| W4 — manuscripts 03–06 | Four revised, reader-facing chapters tied to W1/W2 outcomes | Clear source → model → data → specification chain without repetitive boilerplate | P1 |
| W5 — manuscripts 07–13/14 | Bounded agent task, vertical increments, integration/evidence/governance/release, reuse and capstone | Each chapter teaches one new evaluable decision using same case IDs | P1 |
| W6 — editorial and technical verification | Language, source, links, accessible diagrams, representative rendered pages and independent re-review | Reviewer feedback addressed; code checks separately; approval/publish separately | P1 |

**QA invariants:** The same factual/illustrative status must follow every record into its derived views. A clean build and a well-drawn chart do not prove an engineering or learning outcome. Preserve previously approved source prose and original DMS V0 routes; any interface graph, simulation, Astro page or publishing work needs separate scoped approval.

**The worked teaching example above is a proposal, and its arithmetic is hand-worked—** not a validated model output. Confirm the full source contract and independent calculations before converting it into reference fixtures or rendered chapter content.

## H. Recommended execution sequence

1. Obtain owner D1/D2 response to [the structure proposal](POST-REVIEW-STRUCTURE-PROPOSAL-2026-11-16.md).
2. Approve a minimal fixed-boundary teaching source/graph model; independently validate the toy trace (including input/phase ordering).
3. Draft Chapter 03, 04 and 05 revisions together so their examples and handoffs are **identical**.
4. Define the integration discrepancy and revise the bridge, evidence/authority and release-eligibility chapters.
5. Rework the agent task, reviewable increment, reuse and capstone around the actual shared records.
6. Review 13/14 full manuscripts for prose, structure and source citation quality.
7. Only after explicit approval, create separate Astro/site implementation PRs (including mandatory Ch03 graph and bounded Ch04 simulation). Preserve the original published site until a reviewed release.
