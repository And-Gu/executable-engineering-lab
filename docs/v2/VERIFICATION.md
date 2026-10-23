# Stage 0–1 verification — v2 transition draft

Checked 2026-10-23. Development observations, not engineering approval or publication. Baseline fetched from origin/main: `5087f980a181bb5f2a51856871068b062d7d3788`.

## Executed checks

Before changes, `npm run check`, `npm run evidence` and `npm run proposals` passed: 86 tests in six files, zero Astro/TypeScript diagnostics, sixteen static routes, canonical 38.52% FAIL against 50%. The actual public Home showed the original hero and twelve completed lesson cards. No tag was created.

After changes, the same check/evidence/proposals commands passed with the same engineering outcomes. The source/model/test/component/workflow layers and twelve chapter sources are unchanged relative to baseline. Radius analysis remains 63.76%/50% PASS; threshold analysis remains 38.52%/35% PASS, explicitly unapproved and without registered reference-test execution against changed inputs.

Generated output inspection resolves 419 local links/assets/fragments, with unique IDs. All sixteen routes remain; Home's historical `#learning-path` anchor is retained. [Inventory](ROUTE-INVENTORY.json) distinguishes baseline/draft fragments. The original completed registry is unchanged; four-part planned data is separate, with chapter numbering 1–12 and no links to nonexistent chapters. Home and Learn render their planned structure from that one presentation module.

Generated Home/Learn require no JavaScript for narrative, planned/current status or links. No client script, dependency or animation was introduced. Full JavaScript-disabled browser or reduced-motion preference testing was not performed.

## Browser smoke observations

Reviewed the production build via Astro preview on port 4327 at the GitHub Pages base path.

| Check | Actual observation |
| --- | --- |
| Home hero/status | AI, connected knowledge, control and multiple disciplines visible; v2 curriculum in development; demonstrations/recorded workflows labeled planned |
| Home published cards | Twelve existing lesson cards and Read Chapter links retained |
| Learn | Four planned groups, twelve titles numbered 1–12; twelve separate published lesson links |
| Direct lesson routes | All twelve opened and reloaded, with expected title and heading |
| Source navigation | Existing chapter/source links remain in generated link/fragment review; no legacy page source changed |
| Proposal workspace in Chapter 12 | Radius 63.76% PASS; invalid reference withholds analysis; restore/reset returns 38.52% FAIL |
| Standalone lab | Radius 45 gives 63.76% PASS; radius -1 is rejected; keyboard reset restores 38.52% FAIL |
| First Tab after Home reload | Skip-to-content focused |
| Learn jump link | Enter reaches #published-lessons |
| Browser history | Home → Learn → back → forward retains correct pages |
| 1280px Home | No document overflow; desktop screenshot inspected |
| 375px Home/Learn | Document width 375px without overflow; mobile Home screenshot inspected |
| Browser console errors | None observed during checked flows |

Screenshots in workspace outputs: v2-home-preview.png, v2-home-desktop.png, v2-home-mobile.png, v2-learn-mobile.png. A first mobile screenshot was stale after viewport resize; it was replaced after reload and reinspection. Browser actions used the actual local build, not an image mockup.

## Limits and gates

This is not full screen-reader, zoom, cross-browser or empirical learning-effectiveness testing. All old routes were directly tested, but every old exercise was not repeated. No new v2 lesson, graph, multidisciplinary calculation, authentic agent-run replay, physical measurement or approval mechanism is implemented. Stage 2–5 site-level acceptance gates remain open; the imported quality matrix must not be read as passing by documentation.

Stage 0 inventory/checks and Stage 1 Home/Learn implementation are prepared for owner review in a draft PR. Full curriculum acceptance, new slug/redirect selection, future scenario parameters and authentic-run capture remain unresolved. No merge, deployment, settings change or public v2 verification is claimed. The existing production site remains the original course until authorized release.
