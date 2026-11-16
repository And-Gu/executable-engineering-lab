import { preflight, requireRevision } from './delivery-environment.mjs';
import { checkBuildOwner } from './delivery-record.mjs';
try {
  checkBuildOwner();
  preflight();
  if (process.argv.includes('--release')) console.log(`OK release source: ${requireRevision(process.env.EXPECTED_REVISION)}`);
} catch (error) { console.error(error.message); process.exitCode = 1; }
