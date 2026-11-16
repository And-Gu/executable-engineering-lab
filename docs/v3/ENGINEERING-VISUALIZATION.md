# Engineering Visualization: From Models to Understanding

**Status:** Proposed V3 supporting reference and implementation-planning material; **not** an approved V3 chapter manuscript, implemented visualization, or published feature.

**Curriculum placement:** Use the **owner-approved 14-chapter V3 map** in [`project/CURRICULUM-MAP.md`](../../project/CURRICULUM-MAP.md) and its [13→14 migration map](../../project/v3/CHAPTER-MIGRATION-13-TO-14-2026-11-16.md). This technical reference informs Ch03 (knowledge graph), Ch04 (model), Ch05 (data), Ch06 (progressive specification), **new Ch09 (*From Models to an Integrated Product*)**, Ch10–12 (evidence, authority and factory operation) and the capstone. This reference is **not** an extra course chapter, implemented visualization or public Astro page. See [master issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32).

**Companion:** The Document-as-Code Lab covers presentation design, audience narratives and guided/explorable delivery in its proposed Chapter 13, *Beyond Slides: Presentations as Explorable Knowledge*. This guide addresses a different question: what must a technical visualization mean and do to support valid engineering reasoning?

## Current chapter mapping of historical visual identifiers

These **visual IDs are source/reference identifiers, not chapter numbers**. The original visual guide used an **alternative chapter sequence**. To avoid destroying existing references, preserve visual IDs but use the **current** approved placements:

| Visual ID | Topic | Current chapter |
|---|---|---|
| V02 | Functional/structural/requirements views, including appropriate SysML v2 representations | **03 — Engineering Knowledge as Code** |
| V03 | **Mandatory interactive typed knowledge graph** and impact exploration | **03 — Engineering Knowledge as Code** |
| V04 | Executable state/model behavior and bounded teaching simulation | **04 — Learning Through Models and Prototypes** |
| V05 | From exploratory concept to progressive engineering definition | **06 — Spec-Driven Development Without Waterfall** |
| V06 | Raw, curated, enriched and derived engineering-data views | **05 — Engineering Data: From Measurements to Decisions** |

The **historical visual IDs remain fixed**; they are NOT chapter numbers. For later visualizations, use the **current 07–14 chapter mapping** below and the [new integration brief](../../project/v3/CHAPTER-09-INTEGRATION-BRIEF-2026-11-16.md), not the earlier thirteen-chapter briefs.

| Current chapter | Proposed teaching view | Source/meaning requirement |
|---|---|---|
| 07 — Directing AI Engineering Agents | Source-context selection + honest task replay | Real/illustrative action status, authorized tools and resulting evidence kept distinct |
| 08 — Engineering in Small, Reviewable Increments | One thin outcome-driven change and one coupled interface change | Revision IDs, dependent engineering owners, scope and review decisions |
| **09 — From Models to an Integrated Product** | **Controller vs adapter interface semantics comparison** and bounded integration/bench plan | Applied-state vs receipt acknowledgment, revision/source, operational consequence; **no executed hardware claim** |
| 10 — Verification, Validation and Engineering Evidence | Claim/configuration/method/result/applicability | Scope of model checks vs actual integration/physical/operational observation |
| 11 — Governance and Engineering Authority | Role/control/evidence/decision argument with deferred change | Distinguish configured permission, governance responsibility and claim support |
| 12 — Continuously Integrated Engineering | Eligible and blocked change in a design/operate factory map | No implied deployed system; hypothetical 24-hour target for qualified change classes |
| 13 — Managing Engineering Knowledge at Scale | Variant/asset compatibility matrix | Reusable method vs configuration-specific product evidence |
| 14 — Choosing the Next Engineering Capability | Reused case records and competing engineering investment choices | A reasoned reader decision instead of a decorative dashboard |

Use [the latest cross-chapter source example](../../project/v3/reviews/WORKED-CASE-REVISION-PACKAGE-2026-11-16.md), explicitly a **hand-worked planning proposal** until independently reviewed; do not present those numbers or interface records as verified observations.


**Presentations split:** Document-as-Code Lab teaches interactive presentations, narrative sequence, HTML decks, dashboards, mind maps and audience communication. Here we teach how to represent **engineering meaning** with appropriate diagrams, simulations, typed relations, source provenance, impact and evidence views. Engineering graphics can be reused in presentations without becoming separate, contradictory engineering definitions.

## A technical picture is an argument about a system

An engineer points to a diagram and says that changing the controller will affect the traffic signals. Which part of the diagram supports that assertion? Is the line an actual requirement relationship, a proposed dependency, a physical connection, or simply an illustrative arrow?

A compelling visualization can make technical relationships understandable. It can also create unwarranted confidence if its notation, source, assumptions or calculation are unclear. The important skill is therefore not learning to draw attractive diagrams; it is **choosing a representation that makes a particular engineering question answerable**.

