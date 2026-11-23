---
id: eel-v3-ch12-governance-authority
chapter: 12
part: "IV — Establish Trust and Sustain Change"
title: "Governance and Engineering Authority"
status: reviewed
publication: published
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — proposed interface discrepancy and fictional deferred decision"
---

# Governance and Engineering Authority

An agent can work “within agreed boundaries,” says the front-page diagram. Who sets those boundaries? Chapter 11’s reviewer deferred accepting the controller and adapter together and asked for independent evidence of what the signal head displayed. The team could let a coordinator retry a display test on its own. Should that grant also let it change the interface decision? [Chapter 11, Reviewing an Integrated Product Change](11-verification-validation-and-engineering-evidence.md).

Consider a Linux kernel patch. The 7.2 contributor guidance asked submitters to record AI assistance with an `Assisted-by` trailer. Stable 7.3.6 recommended a shorter trailer. The 7.4-rc4 development version had dropped the trailer recommendation. Across those versions, the human submitter reviews the generated code, checks its licensing and adds their own `Signed-off-by` to certify the Developer Certificate of Origin. [Linux 7.2 guidance](https://docs.kernel.org/7.2/process/coding-assistants.html) · [Linux 7.3.6 guidance](https://github.com/gregkh/linux/blob/v7.3.6/Documentation/process/coding-assistants.rst) · [Linux 7.4-rc4 guidance](https://github.com/torvalds/linux/blob/v7.4-rc4/Documentation/process/coding-assistants.rst).

## Authority is attached to a role and a decision

For this walkthrough, call the fictional team’s accountable product decision-maker **Maya Chen**. The project gives Maya authority to commission the investigation and decide whether the two proposed interfaces can be accepted together. The controller and adapter owners propose the meanings of their messages. The integration reviewer judges whether an observation can establish what the head displayed. [The roles and decision in the T1 record](https://github.com/And-Gu/executable-engineering-lab/blob/05b071d8d5a08aec9017146175e0ac17b38f8dd3/project/v3/case-study/DECISION-CHAIN.md#ch11-authority-and-assurance--explicitly-defer-an-unsupportable-acceptance).

As of **November 23, 2026**, engineers can draw on several kinds of guidance for this work. ISO and IEC published **ISO/IEC 42001** in December 2023. It sets requirements for an organization’s AI management system. A practical management decision here is to assign responsibility for how the team uses agents, including who may grant access to the engineering tools and who reviews exceptions. Maya’s authority over this interface comes from her project assignment. [ISO/IEC 42001:2023](https://www.iso.org/standard/42001).

> **Concept**
>
> **Standing authorization** lets an agent carry out a defined class of actions without asking each time. The person granting it must have authority over those actions. Maya can name the emulator, test and conditions for a retry while retaining the decision about product compatibility.

## Give the coordinator a task it can finish

<span id="work-through-one-incomplete-assurance-argument"></span>

Maya could give the coordinator this assignment. Compare controller contract `INT-IF-001` revision A with adapter contract `INT-IF-ADAPTER-002` revision B. Use display build 4 and the revision B emulator to exercise *Receipt without feedback*, test revision 1. Report what the service display says for the named amber request when the emulator acknowledges receipt and supplies no indication feedback. The expected text is “received, indication unknown.” This is a proposed software test. [Chapter 10’s test definition](10-from-models-to-an-integrated-product.md#what-would-count-as-implemented-or-verified).

<figure class="intersection-overview" aria-labelledby="delegation-caption">
<figcaption id="delegation-caption">How Maya’s proposed grant applies when a helper needs access, a tool stops, or a check finds unexpected behavior.</figcaption>

| Event during the assignment | Authorized response |
| --- | --- |
| A helper needs the two interface definitions. | The coordinator can delegate read access to those revisions under the helper’s own identity. |
| The test runner stops before the check starts. | The coordinator can retry once with the same test, inputs and revisions. It keeps both attempts in the report. |
| The display reports a confirmed indication from receipt alone. | The coordinator returns the discrepancy and its inputs to the interface owners. Changing the agreed meaning or expected result requires their review. |

</figure>

The Linux Foundation’s **Agentic AI Foundation** convened working groups to develop proposals. Its **Governance, Risk & Regulatory Alignment** group works on questions such as classifying risk. **Identity & Trust** investigates how permissions pass between agents. Both are active working groups. In our example the helper needs to read two definitions. Giving it the coordinator’s credentials would also give it the ability to run tests and would obscure who did the reading. [David Nalley’s February 2026 working-group announcement](https://aaif.io/blog/aaifs-first-quarter-success-story-new-members-technical-wins-and-open-governance) · [Identity & Trust](https://aaif.io/working-groups/identity-trust) · [Governance, Risk & Regulatory Alignment](https://aaif.io/working-groups/governance-risk-regulatory-alignment).

<span id="proportionate-controls-can-enable-speed"></span>

Researchers at the U.S. National Institute of Standards and Technology (NIST) proposed design tenets for agent identity on October 27, 2026. They call for a distinct agent identity, a trace back to whoever delegated the work, and permissions that can only stay the same or narrow in a further handoff. A tool could enforce Maya’s grant by allowing the helper to read the named revisions and recording who authorized that access. [Harold Booth and colleagues’ proposed design tenets](https://www.nist.gov/blogs/cybersecurity-insights/design-tenets-agent-identity-management-systems).

NIST’s **AI Risk Management Framework Playbook**, first completed in 2023, offers published, voluntary guidance on human oversight. GOVERN 3.2 asks organizations to define who operates and oversees AI. Here the integration reviewer can challenge the method an agent used, and Maya decides what the evidence supports for the product. [NIST Playbook, GOVERN 3.2](https://airc.nist.gov/airmf-resources/playbook/govern/).

## What would let Maya accept the interface?

<span id="non-functional-concerns-belong-in-the-design"></span><span id="a-control-is-not-the-same-as-its-outcome"></span>

Chapter 1 imagined an agent misreading seconds as milliseconds and writing a test with the same mistake. Here a test that takes the adapter’s reply as its expected lamp state would repeat the error in another form. Even perfect agreement between the request log and a test built from that reply would leave the maintainer’s question open. What did the lamp show? [Chapter 1’s units example](01-the-new-engineering-paradigm.md#ai-expands-what-engineering-teams-can-do).

The T1 record contains a comparison of definitions. Revision A expects confirmation that the indication was applied. Revision B promises receipt of the command. [The recorded interface discrepancy](https://github.com/And-Gu/executable-engineering-lab/blob/05b071d8d5a08aec9017146175e0ac17b38f8dd3/project/v3/case-study/DECISION-CHAIN.md#ch09-a-product-interface-discrepancy--the-missing-bridge).

For the proposed Bench 1 check, the integration reviewer would identify controller build 12, adapter firmware 3, head assembly revision 2 and display build 4. The team would hold the amber request through the observation step, capture the named head from the agreed viewpoint and match that image to the same command and adapter reply. The bench check has not run. A future image could establish what the head displayed at that step. The interface owners would still need to agree how the controller receives confirmation in service, what it reports if feedback disappears and how it recognizes recovery. [Chapter 10’s proposed bench configuration](10-from-models-to-an-integrated-product.md#from-a-mismatch-to-an-integration-investigation).

**FINOS** added mitigation **MI-24** to its financial-services AI Governance Framework in October 2026. The source labels it a draft. An institution can grant standing approval for routine work. For a payment above a designated limit, its policy could route the proposed transfer to someone authorized for that amount, with the payee, amount and independently sourced evidence. An approval applies to the particular action reviewed. The analogous action here is accepting revision A with revision B. The review tool could route that request to Maya with the two contracts and the integration evidence for that pair. [FINOS approval guidance](https://air-governance-framework.finos.org/mitigations/mi-24_human-in-the-loop-action-approval-gate.html) · [MI-24 source and draft status](https://github.com/finos/ai-governance-framework/blob/8cad9f2c3f39d7170f24fc609dae808b96aa417f/docs/_mitigations/mi-24_human-in-the-loop-action-approval-gate.md).

## Record a decision, then improve the capability to make it

**Maya defers compatibility acceptance for controller revision A and adapter revision B.** The two definitions disagree and the independent indication observation is missing. The interface owners take back the message and recovery definitions. The integration reviewer takes back the bench plan. Maya can reopen the decision when they return the agreed meanings and results for an identified configuration.

OpenSSF’s **Gemara** gives a reviewer a way to trace that reasoning. The project published a model for governance, risk and compliance and releases machine-readable CUE schemas. Its September 2026 core release was v1.6.0. A team using those formats could connect a policy requiring independent evidence to a control specifying the observation, an evaluation recording how that control was assessed, and an audit record citing the evidence reviewed. For the A/B decision today, the only completed comparison the reviewer could cite is the inspection of the two proposed contracts. The bench observation still sits in the plan. [Eddie Knight, Hannah Braswell and Jenn Power on the Gemara model](https://openssf.org/blog/2026/03/09/introducing-the-gemara-model/) · [Gemara schemas](https://gemara.openssf.org/schema/) · [Core release v1.6.0](https://github.com/gemaraproj/gemara/releases/tag/v1.6.0).

> **Explore further**
>
> In NIST’s proposed tenet 02, follow a grant from its origin through a second agent. Then look at who can issue a standing approval in the FINOS draft. What information would a reviewer need to trace the source reader’s access back to Maya? [NIST on delegation](https://www.nist.gov/blogs/cybersecurity-insights/design-tenets-agent-identity-management-systems) · [FINOS on standing approval](https://air-governance-framework.finos.org/mitigations/mi-24_human-in-the-loop-action-approval-gate.html).

<!-- interactive: chapter-quiz -->

## Which changes can move quickly?

The signal head belongs to the product system. A repeatable way to observe it, together with Maya’s decision record, belongs to the [engineering environment](/executable-engineering-lab/bonus/building-the-machine-that-builds-the-machine/#what-is-the-smallest-useful-engineering-environment). When another adapter arrives, the next engineer can recognize a receipt-only contract before booking bench time. If the supplier claims applied-state feedback, the engineer can reuse the procedure to test the new configuration and take the observation to its decision owner. [Chapter 1’s two systems](01-the-new-engineering-paradigm.md#two-systems-must-evolve-together) · [The front-page diagram](https://and-gu.github.io/executable-engineering-lab/#approach).

Who maintains that bench, the service instructions and the evidence so the whole product can be ready at the end of an iteration? [Chapter 13, Continuously Integrated Engineering](13-continuously-integrated-engineering.md).
