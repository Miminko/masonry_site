/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string
  readonly VITE_PHONE_NUMBER?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
