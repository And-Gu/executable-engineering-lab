# Capstone: an inspectable engineering handover

Review the existing V0 radius-only proposal from operational question to a bounded next decision. No canonical edits, push, merge, publication or design approval are required.

At an identified checkout:

```sh
git rev-parse HEAD
git status --short
npm ci
npm run check
npm run evidence
npm run proposals
```

Record commands actually completed and their logs. If tsx CLI IPC is blocked by the environment, document substitution with `node --import tsx scripts/validate.ts` (or evidence.ts/proposals.ts); still run type checks, tests and Astro build.

1. Inspect NEED-001, REQ-COV-001, SCN-001, manifest, model/evaluator and registered assertions. State the operational question and narrower V0 geometric claim.
2. Apply the [radius-only contract](07-task-review.md#written-task-contract). Inspect the actual radius fixture and analysis, keeping criterion and fixed inputs unchanged.
3. Compare the threshold fixture separately. A valid passing analysis does not justify changing the criterion under that task. Do not combine candidates and attribute either result to the combination.
4. Inspect actual records, not outcome labels alone:

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

Reference generation is not assertion execution. Proposal analyses explicitly do not execute TEST-COV-001 against changed inputs. Canonical geometric FAIL remains expected; successful software tests preserve that finding.

For historical inspection choose an actual [validation run](https://github.com/And-Gu/executable-engineering-lab/actions/workflows/validate.yml), inspect revision/completed steps and available records. Artifacts expire after 30 days and may require sign-in. State unavailable evidence; local reproduction is a new event. A dirty flag does not snapshot every modified source, and today's sources may differ from historical definitions.

## Written handover

- Operational question and bounded modeled claim:
- Task boundary and evaluated definitions:
- Source revision, working-tree state and relevant differences:
- Actual commands/browser actions completed and logs/records inspected:
- Observation, criterion, numerical method and assumptions:
- Missing evidence, counterarguments and model limitations:
- Responsible next review and unresolved decision:

This written aid is separate from generated engineering evidence. Use actual observations; do not invent missing provenance or record an approval. A published lesson, green software check or geometric PASS does not establish operational detection performance, suitability or optimality.

The capstone closes the twelve-lesson sequence after release. It does not implement multiple sensors, dynamics, actual agents or governance integrations; those remain future capabilities with separate scope.
