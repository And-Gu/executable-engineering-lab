import { unified } from '@astrojs/markdown-remark';
import v3Links from './scripts/remark-v3-links.mjs';
import { defineConfig } from 'astro/config';
export default defineConfig({ srcDir: './site/src', markdown: { processor: unified({ remarkPlugins: [v3Links] }) }, site: 'https://and-gu.github.io',
  base: '/executable-engineering-lab', trailingSlash: 'always', output: 'static' });
