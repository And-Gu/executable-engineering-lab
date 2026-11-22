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

## Expectations are changing

Competitive pressure can make shorter development cycles, higher quality and frequent improvements valuable. A team that produces changes faster than it can integrate or test them moves work into a queue. A leader can ask where an earlier check would actually change a decision.

A web service may deploy repeatedly, embedded software may need controlled integration, and a physical design may depend on suppliers and test equipment. Each team can shorten the path from a question to reliable feedback within its own delivery constraints.

## Software-inspired engineering moves beyond software

Software development has pioneered practices that other disciplines can adapt: smaller increments, explicit configurations, automated checks, continuous integration, versioned information, simulation and feedback from operation. Their contribution is not that an electrical or mechanical product becomes software. It is that more of the *engineering work* can become connected, reviewable and progressively testable.

A model of a physical function can be executed before hardware is ready. An interface contract can be checked when either side changes. An engineering decision can retain its rationale and applicable evidence. Automated checks can detect regressions early, while system-level validation still determines whether the complete product meets its intended use.

For multidisciplinary systems, the challenge is to connect these practices without assuming that every discipline has the same cycle time. Early model learning can prevent expensive physical changes; physical experiments can reveal assumptions the model cannot represent.

## AI expands what engineering teams can do

AI assistance can help teams explore alternatives, work with large collections of engineering information, draft and review technical artifacts, write software, prepare experiments and interpret results. Tool-using AI agents may also carry out bounded tasks: propose a change, invoke tools, inspect feedback and revise the work before handing it back for review.

These capabilities matter most when the environment provides meaningful, sufficiently independent checks. An agent iterating against weak or self-modified acceptance criteria can produce a convincing-looking but invalid result. Engineering judgment is still needed to set objectives, protect constraints, decide what evidence is credible and authorize consequential changes.

**AI used to develop a product is distinct from AI built into that product.** A team may use agents to improve engineering workflows without deploying AI in the delivered system. Conversely, a product may use predictive or adaptive AI that requires its own safety, performance and validation work.

AI is therefore a major accelerator and potentially an enabler of new ways of working—but it is not the original reason engineering needs to evolve.

## Two systems must evolve together

Every engineering organization is developing two related systems.

The **product system** includes software, electronics, physical components, interfaces, operators and the operating environment. It is judged by what it can actually do, under the conditions that matter.

The **engineering system** includes people, methods, engineering knowledge, executable models, development environments, automated tests, integration equipment, decision processes, supply-chain relationships and AI-enabled workflows. It is judged by how well it helps the organization make sound product decisions and deliver improvements.

**“We build the machine that builds the machine.”** This is a reminder that engineering capability itself requires intentional design, investment, operation and improvement. It is not an argument for building a large new tool platform before solving a product problem.

The two systems form a feedback relationship. A difficult product question may reveal the need for a new simulation or test fixture. A better engineering capability may make previously expensive options practical to investigate. Improvements to the engineering system should be justified by the product decisions and delivery outcomes they enable.

> **Concept**
>
> Changing a product interface changes what teams must deliver. Adding a repeatable compatibility check changes how teams can investigate that interface on this product and the next.

## From document-driven handoffs to executable feedback

Documents and reviews remain useful; the problem arises when engineering knowledge is disconnected from the models, tests and decisions that give it meaning.

In this lab, **executable engineering** describes an approach in which suitable models, analyses, checks and workflow steps can be run, evaluated and improved. A requirements definition may connect to a model, an experiment, a verified interface and evidence of system behavior. That does not mean every engineering activity becomes executable. Stakeholder negotiation, model validity, physical integration, safety judgment and release authority still require suitable human and real-world processes.

Two connected feedback loops are especially important:

- **Fast executable feedback:** make a bounded change, run a model or test, inspect a failure and refine the work. Automation and agents can accelerate this loop when its checks are dependable.
- **Whole-product feedback:** ask whether the model, checks and change are appropriate for the actual intended use. Bring in physical evidence, integration results, operational constraints and authorized decisions.

A passing test is evidence about a stated check under specific conditions. It is not automatically evidence that the product is fit for use.

## What this means for engineering leadership

The transformation changes the questions leaders should ask. Beyond measuring tasks completed or documents produced, they should examine what the teams can now demonstrate, which major uncertainties have been resolved, how quality is established and how often useful improvements can be delivered responsibly.

That means investing selectively in shared engineering information, simulation and test capability, integration practices, multidisciplinary interfaces and the skills to direct and evaluate AI-supported work. It also means allowing exploration where the design is uncertain and making stronger commitments when the evidence supports them.

A useful investment gives teams an earlier signal about a decision that costs time or money to reverse. Leaders can judge its value by looking at which changes a team caught earlier, how much rework it avoided and where uncertainty still affects delivery.

> **Explore further**
>
> [Choosing an engineering capability when several investments compete](15-choosing-the-next-engineering-capability.md#decide-from-what-is-blocking-the-product) develops this decision later in the course.

<!-- interactive: chapter-quiz -->

## From the paradigm to a working example

A city wants people to move through a busy intersection more easily. Before choosing a controller, its engineers need to decide whose experience to improve and what they can learn first. [Chapter 2 introduces the intersection and its stakeholders](02-introducing-the-engineering-challenge.md).
