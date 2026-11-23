---
title: "Building the Machine That Builds the Machine"
subtitle: "How GitHub, AI Agents, and Connected Information Are Changing the Economics of Engineering"
---

# Building the Machine That Builds the Machine

*How GitHub, AI Agents, and Connected Information Are Changing the Economics of Engineering*

A consultant changes the email address for a customer’s service desk. The handbook, the trainer’s handout and the customer website all carry it. For a one-time handover, opening three files and checking the address in each could be the cheapest way to finish. If the consultant maintains those materials for years, every change brings the same search. Eventually it becomes worth asking the computer to remember where the address belongs.

That decision used to come with a sizable bill. A requirements engineer might have a specialist system for requirements, Word for meeting notes, spreadsheets for estimates and a simulation tool for models. Each did its own job well. Connecting them meant agreeing on identifiers, writing and hosting integrations, maintaining them through upgrades and teaching colleagues how to use them. On a modest project, a person who knew the files could often do the work for less.

Today a solo practitioner can rent the underlying computing capacity, keep a few sources under version control, run a check on every proposed edit and ask an agent to help maintain the connections. The economic change is in the **size of project that can justify the investment**. A single repeated handoff can be enough to try it.

## What is the smallest useful engineering environment?

For the consultant, it might be one maintained contact record, a template that inserts it into each publication and a check that warns when a required contact is missing. A saved change shows the old and new values. A build produces review copies from that revision. A short instruction tells an agent where the source lives, how to regenerate the copies and who approves the wording.

<div class="comparison-table" role="region" aria-label="Manual and shared workflows compared" tabindex="0">

| When something changes | Coordinating by hand | With a small shared workflow |
| --- | --- | --- |
| Find the current definition | Ask the person who last updated the files. | Follow a stable identifier to the maintained source and its owner. |
| Update dependent material | Edit each copy and compare the results. | Review one source change, regenerate the affected outputs and inspect the differences. |
| Check quality and explain the decision | Reconcile versions against notes or an email thread. | Run defined checks and keep the human review alongside the exact revision. |
| Publish again | Repeat the export, copy and upload steps. | Repeat a versioned build and publication process. |

</div>

In an industrial project, a drawing can stay in its CAD system and a test run in a laboratory database. A release record can point to the drawing revision and the test record with their owners and access controls. Someone assessing a change can follow those links without commissioning a migration of either system.

## A small project that publishes from its own sources

