import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { calculateCoverage } from '../models/coverage/coverage.js';
import { evaluateCoverage } from '../models/coverage/evaluate.js';
import { loadSources, root } from './sources.js';
const { requirement, scenario, manifest } = loadSources();
const result = calculateCoverage({ area: scenario.area, sensor: scenario.sensor });
const evaluation = evaluateCoverage(result, requirement.threshold_percent);
const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
const dirty = execFileSync('git', ['status', '--porcelain', '--untracked-files=all'], { cwd: root, encoding: 'utf8' }).trim().length > 0;
const record = {
  id: `RESULT-${commit}-${Date.now()}`,
  definition: { testId: manifest.test.id, requirementId: requirement.id, scenarioId: scenario.id,
    modelId: manifest.model.id, modelVersion: manifest.model.version,
    inputs: { area: scenario.area, sensor: scenario.sensor }, units: scenario.units,
    thresholdPercent: requirement.threshold_percent, assumptions: manifest.model.assumptions },
  calculation: { ...result, ...evaluation, status: evaluation.pass ? 'PASS' : 'FAIL' },
  execution: { sourceCommit: commit, workingTreeDirty: dirty, runTimestamp: new Date().toISOString(),
    context: process.env.GITHUB_ACTIONS === 'true' ? 'github-actions' : 'local-cli',
    runUrl: process.env.GITHUB_RUN_ID ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}` : null,
    nodeVersion: process.version },
};
mkdirSync(resolve(root, 'artifacts'), { recursive: true });
writeFileSync(resolve(root, 'artifacts/reference-evidence.json'), JSON.stringify(record, null, 2) + '\n');
console.log(`REQ-COV-001: ${result.coveragePercent}% → ${record.calculation.status}. Evidence: artifacts/reference-evidence.json`);
// An engineering FAIL is an expected finding, not an infrastructure failure.
