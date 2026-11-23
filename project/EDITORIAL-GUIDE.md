# Editorial and visual guide v2.1

## Voice
American English, confident but measured, practical and readable. Match the primary reader in the approved copy contract. Engineer-to-engineer is the default, while chapters for technical leaders or executives should lead with the capability, decision and organizational consequence rather than course mechanics. Do not write as though every reader is completing a school lab. Avoid marketing language and anthropomorphizing tools (prefer 'the agent requires access to ...' or 'the workflow provides ...' over 'AI wants ...'). Start with a meaningful decision or tension. Keep one purpose per paragraph.

## Terminology
Follow the [curriculum terminology and introduction sequence](CURRICULUM-MAP.md#terminology-and-introduction-sequence). Systems engineering establishes the scope; executable engineering describes the tutorial's approach; AI agents are a capability within it. Explain terms at first use. Prefer “AI agents” in introductory copy and use “agentic engineering” for delegated work with tools and feedback. Keep AI-assisted engineering, agentic work, AI in products and large language models distinct. Describe software-driven workflows across engineering disciplines without implying that the subject is software development alone.

## Chapter composition
A chapter brief specifies a **unique** learning gain, opening engineering question, scenario progression, narrative arc, a proposed primary visualization/interactivity or reason to omit one, evidence boundary, and next chapter bridge. It also identifies which [course through-lines](CURRICULUM-MAP.md#editorial-through-lines) the chapter receives, advances and hands forward. Do not mandate identical heading sequences or a custom code lab per chapter. Exercises are optional where their value is clear. Ask the reader to predict before revealing answers when appropriate.

## Chapter copy contract and concept gate

Before drafting a full chapter, record a short copy contract in its issue or brief:

- **Primary reader and decision situation:** who the chapter addresses and what they are trying to understand, assess or decide.
- **Reader promise:** the useful capability or perspective the reader should gain, in one sentence.
- **Message spine:** the main claim and no more than four supporting ideas.
- **Example role:** what the recurring case makes concrete, how much narrative weight it should carry and what the reader must understand without it.
- **Anti-goals:** what the chapter must not become, such as a course recap, product pitch, generic AI warning or case-study report.
- **Continuity:** the earlier thread the chapter receives and the question or capability it hands forward.

Use a concept gate before full manuscript production. Prepare three short treatments of roughly 150–250 words rather than several complete drafts. Each treatment includes a working title, opening, main movement, ending and one representative paragraph. The owner or assigned editor selects or combines a direction before the full manuscript is written; the chapter author may recommend a direction but does not self-approve it. Record the decision-maker and date in the chapter issue. A chosen treatment approves the copy direction only; it does not approve factual claims, final prose, publication, illustrations or quiz content.

Once the direction is selected, write in two distinguishable passes. The content pass establishes claims, sources, decisions, evidence boundaries and the supporting example. The copy pass improves hierarchy, flow, transitions, pace and readability for the named reader without changing technical meaning.

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
Ask: Is the named reader and their decision visible in the first 150 words? Is the main claim recognizable in the opening, section sequence and conclusion? Is jargon explained once? Does the reader gain the promised skill or decision capability? Does the example advance the argument without becoming its actual subject? Could the intended reader understand why the chapter matters without already knowing the lab or recurring case? Are limitations precise rather than repetitive? Does the conclusion bridge forward or, for the final chapter, return to the course's opening argument?

## V3 external research and publication boundary

When drafting or revising a v3 chapter, first consult `research/INDEX.md`, the relevant dated background note, and any owner-approved manuscript. Treat research as context, not automatically approved copy. Cite a primary source only after verifying its precise claim or quotation, publication date, sample and applicability. Differentiate standards and peer-reviewed work from vendor claims and practitioner surveys.

Avoid repeated disclaimers: explain limitations only where they materially affect comprehension or a decision, and place detailed treatment in the relevant verification, agent-context or governance chapter. Do not turn a learning chapter into an LLM warning manual.

Research remains in root `research/`; public content belongs under Astro's `site/src/` and requires a separate editorial/publishing decision. Never import or surface background-only notes, candidate quotations or source indexes automatically. Follow `research/README.md` for archival workflow and publication checks.
