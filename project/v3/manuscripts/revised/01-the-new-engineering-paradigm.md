---
id: eel-v3-ch01-new-paradigm
chapter: 1
part: "I — Frame the Work"
title: "The New Engineering Paradigm"
status: draft
publication: review-in-pr
reference_case: four-way-traffic-intersection
teaching_fixture: "Conceptual overview; case begins in Chapter 2"
---

# The New Engineering Paradigm

*What would help a team turn an engineering question into a sound decision sooner?*

When two disciplines discover an interface disagreement during integration, they may have to revisit weeks of design work. A check that exposes the same disagreement as soon as either definition changes gives engineers time to compare options while a change is still affordable.

Building that check improves how the organization engineers its products. Reusing it on the next variant helps the team support more designs and gives new colleagues a way to understand the interface. The investment pays off when it improves a product decision or reduces avoidable rework.

<span id="expectations-are-changing"></span>

## Where earlier feedback improves delivery

For a business competing on the quality and frequency of product improvements, the delivery objective is to get a useful change into service sooner, with evidence that it works. A team that produces changes faster than it can integrate or test them moves work into a queue.

In a software-intensive program, an interface mismatch found at the end of that queue can send several teams back to trace dependencies, revise designs and repeat tests. That rework can take more engineering time than the original change, and a missed integration date can delay the release.

A web service may deploy repeatedly, embedded software may need controlled integration, and a physical design may depend on an expensive component order or a scarce slot on a test rig. Each team can shorten the path from a question to reliable feedback within its own delivery constraints.

## Software-inspired engineering moves beyond software

Software development offers practices that other disciplines can adapt, including smaller increments, explicit configurations, versioned information and continuous integration. For multidisciplinary systems, the challenge is to connect these practices without assuming that every discipline has the same cycle time.

A model of a physical function can be executed before hardware is ready. An interface contract can be checked when either side changes. If several product variants use the same module, recording which revision each uses tells the integration lead which teams a change affects.

An engineering decision can retain its rationale and applicable evidence. A new engineer joining the next variant can read why the team chose an interface limit and rerun its check without tracking down the original designer. Sharing modules, decisions and checks across compatible designs gives the business a way to support more variants without a proportional increase in engineering staff.

## AI expands what engineering teams can do

AI assistance can help teams explore alternatives, draft and review technical artifacts, prepare experiments and interpret results. An engineer might describe an interface rule in plain language and give a tool-using AI agent a bounded task. The agent could draft a small model of the rule, run the agreed checks and revise it after a failure before handing it back for review.

These capabilities matter most when the environment provides meaningful, sufficiently independent checks. If the agent's language model confuses seconds with milliseconds, a test it writes from the same interpretation may agree with a faulty change. Engineering judgment is still needed to set objectives, protect constraints, decide what evidence is credible and authorize consequential changes.

Giving an agent access to current definitions, maintaining independent checks and reviewing exceptions all take engineering time. Those costs belong in the case for using AI in development, alongside any time saved on recurring investigations. An AI function built into the product would change its behavior in use and would need its own performance evidence.

## Two systems must evolve together

Every engineering organization is developing two related systems.

The **product system** includes software, electronics, physical components, interfaces, operators and the operating environment. It is judged by what it can actually do, under the conditions that matter.

The **engineering system** includes the people, methods, engineering knowledge, executable models, automated tests and integration equipment used to design, build and validate the product. It is judged by how well it helps the organization make sound product decisions and deliver improvements.

A Word specification can explain an interface decision, an Excel workbook can hold its limits, and a specialist design tool can show how the circuit uses them. When those sources travel separately, reviewers have to establish which revisions belong together. The team can keep those tools, agree where to maintain a structured interface definition and connect it to the models and tests that use it.

**“We build the machine that builds the machine.”** A difficult product question may reveal the need for a new simulation or test fixture. A better engineering capability may make previously expensive options practical to investigate. Managers can fund a check that removes a recurring delay and keep a handoff manual when the cost of automating it outweighs the benefit. The bonus article follows that investment in a small documentation team. [Building the Machine That Builds the Machine](/executable-engineering-lab/bonus/building-the-machine-that-builds-the-machine/).

> **Concept**
>
> Changing a module to report elapsed time in milliseconds changes the product. A repeatable check that compares the units declared by sender and receiver improves the engineering system. Teams can run it on the next variant before the hardware is ready.

## From document-driven handoffs to executable feedback

In this lab, **executable engineering** describes an approach in which suitable models, analyses, checks and workflow steps can be run, evaluated and improved. A passing test is evidence about a stated check under specific conditions. Two connected feedback loops guide what the team does with that evidence.

- With **fast executable feedback**, engineers make a bounded change, run a model or test, inspect a failure and refine the work. If the units agree, the team can choose those revisions for integration.
- With **whole-product feedback**, engineers ask whether the integrated product meets its intended use. Even when the declared units agree, a physical test may reveal that the receiver gets a value too late under load. Reviewing the consequence with an operator can change both the interface definition and the next automated check.

## What this means for engineering leadership

A useful investment gives teams an earlier signal about a decision that costs time or money to reverse. Before funding the interface check, a leader can look at recent integrations. When did each mismatch surface, how many teams had to revisit their work, and what delivery commitment was affected? Those cases give the team a baseline for judging whether earlier detection on subsequent changes saves enough rework to justify maintaining the check.

If mismatches now surface early but the release still depends on timing under load, the next investment might be time on the test rig. A team might use a risk burndown chart to track its estimated exposure over successive integrations. A leader can then see which risks have fallen and which still affect a delivery commitment.

> **Explore further**
>
> In Chapter 15, [compare four investments against the product decision they would support](15-choosing-the-next-engineering-capability.md#decide-from-what-is-blocking-the-product).

<!-- interactive: chapter-quiz -->

## From the paradigm to a working example

A fictional city brings a question to the [intersection workshop in Chapter 2](02-introducing-the-engineering-challenge.md). How could we improve traffic flow at our busy four-way intersection while keeping crossings safe and the signals easy to understand and maintain?
