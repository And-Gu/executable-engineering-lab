# Distributed Monitoring System — Demonstrator Specification

**Status:** Proposed baseline · **Version:** 0.1 · **Date:** 2026-10-16

## 1. Educational purpose

The DMS is a deliberately fictional, simplified system. It demonstrates how engineering intent becomes requirements, architecture options, executable models and evidence. It is **not** an operational surveillance design, threat model, or representation of actual sensor performance.

The tutorial must distinguish:

- **Intent:** What users need to achieve.
- **Definition:** Requirements, design choices, assumptions and models used to specify a solution.
- **Evidence:** Results of particular analyses or tests, bound to versions and inputs.

## 2. Operational context

An operator wants to understand activity in a bounded industrial area. Relevant objects may enter, traverse and leave the area. Sensor types and architecture are initially open questions. In the first demonstration the system is reduced to geometric observation coverage of a rectangular area.

### Initial engineering questions

- What does sufficient coverage mean in a specific reference scenario?
- How do sensor location and assumed sensing radius affect geometric area coverage?
- How can a measured result be evaluated against a requirement?
- Which real-world considerations are omitted from the simple model?

## 3. V0 system boundary and assumptions

The model has:

- A 2D rectangular area: width = 100 model units; height = 100 model units.
- A single fixed sensor at (50, 50) by default.
- A sensor detection footprint represented by a **perfect circle** of radius 35 model units.
- Uniformly weighted area; points inside the disk are considered covered and outside uncovered.
- No terrain, occlusion, directional sensitivity, uncertainty, time, moving objects, sensor faults or communication effects.
- A proposed reference requirement of **at least 50% geometric area coverage**.

The 50% number is a **teaching assumption**, not a derived operational requirement or recommended design target. Use generic *model units*, not meters, unless a later chapter defines a calibrated physical model.

### Geometric definition

Area: `A = [0, width] × [0, height]`.

Sensor footprint: `D = {(x,y) : (x − sensor.x)^2 + (y − sensor.y)^2 ≤ radius^2}`.

Coverage percentage: `100 × area(A ∩ D) / area(A)`.

This is an **area fraction**; it is not detection probability, tracking performance or mission effectiveness.

## 4. Initial engineering artifacts

| ID | Type | Intent |
|---|---|---|
| NEED-001 | Operational need | Provide the operator with geometric observation coverage of a designated area |
| REQ-COV-001 | System requirement | Achieve at least 50% geometric coverage for SCN-001 under the stated V0 model assumptions |
| SCN-001 | Reference scenario | 100×100 area, sensor at (50,50), radius 35 |
| MODEL-COV-001 | Executable model | Compute area fraction under an ideal circular footprint |
| TEST-COV-001 | Verification | Evaluate REQ-COV-001 with model output and record evidence |

Relate them explicitly:

`NEED-001 → REQ-COV-001 → SCN-001 → MODEL-COV-001 → TEST-COV-001 → RESULT-*`

These arrows indicate a teaching-level trace chain, not a claim that all relationships have identical semantics. Represent actual relationship types explicitly when developing a graph in later milestones.

## 5. Proposed source records

### `engineering/requirements/REQ-COV-001.yaml`

```yaml
id: REQ-COV-001
title: Geometric monitoring coverage
source_need: NEED-001
statement: >
  Under reference scenario SCN-001 and the V0 model assumptions,
  the monitoring configuration shall cover at least 50 percent
  of the defined area geometrically.
threshold_percent: 50
verification:
  method: simulation
  model_id: MODEL-COV-001
  test_id: TEST-COV-001
  scenario_id: SCN-001
```

### `engineering/scenarios/SCN-001.yaml`

```yaml
id: SCN-001
title: Single-sensor reference configuration
area:
  width: 100
  height: 100
sensor:
  x: 50
  y: 50
  radius: 35
units: model-units
model_id: MODEL-COV-001
```

Create a short `NEED-001` source record in the implementation so `source_need` is resolvable. Register the model and test IDs as machine-readable metadata or a small manifest. Do not add dangling references solely for illustrative purposes.

## 6. Calculation and numerical contract

