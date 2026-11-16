# V3 post-review editorial decisions — 13 versus 14 chapters

**Status:** Proposed decisions for the course owner; not approved curriculum, rewritten manuscript, authorization to implement, or publication approval  
**Date:** 2026-11-16  
**Authoritative approved baseline:** [Current 13-chapter curriculum](../../CURRICULUM-MAP.md)  
**Independent findings:** [Full-course editorial review](INDEPENDENT-FULL-COURSE-REVIEW-2026-11-16.md) (merged [PR #42](https://github.com/And-Gu/executable-engineering-lab/pull/42))  
**Teaching case:** [One fictional four-way intersection](../REFERENCE-INTERSECTION.md)

## Editorial decision requested

**Preferred recommendation: introduce a 14th chapter position** by inserting *From Models to an Integrated Product* as proposed Chapter 09, moving detailed verification and authority to positions 10–11, and moving *Continuously Integrated Engineering* to 12. The former Chapter 13 becomes a reader-decision capstone at position 14.

**Not yet decided:** This is a proposed change to an owner-approved 13-chapter sequence. The original titles and order continue to govern manuscripts, agent instructions, and navigation until the owner approves a revised map. Do not rename or renumber existing drafts solely because this proposal exists.

**What is not optional, regardless of chapter count:** The missing product-integration bridge and the absence of a continuous inspectable teaching case are **P0 educational gaps** identified by the independent reviewer. If the owner retains 13, place the missing work in explicitly named sections of the existing chapters rather than dropping it.

## Why the independent review warrants substantive change

The present thirteen manuscripts (13,589 words at the reviewed revision) form a readable explanation, but the learner repeatedly encounters descriptions of what an engineer *would* inspect rather than actual, small examples with a source, a choice, a consequence and a result. The course promises **whole-system engineering** yet goes from teaching models to imagining a ready or deployed product without showing integration, supplier interface agreement, operator/maintainer needs, and transition to use. The independent reviewer found this gap in Chapter 08→09 in particular.

The remedy is **not** a large software/controller build. It is one coherent, fictional set of inspectable engineering records, introduced in stages, including a worked integration discrepancy. All content stays educational and non-operational.

## Recommended fourteen-chapter learning path (subject to owner approval)

| Proposed # | Source in current approved 13 | Proposed title | Reader's distinct decision / question |
|---:|---|---|---|
| 01 | 01 | The New Engineering Paradigm | What changes in both the product and the environment for engineering it? |
| 02 | 02 | Planning Under Uncertainty | Which question should the team investigate and when should it commit? |
| 03 | 03 | Engineering Knowledge as Code | Which source relationship establishes a dependency, and which effect is still only a hypothesis? |
| 04 | 04 | Learning Through Models and Prototypes | Which transparent, bounded experiment can address the next question? |
| 05 | 05 | Engineering Data: From Measurements to Decisions | Which original observations and derived results can legitimately be compared? |
| 06 | 06 | **Specifying the Next Engineering Increment** (proposed rename) | What changes become controlled, testable and reviewable, while uncertainties remain open? |
| 07 | 07 | Directing AI Engineering Agents | Which sources, tools and actions can be delegated, and how is an actual result evaluated? |
| 08 | 08 | Engineering in Small, Reviewable Increments | What constitutes a coherent *outcome*, not merely a code layer or large PR? |
| **09** | **New** | **From Models to an Integrated Product** | What must be agreed, built, connected and observed before a model can inform a physically integrated product? |
| 10 | 10 | Verification, Validation and Engineering Evidence | What does each record establish about that integrated configuration and intended use? |
| 11 | 11 | Governance and Engineering Authority | Who may accept a particular change with which controls, risks and open evidence? |
| **12** | 09 | Continuously Integrated Engineering | Given change eligibility and governance, how do we build and operate a reliable release capability? |
| 13 | 12 | Managing Engineering Knowledge at Scale | Which models, methods, tools and evidence transfer to another product variant, and under what conditions? |
| **14** | 13 | **Choosing the Next Engineering Capability** (proposed rename) | Given competing bottlenecks, which improvement to the engineering environment makes sense next? |

**Four proposed parts:** I *Frame the work* (01–02); II *Build and test knowledge* (03–06); III *Develop an integrated product* (07–09); IV *Establish trust and sustain change* (10–14).

The part labels are proposed editorial navigation, not additional engineering gates. Engineering verification, integration planning, security and risk begin early in an actual development project; the narrative order **must not** suggest otherwise.

### Why integration merits its own chapter

**Working title:** From Models to an Integrated Product  
**Opening:** The team has an illustrative fixed-time phase model and initial command-interface definition. A supplier's proposed signal-command adapter uses a different interface revision and does not provide the acknowledgement or failure behavior the controller-side definition expects. No real physical hardware or supplier product is asserted.

**New reader capability:** Analyze a **product-level interface discrepancy**, design a bounded integration/bench investigation, distinguish model-level verification from hardware/interface and intended-use evidence, and explain the product/environment consequences.

**One worked case, not a components catalog:**
1. Show one named controller output, signal-device input and interface revision mismatch in a small pair of proposed records.
2. Ask which claim is at risk: signal command semantics, revision compatibility, expected acknowledgement/timeout, or installation responsibility.
3. Show a simple integration sequence and a bench/emulator contract that could expose the mismatch; distinguish proposed checks from *actually executed* evidence.
4. Ask an operational question: how does an installer, maintainer or operator notice a fault, know the configuration, and decide what to do?
5. End with a **provisional** integrated product configuration *and open evidence*, not a fictional certified or deployed intersection.

**Needed artifacts:** A 2-node interface-contract comparison, a named discrepancy and revision decision, a proposed test/fixture, a product/engineering-environment impact view, and an operator/maintainer question. No real command timings, cabinet wiring instructions, deployed controller or operational assurance claims.

**Minimum length target:** A standalone, reader-facing chapter comparable to its neighbors, shaped by the examples rather than an arbitrary word count. A single annotated figure and a static record comparison should suffice; don't build an interactive integration authoring IDE.

### Order rationale

- Current Chapters 03–06 have a strong source → model → data → specification progression. Preserve it.
- Chapter 07 teaches delegated work; Chapter 08 teaches coherent review boundaries; new Chapter 09 ensures that reviewable code/model changes do not substitute for **physical and operational integration**.
- Evidence/validation and authority (10–11) teach **what makes a change eligible**. Only then is the fast-release target in 12 a meaningful architecture/engineering-factory requirement.
- Reuse follows one concrete product configuration, and the capstone should **force an engineering investment decision**, not summarize twelve definitions again.

## Conservative thirteen-chapter alternative (viable fallback)

Retain the approved titles and numbers, but make integration a **mandatory worked through-line**:
- Chapter 08: a physical controller/interface discrepancy that cannot be decomposed into independent code-layer PRs, with an explicit integration responsibility;
- Chapter 09: before discussing fast delivery, show the *assumed* product configuration, qualifying evidence gaps and a blocked release-eligibility decision; separate an applicable software-change class from physical/safety-affecting changes;
- Chapter 10: product integration deliverables, an interface/bench record, a maintainer use scenario and evidence applicability;
- Chapter 11: who may resolve/approve the interface/risk discrepancy;
- Chapter 13: capstone includes an investment choice rather than a recap.

**Cost:** Avoids navigation changes but risks overloading Chapters 08, 09 and 10. The independent reviewer considered it credible but weaker than the fourteen-chapter proposal.

### Options rejected from the full-course review

- Merge planning and specification: loses two distinct reader abilities.
- Merge verification and authority: obscures evidence versus decision rights.
- Replace the entire capstone with integration: drops the ultimate decision about **which engineering capability to improve next**.
- Add a presentation/visual-design chapter: that material already belongs principally in **Document-as-Code Lab**; this site needs meaningful engineering views, not deck-building instruction.

## Editorial invariants

- The four-way intersection remains **the one recurring V3 system**, while the original DMS/monitoring pages remain historical and unchanged.
- Retain the two evolving systems: product and engineering environment.
- Retain Chapter 05 as a distinct engineering-data chapter and Chapter 03's **mandatory typed knowledge graph** and Chapter 04's bounded model. Neither has a completed V3 runtime today.
- Prompt-oriented engineering, agent context, specialized visual review and engineering factory design **plus operation** remain important, without claiming all GUIs disappear.
- A smaller number of concrete illustrations beats many hypothetical UI controls.
- Keep US English, reader-first prose and evidence-status accuracy. No invented productivity percentages, deployed controller performance, supplier claims or agent execution logs.
- Project-source and Astro-publication permissions are separate; **merging this planning proposal must not publish a course or alter any approved manuscript**.

## What must be decided by the owner

- **D1 — Chapter count/structure:** 14 with an integration chapter and recommended reorder, or 13 with the full bridge distributed across the existing 08–11.
- **D2 — Proposed renames:** accept/alter/reject “Specifying the Next Engineering Increment” (current 06) and “Choosing the Next Engineering Capability” (current 13).
- **D3 — Worked-case sequence:** accept the single illustrative, inspectable case as a mandatory editorial deliverable (recommended irrespective of D1/D2).
- **D4 — Publishing:** later, separately choose what to publish; none of these recommendations constitutes V3 publishing approval.

Until D1/D2 are explicitly accepted, **do not update `project/CURRICULUM-MAP.md`, chapter numbers, manuscript YAML front matter, source indexes or the public site**.

## Required next checkpoints

1. Owner considers this proposal and the independent report (PR #42).
2. Draft and review a **minimal concrete cross-chapter case contract**, with a source-backed graph specimen and a transparent model/data trace. This is independently useful under either D1 option. See [Worked-case improvement package](WORKED-CASE-REVISION-PACKAGE-2026-11-16.md).
3. Once D1/D2 are decided, update exactly **one** curriculum authority and map the old draft texts to new positions; keep historical identifiers and links.
4. Rewrite manuscripts in groups with explicit editorial diffs and a repeatable editorial QA pass, starting with Chapters 03–05 and the integration/eligibility bridge.
5. Commission a short independent *re-review* of the revised material; source/CI tests and owner editorial approval are separate. Publish only after a distinct authorization.

**Proposal only. Current 13-chapter curriculum remains authoritative.**
