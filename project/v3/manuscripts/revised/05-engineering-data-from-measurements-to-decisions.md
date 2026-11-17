---
id: eel-v3-ch05-engineering-data
chapter: 6
part: "II — Build and Test Knowledge"
title: "Engineering Data: From Measurements to Decisions"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — synthetic source, computed outputs, editorial quality decisions"
---

# Engineering Data: From Measurements to Decisions

*Two results look different. Are they actually comparable?*

The previous chapter examined two invented traffic-arrival patterns using the same fixed-phase model. With identical directional arrival totals, scenario A ended the eight-slot window with one vehicle queued; scenario B ended with two.

Those values may be useful when thinking about the next model experiment. But then a colleague finds a third spreadsheet row labeled **queue_final = 20**.

At a glance the new row appears to describe a much worse result. Should we put all three values into a chart and conclude that scenario C is ten times worse than B?

Not yet. We do not know whether “20” counts vehicles, measures a time, aggregates several queues or refers to another horizon. We do not even know which model or configuration produced it.

The work of engineering data is to establish **which comparisons can support a specific decision**. T1 already computes deterministically for fixed inputs; that alone cannot tell us whether a new record uses the same metric, conditions or model. Quality, meaning, provenance and experimental design are the important questions here.

## Begin with the meaning of a record

Here are the small teaching records used in our fictional intersection case. They can be inspected in the [T1 data-quality source](../../case-study/data-quality-v1.json).

| Source record | Reported value | Meaning and unit | Revision and window | Editorial decision |
|---|---:|---|---|---|
| Scenario A | 1 | Vehicles still queued | Model T1, after slot 8 | Retain |
| Scenario B | 2 | Vehicles still queued | Model T1, after slot 8 | Retain |
| Legacy spreadsheet C | 20 | **Unknown** — field called queue_final | **Unknown** | **Withhold comparison** |

The first two results belong to the same simple model. They describe an end-of-window queue count with a defined unit, rule and observation horizon. A and B also share two NS arrivals and two EW arrivals; their difference is the *placement* of those arrivals.

The legacy row has none of that interpretive context. It remains part of the original record set, but it cannot contribute to this comparison.

This distinction matters in any engineering discipline. Two apparently identical values can represent different test conditions, model configurations, sensor calibration states, software revisions or physical installations.

## Data quality begins before drawing a chart

Imagine a graph with bars of height 1, 2 and 20. The picture is easy to read, but the meaning is false or at least unsubstantiated: it implies the three observations belong to the same comparison.

A useful data check asks questions before presentation. Do we know the units? Were the results measured or calculated? Which population and time window do they summarize? What input and model revision created them? Are missing fields absent because the source never recorded them, or because a transformation discarded them?

The T1 case answers those questions for A and B. Both are **calculated from invented inputs**, not measurements from an intersection. The full [trace](../../case-study/trace-v1.csv) retains the arrival and departure counts that produced the two numbers.

The third row cannot pass the same check. We should preserve the row as originally received, annotate the uncertainty and withhold the comparison. An invented conversion from “20” to a unit we prefer would make the data tidier while making the engineering conclusion less reliable.

A missing unit is sometimes recoverable from a trustworthy source. A missing model revision might require a different investigation or a new run. These are not the same kind of defect.

## Original, curated, annotated and derived

Data refinement is easier to review when each stage has a clear purpose.

**Original records** preserve what was actually supplied. The T1 arrivals and the unqualified spreadsheet row should remain available as distinct sources.

**Curated records** have been checked for fundamental consistency: identity, revision, field meanings, values, units and expected structure. For the T1 model, negative or fractional vehicle arrivals are invalid. Eight slots are required. Those rules prevent impossible inputs from being silently accepted by the toy calculation.

**Annotations** add context that a raw value does not carry. “Scenario B uses model T1, an eight-slot horizon and clustered arrivals” is useful. So is “legacy C lacks a known unit and cannot currently support comparison.” An annotation is not a license to replace an unknown source fact with a guess.

