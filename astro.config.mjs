import { unified } from '@astrojs/markdown-remark';
import v3Links from './scripts/remark-v3-links.mjs';
import { defineConfig } from 'astro/config';

const base = '/executable-engineering-lab';
const wrapUp = base + '/learn/v3/14-from-engineering-intent-to-continuous-integration/';
export default defineConfig({
  srcDir: './site/src',
  markdown: { processor: unified({ remarkPlugins: [v3Links] }) },
  site: 'https://and-gu.github.io',
  base,
  trailingSlash: 'always',
  output: 'static',
  redirects: {
    '/learn/v3/14-managing-engineering-knowledge-at-scale': wrapUp,
    '/learn/v3/15-choosing-the-next-engineering-capability': wrapUp,
  },
});
