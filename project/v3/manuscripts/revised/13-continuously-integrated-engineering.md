---
id: eel-v3-ch13-continuous-engineering
chapter: 13
part: "IV — Establish Trust and Sustain Change"
title: "Continuously Integrated Engineering"
status: reviewed
publication: published
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional change eligibility and engineering-factory decision"
---

# Continuously Integrated Engineering

*What must the team build and operate so the whole product is ready to release at the end of an iteration?*

Imagine a technician looking up a new message on the intersection service display. It says “Command received. Indication unknown.” In the technician’s language, the service manual still opens the old entry about command receipt. The new software runs. Would you authorize this release?

## Decide what the request covers

<span id="not-every-small-edit-is-eligible"></span>Chapter 12 left an important decision open. The proposed controller contract, revision A, calls for confirmation of the requested indication. Under the adapter contract, revision B, an acknowledgment would confirm receipt of the message. The accountable product decision-maker deferred accepting the two meanings as equivalent. An independent observation of the lamp on a bench is still proposed. [Fictional interface and decision record](https://github.com/And-Gu/executable-engineering-lab/blob/05b071d8d5a08aec9017146175e0ac17b38f8dd3/project/v3/case-study/DECISION-CHAIN.md#ch09-a-product-interface-discrepancy--the-missing-bridge).

For this release-planning exercise, assume an existing product configuration authorized to report receipt and an unknown indication. The service team asks for clearer wording and a procedure for its existing diagnostic code, `IND-UNKNOWN`. The operator should be able to name the affected head and command. A technician should be able to find the right instruction and observation equipment. A request to determine what the lamp actually displayed would reopen the interface decision.

<span id="the-24-hour-target-is-a-requirement-to-analyze"></span>The clock starts when the lead accepts this eligible, bounded request. The fictional project’s target is **less than 24 hours**. The clock stops when the authorized lead records that the identified whole-product candidate is releasable, with its evidence and all the material its users need. The lab has no measured delivery time for this example. [DORA’s distinction between continuous delivery and deployment in software](https://dora.dev/capabilities/continuous-delivery/).

## Follow the diagnostic into service

The diagnostic code gives the team something more durable to share than a line of English text. The service display associates it with the head and command. The operator manual uses the code to explain what to report. The service manual uses it to open the matching procedure in each supported language. The manuals and on-screen wording can now be reviewed together.

The procedure points to a portable observation kit. A technician needs to find the kit that fits this head assembly, where to obtain it and how to request it through the logistics system. In the training app, a trainee gets the same message, opens the procedure in their language and requests the matching kit. If the exercise congratulates them for declaring that the lamp failed, it teaches a conclusion the diagnostic cannot support.

<span id="orchestrate-the-engineering-outcome"></span>The integration lead keeps a **release manifest**, a record of what belongs to this candidate. It identifies the controller, adapter, head and display revisions, the affected operator and service manuals in every supported language, the logistics catalog entry, and the training package and app version. Each entry points to its responsible person and review record. A service editor can see which build to use when checking a translation on screen.

## Run the candidate and check the response

<span id="operating-the-factory-is-a-different-job"></span>In the proposed rehearsal, the integration engineer starts the candidate controller, adapter and service display together in the integration environment. They send a test request for amber to the designated head, supply the receipt and withhold independent indication feedback. An agent can run the prescribed checks within its permissions and attach their results to the manifest.

<span id="two-feedback-loops-two-kinds-of-evidence"></span>Different people need different evidence from that running configuration.

| Question | What the reviewer would inspect |
| --- | --- |
| Does the diagnostic work? | The captured display names the head and command and reports the indication as unknown. A later receipt for another command cannot confirm this one. |
| Can people use it? | An operator identifies what is known. A technician follows the localized service instruction, finds the compatible kit in the catalog and uses the training exercise to practice the handoff. |
| Are permissions enforced? | With the service role, the configured display allows a history lookup and denies an attempt to issue a signal command. The access test records both outcomes. |
| Is the response timely under load? | At the agreed peak message rate, timestamps show whether the diagnostic appears within the specified response limit and still names the right command. |

<span id="reduce-the-cognitive-load-of-supervision"></span>A reviewer can open the relevant result from the manifest and see the tested revisions, criterion, recorded outcome and any open question. If the running candidate changes, the integration lead identifies which results need another run or review. The lamp observation in the original interface case still belongs to its own investigation.

## Which dependency sets the release date?

Suppose the running candidate and its checks are ready today. The operator editions, logistics record and training package have cleared review. One required translation of the **service instruction** is due next week. Its file exists, but the service-language reviewer still has to check that the wording describes the indication as unknown. Watching a technician use that edition in the rehearsal would test how they interpret it. Can the lead stop the clock today?

<!-- interactive: release-readiness -->

<span id="continuous-integration-delivery-and-deployment"></span>

> **Concept**
>
> **Continuous integration** brings changes together frequently and checks the combined version. **Continuous delivery** keeps a version ready for an authorized release. **Deployment** puts it into the operating environment. The team can keep a complete release package ready until operations chooses an installation window.

## Building the factory is engineering work

“We build the machine that builds the machine.” On each new project, the team has to deliver and operate the engineering environment alongside the product. For this change, the product lead sets aside people, iteration time and funding for the recurring work. The interface owner maintains the diagnostic definition. An integration engineer maintains the rig, automated tests and versioned evidence. Service and training leads maintain the publication workflow, arrange language reviews and budget for the reviewers’ time. When a check stops working, its owner restores it before the lead relies on its result. [The two systems in the introduction](/executable-engineering-lab/#approach).

<span id="what-would-we-improve-after-a-blocked-release"></span><span id="the-factory-becomes-reusable-knowledge"></span>Does language review regularly hold up the decision? Compare several eligible diagnostic wording changes with similar review requirements and numbers of editions. For each, record the full time to releasability and when the rig, language reviewers and other required inputs were available. For requests still open, record the time so far and the outstanding work. A day spent waiting for both a rig and a reviewer counts once on the release clock. Also record reviewer hours, rework and any misleading instructions found in the rehearsal.

If a late start on translation repeatedly delays readiness, try inviting the affected reviewers when the lead accepts the request. That takes one message. Compare the next similar changes for elapsed time and instruction quality. If coordinating the editions still takes considerable effort, the diagnostic identifier could route review requests and flag stale wording. Weigh the time saved against the cost of keeping that routing current and reviewing exceptions.

For a closer look at when building and maintaining that environment pays off, read the unnumbered companion. [Building the Machine That Builds the Machine](/executable-engineering-lab/bonus/building-the-machine-that-builds-the-machine/).

> **Explore further**
>
> Compare the clocks. DORA measures software change lead time from a code commit to deployment in production. This exercise begins earlier, at request acceptance, and ends when the whole change can be released. [DORA’s software delivery performance metrics](https://dora.dev/guides/dora-metrics/).

<!-- interactive: chapter-quiz -->

## Make the whole-product decision

**Today the release lead holds the candidate.** Next week, if the language reviewer approves the service instruction, the team builds that edition into the package and checks that the display opens it for the right diagnostic. With the other evidence still applicable, the lead can record that the identified whole-product configuration is releasable. Operations can then select a deployment date. The missing instruction sets the earliest readiness date in this example. This one delay gives the lead a candidate to investigate on the next comparable request.

On the next change, which parts of this work can the team reuse, and what does it have to observe again? [Follow the decisions through the course in Chapter 14](14-from-engineering-intent-to-continuous-integration.md).
