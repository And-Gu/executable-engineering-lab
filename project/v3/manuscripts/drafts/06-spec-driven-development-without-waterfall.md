---
id: eel-v3-ch06-spec
chapter: 6
part: "II — Building Engineering Knowledge"
title: "Spec-Driven Development Without Waterfall"
status: draft
reference_case: four-way-traffic-intersection
publication: unpublished
---

# Spec-Driven Development Without Waterfall

*How can we describe the next engineering change precisely enough to act—without pretending the entire system has been designed?*

After studying traffic arrivals, the team decides to improve its simplified signal-timing baseline. It has enough information to define a bounded next investigation, but not enough to commit to every hardware interface, adaptive-control algorithm or future operating mode.

There are two unhelpful extremes. One is to begin implementation with an ambiguous instruction such as “make traffic flow better.” The other is to demand a complete product specification before anyone can learn from a model or prototype.

**Progressive specification** offers another approach. We make the next important intention, assumptions and acceptance conditions explicit, while keeping unresolved questions visible. Engineering definition matures alongside exploration and implementation.

## Intent is not a finished specification

The city's intent is to improve useful traffic flow under acceptable constraints. That is a purpose, not an implementation contract.

The engineering team can turn it into a narrower question: *How would a revised fixed-time phase allocation affect modeled waiting under the traffic scenarios we have defined?*

Now the team can identify what is known: a specific illustrative intersection configuration, a bounded phase state model, defined arrival scenarios and a method for comparing results.

It can also identify what is not known: realistic traffic distributions, pedestrian interactions, physical controller behavior and whether any modeled improvement would be useful in real operation.

The specification for this investigation needs to define the scope, interfaces, inputs and acceptance criteria for **the next increment**. It need not invent answers to the questions the experiment is supposed to address.

## Two feedback loops operate together

Exploration asks: *Which idea is worth pursuing?* The team creates hypotheses, models, observations and comparisons. It may discard an option after seeing the results.

Delivery asks: *What defined capability can be built and checked now?* The team selects a bounded change, updates controlled sources, develops it and evaluates it against agreed conditions.

These loops are connected and can run concurrently. A model may mature while an interface is being implemented. A test failure can send the team back to a hypothesis. A physical observation can force a revision of an apparently settled specification.

“Without waterfall” does not mean “without structure.” It means avoiding the assumption that all learning must finish before implementation, or that decisions never change once recorded.

*Suggested maturity view: Follow one concept from an open question to a selected investigation, then to a controlled next-increment definition. Each stage shows what became explicit and which questions deliberately remain open.*

## What belongs in the next increment?

A useful bounded specification might contain:

**Purpose:** Compare a revised fixed-time strategy with the defined reference.

**Scope:** The illustrative two-signal-group state model and its timing configuration. No real controller or roadside deployment.

**Inputs and definitions:** The applicable state sequence, named parameters, representative arrival scenarios and model revision.

**Constraints:** Preserve the simplified no-conflicting-permissive rule within the modeled states and make invalid timing inputs observable.

**Acceptance conditions:** The model runs reproducibly, each tested configuration has identifiable outputs, expected properties are checked, and differences can be inspected against the reference.

**Open questions:** How do conclusions change with pedestrian or turning movements, real arrival measurements and hardware limitations?

These categories describe the engineering definition, not the exact programming task list. Another team member or agent should be able to understand why the work matters and which outcomes must be reviewable.

## Prompts direct work; specifications preserve knowledge

Natural-language interaction can make engineering work easier to initiate.

An engineer might ask an AI agent to propose candidate phase-timing configurations, identify affected assumptions or prepare an initial comparison plan. The prompt conveys intent and context to a task-performing system.

But a conversation is a poor substitute for a persistent engineering definition. The relevant constraints, decisions, interfaces, model revisions and acceptance conditions need to survive when the conversation ends or a different agent takes over.

A **versioned specification** is where the controlled information belongs. It can be represented through readable text, structured records, models and links to specialist tools. A generated SysML view may help explain part of it without becoming the only authoritative source.

Tools such as OpenSpec and GitHub Spec Kit illustrate specification-oriented software workflows. The broader engineering principle is not tied to either tool, nor limited to generating software from text. A specification may govern an analysis method, electrical interface, physical test or engineering review.

## Define the engineering work as well as the product work

Our revised signal-timing investigation may require a small change in the modeled product behavior. It may also require new engineering capabilities: parameter validation, comparable scenario outputs, a regression check or a clearer connection between decisions and results.

The specification should make both kinds of change visible where necessary.

If we keep adding capabilities to the engineering environment without choosing a product question, we risk building a platform with uncertain value. If we keep implementing product changes without improving repeated analyses and checks, each iteration may become needlessly expensive.

The valuable increment is one that advances the product question and leaves behind appropriate reusable learning.

## When a specification changes

A versioned definition does not mean a frozen definition.

If the simulation reveals an unsupported assumption, the team should record the result, revise the relevant source and decide whether the existing tests still apply. A new revision should make the change understandable to reviewers. Not every suggestion deserves acceptance, and not every successful automated check establishes technical suitability.

A decision record can explain why a provisional timing strategy was selected over an alternative. It can also record a deliberate deferral: adaptive control remains an option, not a secretly approved requirement.

This is how control and exploration can coexist. Change is expected; the meaning of each change is maintained.

## Ready for delegated work

With a bounded definition, identifiable sources, clear assumptions and useful acceptance conditions, some engineering tasks become suitable for delegation to AI agents.

An agent still needs relevant context, access to appropriate tools and a way to report what it actually did. The engineer needs to evaluate the result.

That brings us to **Directing AI Engineering Agents**.
