# From an inspectable model to an integration and delivery decision

**Editorial record set T1 — proposed, fictional and non-operational.** Companion source material: [graph](source-graph-v1.json), [model inputs](model-inputs-v1.json), [computed trace](trace-v1.csv), [curation decisions](data-quality-v1.json). No physical product, agent execution or deployed system is asserted. This file is **not** a certified engineering dossier, an official change authorization or approved manuscript.

## Ch06: Specify the next investigation, not an invented fix

The two synthetic arrival patterns have the same aggregate directional demand yet leave **different queues** after eight abstract model slots. That finding does not justify changing real signal timings or choosing an adaptive controller. The appropriate near-term increment is **a reproducible comparison with input validation**.

| Field | Teaching record SPEC-INT-001, revision T1 |
|---|---|
| Intent | Make the miniature NS/EW comparison reproducible and interpretable |
| Input | T1 model, phase sequence and two eight-slot arrival vectors |
| Valid behavior | Preserve the declared arrival-before-service rule; produce the same trace for identical inputs and revision |
| Invalid behavior | Reject negative or fractional vehicle arrivals, an unknown phase or the wrong slot count **without producing a plausible trace** |
| Check | Recompute the trace independently and verify per-direction conservation plus the derived final counts |
| Acceptance boundary | Accept a *teaching calculation* as internally consistent only; no physical traffic capability or operational timing claim |
| Unresolved product question | Does the intended use require a different model, pedestrian/turning coverage or physical observations? |
| Next decision owner | Fictional lead systems engineer reviews scope and evidence; no invented external authority |

**Reader challenge:** Would a failed input validation mean the experiment achieved nothing? No: rejecting invalid data is itself a useful, verifiable improvement to engineering capability. A choice to improve a controller strategy remains open.

## Ch07: Task contract and context selection — an *illustrative* agent request

An engineering lead might ask an agent to evaluate the following bounded, candidate task:

> Inspect the current T1 model inputs, source graph and trace. Propose an isolated input-validation improvement. Verify that A and B remain unchanged and that a negative arrival is rejected. Do not change phase rules, interface contracts, owner decisions or any historical V0 model. Report exact files, proposed checks, status, unresolved conflicts and relevant source revisions. Stop if a referenced source is missing.

**Not an actual run.** No agent was assigned this task as part of this teaching case. This is a *hypothetical task contract*, not a transcript or observed tool trace.

| Context source | Why it is needed | Access status in a hypothetical agent workflow |
|---|---|---|
| source-graph-v1.json | Resolve the model and intended property identities | Read only |
| model-inputs-v1.json | Establish fixed rule and full scenario inputs | Read only unless task specifically authorizes a copy |
| trace-v1.csv | Inspect expected teaching output | Read only |
| data-quality-v1.json | Preserve the withheld legacy-C comparison | Read only |
| independent review and master issue | Understand educational scope and non-publication constraints | Read only |
| Proposed isolated test fixture | Hold the new validation check without altering unrelated model definition | *May propose* a change for review |
| Existing V0 system and public pages | Outside this assignment | **No write access/authority implied** |

**Handover example (illustrative template, never an invented result):** proposed diff; input and error-case coverage; checks actually run *if a real tool was used*; unresolved missing references; provenance; reviewer decision. A green run is not automatically accepted product engineering evidence.

## Ch08: The difference between a thin outcome and several disconnected layers

A coherent teaching increment is: **an invalid eight-slot arrival input produces a clear, accessible diagnostic and no model result**, with the same behavior in input validation, calculation and view. That outcome may require a related source schema, pure calculation check and visible message **within one reviewable change**. Splitting validation, calculation and display into unrelated changes can conceal whether the outcome works.

A separate proposal to revise **INT-IF-001** cannot be reviewed as a software-only wording change. It affects the interpretation of a signal command/acknowledgement and therefore needs review from controller, electronics/integration and operational perspectives. Code size does not decide the review boundary.

