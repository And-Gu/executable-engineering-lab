import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { root } from './sources.js';
import { loadProposalAnalyses } from './proposal-sources.js';

const output = resolve(root, 'artifacts/proposals');
// A failed invocation must not leave old proposal outputs looking like fresh results.
if (existsSync(output)) rmSync(output, { recursive: true });
const analyses = loadProposalAnalyses(); // Validate every fixture before writing any report.
const commit = execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' }).trim();
const dirty = execFileSync('git', ['status', '--porcelain', '--untracked-files=all'], { cwd: root, encoding: 'utf8' }).trim().length > 0;
const execution = { sourceCommit: commit, workingTreeDirty: dirty, runTimestamp: new Date().toISOString(),
  context: process.env.GITHUB_ACTIONS === 'true' ? 'github-actions' : 'local-cli',
  runUrl: process.env.GITHUB_RUN_ID ? `${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}/actions/runs/${process.env.GITHUB_RUN_ID}` : null,
  nodeVersion: process.version };
mkdirSync(output, { recursive: true });
for (const { sourcePath, analysis } of analyses) {
  const record = {
    id: `ANALYSIS-${analysis.proposal.id}-${commit}-${Date.now()}`,
    kind: 'unapproved-proposal-analysis',
    verification: { testExecuted: false, referenceTestId: analysis.baseline.manifest.test.id,
      explanation: 'Shared model/evaluator analysis only; not an execution of TEST-COV-001 against this proposal.' },
    definition: { fixtureSource: sourcePath, analysisSource: 'exercises/proposal.ts',
      proposal: analysis.proposal, baseline: analysis.baseline, proposed: analysis.proposed, differences: analysis.differences },
    calculation: analysis.calculation,
    execution,
  };
  writeFileSync(resolve(output, `${analysis.proposal.id}.json`), JSON.stringify(record, null, 2) + '\n');
  const result = analysis.calculation.proposed;
  console.log(`${analysis.proposal.id}: ${result.coverage.coveragePercent}% against ${result.thresholdPercent}% → ${result.evaluation.pass ? 'PASS' : 'FAIL'} (unapproved proposal analysis)`);
}
