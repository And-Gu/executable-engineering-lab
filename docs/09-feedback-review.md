# Review one engineering feedback cycle

Use an identified checkout. This exercise neither changes canonical definitions nor asks you to push, approve or publish anything. The existing isolated proposal fixtures supply the comparison.

```sh
git rev-parse HEAD
git status --short
npm ci
npm run check
npm run evidence
npm run proposals
```

Record the commands actually completed and their output. A failed command does not establish execution of subsequent commands. Inspect package.json, `.github/workflows/validate.yml`, `.github/workflows/deploy.yml`, scripts/evidence.ts and scripts/proposals.ts at that revision.

- `check`: type checking, Vitest assertions and build/source validation.
- `evidence`: canonical calculation/evaluation, not assertion execution.
- `proposals`: isolated model/evaluator analyses, not TEST-COV-001 execution against changed inputs.
- Validation uploads reference/proposal artifacts after these commands. Pages separately checks/builds main and deploys its site artifact; it does not depend on the separate validation workflow.

Inspect actual records without treating their test IDs as execution proof:

```sh
node --input-type=module <<'JS'
import { readFileSync } from 'node:fs';
const reference = JSON.parse(readFileSync('artifacts/reference-evidence.json', 'utf8'));
console.log({ definition: reference.definition, calculation: reference.calculation, execution: reference.execution });
for (const id of ['PROPOSAL-RADIUS-45', 'PROPOSAL-THRESHOLD-35']) {
  const proposal = JSON.parse(readFileSync(`artifacts/proposals/${id}.json`, 'utf8'));
  console.log({ id, verification: proposal.verification, differences: proposal.definition.differences,
    definition: proposal.definition, calculation: proposal.calculation, execution: proposal.execution });
}
JS
```

Compare both proposals with the [radius-only contract](07-task-review.md#written-task-contract). A criterion change can alter evaluation without changing coverage. Successful software tests preserve the expected canonical geometric FAIL. Neither a modeled PASS nor task compliance establishes physical suitability.

For historical review, open [actual validation runs](https://github.com/And-Gu/executable-engineering-lab/actions/workflows/validate.yml), select a revision and inspect completed steps/logs and available JSON artifacts. Match record sourceCommit to the checkout used by that run. Artifacts expire after 30 days and may require sign-in. If unavailable, state that fact. Local reproduction is a new event, not the original CI execution. Do not infer branch protection or approval rules from workflow success.

## Written review template

- Changed definition and task boundary:
- Claim being evaluated:
- Source commit and working-tree state:
- Actual run URL or local commands completed:
- Definitions, method and execution provenance inspected:
- Assertion outcome versus modeled criterion outcome:
- Available/missing artifacts and evidence applicability:
- Remaining engineering uncertainty and responsible next decision:

Keep this written review separate from generated engineering evidence. No new retained record format or automated approval mechanism is introduced.
