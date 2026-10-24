# DMS demonstrator learning plan — preserve V0, extend through isolated increments

## Existing V0 (protected)
Single fixed ideal circular sensor in 100×100 rectangular area; 100×100 cell-center sampling; source radius 35 at (50,50); geometric coverage 38.52% vs educational 50% criterion → engineering FAIL. Unit tests may PASS. Preserve canonical IDs, YAML, Zod schemas, numerical method and exact baseline output. It does not estimate detection probability or hardware performance.

## V2 educational extension strategy (future proposals)
All numbers for later scenarios are synthetic and **must be tagged hypothetical**. New exploratory data, separate schemas/model namespaces; no alteration to V0 canonical source behavior.

### D1 — Cross-disciplinary trade-off (Chapter 04)
Two simplified sensor placement architectures or mounting alternatives; coverage, hypothetical power budget, cable distance, mount restriction and procurement lead time. One view reveals a gain in coverage that conflicts with another discipline. Do not imply validated physics.

### D2 — Planning and specification continuity (Chapters 02, 05)
A named roadmap initiative: improve monitored-area usefulness within power and installation constraints.
Exploration tickets, option/assumption decisions, next release capability, and a small bounded specification are connected by *references*, not fake completed gates.

### D3 — Agent change story (Chapters 06–07)
Use a **real captured** agent run on a harmless isolated educational branch or fixture: objective, available context, tool commands, exact candidate diff, independent check output, review commentary, timestamp and source revision.
If no authentic run exists, show a clearly labeled mock walkthrough and leave the authentic-run acceptance gate open. Never fake a transcript.

### D4 — Cross-disciplinary integration case (Chapter 08)
Track independent readiness of model assertions, software tests, simulated electronics interface contract, mechanical installation constraints and scheduled physical tests. A green software build does not make physical tests green.

### D5 — Evidence and configuration case (Chapters 09–12)
Claim–argument–evidence paths; variant A/B; supplier or interface revision; reviewer approval still a named human decision. Reuse only evidence demonstrated applicable to exact configuration and assumptions.

## Scope discipline
Propose D1–D5 as separate staged PRs. Maintain V0 UI/lab, accessible paths, tests, evidence exports and source references until replacement routes are feature-parity verified. Build new lessons around authentic capability, not UI that promises unavailable backend behavior.
