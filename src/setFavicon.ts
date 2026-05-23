/** Apply favicon with a Vite-resolved URL (content-hashed in production). */
export function setFavicon(href: string) {
  const selector = "link[rel='icon'], link[rel='shortcut icon']"
  document.querySelectorAll(selector).forEach((node) => node.remove())

  const icon = document.createElement('link')
  icon.rel = 'icon'
  icon.type = 'image/svg+xml'
  icon.href = href
  document.head.append(icon)

  const shortcut = document.createElement('link')
  shortcut.rel = 'shortcut icon'
  shortcut.href = href
  document.head.append(shortcut)
}
