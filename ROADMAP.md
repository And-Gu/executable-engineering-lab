# Roadmap — delivery status and proposed learning increments

## Milestone 1 — published

Chapter 1, the embedded/standalone single-sensor lab, temporary comparisons, source views and retained verification workflow were published on 2026-10-16 through [PR #2](https://github.com/And-Gu/executable-engineering-lab/pull/2).

- [Read Chapter 1](https://and-gu.github.io/executable-engineering-lab/learn/01-engineering-intent/).
- Release revision: `cc18dc8246fa4c1fa02d72560681da4858681abe`.
- [Successful Pages deployment](https://github.com/And-Gu/executable-engineering-lab/actions/runs/38942199903); [successful post-merge validation](https://github.com/And-Gu/executable-engineering-lab/actions/runs/38942199469).
- Public chapter refresh, comparison exercise, quiz and source/return navigation were smoke-tested after deployment. See [docs/VERIFICATION.md](docs/VERIFICATION.md) for results and limits.

The V0 model and approved definitions remain the baseline. Browser comparisons are temporary exploratory work, not retained CI evidence. A geometric PASS establishes neither operational suitability nor optimality.

## Milestone 2 — Chapter 2 and browser workspace ready for review

[Engineering Information Models](MILESTONE_02.md) builds Chapter 2 around a controlled requirement/scenario change: inspect structured fields and relationship meanings, validate a proposal, rerun evaluation and explain which evidence applies.

Planning PR #3 and repository exercise PR #4 are merged. The [repository proposal exercise](docs/02-proposal-exercise.md) supplies isolated fixtures, shared analysis/validation and retained analysis records.

The educational PR adds Chapter 2, a temporary browser proposal workspace with exact field differences and invalid-reference handling, a two-chapter Learn index, typed relationship/source views and quiz. Its local production-build review and CI are the review gates; publication still requires merge, successful Pages deployment and public smoke checks. See [Milestone 2 verification](docs/MILESTONE_02_VERIFICATION.md).

The single-sensor model, canonical YAML and baseline reference test remain unchanged. This milestone is not declared published or complete by preparing the PR.

## Later learning increments

Chapter 3 can develop digital threads and change-impact reasoning further. The demonstrator's V1 capability can later introduce multiple sensors and geometric union coverage; V2 can introduce time and moving objects. Bounded agent-assisted engineering and governance remain subsequent capabilities. Milestone numbering and demonstrator version numbering describe different progressions.
