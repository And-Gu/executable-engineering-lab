# Independent Full-Course Review — Executable Engineering Lab V3

**Status: PROPOSAL — independent editorial review; not manuscript approval, implementation acceptance, or publication authorization.**  
**Date:** November 16, 2026  
**Assignment:** [Issue #40](https://github.com/And-Gu/executable-engineering-lab/issues/40), reviewing [manuscript PR #39](https://github.com/And-Gu/executable-engineering-lab/pull/39)  
**Reviewed source:** `docs/v3-full-manuscripts-13-20261116`, commit `5779b7defffe07436087ef32b31c319a300f882c`  
**Reviewer:** Separate Codex editorial/curriculum/engineering subagent, `/root/independent_v3_reviewer`. I did not author these manuscripts. I personally read all thirteen current drafts end-to-end and formed the findings below. The coordinating agent supplied the assignment and source snapshot, not editorial findings.  
**Scope:** One review report only. No manuscript, approved source, plan, engineering code, or public-site changes.

**Repository-state update during review:** PR #39 was subsequently closed without merging. The manuscripts were archived on `main` at `c7feb231e871bb3fd066b2b190aa1612d408171a`. I independently compared the Git blob identities: all thirteen chapter texts are identical to the reviewed `5779b7d` revision; only the drafts index differs within that directory. The findings therefore apply to those same texts on main. Review-delivery targeting is a separate coordination decision and does not alter this source pin.

References [C01]–[C13] below resolve to the exact reviewed chapter files. Their repository directory is `project/v3/manuscripts/drafts/`. References to headings use the headings in that revision, not proposed replacements. Source inspection is distinguished from execution and observation throughout.

## 1. Executive assessment

**The course is ready for a substantive owner discussion, but it is not ready for editorial acceptance as a complete learning experience.** It has a coherent thesis, useful distinctions, and a restrained approach to AI. Its central weakness is that it repeatedly explains what good engineering would make inspectable without giving the reader enough actual material to inspect. Complete prose files exist; complete worked teaching examples largely do not.

The strongest learning sequence is Chapters 03–06: connected definitions → bounded model → usable data → next specification. Chapters 01–02 establish a recognizable problem and avoid selecting an AI solution prematurely. Chapters 09–11 correctly resist equating software checks, release readiness, physical qualification, and authority. Those foundations are worth keeping.

The course promises senior engineers and technical leaders a multidisciplinary account of developing a product and its engineering environment. In practice, the recurring work is mostly the development of a teaching simulation and its information infrastructure. Electronics, installation, road users, and maintenance usually appear as things the simulation does not establish. That distinction is accurate, but repeated exclusions do not provide the promised cross-discipline engineering experience. The jump from model work in [C08], “Improve the delivery method as well,” to an assumed deployed product in [C09]'s opening exposes the gap.

### The three largest opportunities

1. **Replace hypothetical inspection with a small, continuous worked case.** Give the reader a few persistent source objects, one actual illustrative model trace or explicitly hand-worked trace, a flawed data comparison, a bounded specification, a reviewable change, and a claim/evidence decision. Preserve the fictional status, but make the reasoning concrete. Chapters 03, 04, 05, 06, 07, 10, and 13 currently depend on material that is described rather than supplied.
2. **Teach the passage from model to integrated product and use.** Add a short integration chapter and place evidence and authority before the detailed release-cadence chapter. Show one physical interface disagreement, the integration capability it demands, an operator or maintainer need, and a conditional handover. This is an educational expansion, not a proposal to build a real traffic controller.
3. **Trade repeated principles for reader decisions.** The distinctions between source and view, simulation and physical evidence, and proposal and approval are important. Repeating their definitions across Chapters 07–13 leaves less room for a difficult choice. Give each recurrence a new consequence: a stale fixture in Ch07, an inseparable interface change in Ch08, incompatible evidence in Ch10, a disputed release decision in Ch11, and an upstream shared-asset change in Ch12.

The correct response is substantive development, followed by language editing. A smoother version of the existing generalities would still leave the course under-demonstrated.

## 2. Proposed chapter structure

The approved thirteen-chapter map remains the active baseline. This section recommends a different structure on educational merit and requires an owner decision before adoption. Earlier instructions in planning documents to retain thirteen chapters do not constrain this review's proposals; the assignment expressly permits alternatives.

### Recommendation: fourteen chapters, including a product-integration bridge

Keep the existing conceptual distinctions, add **From Models to an Integrated Product**, and move current Ch09 after current Ch10–11. Readers would first understand what has to be integrated, what evidence supports readiness, and who can decide; they could then evaluate the 24-hour release objective. Introduce evidence planning and risk briefly earlier as needed. The reading order does not imply that verification, validation, or risk work begins late in a real project.

| Proposed position | Current source | Proposed title / treatment | Reader benefit |
|---:|---|---|---|
| 01 | Ch01 | The New Engineering Paradigm | Retain the two-system premise; reduce the manifesto tone. |
| 02 | Ch02 | Planning Under Uncertainty | Retain the selection of the next investigation. |
| 03 | Ch03 | Engineering Knowledge as Code | Retain source/view semantics and the mandatory typed graph. |
| 04 | Ch04 | Learning Through Models and Prototypes | Retain the bounded model experiment; supply its trace. |
| 05 | Ch05 | Engineering Data: From Measurements to Decisions | Retain the distinct work of judging comparability. |
| 06 | Ch06 | Specifying the Next Engineering Increment | Make the positive practice clearer than the current “Without Waterfall” framing. |
| 07 | Ch07 | Directing AI Engineering Agents | Retain task, context, tools, actions, and review. |
| 08 | Ch08 | Engineering in Small, Reviewable Increments | Retain scope and architecture; demonstrate a useful vertical slice. |
| 09 | **New** | **From Models to an Integrated Product** | Supply the missing physical/interface/operational bridge. |
| 10 | Ch10 | Verification, Validation and Engineering Evidence | Evaluate the now-visible product and its intended use. |
| 11 | Ch11 | Governance and Engineering Authority | Resolve evidence gaps and authority for the proposed change. |
| 12 | Ch09 | Continuously Integrated Engineering | Design and operate release capability using established eligibility conditions. |
| 13 | Ch12 | Managing Engineering Knowledge at Scale | Extend one product's knowledge to variants and shared assets. |
| 14 | Ch13 | Choosing the Next Engineering Capability | Turn synthesis into a capstone decision; explain “AI-native” in the text if retained as a term. |

Four parts can remain: **Frame the work** (01–02), **Build and test knowledge** (03–06), **Develop an integrated product** (07–09), and **Establish trust and sustain change** (10–14). These names emphasize reader actions. They also avoid placing ordinary integration practices under a heading that implies they depend on AI agents.

**The new chapter would contain one continuous fictional integration problem:** the controller-side definition of a signal command and the supplier-side interface disagree about its meaning or revision. Show the system boundary, the interface contract, the integration sequence, the needed bench or emulator, the discrepancy record, and the implication for installation and maintenance. Include a small operational-use story: who notices a failed update, what information the operator needs, and what remains necessary before deployment. Supply no real roadside settings or unverified hardware claims. The chapter ends with a product configuration and open evidence questions, not an invented qualified installation.

This addition is justified by the course's whole-system promise, not by a desire for more chapters. NASA's product-realization guidance explicitly treats integration, enabling equipment, interfaces, and transition as work to be designed. That supports the relevance of the missing material; it does not prescribe NASA's process for this fictional city project. [NASA, Product Realization](https://www.nasa.gov/reference/5-0-product-realization/)

### Alternatives considered

| Option | Educational merit | Main cost / weakness | Judgment |
|---|---|---|---|
| Keep thirteen and the current order | Few navigation changes; conceptual sequence is recognizable | The deployed baseline still arrives before its creation or readiness is understood | Not recommended without a major bridge inside Ch08–10. |
| Keep thirteen; move Ch10–11 before Ch09; add integration to Ch08/10 | Makes release eligibility intelligible and avoids an extra chapter | Overloads Ch08's scope lesson and Ch10's evidence lesson | Credible fallback if the new material is concise. |
| **Fourteen as above** | Each major new reader ability has room; fills the product gap | Requires new prose and an owner-approved outline | **Preferred.** |
| Twelve by merging Ch02+06 and Ch10+11, then adding integration | Shorter navigation | Collapses planning versus specification and evidence versus authority—the course's useful distinctions | Reject for this audience. |
| Thirteen by replacing the recap Ch13 with integration | Removes repetition and keeps total constant | Loses a place to practice choosing the next engineering investment | Viable only if a brief decision capstone closes the whole course elsewhere. |

I do not recommend a separate presentation chapter. Technical graph/model/data interpretation belongs here; narrative decks, scrollytelling, and presentation authoring belong in Document-as-Code Lab. A direct value-led link to its bonus chapter is enough.

## 3. Whole-course continuity and gap map

### What the reader should carry forward

The following map uses current numbering. “Needed handoff” is proposed teaching material, not a claim that a corresponding fixture or result exists.

| Ch | New ability | Needed handoff in the intersection case | Current continuity issue |
|---:|---|---|---|
| 01 | Distinguish improving a product from improving how it is engineered | One named uncertainty and its two consequences | Three possible findings are introduced; none becomes a durable case event. |
| 02 | Choose exploration, a defined deliverable, or a commitment | A selected question, rationale, and explicit stop/replan condition | The four decision questions are useful, but the final selection is tentative and unevaluated. |
| 03 | Interpret an object, typed relation, and derived view | A tiny source-backed relationship set and proposed-change overlay | No actual node/edge record or source path is provided in the chapter. |
| 04 | Match a model to a question and interpret a controlled comparison | One state trace and comparable arrival experiments | The experiment remains described; its service rule and output definitions remain open. |
| 05 | Decide whether two results are comparable | Original rows, an unresolved unit, a corrected/withheld comparison | The opening's mismatch is never resolved in inspectable data. |
| 06 | Specify the next useful increment without closing every unknown | A revision-bound specification with testable acceptance conditions | The specimen lists categories but leaves key criteria generic. |
| 07 | Delegate and audit a bounded task | Context selection, allowed action, observed or illustrative output, review question | The task instruction exists, but the source map and handover specimen do not. |
| 08 | Choose a coherent review boundary | A claim, connected changes, independent check, and remaining dependency | Layer-by-layer increments risk teaching fragmentation rather than a useful outcome. |
| 09 | Design and operate a repeatable release path | An identified change class and configuration with known gates | A deployed baseline is assumed before integration or transition has been taught. |
| 10 | Match claims to relevant evidence | A claim/evidence record with one supported and one unsupported conclusion | Good distinctions, but no completed example record to evaluate. |
| 11 | Assign authority and proportionate controls | A concrete risk, control, evidence gap, decision owner, and outcome | An assurance argument is defined but not worked through. |
| 12 | Reuse methods while reassessing applicability | A two-variant comparison and a shared-asset update decision | Variants and stewardship are described without a concrete mismatch. |
| 13 | Choose an engineering-environment investment | An incomplete decision package and a justified next action | Mostly recaps previous principles; the reader does not have to resolve a tradeoff. |

**Proposed continuity discipline:** Use the illustrative IDs already proposed in `project/v3/REFERENCE-INTERSECTION.md`, “Proposed vocabulary and durable identity,” after their semantics are approved. The reader need not memorize them. Small captions can carry identity and revision while the prose uses meaningful names. Retain one provisional fixed-time decision, one arrival comparison, and one later adaptive proposal. If the narrative advances in time or changes its assumed maturity, say so.

### Overlaps worth reducing

- **Ch02/Ch06:** Keep selection of the next decision in Ch02. In Ch06, show exactly what becomes controlled and how the specification changes after contrary evidence. Do not repeat the entire exploration-versus-delivery explanation.
- **Ch03/Ch12:** Teach identity, revision, source authority, and a simple configuration in Ch03–04. Ch12 should add federation, compatibility, asset ownership, deprecation, and consumer notification. “Stable identity is more useful than matching filenames” is too introductory so late in the course.
- **Ch04/Ch05:** Ch04 defines and runs the experiment; Ch05 discovers a comparability defect and preserves the correction. The same data can support both without both chapters reteaching provenance from scratch.
- **Ch07/Ch08:** Ch07 owns delegation and evidence of actions. Ch08 owns the review boundary, coupled changes, and integration consequences. Repeated warnings about large agent output should become a specific diff-review problem.
- **Ch09/Ch10/Ch11:** Release flow, evidence applicability, and decision authority are distinct. Give each one a different record and decision. Repeating that a green check is not approval does not make all three concrete.
- **Ch01/Ch13:** Keep the thesis in Ch01. Use it in Ch13 to choose between competing investments, rather than restating the full thesis and vocabulary.

### Important gaps

1. **Operational purpose has no stable decision criterion.** “Better traffic flow” remains undefined. The opening centers drivers; pedestrians and cyclists later recur mainly as exclusions. Choose illustrative stakeholder criteria early, including whose wait matters and what tradeoff the study deliberately leaves unresolved. Do not invent operationally recommended thresholds. See [C01], opening; [C02], “Plan around an outcome, not an imagined solution”; [C05], “Visualization is an investigation method.”
2. **Architecture means two different things without enough demonstration.** [C03] lists product views; [C08], “Architecture comes before task division,” actually teaches architecture of the model/tool implementation. Both are valuable. The missing product-level allocation and interface conflict should be made visible, not covered by an additional list of diagram types.
3. **Non-software disciplines do not yet meet the editorial ambition.** `project/EDITORIAL-GUIDE.md`, “Multidisciplinary audit,” asks for substantive non-software scenarios and a decision involving conflicting constraints. The manuscripts mention hardware, installation, procurement, and physical testing, but do not let an electronics, mechanical, or integration engineer evaluate such a conflict. The proposed integration chapter addresses this; a named list alone does not.
4. **The experiment never changes a decision on the page.** Ch04–06 move from imagined runs to a decision to improve timing, without a displayed observation and reasoning bridge. A negative result or unresolved comparison would be useful. Success is not required; an actual reasoning sequence is.
5. **Operational learning is acknowledged but underdeveloped.** [C10], “Feedback after delivery,” and [C13], “A later change tests whether the knowledge is connected,” need one observed-condition-to-investigation example. Label it fictional if no field evidence exists.
6. **The main path lacks supporting source invitations.** None of the thirteen drafts provides a Markdown link to a supporting source. Ch06 names tools, Ch03 names SysML, and many chapters depend on engineering concepts, but readers cannot inspect their basis or choose deeper reading directly from the chapter. This is a publication-preparation gap, not an instruction to copy the research archive into the site.

## 4. Thirteen-chapter review overview

Priorities describe needed editorial work: **P0** blocks a coherent, supportable full-course publication; **P1** materially improves learning; **P2** improves polish or navigation. They do not mean the review report itself should be withheld.

| Ch | Present strength | Main finding | Priority and concrete change |
|---:|---|---|---|
| 01 | Recognizable opening; two systems; clear AI roles | Scope and stakeholder needs remain abstract after the opening | **P1:** Follow one finding through a named product choice and method improvement; draw the system boundary. |
| 02 | Separates investigations, deliverables, and commitments | No worked prioritization decision or stopping rule | **P1:** Compare three candidates and explain one selection under a stated constraint. |
| 03 | Sound source/view/thread/graph distinctions | The required graph has no worked source relationship to teach from | **P0:** Define a tiny illustrative record/edge set and one correct and one unsupported inference. |
| 04 | Appropriate fidelity and controlled-comparison framing | No executable or hand-worked trace; experiment semantics incomplete | **P0:** Supply a bounded experiment contract and trace before numerical conclusions. |
| 05 | Strong opening data-quality tension | No actual rows, correction, or changed conclusion | **P0:** Carry Ch04 outputs through one inspectable curation decision. |
| 06 | Useful scope and open-question specimen | “Acceptance conditions” mostly describe process, not discriminating outcomes | **P1:** Specify one invalid input, expected behavior, evidence, and decision rule. |
| 07 | Concrete task instruction and authority distinction | Context is discussed but not assembled; no inspectable handover | **P1:** Show a source-selection map and bounded task replay; never invent a real run. |
| 08 | Strong mixed-change opening | Example increments separate layers more than outcomes | **P1:** Contrast a thin vertical slice with preparatory layer work and one inseparable interface change. |
| 09 | Builds and operates the factory; bounds the 24-hour target | Deployed baseline and release eligibility are assumed | **P0:** Establish integration/readiness first and test a concrete eligibility decision. |
| 10 | Precise narrow claim; verification versus validation | Readers cannot evaluate an evidence record themselves | **P1:** Supply a small claim/configuration/method/result/applicability table. |
| 11 | Product and engineering-environment integrity both visible | Risk, control, authority, and assurance remain largely lists | **P1:** Work through one remote-update or detector-fault decision. |
| 12 | Reuses engineering methods as well as product artifacts | “At scale” lacks stewardship and compatibility consequences | **P1:** Show two variants and an upstream asset revision that requires consumer action. |
| 13 | Connects prompts to specialized visual review | Synthesis repeats rather than tests the reader's judgment | **P1:** End with a constrained investment decision and reasoned alternatives. |

## 5. Individual chapter analyses

### 01 — The New Engineering Paradigm

**Source:** [C01], especially “Two systems develop together,” “Follow a finding into the next decision,” and “Faster feedback is not one common clock.”

**Reader question and unique gain:** How does changing the engineering environment change what a team can learn and build? The chapter establishes that idea clearly. It also earns its early AI explanation by distinguishing assistance, agent work, fixed automation, and possible AI in the product.

**Opening and audience:** The city's uncertain request is an effective entry for systems engineers and managers. However, “Drivers complain” supplies the only concrete stakeholder voice. Give the reader a second relevant need, such as the maintainer's ability to diagnose a failed indication, before narrowing the initial study. This would show whole-system thinking without expanding the simulation.

**Prose and progression:** The three conceptual findings are useful but remain parallel possibilities. Choose one to carry forward; the others can be short branches. “The interesting result is not more engineering activity” and the later paragraph about generated code make closely related points. One concrete consequence would carry both more efficiently. The subtitle's broad claim is acceptable as framing, but needs the example to do the evidentiary work.

**Intersection and evidence:** The chapter honestly says the findings are not field measurements. Its product definition includes road users, while the reference contract's candidate system distinguishes a controller and external users. That need not be an error—system boundaries can differ—but the reader needs the selected system-of-interest boundary. Otherwise the first architectural lesson is ambiguous.

**Visual and sources:** A static two-loop figure is sufficient. Put the chosen finding on both loops and name the changed artifact or capability. Keep conceptual status visible. A concise systems-engineering reference and the agent mechanism reference should be adjacent to their benefit, as in the existing pilot's “Inspect an example or go deeper.”

**Concrete priority:** **P1:** Replace one generalized benefit paragraph with a worked finding: an omitted movement changes the product question and requires a new conflict-definition review. Show what the team chooses next, without asserting a measured improvement. **P2:** Remove the ambiguous first/second-machine numbering and say “product” and “engineering environment” directly.

### 02 — Planning Under Uncertainty

**Source:** [C02], “Investigations and delivery commitments are different,” “Two roadmaps, one set of decisions,” and “What should we investigate first?”

**Reader question and unique gain:** Which uncertainty deserves investigation, and which work is mature enough to commit to? This is distinct from Ch06's task of specifying the selected increment. Retain both chapters.

**Opening and audience:** The choice among timing, sensing, and physical intervention is relevant to engineering leads. The immediate jump into vision, theme, initiative, roadmap, and backlog risks turning that decision into planning vocabulary. Show the choice first; introduce only the hierarchy needed to explain it.

**Prose and progression:** “The questions themselves become planning information” is true but weak as a conclusion. The chapter becomes more useful when the next paragraph identifies how one answer changes a commitment. Several passages repeat that the engineering environment should not become a platform without a product purpose. Keep one and use the saved space for a resource or dependency constraint.

**Intersection and evidence:** The three activities are not equivalent alternatives: a common vocabulary may enable the model investigation, while detector procurement is a commitment. That is a good teaching opportunity. Show their dependency rather than making them look like three interchangeable backlog items. The selected fixed-time reference is a provisional learning baseline, not a city decision.

**Visual and sources:** Use a static decision table: question, uncertainty, dependency, smallest useful result, stop/replan trigger, and decision owner. A clickable board adds little unless the selection exposes a non-obvious consequence. No fabricated priority score or cost estimate is needed.

**Concrete priority:** **P1:** Make one explicit choice under a stated fictional constraint—for example, the team can conduct only one investigation before the next concept review. Explain why the conflict definition and arrival comparison precede a detector commitment. Include what result would cause the team to stop or change direction. This would satisfy the planning outcome without importing Ch06's specification template.

### 03 — Engineering Knowledge as Code

**Source:** [C03], “A document is not the same thing as an information model,” “One definition, different engineering views,” and “Explore a proposed change.”

**Reader question and unique gain:** What does a recorded relationship let us conclude about a proposed change? The distinction between an information model, a view, a digital thread, and a knowledge graph is well framed. The warning that a diagram resembling SysML is not thereby a valid model is worth retaining.

**Opening and audience:** The adaptive proposal creates a credible need for change reasoning. It arrives before a worked fixed-time model, so keep it explicitly counterfactual: this is a proposal used to inspect information needs, not a chosen product direction.

**Prose and progression:** The chapter is dense with object types and definitions but supplies no actual record. The phrase “a relation to a controller component” omits the very semantics the chapter says matter. Name the relation, direction, source assertion, and status in a small specimen. Introduce revision/configuration here so later chapters do not depend on an undefined concept until Ch12.

**Intersection and evidence:** Use a few candidate reference IDs rather than a growing inventory. For example, a recorded `constrains` relation and a proposed detector `input-to` relation could make different assertions. Those examples need an approved teaching vocabulary; this report does not establish new canonical relation types. A `test evaluates property` edge identifies purpose, while a recorded test result supports a scoped claim. Keep them separate.

**Visual and sources:** **Preserve the mandatory interactive typed graph.** Start with a readable static path, predict which item needs review, inspect the actual edge, then explain why one farther item is only a candidate. Selection, filtering, source details, reset, and a semantic table need a shared fixture. A generic network image would not satisfy the outcome. The current draft describes the interaction but cannot yet teach the full task without its records.

**Concrete priority:** **P0:** Specify the minimal source/relationship fixture and include a worked inference in the prose. **P1:** Add an unavailable or stale source case; absence of a recorded link must not be taught as proof of no impact. Link the OMG specification by reader benefit, with any future formal example checked separately.

### 04 — Learning Through Models and Prototypes

**Source:** [C04], “A small executable behavior model,” “Add the environment: vehicles do not arrive on command,” “Make the comparison interpretable,” and “Fidelity is a decision, not a badge.”

**Reader question and unique gain:** Which model can answer this question, and what does its result support? Separating state-transition validity from queue behavior is the chapter's strongest move. The fidelity discussion is suitable for experienced engineers and does not require programming.

**Opening and audience:** A model is a reasonable early investigation, but “physical equipment” as the costly alternative is too broad. A paper prototype, interface mock-up, or modest bench experiment may be the cheapest way to answer a different question. Tie the cost judgment specifically to the queue comparison rather than ranking digital methods above physical methods generally.

**Prose and progression:** The text promises a prediction/run/inspection loop without supplying even a short event trace. Readers cannot yet check a queue update, state transition, or waiting calculation. The opening of Ch05 then narrates completed simulations. That is a narrative jump, even though it does not falsely claim a real deployed model.

**Intersection and technical gap:** Define the initial state and queues, event ordering at boundaries, service rule during each phase, simulation horizon, arrival construction, and metric denominators. For the stochastic comparison, distinguish equal expected demand from equal realized vehicle count over a finite run. Report counts as well as rates. A completed-vehicle waiting average can hide vehicles still queued at the end; explicitly define their treatment. These are requirements for a transparent teaching calculation, not a request for traffic-engineering realism.

**Visual:** One combined phase/queue experiment is enough. The fixed-time sequence should remain fixed when only arrivals change; queues change. Do not inherit the visualization guide's potentially misleading question, “How does the signal sequence respond to different arrival patterns,” as if the baseline were adaptive. Display both timelines so the reader can discover the distinction. Provide a short static event table and the same outputs without animation.

**Concrete priority:** **P0:** Approve the bounded experiment contract and supply one traceable worked comparison. Until execution exists, label it a hand-worked illustrative trace, not a captured run. **P1:** Add a result that changes the next experiment rather than merely recommending more fidelity. Keep multiple-seed exploration as optional depth after the deterministic case.

### 05 — Engineering Data: From Measurements to Decisions

**Source:** [C05], opening, “Quality begins before visualization,” “Annotation adds meaning,” and “Visualization is an investigation method.”

**Reader question and unique gain:** Is this comparison fit for the decision? The missing-unit and configuration-mismatch opening is one of the best tensions in the course. Original, curated, and derived data are usefully separated.

**Opening and audience:** The problem is immediately recognizable across engineering disciplines. The chapter should stay on it longer. It moves into categories and checklists before showing the two files or deciding whether the claimed better average survives inspection.

**Prose and progression:** “Data gain value” and “The data requirement therefore affects the engineering environment” explain benefits already established elsewhere. Replace some of this with the actual investigation. The cabinet-power sentence introduces a disconnected extra example; either integrate a genuine cross-discipline comparison or remove it from this chapter.

**Intersection and evidence:** Show a very small set of rows with run identity, model/configuration, unit, event meaning, and status. Preserve the unknown unit; do not let an automatic conversion repair a value whose meaning is unknown. A documented source can resolve a unit, while a configuration mismatch may require a new run. Those are different actions. Any numbers must come from a declared illustrative fixture or retained model result, not be presented as measured traffic.

**Visual and technical gap:** A linked chart/table is justified if selecting a scenario reveals why an average changes or why comparison is withheld. Show the population and observation window for every summary. The tail-of-waits discussion is useful, but cannot be evaluated without those definitions. The product-AI paragraph is proportionate; a small note on independent evaluation data and relevant operating conditions is enough here.

**Concrete priority:** **P0:** Resolve the opening case using actual illustrative rows and an auditable curation decision. Carry exactly those rows into the figure and explain the resulting next decision. **P1:** Link a source about provenance/reuse only after verifying it; the archived FAIR quotation is not ready-made evidence.

### 06 — Spec-Driven Development Without Waterfall

**Source:** [C06], “What belongs in the next increment?”, “Prompts direct work; specifications preserve knowledge,” and “When a specification changes.”

**Reader question and unique gain:** What must become explicit now so another person can act and evaluate the outcome? The compact purpose/scope/inputs/constraints/acceptance/open-questions specimen is a useful foundation.

**Opening and audience:** The next investigation is understandable, but “the team decides to improve” follows no displayed Ch05 conclusion. A data-quality problem might justify repairing comparability before changing timing. Let the previous chapter's actual result determine the selected work.

**Prose and repetition:** The two-extremes opening and explanation of waterfall make a familiar argument. A concrete before/after specification would teach more. The “Two feedback loops” section overlaps Ch02; retain the loop diagram or brief explanation and spend the prose on how an unexpected result changes one controlled definition.

**Intersection and technical gap:** The example's acceptance conditions—reproducibility, identifiable outputs, checked properties, inspectable differences—are mainly experiment-quality criteria. Those may be the right criteria, but distinguish them from a controller-behavior criterion and from the rule for choosing the next investigation. Do not require a positive performance result for a successful experiment. Specify the no-conflict property and invalid-input behavior concretely enough to distinguish correct from incorrect output.

**Visual and sources:** A static side-by-side specification revision, including one deliberately unresolved question, is sufficient. The chapter names OpenSpec and GitHub Spec Kit without links or a demonstrated benefit. Their official project materials support presenting them as workflow examples, not general engineering standards. Current Spec Kit documentation offers more than one process, so avoid importing a fixed universal sequence from the older research note.

**Concrete priority:** **P1:** Create one worked increment contract with a source revision, an explicit negative case, acceptance evidence, and a named decision that remains open. Show a failed comparison causing a justified revision. Consider the title “Specifying the Next Engineering Increment” to emphasize the reader's new ability.

### 07 — Directing AI Engineering Agents

**Source:** [C07], “Begin with a task contract,” “Context is an engineering capability,” and “Follow the work, not the narration.”

**Reader question and unique gain:** How can an engineer delegate a bounded investigation and evaluate what actually happened? The quoted task instruction and distinction between readable information and permitted actions are useful. Keep the separation of engineering agents from hypothetical product AI.

**Opening and audience:** The wrong-model-revision fixture is promising because it gives the agent a reason to adapt. Follow that example instead of returning to general agent responsibilities. It would show the mechanism more clearly than three abstract definitions alone.

**Prose and repetition:** Assistance, automation, and agency were introduced in Ch01. Here, a brief comparison is enough; the new content should be task execution and audit. The paragraph telling authors not to create a fictitious transcript belongs in editorial metadata. Reader-facing prose should say what kind of demonstration they are seeing.

**Context and source gap:** Unlike Document-as-Code's actual `AGENTS.md` walkthrough, this chapter supplies no concrete context map. Show where the applicable requirement, architecture/source map, terminology, decision rationale, model configuration, and permitted checks live. Demonstrate selecting current authoritative material while rejecting a stale fixture. Instructions do not create access or enforce permissions; the configured tool boundary is a separate part of the example.

**Visual and evidence:** Use an annotated static task replay: assignment → selected source → tool action → returned result → next action → handover. It can be explicitly illustrative. A real run is valuable only if retained and accurately attributed; an invented transcript is unacceptable. The older tutorial success criterion for an authentic run remains unfulfilled by these manuscripts alone and should remain visible in publication planning.

**Concrete priority:** **P1:** Supply the source-selection map and one reviewable handover, including an unresolved conflict or stopped action. State a bounded completion condition and resource limit for the demonstration. Keep implementation protocols such as MCP optional; do not make an acronym survey replace the context-selection lesson.

### 08 — Engineering in Small, Reviewable Increments

**Source:** [C08], “Bound an increment by what can be evaluated,” “Architecture comes before task division,” and “Cross-discipline increments are not always synchronized.”

**Reader question and unique gain:** Which related changes belong together so that one engineering claim can be evaluated? The opening mixed PR is specific and credible. The sentence about one meaningful claim is stronger than any arbitrary line-count rule.

**Audience and progression:** The chapter shifts quickly from systems work to repository modules and UI layers. Explain a pull request and diff in one sentence for non-software readers, then connect them to familiar controlled-change review. Do not require Git literacy for the outcome.

**Prose and architectural gap:** The example splits input schema, property check, and display into separate increments. Those can be legitimate preparation, but they are horizontal layers; none necessarily demonstrates an end-to-end capability. This sits uneasily with the workflow brief's thin vertical slices. Distinguish preparatory infrastructure changes from a useful feature slice rather than presenting one decomposition as the answer.

**Intersection and evidence:** Show an increment such as rejecting one invalid timing configuration all the way from source validation to a visible diagnostic, with a check that protects the agreed behavior. Contrast it with a command-interface revision that must include dependent electronics review. Those are proposed teaching examples, not executed changes. A pure model is an appropriate separation of concerns; source validation and display must not maintain competing rules.

**Visual:** A static change package with changed surfaces, claim, evidence, and dependency is enough. Use an illustrative diff only if every line serves the review decision. Three selectable cards labeled schema/model/UI would reinforce the layer-splitting problem.

**Concrete priority:** **P1:** Rewrite the increment comparison around one thin outcome and one inseparable interface change. Distinguish shared completion rules from change-specific acceptance criteria within the “Definition of Done” discussion. Move physical integration from a caution into a concrete dependency with a responsible owner.

### 09 — Continuously Integrated Engineering

**Source:** [C09], opening, “Build the factory—and operate it,” “Trace an eligible change,” and “CI, delivery and deployment are distinct.”

**Reader question and unique gain:** What must the team build and operate to move a suitable change predictably from request to releasable configuration? The distinction between factory construction and operation is clear. The 24-hour target is properly labeled hypothetical and measured from a defined start to a defined finish.

**Opening and continuity:** The deployed baseline appears abruptly. Earlier work established a teaching model, not product integration, operational transition, or a fielded configuration. “Imagine” makes the scenario hypothetical, but does not supply the missing learning. Introduce the maturity change and its prerequisites, or use the proposed reordered structure.

**Technical and evidence gap:** “A narrow correction to an already-defined signal-timing parameter” is not self-evidently an eligible rapid change. The text says to assume eligibility, which is honest, but removes the most useful decision. A small timing edit can affect represented behavior. Show an accepted classification argument with exclusions, or choose a less ambiguous change such as an isolated diagnostic-report correction and still state its dependencies. Do not imply that any class is safe merely because the change is software.

**Prose:** The six steps are a useful orientation. They need one blocked path, not another full successful-flow recital. Let a mismatched test fixture or missing interface evidence stop readiness and explain what factory improvement would prevent recurrence. This differentiates the chapter from Ch10's evidence interpretation.

**Visual and sources:** A static two-track map with a blocked request, its product dependency, and the factory repair can explain the concept. DORA's lead time runs from version-control commit to production deployment; retain the manuscript's distinction from its request-to-releasable target. Do not cite the hypothetical 24 hours as a research result.

**Concrete priority:** **P0:** Earn the baseline and eligibility assumptions before discussing cadence. **P1:** Demonstrate one factory operating failure and improvement, including release versus deployment and recovery readiness. Avoid suggesting that physical integration is addressed merely by a separate clock.

### 10 — Verification, Validation and Engineering Evidence

**Source:** [C10], “Start with a claim,” “Verification and validation answer different questions,” “Test success is not the same as requirement success,” and “Evidence follows the configuration.”

**Reader question and unique gain:** Which claim does this result support for this configuration and intended use? The scoped no-simultaneous-green claim is appropriately narrow. The chapter makes several distinctions with unusual care and should remain a separate chapter from governance.

**Opening and audience:** Asking whether a passing model makes the intersection ready is understandable, but readers have already heard the negative answer many times. Start with two plausible evidence records and ask which applies after a change. That makes the established principle do new work.

**Prose and repetition:** The deliverables paragraph covers whole-product scope, but as an inventory. Select one interface definition, one integration observation, and one operator-use question. Their relationship would teach more than the list alone. The final two paragraphs repeat the two-system thesis; a concrete unresolved validation question would make a stronger bridge.

**Technical and evidence:** Tests are one verification method; inspection, analysis, and demonstration also matter. NASA's guidance supports this broader account and connects validation to intended use, environment, and users. Do not imply that physical tests alone establish validation or that an entire state space has been proved by a finite trace. The current narrow claim correctly says “checked transitions”; use that same scope in captions and results.

**Visual:** A static claim/configuration/method/criterion/result/applicability table is sufficient. Include a tool execution that succeeds while the engineering criterion fails, plus one `not_run` physical observation. All records must be labeled illustrative until executed and retained. A clickable claim browser is optional, not essential.

**Concrete priority:** **P1:** Supply the evidence table and ask the reader to reject one overbroad conclusion. Explain one reuse decision after an interface change. Include model credibility for the stated purpose without trying to introduce a universal qualification or certification checklist.

### 11 — Governance and Engineering Authority

**Source:** [C11], “Authority belongs to a defined role and scope,” “Design risk into the engineering question,” “From a change to an assurance argument,” and “Secure and maintainable changes.”

**Reader question and unique gain:** Who may accept a change, under which controls, with which unresolved risk? The treatment covers both product integrity and the engineering environment, which is important for this course's thesis.

**Opening and audience:** Adaptive control creates many possible risks at once. Select one decision with accountable roles. A remote update that changes a configuration while recovery behavior is unresolved is enough to make safety, cyber, operations, and authority concrete without claiming a real deployment design.

**Prose and repetition:** The chapter largely tells readers that risk-based controls, decision records, and assurance arguments are useful. The source/proposal/approval distinctions have already been established. Work through an argument that is incomplete, show why the evidence does not close it, and record the resulting deferral or restriction.

**Technical gap:** Availability, diagnosability, maintainability, and safety are listed together as non-functional concerns. A required fault response or recovery behavior can be a concrete behavioral requirement; the classification should not encourage postponing it. Distinguish an organizational policy, its technical enforcement, the evidence collected, and the authority to accept the residual issue. A tool permission can prevent an action but does not make its permitted output correct.

**Visual and sources:** A compact static claim → risk/control → evidence → decision table with role and scope columns is preferable to another graph unless navigation adds a real question. If Gemara is later added, identify it as a particular control-modeling approach; its presence would not establish traffic-system safety or certification. No such standard applicability has been verified here.

**Concrete priority:** **P1:** Replace part of the catalog with one worked decision, including a rejected or deferred change and a review of the engineering toolchain's own trust boundary. Name roles rather than inventing official city authorities. Connect the decision to the release-eligibility lesson.

### 12 — Managing Engineering Knowledge at Scale

**Source:** [C12], “Stable identity is more useful than matching filenames,” “Make reusable engineering capability discoverable,” and “What should be shared across teams?”

**Reader question and unique gain:** What can a second team reuse, and what must it reassess? The distinction between a reusable method and configuration-specific evidence is strong. Retaining engineering-factory assets as reusable assets is a real contribution.

**Opening and audience:** The second intersection remains a variant of the same case, not an unrelated recurring product. That is appropriate. However, “layout, traffic patterns, equipment supplier and operational constraints may differ” creates no actual comparison. Give the variants one shared property and one incompatible interface or operating assumption.

**Prose and progression:** The stable-ID explanation and one-database discussion repeat Ch03. Move the basic configuration definition earlier and use this space for shared-asset ownership, compatibility expectations, change notification, retirement, and a consumer's choice to pin or adopt a new version. That is what makes scale different from merely having another repository.

**Technical and source gap:** A shared requirement name, schema, or agent skill cannot settle applicability. A concrete compatibility record should say which version each variant uses and why a result is retained, rerun, or rejected. The OSLC Primer is a relevant optional source for tool integration, but the chapter should not imply that a vocabulary or stable URL automatically integrates arbitrary specialist systems.

**Visual:** A static variant/asset applicability matrix can answer the central question. One selection interaction is justified only if the set becomes large enough that filtering helps; two variants do not require a new explorer. Source records must distinguish teaching definitions, reusable methods, and claimed results.

**Concrete priority:** **P1:** Show an upstream scenario-format change reaching two teams: one can adopt it after checks, the other cannot because an interface assumption differs. Name the steward, notification, compatibility check, and decision. Keep agent skills as one asset type, not a second generic explanation of agents.

### 13 — The AI-Native Engineering Environment

**Source:** [C13], “The factory has to work in use,” “A later change tests whether the knowledge is connected,” “Prompts and visual engineering are complementary,” and “What would you improve next?”

**Reader question and unique gain:** Which engineering capability should this team improve next, and why? That is a worthwhile final outcome, but the chapter mainly repeats earlier content before reaching it.

**Opening and audience:** Returning to the city's initial request provides closure. The title promises an AI-native environment, while much of the argument correctly concerns capabilities useful without AI. Define what “AI-native” adds—task-accessible context, tool interfaces, observable actions, and controlled delegation—or use a title that emphasizes the investment decision rather than an undefined label.

**Prose and repetition:** The opening says the chapter's purpose is to bring pieces together. The many subsequent sections retell each chapter in sequence. Replace most of that recap with one later request that forces the reader to retrieve earlier ideas. The prompt → analysis → visual inspection passage is the strongest candidate for the capstone's organizing sequence.

**Intersection and evidence:** Operational feedback is imagined after the course has not shown an operational transition. If the new integration material is not added, explicitly frame this as a future scenario with assumed prerequisites. A capstone can end with “do not select a new controller yet”; a successful learning experience need not culminate in a released product.

**Visual and sources:** Reuse earlier source objects and views. Do not create a fresh synthetic dashboard with new undocumented evidence. A static decision packet and a linear source trail can be sufficient; an end-to-end map is optional navigation. Link to Document-as-Code's “Beyond Slides” for readers interested in presenting the story, without importing its authoring-tool directory.

**Concrete priority:** **P1:** Give readers a constrained choice among improving data comparability, adding an interface test capability, and expanding agent delegation. Supply enough case facts to defend one choice and explain when another would be reasonable. This turns the course from a set of principles into an exercise in engineering judgment.

## 6. Language audit: exact excerpts and proposed edits

These are editorial proposals, not changes to the manuscripts. Originals are exact excerpts from the cited heading, with Markdown emphasis preserved where present. The revisions prioritize meaning and reader action, not uniform sentence length. The first task is to strengthen examples; these edits should not substitute for that work.

| # | Source and heading | Original | Suggested US-English rewrite | Reason |
|---:|---|---|---|---|
| 1 | [C01], “Two systems develop together” | “Think about two things being developed at the intersection.” | “The team is developing the signal system and the means to investigate it.” | Replaces vague “things” with the two subjects. |
| 2 | [C01], “Two systems develop together” | “The second machine is not just a software pipeline.” | “The engineering environment includes people and methods as well as software pipelines.” | Removes ambiguous machine numbering and states the intended scope directly. |
| 3 | [C02], “Plan around an outcome, not an imagined solution” | “The questions themselves become planning information.” | “These questions show the team what it must learn before committing to a control strategy.” | Gives the abstract phrase a consequence. |
| 4 | [C03], “Relationships make the digital thread useful” | “A good graph therefore shows relation type, provenance and status—not just a colorful network of boxes.” | “Each link should name the relationship, identify its source, and show whether it is recorded or proposed.” | Gives readers a usable inspection rule; avoids a decorative-image contrast. |
| 5 | [C04], “Make the comparison interpretable” | “Good experiments maintain the relevant conditions.” | “For this comparison, keep the signal timings, departure rule, starting queues, and run duration fixed.” | Names what must stay controlled in this case. The detailed experiment contract must confirm the final list. |
| 6 | [C05], “Annotation adds meaning” | “That join needs reliable identifiers and explicitly defined meanings.” | “Before joining the records, confirm that both identifiers refer to the same configuration and that the fields mean the same thing.” | Makes the data-engineering verb understandable through an action. |
| 7 | [C06], “When a specification changes” | “This is how control and exploration can coexist. Change is expected; the meaning of each change is maintained.” | “Record the result that prompted the revision and explain which definition changed, so the next reviewer can follow the reasoning.” | Replaces a generalized conclusion with the actual practice. |
| 8 | [C07], “Context is an engineering capability” | “The engineering environment must make both distinctions understandable.” | “The task should identify the sources the agent may read and the actions it may take.” | Removes a distant referent and makes the boundary explicit. Technical enforcement still needs separate explanation. |
| 9 | [C08], “Architecture comes before task division” | “Architectural boundaries do not have to be elaborate.” | “A small model may need only a clear input contract, one calculation, and a separate view.” | Makes the scale of the recommendation concrete without prescribing a large platform. |
| 10 | [C09], “Different engineering disciplines, connected evidence” | “A release decision should be conditional on the relevant configuration and claim.” | “Before release, identify the configuration being released and the claims its evidence supports.” | Gives the reviewer a direct action and reduces nominal phrasing. |
| 11 | [C10], “Product maturity is multidimensional” | “Treating all of these states as one percentage of “completion” obscures important differences.” | “A single completion percentage hides which claims are supported and which still need evidence.” | Keeps the technical meaning with less abstraction. |
| 12 | [C12], “What should be shared across teams?” | “An asset without stewardship may be reusable in name but unreliable in practice.” | “Each shared asset needs an owner who reviews changes and tells dependent teams when a revision affects them.” | Replaces an aphorism with the missing scale mechanism. |
| 13 | [C13], “Prompts and visual engineering are complementary” | “The opportunity is to reduce friction between asking a question and reaching relevant, inspectable engineering information—not to replace every engineering GUI with a chat window.” | “Natural-language requests can help engineers reach the relevant sources; specialized views help them inspect the results and decide what to do.” | States complementary roles in plain language and removes the unexplained acronym. |

Other recurring patterns merit a later pass: ending chapters with “That is…” or “That brings us to…” plus a bold title; opening sections with a broad maxim; repeated “useful,” “relevant,” and “appropriate” without criteria; and “the engineering environment” as the actor when an engineer, tool, or reviewer actually acts. Vary transitions by using the unresolved case question. Keep necessary qualifications beside the affected claim rather than removing them indiscriminately.

## 7. Visual and learning-experience plan

### Source and implementation status

The current V3 drafts contain proposed visual directions, not implemented V3 experiences. I inspected source for the legacy `CoverageLab.astro`, its imported pure calculation/evaluator, the completed-lesson registry, and the Chapter 01 monitoring pilot. These support statements about implemented source structure and controls. I did **not** operate the public UI or verify its current deployed revision.

The legacy coverage lab has source-defined controls, temporary comparisons, reset, textual outcomes, and a server-rendered reference fallback. The pilot has static two-system graphics and native disclosure elements. They are reusable design references, not evidence that an intersection graph, state model, or V3 simulation exists. The registry still separates legacy lessons, the V2 data article, and the preview.

### Zero or one essential interaction per current chapter

“Zero” does not mean no visual. It means the central learning gain is fully achievable with an annotated static figure or comparison. Additional optional controls should earn their place. Every proposed V3 item below remains **unimplemented** at the reviewed revision.

| Ch | Essential interaction | Reader decision or inference | Maintained input / status needed | Accessible static path |
|---:|---|---|---|---|
| 01 | **0** | One product finding changes both the design question and the investigation method | Conceptual finding in Ch01; proposed two-system figure | Labeled two-lane diagram plus a three-sentence consequence narrative. |
| 02 | **0** | Choose the next investigation and explain why procurement is premature | Proposed candidate activities, dependencies, and stopping conditions | Decision table with the chosen option and rationale revealed in ordinary prose. |
| 03 | **1 — mandatory typed graph** | Distinguish recorded relation, proposed relation, and possible review candidate | Versioned illustrative nodes/edges with IDs, relation meanings, provenance, revisions, status; not yet supplied as a runtime fixture | Semantic relationship table, selected-object equivalent, and a worked traversal in reading order. |
| 04 | **1 — bounded phase/queue experiment** | Changing arrival pattern changes queue behavior while fixed-time phase timing stays fixed | Approved teaching model contract, common configuration, seed where applicable, trace/output definitions; not implemented | Two short traces, state table, queue chart with data table, and a worked explanation using the same inputs. |
| 05 | **1 — linked comparison inspection** | Identify why an apparently better average cannot yet support selection | Ch04 outputs or labeled fixture; preserved originals, curation decisions, derivation rules | Before/after tables, withheld-comparison reason, and one annotated chart with exact contributing rows. |
| 06 | **0** | Tell what became specified and what remains a question | Proposed revision-bound increment specification and change rationale | Side-by-side versions with annotated acceptance and open-question fields. |
| 07 | **0** | Distinguish instructions, source context, actual action/result, and authority | Explicitly illustrative task replay; authentic trace only if actually recorded later | Linear task/action/result/handover table with source links and uncertainty. |
| 08 | **0** | Decide which changes belong together to evaluate one claim | Illustrative scoped change package and coupled interface dependency | Before/after scope table plus one short annotated diff or record comparison. |
| 09 | **0** | Decide whether a change is eligible and which bottleneck merits factory work | Fictional change class, baseline, gate states, and target interval | Two-track factory map with a blocked path and explicit decision. |
| 10 | **0** | Reject a conclusion that exceeds its evidence | Illustrative claim/configuration/method/result/applicability records | Claim/evidence matrix, including failed criterion and `not_run` observation. |
| 11 | **0** | Separate proposed action, enforced permission, review, and acceptance | Fictional role/scope/control/decision records | Authority matrix beside one short assurance argument and its open gap. |
| 12 | **0** | Reuse a method while declining an inapplicable result | Two proposed variants and shared-asset versions | Asset/applicability matrix with owner, compatibility decision, and reason. |
| 13 | **0** | Choose the next investment from actual case constraints | Reused earlier teaching records; proposed capstone decision packet | Linear source trail and three alternatives with reasoned consequences. |

This is a reduction in proposed interaction count, not a reduction in visual explanation. Ch03 and Ch04 retain their required learning roles. Ch05 earns interaction because a source selection can expose a changing interpretation; the other chapters do not need controls to make their present arguments clear.

### Specific acceptance for Ch03 and Ch04

For **Ch03**, show the question before the graph. Ask the reader to predict which record needs review, select one node, inspect the typed edge and its source, then explain the difference between a direct relationship and a downstream candidate. A reset must remove only the temporary proposal/filter state. Missing provenance and unknown references must be visible. Focus, selection, filters, and details need keyboard equivalents; spatial position and color cannot carry relationship meaning. A no-JavaScript table must preserve the same relation/status semantics.

For **Ch04**, start with a deterministic example the reader can reason through. Show the signal sequence, arrivals, queue updates, and metric definition together. Let a reader change only one comparison factor at first. Distinguish changing a parameter from running the experiment and from retaining evidence. Seed and configuration must survive replay; invalid input should produce an explanation rather than a plausible animation. Pause, run, and reset must have distinct meanings. Reduced motion should preserve all results. A static trace must be generated from the same model or explicitly identified as a hand-worked specification example.

For **all chapters**, keep the central result outside collapsed panels. Use readable labels and units, semantic controls, visible focus, text outcomes, and tables that reflow or scroll accessibly on narrow screens. Verify these behaviors in the eventual rendered pages. Neither this review nor source inspection establishes WCAG conformance or actual learning effectiveness.

### Applying the original Document-as-Code lessons

The original sources—not a drafting summary—support the following editorial choices:

- `CONTRIBUTING.md`, “Editorial Voice,” motivates a concrete situation, cohesive prose, and fewer repeated caveats. Applied here: retain the opening tensions, cut repeated general conclusions, and attach qualifications to their actual outputs.
- The tutorial specification's “Preferred on-page learning loop” gives a prediction/action/result/explanation pattern. Applied here: make the Ch03 inference and Ch04 comparison tasks explicit, while allowing “show me” or a worked example before independent prediction.
- `docs/08-ai-native.md`, “Start with an entry point, not a giant prompt,” uses the real project instruction file and linked knowledge. Applied here: Ch07 needs an actual source map or clearly illustrative equivalent, not merely a claim that context matters.
- `docs/13-explorable-presentations.md`, “A presentation is a view, not a source of truth” and “The four-part contract for each scene,” separate knowledge, narrative, experience, delivery, and evidence. Applied here: state the engineering claim before choosing a visual; derive alternate views from the same definitions.
- `spec/tutorial/working-methods-upgrade/verification/README.md`, “Status discipline,” separates technical checks, hosted verification, physical/manual checks, learning observations, and owner approval. Applied here: future interaction tests and a clean build must not be reported as proof that engineers learned the intended concept.

These are design practices and source-reported distinctions. I did not independently reproduce Document-as-Code's test history or inspect its reader-study results; its verification source explicitly reports that learning evidence was not run.

## 8. Engineering accuracy and source checks

### Findings and required dispositions

| Topic and manuscript location | Assessment | Required editorial treatment |
|---|---|---|
| System boundary — [C01], “Two systems develop together”; reference contract, candidate `INT-SYS-001` | Road users are included in one product description and treated as external users in another. Either boundary can be explained, but they should not silently alternate. | State the system of interest and show external participants/interfaces. Do not change the boundary merely to simplify a diagram. |
| Fixed-time versus adaptive — [C03], “Explore a proposed change”; [C04], “Add the environment” | The prose keeps adaptive control proposed. The visual guide's question about the signal sequence responding to arrivals could undermine that distinction. | State that fixed-time phase timing does not adapt to the arrival selection in the initial model. Vary queue outcomes, not hidden controller logic. |
| Model comparison — [C04], “Make the comparison interpretable” | Seeds and repeated runs are sensibly discussed. Event ordering, service behavior, initial conditions, finite horizon, realized counts, and incomplete waits are unspecified. | Define these before presenting computed outcomes. Equal average demand assumptions alone do not specify a controlled finite-run comparison. No numerical performance conclusion is verified here. |
| Traffic realism — [C04], “Fidelity is a decision, not a badge” | The omissions are explicit and appropriate. The simplified sequence does not establish safe or compliant timings. | Keep all teaching timings illustrative; obtain applicable domain review before any operational claim. The inspected FHWA chapter is explicitly archived and superseded, so it is background, not a current compliance authority. |
| Typed relations — [C03], “Relationships make the digital thread useful” | The graph/thread distinction is usable. A link's meaning and evidence applicability must remain separate. | Define direction, type, assertion source, revision, and status. Do not treat missing links as evidence of independence or a test-purpose edge as a passed result. |
| SysML — [C03], “One definition, different engineering views” | The warning against calling a diagram valid SysML is sound. | Link the official specification. I inspected its specification landing page, not conformance of any model; no formal model is supplied here. |
| Data meaning — [C05], “Start by asking what the data represent” | Inputs, outputs, physical measurements, and derived values are correctly separated. | Show population, units, configuration, and time window in the worked data. Add uncertainty only when its meaning and method are defined; no arbitrary confidence score. |
| Specification workflows — [C06], “Prompts direct work; specifications preserve knowledge” | Tool examples are framed modestly. | Link current official sources and label them project workflow examples. Do not claim that the course's engineering method is standardized by either tool. |
| Agent taxonomy — [C07], “Assistance, automation and agency” | The architectural distinction is consistent with Anthropic's cited practitioner description. Terminology is not universal. | Introduce it as the course's useful distinction. Keep tool output, task status, source authority, and technical permission separate. |
| CI/delivery/deployment — [C09], corresponding heading | Broad distinctions and hypothetical target are appropriate. | Add references; keep accepted-request-to-releasable distinct from DORA's commit-to-production interval. Demonstrate eligibility rather than inferring it from change size. |
| Verification/validation — [C10], corresponding heading | General definitions are defensible. Narrow claims are better than “the system is safe.” | Include analysis, inspection, and demonstration as well as testing; connect validation to intended use and users. Do not transplant spaceflight-specific qualification rules into traffic engineering. |
| Assurance/control modeling — [C11], “From a change to an assurance argument” | Claim/reason/evidence framing is useful but not yet a worked argument. | Add an actual illustrative reasoning link and a gap. Do not equate a structured control record, graph, or automated gate with certification. Specific traffic safety/cyber standard applicability remains unverified. |
| Federation/reuse — [C12], “One source does not mean one universal database” | Correctly avoids a single-database mandate. | Show ownership, compatible versions, and access constraints. OSLC is a possible integration approach, not automatic interoperability. |

### Primary sources actually checked during this review

Retrieved November 16, 2026. These checks support bounded concepts, not product qualification or generalized productivity claims.

| Source | Inspected material and use | Limit |
|---|---|---|
| [NASA, Product Realization](https://www.nasa.gov/reference/5-0-product-realization/) | Product integration inputs, sequencing, interfaces, enabling environment, captured work products; supports the integration gap assessment | Institutional aerospace guidance; not an applicable traffic regulation or a mandatory course lifecycle. |
| [NASA, Product Verification](https://www.nasa.gov/reference/5-3-product-verification/) | Requirements/configuration, test/analysis/inspection/demonstration, discrepancies and records | Does not validate this course's model or authorize a traffic deployment. |
| [NASA, Product Validation](https://www.nasa.gov/reference/5-4-product-validation/) | Intended use/environment, users, operators, maintainers, and support | Used for the conceptual distinction, not domain certification. |
| [OMG, SysML 2.0 specification page](https://www.omg.org/spec/SysML/2.0) | Official normative-language and machine-readable specification entries | Full language specification and model conformance were not audited. |
| [DORA, software delivery performance metrics](https://dora.dev/guides/dora-metrics/) | Commit-to-production change lead time | No claim that this metric measures the manuscript's request-to-releasable target. |
| [DORA, Continuous delivery](https://dora.dev/capabilities/continuous-delivery/) | Delivery capability versus deployment practice | Software delivery guidance; does not determine intersection change eligibility. |
| [Anthropic, Building effective agents](https://www.anthropic.com/research/building-effective-agents) | Workflow versus model-directed action, observed tool feedback, stop conditions | Practitioner/vendor guidance; the page notes that its tooling landscape has changed. Not evidence of engineering productivity or autonomous technical authority. |
| [GitHub Spec Kit documentation](https://github.github.com/spec-kit/) | Specification workflow, separate assessment/bug-fix entry points, extensible processes | Current project documentation; no installation or tool execution performed. |
| [OpenSpec README](https://github.com/Fission-AI/OpenSpec/blob/main/README.md) | Maintained specifications and change artifacts; iterative project positioning | Read through the GitHub connector at its default branch; not pinned as a course baseline. Marketing comparisons were not adopted as facts. |
| [OSLC Primer](https://open-services.net/resources/oslc-primer/) | Introduction and technical-foundation discussion of integration among lifecycle tools | Primer for Core 2.0, not a test of current implementations or all newer specifications. |
| [FHWA, archived Traffic Signal Timing Manual, Ch03](https://ops.fhwa.dot.gov/publications/fhwahop08024/chapter3.htm) | Source identity, scope, operational/safety-analysis topics, and explicit supersession notice | Background orientation only. No current timing rule or legal compliance claim verified. |

The original FAIR paper at `https://www.nature.com/articles/sdata201618` could not be fetched because access redirected through an unavailable authorization endpoint. I therefore do not treat its archived quotation as verified. The background note's 2026 adoption statistics, agent-productivity studies, survey percentages, quotation candidates, AAIF membership claims, and named control-framework claims were not individually authenticated in this review. They are not needed to support the present manuscript's main teaching examples. Verify any such claim at the primary source before using it, including date, population, method, and scope. A chapter does not need an epigraph merely because the research table supplies one.

## 9. Prioritized editorial backlog and review sequence

### P0 — resolve before accepting the full course for publication preparation

| ID | Change | Affected sources | Observable completion condition |
|---|---|---|---|
| P0-1 | Establish the continuing illustrative case and its maturity transitions | [C03] “Explore a proposed change”; [C04]–[C06]; [C09] opening; [C13] later change | A reader can follow one named configuration, experiment, result/unknown, and decision without an unexplained jump to deployment. |
| P0-2 | Define the graph and experiment semantics | [C03]–[C04]; `docs/v3/ENGINEERING-VISUALIZATION.md`, V03/V04 | Source-backed typed relations and a transparent bounded model contract exist as reviewed teaching material; no implied runtime completion. |
| P0-3 | Supply the actual learning evidence within the text | [C04] comparison; [C05] opening investigation | A static worked trace and source-linked data comparison let readers reach the intended conclusion without future interactive code. |
| P0-4 | Resolve the model-to-product integration gap and release-eligibility assumption | [C08] final section; [C09] opening and “Trace an eligible change”; [C10] deliverables | Owner chooses the new chapter or a substantial redistribution; product interface/integration/use and eligibility are taught concretely. |

### P1 — high-value substantive improvements

| ID | Change | Affected sources | Observable completion condition |
|---|---|---|---|
| P1-1 | Make planning a constrained choice with a stopping condition | [C01] findings; [C02] decision section | Reader can explain why one investigation precedes another and what finding would change the plan. |
| P1-2 | Make the increment contract discriminating | [C06] “What belongs in the next increment?” | At least one valid case, invalid case, experiment-quality criterion, and next-decision rule are explicit. |
| P1-3 | Show context selection and auditable agent work | [C07] context and narration sections | Source map and honestly labeled task replay/handover expose revision, permission, action, result, and unresolved issue. |
| P1-4 | Demonstrate a thin outcome and a coupled interface change | [C08] increment and architecture sections | Reader can distinguish vertical value from preparatory layer work and explain when changes must be reviewed together. |
| P1-5 | Work through evidence and authority separately | [C10] claim/configuration sections; [C11] assurance section | One supported claim, one unsupported claim, and one deferred/restricted decision are traceable. |
| P1-6 | Teach stewardship and consumer change | [C12] shared-assets sections | Two variants have explicit reuse/adapt/rerun decisions and a shared-asset owner. |
| P1-7 | Replace recap with a capstone choice | [C13] “What would you improve next?” | Reader receives sufficient facts to defend an investment choice and can inspect alternative reasoning. |
| P1-8 | Add selective primary-source invitations | All drafts; `research/INDEX.md` as editorial routing only | Claims that need support link to checked sources; references explain their reader benefit; no background archive is imported into the public site. |
| P1-9 | Reconcile authentic-run expectations | [C07]; `project/TUTORIAL-SPEC.md`, “Success criteria” | Publication planning explicitly retains an open genuine-run criterion or records an owner-approved change; conceptual replay is never mislabeled execution. |

### P2 — polish after the examples are sound

Apply the language edits; reduce formulaic next-chapter sentences; explain PR/diff/GUI or avoid the acronyms; reconcile part labels between manuscript front matter, the map, and future navigation; replace reader-visible “Suggested…” author notes with actual figures or move them to editorial metadata; add source/status captions and meaningful reference links. Preserve chapter identities and legacy routes if numbering changes; do not infer that a title decision authorizes a site migration.

### Suggested review order

1. Owner reviews the structural alternatives and the new chapter's specific purpose. Accept or reject the fourteen-chapter proposal explicitly.
2. Review the case contract and the Ch03–05 source/model/data specimen together. They determine whether later examples can be concrete and internally consistent.
3. Review Ch01–02 and Ch06 against that actual case outcome, including stakeholders, decision criteria, open questions, and commitments.
4. Review Ch07–08 and the integration bridge: context, authority, useful scope, product interfaces, and operational responsibilities.
5. Review evidence and governance, then the eligible-release path. Test the reasoning with a blocked or rejected case, not only a successful one.
6. Review reuse and the capstone, checking that they add decisions rather than summaries.
7. Perform the language/source pass. Then prepare representative rendered pages and implement the approved interactions in separately scoped work.
8. Check actual browser behavior, accessibility paths, source identity, and publication status. Gather real reader observations if learning effectiveness is to be claimed. Repository checks, editorial review, owner approval, and publication remain separate records.

## 10. What should remain unchanged

- **The single fictional intersection.** It gives the course a coherent problem space without requiring domain-specific installation or a second recurring product. Preserve the existing monitoring pilot and DMS V0 material separately.
- **The two evolving systems.** Keep product needs driving engineering-environment investment and factory operation revealing what needs improvement. Express this through consequences, not a mandatory two-column panel in every chapter.
- **Planning and progressive specification as separate abilities.** Selecting what to learn and defining what to do next are not redundant.
- **Data as its own chapter.** Ch05's comparability problem is distinct from writing a model and from deciding release readiness.
- **The mandatory typed graph in Ch03 and bounded model in Ch04.** Their learning purpose is stronger than generic dashboards, provided their semantics and static paths are supplied.
- **The course's careful evidence language.** Keep simulated versus measured, tool completion versus criterion outcome, test purpose versus result, and proposal versus approval distinct. Shorten repetition, not precision.
- **AI as one capability.** The controller need not contain AI; engineering agents need sources, tools, scope, and observable work. No live AI account or runtime is necessary for the core learning path.
- **Browser-first reading and purposeful visuals.** Keep optional technical depth, no compulsory clone/install/coding, readable dark layout, and the semantic teal/gold distinction where useful. Source inspection did not verify the current rendered typography or contrast.
- **Separation of maintained meaning from presentation.** Reuse source definitions and model outputs across diagrams, charts, tables, and any eventual presentation. Do not copy calculations into visual code.
- **Review-only status.** Preserve the earlier approved source manuscripts and current public site. This report proposes changes; it does not apply or approve them.

## 11. Inspected-source ledger and limitations

### Executable Engineering Lab

All filesystem inspection used the exact archive of commit `5779b7defffe07436087ef32b31c319a300f882c`; remote manuscript reads used the same SHA or its confirmed branch. Repository-relative paths below refer to that revision.

| Material | Scope actually read |
|---|---|
| `project/v3/manuscripts/drafts/01-the-new-engineering-paradigm.md` through `13-the-ai-native-engineering-environment.md` | **All thirteen complete texts, end-to-end, in reading order**, including front matter and suggested visuals. Each is linked below. |
| `project/v3/manuscripts/drafts/INDEX.md`; `project/v3/reviews/INDEPENDENT-REVIEW-BRIEF-2026-11-16.md` | Complete index and assignment. |
| `AGENTS.md`; `.github/agents/v3-curriculum-reviewer.agent.md` | Complete applicable guidance. File search found no nested `AGENTS.md` in the snapshot. |
| `project/CURRICULUM-MAP.md`; `project/SITE-DIRECTION.md`; `project/CHAPTER-STYLE-GUIDE.md`; `project/EDITORIAL-GUIDE.md` | Complete current curriculum, audience/direction, proposed reading design, voice, and multidisciplinary commitments. |
| `project/v3/REFERENCE-INTERSECTION.md`; `project/v3/CHAPTERS-01-04-EDITORIAL-REVIEW.md`; `project/v3/EDITORIAL-ALIGNMENT-2026-11-15.md`; `project/v3/CHAPTER-BRIEFS-05-13-2026-11-15.md` | Complete reference, reconciliation, gap register, and current later-chapter briefs. Read as planning inputs, not independent-review conclusions. |
| `chapters/01-...md` through `chapters/13-...md` | All thirteen brief files. Older V2 examples in later brief files were treated as historical inputs; the current V3 intersection briefs govern the intended case. |
| `project/TUTORIAL-SPEC.md`; `project/ENGINEERING-WORKFLOW.md`; `project/INFORMATION-ARCHITECTURE.md`; `project/DEMONSTRATOR-LEARNING-PLAN.md` | Complete supporting plans, including historical scope and authentic-run expectations. |
| `project/v3/manuscripts/INDEX.md`; all four files in `project/v3/manuscripts/approved/` | Complete preserved prose and status/reuse instructions. No modification or transfer of historical approval. |
| `docs/v3/ENGINEERING-VISUALIZATION.md`; `research/INDEX.md`; `research/v3/2026-11-12-external-research.md` | Complete visual contract and research routing/archive. Candidate quotes and claims remain candidates unless separately checked above. |
| `SITE_SPEC.md`; `DEMONSTRATOR_SPEC.md`; `MILESTONE_01.md` | Complete historical specifications and V0 technical boundary. |
| `site/src/pages/learn/v2/01-new-engineering-paradigm.astro`; `site/src/content/engineering-data.md` | Complete pilot source and V2 data prose; source-level editorial/implementation references only. |
| `site/src/components/CoverageLab.astro`; `models/coverage/coverage.ts`; `models/coverage/evaluate.ts`; `site/src/data/chapters.ts` | Complete selected implementation files, plus path inventory of components, model, schema, and engineering-source directories. Not a full code audit. |
| GitHub issue #40, master issue #32, PR #37, PR #39 | Issue/PR bodies and state metadata read through the GitHub connector. PR #39 was initially open/draft and later closed without merging. A read-only Git tree/diff comparison confirmed all thirteen chapter blobs are identical on main at `c7feb231e871bb3fd066b2b190aa1612d408171a`; the findings remain pinned to `5779b7d`. Archival on main does not establish editorial approval or site publication. |

### Original Document-as-Code Lab sources

All six requested sources were read in full through the GitHub connector at commit **`cc391dfc37498889caa0148b972aa17e2246841e`**:

1. [CONTRIBUTING.md](https://github.com/And-Gu/document-as-code-lab/blob/cc391dfc37498889caa0148b972aa17e2246841e/CONTRIBUTING.md)
2. [Tutorial specification](https://github.com/And-Gu/document-as-code-lab/blob/cc391dfc37498889caa0148b972aa17e2246841e/spec/tutorial/02-DOCUMENT-AS-CODE-LAB-V1-SPECIFICATION.md)
3. [Design decisions](https://github.com/And-Gu/document-as-code-lab/blob/cc391dfc37498889caa0148b972aa17e2246841e/spec/tutorial/04-DESIGN-DECISIONS.md)
4. [Making Information Usable by AI Agents](https://github.com/And-Gu/document-as-code-lab/blob/cc391dfc37498889caa0148b972aa17e2246841e/docs/08-ai-native.md)
5. [Beyond Slides: Presentations as Explorable Knowledge](https://github.com/And-Gu/document-as-code-lab/blob/cc391dfc37498889caa0148b972aa17e2246841e/docs/13-explorable-presentations.md)
6. [Verification and learning evidence](https://github.com/And-Gu/document-as-code-lab/blob/cc391dfc37498889caa0148b972aa17e2246841e/spec/tutorial/working-methods-upgrade/verification/README.md)

These documents contain dated amendments and historical chapter counts. I used their specific editorial and evidence practices, not their changing chapter count as a template for this course. Their reported implementation/test/publication states are source statements, not my reproduced observations.

### Limits of this review

- I reviewed prose, planning sources, selected code, and the specific primary references identified above. I did not execute a V3 graph or intersection simulation; none is supplied as an implemented V3 experience in the reviewed draft package.
- I did not run a real intersection agent investigation, inspect physical traffic equipment, collect field measurements, or verify safety, cybersecurity, legal compliance, or operational suitability. Proposed teaching examples in this report are not evidence of any of those activities.
- I did not render the manuscripts, operate the public sites, test keyboard/screen-reader behavior, measure contrast or performance, or conduct a reader study. Visual recommendations are review proposals, not UI acceptance findings.
- Repository check/build/evidence execution and PR delivery are handled separately by the coordinating agent. Their results are not claimed as this review's evidence and would not prove manuscript quality or reader learning.
- I did not audit all sources in the research archive, every external link, every current standard edition, the full SysML language, or all implementation files. The source table above explicitly limits each checked claim.
- The report's structural and editorial judgments are expert review judgments, not measured learning-effectiveness results. The owner decides which proposals to adopt, then reviews the revised manuscripts and any eventual publication separately.

[C01]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/01-the-new-engineering-paradigm.md
[C02]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/02-planning-under-uncertainty.md
[C03]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/03-engineering-knowledge-as-code.md
[C04]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/04-learning-through-models-and-prototypes.md
[C05]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/05-engineering-data-from-measurements-to-decisions.md
[C06]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/06-spec-driven-development-without-waterfall.md
[C07]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/07-directing-ai-engineering-agents.md
[C08]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/08-engineering-in-small-reviewable-increments.md
[C09]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/09-continuously-integrated-engineering.md
[C10]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/10-verification-validation-and-engineering-evidence.md
[C11]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/11-governance-and-engineering-authority.md
[C12]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/12-managing-engineering-knowledge-at-scale.md
[C13]: https://github.com/And-Gu/executable-engineering-lab/blob/5779b7defffe07436087ef32b31c319a300f882c/project/v3/manuscripts/drafts/13-the-ai-native-engineering-environment.md
