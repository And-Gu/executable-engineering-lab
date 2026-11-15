# Chapter style guide — working proposal

Recorded 15 November 2026. The front page establishes the visual identity; the Chapter 1 reader pilot is the main reference for chapter composition and layout. The owner liked parts of the pilot and identified further review work. Preserve that reference while developing the wider information site.

This document records the proposal and the differences discussed in review. It does not mean every proposed typography adjustment has been applied or that the other chapters have been migrated.

## References and authority

- [Site direction](SITE-DIRECTION.md): audience, purpose and engineering argument.
- [Editorial guide](EDITORIAL-GUIDE.md): voice and chapter composition.
- [Curriculum map](CURRICULUM-MAP.md#terminology-and-introduction-sequence): terminology and its introduction sequence.
- [Chapter 1 pilot](../site/src/pages/learn/v2/01-new-engineering-paradigm.astro): the implemented reading reference, at `/learn/v2/01-new-engineering-paradigm/`.
- [Visual style-guide proposal](../docs/design/chapter-style-guide.html): open the standalone HTML in a browser to inspect reading layout, type and color, graphics, and components. Its editable source is [chapter-style-guide.fragment.html](../docs/design/chapter-style-guide.fragment.html).

## A shared identity, a reading layout

Retain the front page's dark surfaces, sans-serif typography, warm white text, teal and gold, fine rules and restrained use of pattern. The chapter layout gives prose, examples and explanatory graphics more room. It should feel like the same engineering publication.

Use Inter for prose and headings, with a system sans-serif fallback. Use IBM Plex Mono sparingly for chapter numbers, short labels, status and technical notation. Avoid serif type, decorative dashboards and large collections of cards that interrupt the argument.

| Role | Proposed value | Use |
| --- | --- | --- |
| Canvas | `#0d1011` | Main reading surface |
| Panel | `#151a1c` | A bounded example or optional interaction |
| Primary text | `#f1f3ef` | Headings and emphasis |
| Reading text | `#d7dedf` | Proposed brighter body copy |
| Secondary text | `#b9c2c5` | Captions and supporting labels |
| Rule | `#384144` | Quiet structural separation |
| Teal | `#9ed8cb` | Product-system work |
| Gold | `#f1d67b` | Engineering-environment work and selected navigation |

Keep the product/environment color mapping consistent when a diagram uses it. Pair color with words, position or shape. Teal and gold do not mean PASS and FAIL. Check contrast against the actual surface; thin decorative rules are not sufficient boundaries for an essential control.

## Reading structure

Use a shared shell with clear part and chapter location, a readable prose column, optional in-page navigation, and meaningful previous/next destinations. Collapse course navigation on narrow screens. Clearly distinguish available articles, reader previews and planned chapters.

Follow Chapter 1's teaching patterns where they serve the subject:

1. Open with a recognizable engineering situation and a concrete question.
2. Introduce a useful visual early, beside the explanation it supports.
3. Develop the example through findings, alternatives or consequences.
4. Introduce terminology when the reader needs the distinction.
5. Offer optional depth or a reasoning check.
6. Close with what the reader can now assess and the next engineering question.

These are composition principles, not mandatory headings or a fixed sequence of components. Each chapter needs its own learning gain. A six-tile overview is optional, and core understanding must remain visible without interaction or setup.

## Typography and spacing proposal

| Element | Desktop | Narrow screens |
| --- | --- | --- |
| Chapter title | 48 px | 34–38 px |
| Section heading | 30 px | 26 px |
| Subsection heading | 21 px | 20 px |
| Opening paragraph | 20 px | 18 px |
| Body copy | 18 px, about 1.7 line height | 16–17 px |
| Essential diagram labels | About 14 px | Reflow rather than shrink |
| Captions | 13–14 px | Keep readable at the same scale |
| Short mono labels | About 12 px | Avoid dense strings |

Aim for a prose measure of 60–68 characters. Use an 8 px spacing rhythm: 8, 16, 24, 32, 48 and 64 px. Allow roughly 48–64 px between major sections and 24 px inside a substantial example panel. Use relative CSS units and preserve browser zoom.

These values refine the pilot rather than describe its current CSS exactly. The pilot currently uses 16 px body text, approximately 15.4 px on narrow screens, a title up to 64 px, secondary text for most prose, and a slightly different panel color (`#151b1e`). The proposed larger, brighter reading text and smaller title remain candidates for a future layout update. Do not apply them silently while checking in this session.

## Graphics that explain the engineering

Use a diagram to show a relationship, sequence, comparison or consequence that would take more effort to explain in prose. Label the relationship as well as its endpoints. Place the graphic close to its explanation and give it a caption stating the useful conclusion.

Chapter 1 supplies several reusable patterns: product/environment lanes, one finding with two consequences, engineering AI beside product AI, and different feedback cadences. Keep their engineering meanings intact when adapting them. The front page's two circles are another explanatory form, not a compulsory illustration for every chapter.

Distinguish a conceptual example, a model calculation and an authentic recorded run. Do not invent durations, measured improvements or agent actions to make a graphic persuasive. Use ordinary text or HTML where it helps labels wrap. Stack comparisons and lanes on small screens; avoid scaling a desktop diagram until its text becomes unreadable.

Use hexagons sparingly around an opening when useful. Keep patterns out of sustained reading and detailed diagrams. Motion should explain a change and respect reduced-motion preferences.

## Reusable components

| Component | Purpose |
| --- | --- |
| Chapter opening | Location, title, useful opening paragraph and compact optional chapter information |
| Principle statement | One important idea with a restrained gold rule |
| Term in context | A short definition attached to its first meaningful use |
| Explanatory figure | Labeled relationships and a consequence-focused caption |
| Finding comparison | What a finding changes in the product and the engineering environment |
| Disclosure | Optional detail, sources or alternative findings |
| Reasoning check | A concrete judgment before revealing an explanation |
| Chapter close | The new capability to assess or decide, followed by a working next destination |

Prefer native links, buttons and disclosures. Provide visible focus, keyboard operation, accessible names and text equivalents for diagrams. Avoid hiding the central argument behind closed panels.

## Implementation boundary

The pilot's shared files are [ChapterLayout.astro](../site/src/layouts/ChapterLayout.astro), [CourseNavigation.astro](../site/src/components/CourseNavigation.astro) and [chapter-reading.css](../site/src/styles/chapter-reading.css). They are the starting point for future reuse, with chapter-specific content and in-page navigation reviewed as the next chapters are implemented.

The visual proposal is a review specimen, outside the deployed site. Its illustrative copy is not replacement tutorial content. Keep the existing lessons, routes and executable lab intact while the broader curriculum is reviewed. Future rollout should verify readable diagrams, working navigation, keyboard use, narrow-screen reflow and accurate content status.
