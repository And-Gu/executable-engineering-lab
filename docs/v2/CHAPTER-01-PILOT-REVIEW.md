# Chapter 1 reader pilot — review record

Prepared 15 November 2026 after the owner authorized the revised site direction and Chapter 1 pilot. Local implementation is complete for review; publication and adoption across other chapters remain pending.

## Preview

- Chapter: `http://127.0.0.1:4327/executable-engineering-lab/learn/v2/01-new-engineering-paradigm/`
- Front page: `http://127.0.0.1:4327/executable-engineering-lab/`
- Direction: [project/SITE-DIRECTION.md](../../project/SITE-DIRECTION.md)
- Owner-facing original direction: [site direction and front-page brief](https://chatgpt.com/space/page_52692f0497f48191bc7e6b4a254696a0)

The existing local Astro preview process serves the rebuilt `dist/`. Both Home and Learn link to the completed pilot, explicitly labeled as a reader preview. The pilot registry is separate from published v2 articles.

## What to review

The opening starts with an uncertain equipment-monitoring need. A two-lane graphic connects product behavior with the people, models, tools and methods used to investigate it. Three expandable illustrative findings show changes to both kinds of work. The narrative introduces the agreed vocabulary, distinguishes engineering AI from product AI, and explains speed through different feedback cycles. A reasoning check asks what software checks establish about a physical mounting question.

The dark reader has grouped course navigation, a current chapter indicator, optional chapter information and a collapsed course menu on narrow screens. It omits the six-tile overview. The next-chapter link leads to the planned learning map because Chapter 2 is not yet implemented in the new course.

These situations are conceptual explanations, not simulated measurements or recorded agent runs. The original Chapter 1 and the other original lesson routes remain intact. No canonical model, source schema, evidence calculation or agent execution capability was changed.

## Observed verification

- `npm run check`: zero Astro errors, warnings or hints; six test files and all 86 tests passed; strict source validation passed; 18 static routes built.
- After a small diagram-width correction, `npm run build` passed again. No calculation or interaction code changed after the full check.
- `npm run evidence`: canonical result remains 38.52%, engineering FAIL against the 50% teaching criterion. This is the intended model result, not a build failure.
- Static link audit: 69 internal links from Home, Learn and the pilot resolve to existing build outputs and valid fragments; no duplicate IDs on those pages.
- Browser: the pilot returns HTTP 200; desktop 1738px, tablet 768px, and narrow 390px/320px layouts were inspected. No horizontal document overflow was observed.
- Keyboard: skip link focuses `main`; findings expand with Enter; mobile course navigation opens and closes with Enter; the reasoning-check disclosure opens correctly.
- Navigation: Chapter 2 bridge reaches Learn's Part I; the pilot link there returns to Chapter 1. Home's pilot link was independently checked by the requested front-page sub-agent.
- No browser errors or warnings were reported for the pilot. A desktop screenshot was saved at `/Users/andersgustafsson/Documents/Codex/2026-11-11/r/outputs/chapter-01-pilot-desktop.jpg`.
- The front-page sub-agent checked desktop, tablet, mobile, skip navigation and the lesson directory, and captured fresh desktop/mobile screenshots. Its only additional Home change was the labeled Chapter 1 preview row.

The owner-facing direction and revised-brief Pages were saved and their changed content read back successfully. At the initial preview handoff, no commit, push, merge or publication had been performed.

## Session checkpoint

The owner subsequently requested checking in all session changes. This checkpoint includes the front page, Chapter 1 pilot, direction and terminology updates, and the [chapter style-guide proposal](../../project/CHAPTER-STYLE-GUIDE.md). Chapter 1 remains the implemented reading reference; proposed typography refinements are documented separately. Checking in the feature branch does not approve publication or migration of the other chapters.

Before committing, `npm run check` passed again: 50 Astro files without diagnostics, all 86 tests, source validation and all 18 static routes. `npm run evidence` completed with the unchanged 38.52% teaching-model result. The style-guide specimen was preserved as editable source and a standalone browser export under `docs/design/`, outside the deployed site.
