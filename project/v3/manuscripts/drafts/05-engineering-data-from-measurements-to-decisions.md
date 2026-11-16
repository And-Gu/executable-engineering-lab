---
id: eel-v3-ch05-data
chapter: 5
part: "II — Building Engineering Knowledge"
title: "Engineering Data: From Measurements to Decisions"
status: draft
reference_case: four-way-traffic-intersection
publication: unpublished
---

# Engineering Data: From Measurements to Decisions

*A simulation can produce thousands of numbers. Which of them actually help us make a better decision?*

The intersection team has simulated signal behavior under regular and irregular arrivals. It has queue lengths, vehicle events and estimates of waiting time. One scenario seems to give a better average result.

Before recommending a timing strategy, however, an engineer notices that two comparison files use different configurations and one lacks a clear unit for the reported waiting time. Both calculations may be internally correct. The comparison is not yet reliable.

This is the difference between **having data** and **having usable engineering information**.

Data gain value through interpretation, quality checks, annotation, relationships, analysis and preservation. Those activities can be repeated by a maintained engineering workflow, not only performed as one-off spreadsheet repairs before a meeting.

## Start by asking what the data represent

Our example includes several different kinds of information.

A **scenario input** describes an assumed vehicle-arrival pattern. A **simulation output** is a computed result from a model and a particular configuration. A **physical measurement** would come from an instrument observing a real intersection under known conditions. A **derived indicator** might summarize a series of waiting-time estimates. A **planning assumption** may represent a limit or preference that nobody has physically measured.

These categories must not be merged simply because their values share a column in a table.

A waiting time estimated from a teaching simulation is not a measured waiting time. Adding a fictional cabinet power budget to a comparison may illustrate a trade-off but does not establish electrical feasibility.

Clear provenance makes the difference visible. For each important record we need to know its source, scenario or product configuration, method, units and revision. These are not administrative decorations; they determine what a comparison means.

## Quality begins before visualization

Suppose the team wants to compare modeled waiting time across several traffic-arrival scenarios.

First, it checks the data: Are units consistent? Do timestamps and scenario identities exist? Are records complete? Does each output link to an input configuration? Are there duplicate events or missing intervals? Does a result belong to the same model revision as the other scenarios?

A missing or conflicting record should be exposed rather than silently fixed. Some missing values can be corrected from authoritative sources; others must remain unknown until the team investigates.

This creates an important distinction:

- **Original data** preserve what was received or generated.
- **Curated data** have been checked, normalized or annotated under documented rules.
- **Derived data** are calculated from identified inputs and methods.

A useful engineering environment retains the relationships among these stages. An annotated dataset should not silently overwrite the original observations. A chart should not hide which configuration produced its points.

*Suggested investigation view: Select a source run and follow “original → curated → derived.” Inspect one missing-unit warning, one configuration mismatch and a calculated summary. A linked table exposes the exact records supporting the chart.*

## Annotation adds meaning

Two values can be numerically equal yet refer to different conditions.

A queue of six modeled vehicles during a quiet period is not the same engineering observation as a queue of six during a transient burst. A test result for one controller revision does not automatically apply to a later revision.

Annotations can capture model version, traffic regime, control strategy, scenario seed, unresolved assumptions and review comments. They make data interpretable and easier to reuse.

Annotation can also reveal uncertainty. An engineer might flag that the simplified model excludes turning movements. This is more useful than forcing every result into a single confidence score whose meaning is unclear.

Another form of enrichment joins information across engineering disciplines. A software configuration might be related to an electrical interface revision or a planned detector option. That join needs reliable identifiers and explicitly defined meanings. Matching rows because two names look similar can create a plausible but false picture.

## Visualization is an investigation method

Consider two signal-timing options with similar **average** modeled waiting times.

A single average conceals how waiting varies. A time-series chart may reveal intermittent queue growth; a distribution may reveal that one option creates a much longer tail of waits for a subset of simulated vehicles. A table can show which scenario, configuration and assumption produced the apparent difference.

The point is not to decorate a decision document. It is to expose an aspect of the data that the average did not answer.

A useful visualization needs a clear engineering question: *Which option is less sensitive to irregular arrivals under these stated assumptions?* The reader should be able to select scenarios, inspect a chart and see the corresponding records. Differences between a proposed requirement and an observed model output must remain explicit.

Sometimes the most helpful result is a warning that the datasets are not comparable. That is an engineering finding, not a failure of the visualization.

## Data and AI in products

If a future intersection concept uses a predictive traffic model, the team will need representative training and evaluation data, relevant operating conditions and a method for detecting performance weaknesses. That is **AI in the product**.

AI agents used by engineers may help organize those datasets, propose checks or summarize anomalies. That is a different role. A well-described evaluation dataset can benefit both human reviewers and agent-supported workflows without becoming a claim that the product's AI has been validated.

The data requirement therefore affects the engineering environment. Maintaining source identity, checks, test cases and reusable transformations is not merely reporting overhead. It enables repeated model comparisons and better-informed system decisions.

## Preserve learning, not only a chart

A conclusion that cannot be reconstructed becomes difficult to trust or reuse.

The team should retain the relevant original inputs, transformation rules, scenario and model revisions, chart definition, results and decision notes. When someone changes the controller later, these assets allow the previous comparison to be rerun or questioned.

Good data management does not require one universal database. Information may remain in specialist tools and version-controlled sources, provided that the relevant identities, relationships and access paths are meaningful.

We have now moved from running an experiment to understanding the quality of the information it produced. The next question is what we can responsibly commit to changing.

That requires **specifications that evolve with what we learn**, without pretending every unknown has already been settled.
