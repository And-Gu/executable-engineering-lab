---
id: eel-v3-ch11-verification-evidence
chapter: 11
part: "III — Develop an Integrated Product"
title: "Reviewing an Integrated Product Change"
status: reviewed
publication: published
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — recorded interface comparison and deferred decision, with illustrative product changes"
---

# Reviewing an Integrated Product Change

<span id="verification-validation-and-engineering-evidence"></span>

Would you approve a service display that says “amber confirmed” the moment the adapter acknowledges an amber request? You can inspect the line of code that sets the label. The maintainer reading it has to tell an operator what happened at the lamp.

In Chapter 10’s hypothetical team, changes from 20 agents could arrive for review at once. Your job is to choose which revisions belong together, follow the change from intent to test, and decide what the evidence supports.

## Give the agents one product question

<span id="begin-with-the-claim-not-the-test-report"></span>

The maintainer needs to distinguish a request for amber from an observation of amber at the head. In the fictional T1 case, the integration lead can already inspect two proposed definitions. Controller `INT-IF-001` revision A expects evidence that the requested indication was applied. Adapter `INT-IF-ADAPTER-002` revision B promises to acknowledge receipt of the message. Their comparison, recorded in `INT-DISC-001`, found a difference in meaning. The physical indication remains unobserved. [The two contract definitions and comparison at T1](https://github.com/And-Gu/executable-engineering-lab/blob/05b071d8d5a08aec9017146175e0ac17b38f8dd3/project/v3/case-study/DECISION-CHAIN.md?plain=1#L50-L68).

<!-- interactive: integrated-change -->

The team proposes keeping two records. One identifies the receipt. The other, when available, gives the independently observed color. Both identify the head and command. This design yields a requirement a reviewer can check. After receipt, if there is no independent observation for that head and command, the display shall read **“received, indication unknown.”** The team still has to choose how the maintainer would obtain independent feedback in service. [The maintainer’s intent and proposed increment](10-from-models-to-an-integrated-product.md#define-the-first-product-increment).

## Choose a combination to integrate

<span id="a-configuration-is-part-of-the-evidence"></span>

The integration lead assigns the controller engineer the change that records the reply and the service engineer the display change. A test engineer derives the expected text from the requirement. Their agents can inspect the same interface definitions and production source, make changes in their assigned areas, and get test feedback on the revisions they propose. [Orchestration in Chapter 8](08-directing-ai-engineering-agents.md#coordinate-several-agents-around-one-engineering-outcome) · [The digital thread in Chapter 9](09-engineering-in-small-reviewable-increments.md#the-digital-thread).

Suppose controller build 12 produces separate receipt and observation records. Display build 4 reads both. Another display candidate still treats a single acknowledgment flag as confirmation. The coordinator selects build 4 to test with controller build 12 because the two use the same record meanings. The single-flag candidate goes back to the service engineer with the requirement it would violate.

The software pair can go to the emulator while the mechanical owner checks that the revised connector and plug fit inside the enclosure. The physical check depends on the board drawing and the enclosure revision used for that fit check. [The connector and enclosure change](10-from-models-to-an-integrated-product.md#follow-an-electronics-change-into-the-enclosure).

If all 20 agents send separate reports, the lead has to reconstruct those dependencies before reviewing a single change. The coordinator can send one review with the matching revisions, links to the code and drawings, checks already run, and evidence still needed. The reviewer can open a disputed line from there. Unrelated changes go to their own reviewers.

## Inspect the display change and its check

<span id="product-readiness-has-several-dimensions"></span>

Here is an illustrative excerpt of the display code that runs after receipt. Try reading it with the right color but the wrong command number.

```python
def label_after_receipt(head, command, observation):
    if (
        observation is not None
        and observation.head == head
        and observation.command == command
    ):
        return f"observed {observation.color}"
    return "received, indication unknown"

text = label_after_receipt("north", 42, None)
assert text == "received, indication unknown"
```

Running this function as printed with Python 3.9.6, head “north,” command 42 and no observation returned “received, indication unknown.” That result covers the excerpt. A proposed product test would send the receipt through the message handler and capture the text on the display. It could then supply an amber observation for command 41. The display should keep the indication unknown for 42.

Chapter 10’s proposed test *Receipt without feedback*, revision 1, pairs display build 4 with an emulator of adapter contract B. To exercise the combined software, the team would include controller build 12. The proposed physical configuration, **Bench 1**, adds adapter firmware 3 and head assembly revision 2 to those controller and display builds. Each result would name the versions actually used. These product tests remain unrun. [Chapter 10’s Bench 1 configuration](10-from-models-to-an-integrated-product.md#what-would-count-as-implemented-or-verified).

<span id="a-green-tool-result-can-coexist-with-an-open-engineering-result"></span>

One existing result helps the reviewer plan the bench test. In scenario A, slot 3 of the saved T1 trace contains north–south amber. An independent calculation reproduced the trace. The reviewer can use that row to specify the expected request, then choose an instrument to observe the lamp. [Executable row comparison](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/models/intersection/queue.test.ts#L5-L18) · [The recorded third slot](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/project/v3/case-study/trace-v1.csv?plain=1#L4) · [Independent comparison](https://github.com/And-Gu/executable-engineering-lab/blob/973ff66ebb06daafbd2ddaf35682e0e8da2bffd7/project/v3/case-study/MODEL-CHECK.md?plain=1#L32-L36).

## Verify the requirement and validate the task

<span id="verification-and-validation-answer-different-questions"></span>

> **Concept**
>
> **Verification** asks whether an identified configuration meets a specified requirement. Inspection can expose a mismatch between two interface definitions. A test can establish what text appears on a display. **Validation** asks whether the product serves its intended users under representative conditions. Here that means observing what a maintainer can do with the information.

For the visible-amber requirement, the integration engineer proposes holding an amber request through the agreed observation step. Record its head, command and reply. Capture the head with an independent camera at the agreed viewpoint and match the image to that request. The camera could see amber while the service display correctly reports “received, indication unknown.” The camera is bench equipment. The product needs its own feedback to confirm the color in service.

For validation, give a maintainer a realistic service call with two acknowledged requests. Only one has independent confirmation. Ask what they would report to the operator for each head and what they would check next. If they report a lamp failure when the indication is unknown, record where that interpretation arose. Even a screen that displays its specified text exactly could leave the crew acting on the wrong diagnosis. The maintainer trial is still proposed.

## Record the human decision

<span id="evidence-influences-decisions-before-release"></span>

What would you ask the team to bring back? For the display candidate that confirms on receipt, the service engineer can point to the requirement that the code would violate. For the two contracts, the accountable product decision-maker in T1 **defers compatibility acceptance**. The interface owner must reconcile what each side promises when feedback is missing or late. The integration reviewer asks for an independent observation tied to the named head, command and configuration before anyone claims that the lamp changed. [T1 evidence and accountable decision](https://github.com/And-Gu/executable-engineering-lab/blob/05b071d8d5a08aec9017146175e0ac17b38f8dd3/project/v3/case-study/DECISION-CHAIN.md?plain=1#L70-L89).

> **Explore further**
>
> NASA’s systems engineering handbook describes what a verification report preserves about the product version, equipment and results, and how validation involves users in a representative environment. [Product verification](https://www.nasa.gov/reference/5-3-product-verification/) · [Product validation](https://www.nasa.gov/reference/5-4-product-validation/).

<!-- interactive: chapter-quiz -->

## What can the coordinator delegate next?

<span id="who-can-accept-the-remaining-risk"></span>

“Building the machine that builds the machine” has a concrete payoff here. When the adapter definition changes again, the team can retrieve the earlier comparison, locate the affected display and test revisions, and give the reviewer the new evidence alongside the earlier decision. Chapter 13 follows the people who operate that environment, and the final chapter considers which capability to invest in next. [Operating the engineering environment](13-continuously-integrated-engineering.md#building-the-factory-is-engineering-work) · [Choosing the next engineering capability](15-choosing-the-next-engineering-capability.md).

Could an agent retrieve the new definitions, repeat a check and retry an interrupted run on its own? Who gives it that authority, and whose decision is required before the team can accept the interface? [Chapter 12, Governance and Engineering Authority](12-governance-and-engineering-authority.md).
