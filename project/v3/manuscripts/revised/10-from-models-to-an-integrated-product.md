---
id: eel-v3-ch10-integrated-product
chapter: 10
part: "III — Develop an Integrated Product"
title: "From Models to an Integrated Product"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — synthetic editorial source"
---

# From Models to an Integrated Product

*How can the intersection team use what it learned from the prototype to build a product it can deliver?*

At the intersection workshop, a maintainer asked how to tell what the controller requested and what the signal actually showed. Picture a check mark on a service laptop beside a request for amber. Before the team orders equipment, decide what that mark should mean and how you would check it. [The maintainer’s question in Chapter 2](02-introducing-the-engineering-challenge.md#start-with-engineering-intent).

At product kickoff, the team already has a phase sequence to exercise and a way to trace an observation to its inputs, model revision and rationale. An engineer or agent can start there. Less time spent reconstructing earlier decisions means the team can investigate its first product interface sooner. [Chapter 9’s digital thread](09-engineering-in-small-reviewable-increments.md#the-digital-thread) · [Recorded two-cycle run](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/project/v3/case-study/two-cycle-run.json).

## One word, two different interfaces

<span id="establish-the-system-boundary"></span>Follow the amber request out of the controller, through the adapter that drives the lamp, to the head a driver faces. The two proposed interface definitions use the same word at different points along that path.

| Proposed interface | What “acknowledged” means |
| --- | --- |
| Controller, `INT-IF-001` revision A | The controller expects evidence that the requested indication was applied. |
| Adapter, `INT-IF-ADAPTER-002` revision B | The adapter reports that it received the command message. |

<figure class="intersection-overview">

![A laptop shows a check mark. The middle amber lamp is lit on a vertical signal, and a camera is aimed at the lamp.](../../illustrations/signal-integration-bench.jpg)

<figcaption>Illustration of a proposed integration bench. The laptop could report command receipt. A camera record tied to the same command and head could establish which lamp was visible from that position at that time.</figcaption>
</figure>

An adapter could meet revision B exactly and still leave the controller waiting for evidence of the applied indication. The team records the difference in `INT-DISC-001` and defers accepting the two interfaces as compatible. Discovering this while the adapter is still a purchasing choice is the early feedback Chapter 1 described. [Interface discrepancy record](../../case-study/DECISION-CHAIN.md) · [Chapter 1 on earlier feedback](01-the-new-engineering-paradigm.md#where-earlier-feedback-improves-delivery).

## Define the first product increment

The maintainer supplies the need, T1 supplies an amber step, and the contracts establish what receipt means. The product lead can use these same sources in two ways.

**A product specification** could set two verifiable requirements. In the amber step of the bench sequence, the designated head shall show amber at the agreed observation point. For that head and command, the service display shall show “received, indication unknown” when the adapter acknowledges receipt and independent indication feedback is absent. The buyer and supplier would agree on the head, step and viewpoint.

**An agile increment** could start with this intent. Give the maintainer a way to distinguish receipt from a confirmed indication while using the receipt-only adapter. At review, give them two acknowledged requests, one with independent confirmation and one without. They should be able to identify the confirmed indication and say when the state is unknown. The team chooses how to obtain and present feedback in service. The illustrated camera is independent test equipment.

In Chapter 3, the team chose to follow one arrival to resolve an event-order disagreement. Here, holding the receipt constant and varying the feedback lets the team test whether the maintainer can recognize an unknown indication. [Choosing an investigation in Chapter 3](03-planning-under-uncertainty.md#choose-the-next-investigation).

## Keep the model as a test reference

<span id="developing-the-product-and-developing-how-we-engineer-it"></span>Suppose the product uses a timer-driven state machine in embedded firmware and a separate adapter to drive the lamp. It need never count vehicles. An engineer could map a test clock to T1’s eight checkpoints and compare the firmware’s phase requests with the saved trace. At checkpoint three, T1 expects north–south amber. A request for green would send the engineer back to the clock mapping and phase logic before taking up bench time. [Phase sequence and slot assumptions](../../case-study/model-inputs-v1.json) · [Reference trace](../../case-study/trace-v1.csv).

> **Concept**
>
> A **test oracle** supplies the expected result for a check. Here the saved trace gives an independent reference for the fixed phase order. T1’s abstract slots have no duration in seconds. Checking real-time response takes a clock, and checking the light takes an observer.

## What would count as implemented or verified?

<span id="a-product-configuration-with-open-evidence"></span>Consider a hypothetical configuration, **Bench 1**, with controller build 12, adapter firmware 3, head assembly revision 2 and service display build 4. To mark the display requirement **implemented**, link it to the reviewed decision to track receipt and indication separately and to the change in display build 4 that puts that decision into effect.

Marking it **verified** would also require a test record. Imagine running software test *Receipt without feedback*, revision 1, against display build 4 and an emulator of adapter contract B. The test delivers a receipt for the selected head and withholds indication feedback. If the display reads “received, indication unknown,” the captured text meets the criterion for that software configuration. The record would tie the test revision, actual configuration, inputs and observed text to the requirement.

<span id="from-a-mismatch-to-an-integration-investigation"></span>For the visible-amber requirement, the proposed Bench 1 test would hold the amber request through the observation step, record the reply and capture the head from the agreed viewpoint. The engineer would compare the requested indication with the image for that command. A completed log with a missing image would leave the visible result open. The physical test remains a proposal.

## Spend test time on the question it can answer

The phase and receipt checks can run on each software change. For IT security, suppose maintainers may read the history but only operators may change commands. A software check under the maintainer role should allow a history request and deny a command change. Run it when the access policy changes, then exercise the configured roles on the integrated build.

At peak message load, an old confirmation may arrive after a newer request. On a representative controller and adapter, check that each report still names the correct head and command and arrives within the agreed response limit. For endurance, repeat the workload for the period the diagnostic must operate unattended. Track missed reports and memory use to decide whether performance degrades over time.

<span id="the-operator-and-maintainer-enter-the-story"></span>For usability, give a maintainer the two acknowledged requests and ask what they would tell an operator. If they read “received” as “the lamp is on,” record what they saw and revise the display.

## Follow an electronics change into the enclosure

<span id="why-small-increments-still-need-systems-integration"></span>Suppose electronics proposes a board with a connector for an optical sensor. A sensor at every head adds parts and alignment labor. A portable instrument requires a site visit for each observation. Ask operations whether confirmation is needed in the control room before comparing the [cost of outfitting the heads with the cost of those visits](/executable-engineering-lab/bonus/building-the-machine-that-builds-the-machine/#when-does-building-it-pay-off).

Moving the connector to the edge of the board might make it easier to assemble. Will the plug and cable still fit with the enclosure closed? The electronics engineer supplies the revised board drawing from the circuit design tool. The mechanical engineer uses it to check clearance and the sensor’s view of the lamp in the enclosure model. If the board change also moves the sensor to another input, the firmware engineer must update the mapping from that input to the signal head. A check using the old mapping could report an observation against the wrong head.

The integration lead links the board drawing, enclosure revision and production firmware to the requirement for the designated head. The test engineer can now plan a fit check on the revised assembly and compare the diagnostic with an independent observation of that head. If another engineer changes the drawing, the lead can see which checks need to be revisited.

> **Explore further**
>
> Which equipment belongs to the product, and which does the team need to test it? NASA describes how to prepare the integration environment, including its simulators and recording equipment. [NASA’s Systems Engineering Handbook, Product Realization](https://www.nasa.gov/reference/5-0-product-realization/).

<!-- interactive: chapter-quiz -->

## Which changes belong in the same review?

<span id="what-does-our-evidence-actually-support"></span>

Imagine 20 agents developing production code in parallel for these engineers. By the time the new board drawing arrives, there could be several proposals for the controller, the service display and their tests. The reviewer needs to know which revisions work together, what the team has actually checked and which decision still needs a person. The two interface definitions and their open discrepancy give that review a place to start. [Chapter 11, Reviewing an Integrated Product Change](11-verification-validation-and-engineering-evidence.md).
