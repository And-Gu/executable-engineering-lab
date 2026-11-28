# Finding the current lessons from the T1 sources

Q86-20261123 · EEL-Q-S4-EDIT-89-P1 · attempt EEL-Q-S4-EDIT-89-P1-A01 · chapter editor · `gpt-6.2-astra` / `max` per dispatch. Published baseline B2 was `3d752d994ab5c47f865140ca0a005e13e6aa7f82`. The private edit started from `cd7d5f73cba7802935c80e36fb2bd54ea2326517`. [Assignment](../tasks.json) · [D13](../decisions.md) · [D22](../chapter-dispositions.md)

## Reader handoffs

Chapter 2’s scope link opens “The shared engineering question,” below the guide’s entrance. A note beside the question maps the old graph and model numbers, 03 and 04, to the published Chapter 4 relationship inspector and Chapter 5 arrival experiment. An entrance note points to the active manuscript index and explains how a chapter can be live while its manuscript still carries `status: draft`. [Chapter 2 finding](../chapter-reviews/02.md)

Chapters 2 and 3 also link to the T1 guide. Its entrance now points to the fixed-phase inputs, the three selectable relationships, both queue experiments, the Chapter 10 interface comparison, the Chapter 13 release decision, and the active wrap-up. Reference links directly to the decision record. Its entrance now routes the controller and adapter comparison to Chapter 10, the authority decision to Chapter 12, and the release decision to Chapter 13. Redirecting just the workshop’s links would leave readers entering from planning, Reference, or the source files themselves with the old numbering. [Source-routing finding](../history-reconciliation.md#hist-01--using-the-case-sources-to-locate-the-current-lesson)

## Checks

- Matched the numbers, manuscript IDs, titles, and routes of all fourteen active chapters to the B2 index and captured pages. Chapters 1–2 changed from `publication: review-in-pr` to `published`, and Chapters 3–10 from `publication: unpublished` to `published`. Reversing just those ten substitutions reproduced every assigned manuscript byte for byte, including the earlier chapter edits. [B2 publication inventory](../baseline-B2.json)
- Checked all sixteen added links. Five resolve to repository files. The other eleven reach seven active lessons. Each fragment occurs once in the SHA-256-verified B2 destination HTML. The incoming Chapter 2, Chapter 3, and Reference URLs match the three edited guides. Reference’s inputs, first-cycle rows, two-cycle record, and queue experiment also resolve. The Chapter 4 figure offers E07, E03, and E08 of the eight T1 edges. [Graph](../capture-b2/eel-v3-ch04-engineering-knowledge.html#change-impact-figure) · [Reference](../capture-b2/route__reference_.html#intersection-sources)
- Compared all 274 files in the private snapshot before and after. Exactly the thirteen allowlisted files changed. Removing only the added paragraphs reproduced all three original guides, including their 28 headings, historical identifiers, and physical-evidence qualifications. The public decision record pinned by Chapters 11–13 returned HTTP 200 and matched the original record’s SHA-256, `9d20b535e1e465e54b8885050a42803de43ce1988bf3137d23fda04f84e1c1dd`. Its interface comparison and role table still occupy their cited lines. [Pinned decision record](https://github.com/And-Gu/executable-engineering-lab/blob/05b071d8d5a08aec9017146175e0ac17b38f8dd3/project/v3/case-study/DECISION-CHAIN.md?plain=1#L50-L89)

The five T1 data files also matched their recorded source blobs. Their SHA-256 values before and after the edit are below. [Source blob inventory](../published-baseline.json)

| T1 file | SHA-256 |
| --- | --- |
| `source-graph-v1.json` | `ca9d676923f16e1e39a67cd772f26a403ced550a9280315f1d8ddc7bd35973f5` |
| `model-inputs-v1.json` | `18e2fe9ead1c8c0c1a30e8593cf43255a0f29696d367e10751315a075ba9997e` |
| `trace-v1.csv` | `f207af5896ddcd8859568ee1e54222ba243c12ec466dc66fb0ad6c76e461a4a7` |
| `two-cycle-run.json` | `e89c63a42a3ca061949835a60687db37f6f0cbd91ad5430c6a9b7b1b3dc2ae83` |
| `data-quality-v1.json` | `89172c6206ed4f9229374c96a2861bb25b1544ae0b8f008b5a99da2bdb2cca9d` |

These checks cover the private source changes and their destinations in the recorded public edition. The delivery owner has the candidate build and browser checks. Reader interpretation remains unmeasured.
