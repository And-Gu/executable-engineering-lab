# Verification note: T1 fictional model and graph fixture

**Status:** Editorial mathematical/consistency verification completed in this working session, 2026-11-16. **Not** a product verification result, real controller test, physical traffic result, model-fidelity assessment, independent expert assurance or acceptance of the manuscript.

## Source and method

Inputs are in [model-inputs-v1.json](model-inputs-v1.json), graph semantics in [source-graph-v1.json](source-graph-v1.json), derived trace in [trace-v1.csv](trace-v1.csv) and data-quality disposition in [data-quality-v1.json](data-quality-v1.json).

The simplified model has two queues NS and EW, both initially empty. Eight abstract slots have a **fixed** phase schedule. For each scenario and slot:

1. Add the incoming nonnegative integer vehicles to the corresponding queue.
2. Allow **at most one departure** from the group whose phase is green; amber and all-red have zero departures.
3. Record the queue remaining **after arrival and service**.

For group g at slot t:

`available(g,t) = queue(g,t-1) + arrivals(g,t)`  
`departures(g,t) = min(available(g,t), service_capacity(g,phase_t))`  
`queue(g,t) = available(g,t) - departures(g,t)`

Here capacities are 1 for the green group and 0 for every other group/phase. A negative, fractional or missing arrival is invalid. An unrecognized phase is invalid. This is a **model definition**, not a source of real traffic timing advice.

## Computed educational results

| Scenario | NS arrivals | EW arrivals | NS departures | EW departures | NS queued | EW queued | Total queued |
|---|---:|---:|---:|---:|---:|---:|---:|
| A — staggered | 2 | 2 | 1 | 2 | 1 | 0 | **1** |
| B — clustered | 2 | 2 | 0 | 2 | 2 | 0 | **2** |

Both have **four** invented arrivals; the fixed phase schedule never changes. One comparison factor is **when arrivals occur within each group**. The result is a queue count at a finite horizon, **not** mean waiting time, throughput under realistic loading, or a traffic performance recommendation.

### Independent editorial cross-check already performed

During preparation, a first JavaScript implementation generated all **16 trace records** from the declared inputs and checked conservation. A second, separately written calculation fetched the saved inputs and CSV through the GitHub connection and independently recomputed **every field in all 16 rows**; it matched exactly. The second check also resolved all eight typed graph edges to twelve existing source objects, confirmed the deliberately missing target is not a real object, rejected negative/fractional arrivals and unknown phase labels, and verified each derived final queue in the data-quality file.

Those are **editorial consistency checks**, not an independent accredited engineering examination, an executed Astro simulation or empirical evidence. The standalone [verify-fixture.mjs](verify-fixture.mjs) preserves a reproducible check for future editors. **It has not been wired into GitHub Actions or the public site**; before promotion, run and record its results in the checked-out repository and review its test coverage.

### Conservation

For each direction separately, `arrivals = departures + final queue`, because the initial queue is zero and the model has no losses. For scenario A this is NS: 2 = 1 + 1; EW: 2 = 2 + 0. For scenario B NS: 2 = 0 + 2; EW: 2 = 2 + 0. This detects a missed or double-counted departure in the trace but **does not** establish real-world fidelity.

### Graph integrity

Every existing edge has a known source and target ID, a declared relation type, source revision T1 and a status. The staged invalid link to `INT-IF-UNKNOWN` is deliberately **not resolvable** and must remain an explicit error/review candidate. “Recorded in fictional fixture” is a provenance state, not a declaration of system implementation or passed tests.

**Important edge semantics:** A link from a test to a property states purpose, not a passing result. A link from a model to a function says what it is intended to represent, not that every system behavior is captured. A “may affect” edge is a proposed review candidate rather than a proven impact.

## Data curation and comparison gate

[The data-quality fixture](data-quality-v1.json) retains original A/B counts and a deliberately incompatible C row. Comparison of C is **withheld** because the unit, model revision, metric meaning and observation horizon are unrecorded. Do not guess conversions or treat “20” as twenty vehicles, queueing seconds or a ratio to A/B.

The allowed editorial conclusion is narrow: **with T1's eight-slot rule and invented arrivals, arrival clustering changes the number still queued**. No real intersection, physical indication, safety or AI-agent performance is assessed.

## Explicit missing work / future checks

- [ ] Owner/editorial review of object vocabulary, system boundary, source revision, model assumptions and whether two-group signal phase is a useful pedagogical simplification.
- [ ] Run `node project/v3/case-study/verify-fixture.mjs` in the repository environment; retain actual stdout and CLI exit code for the record.
- [ ] Once an approved pure teaching model exists, compare its outputs byte-for-byte with the reference trace and add negative/missing-input cases to suitable repository tests. Do not copy the equations independently into Astro components.
- [ ] Review any extension to seeded stochastic arrivals, waiting-time metrics, pedestrians, turning movements, hardware faults or integration assumptions as a separate version with documented meaning.
- [ ] Before any public interactive graph/model, verify accessible source/status details, text equivalents, keyboard operation and differences between candidate claims and actual execution records.
- [ ] Commission an independent *re-review* of the revised full fourteen-chapter manuscript set when complete.

The source record set is intentionally **small and auditable**; its educational power comes from a reader being able to inspect an actual relationship, calculate a number and refuse an unsupported inference.
