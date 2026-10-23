# Review a bounded assurance claim

This manual exercise uses existing V0 definitions and isolated proposals. It records no approval and requires no canonical edits, push or publication.

At an identified checkout:

```sh
git rev-parse HEAD
git status --short
npm ci
npm run check
npm run evidence
npm run proposals
```

Record which commands actually completed. If the environment blocks the tsx CLI's IPC setup, execute the same scripts with `node --import tsx scripts/validate.ts`, `node --import tsx scripts/evidence.ts` and `node --import tsx scripts/proposals.ts`; record the substitution. A direct Astro build still needs separate validation, type checks and tests.

Inspect canonical YAML, model assumptions, registered assertions and the [radius-only contract](07-task-review.md#written-task-contract). Compare actual outputs:

```sh
node --input-type=module <<'JS'
import { readFileSync } from 'node:fs';
for (const path of ['artifacts/reference-evidence.json',
  'artifacts/proposals/PROPOSAL-RADIUS-45.json',
  'artifacts/proposals/PROPOSAL-THRESHOLD-35.json']) {
  const record = JSON.parse(readFileSync(path, 'utf8'));
  console.log({ path, definition: record.definition, calculation: record.calculation,
    verification: record.verification, execution: record.execution });
}
JS
```

Reference generation is not assertion execution. Proposal records explicitly set testExecuted false; the reference test did not verify changed inputs. Separate command logs establish actual test execution. Current source links must not silently replace definitions from an older execution.

For historical evidence, choose an actual [validation run](https://github.com/And-Gu/executable-engineering-lab/actions/workflows/validate.yml), inspect its checkout revision and completed steps, then inspect available artifacts. Retention is 30 days and sign-in may be required. Record unavailable evidence explicitly. Local reproduction is a new event.

## Written review template

- Narrow claim and task boundary:
- Canonical sources, evaluated definitions, source commit and working-tree state:
- Actual commands/logs and records inspected:
- Observation supporting the claim, with method and assumptions:
- Reasoning connecting observation to claim:
- Counterarguments, missing evidence and limits:
- Responsible next review role and unresolved decision:

Compare a radius proposal with a threshold proposal. A correct calculation and valid definition do not authorize changing the criterion or establish operational suitability. The expected canonical geometric FAIL remains useful evidence, not a software test failure to hide.

The template is a teaching aid separate from generated engineering evidence. It is not a policy schema, approval record, conformity assessment or implemented governance control.
