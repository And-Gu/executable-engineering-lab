---
id: eel-v3-ch02-intersection-challenge
chapter: 2
part: "I — Frame the Work"
title: "Introducing the Engineering Challenge"
status: draft
publication: review-in-pr
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional teaching case, not a qualified controller"
---

# Introducing the Engineering Challenge

*One familiar system. Many engineering questions.*

A city wants to improve how people move through a busy four-way intersection. Drivers report queues when vehicles arrive in bursts. People walking across the road want safe, understandable crossing opportunities. Maintenance staff want to know how to diagnose a fault when a controller and a signal indication disagree. Operations staff must keep the intersection usable during changes.

An adaptive controller sounds appealing. New detectors might help. Perhaps the existing signal sequence could be improved. But the city has not yet established which problem is most important, which movements must be protected or what evidence would justify a change.

We will return to this four-way intersection throughout the course. Here it gives us a first question to investigate before the team selects a controller.

> **Explore further**
>
> The [intersection case description](../../REFERENCE-INTERSECTION.md#the-shared-engineering-question) explains the city's question. The [case source collection](../../case-study/README.md) contains the assumptions, inputs and observations used later.

## Start with engineering intent

The city's engineering intent is to improve traffic flow while protecting people crossing the road. Different stakeholders experience the intersection differently. Their concerns help the team decide what to observe and which requirements it can define with confidence.

| Stakeholder | Example concern | Question that remains open |
| --- | --- | --- |
| Drivers | Long queues and unpredictable waiting | Which traffic conditions and outcomes matter? |
| Pedestrians | Safe and understandable crossing opportunities | Which movements, conflicts and timing constraints must be protected? |
| Operators | Predictable behavior and manageable changes | What conditions and procedures define acceptable operation? |
| Maintainers | Fault diagnosis and equipment state | How will commanded, acknowledged and observed states be distinguished? |
| Engineering team | A defensible concept and credible evidence | Which experiments can answer which product questions? |

These concerns cannot be reduced to one queue metric. Optimizing an abstract model without defining crossing safety, interfaces and intended operation could make the wrong problem easier to solve.

> **Concept**
>
> An intent sets a direction, such as improving pedestrian crossings. A requirement needs a criterion that people can check. Agreeing on whose crossing, under which conditions and what to measure gives the team a way to develop that criterion.

## Establish a whole-system boundary

The conceptual product includes the control function, signal indications, relevant electrical and communication interfaces, physical installation, road users, maintenance, operating procedures and environmental conditions. Software is an important part, but not the complete system.

Our earliest executable model is deliberately smaller. It considers a **simplified fixed-phase signal sequence and invented vehicle arrivals**. It can help us reason about some queue behavior under stated rules. It cannot establish safe crossing times, real traffic performance, controller reliability, hardware timing or compliance with traffic regulations.

An engineer can use a language model to sketch this small prototype from the signal sequence and the arrival rule, then check the result by tracing one time slot by hand. That makes an early assumption cheap to change while the team learns which details matter.

## The first learning question

Imagine two scenarios with the same total number of arriving vehicles but different arrival patterns. Would a deliberately simplified fixed-phase model produce different queues at the end of the observation window?

That is a suitable initial *learning question*, not a promise of improved traffic throughput. The team needs a defined phase sequence, a meaning for arrivals and departures, explicit event-order rules and traceable results. The answer may show something useful about the abstraction—or expose missing assumptions.

We will not solve that question here. Later chapters will introduce the controlled engineering information, executable model and data needed to investigate it properly.

<!-- interactive: chapter-quiz -->

## Two kinds of work follow from the same question

**On the product side**, the team must define relevant road-user movements, intended behavior, interfaces and acceptable trade-offs. It must distinguish what is known from what is merely proposed.

**On the engineering side**, the team needs ways to manage shared definitions, run bounded experiments, inspect outputs, test changes and retain decisions. A simple script may be sufficient for one experiment; a reusable test environment may be worth developing when the same checks recur.

This is where the two-system idea from Chapter 1 becomes practical. The engineering environment should grow in response to an actual product need, and the improved environment should make subsequent product decisions more reliable.

## How the example develops through the course

We will use this same intersection from start to finish, with each chapter adding a distinct engineering concern:

- **Planning and information:** choose the next uncertainty to investigate, then preserve definitions and relationships so disciplines share the same meaning.
- **Models, data and specifications:** make a bounded behavior executable, inspect what it reveals, and define a controlled next increment without pretending to know every answer.
- **Agents and integration:** delegate suitable work with feedback and review, connect software to electrical and physical interfaces, and discover discrepancies that a pure software model might miss.
- **Evidence, authority and evolution:** establish what has been verified and validated, determine what may responsibly be released, and decide which engineering capability is worth improving next.

The storyline is educational rather than a prescribed project sequence. Real teams must consider integration, verification, safety, security and operational needs from the beginning, even though later chapters examine those topics in greater depth.

## From the first question to the next experiment

The team now has an intent, a question about arrival patterns and a small prototype it could build. It must decide what to investigate first and what finding would change that choice. [Chapter 3 develops a plan around that uncertainty](03-planning-under-uncertainty.md).
