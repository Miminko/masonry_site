# Eavis Masonry Homepage

Marketing site for Ryan Eavis Traditional Stonemasonry, built with React, Vite, and Tailwind CSS.

## Development

```bash
npm install
cp .env.example .env   # optional for local dev
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

For production builds, set your live site URL (no trailing slash):

```bash
VITE_SITE_URL=https://eavisstone.ca npm run build
```

On Cloudflare Pages, add `VITE_SITE_URL` as an environment variable in **Settings → Environment variables** so canonical URLs, Open Graph tags, `robots.txt`, and `sitemap.xml` are generated correctly.

## Deployment (Cloudflare Pages)

This is a client-side routed SPA deployed as static files.

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `22` (set `NODE_VERSION=22` in environment variables) |
| Site URL | `VITE_SITE_URL=https://eavisstone.ca` |

Included in the repo:

- `public/_redirects` — SPA fallback (`/* → /index.html`) for direct loads of `/privacy`
- `public/_headers` — cache rules for `/assets/` and `/images/`, plus basic security headers

Set `VITE_SITE_URL=https://eavisstone.ca` in Cloudflare Pages environment variables (Production) so builds generate the correct canonical URLs, Open Graph tags, `robots.txt`, and `sitemap.xml`.

## Images

Project photos live in `public/images/`. Keep file sizes web-friendly (roughly under 300 KB each where possible) for faster loads on mobile connections. Several gallery images are still larger than ideal — re-export at max ~1600px wide if load times feel slow.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
