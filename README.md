# hybrid-astro-assets-issue
Minimal reproduction repo for images (experimental astro:assets) not being rendered in ssr pages on hybrid mode.

The two pages `prerendered.astro` and `ssr.astro` are almost identical, except one `export const prerender = true` and the other `export const prerender = false`.

1. npm ci
2. npm run build
3. npm run preview
4. go to http://localhost:3000/prerendered (all 4 images are displayed)
5. go to http://localhost:3000/ssr (images are not displayed)

Switching to `server` mode works fine for both pages.
