# V2 foundation and learning architecture (proposed)
Status: review proposal — not yet the published curriculum.

## Educational thesis
**Engineering at the Speed of AI.** Digital engineering connects information across systems, electronics, mechanical design, software, manufacturing and verification. AI agents can accelerate exploration and implementation, but the increased pace requires clearer intent, controlled authority, reviewable changes and trustworthy engineering evidence.

## Principles
- Engineering, not just software engineering. Different disciplines have different lead times and integration gates.
- Specify what we know, explore what we do not, verify what we build, preserve what we learn.
- Planning, exploration and delivery are parallel feedback loops, not waterfall phases.
- Progressive specifications express known constraints and scope without inventing a complete solution up front.
- Agent instructions and tool permissions are different; human review retains engineering authority.
- Keep software potentially releasable while physical systems may await fabrication, integration or qualification.
- Use executable models to learn, but label assumptions and distinguish calculations from real-world assurance.

## Proposed curriculum
I. Engineering in the Age of AI: 01 The New Engineering Paradigm; 02 Planning Under Uncertainty.
II. Building Engineering Knowledge: 03 Engineering Knowledge as Code; 04 Learning Through Models and Prototypes; 05 Spec-Driven Development Without Waterfall.
III. Engineering with AI Agents: 06 Directing AI Engineering Agents; 07 Engineering in Small, Reviewable Increments; 08 Continuously Integrated Engineering.
IV. Trust, Decisions and Evolution: 09 Verification, Validation and Engineering Evidence; 10 Governance and Engineering Authority; 11 Managing Engineering Knowledge at Scale; 12 The AI-Native Engineering Environment.

## Scope of this PR
- Revise Home and Learn framing, openly distinguishing **planned v2** from **published v1**.
- Preserve all twelve published lesson files/paths and the existing chapter index.
- No changes to engineering YAML, schemas, V0 geometry, numerical output, tests, agent runtime or governance logic.
- The V0 baseline's expected 38.52% geometric result against the educational 50% threshold must remain an engineering FAIL.
- Historical SITE_SPEC.md and MILESTONE_*.md describe the original release and are not rewritten as v2 evidence.

## Next reviewed increments
1. Chapter 1 introduces the AI-native engineering paradigm; Chapter 2 adds roadmaps, uncertainties and capability increments.
2. Chapters 3–5 connect engineering knowledge, prototypes and progressive specifications.
3. Chapters 6–8 provide an authentic, provenance-bearing agent example, small reviewable diffs and multidisciplinary integration.
4. Chapters 9–12 connect evidence, authority, product variants and the end-to-end DMS case.

## Quality gate
Before approving this PR: check Astro build/types/tests, evidence generation, navigation from Home/Learn to every existing chapter, GitHub Pages base-path, accessibility and responsive layout. Do not claim these passed unless executed.
