# Engineering workflow — progressive specification and two concurrent loops

## Common information states
**Intent:** why and what outcome; **uncertainty/hypothesis:** not-yet-confirmed explanation; **experiment:** designed observation; **observation:** recorded output with provenance; **assessment:** qualified interpretation; **decision:** named owner accepts an option; **controlled engineering definition:** versioned requirements/interfaces/models; **execution evidence:** recorded check/test tied to exact sources.

No state silently becomes another. Agents may propose changes to all states, but only explicitly authorized workflow grants adoption or approval.

## Planning hierarchy
Platform/system vision → technical roadmap themes and initiatives → intended release capabilities / exploration questions → backlog epics, enablers, debt, stories.
One initiative may deliver through several releases. Product definition absorbs and refines earlier intent; links from every final requirement back to planning intentions are not automatically required. Important constraints and decisions retain context/provenance.

## Exploration loop
Question → working hypothesis → model or prototype → experiment → observation → decision → update understanding/roadmap.
May use sandboxed branches; fidelity and assumptions documented.
Outcomes include disproved hypotheses, residual risk and what to investigate next.

## Delivery loop
Bounded capability → progressive slice specification → interface/change analysis → implement → automated checks → independent review → integrate with controlled baseline.
Changes must remain reviewable; do not authorize expanding work scopes automatically.
Use thin vertical slices crossing relevant disciplines where possible, without pretending that a new physical part can be manufactured in one iteration.

## Different engineering cadences
- Software: frequent build and validation, target releasability if appropriate.
- Electronics: schematics/simulation can iterate quickly; hardware samples/procurement/EMC often slower.
- Mechanical: digital trade studies can iterate quickly; physical fabrication and installation constrained.
- Physical verification: rig access, qualification, environmental testing can be gated.
Synchronize **interface versions, planned integrations and evidence**, not identical iteration schedules.

## Agent control
Task contract = objective, authority, canonical sources, permitted edits, protected sources, tools, time/cost bounds, validation steps, stop conditions, expected review artifact.
Agent-generated claims are not independently accepted facts.
An agent cannot change its own success criteria or approve its own architecture/compliance claims.

## Promote experiment to baseline
Require accepted rationale, source diff, model/assumption impact, stakeholder review, test plan and versioned integration decision.
An experiment PASS alone is insufficient.

## Definition of ready for next slice
Intent and constraints understood; open questions named; tests/evidence appropriate to stage; small enough for review; affected disciplines/interfaces identified.
