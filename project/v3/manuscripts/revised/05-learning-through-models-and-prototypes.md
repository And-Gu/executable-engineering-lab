---
id: eel-v3-ch05-models-prototypes
chapter: 5
part: "II — Build and Test Knowledge"
title: "Learning Through Models and Prototypes"
status: draft
publication: unpublished
reference_case: four-way-traffic-intersection
teaching_fixture: "T1 — synthetic editorial inputs and calculated trace"
---

# Learning Through Models and Prototypes

*How much can a simple model teach us before we commit to a design?*

An engineer looking at our fictional four-way intersection might propose a more sophisticated signal controller to reduce queues. Another might suggest observing arrival patterns first. Both ideas could be reasonable. Neither can be evaluated merely by drawing the controller's intended states.

Models help teams answer questions before committing to an expensive physical configuration. But useful engineering does not begin by choosing the most impressive model. It begins by identifying which uncertainty needs to be reduced, then choosing the simplest investigation that can address it.

For now we will study a much smaller question: **with the same fixed signal sequence and the same total arrivals, can changing the arrival pattern leave a different number of vehicles waiting?**

## Different questions demand different models

Our structured information from Chapter 4 identifies a candidate phase-selection function, a proposed conflict property and a teaching model. Those objects tell us what the team intends to study, but not the behavior of the actual system.

Different representations can help with different questions. A functional diagram explains inputs and responsibilities. A state machine can define which abstract phase follows which. A queue calculation can represent what happens when invented vehicles arrive while one direction is allowed to depart. A bench test could later investigate a particular controller–adapter interface. A physical prototype or installation observation would be needed for different kinds of real-world questions.

No one method is universally cheaper or better. For a question about a short queue comparison under an invented phase schedule, the bounded calculation below is sufficient. For an electrical acknowledgment, it would not be.

## Define the experiment before interpreting its output

The [T1 model input](../../case-study/model-inputs-v1.json) uses two abstract vehicle groups, north–south (NS) and east–west (EW). Both queues start empty.

The experiment has **eight ordered slots**. A slot is **not a second** and carries no calibrated physical duration. The phase schedule is fixed:

| Slot | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---:|---|---|---|---|---|---|---|---|
| Phase | NS green | NS green | NS amber | All-red | EW green | EW green | EW amber | All-red |

In each slot, new vehicles first join the corresponding queue. During an NS-green slot, at most one NS vehicle can depart; during an EW-green slot, at most one EW vehicle can depart. No one departs during amber or all-red. We record both remaining queues **after** that slot's arrivals and departures.

The model deliberately excludes turning movements, pedestrians, cycling, failures, real signal timing and driver behavior. Those omissions matter for real engineering, but they do not prevent a carefully bounded calculation from teaching a specific relationship.

The fixed phases are also important: **the controller does not react to the arrival pattern**. Adaptive signal control remains a proposed future design question, not a hidden feature of this experiment.

## Determinism is the starting point

T1 is an ordinary **deterministic software calculation**. Given the same rules, initial queues and arrivals, it produces the same trace in the defined execution environment. That is expected behavior, not a breakthrough delivered by AI or a special modeling platform.

The engineering value comes from **changing something deliberately and evaluating the consequence**. We can vary an arrival pattern, test a proposed model change, inspect the resulting queues and check explicit properties. Automated tests can then give an engineer—or an authorized agent—rapid feedback on whether the modified calculation still meets its defined criteria.

Determinism does not mean that every experiment must use constant inputs. A stochastic simulation can use a controlled pseudorandom seed so the same sample can be replayed; repeated independent seeds can reveal variation. Similarly, ML inference can be deterministic under specified conditions. What matters is stating which factors are controlled, which vary, and which claim the experiment can support.

## Two arrival patterns, one model

Both invented scenarios contain **two NS vehicles and two EW vehicles**. Scenario A spreads those arrivals over the eight slots. Scenario B clusters two EW vehicles in the first slot and two NS vehicles in the third.

| Scenario | NS arrivals by slot | EW arrivals by slot |
|---|---|---|
| **A — staggered** | 1, 0, 1, 0, 0, 0, 0, 0 | 0, 1, 0, 0, 0, 1, 0, 0 |
| **B — clustered** | 0, 0, 2, 0, 0, 0, 0, 0 | 2, 0, 0, 0, 0, 0, 0, 0 |

The values are invented inputs, not observed traffic counts. Because the total arrivals are identical and every model rule is unchanged, we can isolate one question about when those arrivals occur.

Before reading the result, predict what you think will happen to the queues at the end of slot eight. Might the same total demand always produce the same remaining count?

## Follow the actual queue updates

