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

*What would help a team turn an engineering question into a sound decision sooner?*

Four currents are changing how teams approach that question. **Software-driven engineering** applies practices such as versioned information and automated checks across disciplines. In an integrated working environment, an electrical engineer and a software engineer can find the same interface definition, see its history and review which revision each design uses. Treating documents as code makes decisions reviewable and traceable as they change.

**Agile development** works in small increments so a team can test an assumption while a design can still change. Traditional waterfall handoffs can make this harder when each discipline holds its information in a separate silo: before testing a change, colleagues must reconcile which versions belong together. Different disciplines still have different physical and delivery constraints.

**Model-based systems engineering (MBSE)** is an established approach that uses system models to describe relationships and explore designs. The Systems Modeling Language (SysML) can describe the intersection's controller and signals in Chapter 2. Chapter 4 connects a view to its shared text, and Chapter 5 uses an executable model to investigate queues under a prescribed phase sequence.

**AI-native engineering** brings agentic support into that workflow. Given the shared definitions and a bounded task, an AI agent can help draft an executable model, rerun an agreed check after a definition changes, and propose an update to the text from simulation findings. Engineers review its contributions and make the decisions. The combination can shorten the path from a question to feedback, provided the team maintains the information and checks on which it depends.

<span id="expectations-are-changing"></span><span id="where-earlier-feedback-improves-delivery"></span>

## Software-inspired engineering moves beyond software

Software development offers practices that other disciplines can adapt, including smaller increments, explicit configurations, versioned information and continuous integration. For multidisciplinary systems, the challenge is to connect these practices without assuming that every discipline has the same cycle time.

A team that produces changes faster than it can integrate or test them moves work into a queue. A web service may deploy repeatedly, while physical design can depend on a component order or a scarce test-rig slot. Each discipline can seek earlier feedback within its own constraints.

A model of a physical function can be executed before hardware is ready. An interface contract can be checked when either side changes. If several product variants use the same module, recording which revision each uses tells the integration lead which teams a change affects.

An engineering decision can retain its rationale and applicable evidence. A new engineer joining the next variant can read why the team chose an interface limit and rerun its check without tracking down the original designer. Reusing the check can avoid repeating the same investigation, provided maintaining it costs less than the work it saves.

## AI expands what engineering teams can do

AI assistance can help teams explore alternatives, draft and review technical artifacts, prepare experiments and interpret results. An engineer might describe an interface rule in plain language and give a tool-using AI agent a bounded task. The agent could draft a small model of the rule, run the agreed checks and revise it after a failure before handing it back for review.

These capabilities matter most when the environment provides meaningful, sufficiently independent checks. If the agent's language model confuses seconds with milliseconds, a test it writes from the same interpretation may agree with a faulty change. Engineering judgment is still needed to set objectives, protect constraints, decide what evidence is credible and authorize consequential changes.

Giving an agent access to current definitions, maintaining independent checks and reviewing exceptions all take engineering time. Those costs belong in the case for using AI in development, alongside any time saved on recurring investigations. An AI function built into the product would change its behavior in use and would need its own performance evidence.

## Two systems must evolve together

Systems engineering asks how the parts work together under the conditions people face. Does the receiver get the reading in time when the system is busy? Answering that question takes work on two systems.

The **product system** includes software, electronics, physical components, interfaces, operators and the operating environment. It is judged by what it can actually do, under the conditions that matter.

The **engineering system** includes the people, methods, engineering knowledge, executable models, automated tests and integration equipment used to design, build and validate the product. It is judged by how well it helps the organization make sound product decisions and deliver improvements.

<!-- interactive: investment-feedback -->

A Word specification can explain an interface decision, an Excel workbook can hold its limits, and a specialist design tool can show how the circuit uses them. When those sources travel separately, reviewers have to establish which revisions belong together. The team can keep those tools, agree where to maintain a structured interface definition and connect it to the models and tests that use it.

The phrase **“we build the machine that builds the machine”** captures the course's framing. On one software team at OpenAI, agents helped write tools that flagged dependencies its engineers had ruled out. The next proposed change would encounter the same rule. A team comparing sender and receiver units can start smaller, with an engineer checking the two definitions by hand until the volume of changes justifies maintaining a tool. [How the OpenAI team built its checks](https://openai.com/index/harness-engineering/) · [A small team’s investment decision](/executable-engineering-lab/bonus/building-the-machine-that-builds-the-machine/#when-does-building-it-pay-off).

> **Concept**
>
> Changing a module to report elapsed time in milliseconds changes the product. A repeatable check that compares the units declared by sender and receiver improves the engineering system. Teams can run it on the next variant before the hardware is ready.

## From document-driven handoffs to executable feedback

In Executable Engineering, the approach is to make suitable models, analyses, checks and workflow steps runnable, evaluable and improvable. A passing test is evidence about a stated check under specific conditions. Two connected feedback loops guide what the team does with that evidence.

- With **fast executable feedback**, engineers make a bounded change, run a model or test, inspect a failure and refine the work. If the units agree, the team can choose those revisions for integration.
- With **whole-product feedback**, engineers ask whether the integrated product meets its intended use. Even when the declared units agree, a physical test may reveal that the receiver gets a value too late under load. Reviewing the consequence with an operator can change both the interface definition and the next automated check.

## What this means for engineering leadership

A useful investment gives teams an earlier signal about a decision that costs time or money to reverse. Before funding the interface check, a leader can look at recent integrations. When did each mismatch surface, how many teams had to revisit their work, and what delivery commitment was affected? Those cases give the team a baseline for judging whether earlier detection on subsequent changes saves enough rework to justify maintaining the check.

If mismatches now surface early but the release still depends on timing under load, the next investment might be time on the test rig. A team might use a risk burndown chart to track its estimated exposure over successive integrations. A leader can then see which risks have fallen and which still affect a delivery commitment.

> **Explore further**
>
> Which part of a check can another project reuse, and which observation must its team make again? [Revisit this investment in the final chapter](14-from-engineering-intent-to-continuous-integration.md#reuse-capability-while-renewing-evidence).

<!-- interactive: chapter-quiz -->

## From the paradigm to a working example

A fictional city brings a question to the [intersection workshop in Chapter 2](02-introducing-the-engineering-challenge.md). How could we improve traffic flow at our busy four-way intersection while keeping crossings safe and the signals easy to understand and maintain?
