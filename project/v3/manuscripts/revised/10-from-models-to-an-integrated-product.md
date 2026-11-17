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

*The model makes a decision. What does it take for a real product to carry it out?*

In our fictional four-way intersection, a simple controller model chooses which group of vehicle signals may show green. Engineers can follow its state sequence, compare queues under different invented arrival patterns, and check a narrowly defined model property. They can even propose a change to the software in a small, reviewable increment.

None of that tells them what will happen at a signal head on the roadside.

Between a model's command and a visible indication lie interfaces, electronics, power, physical equipment, installation conditions, communication behavior, and people who will operate and maintain the result. Integration is where separate definitions and components must begin to work as a system. It is not the final act of connecting already finished parts. It is engineering work that needs its own questions, methods, evidence, and decisions.

## One word, two different interfaces

Consider the interface that connects a signal controller to a fictional signal-driving adapter.

The controller-side candidate definition, **INT-IF-001 revision A**, expects an acknowledgment that a requested signal state has been *applied*. A fictional adapter definition, **INT-IF-ADAPTER-002 revision B**, instead offers an acknowledgment that the command *message was received*.

A diagram might label both messages “acknowledged.” But the two statements have different meanings.

| Candidate contract | What an acknowledgment means | What it does not establish |
|---|---|---|
| Controller definition, rev A | The design expects confirmation that the commanded indication was applied | That real equipment has been tested or an indication has been observed |
| Adapter definition, rev B | A command message was received | That the indicated physical state changed as requested |

These are deliberately invented, proposed interface definitions. Their difference is the learning example, not a claim about an actual supplier or hardware product.

Ask yourself: if the adapter receives a request to change a light, has the controller learned that the light actually changed?

It has not. The message could be received while the physical indication remains unknown. A transport-layer acknowledgment is useful, but it does not automatically satisfy a requirement about displayed signal behavior. Neither the software's data structure nor the diagram's arrow can settle that distinction.

The resulting engineering discrepancy, **INT-DISC-001**, is therefore not merely a naming inconsistency. It is a conflict between what one side needs to know and what the other side claims to report.

## Establish the system boundary

In the earlier chapters, we deliberately modeled only a tiny part of the product: phase selection and abstract vehicle queues. That was sufficient for a bounded experiment about an invented fixed-phase schedule.

A physically integrated signal system has a larger scope. The controller must issue commands through a defined interface. Other equipment must interpret them. The installed system must provide relevant indications, diagnostics, and failure behavior under its intended operating conditions.

Road users are part of the operating context, not internal objects in the controller model. A maintainer who diagnoses a fault interacts with the product differently from an engineer studying queue behavior. These distinctions matter when deciding which functions belong where, which interfaces need contracts, and what information different people must be able to inspect.

The team does not need to build the whole system to identify the current gap. It needs to state the product boundary and make the meaning of the interface explicit.

In the [teaching source graph](../../case-study/source-graph-v1.json), the candidate function, model, property, and command interface have stable identifiers. That allows the discrepancy to refer to the same interface throughout the course. An identifier does not make a contract correct, but it lets engineers ask whether they are discussing the same revision.

## From a mismatch to an integration investigation

What should happen next? One tempting answer is to make the two interfaces use the same word. That would hide the discrepancy without resolving the engineering question.

A better response begins with a decision: **do not yet accept interface equivalence**.

The controller and adapter owners first clarify what each acknowledgment actually represents. Does the controller need confirmation of message reception, application of a command, observation of a physical indication, or different information for different purposes? Are those states distinguishable, and who is responsible for the difference?

Only then can the team choose an investigation that would answer the right question.

For example, it might propose an emulator or a small bench setup. The experiment would put a known controller-side command into a known adapter configuration, observe which acknowledgment was reported, and—where appropriate—establish separately how an applied indication could be observed. A useful negative case would distinguish “message received, indication not established” from “applied indication confirmed.”

This is a **proposed experiment**, not an executed physical test. We have not specified real electrical pinouts, roadside timing rules, equipment safety behavior or a compliant installation design. Those would require a different technical investigation and the applicable engineering expertise.

Nevertheless, the proposal is already concrete enough to review. It states a question, a source revision, a discriminating observation, a responsible engineering interface and the gap that would remain after the experiment.

