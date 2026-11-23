# Which source should the change reviewer open?

<!-- EEL_RESEARCH_NOT_FOR_PUBLICATION -->

Research note EEL-R-Q86-02. Publication status `background-only`. See the research index for topic, chapter mapping and source status.

EEL-Q-S2-RESEARCH-02-A01 · B1 `64931d4` · Sources accessed November 23, 2026.

## The intersection question

If the team tries adaptive phase selection, which assumption should the model owner revisit, and will the interface owner need to change a command? In Chapter 4, E07 leads from proposal `INT-CHG-001` to phase selection. Following E03 backward from that function finds its model. The recorded direction is `INT-MOD-001` → `represents` → `INT-FUN-001`. The model inputs in Chapter 5 keep the phase sequence fixed as arrivals change. E08 points from the proposal to command interface `INT-IF-001`. Both `may_affect` edges carry `inferred_review_candidate` status. The existing commands might already support a different selection strategy. [Chapter 4 walkthrough](https://and-gu.github.io/executable-engineering-lab/learn/v3/04-engineering-knowledge-as-code/#a-change-impact-question-the-graph-can-answer) · [T1 graph](https://github.com/And-Gu/executable-engineering-lab/blob/64931d4/project/v3/case-study/source-graph-v1.json#L103-L192) · [Chapter 5 experiment](https://and-gu.github.io/executable-engineering-lab/learn/v3/05-learning-through-models-and-prototypes/#define-the-experiment-before-interpreting-its-output)

A check for missed dependencies found that the graph lists the revision B adapter without an edge to it. In the separate fictional discrepancy record `INT-DISC-001`, controller revision A expects acknowledgment of an applied indication, while adapter revision B acknowledges message receipt. An engineer using only the graph would miss this documented disagreement. The interface owner still has to assess what adaptive selection would require. [T1 contract comparison](https://github.com/And-Gu/executable-engineering-lab/blob/64931d4/project/v3/case-study/DECISION-CHAIN.md#L50-L68)

## What the external sources establish

- **R03.** Hedberg, Bajaj, and Camelio’s September 19, 2019 manufacturing prototype retrieved manufacturing and quality files for one serialized assembly (§4, Listing 2, line 14). In §5.3 the authors describe building links by hand as laborious and identify automated link creation as an open research question. [NIST accepted manuscript](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=926810)
- **R01.** Giffin et al.’s August 2009 industrial study traced related change requests across 46 subsystems over eight years. Only 48.2% of proposals were implemented in that sensor program. The journal page challenged access. The author abstract distinguishes proposed changes from actual work. [TU Delft abstract](https://research.tudelft.nl/en/publications/change-propagation-analysis-in-complex-technical-systems/)
- **R02 and FAIR.** The June 2018 DoD strategy sets objectives for baseline history and governance (Goal 2, §§2.1–2.2, pp. 8–9). Wilkinson et al.’s March 15, 2016 research-data principles call for persistent identifiers, qualified references, and provenance (Box 2, F1, I3, R1.2). The question of local time savings requires measurement. [DoD strategy](https://www.cto.mil/wp-content/uploads/2023/06/Dig-Eng-Strat-2018.pdf) · [Original FAIR paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC4792175/)

## Editorial recommendation

Keep Chapter 4’s owner question and Chapter 14’s advice to inspect the sources for the current revision. Qualify Chapter 14’s claim that connections reduce reconciliation time. On the next adapter variant, compare time saved locating the applicable command definition with the owner’s time spent checking and updating the link. Keep the manufacturing query as optional reading. [Chapter 14, connected information](https://and-gu.github.io/executable-engineering-lab/learn/v3/14-from-engineering-intent-to-continuous-integration/#connected-information-preserves-the-ability-to-act) · [Chapter 14, “Speed is the performance of the whole system”](https://and-gu.github.io/executable-engineering-lab/learn/v3/14-from-engineering-intent-to-continuous-integration/#speed-is-the-performance-of-the-whole-system)
