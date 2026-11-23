# Editorial and visual guide v2.0

## Voice
American English, confident but measured, practical and readable. Engineer-to-engineer, not marketing. Avoid anthropomorphizing tools (prefer 'the agent requires access to ...' or 'the workflow provides ...' over 'AI wants ...'). Start with a meaningful decision or tension. Keep one purpose per paragraph.

Use commas or full stops instead of double hyphens or dashes to set off clauses in reader-facing prose. Preserve technical syntax, numeric ranges, directional pairs and structural labels.

## Terminology
Follow the [curriculum terminology and introduction sequence](CURRICULUM-MAP.md#terminology-and-introduction-sequence). Systems engineering establishes the scope; executable engineering describes the tutorial's approach; AI agents are a capability within it. Explain terms at first use. Prefer “AI agents” in introductory copy and use “agentic engineering” for delegated work with tools and feedback. Keep AI-assisted engineering, agentic work, AI in products and large language models distinct. Describe software-driven workflows across engineering disciplines without implying that the subject is software development alone.

## Chapter composition
A chapter brief specifies a **unique** learning gain, opening engineering question, scenario progression, narrative arc, one primary visualization/interactivity, evidence boundary, and next chapter bridge. Do not mandate identical heading sequences or a custom code lab per chapter. Exercises optional where value is clear. Ask reader to predict before revealing answers when appropriate.

## Repetition budget
Reference known distinctions rather than re-explaining baseline FAIL, 50% teaching criterion, dirty-worktree provenance, or lack of physical detection in every chapter. One concise caveat near relevant output; persistent source/assumptions reference for full details. New chapter must introduce new decision content, not only re-run radius/threshold proposal.

## Multidisciplinary audit
Each part represents at least two distinct non-software disciplines in substantive scenarios. At least one cross-discipline decision has conflicting constraints and lead-times. Distinguish design maturity, model confidence and physical acceptance.

## Visual language
Follow [the current site direction](SITE-DIRECTION.md): dark surfaces, readable sans-serif type, warm white text and restrained teal/gold accents. Use strong hierarchy, whitespace and meaningful diagrams. Choose a static comparison, annotated workflow or interaction according to its learning purpose. Label conceptual examples, model outputs and authentic recorded runs accurately. Maintain keyboard operation, semantic labels, text equivalents and narrow-screen usability.

The Chapter 1 reader pilot begins with a concrete situation and an early visual. Keep status and source information in a compact disclosure. A six-tile overview is optional for future chapter reviews, not a template requirement. Core understanding should not require controls, an AI account or local setup.

Use the [chapter style-guide proposal](CHAPTER-STYLE-GUIDE.md) alongside the pilot when reviewing future layouts. It distinguishes the implemented reference from proposed typography refinements and leaves chapter composition flexible.

## Language examples
Avoid: 'The source relation establishes what the evidence supports' repeated as boilerplate.
Prefer: 'A larger footprint improves the calculation. It does not tell us whether the sensor can be powered or mounted there.'
Avoid: 'The agent optimizes the architecture' unless an agent actually runs and a bounded objective is defined.
Prefer: 'The recorded agent run proposes a configuration. An engineer reviews the changes and evidence before adoption.'

## Writing QA
Ask: Is the engineering problem visible in the first 150 words? Is jargon explained once? Does a reader gain a new skill or decision capability? Does the example advance? Are limitations precise rather than repetitive? Does the conclusion bridge forward?

## V3 external research and publication boundary

When drafting or revising a v3 chapter, first consult `research/INDEX.md`, the relevant dated background note, and any owner-approved manuscript. Treat research as context, not automatically approved copy. Cite a primary source only after verifying its precise claim or quotation, publication date, sample and applicability. Differentiate standards and peer-reviewed work from vendor claims and practitioner surveys.

Avoid repeated disclaimers: explain limitations only where they materially affect comprehension or a decision, and place detailed treatment in the relevant verification, agent-context or governance chapter. Do not turn a learning chapter into an LLM warning manual.

Research remains in root `research/`; public content belongs under Astro's `site/src/` and requires a separate editorial/publishing decision. Never import or surface background-only notes, candidate quotations or source indexes automatically. Follow `research/README.md` for archival workflow and publication checks.
