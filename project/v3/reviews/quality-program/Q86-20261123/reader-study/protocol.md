# First reader sessions

**Human learning outcomes on the D42 release candidate are unobserved.** Use this kit for a 35–45 minute session with a real reader. A first round could include four to six people across product leadership, integration, service and small engineering teams, with different levels of familiarity. That range is a planning choice. Readers need no traffic-control, coding or agent experience.

## Before the session

1. Use the course at revision `c2f9cb211de7e204e08920b8cf3d164d7195b866`, the candidate reviewed in PR #97. On the review machine, open Home and verify that the manifest’s `source_commit` matches that full revision. For a remote session, give the reader control of the shared course window or a reachable copy with the same manifest. Record the actual study URL with access tokens removed, plus the revision. Keep sessions on a different revision in their own round. [Local Home](http://127.0.0.1:4390/executable-engineering-lab/) · [Local manifest](http://127.0.0.1:4390/executable-engineering-lab/build-information.json) · [Course PR #97](https://github.com/And-Gu/executable-engineering-lab/pull/97) · [Frozen source index](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/manuscripts/revised/INDEX.md)
2. Select three cards from A–E before meeting the reader. Rotate the selection across the round so every card is offered. Finish each session with F. Record the order, starting page and prior exposure to this course. Allow roughly five minutes for the opening, six or seven per selected card, seven for F and four for closing discussion. Let the reader skip or stop.
3. Copy the [blank worksheet](observations.md) to access-controlled storage outside Git. Agree who can see the notes, the deletion date and a way to withdraw them. Take notes only with consent. Use notes by default. Obtain separate explicit agreement for any recording and for sharing any quotation. Use fictional examples, a session code, broad role and prior familiarity. Keep names, employers, contact details, private URLs and company material out of the worksheet. The facilitator can also take notes.

### Reopen the course preview

The local links work on the machine serving the course. To recreate the preview on another machine after the review server stops, use Git, Node 22.23.3 (the version in `.nvmrc`) and npm 10. Run these commands in a new directory. Open the address Astro prints with the path `/executable-engineering-lab/` and check `build-information.json` there before handing the course to the reader. A new build will have its own build time. [Repository instructions at the study revision](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/README.md)

```sh
git clone --no-checkout https://github.com/And-Gu/executable-engineering-lab.git eel-reader-study
cd eel-reader-study
git fetch origin c2f9cb211de7e204e08920b8cf3d164d7195b866
git switch --detach c2f9cb211de7e204e08920b8cf3d164d7195b866
npm ci
npm run build
npm run preview -- --host 127.0.0.1 --port 4390
```

## Introduction and participant cards

Read the opening aloud. Show only the quoted text for the current card. Give each follow-up after the reader has answered the preceding question. Every reader offered that card receives its printed follow-ups. Keep the scoring key, source links below it and the worksheet off the shared screen.

> We’re trying out the course material. You can use the course, a calculator and your usual reading tools. Please tell me what you’re looking for and what you think the evidence means. Use invented examples. You may skip anything or stop at any time. What would you expect to be able to do with this course?

Start at Home and let the reader find their route. The opening question is unscored.

### A

> In the course’s original arrival pattern B, stop just after slot 5. Operations wants to know how much waiting the vehicles that have arrived have experienced so far, and what their eventual average wait will be. What can you report from those rows? Show how you got it. If you need more information, what would you do next?

### B

> A colleague’s B run shows one north–south arrival and one north–south departure in slot 2. They say the queues at the end of that slot agree with the original. Show how you would investigate. What would you ask an agent to do with what you found?
>
> The colleague now wants each of the two windows to start empty. What would you do with that request, and who can decide?

### C

> A bench log shows a north–south green request at sample three. For each of these separate cases, what would you report about the request, and why?

Give each fact separately. Each case starts afresh.

> 1. The approved schedule follows the original model. Sample three corresponds to slot three.
> 2. The approved plan deliberately changed its third phase. The new phase is unspecified here. Sample three corresponds to the third step of that plan.
> 3. The original schedule applies. A clock offset places sample three at slot two.
>
> The log also shows a receipt for the command. A maintainer asks what color was visible at the head at that moment, and whether it changed from dark to green. What evidence would let you answer each question?

### D

> A diagnostic wording change has been accepted. The display and link work in the reviewed editions. One required service translation still awaits review and the other deliverables are ready. What decision can the team take today? Who makes it, and what would let the team take its next decision?
>
> How would you measure the time this work takes across the next few comparable requests?

### E

> A pump service team catches unit errors by hand. Its shared integration rig has a two-week queue. You have one engineer-week to spend. What would you try first, and what information could change that choice?
>
> On later, comparable changes, the rig is available and the service-language review finishes last. Would you spend the week the same way? Why?
>
> A buyer asks for a shorter turnaround after receiving the latest update. What would you look for before connecting those events?

