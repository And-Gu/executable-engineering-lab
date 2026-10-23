# Review configuration and evidence reuse

Use the current V0 sources and existing isolated proposal fixtures. This manual review creates no approved baseline and requires no canonical edits, push or publication.

At an identified checkout:

```sh
git rev-parse HEAD
git status --short
npm ci
npm run check
npm run evidence
npm run proposals
```

Record actual command outcomes. If the environment blocks tsx CLI IPC, the same script can be invoked with `node --import tsx scripts/validate.ts` (or evidence.ts/proposals.ts); document substitutions and still run type checks, tests and Astro build.

Follow need, requirement, scenario and manifest source fields, then inspect actual records:

```sh
node --input-type=module <<'JS'
import { readFileSync } from 'node:fs';
for (const path of ['artifacts/reference-evidence.json',
  'artifacts/proposals/PROPOSAL-RADIUS-45.json',
  'artifacts/proposals/PROPOSAL-THRESHOLD-35.json']) {
  const r = JSON.parse(readFileSync(path, 'utf8'));
  console.log({ path, definition: r.definition, calculation: r.calculation,
    verification: r.verification, execution: r.execution });
}
JS
```

Compare proposed definitions and exact differences independently. Do not combine the radius candidate's geometry with the threshold candidate's criterion and claim either saved result covers the combination. Shared implementation does not imply unchanged evidence applicability.

A source commit identifies committed state; a dirty-state flag does not snapshot all modifications. Review actual relevant differences and embedded inputs before attributing a result to HEAD. Stable source IDs and model version alone do not identify the evaluated configuration.

Reference generation does not execute assertions; proposal analyses explicitly do not execute TEST-COV-001 against changed inputs. Inspect separate command logs for actual assertion execution. The canonical geometric FAIL remains expected.

For historical evidence, select an actual [validation run](https://github.com/And-Gu/executable-engineering-lab/actions/workflows/validate.yml), inspect revision, completed steps and available records. Artifacts expire after 30 days and may require sign-in. State unavailable evidence; local reproduction is a new execution. Current source views do not establish historical definitions.

## Written reuse review

- Intended claim and configuration:
- Source revision, dirty state and relevant uncommitted differences:
- Material being reused: implementation, definition or execution result:
- Actual candidate differences and source relationships affected:
- Evidence and logs actually inspected; unavailable information:
- Applicability reasoning: inputs, criterion, method, assumptions and claim:
- Required new checks and unresolved engineering review:

This template is a manual teaching aid separate from generated engineering evidence. Coherent definitions, traceability and successful tests do not establish operational suitability or an approved product configuration.
