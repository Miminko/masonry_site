import type { Connect } from 'vite'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function redirectLegacyFavicon(middlewares: Connect.Server) {
  middlewares.use((req, res, next) => {
    const url = req.url?.split('?')[0]
    if (url === '/favicon.svg' || url === '/favicon.ico') {
      res.statusCode = 302
      res.setHeader('Location', '/favicon.svg')
      res.setHeader('Cache-Control', 'no-store')
      res.end()
      return
    }
    if (url === '/favicon.svg') {
      res.setHeader('Cache-Control', 'no-cache')
    }
    next()
  })
}

/** Browsers cache /favicon.svg and /favicon.ico aggressively; redirect to the real icon. */
function faviconRedirect(): Plugin {
  return {
    name: 'favicon-redirect',
    configureServer: (server) => redirectLegacyFavicon(server.middlewares),
    configurePreviewServer: (server) =>
      redirectLegacyFavicon(server.middlewares),
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), faviconRedirect()],
})