### F

> Pick a fictional change in a different engineering setting from the ones we have discussed. What decision does the team face? What, if anything, would you take from the course? Walk me through the first step, what evidence would change your mind and who would act on it.

Offer the choice of their own fictional setting or the following brief before the reader starts F. The same questions about the decision, evidence and person responsible apply in either version. Record the choice.

> A print shop changes paper stock for a folded leaflet. The previous batch folded cleanly. How would the team decide whether to use the old setting on the new stock?

## Facilitation and scoring key

During silence give the reader time. If they ask for help, record what they had already found and where they stopped. Offer a hint or a chance to skip. Classify each intervention and record its wording and timing.

- **Neutral support** includes rereading the prompt, “What are you looking for now?” and reader-directed access support. Record any effect on navigation.
- **Navigation help** identifies a chapter, source, figure or control the reader had yet to find. Capture the discovery outcome before giving the location.
- **Reasoning help** supplies a clue, interpretation or comparison. Record which parts the reader subsequently explained. Flag help carried over from an earlier card when it supplies a later answer or route.
- **Answer supplied** means the facilitator explains the result. Log that separately from the reader’s attempt and leave debriefing until the end.

Independently choosing to inspect a worked answer or quiz is ordinary course use. Record it and listen for how the reader applies it to this case.

Use these four outcomes per card. Record which of the required parts below the reader demonstrated before and after any help. Reasoned alternatives and ordinary language count.

| Outcome | Decision rule |
| --- | --- |
| Independent | The reader demonstrates all required parts. The printed scenario, standard follow-ups, neutral prompts and access support that conveys no answer or route are allowed. |
| Completed with help | The reader demonstrates all required parts after a route or content hint. Capture their own explanation and the help that made it possible. |
| Not completed | The reader starts but leaves a required part unresolved, stops, or only repeats an answer the facilitator supplied. Preserve partial reasoning and the first difficulty. |
| Not attempted | The reader never starts the card. Mark whether it was unselected, time ran out before it was offered, or it was offered and skipped. |

**A · Waiting accrued by slot 5.** Look for three parts.

1. Four vehicles have arrived in original B. One has departed. After service in slot 5, two are still waiting north–south and one east–west.
2. The reader adds the two queues after service in each of the five rows. The counts are 2, 2, 4, 4 and 3, totaling **15 vehicle-slots**. Dividing by four gives the waiting accrued so far per arrival.
3. Three waits remain open. To obtain the eventual mean for those four vehicles, continue the phases without new arrivals, count through clearance and divide the complete total by four. Matching the four arrivals to their departures is another valid method. An individual wait needs that vehicle’s matched records. Field delay needs field observations. Credit a sound way to finish the calculation.