**Owner decision 2026-11-15:** The [fictional four-way traffic intersection](../../project/v3/REFERENCE-INTERSECTION.md) is the **single recurring V3 reference**. The site is a learning resource about engineering practices, **not** a traffic-control design product or a live engineering IDE. The existing *published* Chapter 01 condition-monitoring preview and Distributed Monitoring System (DMS) V0 demonstration, source IDs, calculations and evidence remain unchanged until a separately approved editorial migration. Do not build a second recurring V3 monitoring demonstration.

## Begin with the engineering question

Before selecting a visualization, write what a reader should be able to investigate or decide.

| Engineering question | Useful technical representation | What it must not imply |
| --- | --- | --- |
| What functions does this system perform? | Functional architecture with named interactions | That functional decomposition is a verified design |
| Which components connect to one another? | Structural/interface diagram | That a logical link proves a physical connection |
| Which requirement may be affected by a change? | Typed knowledge graph and change-impact view | That a graph traversal establishes a verified change impact |
| What state comes next after an event? | State-transition diagram with guards | That an illustrative sequence represents certified controller logic |
| How does behavior change with traffic arrivals? | Bounded executable model, time series and counters | That simulated traffic behavior predicts a real intersection |
| Which option has an acceptable margin? | Linked charts and comparison table | That a numerical result settles every engineering constraint |
| Does placement or clearance matter? | 2D geometry, or 3D when spatial relationships justify it | That visually accurate geometry establishes tolerances or physical feasibility |

One question may require several views. They should reuse controlled definitions, not silently reinvent objects or constraints.

## A connected visual sequence, not isolated graphics

The V3 educational narrative can lead the reader through the same conceptual intersection:

1. **System views (V02):** Introduce the intersection boundary, participants, signal functions, candidate components and requirements. Show the relationship between function and structure without claiming the same diagram proves both.
2. **Knowledge graph (V03):** Let the reader select a requirement, interface or decision, follow typed relationships, and inspect the recorded source and status. Demonstrate a *proposed* adaptive-signal-control change as a bounded impact investigation.
3. **Executable behavior (V04):** Compare a state diagram with a simple model that changes signal states and represents regular and stochastic arrivals. Keep assumptions, input definitions and outcomes visible.
4. **Definition maturity (V05):** Compare early exploration with a better-constrained engineering definition. Reveal what has become specified and what remains unresolved.
5. **Engineering data (V06):** Investigate the resulting data through quality checks, annotation, comparisons, plots, margins and provenance; separate simulated observations from physical measurements.
6. **Later views (V07–V13):** Reuse the same identifiers, definitions and visual components only when they add understanding to verification, agent work, continuous engineering, assurance or reuse.

The sequence is educational; it does not prescribe a universal engineering lifecycle or require the visitor to create or edit engineering models.

## Source → projection → view → evidence

Use a clear separation of concerns:

**Controlled sources** contain engineering identity, attributes, relationships, model definitions, assumptions and revision information.

**Validated projections** select and transform source material into graph nodes and edges, plot series, geometry or simulation inputs. Derived values have reproducible rules.

**Visual components** render those projections and maintain interaction state: selected object, filter, zoom, current time, visible layer or temporary what-if parameters.

**Evidence records** document an actual evaluated claim, model configuration and execution context when evidence has been intentionally generated and retained. Moving a slider in a browser does not automatically create such a record.

A visualization can be built from a versioned static dataset and still support rich interaction. V03 does not require a graph database, live API, or browser-based engineering editor.

### A proposed visual contract

For each substantive technical visual, record these attributes in a versioned specification:

| Attribute | Required meaning |
| --- | --- |
| Visual ID | Stable reference, e.g. V03; separate component and dataset versions |
| Learning question | What a reader should discover or decide |
| Representation | Graph, state view, 2D/3D scene, chart or simulation |
| Source of truth | Versioned files, IDs, schemas and semantic relationship definitions |
| Data status | Canonical, proposed, illustrative, historical or recorded; clearly labeled |
| Allowed interactions | Select, filter, trace, predict, reset, compare, run or pause |
| Interpretation rules | What nodes, links, colors, states and calculations actually mean |
| Assumptions and exclusions | What the visual simplifies or omits |
| Alternative representation | Table, textual summary, source inspection and accessible control path |
| Verification | Contract tests, rendering checks, behavior tests and source/provenance checks |

The shared contract avoids a common failure mode: an agent creates a convincing diagram but leaves the team unable to tell whether the displayed links are maintained information or invented presentation choices.

## V02: System views need precise meanings

For the intersection, begin with a readable system overview and show multiple distinct perspectives:

- **Requirements view:** Which intended behavior and constraints have been stated?
- **Functional view:** What functions sense, decide, command and indicate?
- **Structural view:** Which logical components and interfaces support those functions?
- **Behavioral view:** Which transitions depend on events and conditions?

A representation may use Mermaid, SVG or a properly defined modeling language. If showing SysML v2-style examples, distinguish a **conceptual illustration** from a syntactically and semantically valid SysML v2 model. Do not label a Mermaid diagram as executable SysML or suggest that a visual alone enforces model consistency.

Provide stable object IDs and source navigation so the same intersection element can be recognized across views. Verify layout and readability before introducing animation.

## V03: Knowledge graphs should make change reasoning inspectable

The proposed V03 interaction must do more than display a collection of connected boxes. It should help the reader answer:

**If adaptive signal control were proposed, which engineering information should we inspect before deciding whether the change is acceptable?**

A bounded, versioned fixture might include conceptual nodes such as system, function, signal controller, operating mode, interface, requirement, test, decision and evidence record. These are **illustrative model roles**, not claims that corresponding V3 source files or graph infrastructure already exist.

A node needs stable ID, type, display name, lifecycle/status label and source link. An edge needs source ID, target ID, **typed relationship meaning**, and the provenance for that assertion. Visual proximity is not a relationship, and edge color alone is insufficient.

Suggested reader interaction:

1. Select the existing signal-control function and inspect the immediate relationships.
2. Switch to the proposed adaptive-control change scenario; changed/proposed information is visibly distinguished from canonical records.
3. Follow direct typed relations, then inspect *possible downstream review candidates* separately.
4. Filter by type or status while retaining a legend and the current selected-object context.
5. Select a linked requirement or test to inspect its stated role, source and what remains unknown.
6. Reset to the baseline without saving any proposal or modifying canonical sources.

The implementation could derive the graph from maintained fixtures at build time. **Do not require Neo4j or another graph database solely to teach this case.** A curated graph is preferable to a misleading automatic knowledge graph that guesses relationships from similar words.

### V03 acceptance criteria (proposal, not implementation authorization)

- Every displayed node and edge resolves to an explicitly defined input and semantic type.
- Missing, unresolved and unsupported relationships are exposed, not guessed or silently omitted.
- The visual distinguishes recorded direct links from inferred review candidates.
- Current versus proposed state remains readable without reliance on color alone.
- Selection, filters and reset are keyboard-operable, with textual detail and a tabular relationship alternative.
- A narrow-screen presentation remains usable; long labels and dense graphs do not become unreadable.
- Automated checks cover schema, duplicate IDs, missing references, allowed relation types and representative traversal cases.
- Source links and status labels remain correct under the GitHub Pages base path.
- No claim is made that the graph is an approved design, authoritative engineering tool or live data service.

## V04: Visualization of executable behavior

A state diagram can communicate permitted transitions; an executable demonstration lets a reader see the consequences of inputs and timing. For the intersection, a bounded teaching model can show current signal phase, next transition, events, timer values and vehicle arrival counters.

Design the exercise around a question: **How does the signal sequence respond to different arrival patterns under stated rules?** Let the reader make a prediction, run a short fixed scenario, inspect the result and try another.

Prefer a deterministic reference case and optional seeded stochastic examples. Keep the pseudorandom seed and input configuration accessible when teaching comparisons. A pause/restart control should have unambiguous behavior. Display the state, rule or event that explains each meaningful transition.

Keep the calculation or state-transition engine separate from the view, so model tests can run without a browser. Validate inputs at their boundary. A smooth animation does not substitute for a checked algorithm.

Show a readable timeline or state-transition table alongside the motion. Make failure or contradictory-input states observable instead of drawing a plausible but invented outcome.

A bounded browser demonstration is an educational model. It is not a validated intersection controller, a road-safety assessment, or evidence of real-world performance.

## V06: Data visualization is an investigative method

Engineers should be able to move among raw values, annotated inputs, calculated results and interpreted conclusions. For each important plot, identify the quantity, units, configuration, scenario, model/source revision, filters and calculation rule.

Useful interactions include linked selection, comparison across controlled scenarios, uncertainty/assumption layers, outlier inspection, and a corresponding data table. Avoid a default dashboard full of metrics that answer no particular engineering question.

For the same synthetic intersection scenario, a line chart might show queue length over simulated time, a state band might show signal phase, and a table might display input arrivals, configuration and calculated summary statistics. The views must use consistent underlying model output, not separate numbers copied by hand.

A plot can reveal a pattern and prompt investigation. It cannot establish causality or physical validity merely by being interactive. Where samples are generated by a toy model, say so near the data.

## Implementation choices and their appropriate boundaries

The existing Astro static site is the natural assembly and publication layer. Prefer browser components with explicit source contracts and isolated computation rather than a new all-purpose engineering web application.