**Derived records** state how an output was calculated and from which inputs. For our comparison, final queued vehicles are derived from the same eight-slot transition rule. The output can be checked against the original arrivals, departed counts and remaining queues.

**Interpretation** then asks what the result means for the question at hand. In T1, clustering changes the remaining queue at this finite horizon. It does not establish real traffic performance or support an operational controller change.

The important idea is to preserve the meaning and source of each transformation. A deterministic calculation will produce the same output for fixed inputs; the harder question is whether the resulting records describe comparable conditions and justify the intended conclusion. A derived value should not become an independently maintained new source of truth.

## An inspectable transformation

The transformation in this small case is deliberately simple:

1. Preserve the original A/B arrival sequences and the spreadsheet-C row.
2. Read the model revision, eight-slot horizon and event-order rules from the T1 definition.
3. Recompute the departures and remaining queues, keeping every step accessible in a table.
4. Confirm that A and B have equivalent definitions and totals for the stated comparison.
5. Flag the missing unit and configuration for C; **withhold** it rather than converting an unknown value.
6. Present the comparison of A and B with its source links, and state which conclusion remains unsupported.

The steps are small enough to follow manually. A linked chart would add value if selecting a result revealed its underlying arrival pattern, model inputs and derivation. A decorative dashboard would add little.

There is no need to construct a large data-management application to teach this judgment. The educational interaction should make the consequence of the **data-quality decision** visible.

## What the model's outputs do not say

One subtle risk deserves attention. A summary can report how many vehicles departed during a short observation, yet tell us little about the experience of vehicles still waiting when the window ends.

In scenario A one vehicle remains; in B two remain. We did **not** define mean waiting time, and therefore should not calculate a delay average from only the departures while silently excluding unfinished waits. Doing so could produce an attractive numerical comparison with a hidden denominator problem.

A richer model might later add arrival timestamps, individual waiting times or repeated seeded runs. Those additions would have to define their meaning, event ordering, missing observations and uncertainty. More precise-looking numbers do not automatically mean a more credible engineering decision.

## Why this changes the engineering environment

The **product** team wants to understand intersection operation. The **engineering environment** must make the relevant observations and calculations usable.

That means source identities, definitions, units, configurations and observation windows remain available. Automated checks can detect invalid inputs or incompatible records before a comparison reaches a decision. A later reviewer should be able to follow **why** a conclusion was supported or withheld—not merely obtain the same calculated number again.

The same principle applies when a product includes AI. Evaluation data must represent conditions relevant to the intended use, and the relationship between model revision, data selection and test result matters. That is a question about **AI in the product**. An engineering agent helping prepare a dataset is a different use of AI and requires its own context and authority.

Reusable, carefully described data is an engineering asset. It can help a second team, a later prototype or another model investigation—provided those users can judge its applicability rather than just access a file.

## What should the team do next?

The T1 A/B comparison is internally consistent for its narrow, invented scope. The legacy-C comparison remains unsupported. Neither observation justifies adopting a new real signal strategy.

A sensible next engineering increment would make input constraints executable, reject malformed inputs and test that valid scenarios still meet their defined criteria after changes. It should also record which **product** questions remain open. That is different from specifying an entire intersection controller before the operating requirements are understood.

In the next chapter, **Spec-Driven Development Without Waterfall**, we will turn that bounded need into a specification with concrete valid and invalid cases, while keeping broader product alternatives open for learning.

**Engineering takeaway:** Data become useful when their meaning, quality, origin and transformations are inspectable. A chart can reveal a pattern, but the engineering value comes from knowing which comparisons are justified—and being willing to withhold one that is not.

---

*Inspect the sources:* [Original model inputs](../../case-study/model-inputs-v1.json) · [Calculated trace](../../case-study/trace-v1.csv) · [Curation record and invalid row](../../case-study/data-quality-v1.json) · [Model-check note](../../case-study/MODEL-CHECK.md).
