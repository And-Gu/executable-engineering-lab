# Independent verification of the Chapter 6 cycle description

**Pass. WC-01 is resolved at `c2f9cb211de7e204e08920b8cf3d164d7195b866`.** The figure tells the reader that both queues carry over and the model repeats eight phase slots with four vehicle arrivals per cycle. Eight vehicles enter across the two cycles of either selected scenario. I found zero residual defects in the correction. [Finding WC-01](whole-course.md) · [Decision D41](../decisions.md)

Q86-20261123 · EEL-Q-S4-CHECK-90-P2 · EEL-Q-S4-CHECK-90-P2-A01 · independent change verifier. The dispatch requested `gpt-6.2-astra` at maximum reasoning effort. Effective settings were unreported. The candidate’s direct parent is `206828b6f93c673cd09d688a0dc2204d05fd4b13`. Comparing the two Git trees showed one replaced line in `site/src/components/learning/TwoCycleExperiment.astro`, line 8. Only its second sentence changed. `git diff --check` passed. [Assignment](../tasks.json)

## T1 counts and queue carry

I summed the eight rows of each original arrival pattern, then replayed the sixteen slots in independent Python using T1’s arrival-before-service rule. Counts in parentheses are north–south, east–west.

| Pattern | Nonzero arrivals in one cycle | Vehicles in 8 slots | Vehicles in 16 slots | After slot 8 and before slot 9 arrivals | After slot 9 | After slot 16 |
| --- | --- | --- | --- | --- | --- | --- |
| A, staggered | One NS in slots 1 and 3, one EW in slots 2 and 6 | 4 (2, 2) | 8 (4, 4) | (1, 0) | (1, 0) | (1, 0) |
| B, clustered | Two EW in slot 1, two NS in slot 3 | 4 (2, 2) | 8 (4, 4) | (2, 0) | (1, 2) | (2, 0) |

All sixteen original first-cycle CSV rows, the saved two-cycle observations and its four source digests matched. Both original EW queues empty by slot 8. In a separate in-memory probe of the candidate model, I added one EW arrival to B’s slot 8. Slot 9 opened at (2, 1), served one NS vehicle and closed at (1, 3), exercising carry for two nonempty queues. In the chapter’s separate completed-cohort calculation, original B admitted eight vehicles through slot 16 and cleared in slot 18 with admissions stopped. Its 44 vehicle-slots divided by eight give 5.5 slots.

## Rendered chapter and handoffs

The local HTTP manifest identified the candidate and build time `2026-11-24T06:45:35.694Z`. I fetched the Lab and Chapters 5, 6 and 7 and compared their served bytes with both build directories. The Lab and adjacent chapters matched their parent versions byte for byte. Replacing the single figure sentence in the parent’s Chapter 6 produced exactly the candidate HTML, including the quiz, form labels and saved-run link. The Lab links directly to the corrected figure. Chapter 5 hands off original B’s two waiting vehicles, and Chapter 7 specifies the same original eight arrival rows, sixteen slots and boundary departure. [Build comparison](build-delta.json)

I read the served no-JavaScript disclosures and checked both scenarios’ counts and all three quiz answers and explanations against their sources. The owner’s Chrome run on this revision displayed the corrected instruction with scripting enabled and disabled, produced the four boundary rows above for each scenario and matched feedback for all nine Chapter 6 choices. Quiz reset returned focus to the first choice. My direct checks cover local HTML, source and synthetic model results. The browser actions belong to the owner’s run. Publication, field traffic and reader learning were outside this verification. [Browser record](browser-candidate.json)
