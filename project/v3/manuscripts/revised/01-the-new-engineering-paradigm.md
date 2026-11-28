---
id: eel-v3-ch01-new-paradigm
chapter: 1
part: "I — Frame the Work"
title: "The New Engineering Paradigm"
status: draft
publication: published
reference_case: four-way-traffic-intersection
teaching_fixture: "Conceptual overview; case begins in Chapter 2"
---

# The New Engineering Paradigm

*Can we develop new products and improve existing ones, release useful changes faster and more often, and do so at lower cost?*

These ambitions can appear to conflict. More capability can mean more complexity, while faster delivery can leave less time to discover problems. But the way we engineer a product also affects that equation. If teams can find disagreements earlier, reuse what they have learned and keep the product integrated as it evolves, they may be able to improve several outcomes together.

Four currents are changing how teams approach that challenge: software-driven engineering, agile development, model-based systems engineering and AI-native engineering.

**Software-driven engineering** brings practices such as versioned information and automated checks across disciplines. Engineers work with product code, requirements, test cases and documentation as connected engineering information. Where appropriate, these are refined, linked and reviewed together through an automated build and feedback chain.

Teams take responsibility for both the product and the engineering system that develops it: the tools, checks, information and ways of working they depend on. The emphasis shifts toward the product’s functionality, health and value over time, rather than only the artifacts needed to complete a project.

As these practices extend beyond software, they can also broaden engineering roles. Systems engineers and software engineers may work in the same environment and, in some cases, combine responsibilities that were previously separate.

**Agile development** organizes work in small increments so that a team can test assumptions and change direction while the design is still taking shape. Cross-functional teams can gather around the most valuable problem, complete a bounded piece of work and use what they learn to decide what comes next. They also improve the process and tools they use.

This challenges a familiar pattern: detailed decisions are made before the team has had a chance to learn, followed by handoffs between separate disciplines. Agile development seeks earlier feedback across those boundaries and makes the team responsible for maintaining a working, integrated baseline as the product evolves.

**Model-based systems engineering (MBSE)** uses system models to describe requirements, structure, interfaces and behavior, and to explore design choices. These models can make relationships easier to examine and provide information that connects engineering work across disciplines and lifecycle stages.

MBSE does not, by itself, prescribe how an organization plans work or arranges its teams. It can improve engineering within existing silos and handoffs, or be combined with iterative, cross-functional development. In this course, we will connect a Systems Modeling Language (SysML) system description to shared text-based information and, later, to an executable model. Chapter 2 introduces that description; Chapters 4 and 5 develop the shared text and executable model.

**AI-native engineering** designs the development environment for people and AI agents to work together. This goes beyond adding an AI assistant to an existing tool or asking it to help with an isolated task. Agents can be given access to relevant engineering information and tools, contribute to bounded tasks across the workflow, and return their work for engineers to examine.

For example, an agent can help turn shared technical information into a runnable model, then use the results of an experiment to draft an update to that information. Engineers check the model and its results, decide what they mean and remain responsible for the decisions.

## Working products and executable models

Teams aim to get something working early and evaluate how it behaves. Wherever practical, they work with an integrated product or subsystem under conditions that reflect its intended use. When the product is not yet available—or when a question can be explored more effectively elsewhere—they use prototypes, simulators and executable models.

Requirements, specifications and other descriptions help the team decide what to build and examine. They evolve as the team learns from the working solution.

The four currents can support a shared way of learning, although each contributes different practices. A team considers its intent and the people affected, then chooses a bounded change or question. It uses shared information and models to clarify the meaning of definitions, assumptions and relationships, and to identify which versions belong together. It examines the question using a working product, subsystem, prototype or suitable model. Engineers interpret the observations, decide what to do next and use the learning to revise the product or its design and improve the engineering system's information, tools, methods or checks.

When a decision calls for evidence closer to actual use, the team might test an integrated subsystem under representative conditions or, after an authorized release, examine how the product performs in use. A working model can answer a bounded question; on its own it does not establish the product's safety or value.

<span id="expectations-are-changing"></span><span id="where-earlier-feedback-improves-delivery"></span>

## Software-inspired engineering moves beyond software

To pursue those ambitions across a multidisciplinary product, teams need to connect their practices without assuming that every discipline has the same cycle time.

A team that produces changes faster than it can integrate or test them moves work into a queue. A web service may deploy repeatedly, while physical design can depend on a component order or a scarce test-rig slot. Each discipline can seek earlier feedback within its own constraints.

A model of a physical function can be executed before hardware is ready. An interface contract can be checked when either side changes. If several product variants use the same module, recorded revision references identify the variants whose owners should assess a change; ownership and compatibility information determine who needs to act.

