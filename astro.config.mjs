import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  output: 'hybrid', // or 'server' (same issue)
  adapter: node({ mode: 'middleware' }),
  experimental: { assets: true },
});
