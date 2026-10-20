import { loadProposalAnalyses } from './proposal-sources.js';
import { loadSources } from './sources.js';
loadSources();
console.log('Engineering schemas, IDs, relationships and source paths validated.');
loadProposalAnalyses();
console.log('Unapproved proposal fixtures validated separately from canonical definitions.');
