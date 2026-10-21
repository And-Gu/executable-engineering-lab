# Chapter 7 — bounded task contract and proposal review

This is a manual review exercise using designed fixtures. No actual AI agent, provider API, tool sandbox or permission enforcement is implemented. The examples must not be attributed to an agent run.

## Written task contract

| Part | Assignment |
| --- | --- |
| Objective | Propose one single-sensor radius change for evaluation against the unchanged geometric criterion; report limitations |
| Baseline/context | Identify checkout/revision; inspect canonical need, requirement, scenario, model assumptions and registered test |
| Allowed edit | One finite nonnegative radius in an isolated unapproved proposal fixture; browser controls retain their existing 0–200 model-unit range |
| Fixed definitions | Area, sensor center, threshold, requirement wording/basis, references, method, grid and model version |
| Prohibited actions | Edit canonical YAML, relax criterion, change test expectations/model code, merge/publish or approve a requirement/design |
| Checks | Validate sources/proposals, inspect exact differences, run shared analysis, separately run canonical regressions |
| Stop conditions | Missing/contradictory context, invalid references, out-of-scope requested changes, or insufficient evidence for the intended claim |
| Deliverable | Exact proposed input, rationale, scoped diff, actual commands/results and provenance where recorded, limits and reviewer question/decision |

This document expresses a task boundary; it does not enforce access controls. Geometric PASS does not grant authority to widen the assignment or approve a design.

## Reproduce the review

Use an identified checkout and Node from `.nvmrc`. Run:

```sh
git rev-parse HEAD
git status --short
npm ci
npm run check
npm run proposals
```

Inspect the actual fixture sources in `exercises/proposals/`. The radius-45 proposal changes `scenario.sensor.radius` in the derived definition. The threshold-35 proposal changes threshold, statement and unapproved threshold basis. Neither fixture edits canonical YAML; both are unapproved teaching proposals.

Print the generated analyses from this checkout:

```sh
node --input-type=module <<'JS'
import { readFileSync } from 'node:fs';
for (const name of ['PROPOSAL-RADIUS-45', 'PROPOSAL-THRESHOLD-35']) {
  const record = JSON.parse(readFileSync(`artifacts/proposals/${name}.json`, 'utf8'));
  console.log(JSON.stringify({ id: record.id, kind: record.kind,
    differences: record.definition.differences, calculation: record.calculation,
    verification: record.verification, execution: record.execution }, null, 2));
}
JS
```

Also read `definition.baseline` and `definition.proposed` in each JSON file to inspect the exact sources and inputs, not only the outcome label. These are actual local analyses, not stored agent responses. Their source revision, dirty status, timestamp and context must describe the actual checkout. Do not infer a clean state or CI execution from the printed number alone.

Apply the same contract to both cases:

1. Does each changed field fit the permitted edit? Why is a changed criterion outside this task even though Chapter 2 legitimately explores it?
2. Which activity actually ran? `npm run check` executes the canonical regression suite; proposal analysis does not execute TEST-COV-001 against proposals. Inspect `verification.testExecuted` and actual logs.
3. What does the geometric calculation establish, and what physical/operational justification is missing?
4. Should the reviewer reject the edit, request more evidence or accept only that it fits the permitted scope? Do not turn that last observation into design approval.

Keep canonical assertions unchanged. `npm run evidence` is a separate reference evaluation generator and does not itself invoke Vitest; see [Chapter 6's evidence review](06-evidence-review.md). Existing CI artifacts expire after 30 days and may require sign-in. Browser results are temporary copies, not retained CI evidence.

There is no generic scope classifier or approval engine in this exercise. The reviewer explains the decision. A broken source reference must be corrected before analysis; a valid but out-of-scope threshold change must be rejected for this assignment rather than hidden behind PASS.
