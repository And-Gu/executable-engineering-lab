---
id: eel-v3-ch08-increments
chapter: 8
part: "III — Engineering with AI Agents"
title: "Engineering in Small, Reviewable Increments"
status: draft
reference_case: four-way-traffic-intersection
publication: unpublished
---

# Engineering in Small, Reviewable Increments

*If an agent can produce a large change quickly, should we accept that change as one piece of engineering work?*

A team asks an agent to improve the intersection simulation. The proposed change modifies a phase-selection rule, input records, a graph of interfaces, test fixtures and the visual explanation in one large pull request.

The change may be plausible. Reviewing it is difficult because different decisions are mixed together. A reviewer cannot easily tell whether a new test failed because the model changed, the scenario changed or the expected result was rewritten.

Faster implementation does not eliminate the need for understandable change boundaries. It makes those boundaries more important.

The goal is not to minimize line count or force every adjustment into a tiny PR. It is to make **one meaningful engineering claim and its consequences reviewable**.

## Bound an increment by what can be evaluated

An increment is a useful, coherent change in capability or engineering knowledge. It should have a reason for existing, an identifiable scope and appropriate acceptance conditions.

For our intersection, one increment might establish a controlled input schema for a signal-phase scenario. Another might add a separate state-model property check. A later increment might expose the resulting model timeline in a learning view.

These changes can support one overall initiative without having to be approved as one indivisible package.

Reviewers can then ask focused questions. Does the new input definition express the intended meaning? Does the added check test that definition? Does the reader-facing view use the actual model output?

Smaller increments make cause and effect easier to inspect. They also make it easier to stop, revise or revert a particular proposal when the engineering situation changes.

## Architecture comes before task division

A common mistake is to divide work only by visible screens or repository files: “change this panel,” “update that dropdown,” “fix the chart.” Those can be useful tasks, but they may not establish clean responsibilities.

Before assigning work, decide which concerns should remain independent.

The **engineering definition** describes the intended semantics of a signal state and its parameters. The **pure behavioral model** calculates transitions and queue effects. **Validation and tests** check selected properties. The **presentation layer** helps a reader explore the result.

That separation allows a change to the layout without altering model mathematics, and a model test to run without starting the browser. It also lets an engineer or agent work against a defined contract rather than infer everything from the UI.

Architectural boundaries do not have to be elaborate. A clear interface and known source of authority often matter more than the number of packages or modules.

*Suggested change-review view: Compare one oversized mixed proposal with three coherent increments—source contract, model/check, explanatory view. Selecting each reveals its claimed outcome, changed surfaces and evidence required for review.*

## Definition of Done concerns the result

A checklist such as “code written, tests green, PR opened” is not enough to establish the result of engineering work.

For an input-schema increment, the Definition of Done might require a documented meaning for each field, invalid-value handling, stable identifiers, and tests showing that expected and invalid inputs are distinguishable.

For a phase-model check, it might require the explicit property, a repeatable case that exercises it, recorded model revision, and an explanation of what the check does **not** establish.

For the visual, it might require that every shown transition follows the model output, the controls have accessible labels and the text remains understandable without animation.

An agent can help compare actual deliverables against these criteria. That produces a more useful progress picture than counting tasks moved across a Kanban board. Completion still needs appropriate review; an agent's status assessment is a proposal, not an engineering acceptance decision.

## Cross-discipline increments are not always synchronized

Suppose the software team wants to change a signal-command message format. The new schema can be reviewed quickly, but a controller electronics interface or installation specification may depend on it.

The increment should explicitly identify that dependency rather than treat a passing software test as evidence that an installed signal will work.

The team may accept a software-model revision as ready for further integration while leaving physical verification open. In another case, a product requirement may force the electrical and software work to be reviewed together.

Small increments are a means to clearer control, not a promise that every engineering decision is independent.

## Review the change in context

A reviewer should be able to see the purpose, changed definition, relevant baseline, effect on known relationships, results of actual checks and outstanding consequences.

A diff is helpful because it shows precisely what changed. But file differences alone do not explain engineering meaning. A revision to a signal phase may have a broader effect than a larger change to presentation text.

This is why the information model and digital thread matter. They connect a changed artifact to its intended function, requirements and evidence. The engineer can follow those links and distinguish established dependencies from items requiring investigation.

The agent's role is to make proposed changes and their basis easier to inspect—not to bury the reviewer in generated rationale or claim approval on their behalf.

## Improve the delivery method as well

The team has now learned which increments are hard to review. Perhaps simulation results are not reproducible, an interface contract lacks validation, or the review process requires manual steps that could be automated.

Those are improvements to the **engineering environment**. Addressing them can make subsequent product changes easier to verify and integrate.

The final challenge is to connect these small, controlled pieces into a repeated engineering capability. How do changes move from source and simulation to testing, integration and releasable product configurations, while different disciplines work at different rates?

We need **continuously integrated engineering**.
