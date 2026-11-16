---
id: eel-v3-ch11-governance
chapter: 11
part: "IV — Trust, Decisions and Evolution"
title: "Governance and Engineering Authority"
status: draft
reference_case: four-way-traffic-intersection
publication: unpublished
---

# Governance and Engineering Authority

*Who may change a system, and what must be understood before that change is accepted?*

The intersection team proposes a new adaptive signal strategy. It could improve modeled traffic flow, but it may also alter detector interfaces, failure behavior, signal timing assumptions and operational decisions.

The change is not only an algorithm choice. It has implications for system integrity, cybersecurity, safety, maintenance and authority. Different roles may be responsible for the software, physical installation and operational approval.

Governance is the way those decisions and controls remain explicit while engineering work becomes more automated. Its value is not the number of forms or gates. It is the ability to make sound, accountable changes with controls proportionate to their consequences.

## Authority belongs to a defined role and scope

An engineer can ask an agent to explore timing options. That does not grant the agent authority to rewrite a safety constraint or deploy a controller.

A task may permit access to a simulation, creation of proposed files and execution of selected tests. Acceptance of a controlled definition, authorization of a release and approval for operational use are separate acts.

The exact division of authority depends on the organization, product and applicable requirements. The underlying principle is stable: being able to perform an action is not the same as being authorized to approve its consequences.

A useful engineering environment distinguishes **proposed**, **checked**, **reviewed**, **approved** and **released** states. Passing an automated gate may support a decision; it should not silently transform a proposal into an accepted product definition.

## Design risk into the engineering question

Non-functional requirements are easy to postpone because they may not be visible in a successful demonstration.

For an intersection, availability, failure behavior, cybersecurity, maintainability, diagnosability and safe states influence whether the system can be used responsibly. The team should consider them while defining interfaces and architectures, not only before delivery.

A remote-update capability may be convenient for maintenance but creates security and recovery questions. A detector fault may require a defined fallback operating mode. A sensor interface may need validation against unexpected input or communication loss.

Our educational state machine does not answer these questions. Its value is to illustrate why a change that appears local can create broader obligations.

## From a change to an assurance argument

Consider the claim: *The revised control concept preserves the intended separation of conflicting vehicle movements under the conditions represented in the model.*

Evidence might include a controlled phase definition, a check of permitted transitions and an inspection of the changed configuration.

A more comprehensive argument would need to address real controller hardware, relevant failures, interfaces, installation and applicable operating conditions.

An **assurance argument** connects a claim to reasoning and evidence. It makes gaps visible and helps reviewers understand whether the evidence is appropriate. It is not a device for turning a limited simulation result into blanket approval.

*Suggested assurance view: A small graph from one proposed adaptive-control change to affected claims, controls, tests and named decision authorities. The reader distinguishes directly supported links from open evidence gaps.*

## Secure and maintainable changes

As engineering workflows become software-driven and agent-assisted, the environment itself becomes part of the integrity story.

Source authenticity, tool access, dependency management, credentials, versioned configuration and test provenance matter because compromised or mistaken engineering infrastructure can affect product changes.

Security also concerns the product: for example, how the intersection controller would authenticate an update, handle untrusted input or recover from a failed deployment. These are distinct but connected responsibilities.

The correct controls are risk-based. A change to descriptive tutorial text does not have the same consequences as a change to signal behavior. A change to a safety-relevant interface may require additional review and testing even if it consists of a few lines of code.

## Fast delivery and governance need not conflict

A slow review process is not automatically a safer process. Repeated manual recreation of evidence can introduce delay and inconsistency.

A well-designed engineering factory can automate trace collection, configuration checks, static validation, regression execution and preparation of review packages. It can reserve explicit human decisions for situations where engineering judgment or organizational authority is required.

This does not imply that the same automated path is appropriate for every product or change class. The objective is to make the boundary clear before a deadline creates pressure to ignore it.

If the team aims to prepare eligible software fixes rapidly, it should design both the checks and the approval process for that kind of work. Other changes may require physical qualification, external review or operational scheduling.

## Evidence of a decision is itself engineering information

A good decision record identifies what was proposed, its technical rationale, relevant alternatives, considered risks, applicable evidence, decision owner and the configuration affected.

The record becomes useful later when another engineer asks why a particular strategy was selected or whether a later change invalidates the reasoning.

AI agents can help gather references or prepare a proposal. They should not be represented as the source of authority merely because they generated the document.

## Governance supports evolution

The goal is not to eliminate uncertainty. It is to know what has been established, which decisions have been made, and where further work is needed.

The same pattern matters when an organization develops families of products. A rule, test or model may be reused, but its applicability depends on what changed.

That leads to the next challenge: **managing engineering knowledge at scale** without losing the context that makes it trustworthy.