An engineering decision can retain its rationale and applicable evidence. A new engineer joining the next variant can read why the team chose an interface limit and rerun its check without tracking down the original designer. Reusing the check can avoid repeating the same investigation, provided maintaining it costs less than the work it saves.

## AI expands what engineering teams can do

AI agents can also help teams explore alternatives, draft and review technical artifacts, prepare experiments and interpret results. An engineer might describe an interface rule in plain language and give a tool-using AI agent a bounded task. The agent could draft a small model of the rule, run the agreed checks and revise it after a failure before handing it back for review.

These capabilities matter most when the environment provides meaningful, sufficiently independent checks. If the agent's language model confuses seconds with milliseconds, a test it writes from the same interpretation may agree with a faulty change. Engineering judgment is still needed to set objectives, protect constraints, decide what evidence is credible and authorize consequential changes.

Giving an agent access to current definitions, maintaining independent checks and reviewing exceptions all take engineering time. Those costs belong in the case for using AI in development, alongside any time saved on recurring investigations. An AI function built into the product would change its behavior in use and would need its own performance evidence.

## Two systems must evolve together

Systems engineering helps teams pursue those ambitions by asking how the product's parts work together under the conditions people face. Does the receiver get the reading in time when the system is busy? Answering that question takes work on the two systems introduced above.

The **product system** includes software, electronics, physical components, interfaces, operators and the operating environment. It is judged by what it can actually do, under the conditions that matter.

The **engineering system** includes the people, methods, engineering knowledge, executable models, automated tests and integration equipment used to design, build and validate the product. It is judged by how well it helps the organization make sound product decisions and deliver improvements.

<!-- interactive: investment-feedback -->

A Word specification can explain an interface decision, an Excel workbook can hold its limits, and a specialist design tool can show how the circuit uses them. When those sources travel separately, reviewers have to establish which revisions belong together. The team can keep those tools, agree where to maintain a structured interface definition and connect it to the models and tests that use it.

The phrase **“we build the machine that builds the machine”** captures the course's framing. On one software team at OpenAI, agents helped write tools that flagged dependencies its engineers had ruled out. The next proposed change would encounter the same rule. A team comparing sender and receiver units can start smaller, with an engineer checking the two definitions by hand until the volume of changes justifies maintaining a tool. [How the OpenAI team built its checks](https://openai.com/index/harness-engineering/) · [A small team’s investment decision](/executable-engineering-lab/bonus/building-the-machine-that-builds-the-machine/#when-does-building-it-pay-off).

> **Concept**
>
> Changing a module to report elapsed time in milliseconds changes the product. A repeatable check that compares the units declared by sender and receiver improves the engineering system. Teams can run it on the next variant before the hardware is ready.

## From document-driven handoffs to executable feedback

In Executable Engineering, the approach is to make suitable models, analyses, checks and workflow steps runnable, evaluable and improvable. A passing test is evidence about a stated check under specific conditions. Two connected feedback loops guide which changes the team can improve and deliver with confidence.

- With **fast executable feedback**, engineers make a bounded change, run a model or test, inspect a failure and refine the work. If the units agree, the team can choose those revisions for integration.
- With **whole-product feedback**, engineers ask whether the integrated product meets its intended use. Even when the declared units agree, a physical test may reveal that the receiver gets a value too late under load. Reviewing the consequence with an operator can change both the interface definition and the next automated check.

## What this means for engineering leadership

A useful investment gives teams an earlier signal about a decision that costs time or money to reverse. To judge whether it can help deliver useful changes sooner and at lower cost, a leader can look at recent integrations before funding the interface check. When did each mismatch surface, how many teams had to revisit their work, and what delivery commitment was affected? Those cases give the team a baseline for judging whether earlier detection on subsequent changes saves enough rework to justify maintaining the check.

If mismatches now surface early but the release still depends on timing under load, the next investment might be time on the test rig. A team might use a risk burndown chart to track its estimated exposure over successive integrations. A leader can ask which estimates changed, what evidence prompted the change and which delivery commitments still depend on the open risks.

> **Explore further**
>
> Which part of a check can another project reuse, and which observation must its team make again? [Revisit this investment in the final chapter](14-from-engineering-intent-to-continuous-integration.md#reuse-capability-while-renewing-evidence).

<!-- interactive: chapter-quiz -->

## From the paradigm to a working example

To see how teams might deliver useful improvements sooner and at lower cost, we begin with a concrete engineering question and the people affected by a change.

A fictional city brings a question to the [intersection workshop in Chapter 2](02-introducing-the-engineering-challenge.md). How could we improve traffic flow at our busy four-way intersection while keeping crossings safe and the signals easy to understand and maintain?
