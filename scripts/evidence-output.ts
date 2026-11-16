import { isAbsolute, relative, resolve } from 'node:path';

// Managed checks pass a fresh directory; standalone commands retain their documented paths.
export function evidenceDirectory(root: string): string {
  const parent = resolve(root, 'artifacts');
  const output = process.env.EVIDENCE_DIR ? resolve(root, process.env.EVIDENCE_DIR) : parent;
  const relation = relative(parent, output);
  if (relation.startsWith('..') || isAbsolute(relation)) throw new Error('EVIDENCE_DIR must be inside this checkout\'s artifacts directory.');
  return output;
}
