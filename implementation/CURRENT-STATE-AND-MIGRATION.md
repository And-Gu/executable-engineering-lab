# Current state audit and content migration
Source: publicly connected GitHub `And-Gu/executable-engineering-lab` default branch observed on 2026-10-23. Do not interpret this as a fresh UI/browser test.

## Verified source architecture
- Homepage `site/src/pages/index.astro`: hero 'From engineering intent to working systems', introductory single-sensor model, chapter cards.
- `site/src/pages/learn/index.astro`: linear list with 12 lessons.
- Existing routes `site/src/pages/learn/01-engineering-intent.astro` through `12-integrated-environment.astro`.
- Shared `site/src/data/chapters.ts` indexes published lessons.
- `site/src/components/CoverageLab.astro` and `ProposalWorkspace.astro` support many lessons.
- `site/src/layouts/Layout.astro` provides shell and footer.
- Root `SITE_SPEC.md`, `DEMONSTRATOR_SPEC.md`, `MILESTONE_*.md`, `ROADMAP.md`, `AGENTS.md`; original canonical model/source/test layers.
- Historical `ROADMAP.md` records milestones and published Pages deployments. These are evidence of original releases, not approval of new v2 behavior.

## Legacy-to-v2 content map
| Existing chapter | Main migration use | Preservation |
|---|---|---|
| 01 Intent→Evidence | Ch 03–04 and reference lab | Keep V0 worked example |
| 02 Information Models | Ch 03, Ch 05 | Retain validation lessons |
| 03 Digital Threads | Ch 03, Ch 11 | Preserve typed relationships |
| 04 Executable Models | Ch 04 | Preserve exact calculation / method |
| 05 Experimentation | Ch 02, Ch 04 | Preserve comparison exercise |
| 06 Verification Evidence | Ch 09 | Preserve test/evidence distinctions |
| 07 Agentic Engineering | Ch 06, Ch 10 | Preserve task-contract review |
| 08 Agent Context | Ch 06 | Preserve context checklist |
| 09 Continuous Engineering | Ch 08 | Preserve true CI/evidence process |
| 10 Governance | Ch 09–10 | Preserve controls/authority limits |
| 11 Knowledge at Scale | Ch 11 | Preserve baseline/reuse reasoning |
| 12 Integrated Environment | Ch 12 | Preserve handover exercise in reference |

## Route migration requirements
1. Inventory *all* old public hrefs (including lessons, home, docs and social shares).
2. Introduce new chapters with new route slugs and keep old lesson slugs as redirects or fully accessible legacy pages until owner approves deprecation.
3. Never silently point a deep link to semantically unrelated content.
4. Update published chapter registry only after target pages are complete and checked.
5. Reconcile historical milestone docs as history; do not overwrite release revision references.
6. Avoid deleting old code, interfaces or fixtures until v2 parity and owner review.

## Key deficits to close
- Homepage currently introduces DMS geometry, not AI-native engineering.
- No explicit planning or progressive-spec chapters.
- Agentic lesson uses a *manual* simulation, not executed agent.
- Most chapters repeatedly use one radius/threshold proposal.
- DMS examples do not show authentic cross-discipline tensions and lead times.
- Repeated warnings displace narrative and varied learning.
