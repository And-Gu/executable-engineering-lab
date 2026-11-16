import path from 'node:path';
import { root, json, requireRevision } from './delivery-environment.mjs';

export function assertManifest(manifest, expected) {
  if (!/^[a-f0-9]{40}$/.test(expected || '') || manifest?.schema_version !== 1 || manifest.source_commit !== expected || !Number.isFinite(Date.parse(manifest.built_at))) throw new Error('Missing, invalid or stale build revision. Build the clean expected commit before release verification.');
  return manifest;
}
export function localIdentity(expected, directory = root) {
  const revision = requireRevision(expected, directory);
  return assertManifest(json(path.join(directory, 'dist/build-information.json')), revision);
}
export async function verifyHosted(target, expected, record, fetcher = fetch) {
  const base = new URL(target);
  if (base.protocol !== 'https:' || base.username || base.password || base.search || base.hash || !base.pathname.endsWith('/')) throw new Error('Supply the public HTTPS base URL including its trailing slash.');
  async function get(route) {
    const url = new URL(route, base);
    url.searchParams.set('verification', String(Date.now()));
    const response = await fetcher(url, { redirect: 'error', signal: AbortSignal.timeout(15000), cache: 'no-store' });
    record.requests.push({ url: url.href, status: response.status, checked_at: new Date().toISOString() });
    if (!response.ok) throw new Error(`${url.pathname}: HTTP ${response.status}`);
    return response;
  }
  record.before = assertManifest(await (await get('build-information.json')).json(), expected);
  for (const route of ['', 'learn/', 'lab/', 'reference/', 'learn/v2/01-new-engineering-paradigm/']) {
    const html = await (await get(route)).text();
    if (!/<html[\s>]/i.test(html) || !/<title>[^<]+<\/title>/i.test(html) || !html.includes(base.pathname)) throw new Error(`${route || '/'} did not return the expected site HTML/base path.`);
  }
  record.after = assertManifest(await (await get('build-information.json')).json(), expected);
}
