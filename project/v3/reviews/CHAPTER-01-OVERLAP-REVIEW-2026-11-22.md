# Chapter 1 editorial review

The published course uses fifteen chapters. Its registry matches each course-map row to a numbered manuscript and title in `revised/`. The alternative titles in `approved/` belong to an earlier sequence. The comparison below starts from PR #66 at `9365430`. [Issue #60](https://github.com/And-Gu/executable-engineering-lab/issues/60) · [Published course](https://and-gu.github.io/executable-engineering-lab/learn/) · [Course map](../../CURRICULUM-MAP.md) · [Manuscript selection](../../../site/src/data/v3-course.ts)

Chapter 1 retains “We build the machine that builds the machine” alongside the product and engineering system definitions. Chapter 2 can then apply the distinction once by pairing a question about the intersection with the capability needed to investigate it. [Chapter 1, two systems][after-systems] · [Chapter 2 application at PR #66](https://github.com/And-Gu/executable-engineering-lab/blob/93654300900efa82d3444b7b730884f7b1450fe8/project/v3/manuscripts/revised/02-introducing-the-engineering-challenge.md#L62-L68)

## Passage decisions

| Decision | Before in Chapter 1 | After and destination |
| --- | --- | --- |
| Keep the opening | “What would help a team turn an engineering question into a sound decision sooner?” [Opening at PR #66][before-opening] | The same question and the two-discipline integration example still open Chapter 1. They make the cost of late discovery intelligible before the city appears. [Revised opening][after-opening] |
| Keep the onboarding benefit and show how it works | “Reusing it on the next variant helps the team support more designs and gives new colleagues a way to understand the interface.” [Opening at PR #66][before-opening] | The opening retains the benefit. The software section now explains it. “A new engineer joining the next variant can read why the team chose an interface limit and rerun its check without tracking down the original designer.” Chapter 14 develops which methods and results transfer between variants. [Chapter 1, software-inspired practices][after-software] · [Chapter 14, reuse][reuse] |
| Move document handoffs beside the system definitions | “Documents and reviews remain useful” opened the feedback section. [Handoffs at PR #66][before-handoffs] | “When those sources travel separately, reviewers have to establish which revisions belong together.” The Word, Excel and circuit-design example now shows where a shared definition would help. Chapter 4 develops the information model and its views. [Chapter 1, two systems][after-systems] · [Chapter 4][knowledge] |
| Cut the standalone AI distinction | “AI used to develop a product is distinct from AI built into that product.” [AI at PR #66][before-ai] | “An AI function built into the product would change its behavior in use and would need its own performance evidence.” It now closes the paragraph about the cost of a development workflow. Chapter 8 develops independent checks and authority for delegated work. [Chapter 1, AI][after-ai] · [Chapter 8, outcome checks][agents] |
| Keep the evidence limit at the decision | “A passing test is evidence about a stated check under specific conditions.” [Handoffs at PR #66][before-handoffs] | The same sentence now precedes the choice to integrate revisions whose declared units agree. The workshop supplies the traffic-specific limits, and Chapter 11 develops the link between evidence and a release decision. [Chapter 1, feedback][after-feedback] · [Chapter 2 workshop][workshop] · [Chapter 11, evidence before release][evidence] |
| Cut the stakeholder preview from the handoff | “Before choosing a controller, its engineers need to decide whose experience to improve and what they can learn first.” [Handoff at PR #66][before-handoff] | “How could we improve traffic flow at our busy four-way intersection while keeping crossings safe and the signals easy to understand and maintain?” Chapter 2 owns the stakeholders, system boundary and first experiment. [Revised handoff][after-handoff] · [Chapter 2 workshop][workshop] |

## Principles for later reviews

- Keep a passage where it first helps the reader make a decision. In the next chapter, apply that distinction to a case or introduce the next uncertainty.
- Test a business claim against a concrete delay, dependency or repeated cost. Identify who could act on the feedback and what finding would justify the investment.
- State what a check establishes beside the decision it supports. Give case-specific limits to the chapter that examines those conditions, and use the quiz feedback to explain the consequence of overreading a result.

[before-opening]: https://github.com/And-Gu/executable-engineering-lab/blob/93654300900efa82d3444b7b730884f7b1450fe8/project/v3/manuscripts/revised/01-the-new-engineering-paradigm.md#L12-L18
[before-ai]: https://github.com/And-Gu/executable-engineering-lab/blob/93654300900efa82d3444b7b730884f7b1450fe8/project/v3/manuscripts/revised/01-the-new-engineering-paradigm.md#L34-L42
[before-handoffs]: https://github.com/And-Gu/executable-engineering-lab/blob/93654300900efa82d3444b7b730884f7b1450fe8/project/v3/manuscripts/revised/01-the-new-engineering-paradigm.md#L60-L71
[before-handoff]: https://github.com/And-Gu/executable-engineering-lab/blob/93654300900efa82d3444b7b730884f7b1450fe8/project/v3/manuscripts/revised/01-the-new-engineering-paradigm.md#L87-L89
[after-opening]: ../manuscripts/revised/01-the-new-engineering-paradigm.md#the-new-engineering-paradigm
[after-software]: ../manuscripts/revised/01-the-new-engineering-paradigm.md#software-inspired-engineering-moves-beyond-software
[after-ai]: ../manuscripts/revised/01-the-new-engineering-paradigm.md#ai-expands-what-engineering-teams-can-do
[after-systems]: ../manuscripts/revised/01-the-new-engineering-paradigm.md#two-systems-must-evolve-together
[after-feedback]: ../manuscripts/revised/01-the-new-engineering-paradigm.md#from-document-driven-handoffs-to-executable-feedback
[after-handoff]: ../manuscripts/revised/01-the-new-engineering-paradigm.md#from-the-paradigm-to-a-working-example
[workshop]: ../manuscripts/revised/02-introducing-the-engineering-challenge.md
[knowledge]: ../manuscripts/revised/04-engineering-knowledge-as-code.md
[agents]: ../manuscripts/revised/08-directing-ai-engineering-agents.md#check-the-outcome-not-the-agents-narration
[evidence]: ../manuscripts/revised/11-verification-validation-and-engineering-evidence.md#evidence-influences-decisions-before-release
[reuse]: ../manuscripts/revised/14-managing-engineering-knowledge-at-scale.md#reuse-is-not-one-operation
