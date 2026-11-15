# Chapter 02 — Planning Under Uncertainty

**Status:** Proposed V3 editorial update to an existing brief; **approved current chapter title, unapproved full prose**  
**Part:** I — Engineering in the Age of AI  
**Reference:** [single four-way intersection case](../project/v3/REFERENCE-INTERSECTION.md)  
**Review:** [Chapters 01–04 reconciliation](../project/v3/CHAPTERS-01-04-EDITORIAL-REVIEW.md).

## The one question
When the system concept is still uncertain, which **product capabilities** can we responsibly commit to, and what **knowledge/engineering capabilities** must we build or investigate first?

## What the reader must gain
Explain and connect operational intent/vision, themes and initiatives, unknowns and hypotheses, exploration activities, decision owners, roadmap increments and delivery backlogs. Distinguish progress in *knowledge* from work completed and separate product backlog priorities from needed engineering-environment investment. Explain iterative replanning without turning the chapter into a planning tool tutorial.

## Opening engineering situation
An intersection-improvement initiative faces conflicting/unknown vehicle arrival behavior, pedestrian and turning needs, signal-controller interfaces, detector and cabinet options, operational constraints and physical procurement/installation lead times. Engineers cannot select a controller solely from a feature wishlist.

## Narrative arc
1. Start with the city's intended improvement and identify what is **known**, assumed and still unknown. These are different information states.
2. Compare early investigations: observe traffic-arrival variation, examine conflicting movements, estimate installation feasibility, test a candidate phase model.
3. Choose the **next learning experiment** by its expected effect on a decision, not by a pretend numerical maturity score.
4. Distinguish an **exploration initiative**, a sufficiently defined release increment, and a product/engineering capability that can be built in parallel.
5. Show the joint roadmap: candidate product behavior may require arrivals datasets, simulation fixtures, typed model sources and new verification checks.
6. Explain discipline-specific cadence and how a finding may legitimately revise priorities, scope and release expectations.

## Primary educational view
A **decision/uncertainty map** (inspect a few options, assumptions, consequence and dependency on engineering capability) and accessible table. Do not force a full Kanban system, ticket manager, or fake complete engineering workflow.

## Distinctive contribution and source reuse
Reuse the earlier approved source prose about uncertainty and maturation of engineering intent and the versioned planning hierarchy in `project/ENGINEERING-WORKFLOW.md`, not legacy DMS radius/sensor examples. Chapter 01 tells **why**; this chapter teaches **what to explore vs commit**. Chapter 06 later explains **how to progressively specify** the accepted next increment. Do not collapse the two chapters.

## Acceptance and transition
The reader can distinguish a product increment from an experiment and from engineering-tool work, identify one useful next decision and explain how findings change both roadmaps. Bridge to Chapter 03, *Engineering Knowledge as Code*: **How do we keep assumptions, functions, interfaces and decisions connected while the concept changes?**

## Boundaries
All scenarios are instructional, not authoritative traffic-planning data; no physical equipment specification, no real product controller or implementation is authorized by this brief. Preserve current public preview and original DMS V0 model until separate authorization.
