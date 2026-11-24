---
title: "Building the Machine That Builds the Machine"
subtitle: "How GitHub, AI Agents, and Connected Information Are Changing the Economics of Engineering"
---

# Building the Machine That Builds the Machine

*How GitHub, AI Agents, and Connected Information Are Changing the Economics of Engineering*

A consultant changes the email address for a customer’s service desk. The handbook, the trainer’s handout and the customer website all carry it. For a one-time handover, opening three files and checking the address in each could be the cheapest way to finish. If the consultant maintains those materials for years, every change brings the same search. How often would that search have to recur to make a shared source worth maintaining?

That decision used to come with a sizable bill. A requirements engineer might have a specialist system for requirements, Word for meeting notes, spreadsheets for estimates and a simulation tool for models. Each did its own job well. Connecting them meant agreeing on identifiers, writing and hosting integrations, maintaining them through upgrades and teaching colleagues how to use them. On a modest project, a person who knew the files could often do the work for less.

Today a solo practitioner can rent computing capacity, keep a few sources under version control, check each proposed edit and ask an agent to help maintain the connections. A smaller project might now justify that investment if one handoff recurs often enough. The consultant can test the idea against the cost of the next few updates.

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

In *All Code Is Slop (Except Mine)* at AI Engineer CODE 2026, Lauren Tan describes a rule her software team built into its Dune framework. Code that draws the interface cannot import code reserved for the main process. An agent encounters that rule on its next edit. To check how a feature actually behaves, the team also gives the agent a way to run the application and capture the interaction. A handbook check could require a source ID in every excerpt. An editor could then watch a new colleague use the excerpt to request access.

<figure class="companion-video">
  <details><summary>Watch Lauren Tan’s framework and runtime examples</summary>
  <iframe src="https://www.youtube-nocookie.com/embed/O_zcc6Xl12g" title="All Code Is Slop (Except Mine), a talk by Lauren Tan at AI Engineer CODE 2026" width="560" height="315" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></details>
  <figcaption><a href="https://www.youtube.com/watch?v=O_zcc6Xl12g&amp;t=300s">Dune’s framework rules (5:00)</a> · <a href="https://www.youtube.com/watch?v=O_zcc6Xl12g&amp;t=580s">Checking the running application (9:40)</a> · <a href="https://www.youtube.com/watch?v=O_zcc6Xl12g">Full recording</a> · <a href="https://ai.engineer/code/2026/talks/lauren-tan">Organizer’s session notes and transcript</a>.</figcaption>
</figure>

## Four indicators, four different questions

### How much automation runs? GitHub platform activity