A deterministic grid-sampling algorithm is acceptable for V0 (e.g., 100×100 equally sized cell centers). Document the sampling resolution and boundary rule (`≤ radius`). The displayed percentage is **an estimate** with a discretization error; do not present it as exact circle/rectangle intersection geometry.

**Required model API (conceptual):**

```ts
type Area = { width: number; height: number };
type Sensor = { x: number; y: number; radius: number };
type CoverageInput = { area: Area; sensor: Sensor };
type CoverageResult = {
  coveredCells: number;
  totalCells: number;
  coveragePercent: number;
  method: 'cell-center-grid';
  gridWidth: number;
  gridHeight: number;
};

function calculateCoverage(input: CoverageInput): CoverageResult;
function evaluateCoverage(
  result: CoverageResult,
  requiredPercent: number
): { pass: boolean; marginPercentagePoints: number };
```

The model must reject non-finite inputs, zero/negative area dimensions, and negative radii. Sensor centers may be located anywhere (including outside the area) so future placement experiments remain meaningful; UI sliders may limit positions for usability. Accept radius zero as zero coverage. The test should check this explicitly.

Keep the engineering function independent of UI state and DOM. The default scenario must produce a deterministic reference result within the expected neighborhood of `π × 35² / 10,000 ≈ 38.5%`; the finite grid estimate may differ slightly. The 50% requirement must therefore **FAIL by default**, which is intentional: it motivates a parameter experiment. Do not hardcode the result or status.

## 7. Interactive lab behavior

The initial interactive lab provides:

- A square or correctly aspect-scaled rectangular monitoring area.
- A visible sensor position and circular ideal sensing footprint (clipped visually to area as appropriate).
- Controls for `x`, `y`, and `radius`, numeric values, and reset to SCN-001.
- Computed area coverage percentage and requirement PASS/FAIL from the shared model.
- Requirement reference `REQ-COV-001` and test reference `TEST-COV-001` with links to their sources or source views.
- A compact assumptions/limitations section.

Accessibility: Keyboard controls, accessible labels, textual equivalents for graphical information, status not communicated by color alone. Include units for dimensions and radius. Changes are immediately reflected in both visual and numerical results.

**Interpretation caution:** A reader changing parameters in the browser performs an interactive *what-if* run. Unless explicitly saved by a separate mechanism, this is **not** a versioned CI verification artifact.

## 8. Verification strategy

At minimum, automated tests must cover:

1. Default scenario result is deterministic and below 50%.
2. A centered sensor with enough radius (e.g., radius 80 on a 100×100 area) covers 100% of sampled area.
3. Radius zero yields zero coverage.
4. A sensor far outside the area yields zero coverage.
5. An invalid width, height, radius or non-finite value is rejected.
6. Moving a sensor can change computed coverage.
7. PASS occurs exactly when computed coverage is at least the requirement threshold; equality passes.
8. YAML records validate against their schema and all referenced IDs resolve.

A committed or workflow-produced **reference evidence record** should include test ID, requirement ID, scenario ID, model ID, result, threshold, PASS/FAIL, method, grid resolution, source commit identifier, and run timestamp. Distinguish reproducible calculation output from runtime metadata; reproducibility comparisons should not fail solely because the timestamp changes.

## 9. Planned evolution

- **V1:** Multiple sensor footprints, overlap, union-area computation, blind spots, candidate architecture comparison.
- **V2:** Explicit time model, moving objects, observations, simplified uncertainties, repeated experiment runs, performance measures.
- **V3:** Read-only agent investigation followed by scoped proposed changes and independently executed checks; human approval.
- **V4:** Governance controls, machine-readable assurance evidence and selected Gemara/OSCAL integration where justified.

Avoid making V0 code unnecessarily generic in anticipation of all future phases. Extend it through reviewable refactoring.

## 10. Completion criteria for V0

A third party can inspect source requirements and a scenario, run the model, reproduce a numeric coverage estimate, view its verification outcome, alter parameters in-browser and explain exactly which assumptions limit the evidence. All referenced source IDs resolve; no displayed test value is manually maintained separately from the calculation.
