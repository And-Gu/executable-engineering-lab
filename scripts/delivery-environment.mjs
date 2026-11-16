import { execFileSync, spawnSync } from 'node:child_process';
import { accessSync, constants, existsSync, readFileSync, realpathSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const json = file => JSON.parse(readFileSync(file, 'utf8'));
export function checkout(directory = root) {
  const git = args => execFileSync('git', args, { cwd: directory, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }).trim();
  return { revision: git(['rev-parse', 'HEAD']), dirty: Boolean(git(['status', '--porcelain', '--untracked-files=all'])) };
}
export function requireRevision(expected, directory = root) {
  const state = checkout(directory);
  if (state.dirty) throw new Error('Release verification requires a clean committed checkout. Use --preview for working-tree checks.');
  if (expected && state.revision !== expected) throw new Error('Checkout differs from the assigned revision.');
  return state.revision;
}
export function preflight(directory = root, { dependencies = true } = {}) {
  const errors = [], check = (name, inspect) => {
    try { inspect(); console.log(`OK ${name}`); }
    catch (error) { errors.push(`${name}: ${error.message}`); }
  };
  check('repository', () => {
    const actual = execFileSync('git', ['rev-parse', '--show-toplevel'], { cwd: directory, encoding: 'utf8' }).trim();
    if (realpathSync(actual) !== realpathSync(directory)) throw new Error(`Use the repository at ${directory}.`);
  });
  check('Node', () => {
    const expected = readFileSync(path.join(directory, '.nvmrc'), 'utf8').trim();
    if (process.versions.node !== expected) throw new Error(`Select Node ${expected} from .nvmrc (current ${process.versions.node}).`);
  });
  check('npm', () => {
    const version = execFileSync('npm', ['--version'], { encoding: 'utf8' }).trim();
    if (!version.startsWith('10.')) throw new Error(`Use npm 10 (current ${version}).`);
  });
  if (dependencies) check('locked and installed dependencies', () => {
    const manifest = json(path.join(directory, 'package.json')), lock = json(path.join(directory, 'package-lock.json'));
    for (const group of ['dependencies', 'devDependencies']) {
      if (JSON.stringify(manifest[group]) !== JSON.stringify(lock.packages[''][group])) throw new Error('Manifest and lockfile disagree. Reconcile them before npm ci.');
      for (const name of Object.keys(manifest[group] || {})) {
        const installed = path.join(directory, 'node_modules', name, 'package.json');
        if (!existsSync(installed) || json(installed).version !== lock.packages[`node_modules/${name}`]?.version) throw new Error(`${name} is missing or differs from the lockfile. Run npm ci at the repository root.`);
      }
    }
  });
  check('output directory', () => accessSync(directory, constants.W_OK));
  if (errors.length) throw new Error(`Environment preflight failed:\n${errors.map(e => `- ${e}`).join('\n')}`);
}
export function command(executable, args, env = {}, directory = root) {
  const result = spawnSync(executable, args, { cwd: directory, env: { ...process.env, ...env }, stdio: 'inherit' });
  if (result.error || result.status !== 0) throw new Error(result.error?.message || `${executable} exited ${result.status ?? result.signal}`);
}
