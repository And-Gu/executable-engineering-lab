# Engineering Data article publication checks

2026-11-06: owner requested publication of PR #31 material. This release publishes the full editorial article, its build-time comparison and Chapter at a Glance introductions for all thirteen available articles. It does not complete the proposed interactive investigation tool or the other v2 chapters.

- `npm run check`: 86 tests in six files passed; Astro/TypeScript reported zero errors, warnings or hints; source validation and 17-page build passed.
- `npm run evidence`: canonical result remains 38.52%, FAIL against 50%.
- `npm run proposals`: radius proposal 63.76% / PASS; threshold proposal 38.52% / PASS, both unapproved analyses.
- Built-site internal route and fragment inspection passed. Home and Learn expose the new article separately from the original twelve lessons.
- Browser smoke check: article manuscript, calculated table and source links present; Learn/Home links use the Pages base path. At 375 × 812 the page width remains 375px; table is focusable and scrolls with ArrowRight. Summary cards adapt to two columns.
- Original lab: baseline FAIL, radius 45 PASS, reset restores baseline FAIL.
- The shared canonical scenario supplies geometry and the requirement supplies threshold; comparison radii are explicit independent overrides. Power and mounting assumptions remain fictional. No canonical model, source or assertion changed.

Limitations: no physical evidence, actual agent execution, linked plots or raw/curated/derived switching is supplied. Browser checks are smoke checks, not a full screen-reader or cross-browser audit. Generated local evidence records the actual working-tree status; CI provides revision-bound checks after commit. Publication status must be checked against the subsequent GitHub Pages workflow.
