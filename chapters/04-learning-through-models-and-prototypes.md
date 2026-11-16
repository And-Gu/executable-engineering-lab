# Chapter 04 — Learning Through Models and Prototypes

**Status:** Proposed V3 editorial update to an existing brief; current title/sequence owner-approved, full new prose pending  
**Part:** II — Building Engineering Knowledge  
**Reference:** [four-way intersection case](../project/v3/REFERENCE-INTERSECTION.md)  
**Review:** [Chapters 01–04 reconciliation](../project/v3/CHAPTERS-01-04-EDITORIAL-REVIEW.md)  
**Visual guide:** [Engineering Visualization](../docs/v3/ENGINEERING-VISUALIZATION.md).

## The one question
What should we model, simulate or prototype to learn whether a candidate intersection concept works **under the assumptions we can justify**?

## What the reader must gain
Describe how an engineering question determines model fidelity and experiment design. Distinguish functional/behavioral representations, a bounded state machine, deterministic vs seeded random arrivals, physical prototypes and real observations. Understand reproducible inputs, interpreted outputs and how model limits affect engineering decisions. Explain why executable analysis capability is also a maintained asset of the engineering environment.

## Opening engineering situation
A fixed signal-timing concept is simple to describe, but its effect on vehicle queues depends on arrival patterns and permitted phase transitions. Before deciding to investigate adaptive control, the team needs a repeatable model, meaningful comparisons and awareness of missing physical/operational concerns.

## Narrative arc
1. Choose a *specific learning question*: what could the next experiment tell us about phase behavior and queue outcomes?
2. Compare suitable model forms and their fidelity: conceptual system diagram, signal-state model, discrete queue/arrival simulation, physical prototype and later field validation.
3. Introduce a small two-group **north–south / east–west phase** representation with amber and all-red clearance; the no-conflicting-permissive rule is a model-level **candidate property**, not proof of actual intersection safety.
4. Compare **regular vs seeded stochastic arrivals** with a stated average rate; interpret queue size, waiting time, throughput and run-to-run variation as simulation results.
5. Make the **execution contract** visible: inputs, version/configuration, pure calculation vs rendering, timeline/traces, deterministic replay and appropriate checks.
6. Explain how outputs affect the product idea and what new experiment/test capability is worth developing. Show what physical design, electronics, pedestrian/turning conflicts, reliability and real operation **have not** been evaluated.

## Primary educational view V04
A bounded interactive phase-state/vehicle-queue simulation or a reproducible static walkthrough before interactive implementation is authorized. The viewer can predict, vary a limited input, run/pause/reset, inspect a readable signal-state sequence and compare outcomes. State and chart share one defined scenario; reproduce seeded cases and provide keyboard/table/text equivalents. Do not make a code editor, working traffic-controller product or safety assessment.

## Source prose / preservation
Reuse selected approved *Executable Engineering Models* paragraphs on model types, signal phases, arrival processes, fidelity and engineering choices. The old DMS single-sensor calculation remains a separate legacy reference, not the current recurring example.

## Acceptance / transition
Reader can explain what a simulation establishes **and what experiment is needed next**, not merely read a number. No fake physical measurements, fabricated agent log or unqualified release readiness. Bridge to Chapter 05, *Engineering Data: From Measurements to Decisions*: **How do we quality-check, annotate, compare and reuse the observations and calculated outputs from this experiment?**

## Boundaries
Pure model, visualization, source fixtures and interaction require a separately scoped implementation PR and verification; this brief alone authorizes no public change. Preserve existing Astro/legacy V0 routes.
