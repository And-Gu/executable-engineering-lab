---
id: eel-v3-ch10-evidence
chapter: 10
part: "IV — Trust, Decisions and Evolution"
title: "Verification, Validation and Engineering Evidence"
status: draft
reference_case: four-way-traffic-intersection
publication: unpublished
---

# Verification, Validation and Engineering Evidence

*The model works, the tests pass and a software revision is ready. Is the intersection system ready to use?*

Our simplified controller model can be executed. The team can compare arrival scenarios, inspect phase transitions and reproduce a set of model-level checks.

That is useful engineering progress. It is not yet a complete product.

A real intersection would include physical signals, electronics, wiring, operating constraints, people and environmental conditions. Its behavior must be appropriate not only to a model's rules but to what road users need. Understanding what is actually established—and what remains untested—is the purpose of verification, validation and engineering evidence.

## Start with a claim

A statement such as “the system is safe” is too broad to be supported by a single green test result.

A narrower claim might be: *For the identified version of the simplified two-group state model, the checked transitions did not command both modeled vehicle groups to green simultaneously.*

Now we can ask what evidence supports that claim. Which model revision was tested? Which transitions and input conditions were covered? What does the check actually evaluate?

A different claim—*the installed intersection behaves safely during a detector fault*—would require other definitions and evidence. A passing simplified state-model test cannot establish it.

The quality of engineering evidence depends on the claim, its context and the applicability of the method used to investigate it.

## Verification and validation answer different questions

**Verification** examines whether a defined item meets its specified requirements or properties. A model-level phase-transition test is a verification activity against a specified model property.

**Validation** examines whether a system, model or capability is suitable for its intended use. A technically correct signal controller might still fail to meet road users' needs if it creates unacceptable waits or behaves poorly in conditions the design did not consider.

Both are needed, but they can occur at many stages. A model can be validated for a limited engineering purpose before it is used for further decisions. A component can be verified against its interface and later integrated into a system that requires additional evaluation.

A single piece of evidence may be relevant to several questions, but it should not be stretched to support claims beyond what was observed.

## A complete product has multiple kinds of deliverables

Imagine that the team is preparing a physical intersection system rather than an educational simulation.

Depending on the actual product, applicable requirements and organization, the delivery may involve controlled specifications, architecture and interface records, software and electronics configurations, installation drawings, safety analyses, cybersecurity information, test procedures, integration records, operating instructions and maintenance provisions.

The list is not a universal paperwork checklist. Each artifact exists to define, evaluate, operate or maintain a particular aspect of the system.

Software unit tests may be necessary. They do not replace hardware integration tests. A drawing may describe intended wiring. It does not establish that the installed wiring matches the drawing. A simulated queue may be useful for design exploration. It does not establish measured operational performance.

The deliverables need coherent identities and revisions so the team can explain which system configuration they describe.

*Suggested evidence view: Select a claim about the fictional intersection and follow its supporting definition, test method, actual result or pending observation. A separate column identifies a missing physical or operational evidence class.*

## Test success is not the same as requirement success

A test tool may complete successfully while the evaluated system fails the engineering criterion. That distinction is central to trustworthy automation.

For example, a simulation can execute without software errors, produce a valid result and reveal that a candidate waiting-time target was not met. Recording that result accurately is more valuable than reporting a generic green status.

The reverse is also important. A model might satisfy its encoded property but omit a real-world condition that makes the result insufficient for product acceptance.

Evidence should therefore include the configuration, method, criteria, observations and interpretation—not only whether a program exited successfully.

This lesson applies to AI evaluation too. An agent's successful execution of a task does not by itself establish the correctness of its engineering conclusion. A product AI classifier's score on one dataset does not establish suitability for every operational condition.

## Evidence follows the configuration

Suppose the team updates the controller software, revises an electrical interface or changes a detector configuration. Can it reuse an earlier verification result?

Sometimes yes, if the relevant definition, conditions and assumptions remain applicable. Sometimes a new check is necessary.

An unchanged requirement ID does not prove that evidence from an older configuration applies to a new one. The relation must be evaluated.

A digital thread can help connect a requirement, specific configuration, test procedure, recorded result and later change. It provides a route for assessment. It cannot substitute for the assessment itself.

The engineering environment becomes more useful when it records evidence systematically, preserves failed results and makes applicability easier to inspect.

## Product maturity is multidimensional

A new software capability may be ready for integration while a physical installation remains unverified. A model may be credible for comparing two timing assumptions but not for assessing pedestrian safety. An interface may be defined yet awaiting supplier confirmation.

Treating all of these states as one percentage of “completion” obscures important differences. A better view shows the relevant claim and what has actually been established.

This matters for planning and release. Engineering teams can continue useful work in parallel, but they need to know which claims remain open before moving into operational use.

## Feedback after delivery

Evidence does not stop at the first release. Operating observations can reveal new conditions, defects or needs. They become inputs to change analysis, modeling, regression selection and later validation.

The product system evolves; so does the engineering environment that makes evidence possible.

We have established what qualified evidence should support. The next question is how organizations assign authority, manage technical risks and ensure that faster, agent-supported changes remain under appropriate control.

That is **Governance and Engineering Authority**.
