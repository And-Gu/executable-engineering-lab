# Chapter 5 — reproduce four separate configurations

Use an identified checkout, Node from `.nvmrc`, `npm ci` and `npm run check`. Run the following from the repository root. It loads validated canonical sources, copies the sensor inputs and calls the same pure modules as the browser. No canonical source is edited. Each row is an independent one-sensor trial, not a combined architecture.

```sh
node --import tsx --input-type=module <<'JS'
import { loadSources } from './scripts/sources.ts';
import { calculateCoverage } from './models/coverage/coverage.ts';
import { evaluateCoverage } from './models/coverage/evaluate.ts';
const { scenario, requirement, manifest } = loadSources();
const candidates = [
  { x: 50, y: 50, radius: 35 },
  { x: 0, y: 50, radius: 35 },
  { x: 50, y: 50, radius: 45 },
  { x: 50, y: 50, radius: 50 },
];
console.log('Exploratory calculations only: no retained evidence or reference-test execution.');
for (const [index, sensor] of candidates.entries()) {
  const inputs = { area: structuredClone(scenario.area), sensor };
  const result = calculateCoverage(inputs);
  const evaluation = evaluateCoverage(result, requirement.threshold_percent);
  console.log(JSON.stringify({ trial: index + 1, inputs,
    thresholdPercent: requirement.threshold_percent,
    modelId: manifest.model.id, modelVersion: manifest.model.version,
    result, evaluation }));
}
JS
```

Compare the printed exact inputs, counts, method/resolution, percentage and margin with the four Chapter 5 rows. Browser percentages and margins are formatted to two decimals; the evaluator uses unrounded values. The selected whole-unit candidates are teaching trials, not new canonical scenarios. All use the canonical area and criterion from this checkout. If those sources change, this protocol needs review rather than assuming old outcomes still apply.

The first pair varies only x, holding y and radius fixed. The last pair varies only radius at a fixed center. Record predictions before executing, and inspect results rather than editing assertions to make candidates pass. The example introduces no alternative formula, ranking or cost model.

`npm run evidence` separately generates reference evidence for canonical SCN-001. Preserve its expected engineering FAIL and inspect actual source commit, dirty status and execution metadata. These terminal calculations do not execute TEST-COV-001 against candidates and do not create a retained artifact. If copying output into a report, retain the checkout identity, source differences and context; do not relabel it as CI verification.

`npm run proposals` analyzes the existing isolated fixtures. The radius-45 fixture matches trial 3 when used with the unchanged V0 baseline; it does not cover trial 2's placement edit or trial 4. Those analyses remain unapproved and separate from reference evidence. See [the proposal exercise](02-proposal-exercise.md) for provenance, invalid references and artifact limitations.

A larger modeled footprint is not an available product specification. Cost, reliability, installation access and real sensing performance remain unanswered. A geometric PASS neither selects an optimum nor establishes operational suitability.
