import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const marker = 'EEL_RESEARCH_NOT_FOR_PUBLICATION';
const sourceDirs = ['site/src', 'site/public', 'public'];
const outputDir = 'dist';
const textFile = /\.(?:astro|md|mdx|html|css|js|mjs|cjs|jsx|ts|tsx|json|yaml|yml|txt|xml|svg)$/i;
const prohibitedPaths = [/(?:\.\.\/)+research\//, /(?:^|["'])\/?research\/(?:v\d+\/|INDEX\.md|README\.md)/i];

async function listFiles(folder) {
  let entries;
  try {
    entries = await readdir(path.join(root, folder), { withFileTypes: true });
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
  const results = [];
  for (const entry of entries) {
    const relativeName = path.posix.join(folder.replaceAll('\\', '/'), entry.name);
    if (entry.isDirectory()) results.push(...await listFiles(relativeName));
    else if (entry.isFile()) results.push(relativeName);
  }
  return results;
}

const backgroundFiles = await listFiles('research');
if (!backgroundFiles.some(file => file.endsWith('.md'))) {
  throw new Error('No research archive found under root research/. Check the repository layout.');
}

const violations = [];
for (const folder of sourceDirs) {
  for (const file of await listFiles(folder)) {
    if (!textFile.test(file)) continue;
    const content = await readFile(path.join(root, file), 'utf8');
    if (content.includes(marker) || prohibitedPaths.some(pattern => pattern.test(content))) {
      violations.push(file + ': direct reference to, or inclusion of, unpublished research');
    }
  }
}

const built = await listFiles(outputDir);
for (const file of built) {
  if (file.split('/').includes('research')) {
    violations.push(file + ': research archive path appears in website output');
  }
  if (!textFile.test(file)) continue;
  const content = await readFile(path.join(root, file), 'utf8');
  if (content.includes(marker)) {
    violations.push(file + ': unpublished research marker found in website output');
  }
}

if (violations.length) {
  console.error('Research isolation check FAILED:\n' + violations.map(item => ' - ' + item).join('\n'));
  process.exitCode = 1;
} else {
  console.log('Research isolation check passed (' + backgroundFiles.length + ' research files; ' + built.length + ' built files inspected).');
  if (!built.length) console.log('Note: no dist/ found; run npm run build for full output inspection.');
}