A little arithmetic is enough to inspect the result. In scenario A, one NS vehicle arrives in slot 1 during NS green and departs immediately. A second NS vehicle arrives in slot 3, during amber; it cannot depart in that slot or during the later EW phases. The EW vehicles arrive in slots 2 and 6; both can depart when EW green becomes available.

In scenario B, the two EW vehicles arrive during the first NS-green slot. They wait until EW green in slots 5 and 6, then depart. Both NS vehicles arrive in slot 3, *after* the two NS-green slots have ended, and remain queued for the rest of the horizon.

You can inspect a compact selection from the [full sixteen-row trace](../../case-study/trace-v1.csv):

| After slot | A: NS queue | A: EW queue | B: NS queue | B: EW queue |
|---:|---:|---:|---:|---:|
| 1 | 0 | 0 | 0 | 2 |
| 3 | 1 | 1 | 2 | 2 |
| 5 | 1 | 0 | 2 | 1 |
| 8 | **1** | **0** | **2** | **0** |

The same calculation also reports departures:

| After eight slots | Scenario A | Scenario B |
|---|---:|---:|
| Total invented arrivals | 4 | 4 |
| Departures in the window | 3 | 2 |
| Vehicles still queued | **1** | **2** |

The source model is identified as **INT-MOD-001, revision T1**. We have independently recomputed the table from its declared synthetic inputs for editorial consistency. The result is a model calculation, **not** an executed Astro user experience or a real signal-controller experiment.

## What does that comparison establish?

Within this narrow, fixed-rule illustration, *arrival placement changes end-of-window queue counts*. Total arrivals alone did not determine the result.

That is an informative conclusion. But notice what it does **not** establish.

We have not calculated mean waiting time. A vehicle still queued at the end has an incomplete wait, and excluding that unfinished wait could distort a careless summary. We also have not modeled real green times, turning conflicts, hardware constraints, safety behavior or the city's operational criteria.

Scenario A is not therefore a recommended controller strategy. It is one set of invented arrivals under the same controller schedule. The output gives the team a useful next question: **How would we decide whether a model/data comparison is fit for the decision we want to make?**

## When should fidelity increase?

Model fidelity is not a score that rises automatically as more detail is added. It is a decision about whether the abstraction is sufficient for a question.

If the next question concerns phase transitions under a defined arrival sequence, T1 lets us inspect the relevant behavior and try alternatives. If the question concerns pedestrian movements or a signal-driving adapter's acknowledgment, adding more queue data will not fix the missing model of that interface.

An engineer might then choose an interface mock-up, a bench observation or a physical integration experiment. Each method has a different cost, setup effort, interpretation and evidence boundary.

The **engineering environment** evolves with that decision: clearer model assumptions, checks that expose failures and new tests or physical observations where needed. The **product concept** can evolve too—but only when the evidence supports the proposed change.

## Design the feedback around the engineering question

For T1, negative or fractional arrival counts, unknown phase labels and missing slots are invalid. A responsible implementation should reject such inputs instead of creating an animation that looks plausible. The existing [editorial model check](../../case-study/MODEL-CHECK.md) examines T1's declared calculations; it does not validate a real controller.

A bounded development loop could now be: propose a change to the model or input handling, run the calculation, evaluate fixed behavioral and invalid-input checks, inspect a failure, and correct the implementation. If those checks are sufficiently independent of the change being made, an agent could work through several iterations without asking a human to direct every step.

That does **not** make all green tests a product approval. If the criteria encode the wrong requirements, or if the model leaves out an important physical interaction, the loop may converge on the wrong answer. Engineers therefore also assess whether the model and tests represent the system question—and use other evidence when they do not.

The eventual browser interaction should derive its traces, tables and charts from a single model definition rather than duplicate calculations in presentation code. The ability to close a rapid feedback loop is the opportunity; rerunning an unchanged deterministic model is only its starting condition.

## The data is now the next engineering problem

Chapter 4 supplied the information needed to *identify* what is related. This chapter supplied a bounded calculation with visible assumptions and results.

The next step is not automatically to choose a controller. It is to decide how the resulting data can be trusted, annotated, compared and reused. What if another file reports a “better” result but provides no model version or units?

That is the investigation in **Engineering Data: From Measurements to Decisions**.

**Engineering takeaway:** Select models for the question at hand, make the rules and calculations inspectable, and interpret only the claims that the model's scope permits. A good model creates an opportunity to learn—and tells the team what it must investigate elsewhere.

---

*Inspect the case:* [T1 inputs and rules](../../case-study/model-inputs-v1.json) · [Complete computed trace](../../case-study/trace-v1.csv) · [Calculation and limitations](../../case-study/MODEL-CHECK.md).