The **Document-as-Code Lab** teaches information work by publishing a course this way. Its closing lesson follows one changed instruction into a handbook, a training guide and a website. The project gives the reader both the public result and the sources behind it. [Read the course summary](https://and-gu.github.io/document-as-code-lab/chapters/13-course-summary/) · [Visit the lab](https://and-gu.github.io/document-as-code-lab/) · [Inspect its repository](https://github.com/And-Gu/document-as-code-lab).

Consider its onboarding example. A fictional procedure, `PROC-001`, tells a new colleague how to request access. A small program reads that procedure and two others. It produces a handbook review copy containing all three and a trainer’s excerpt containing the access instruction. The program records the input files’ hashes so an editor can identify the exact sources. The examples are saved teaching outputs. Regenerating them is a deliberate editorial action. The handbook even includes a draft, a reason for its reviewer to look beyond a successful build. [Onboarding sources and output rules](https://github.com/And-Gu/document-as-code-lab/tree/3444d6f738fe1304efcca7e4e2261d5e87747103/examples/onboarding-showcase) · [Generation program](https://github.com/And-Gu/document-as-code-lab/blob/3444d6f738fe1304efcca7e4e2261d5e87747103/scripts/build_onboarding_showcase.py).

The website itself has a different update path. Its Astro build reads the maintained Markdown chapters directly. A pull request shows the proposed edit and its history. Automated checks exercise the source processing, build the production site and test affected reader journeys. After a merge to the main branch, the publication workflow builds the site, checks that the artifact names the expected source revision and deploys it to GitHub Pages. An editor can follow repository activity in the Project Control Center, where a published snapshot carries its collection time. [Pull-request checks](https://github.com/And-Gu/document-as-code-lab/blob/3444d6f738fe1304efcca7e4e2261d5e87747103/.github/workflows/astro-pr-check.yml) · [Publication workflow](https://github.com/And-Gu/document-as-code-lab/blob/3444d6f738fe1304efcca7e4e2261d5e87747103/.github/workflows/deploy-pages.yml) · [Project Control Center](https://and-gu.github.io/document-as-code-lab/dashboard/).

The lab also gives an agent a bounded assignment. Its guide shows how to locate the authoritative chapter, inspect its teaching data, propose an edit and return evidence for review. The course owner separately recorded editorial approval against identified source revisions. A program can catch a broken reference. It takes someone who understands the lesson to decide whether a new reader will interpret the procedure correctly. Those two jobs can coexist in a project maintained by one person. [Guide to agent context](https://github.com/And-Gu/document-as-code-lab/blob/3444d6f738fe1304efcca7e4e2261d5e87747103/reference/ai-context-and-agents.md#follow-a-bounded-maintenance-task) · [Editorial approval record](https://github.com/And-Gu/document-as-code-lab/blob/3444d6f738fe1304efcca7e4e2261d5e87747103/reference/editorial-approval.md).

## What an agent can do with those connections

Hand an agent three independent files and it has to infer which one governs the others. Give it the procedure ID, its source, the generation program and the rule for including drafts, and it can propose a coordinated edit. If a check fails it can inspect the error, fix the proposal within its assignment and rerun the check. The reviewer sees precisely which version produced the result. The person who owns the procedure decides whether the new instruction is right for its audience.

GitHub made one form of this work generally available on October 28, 2026. GitHub Agentic Workflows compiles tasks described in Markdown into GitHub Actions workflows. A maintainer can give an agent a recurring job such as investigating failed documentation checks. The feature is available on GitHub Free, Team and Enterprise. Its default Copilot CLI engine requires a Copilot license, and execution costs still belong in the project’s calculation. [GitHub’s general-availability announcement](https://github.blog/changelog/2026-10-28-github-agentic-workflows-generally-available/).

Lauren Tan gives a practitioner’s account in *All Code Is Slop (Except Mine)* at AI Engineer CODE 2026. Her team moved recurring review corrections into its client framework and lint rules, where an agent encounters a constraint as it works. It also gave agents ways to run the application and capture behavior for review. The same distinction applies to a handbook. A check can require a source ID in every generated excerpt. An editor still has to read the excerpt in the situation where a trainer will use it.

<figure class="companion-video">
  <details><summary>Watch Lauren Tan’s framework and runtime examples</summary>
  <iframe src="https://www.youtube-nocookie.com/embed/O_zcc6Xl12g" title="All Code Is Slop (Except Mine), a talk by Lauren Tan at AI Engineer CODE 2026" width="560" height="315" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></details>
  <figcaption>Tan introduces a constraint built into the team’s Dune framework at 5:00, then turns to runtime verification at 9:40. <a href="https://www.youtube.com/watch?v=O_zcc6Xl12g">Watch the original recording on YouTube</a> · <a href="https://www.youtube.com/watch?v=O_zcc6Xl12g&amp;t=300s">Start at the framework example</a> · <a href="https://ai.engineer/code/2026/talks/lauren-tan">Read the organizer’s session notes and transcript</a>.</figcaption>
</figure>

## Four indicators, four different questions

### How much automation runs? GitHub platform activity

GitHub counted **45.4 billion Actions jobs** on public and private repositories in the 12 months ending September 30, 2026. It counted **8.0 billion** for the comparable period ending September 30, 2024, recalculated with the same definitions. A job is one unit in a workflow. One proposed change can trigger many jobs, each with its own runtime and cost. [GitHub Octoverse activity chart](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/#h-the-year-developers-set-a-new-pace).

### Where do agents enter review? GitHub’s classification

In September 2026, **more than 40% of pull requests on GitHub** began with a first draft GitHub could attribute to a coding agent. The denominator is that month’s pull requests across public and private repositories. Detection can miss agent use. The measure identifies how work entered review. It leaves open how much a person revised, what checks ran and who approved delivery. [GitHub Octoverse workflow findings](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/#h-developers-are-reshaping-their-workflow).

### Who maintains an internal platform? DORA’s survey

In DORA’s 2025 survey, **4,867 people** responded across industries and countries. From respondents’ accounts of their workplaces, DORA reported that **90%** of organizations had adopted at least one internal developer platform and **76%** had at least one dedicated platform team. These answers describe organizational practice in the survey. A solo consultant deciding whether to automate one handbook faces a different staffing question. [DORA’s platform findings, page 67](https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf#page=67) · [Survey population, page 103](https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf#page=103).

### Where might industrial demand grow? McKinsey’s forecast

In January 2026, McKinsey modeled the worldwide market for light vehicles, including passenger cars and light commercial vehicles. Its *Current Trajectory* scenario projected **11.4% compound annual growth** for software integration, verification and validation services from 2025 to 2035, alongside **9.7%** for software development. Each rate describes projected growth from that market segment’s own 2025 base. A market forecast cannot tell a project manager what portion of this year’s budget to devote to tools. [McKinsey Center for Future Mobility, Exhibit 3](https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/mapping-the-automotive-software-and-electronics-landscape).

## When does building it pay off?

Count the work on both sides. A shared workflow can save a search for the latest decision, catch a mismatch before publication and carry a tested rule into the next update. It can also relieve a reviewer of comparing every copy by eye. Against that value, charge the time to establish the sources, learn the tools, review proposals, maintain rules when the outputs change and operate the process. Include hosting, model use and the time people spend investigating failed checks.

Frequency changes the calculation. A consultant who delivers one letter may finish before a publishing workflow would be ready. Someone running a monthly service bulletin can use the same source lookup, validation and build every month. If a client prohibits hosted processing or an authoritative spreadsheet has unstable columns, local setup and maintenance can absorb the savings. A sensible first investment is the smallest connection that resolves a real, repeated problem.

## What might change from 2026 to 2030?

The following are hypotheses a team can test as its work changes. Hosted workflows and reusable checks may bring the economical starting point down to a single author and a few dependent outputs. Stable identifiers, source links and revision history could then earn their keep earlier, while the author can still explain where every fact came from.

Ordinary knowledge work could gain more executable checks. A handbook can test a link, a report can reconcile units and a training package can check the revision of its procedure. If those checks travel between projects with their templates and agent instructions, some lessons learned on the first project can reduce setup on the second. Someone still needs to check whether the rule fits its new use.

If agents produce drafts faster than people can assess them, a greater share of human attention may go to intent, interpretation and consequential decisions. Teams may spend less time waiting for a first version and more time waiting for the evidence that several changes work together. The intersection exercise gives that hypothesis a practical test. Speeding up the display build buys little when a required service instruction determines release day. [Chapter 13’s release decision](/executable-engineering-lab/learn/v3/13-continuously-integrated-engineering/#which-dependency-sets-the-release-date).

## Measure one change of your own

Choose a fact you expect to change again. On its next update, record how long it takes to find the authoritative source, how many places someone edits by hand and which discrepancies anyone catches before delivery. Record how long it takes a reviewer to test the change and explain the decision.

On a later, comparable update, use one new connection or check. Which steps and evidence could you reuse? What rework did you avoid, and how much effort went into maintaining the connection? For the consultant, the answer might be as small as finding the service desk address once and knowing which three publications will use it. When that costs less than hunting down the copies again, building the machine has begun to pay for itself.
