---
id: eel-v3-ch13-continuous-engineering
chapter: 13
part: "IV — Establish Trust and Sustain Change"
title: "Continuously Integrated Engineering"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — fictional change eligibility and engineering-factory decision"
---

# Continuously Integrated Engineering

*What would it take to make a suitable engineering change releasable within one day?*

Imagine a team responsible for a software-enabled physical product. It wants to move an **eligible**, bounded software improvement from an accepted engineering request to a controlled, releasable configuration within **24 hours**.

That is a useful architectural challenge. It asks more than how quickly someone can edit code. Several agents may explore, implement and check changes simultaneously, while the team still has to reconcile sources, dependencies, evidence and decisions. **The engineering factory must coordinate outcomes**, not merely accelerate each individual task.

In our fictional intersection case, that capability does **not** exist yet. We have only a small teaching model and an unresolved interface discrepancy. The 24-hour window is therefore a **hypothetical design objective**, not an achieved metric, an operational promise or a claim that a roadside signal can be changed in a day.

The interesting question is what the product and its **engineering environment** would need before the objective could be realistic for a carefully defined class of changes.

## Not every small edit is eligible

A tiny software diff may have a large system effect. Before designing the fast path, we need to decide which changes can safely and legitimately use it.

Consider three fictional proposals:

| Proposed change | Hypothetical eligibility | Why |
|---|---|---|
| Correct an isolated diagnostic-report label without changing behavior, configuration meaning or interfaces | **Potential candidate**, pending applicable checks and review | Its effect may be bounded and separable |
| Change the command acknowledgment from “message received” to “state applied” | **Not automatically eligible** | The meaning crosses controller, electronics, physical indication and unresolved integration evidence |
| Change phase timing or introduce adaptive control | **Not automatically eligible** | Product behavior and operating consequences need different evidence |

Even the first row needs review. Calling a change “diagnostic only” is an assertion to check, not a blanket exemption. The team must know which version of the product is affected and what its test environment can genuinely demonstrate.

The interface mismatch from Chapter 10 is particularly useful. The source comparison cannot be fixed by merely putting an ambiguous acknowledgment into a new software release.

## Building the factory is engineering work

The phrase **engineering factory** describes the people, methods, models, tools and infrastructure that make repeated engineering changes possible. It is not simply a continuous integration server.

For the hypothetical rapid-change capability, the team would need several mutually supporting elements.

The **product architecture** must have coherent interfaces, configuration identification, appropriate modularity and recovery behavior. If every software change can alter unrelated physical functions, a short release process will struggle to keep its claims bounded.

The **engineering environment** needs controlled model and input definitions, independent behavioral and regression checks, relevant integration fixtures, review procedures, evidence records, documentation and a release/rollback mechanism appropriate to the product. It also needs a way to reconcile **parallel work, shared source ownership and unresolved dependencies** into a common, reviewable baseline. Detecting wrong changes and coordinating their consequences—not simply running code faster—makes the feedback useful.

Some of that infrastructure can be purchased or reused. Some must be created for the product and its disciplines. The right investments follow recurring engineering questions rather than a desire to automate every step.

Designing this capability is itself an engineering project: it has requirements, costs, dependencies, acceptance criteria, maintenance and evolution.

## Operating the factory is a different job

Building a test harness does not mean a team will operate it reliably.

Follow a hypothetical eligible change through the engineering work:

| Step | What must actually happen | What can block progress |
|---|---|---|
| Accept request | State intended outcome, effect and change class | Ambiguous product scope |
| Select context | Identify relevant source revisions, interfaces and dependencies | Stale or missing information |
| Make proposal | Implement a bounded, reviewable change | Coupled change outside agreed scope |
| Check | Run the relevant automated and, where needed, integration evaluations | A failing criterion or unavailable fixture |
| Assess | Link results to the correct configuration and claim | Evidence applicable only to another revision |
| Authorize | Obtain the decision required for that change class | Open safety, interface or operational question |
| Prepare | Produce an identifiable releasable package and recovery information | Missing packaging, version or rollback capability |