| Need | Candidate technology | Why, and where to stop |
| --- | --- | --- |
| Readable system overview and simple process/state diagram | [Mermaid](https://mermaid.js.org/) or maintained SVG | Versioned diagram source; avoid forcing complex interaction into static diagrams |
| Typed relationship navigation | [React Flow](https://reactflow.dev/examples) or an accessible custom SVG graph | Select/filter/trace with controlled nodes and edges; no graph database by default |
| Custom technical charts | SVG, [D3](https://d3js.org/) or [Observable Plot](https://observablehq.com/plot/) | Choose based on coordination, scale and accessibility; retain source-aligned tables |
| Browser simulation controls | React or small isolated browser components | Controls update a shared pure model rather than duplicating formulas |
| Spatial engineering view | [Three.js](https://threejs.org/) or [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) | Use only when camera, depth, geometry and occlusion answer a real question |
| Narrative transitions | CSS or [GSAP](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) | Motion should communicate state or time, not decorate an already clear diagram |
| Publication and reusable components | [Astro](https://docs.astro.build/en/guides/framework-components/) and selective React islands | Reuse existing site build, preserve static outputs and limit unnecessary JavaScript |

Technology selection should consider bundle size, rendering cost, browser support, skill and test complexity. High-frame-rate 3D should never be the default for a graph that can be read more clearly as a table.

For engineering relationships, a full authoring interface is **out of scope** under the V3 master plan. Editing a model, persisting changes, integrating external engineering tools and deploying AI agents would require separate decisions, contracts and approvals.

## Review the explanation and the engineering claims separately

An agent may be able to implement the visual quickly, but that does not validate its meaning. Review at least four things:

1. **Semantic correctness:** Does every depicted relation, state, unit and label correspond to the intended engineering definition?
2. **Model correctness:** If calculations are involved, are assumptions, algorithms, boundary cases and deterministic checks independently testable?
3. **Communication quality:** Can a reader identify the key question, make a prediction and interpret the result without being led to an unsupported conclusion?
4. **Interaction quality:** Does the interface work with keyboard controls, reduced motion, narrow screens, non-JavaScript fallbacks and the published base path?

Keep source-aware test cases in the same change as the visualization. A representative test can select a node, verify the exact related IDs and labels, compare a calculation with a trusted fixture, and ensure reset restores the declared reference state. Browser tests check presentation and accessibility behavior; pure tests check graph/model logic.

Remember that successful UI tests and valid numeric calculations are not equivalent to engineering validation, nor do they establish that someone has learned the intended concept.

## Reuse the results without creating competing truths

The same source model can support multiple educational views, a chapter diagram, an interactive exploration, a recorded demo, or a presenter-led explanation. The transformation and curation rules for each output should be explicit and reviewable.

If an engineering view is reused in a presentation, the presentation owns **sequencing, annotation and audience pacing**. It must not quietly change requirement meaning or invent a more favorable result. Technical assumptions and algorithm contracts remain with the engineering reference.

This is the boundary between the two tutorial projects: **Document-as-Code teaches how to communicate maintained knowledge; Executable Engineering teaches how to represent and investigate engineering meaning**.

## Suggested implementation slices, after explicit V3 authorization

1. **Source and semantic contract:** Approve intersection reference IDs, typed relationships, statuses and the minimum source representations for V02/V03.
2. **Representative read-only graph:** Build V03's overview, selection, filters, change-impact example, source detail and table fallback with deterministic fixtures.
3. **Bounded executable example:** Separate the V04 state engine from presentation; add state visualization, arrival scenarios, seeded tests and accessible result comparison.
4. **Engineering data integration:** Reuse actual outputs from the bounded model in V06 plots, annotations, comparisons and source-linked summaries.
5. **Presentation reuse:** Expose an appropriate reviewed component or static/recorded fallback to the Document-as-Code presentation experience without copying engineering calculations.

Each slice needs a separately reviewed issue, PR, explicit acceptance criteria and actual verification. **This document is only preparatory editorial and visualization design input. It does not authorize V3 implementation, change an approved manuscript, or represent publication.**

## References for further study

- [Executable Engineering Lab V3 master plan, issue #32](https://github.com/And-Gu/executable-engineering-lab/issues/32) — authoritative planning and editorial status for this proposal.
- [React Flow examples](https://reactflow.dev/examples) — graph interaction patterns and trade-offs.
- [Mermaid documentation](https://mermaid.js.org/) — maintainable textual diagram source.
- [React Three Fiber introduction](https://r3f.docs.pmnd.rs/getting-started/introduction) — declarative 3D components; select version compatible with the site's React version.
- [Communicating with Interactive Articles](https://distill.pub/2020/communicating-with-interactive-articles/) — communication principles shared with interactive learning.
- [Bartosz Ciechanowski — Airfoil](https://ciechanow.ski/airfoil/) — example of integrating progressive explanation with manipulable technical visualizations.
