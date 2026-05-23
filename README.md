# Eavis Masonry Homepage

Marketing site for Ryan Eavis Traditional Stonemasonry, built with React, Vite, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/`.

## Deployment

This is a client-side routed SPA. Configure your host to serve `index.html` for unknown paths:

- **Netlify:** `public/_redirects` is included
- **Vercel:** `vercel.json` is included
- **GitHub Pages / other static hosts:** add an equivalent SPA fallback rule

## Images

Project photos live in `public/images/`. Keep file sizes web-friendly (roughly under 200 KB each where possible) for faster loads on mobile connections.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
