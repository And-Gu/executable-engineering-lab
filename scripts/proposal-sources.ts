import { readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { analyzeProposal } from '../exercises/proposal.js';
import { loadSources, readYaml, root } from './sources.js';

export function loadProposalAnalyses() {
  const baseline = loadSources(); // Includes Node source-path checks.
  const paths = readdirSync(resolve(root, 'exercises/proposals')).filter(name => name.endsWith('.yaml')).sort();
  if (!paths.length) throw new Error('No proposal exercise fixtures found');
  const analyses = paths.map(name => {
    const sourcePath = `exercises/proposals/${name}`;
    return { sourcePath, analysis: analyzeProposal(baseline, readYaml(sourcePath)) };
  });
  const ids = analyses.map(item => item.analysis.proposal.id);
  if (new Set(ids).size !== ids.length) throw new Error('Duplicate proposal ID');
  return analyses;
}
