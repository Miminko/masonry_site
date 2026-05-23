import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function siteMetaPlugin(siteUrl: string): Plugin {
  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      if (!siteUrl) {
        return html
          .replace(/\n\s*<link rel="canonical"[^>]*>/, '')
          .replace(/\n\s*<meta property="og:url"[^>]*>/, '')
          .replaceAll('__OG_IMAGE__', '/images/stone-walkway-header.webp')
      }

      const imageUrl = `${siteUrl}/images/stone-walkway-header.webp`

      return html
        .replaceAll('__SITE_URL__', siteUrl)
        .replaceAll('__OG_IMAGE__', imageUrl)
    },
    closeBundle() {
      if (!siteUrl) return

      const distDir = resolve(process.cwd(), 'dist')
      const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`
      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${siteUrl}/</loc>
  </url>
  <url>
    <loc>${siteUrl}/privacy</loc>
  </url>
</urlset>
`

      writeFileSync(resolve(distDir, 'robots.txt'), robots)
      writeFileSync(resolve(distDir, 'sitemap.xml'), sitemap)
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteUrl = (env.VITE_SITE_URL ?? process.env.VITE_SITE_URL ?? '').replace(
    /\/$/,
    '',
  )

  return {
    plugins: [react(), tailwindcss(), siteMetaPlugin(siteUrl)],
  }
})