GitHub counted **45.4 billion Actions jobs** on public and private repositories in the 12 months ending September 30, 2026. It counted **8.0 billion** for the comparable period ending September 30, 2024, recalculated with the same definitions. A job is one unit in a workflow. One proposed change can trigger many jobs, each with its own runtime and cost. [GitHub Octoverse activity chart](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/#h-the-year-developers-set-a-new-pace).

### Where do agents enter review? GitHub’s classification

In September 2026, **more than 40% of pull requests on GitHub** began with a first draft GitHub could attribute to a coding agent. The denominator is that month’s pull requests across public and private repositories. Detection can miss agent use. The measure identifies how work entered review. It leaves open how much a person revised, what checks ran and who approved delivery. [GitHub Octoverse workflow findings](https://github.blog/news-insights/octoverse/octoverse-commits-pushes-reach-new-highs-in-2026-as-developers-build-with-agents/#h-developers-are-reshaping-their-workflow).

Demirer, Musolff and Yang followed developers’ public GitHub activity in a matched observational study. After adoption of coding agents, the authors estimated a larger percentage increase in commits than in releases. A release count brings us closer to delivery. Whether anyone benefited from an update takes evidence from its use. [NBER working paper, revised September 2026](https://www.nber.org/papers/w35275).

### Who maintains an internal platform? DORA’s survey

In DORA’s 2025 survey, **4,867 people** responded across industries and countries. From respondents’ accounts of their workplaces, DORA reported that **90%** of organizations had adopted at least one internal developer platform and **76%** had at least one dedicated platform team. These answers describe organizational practice in the survey. A solo consultant deciding whether to automate one handbook faces a different staffing question. [DORA’s platform findings, page 67](https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf#page=67) · [Survey population, page 103](https://services.google.com/fh/files/misc/2025_state_of_ai_assisted_software_development.pdf#page=103).

### Where might industrial demand grow? McKinsey’s forecast

In January 2026, McKinsey modeled the worldwide market for light vehicles, including passenger cars and light commercial vehicles. Its *Current Trajectory* scenario projected **11.4% compound annual growth** for software integration, verification and validation services from 2025 to 2035, alongside **9.7%** for software development. Each rate describes projected growth from that market segment’s own 2025 base. A market forecast cannot tell a project manager what portion of this year’s budget to devote to tools. [McKinsey Center for Future Mobility, Exhibit 3](https://www.mckinsey.com/features/mckinsey-center-for-future-mobility/our-insights/mapping-the-automotive-software-and-electronics-landscape).

## When does building it pay off?

Start with a small manual alternative. The consultant could keep a checklist of the three publications, open each one and have a reviewer compare the address with the service desk’s approved contact. On a monthly bulletin, how much time do those checks take, and how often does an old address get through? A shared source might save the reviewer a search or catch the mismatch before anyone reprints a handout. That avoided work can repay part of the investment before the update reaches a customer.

For comparable updates, count what it costs to connect the source to all three outputs, integrate the generated copies and review the wording. Add hosting, agent runs, investigation of failed checks and repairs when a spreadsheet column or publication template changes. Tan describes how agents helped her team afford checks it once found too costly to maintain. She also describes spending much of her own model budget on verification. The consultant can price those costs locally and keep the checklist if it does the job for less. [Tan on creating and maintaining checks (11:51)](https://www.youtube.com/watch?v=O_zcc6Xl12g&t=711s).

The customer who pays for a corrected bulletin has a different question. After it goes out, do requests from readers of the new edition reach the right service desk on the first try? A service ticket that identifies the edition used and any rerouting would help answer that question. The customer and consultant can use those observations when deciding what the next update is worth.

## What might change from 2026 to 2030?

One possibility is that a customer who benefited from a quicker update will ask for the same turnaround on the next order. That is the article’s hypothesis about buying decisions. Compare successive requests with similar scope and quality requirements, then ask the buyer what changed. A competitor’s offer or a new procurement policy could also explain a shorter deadline.

Requirements can come directly from policy. The UK’s 2021 Information Management Mandate required infrastructure clients within its scope to specify in contracts what information they needed and what satisfactory delivery meant. It also required a way to receive and check that information digitally. Those buyers had a contractual reason to request usable information at handover regardless of how the supplier produced it. [UK Infrastructure and Projects Authority, Annex B, paragraph 8](https://www.gov.uk/government/publications/transforming-infrastructure-performance-roadmap-to-2030/transforming-infrastructure-performance-roadmap-to-2030#annex-b-information-management-mandate).

Ordinary knowledge work could gain more executable checks. A handbook can test a link, a report can reconcile units and a training package can check the revision of its procedure. If those checks travel between projects with their templates and agent instructions, some lessons learned on the first project can reduce setup on the second. Someone still needs to check whether the rule fits its new use.

If agents produce drafts faster than people can assess them, teams may spend less time waiting for a first version and more time waiting for evidence that several changes work together. In the intersection exercise, the display is ready while a required service instruction awaits review. If a test rig is still occupied when the reviewer finishes, what would earlier translation actually save on the path to release readiness? [Chapter 13’s release decision](/executable-engineering-lab/learn/v3/13-continuously-integrated-engineering/#which-dependency-sets-the-release-date).

## Measure one change of your own

Choose a fact you expect to change again. On its next update, record how long it takes to find the authoritative source, how many places someone edits by hand and which discrepancies anyone catches before delivery. Record how long it takes a reviewer to test the change and explain the decision.

On a later, comparable update, use one new connection or check. Which steps and evidence could you reuse? What rework did you avoid, and how much effort went into maintaining the connection? For the consultant, the answer might be as small as finding the service desk address once and knowing which three publications will use it. When that costs less than hunting down the copies again, building the machine has begun to pay for itself.
