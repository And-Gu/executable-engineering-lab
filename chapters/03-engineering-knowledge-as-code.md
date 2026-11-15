# Chapter 03 — Engineering Knowledge as Code

**Status:** Proposed V3 editorial update to an existing brief; current chapter title/sequence owner-approved, new prose pending  
**Part:** II — Building Engineering Knowledge  
**Reference:** [four-way intersection source concept](../project/v3/REFERENCE-INTERSECTION.md)  
**Review:** [Chapters 01–04 reconciliation](../project/v3/CHAPTERS-01-04-EDITORIAL-REVIEW.md)  
**Visual guide:** [Engineering Visualization](../docs/v3/ENGINEERING-VISUALIZATION.md).

## The one question
How do we represent the intersection's engineering knowledge **once, as meaningful and connected information**, so we can inspect different views and understand possible consequences of change?

## What the reader must gain
Distinguish a document, an engineering information model, an executable model and a visual view. Understand stable source identity, types, version/revision, authority, source links and typed relationships. Explain the **digital thread vs knowledge graph** distinction. Compare creating information for a new concept (greenfield) with change impact on an established baseline (brownfield). Explain SysML v2 as a potential technical representation without requiring it to be the authoritative UI or implying Mermaid is formal SysML.

## Opening engineering situation
A proposed adaptive-signal-control strategy may affect the controller phase-selection function, no-conflicting-permissive rule, command interface, model and related checks. Before drawing an impact network, engineers must establish what each object and relation means.

## Narrative arc
1. Start with a few specific engineering information objects and their sources: intent, functions, candidate constraints, component, interface, model, decision and test.
2. Show how multiple views (functional, structural, behavioral, requirement/interface) can present **the same identity** without creating contradictory independent definitions. Use a limited SysML-style view when helpful; accurately state its semantic status.
3. Explain **digital thread** as lifecycle-connected information and **knowledge graph** as typed, inspectable representation of objects and relations. Not every edge is proof of product behavior.
4. Introduce a proposed signal-strategy change and distinguish direct recorded relations from **possible** downstream review items.
5. Show how structured, versioned sources support human review and AI-agent context. Prompting can request a view/update, but the durable definition is not the conversation; detailed spec-driven work is Chapter 06.
6. Lead to the need for **executing** a model rather than only seeing its relationships.

## Required visual V03 — interactive knowledge graph
- Select nodes, follow **typed and source-backed edges**, inspect provenance/revisions/status, and trace a *proposed* adaptive-control change.
- Visually and textually separate current/recorded links, proposed relations and possible review candidates.
- Filter by object/relationship type; reset to baseline without changing sources.
- Include accessible keyboard interactions, selected-node textual detail and a table/list fallback.
- Validate IDs, allowed relationship types and referential integrity against a versioned **illustrative** fixture.
- Do not require a graph database, backend, engineering IDE, live source tool or user-authored model edits.
- An additional V02 system diagram may be helpful, but it must not displace the mandatory graph or contradict its sources.

## Source prose to consider
Archived approved *Engineering Information Models* and *Digital Threads and Knowledge Graphs*, selecting coherent passage themes (not their old numbering). Preserve existing historical DMS content/links; the new illustration is the single V3 intersection.

## Acceptance / transition
Readers can distinguish **authoritative source**, **derived view**, **typed relation**, **hypothesized impact** and **evidence**. The graph answers a question rather than decorate a page. Bridge: **What would a model or prototype tell us about the actual behavior of this intersection?** → Chapter 04.

## Boundaries
The current example IDs are proposals in `project/v3/REFERENCE-INTERSECTION.md`; no V3 source fixture, graph or simulation is claimed implemented. Separate approval is required to code/ship the interaction.