A successful automation step advances one part of the process. A blocked result is useful if it shows which product or factory capability is missing.

For example, if an interface-impact check finds that the proposed adapter acknowledgment has no suitable observation, the correct factory response is not to waive it because a build passed. The team needs an integration capability or a different change classification.

## Orchestrate the engineering outcome

Imagine three agent-assisted workstreams operating around the same fictional intersection: one proposes a T1 input-validation improvement, one investigates a possible change to the controller–adapter acknowledgment contract, and one prepares the relevant checks and review information.

The validation change may be a candidate for a bounded software path. The acknowledgment investigation is **not** evidence that the physical interface is compatible. A coordinator must see both facts and avoid treating several local successes as an accepted integrated product.

A practical orchestration capability needs to answer five questions:

| Coordination question | What the engineering environment should provide |
|---|---|
| **Intent:** What outcome are we pursuing? | A clear engineering objective, product boundary and acceptance criteria |
| **Context:** Which definitions apply? | Current source revisions, ownership and dependency links |
| **Execution:** Who or what is doing which work? | Separate agent/workstream scopes, isolated changes where helpful, and observable progress |
| **Integration:** Can these results be combined? | Relevant checks on the **combined** configuration and explicit status for unresolved dependencies |
| **Assurance:** What can advance, and who decides? | Linked evidence, change eligibility, escalation rules and accountable approval |

This is an **orchestration function**, not a demand for a new product. Source-controlled specifications, Git branches or worktrees, pull requests, CI, decision records and simple automation can support it. A separate AI-native, tool-agnostic control plane is one possible architecture when scale justifies it—not an assumed requirement or an engineering guarantee.

The coordinator may be a human, a bounded orchestration agent, deterministic workflow automation, or a combination. Its role is to maintain **shared context and dependency truth**. It must not promote proposed outputs to verified evidence merely because a worker agent reports success.

## Reduce the cognitive load of supervision

If ten agents report every intermediate step, the engineering lead may spend more time reading status than resolving product questions. Increasing code-generation throughput without changing coordination can move the bottleneck into review, integration and human attention.

The remedy is **exception-driven supervision**. For each outcome, surface what is integrated and supported, what is waiting on a dependency, and which decision specifically needs a human. Preserve detailed traces for inspection rather than forcing every reviewer to consume them by default.

In the teaching case, an illustrative summary could be:

- **Ready for relevant review:** T1 input validation changed; defined positive and negative checks reported against an identifiable revision.
- **Open engineering dependency:** controller acknowledgment rev A and adapter rev B describe different meanings.
- **Human decision needed:** defer compatibility acceptance or authorize a suitably scoped interface/bench investigation.

Those statuses are **hypothetical**; no parallel agents or physical test ran in the fictional case. A trustworthy summary must link to the corresponding source and actual check outcome where one exists.

The goal is to reduce decisions about routine tasks, **not suppress evidence or automate unowned approval**. Useful indicators include waiting time at dependency handoffs, incompatible revisions discovered at integration, repeated human interventions and time from an accepted outcome to checked, releasable evidence. A count of agent-generated tasks or dashboards is not a measure of product progress.

## Two feedback loops, two kinds of evidence

The factory is especially valuable when it supports **two connected feedback loops**.

| Loop | What is evaluated? | Who or what can act on feedback? |
|---|---|---|
| **Inner: executable engineering** | Does the proposed change satisfy defined model behavior, input constraints, regression tests and relevant automated integration checks? | Within scope, an AI agent can implement, execute, inspect failures and correct its work through several iterations |
| **Outer: product and engineering judgment** | Are the requirements right, the model useful for the question, the interfaces compatible and the necessary physical/operational evidence available? | Engineers and accountable decision-makers refine the specification, change the verification method, authorize further investigation or block release |