**Reader challenge:** Which changes must be understood together to support one engineering claim? Avoid choosing the number of pull requests by line count alone.

## Ch09: A product-interface discrepancy — the missing bridge

**Fictional record INT-DISC-001** compares two *proposed* interfaces. Neither is a verified physical interface or genuine supplier claim.

| Attribute | Controller-side candidate INT-IF-001 rev A | Hypothetical adapter INT-IF-ADAPTER-002 rev B |
|---|---|---|
| Wording in a superficial diagram | “acknowledged” | “acknowledged” |
| Actual stated semantics | Applied indication has been substantiated | Command message has been received |
| What that establishes | The design *expects* evidence of an applied state; this is only a candidate contract | The candidate adapter *asserts receipt only*, not a physical indication |
| What is NOT established | That a real device, sensor or operator can see a displayed state | That a signal is applied, correct, safe, or recoverable after a fault |
| Source and status | Fictional controller definition, proposed rev A | Fictional adapter definition, proposed rev B |

**Discrepancy:** The two claims are **not equivalent**. An acknowledgement of message receipt cannot substantiate a claim that a physical lamp or indicator reached the commanded state. If an architecture diagram uses the same word for both, it hides an important systems-integration gap.

**Proposed engineering response:** Defer interface equivalence. Agree semantics, configuration identity, owners and error/failure behavior; then plan a discriminating bench, emulator or later physical integration observation. A useful test would distinguish accepted communication from actual applied/observable indication under known configuration and failure conditions. This is a **test plan**, *not* a run result, and it specifies no real wiring, traffic timings or operational controller.

**Installer/maintainer question:** If the command is received but the applied state is unknown, what diagnostic can the operator see, how is the configuration identified and who can isolate the fault? This brings intended use, maintenance and the engineering environment into the same decision.

**Handover:** A *provisional product configuration and interface discrepancy* with open evidence, not a “deployed baseline.”

## Ch10: Evidence has to fit the claim

| Claim | Source/method | Result/status in T1 | What remains unproved |
|---|---|---|---|
| Toy T1 model keeps NS and EW green windows separate in the declared eight-slot sequence | Declared phase array and finite trace inspection | **Inspected synthetic sequence**, scoped to this example | General controller fault response, real signal safety, all possible inputs |
| A/B queue totals follow the T1 source rules | Deterministic editorial recomputation against invented inputs and all 16 CSV records | **Computed teaching calculation**; 1 vs 2 still queued | Real vehicle delay, real arrival distributions, real throughput |
| INT-IF-001 rev A and adapter rev B agree on acknowledged meaning | Comparison of two fictional proposed interface definitions | **Mismatch found / compatibility not accepted** | Correct integration implementation, physical indication |
| A real signal indication follows commanded state | Bench/physical observation proposed | **NOT RUN** | Actual indication, failures, recovery, installation, operational use |
| Intersection meets the city's needs and risk requirements | Stakeholder and operational validation | **NOT RUN** | Fitness for intended use or external approval |

**Decision:** A checked toy calculation is not a finding about real hardware or road safety. An interface-acknowledgement review is not equivalent to an integrated physical test. The term “PASS” belongs only to a specified tool/property check, never to an unspecified system-level acceptance.

## Ch11: Authority and assurance — explicitly defer an unsupportable acceptance

| Role in fictional team | Authority in this scenario | Action |
|---|---|---|
| Model/test maintainer | Approve editorial consistency of a teaching fixture | Can review and request changes to T1 source/trace only |
| Product interface owner | Propose interface contract semantics | Requests rev A/B reconciliation and adapter clarification |
| Integration/electronics reviewer | Evaluate observable state and bench/emulator test plan | Notes missing applied-indication evidence; no physical run |
| Accountable product decision-maker | Accept/reject a product integration step after relevant evidence and risk review | **Defer** equivalence acceptance and any operational readiness claim |

