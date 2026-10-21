# Chapter 6 — inspect the execution behind the evidence

Use an identified checkout and Node from `.nvmrc`. Record the revision with `git rev-parse HEAD` and inspect `git status --short`. Install with `npm ci` and run `npm run check` for source validation, tests, types and build.

## Run the registered assertion

```sh
npm test -- models/coverage/verification.test.ts
```

Read `models/coverage/verification.test.ts`. It loads canonical sources, calculates coverage and evaluates the criterion. It expects coverage between 38 and 39, a 50% threshold, a false pass flag and a negative margin. A successful test confirms these assertions; the expected engineering outcome is FAIL. Preserve the assertions rather than editing them to make a candidate appear verified.

## Generate and inspect the reference evaluation

```sh
npm run evidence
node --input-type=module <<'JS'
import { readFileSync } from 'node:fs';
const record = JSON.parse(readFileSync('artifacts/reference-evidence.json', 'utf8'));
console.log(JSON.stringify({ id: record.id, definition: record.definition,
  calculation: record.calculation, execution: record.execution }, null, 2));
JS
```

This prints an actual record from this checkout; no saved result is embedded in the lesson. Inspect:

- `definition`: registered IDs, model version, exact area/sensor inputs, units, threshold and assumptions. It does not contain all YAML statements/titles.
- `calculation`: cell count/total, estimated percentage, method/grid, margin and requirement outcome.
- `execution`: source commit, dirty status, timestamp, context, run URL where available and runtime version.

Read `scripts/evidence.ts`: the evidence command validates/loads sources and directly calls `calculateCoverage` and `evaluateCoverage`. It does **not** invoke Vitest or execute the reference assertions. `definition.testId` associates the registered context, not proof of assertion execution. The focused command above supplies separate test-run output. In CI, inspect the chosen revision's `npm run check` and `npm run evidence` steps in `.github/workflows/validate.yml` and their logs. Do not infer both activities from one record ID.

A dirty checkout must stay labeled dirty. Inspect source differences and preserve them when reviewing the result; the commit alone cannot reproduce uncommitted changes. Resolve recorded definitions against sources at that revision rather than substituting today's YAML. CI reference artifacts expire after 30 days and may require GitHub sign-in; local reproduction creates a new execution with its own context, not the original CI event.

## Contrast a proposal

```sh
npm run proposals
```

Inspect a generated JSON file under `artifacts/proposals/`. Its `kind` is `unapproved-proposal-analysis`; its definition contains baseline/proposed sources, and `verification.testExecuted` is false. Compare its changed input or criterion with reference evidence before interpreting its outcome. It does not claim that TEST-COV-001 executed proposed inputs. See [the proposal exercise](02-proposal-exercise.md) for isolated fixtures and provenance.

Browser trials likewise compute temporary proposals without executing Vitest, editing YAML or generating retained CI evidence. Passing the modeled criterion establishes neither its operational justification nor physical sensor performance.