If a reader cites another result, use this table to identify which vehicles, rows and units they used. Only the first row belongs to the card. [Original T1 input and event order](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/case-study/model-inputs-v1.json) · [Original trace](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/case-study/trace-v1.csv) · [Chapter 5 comparison](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/manuscripts/revised/05-learning-through-models-and-prototypes.md) · [Chapter 6 measurement method](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/manuscripts/revised/06-engineering-data-from-measurements-to-decisions.md#carry-the-queues-through-a-second-cycle)

| B pattern and last slot counted | Vehicles admitted | Still waiting after service (NS, EW) | Accrued waiting (vehicle-slots) |
| --- | ---: | --- | ---: |
| Original through slot 5 (card A) | 4 | 2, 1 | 15 |
| Original through slot 8 | 4 | 2, 0 | 21 |
| Edited through slot 8 (one NS arrival moved from slot 3 to slot 2) | 4 | 1, 0 | 15 |
| Original repeated through slot 16 | 8 | 2, 0 | 43 |

In Chapter 6, each original pattern admits four vehicles per eight-slot cycle, two in each direction. Both queues carry into the second cycle. If admissions stop after one cycle, original B clears in slot 10 with 22 vehicle-slots across four vehicles. If admissions stop after two cycles, it clears in slot 18 with 44 vehicle-slots across eight. Both completed means happen to be 5.5 slots. The chosen rows and cohort tell the facilitator how the reader reached the answer.

**B · What the agent may investigate.** Require a trace to the original T1 inputs and reference row, a bounded next action and the authority decision. Original B has zero north–south arrivals and departures in slot 2. In Chapter 5’s edit one arrives and departs there and the queues agree at (0, 2). The first queue difference is at slot 3. The row suggests the edit. The agent can check the actual input revision, select original B and rerun against the saved reference. A persistent discrepancy needs the disputed row and rule. Chapter 8 permits running the model and writing a report. Chapter 9 adds specific permission to implement and test carry-over. The traffic engineer decides whether to authorize independent windows, records a new brief and preserves the original run and protected checks. Repeating the changed calculation with another agent offers little independent evidence. [Chapter 8 investigation](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/manuscripts/revised/08-directing-ai-engineering-agents.md#coordinate-several-agents-around-one-engineering-outcome) · [Chapter 9 permission and change of question](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/manuscripts/revised/09-engineering-in-small-reviewable-increments.md#the-digital-thread)

**C · Request, indication and transition.** Require the three case judgments and an observation plan for both physical claims. (1) Slot 3 calls for north–south amber. Green is a request discrepancy to investigate. (2) Consult the new approved phase. Its expected value is open in the card. (3) Slot 2 calls for north–south green, consistent with the mapped request. Receipt shows message arrival. A separate observation at the agreed viewpoint must match the head, command, time and configuration to establish visible color. A dark-to-green transition needs the same head observed dark before and green after the command. A missing image leaves the outcome open. The illustrated bench and maintainer trial are proposals. [Chapter 10 schedule and clock](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/manuscripts/revised/10-from-models-to-an-integrated-product.md#keep-the-model-as-a-test-reference) · [Chapter 11 evidence and decision](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/manuscripts/revised/11-verification-validation-and-engineering-evidence.md#record-the-human-decision)

**D · The whole-product decision and its clock.** Require both the disposition and the comparison. The authorized release lead holds this illustrative candidate. After the reviewer approves the translation, the team packages it, checks that the correct diagnostic opens it and confirms the other evidence still applies to this configuration. The lead can then record releasability. The manifest ties the running product, applicable operator/service editions, logistics and training to their reviews. Operations selects deployment. The reader may point to the release example or figure and describe the record the lead would make. For each similarly scoped, eligible request the clock starts at acceptance and ends when the lead records that the whole candidate is releasable. A hold leaves the clock running. Record open requests with elapsed time and pending work, overlaps once, and quality or rework alongside lead time. The less-than-24-hour figure is a fictional target. [Chapter 13 clock, evidence and decision](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/manuscripts/revised/13-continuously-integrated-engineering.md) · [Release-readiness figure](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/site/src/components/learning/ReleaseReadiness.astro)

**E · Where the investment earns its keep.** Require a reasoned choice, response to the new constraint and a way to investigate the buyer claim. Accept a manual review, rig scheduling, a maintained check or a small measurement trial. Look for a cheaper alternative, how often an error or wait costs time or rework, who would own any upkeep and what result would change the choice. A two-week rig queue alone does not show this request waited two weeks. When language review finishes last, compare actual waits, overlap and quality. A lighter response might be contacting reviewers earlier. For the buyer claim, seek an observation of benefit in use tied to the delivered version, comparable later requests, and the buyer’s reason or a competing explanation such as a policy change. Credit uncertainty when facts do not justify a particular investment. [Investment figure](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/site/src/components/learning/InvestmentFeedback.astro) · [Companion on investment and later demand](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/project/v3/bonus/building-the-machine-that-builds-the-machine.md#when-does-building-it-pay-off)

**F · Transfer beyond the intersection.** Require a bounded decision, a usable existing source or procedure, a fresh observation able to challenge the proposal under the changed conditions, and a person accountable for acting on it. In the alternate brief a reader could recover the prior stock, setting and fold criterion, try the new stock, inspect the crease and have the production lead decide whether to use the setting. A manual trial is sufficient. Accept another defensible method or a reason to decline a more elaborate one. Mark self-chosen and supplied scenarios separately and retain the reader’s own rationale. [Chapter 14 on reuse and renewed evidence](https://github.com/And-Gu/executable-engineering-lab/blob/c2f9cb211de7e204e08920b8cf3d164d7195b866/site/src/components/learning/EvidenceHandoffs.astro)

## Close and interpret

Ask what the reader would try next and which term, figure, quiz response or handoff made the decision harder. After recording their response, correct any consequential unsupported conclusion. Label that explanation as debriefing. Confirm withdrawal and deletion arrangements.

Report counts against the attempted denominator for each card, with skipped and unoffered tasks visible. A single material error, such as treating receipt as confirmation of a lamp, deserves review. Give the editor the passage, observed consequence and a proposed retest. Publish only reviewed aggregates and separately permitted, non-identifying excerpts. A first qualitative round can show what these readers did on this build. Any claim of improvement needs a comparable earlier observation. [Blank findings form](observations.md) · [Document-as-Code study design](https://github.com/And-Gu/document-as-code-lab/blob/3444d6f738fe1304efcca7e4e2261d5e87747103/spec/tutorial/working-methods-upgrade/verification/reader-study-protocol.md)
