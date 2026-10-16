# Executable Engineering Lab — Site Specification

**Status:** Proposed baseline · **Version:** 0.1 · **Date:** 2026-10-16

## 1. Purpose

Executable Engineering Lab is a standalone, practical learning site showing how engineering intent can become structured, connected, executable, and verifiable engineering knowledge. It builds conceptually on [Document-as-Code Lab](https://and-gu.github.io/document-as-code-lab/) without assuming readers completed it.

**Tagline:** From engineering intent to working systems.

The site is not an Astro, Git, AI prompting, or compliance-tool tutorial. These are enabling technologies, introduced only when useful to the engineering problem.

## 2. Audience and outcomes

**Primary audience:** Practicing systems engineers, software engineers, architects, verification engineers, and technical leads. Assume engineering literacy, but no prior experience with AI agents, knowledge graphs, or specialized MBSE tools.

After completing the learning path, a reader should be able to:

1. Distinguish an operational need from a requirement, assumption, design decision, and verification result.
2. Maintain engineering artifacts as structured, version-controlled sources with explicit relationships.
3. Understand digital threads and navigate requirement-to-test traceability and change impact.
4. Implement a small executable engineering model and compare candidate designs against explicit criteria.
5. Evaluate simulation evidence with a clear understanding of model fidelity and limitations.
6. Explain how bounded AI agents may propose and test engineering changes under human review.
7. Explain how automated validation, policy controls, and evidence collection support continuous engineering assurance.

## 3. Learning design

**Mode:** Balanced concepts and exercises. Each chapter should follow this pattern:

1. **Engineering question:** What decision or problem motivates the chapter?
2. **Concept:** Explain only the essential engineering principles, with precise language.
3. **Experiment:** A real interactive model or reproducible repository exercise.
4. **Evidence:** What was measured or validated, using what inputs and model version?
5. **Interpretation:** What can and cannot be concluded?
6. **Next question:** What new engineering uncertainty follows?

Main chapter prose should usually be **800–1,200 words**; move detailed tool documentation, mathematics, and references to dedicated pages. Use diagrams where relationships matter, not as decoration. Add short quizzes that test understanding rather than terminology recall. Include a no-install, browser-based experience and a reproducible hands-on repository path.

**Editorial principles:** Precise, concise, concrete; avoid hype, generic AI claims, and presenting a simulated PASS as proof of real-world performance. Introduce terms where needed and link to a glossary. Never imply that an AI-generated proposal has engineering authority without review.

## 4. Demonstrator and progression

A single fictional **Distributed Monitoring System (DMS)** evolves across the curriculum. Its operational need is to monitor moving objects within a bounded industrial area. Do not prematurely prescribe the final sensor architecture.

- **V0 — Engineering question:** One area, one fixed idealized circular sensor, geometric coverage, one threshold and a reproducible verification result.
- **V1 — Distributed sensing:** Multiple sensors, overlapping coverage, blind spots, alternative configurations.
- **V2 — Dynamic behavior:** Moving objects, time steps, detections, uncertainty, performance over scenarios.
- **V3 — Agent-assisted engineering:** Bounded changes, agent-driven experiments, reviewed proposals.
- **V4 — Governed engineering:** Machine-readable controls, assurance evaluation, provenance and dashboard.

Version labels describe **teaching capabilities**, not product maturity or operational readiness.

## 5. Information architecture

Top-level navigation:

- **Home** — Purpose, challenge, learning route, how to begin.
- **Learn** — Chapters organized into modules; clear reading sequence and prerequisites.
- **Lab** — Interactive experiments with inputs, outputs, assumptions, and reset controls.
- **Explore** — Engineering source relationships and eventually an interactive knowledge graph; can initially show a simple source-to-test chain.
- **Reference** — Glossary, schemas, engineering concepts, tools, limitations, source links.

Proposed curriculum (subject to refinement as the working model develops):

| Chapter | Working title | Core capability |
|---|---|---|
| 01 | From Engineering Intent to Evidence | Need → requirement → model → result |
| 02 | Engineering Information Models | Structured artifacts and validation |
| 03 | Digital Threads and Knowledge Graphs | Traceability and change impact |
| 04 | Executable Engineering Models | Behavior and reproducible execution |
| 05 | Experimentation and Trade-offs | Architecture comparisons |
| 06 | Verification and Engineering Evidence | Requirements, tests and model limits |
| 07 | Agentic Engineering | Bounded agent tasks |
| 08 | Agents and Engineering Context | Context, tools, permissions, review |
| 09 | Continuous Engineering | CI and lifecycle feedback |
| 10 | Governance and Assurance | Policies, controls, Gemara as an example |
| 11 | Engineering Knowledge at Scale | Configuration, reuse and evolution |
| 12 | The Integrated Engineering Environment | End-to-end demonstration |

**Milestone 1 publishes only the site foundation, Chapter 1 and V0 lab.** Later chapters may be shown in a clearly marked roadmap but not as empty or misleading published lessons.

## 6. Architecture principles

1. **Engineering source is independent of presentation.** Astro reads or imports engineering source data; it must not be the canonical owner of that data.
2. **Single implementation of engineering calculations.** The browser and automated tests execute the same TypeScript model, not separately maintained formulas.
3. **Sources are traceable.** Give requirements, scenarios, tests and results stable IDs. A test result identifies inputs, model version and execution context.
4. **Validation is automated.** Parse and schema-check structured sources; fail builds on broken IDs, missing links and invalid model parameters.
5. **Tests are reproducible.** Model runs are deterministic in V0 and do not depend on remote services.
6. **Presentation is explicit about freshness.** Distinguish interactive browser calculation from saved CI evidence, with commit identifier and timestamp for saved evidence.
7. **Git is the revision record.** Changes are proposed as reviewable commits/PRs. Later AI agents have narrowly scoped permissions and do not bypass review.
8. **Static first.** GitHub Pages hosts the public site; V0 does not require authentication, a database, a persistent backend or external AI API.
9. **Accessible and responsive.** Keyboard-operable controls, labeled numeric inputs, readable visualizations, and textual results independent of color.
10. **Clarity over completeness.** Build vertical slices; avoid universal ontologies, platform abstractions and large frameworks until the learning goal requires them.

## 7. Recommended stack

- Astro for the static site and educational content.
- TypeScript for pure engineering calculations and interactive components.
- YAML and Markdown for engineering artifacts and learning content.
- Zod **or** JSON Schema for a small initial input contract; choose one and avoid duplicating rules.
- Vitest for model and requirement verification.
- GitHub Actions for PR validation and GitHub Pages deployment.
- Browser-native SVG or other lightweight visualization. React is optional; do not introduce it solely for one slider demo.

## 8. Initial repository layout

```text
executable-engineering-lab/
├── docs/
│   └── 01-engineering-intent.md
├── engineering/
│   ├── scenarios/SCN-001.yaml
│   └── requirements/REQ-COV-001.yaml
├── models/
│   └── coverage/
│       ├── coverage.ts
│       ├── evaluate.ts
│       └── coverage.test.ts
├── schemas/
├── site/
│   ├── src/pages/
│   └── src/components/
├── scripts/
├── .github/workflows/
│   ├── validate.yml
│   └── deploy.yml
├── AGENTS.md
├── README.md
├── ROADMAP.md
├── SITE_SPEC.md
├── DEMONSTRATOR_SPEC.md
└── MILESTONE_01.md
```

This is a target layout; remove empty directories until used. If an Astro root-level setup is simpler, permit it while preserving the separation of canonical engineering sources and UI.

## 9. Visual direction

Maintain a family resemblance to Document-as-Code Lab: restrained, readable, generous whitespace, clean technical diagrams, unobtrusive illustrations, and interactive components that support learning. Use a muted neutral/olive palette with accessible contrast. Do not copy unrelated content or mix sample data with real platform metrics.

## 10. Quality gates

A released chapter must have a defined learning objective, working experiment, visible assumptions, reproducible source data, source references, meaningful accessibility checks, and proofread concise prose. Claims about Digital Engineering, Agentic Engineering, standards, and named projects must cite authoritative sources. The site may teach Gemara later but should not depend on it in the first milestone.

## 11. Scope boundary

**In scope now:** Public static site, Chapter 1, V0 example, reproducible calculation, result evaluation, automated validation and CI.

**Out of scope now:** Agent orchestration, Gemara implementation, live operational sensors, distributed sensor fusion, probabilistic detection, dynamic tracking, comprehensive knowledge-graph infrastructure, real security certification, and production-system assurance.

## 12. Success criteria

A new reader can open the site, understand the engineering need, modify a sensor configuration, see coverage and PASS/FAIL from the real model, inspect the associated requirement and test source, and explain the limits of that evidence. A contributor can clone the repository, run tests, and reproduce the reference result without proprietary tools.
