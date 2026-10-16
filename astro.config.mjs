import { defineConfig } from 'astro/config';
export default defineConfig({ srcDir: './site/src', site: 'https://and-gu.github.io',
  base: '/executable-engineering-lab', trailingSlash: 'always', output: 'static' });