The tool's ability to change a file is not the authority to approve a product decision. Security, recovery, safety and operator diagnosability belong in the analysis **from the start**, not only in a final gate. A hypothetical diagram cannot assert compliance with a specific traffic regulation.

## Ch12: Engineering factory construction AND operation

Suppose the engineering team wants an **illustrative** capability to take a bounded, approved software change from accepted request to a **releasable configuration** within 24 hours. This is a design objective for *eligible change classes*, not a measured statistic or promise of every release.

| Fictional proposed change | Eligible for simplified rapid path? | Reason |
|---|---|---|
| Correct an isolated diagnostic-report label without changing model, interface semantics or operating behavior | **Potential candidate**, subject to relevant checks and normal authorization | A narrow, separable product-facing change may be testable using existing validated tooling; evidence and review still required |
| Alter controller acknowledgement semantics from message receipt to applied state | **No automatic eligibility** | Crosses electrical/physical/product interface and known open integration evidence; would need a new review classification |
| Change signal phase timings or introduce adaptive control | **No automatic eligibility** | Model and potential operational/safety consequences not resolved by software tests alone |

**Factory build:** Versioned source, data/test fixtures, interface checks, reproducible simulations, documented ownership, review gates, release/rollback and relevant physical integration environments.

**Factory operation:** The accepted request is analyzed, sources and assumptions retrieved, candidate checked, result compared, evidence retained, approval sought, and a configuration prepared when the criteria are met. A blocked interface issue reveals a missing integration capability: the factory itself must improve. Distinguish this request-to-releasable clock from DORA's commit-to-production metric.

There is **no claim** that a real intersection software version is deployed or that 24 hours has been achieved.

## Ch13: Reusing a method is different from reusing evidence

A proposed second intersection variant **INT-VAR-002** shares the T1 model format and source/trace checking method but uses a different fictional adapter revision. A shared *method*, source schema or agent skill may be reused after compatibility checks; the original interface observation, even if it later existed, does **not** automatically qualify the second configuration.

**Shared asset stewardship example:** The fictional model-data format moves from T1 to T2. One team can migrate after a source comparison and rerun; another must hold its earlier compatible version until an adapter/field meaning is resolved. The owner of the shared format notifies affected consumers. This is an illustrative asset-management consequence, not a claim that the example has multiple operational city installations.

## Ch14: Make a constrained engineering investment decision

You are the fictional engineering lead. Resources permit **one next investment**:

1. Improve source/data quality and annotations.
2. Build an integration/emulator capability that distinguishes message receipt from applied indication.
3. Expand agent delegation to automate more engineering tasks.

**Case facts:** The T1 experiment is now reproducible enough for its toy scope; an applied-state interface discrepancy remains unresolved; product acceptance cannot be established; agent delegation is not the binding constraint in the illustrated handover.

**Recommended reasoning:** **Choose the integration-observability capability first.** It addresses the most direct blocker to evaluating the product claim. Improving data quality remains important if scenario validity is later disputed; adding broader agent delegation is useful when the source/verification context is more mature. This is a **fictional engineering choice with disclosed assumptions**, not a universal ranking of engineering investments.

## Cross-course source integrity checklist

- Every number attributed to T1 comes from the same [input](model-inputs-v1.json), [trace](trace-v1.csv) and [curation](data-quality-v1.json) revisions; never create independent UI constants.
- Every graph relation derives from the same [fictional source](source-graph-v1.json); possible impacts remain marked as hypotheses.
- Every interface/integration claim distinguishes a *proposed contract* from an *observed physical indication*.
- Every agent task describes proposed context, allowed tools, actual evidence (if any) and decision authority separately.
- All public/physical/operational claims remain unqualified until genuine evidence and a separate engineering review exist.
- Preserve the original thirteen manuscript drafts, the prior approved prose and all V0/V2 published pages. This document is a **review artifact, not site content**.
