# Technical verification of the frozen course

**Return one Chapter 6 instruction to Stage 4.** The figure says each scenario repeats “its own eight arrivals and phases.” In each scenario, eight rows describe four arriving vehicles, two north–south and two east–west. Repeating the pattern gives eight vehicles over sixteen slots. Both the generated HTML and the component contain the wording. The calculation, reference rows, chapter text and displayed counts agree. I found no other material discrepancy in the engineering read. [Figure instruction](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/site/src/components/learning/TwoCycleExperiment.astro#L8) · [T1 inputs](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/case-study/model-inputs-v1.json#L67-L145)

**Finding S5-TECH-01, P1, high confidence.** A reader deciding which cohort to divide by could double the denominator. A one-sentence correction is sufficient, for example “Repeat each scenario’s eight-slot arrival pattern with the same fixed phase sequence.” Check the corrected generated prompt beside both scenario results. The finding was raised by the other whole-course reader and independently confirmed here. The calculations and verifications below belong to the D40 revision.

Q86-20261123 · EEL-Q-S5-TECH · EEL-Q-S5-TECH-A01 · executable example verifier. The assignment requested `gpt-6.2-astra` at maximum reasoning effort. Effective settings were unreported to this reviewer. I read the 14 active manuscripts in index order, the unnumbered companion, and Home, Learn, Lab and Reference. The frozen source was `206828b6f93c673cd09d688a0dc2204d05fd4b13`. Local `dist/build-information.json` names that SHA and build time `2026-11-24T06:26:23.313Z`. [Assignment](../tasks.json) · [Active index](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/INDEX.md) · [Candidate](https://github.com/And-Gu/executable-engineering-lab/commit/206828b6f93c673cd09d688a0dc2204d05fd4b13)

## Whole-course technical read

| Chapter | Source passage, exercise and handoff |
| --- | --- |
| 01 | A units check can save rework before assembly. Receiver timing and benefit to the operator require later observations. The figure distinguishes both funding decisions and labels the future-demand loop as a hypothesis. Both quiz keys respect those limits. [Receiver under load](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/01-the-new-engineering-paradigm.md#L38-L75) |
| 02 | Four groups of road users and staff motivate the case. The turning-car illustration raises a conflict the two queues cannot represent. The quiz asks for crossing distance, permissions and observations, and the handoff offers two investigations. [First workshop question](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/02-introducing-the-engineering-challenge.md#L18-L60) |
| 03 | One NS vehicle arrives on an empty green. A disagreement over service order changes the increment and backlog before the operations data request. The second quiz item changes the priority to crossings, which changes the investigation. [Stop and replan](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/03-planning-under-uncertainty.md#L48-L83) |
| 04 | E03 points from model to function. Working back to the model identifies an assumption to inspect. E07/E08 propose impacts, E06 targets an unrun check and an unresolved target stays open. Diagram and text may show the same SysML elements. All three quiz keys preserve these distinctions. [Source, view and review candidates](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/04-engineering-knowledge-as-code.md#L36-L91) |
| 05 | Original and edited B have equal queues after slot 2 and first differ after slot 3's arrivals and service. The timeline and saved observation agree. The quiz keeps the baseline and qualifies the mean. Its second cycle is a proposed investigation at this point in the sequence. [Move and record one arrival](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/05-learning-through-models-and-prototypes.md#L62-L98) |
| 06 | The longer experiment uses the original scenarios. B's slot 9 tests carry-over. The quiz distinguishes a boundary check, the provenance of the spreadsheet value 20, and a proposed timed test under load. The figure instruction contains the count discrepancy reported above. [Carry the queues](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/06-engineering-data-from-measurements-to-decisions.md#L22-L50) |
| 07 | The traffic engineer selects continuous original A/B. The model owner checks the rules and reference rows. The brief requires both directions and explicitly limits what B's NS departure tests. The three items check specification, report and independent failing-test behavior. [Approve an observable brief](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/07-spec-driven-development-without-waterfall.md#L18-L53) |
| 08 | The coordinator may select original B and rerun. The trace stays read-only. The worked answer diagnoses the reset, and an EW-loaded example exposes missing coverage. Quiz feedback distinguishes a wrong input from a proposed change of rule. [Protect and challenge the reference](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/08-directing-ai-engineering-agents.md#L34-L87) |
| 09 | Ambiguity, wrong input, insensitive check, broken state/report and a changed question lead to different actions. Wider delegation requires a correct prediction and a check that catches the reset. Permission to implement carry-over is explicit. The digital thread links back to the simulation, while the handoff asks for a visible indication. [Diagnose and authorize](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/09-engineering-in-small-reviewable-increments.md#L26-L76) |
| 10 | The two contracts use acknowledgment for different events. Sequence and clock condition reuse of the trace. The bench image illustrates the proposed observation. Missing imagery leaves visible amber open, and a connector move reopens fit and feedback mapping in the quiz. [Receipt, request and observation](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/10-from-models-to-an-integrated-product.md#L22-L78) |
| 11 | A stale image cannot confirm the present command. The excerpt, contract inspection, proposed display test and proposed physical and maintainer observations have different scopes. The integration reviewer evaluates evidence and the accountable product decision-maker defers. [Verify the excerpt, plan a product test](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/11-verification-validation-and-engineering-evidence.md#L42-L86) |
| 12 | Maya can authorize a helper's source access and one retry. Owners resolve message and recovery meanings, the reviewer judges the observation, and Maya owns A/B compatibility. The A/C quiz requires new configuration-specific evidence. [Bound the grant](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/12-governance-and-engineering-authority.md#L18-L69) |
| 13 | The exercise assumes an eligible diagnostic wording change. The required reviewed translation remains on the path to releasability. The figure reaches eligibility for a decision. Quiz feedback distinguishes reviewing meaning, opening the linked edition and observing a technician use it. [Hold the whole package](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/13-continuously-integrated-engineering.md#L18-L79) |
| 14 | The two figures promote selected learning and distinguish reusable methods from fresh evidence. The three final keys require governed definitions, sufficiently independent checks and complete service material. The companion asks whether maintenance saves enough work on comparable changes. [Use the earlier method on the next configuration](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/14-from-engineering-intent-to-continuous-integration.md#L74-L128) |

Home and Learn list the fourteen current chapters in order and label the companion separately from the older courses. Lab links directly to the two queue controls and retains the single-sensor exercise. Reference links the fixed inputs, traces and contract discrepancy and explains the V0 coverage result. For the V0 scenario, my independent cell-center count gave 3,852 of 10,000 cells, or 38.52% against 50%. This is the intended engineering FAIL. The two current intersection images have descriptive alternatives and 1200 × 800 local assets. The companion distinguishes one-off manual checking, recurring review savings, costs of maintenance and post-release customer outcomes. [Lab and Reference checks](check-94.md) · [Companion](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/bonus/building-the-machine-that-builds-the-machine.md#when-does-building-it-pay-off)

## Independent queue replay

I used Python 3.9.6 and its standard library. My replay reads the T1 arrivals and phase labels, appends individual arrival-slot numbers to two FIFO queues, removes at most one from the matching green direction, then records both closing lengths. For every direction and row I asserted that opening queue plus arrivals equals departures plus closing queue. Comparing the computed fields, scenario IDs and slot numbers with the CSV matched all 16 original rows. A’s first NS green yielded one departure and zero waiting. Serving before the arrival would give zero departures and one waiting. The declared slots have no physical duration. [Inputs and event order](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/case-study/model-inputs-v1.json#L11-L45) · [Saved CSV](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/case-study/trace-v1.csv)

Pairs below are north–south, east–west. Each entry in the middle column is a queue after service, in slot order. Every pattern has arrivals (2,2).

| Pattern | Closing queues at slots 1 through 8 | Departures in 8 slots | Waiting at 8 | Accrued vehicle-slots |
| --- | --- | --- | --- | ---: |
| A | (0,0) (0,1) (1,1) (1,1) (1,0) (1,0) (1,0) (1,0) | (1,2) | (1,0) | 9 |
| B | (0,2) (0,2) (2,2) (2,2) (2,1) (2,0) (2,0) (2,0) | (0,2) | (2,0) | 21 |
| B with one NS arrival moved from 3 to 2 | (0,2) (0,2) (1,2) (1,2) (1,1) (1,0) (1,0) (1,0) | (1,2) | (1,0) | 15 |

At B’s slot 2 the original has arrivals/departures (0,0)/(0,0), the edit (1,0)/(1,0). Both end at (0,2). At slot 3 NS amber admits two NS vehicles in the original and one in the edit. Neither serves a vehicle. The edit saves one vehicle-slot in each of slots 3–8. The original observation and its proposed follow-up have separate fields. [Saved observation](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/case-study/data-quality-v1.json#L31-L50)

| Row in original B | Opening | Arrivals | Departures | Closing |
| --- | --- | --- | --- | --- |
| 8, all-red | (2,0) | (0,0) | (0,0) | (2,0) |
| 9, NS green, continuous | (2,0) | (0,2) | (1,0) | (1,2) |
| 9, NS green, reset | (0,0) | (0,2) | (0,0) | (0,2) |
| 16, all-red, either case | (2,0) | (0,0) | (0,0) | (2,0) |

In 16 continuous slots A had (4,4) arrivals, (3,4) departures and (1,0) pending. B had (4,4), (2,4) and (2,0). Counting two independent B windows as one run loses two NS vehicles at the join. Both original cases enter the boundary with EW empty. Adding three EW arrivals to B’s slot 8 gave opening (2,3), departures (1,0) and closing (1,5) at slot 9. An EW-only reset can therefore be distinguished even with the same NS departure. The original two-cycle run matched its saved boundary rows and all four recorded SHA-256 source digests. [Run record](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/case-study/two-cycle-run.json) · [Nonempty EW test](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/models/intersection/queue.test.ts#L34-L40)

**Completed-cohort means.** In a separate replay I stopped new arrivals at the named horizon, continued the fixed phases until both queues emptied and checked the occupancy sum against the sum of departure-slot minus arrival-slot for every vehicle. Vehicles arriving and leaving in the same slot contribute zero. The original B cohort still has two open waits after slot 8. In the edit a single vehicle waits at 8 and leaves on the next green. Its 15 accrued vehicle-slots become a complete total only after that departure.

| Cohort | Vehicle-slots accrued by horizon | Last departure | Complete vehicle-slots / cohort | Mean in abstract slots |
| --- | ---: | ---: | ---: | ---: |
| Original B, four arrivals in slots 1–8 | 21 | 10 | 22 / 4 | 5.5 |
| Edited B, four arrivals in slots 1–8 | 15 | 9 | 15 / 4 | 3.75 |
| Original B repeated, eight arrivals in slots 1–16 | 43 | 18 | 44 / 8 | 5.5 |

These extended runs answer a defined cohort question. The saved T1 experiment reports directional queue counts. An individual real vehicle’s wait requires matched observations, and a traffic claim requires representative arrival and phase histories. [Original metric definition](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/case-study/model-inputs-v1.json#L58-L65) · [Separate eight-arrival procedure](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/06-engineering-data-from-measurements-to-decisions.md#L42-L44)

## From a model row to a release decision

The pinned historical CSV row is `A,3,NS_AMBER,1,0,0,0,1,1`. Reusing it as the expected *request* depends on the intended schedule and a clock mapping to checkpoint three. A sample taken at T1 checkpoint two, or an approved schedule whose initial green extends through the third checkpoint, could legitimately show a green request. A clock aligned to T1 does not observe a lamp. [Historical row used by the closing figure](https://github.com/And-Gu/executable-engineering-lab/blob/9b8d57b0a18846ec22d927bd76447855b68ce886/project/v3/case-study/trace-v1.csv?plain=1#L4) · [Closing figure](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/site/src/components/learning/EvidenceHandoffs.astro#L3-L21)

I ran Chapter 11’s printed Python function for north head and command 42. Absent observation, north/41 amber and south/42 amber each returned `received, indication unknown`. North/42 amber returned `observed amber`. This executes the excerpt. An independent frame during the identified command at the agreed head, viewpoint, time and configuration can establish the visible state. The same green frame fits both a head that was already green and one that changed from dark. Testing the transition requires the prior state of that head and the subsequent state tied to the command. The contracts establish a semantic discrepancy by inspection. The configured product, physical bench and representative maintainer trials are proposed. The interface owners reconcile meanings, the integration reviewer assesses evidence and the accountable product decision-maker, named Maya in Chapter 12, defers compatibility. [Historical authority record](https://github.com/And-Gu/executable-engineering-lab/blob/05b071d8d5a08aec9017146175e0ac17b38f8dd3/project/v3/case-study/DECISION-CHAIN.md?plain=1#L84-L89)

The Chapter 13 clock starts with the lead’s acceptance of an eligible, bounded request. It stops when the authorized lead records the complete, identified whole-product candidate as releasable. The fictional target is under 24 hours. An outstanding required translation keeps this clock running. Where rig and language waits overlap, the elapsed interval counts once. Operations chooses deployment separately. DORA’s software metric runs from commit to production deployment. The exercise supplies neither an elapsed-time measurement nor a deployed intersection. [Course clock](https://github.com/And-Gu/executable-engineering-lab/blob/206828b6f93c673cd09d688a0dc2204d05fd4b13/project/v3/manuscripts/revised/13-continuously-integrated-engineering.md#L18-L24) · [DORA metric](https://dora.dev/guides/dora-metrics/)

## Commands and evidence ownership

All direct shell checks listed here exited 0 in the assigned checkout. Tool versions were Git 2.54.0, Python 3.9.6, Node v22.23.3, npm 10.9.9 and parse5 8.1.1.

| Direct command | Result |
| --- | --- |
| `git rev-parse HEAD`, `git status --porcelain=v1`, `cat dist/build-information.json` | The clean source and local build agreed on the full frozen SHA. |
| `python3 -B -`, independent FIFO and CSV replay described above | Exact (window area, last departure, completed area, cohort size, mean) output for B was `21 10 22 4 5.5`, for edited B `15 9 15 4 3.75`, and for repeated B `43 18 44 8 5.5`. |
| `node project/v3/case-study/run-two-cycles.mjs \| cmp - project/v3/case-study/two-cycle-run.json`, with shell pipefail | Byte-for-byte match, including source hashes. |
| `node project/v3/case-study/verify-fixture.mjs` | 12 nodes, 8 typed edges, 16 reference rows, A/B pending 1/2. LEGACY-C withheld and the edited B observation verified at 1 vehicle. |
| `node --input-type=module -`, direct canonical `runQueue`, `moveArrival`, `runTwoCycles` with cloned inputs and strict assertions | Fractional NS at slot 3 and an unknown phase there each threw `Invalid arrivals or phase at slot 3.` Seven arrival rows threw `Each slot needs a phase and an arrival record.` Negative initial NS threw `Invalid initial queue.` Moving from an empty source threw `Move an existing arrival to a different slot.` Original B retained its inputs. |
| `python3 -B -`, execute the Chapter 11 fenced function and vary head/command | All four outcomes are reported above. |
| `node --input-type=module -`, parse the existing `dist` HTML with parse5 | All 827 same-site links resolved across 19 learning surfaces. All 192 fragment references led to exactly one target. For all fourteen quizzes, 38 prompts, 114 choice texts with their grading flags and feedback strings and 38 native no-script answers matched their JSON. Each item has one correct choice. |

<details>
<summary>Reproduce the independent queue and cohort results from the repository root</summary>

The output columns are the scenario, vehicle-slots accrued at the stated horizon, final departure slot, total vehicle-slots for the completed cohort, cohort size and mean wait in slots.

```sh
python3 -B - <<'PY'
from collections import deque
from pathlib import Path
import csv, json
p = Path("project/v3/case-study")
m = json.loads((p / "model-inputs-v1.json").read_text())
phase = m["phase_sequence"]
names = ("NS", "EW")
a, b = [s["arrivals"] for s in m["scenarios"]]
edit = [row.copy() for row in b]
edit[2]["NS"] -= 1
edit[1]["NS"] += 1
def replay(records, drain=False):
    queues = [deque(), deque()]
    rows, waits = [], []
    while len(rows) < len(records) or (drain and any(queues)):
        i = len(rows)
        green = phase[i % len(phase)]
        counts = records[i] if i < len(records) else dict.fromkeys(names, 0)
        before = tuple(map(len, queues))
        served = []
        for d, q in zip(names, queues):
            q.extend([i] * counts[d])
            n = int(bool(q) and green == d + "_GREEN")
            if n:
                waits.append(i - q.popleft())
            served.append(n)
        after = tuple(map(len, queues))
        assert all(before[k] + counts[d] - served[k] == after[k] for k, d in enumerate(names))
        rows.append([i + 1, green, *(counts[d] for d in names), *served, *after])
    return rows, waits
with (p / "trace-v1.csv").open() as f:
    ref = list(csv.reader(f))[1:]
assert [[label, *map(str, row)] for label, records in (("A",a),("B",b))
        for row in replay(records)[0]] == ref
for label, records in (("A",a),("B",b),("edited B",edit),("B repeated",b+b)):
    window, _ = replay(records)
    completed, waits = replay(records, drain=True)
    area = lambda rows: sum(row[-2] + row[-1] for row in rows)
    assert area(completed) == sum(waits)
    print(label, area(window),len(completed),area(completed),len(waits),sum(waits)/len(waits))
PY
```

</details>

Here is a directly reproducible invalid-input check from the repository root.

```sh
node --input-type=module - <<'JS'
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { runQueue } from './models/intersection/queue.mjs';
const m = JSON.parse(readFileSync('project/v3/case-study/model-inputs-v1.json'));
const b = structuredClone(m.scenarios.find(s => s.id === 'B').arrivals);
b[2].NS = 0.5;
assert.throws(() => runQueue(m, b), { message: 'Invalid arrivals or phase at slot 3.' });
JS
```

**Delivery owner evidence.** I inspected the records from `q86-delivery`. Its combined preview and clean release each passed typecheck, build with research isolation, unit, evidence and proposals. The clean release command was `DELIVERY_ACTOR=q86-delivery npm run delivery -- test --task q86-combined-release` with 99/99 tests. CI run 45340443947 belonged to this candidate. At D40 the public baseline was B2, `3d752d994ab5c47f865140ca0a005e13e6aa7f82`. [Owner checks](local-checks.json) · [Integration record](integration.md) · [Candidate CI](https://github.com/And-Gu/executable-engineering-lab/actions/runs/45340443947)

The owner’s Chrome 158.0.8127.37 record identifies the same locally served build. I inspected the JSON and the two Chapter 1 screenshots. All 114 submitted responses matched expected feedback, all 14 quizzes restored initial focus on reset, all 14 chapter widths matched a 390-pixel viewport and all 19 visits recorded zero runtime exceptions. The owner operated the keyboard controls, ran both queue experiments, toggled the release decision, exercised the Lab and opened the Chapter 1 and 5 no-script versions. The screenshots show six stations, text alongside the return paths at desktop width, stacked return text at narrow width, and a dashed path explicitly marked conditional. I repeated the HTML check against the preserved D40 build and quiz inputs read with `git show 206828b:<path>`. The two screenshot hashes match that browser record. Quiz length remains a potential cue, with 31/38 uniquely longest correct options by characters and 26/38 by words. Its effect on people requires participant observations. [Frozen link inventory](rendered-links-206828b.json) · [Owner browser record on D40](browser-candidate-206828b.json) · [Desktop](investment-desktop.png) · [Narrow](investment-narrow.png) · [Quiz comparison](check-93.md)

**External evidence.** My generated inventory also yielded 109 distinct external destinations. The owner’s HTTP/Git checks and alternate page reads leave the LinkedIn profile unconfirmed. I directly inspected Giffin’s eight-year sensor case, Hedberg’s manufacturing prototype and lowRISC’s selected pull-request tests and fuller nightly suite. Each supports its named example. NASA distinguishes demonstrating conformity to stated requirements from observing intended use. The guidance supplies vocabulary and methods for the fictional bench plan. [External check record](external-links.json) · [Sensor case](https://research.tudelft.nl/en/publications/change-propagation-analysis-in-complex-technical-systems/) · [Manufacturing prototype](https://www.nist.gov/publications/using-graphs-link-data-across-product-lifecycle-enabling-smart-manufacturing-digital) · [lowRISC](https://lowrisc.org/news/how-we-run-ci-for-our-open-source-silicon-projects/) · [NASA verification](https://www.nasa.gov/reference/5-3-product-verification/) · [NASA validation](https://www.nasa.gov/reference/5-4-product-validation/)

I also checked the companion’s economic examples. The NBER authors report a matched observational design with attenuating estimates from commits to releases. McKinsey’s Exhibit 3 projects 11.4% CAGR for integration, verification and validation services and 9.7% for software development in light vehicles in its 2025–35 Current Trajectory scenario. The 2021 UK mandate provides contractual grounds for digital information requirements within its defined scope. These sources support different claims, and the return from use to future buyer demands remains a hypothesis. Neither the technical checks nor the recorded browser runs establish reader learning, physical behavior, operational release or customer value. [NBER working paper](https://www.nber.org/papers/w35275) · [McKinsey Exhibit 3](https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/mapping-the-automotive-software-and-electronics-landscape) · [UK mandate, Annex B](https://www.gov.uk/government/publications/transforming-infrastructure-performance-roadmap-to-2030/transforming-infrastructure-performance-roadmap-to-2030#annex-b-information-management-mandate)