## Developing the product and developing how we engineer it

The discrepancy affects two systems.

For the **product**, the team may need to revise the command/acknowledgment interface, define failure reporting, change the controller's assumptions, or specify an additional observable condition. The right solution is not yet known.

For the **engineering environment**, the team needs a way to compare interface definitions, identify incompatible revisions, create and run meaningful integration checks, retain the tested configuration, and explain what the result establishes. It may need an adapter emulator, a bench test, better source relationships, or a shared discrepancy record.

This is the practical meaning of developing the machine that builds the machine. The team does not invest in test infrastructure because automation is fashionable. It invests because a product question cannot be resolved using the capabilities currently available.

The integration environment then becomes reusable. A later adapter change can be checked against the agreed semantics. A future software increment may receive earlier feedback from the same interface contract. The team still has to decide whether that feedback applies to the actual configuration under consideration.

## The operator and maintainer enter the story

A system can behave as its internal model predicts and still be difficult to use or maintain.

Suppose an operator sees that a command was issued, but cannot tell whether the commanded indication was established. What information is available? Can the configuration be identified? Who can isolate the discrepancy? What would be recorded for later investigation?

These are questions about intended use and supportability, not optional notes to add after software implementation.

A controller's internal trace might explain which phase it selected. A communication log might explain which message was received. An observation of actual indication would support a different statement. Confusing those records creates false confidence.

For our teaching case, we do not assume a fielded installation or invent an operator report. We use an illustrative maintainer question to expose information and behavior the product definition has not yet addressed.

The team can record that as an open engineering item. Doing so is progress: it makes the boundary of current knowledge visible.

## Why small increments still need systems integration

The previous chapter argued for small, reviewable increments. That remains valuable, but a small change in source code is not necessarily a small change in system meaning.

An input-validation improvement that rejects negative invented traffic arrivals can form a narrow, end-to-end learning increment. A change to the acknowledgment semantics crosses the controller, adapter and physical-observation boundary. It may require several disciplines to agree on one outcome, even if the corresponding software diff is tiny.

Architecture helps the team isolate change where it can. It does not make genuine dependencies disappear.

This is also why integration cannot simply be delegated to an agent that can open a pull request. Agents may help compare definitions, generate proposed test scenarios and prepare a change record. They need correct source revisions and appropriate tools. Their completion of a task is neither an interface agreement nor evidence that an indication was observed.

## A product configuration with open evidence

By the end of this investigation, the team can assemble a **provisional configuration record**:

- The teaching phase model and its T1 assumptions remain identifiable.
- The controller interface expects applied-state acknowledgment.
- The fictional adapter offers message-received acknowledgment.
- The discrepancy has not been resolved.
- An interface-semantics review and an integration/observability experiment are proposed.
- No physical compatibility, indication, operator usability or deployment readiness has been established.

This is not failure to integrate a product. It is an honest engineering checkpoint: the team can say precisely what is understood, what was only proposed, and what would need to be demonstrated before making a stronger claim.

The [shared decision chain](../../case-study/DECISION-CHAIN.md) shows the proposed discrepancy alongside its possible evidence and authority consequences. The record is intentionally small enough to inspect without installing a modeling tool.

## What does our evidence actually support?

A passing phase-sequence check could establish a property of the simplified model under its declared assumptions. A review of two interface definitions could establish that their meanings differ. A future bench observation might establish something about a specific hardware configuration.

Those are different claims, and they need different evidence.

The next chapter, **Verification, Validation and Engineering Evidence**, examines how to connect each claim to a suitable method, configuration, result and limitation—without turning the fact that a tool completed successfully into an unwarranted statement about an integrated product.

**Engineering takeaway:** An executable model is an invaluable way to investigate behavior. An integrated product must also have consistent interfaces, a relevant physical and operational boundary, and evidence suited to the claims being made. Product integration is where those assumptions meet—and where the engineering environment must be capable of investigating the differences.

---

*Further reading:* [NASA — Product Realization](https://www.nasa.gov/reference/5-0-product-realization/) explains why interfaces, integration enabling equipment, sequencing and transition need deliberate engineering work. It is an educational reference, not an applicable traffic-control regulation. For the underlying fictional definitions, inspect the [T1 case-study index](../../case-study/README.md).
