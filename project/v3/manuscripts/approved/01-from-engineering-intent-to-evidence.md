# Chapter 1 — From Engineering Intent to Evidence

## Engineering starts with uncertainty

Engineering rarely begins with a complete set of requirements.

It often begins with a problem, an opportunity, or a desired capability. We may understand what we want to achieve without knowing which technical solution is appropriate, what performance is realistic, or which constraints will ultimately determine the design.

Traditional development processes often encourage us to translate this uncertainty into requirements and plans early. Requirements are important, but specifying a solution too soon can create an illusion of certainty.

A more effective approach is to let engineering knowledge mature through exploration, modeling, experimentation, and progressively refined specifications.

This does not mean abandoning requirements. It means introducing precision where it adds value, while allowing unresolved questions to remain visible.

## From intent to engineering knowledge

Consider the following engineering intent:

*Improve traffic flow through an intersection without compromising safety.*

This describes a desired outcome, not a technical solution.

We do not yet know whether the intersection needs different signal timing, additional sensors, a more advanced controller, or changes to the road layout.

Before selecting a solution, we need to understand the problem.

What traffic conditions matter? How should improvement be measured? Which safety constraints must always hold? What information is missing?

These questions lead to models, hypotheses, experiments, and eventually more precise specifications.

The process is iterative. New findings can change earlier assumptions and even the original interpretation of the problem.

## From isolated artifacts to connected engineering knowledge

Engineering knowledge has traditionally been distributed across documents, requirements databases, modeling environments, simulation tools, and software repositories.

Each tool may serve its purpose, but the relationships between them are often difficult to maintain.

A requirement changes, but which models, interfaces, tests, or operating instructions must also change? Can we reconstruct why an architectural decision was made? Can an AI agent access the relevant information without relying on an engineer to manually assemble it?

Document-as-Code offers part of the answer: information can be maintained in structured, version-controlled formats that people and software can work with.

Digital engineering extends this principle beyond documentation.

Requirements, functions, interfaces, decisions, executable models, tests, and verification results can become connected parts of an engineering information environment.

The objective is not to replace every specialized engineering tool. It is to make information accessible, consistent, traceable, and reusable across disciplines and throughout the product lifecycle.

## We build the machine that builds the machine

There is another important change taking place.

Traditionally, engineering effort has focused heavily on creating the product itself: designing components, writing software, producing documentation, integrating subsystems, and performing verification.

Increasingly, organizations also invest in the systems that make these activities repeatable and automatable.

This idea is sometimes expressed as:

**We build the machine that builds the machine.**

The first machine is the *engineering system*. It includes information models, specifications, development environments, simulation tools, automated tests, integration pipelines, and delivery mechanisms.

The second machine is the product we intend to create.

This is not an entirely new concept. Software factories, product-line engineering, reusable platforms, and continuous delivery have pursued similar objectives for decades.

What changes with AI agents is the potential scope of automation.

Activities that previously required extensive manual interpretation—such as translating an engineering intent into a preliminary specification, identifying affected artifacts, generating test cases, or preparing a change proposal—can increasingly be supported by AI.

This changes where engineering investment can create value.

Instead of repeatedly performing every engineering activity manually, we can invest in the information structures, automation, and controls that enable those activities to be performed consistently.

The objective is not to eliminate engineering work. It is to increase the amount of reliable engineering output that a team can produce while maintaining technical responsibility.

Importantly, this shift is neither automatic nor universally beneficial. Engineering infrastructure has a cost, and automation only creates value when its benefits exceed the effort required to develop, maintain, and verify it.

## Engineering in the age of AI agents

AI agents introduce a new way to interact with the engineering system.

An engineer can describe an intent, ask an agent to investigate alternatives, identify missing information, develop a preliminary model, or propose changes to an existing specification.

Natural language becomes an important engineering interface.

However, a conversation with an AI agent is not itself a controlled engineering definition.

Important information must be captured in persistent specifications, models, decisions, and other version-controlled artifacts.

The agent may help create and maintain these artifacts, but engineering authority remains with the people and processes responsible for the product.

This leads to an important distinction:

**Prompts direct engineering work. Specifications preserve engineering knowledge. Verification establishes what the available evidence actually supports.**

The engineering system provides the context, constraints, tools, and checks that allow agents to contribute without becoming an uncontrolled source of change.

## From exploration to verified capability

As development progresses, uncertainty is gradually reduced.

Early models may be deliberately simple. They help us understand behavior and compare alternatives without committing to a final architecture.

Later, specifications become more precise. Requirements describe measurable properties, interfaces become controlled, and tests establish whether defined criteria are met.

Implementation and verification are not necessarily the final steps in a linear sequence. They can occur repeatedly as the system evolves.

A working prototype may reveal that our assumptions were incorrect. A failed test may lead to a design change. A new capability may introduce additional requirements.

The goal is not to eliminate iteration. It is to make each iteration produce useful engineering knowledge.

## Engineering evidence

A simulation result, test report, or generated analysis can support an engineering decision.

But evidence is meaningful only when we understand what was evaluated.

Which model was used? What assumptions were made? Which configuration was tested? What criterion was applied? What limitations remain?

Passing a simulated test does not necessarily demonstrate that a physical system is safe or suitable for operational use.

Reliable engineering requires the ability to connect conclusions to the definitions, methods, and observations that support them.

## Engineering two connected systems

Modern engineering increasingly involves developing two connected systems.

The first is the product: its functions, interfaces, behavior, performance, and physical or software implementation.

The second is the engineering system: the information, models, tools, automation, agent workflows, and verification capabilities used to develop and maintain that product.

These systems evolve together.

A new product capability may require new simulations or tests. A new engineering tool may enable alternatives that were previously too expensive to investigate. Better information structures may allow agents to perform tasks that previously depended on manual interpretation.

The engineering system is therefore not simply supporting infrastructure. It can become a strategic capability that determines how quickly and reliably an organization can develop and change its products.

In the following chapters, we will explore how to build and use such an environment.

We will use a simple traffic intersection as a recurring example, gradually extending its engineering definition and examining how changes can be analyzed, implemented, verified, and delivered.

## Key takeaway

**Modern engineering increasingly involves building both the product and the engineering system that enables its development. Connected information, executable models, automation, and AI agents can make engineering work more repeatable and scalable—but engineering judgment, controlled specifications, and trustworthy evidence remain essential.**

---

## Further reading

- Software Engineering Institute — *Investment Analysis of Software Assets for Product Lines* (1996).
- Shahin, Babar & Zhu — *Continuous Integration, Delivery and Deployment: A Systematic Review* (2017).
- Chalmers University of Technology — *Polymer: Development Workflows as Software* (2025).
- DORA — *Accelerate State of DevOps Report* (2024).
- METR — *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity* (2025).
