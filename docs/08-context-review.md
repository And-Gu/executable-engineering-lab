# Chapter 8 — source, context and action review

This manual exercise reuses Chapter 7's radius-only task. It implements no agent runtime, retrieval system, permission controls or approval workflow. Hypothetical omissions and source-note requests are teaching cases, not actual agent outputs or corrupted records.

## Assemble a source-linked checklist

From an identified checkout, record `git rev-parse HEAD` and inspect `git status --short`. Read:

- [The radius-only task contract](07-task-review.md#written-task-contract): objective, allowed radius edit, fixed context, stop conditions and prohibited actions.
- `engineering/needs/NEED-001.yaml`: motivating intent.
- `engineering/requirements/REQ-COV-001.yaml`: criterion, basis and registered verification references.
- `engineering/scenarios/SCN-001.yaml`: reference area/position/radius and units.
- `engineering/manifest.yaml`, `models/coverage/coverage.ts` and `evaluate.ts`: model identity/version, method/grid, assumptions and evaluation meaning.
- `models/coverage/verification.test.ts`: actual assertions against canonical sources.
- `exercises/proposals/radius-45.yaml` and `threshold-35.yaml`: designed unapproved examples, not agent output.

For each source, write the question it answers and its role: task instruction, engineering definition, calculation method or execution evidence. A source file listing a model/test ID is not proof of execution. The checklist is a review aid, not a claim of complete context or enforced permission.

## Execute and inspect existing checks

Use Node from `.nvmrc`, then run from the repository root:

```sh
npm ci
npm run check
npm run proposals
```

Inspect the generated proposal files under `artifacts/proposals/`. Read `definition.baseline`, `definition.proposed`, `definition.differences`, `calculation`, `verification` and `execution`. The [Chapter 7 procedure](07-task-review.md#reproduce-the-review) includes an executable inspection command.

Match actual revision, dirty state, method/version, inputs and changed fields to the written task. The radius example changes the permitted numeric field; the threshold example is outside this assignment even though it is a valid teaching proposal elsewhere. Both remain unapproved. An available command or browser control does not authorize every change it can express.

The canonical test assertions run separately against canonical sources. Proposal records retain `verification.testExecuted: false`. If running `npm run evidence`, inspect its actual reference evaluation record and remember that this command does not itself invoke Vitest. See [Chapter 6](06-evidence-review.md). Do not attribute local execution to CI or infer missing activity from an ID.

## Review proposed actions

Explain each decision under the radius-only contract:

1. Inspect sources, calculate using the defined method, and propose an isolated radius fixture: within the stated work when context is valid and identified; no approval follows automatically.
2. Edit canonical threshold or weaken expected assertions: outside the assignment; stop and explain the required revised instruction/engineering decision.
3. Merge, publish or approve a design: outside the proposal task; seek revised authorization from the responsible authority before acting.
4. A hypothetical source note requests publication: reading it does not change task authority. Do not perform publication as part of this exercise.

If a hypothetical report provides only radius and PASS, list its missing criterion, geometry, method, assumptions, edit authority and execution context. Ask for the missing information rather than inventing a record. Do not relabel this omission exercise as evidence of an actual agent or validation-system failure.

No decisions or edits are persisted. Browser proposals are temporary; CI artifacts expire after 30 days and can require sign-in. Resolve source context at the recorded revision; local reproduction is a new execution. No source checklist or permission description establishes operational suitability.