In the inner loop, fast and informative tests allow an agent to work through more of a **complete engineering flow** without needing a human to issue each next task. Orchestration coordinates several such loops around one outcome and makes cross-workstream conflicts visible. The checks should include meaningful valid and invalid cases, and their acceptance criteria should not be under the agent's unchecked control. Otherwise the agent can make a weak test suite green while missing the intended behavior.

The outer loop cannot be reduced to running the same tests again. A model can produce identical correct results every time and still omit an important product requirement. Where physical interfaces, operating conditions or system safety matter, the factory must provide suitable observations and human review rather than treating code-level success as acceptance.

This distinction is an **autonomy design decision**: grant more agent iteration where feedback is relevant and trustworthy, and require escalation where criteria or product validity are uncertain. It does not imply that each inner-loop correction retrains the AI model.

## Continuous integration, delivery and deployment

These terms are related but should not be collapsed.

**Continuous integration** means frequently combining and checking changes so problems are found relatively early.

**Continuous delivery** maintains a software configuration in a state where release can be performed when its applicable conditions are met.

**Continuous deployment** goes further by automating deployment to an operational environment under a suitable policy.

A physical system may have release preparation, hardware baselines, installation work and qualification gates that differ from software release cadence. A releasable software package does not, by itself, mean an installed intersection configuration has been accepted for operation.

When AI agents assist, they can prepare bounded changes, inspect sources or execute permitted checks. That may help the factory operate, but it does not transform missing physical evidence into a valid approval.

## The 24-hour target is a requirement to analyze

To make the target meaningful, define what starts and stops the clock.

For this educational discussion, it starts when a **bounded eligible engineering request is accepted** and stops when a configuration is **releasable under the defined process**, not necessarily deployed to an installed system.

That differs from [DORA's change lead time](https://dora.dev/guides/dora-metrics/), which is concerned with commit-to-production deployment in software delivery measurement. Mixing definitions would make the performance claim misleading.

The team should look beyond typing speed and the number of simultaneous agents. How long do changes wait on dependencies or shared-source ownership? Can results from different workstreams be integrated and checked against the same baseline? Does an engineer receive a small, actionable set of exceptions with links to the underlying evidence? Can a failed integration check be diagnosed and the release recovered?

No invented duration is needed for every step. The value of the target is that it exposes dependencies that the architecture and engineering environment must address.

## What would we improve after a blocked release?

Suppose a proposed software change depends on the controller-to-adapter acknowledgment. The factory finds that the interface semantics differ and that applied-state evidence is absent.

The immediate product decision is to **defer that change's release eligibility**.

The engineering-environment decision may be to improve interface source checks, define a relevant emulator/bench observation, retain configuration evidence or clarify which change classes the fast path can support.

That improves the **outer** loop by introducing evidence the former process lacked. In turn, the new checks can provide faster, more actionable feedback for the **inner** loop. The product reveals a bottleneck in how it is engineered; the factory is improved to address it.

That is why we need to **build** the engineering capability and **operate** it, then improve it based on real product questions.

## The factory becomes reusable knowledge

After the team establishes a reliable source, test and review method for one configuration, other teams may want to reuse it. But reusable tooling and reusable evidence are different.

A new supplier adapter or product variant may use the same model/checking pattern while requiring new interface compatibility evidence. A shared test procedure is valuable; the original result is not automatically transferable.

That is the next problem for **Managing Engineering Knowledge at Scale**.

**Engineering takeaway:** The engineering factory must **orchestrate outcomes across people, agents and disciplines**, not only accelerate individual implementations. Fast checks enable local autonomy; explicit dependency and integration management keeps the combined baseline coherent. People should focus on priorities, exceptions and decisions that cannot responsibly be automated.

---

*Inspect the case decision:* [Eligibility and blocked-change reasoning](../../case-study/DECISION-CHAIN.md) · [Integration discrepancy](10-from-models-to-an-integrated-product.md) · [DORA continuous delivery](https://dora.dev/capabilities/continuous-delivery/).
