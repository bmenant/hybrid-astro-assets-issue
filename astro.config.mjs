import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  site: 'http://localhost:3000',
  //output: 'server', // works
  output: 'hybrid', // img not rendered on ssr pages
  adapter: node({ mode: 'middleware' }),
  experimental: { assets: true },
});
