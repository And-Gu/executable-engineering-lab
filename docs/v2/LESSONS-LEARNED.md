# Lessons learned — from Document-as-Code Lab to Digital & Agentic Engineering

**Perspective:** The tutorial is a learning product. The implementation, simulations and agent instructions serve it; they are not the product's purpose.

## The major lessons

### 1. Start with a consequential question

A chapter becomes easier to read when its first paragraphs establish a problem the reader can recognize. Introduce a term when it helps resolve that problem. In the new lab, “Would this sensor configuration meet the criterion?” is a more engaging starting point than “What is executable engineering?”. Avoid opening with a taxonomy, buzzwords, or a long list of technologies.

### 2. Teach a genuine distinction, not an obvious contrast

We rejected the idea of comparing a poorly informed AI with a well-informed AI. More context improving a response is too trivial. Better educational questions are: “Which source is authoritative?”, “What information must an agent find?”, “Is this decision still current?”, and “What does a passing test actually establish?” A good interaction makes readers reconsider an assumption.

### 3. Reader interactions are optional but must earn their place

We approved short, **scenario-based knowledge checks** with a prediction or choice followed by immediate causal feedback. Our prototype asked whether metadata with `owner: unknown-team` could pass schema validation. The interesting insight: schema validity does not establish that the owner is correct. For engineering, use analogous reasoning checks about requirements, model assumptions, evidence, trade-offs and authority. Do not add scoring, badges, login, homework or a lab quota.

### 4. Browser-first does not mean simulation-first

The essential conceptual learning should be accessible in the published browser. Optional local work can expose the full source, build, model and workflow. A demonstration must use real calculation code where numerical behavior matters. A pleasant animation of an invented outcome is not engineering evidence.

### 5. The design is more than isolated chapters

Groups should advance a coherent learning journey; each chapter contributes one new capability. Illustrations, experiments, quizzes and references need contextual introductions and a reason to be there. When the narrative changes example or abstraction level, tell the reader why. The evolving fictional Distributed Monitoring System should supply continuity without forcing every topic into the same visualization.

### 6. Editorial flow is an architectural concern

We improved the specification after recognizing that technically accurate content can still feel fragmented. The favored style is **conversational, precise, compact and respectful**, closer to a well-written explanatory book than a technical checklist. Prefer a concrete opening, one idea per paragraph, natural transitions and a clear consequence. Do not mechanically open every chapter with a question. Reduce redundant explanations without removing necessary engineering limits.

### 7. Short core chapters, deep optional references

Reader-facing chapters should explain the concepts and show their consequences. Detailed commands, large schemas, math derivations, architecture alternatives, long inventories, and optional exercises belong on linked supporting pages. A reference link should say what the reader gains and whether local tools are necessary.

### 8. The agent needs a navigable information environment

`AGENTS.md` is the entry point for working rules, permissions, where to look, and required checks—not a monolithic project encyclopedia. Maintain separate **information architecture**, **terminology/editorial conventions**, **decisions and rationale**, **authoritative engineering sources**, and **verification contracts**. An agent that can read a repository has not necessarily found the right source or received authorization to change it.

### 9. One source of truth, several experiences

Canonical engineering records must remain independent of web views. Astro can render source content and mount interactive components, but must not silently duplicate model formulas or authoritative engineering data. Keep transforms and calculators shared between browser and CI where possible. Where the learning chapter itself is authored inside Astro today, do not force a Markdown migration until the costs and benefits are clear.

### 10. Keep evidence and authority separate

An approved requirement is not an implemented feature. A passing software test is not necessarily a passing engineering criterion. A model's geometric coverage is not physical detection probability. A temporary browser what-if result is not retained, revision-bound CI evidence. A successful website build is not an editorial or engineering approval. Put these distinctions next to the results they qualify rather than repeating generic disclaimers everywhere.

### 11. Vertical slices outperform elaborate frameworks

We made progress by connecting one need, requirement, scenario, model, test and visible result before building a generalized graph platform or agent orchestration. For the next stages, extend this trace chain only when a new engineering question requires it. Avoid premature multi-agent infrastructure, generic ontologies and feature expansion that obscures the lesson.

### 12. Separate design decisions from empirical validation

At this stage the user is the tutorial's owner, editor and evaluator. We do not need a formal learner study or fabricated improvement percentages. Present concrete alternatives and before/after examples, let the owner **approve / revise / reject**, and verify the accepted implementation with builds, tests, accessibility checks and visual inspection. Future learner testing can be added later if the audience grows; it is not a present release gate.

## What we deliberately stopped doing

- Requiring hands-on exercises in **every** chapter.
- Building extra interactivity simply because it is technically possible.
- Demonstrating obvious AI performance differences in place of useful agent information architecture.
- Treating agent instructions as a substitute for maintained specifications and decision records.
- Using word count, quiz scores, Git activity or page views as a proxy for learning quality.
- Asking AI agents to make undocumented product/editorial choices or to claim unverified completion.

## What these lessons change in the Digital & Agentic Engineering project

The existing DMS V0 demonstrator already has a real cause-and-effect loop: alter sensor x/y/radius, see geometric coverage and the evaluated criterion, then follow need → requirement → scenario → model → test → result. Keep that core intact. Improve how the chapter poses the engineering question, invites exploration and explains the evidence. Later increments should each add one meaningful dimension of engineering uncertainty—configuration, behavior over time, agent-assisted changes or governance—not just extra features.

The long-term reusable asset is not the particular Astro site. It is the **combination of a learning specification, editorial voice, meaningful interaction patterns, an agent-ready information architecture, and a clear verification boundary.**
