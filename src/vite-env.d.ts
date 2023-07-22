/// <reference types="vite/client" />
/// <reference types="vitest" />

interface ImportMetaEnv {
  readonly VITE_PODCASTS_API_URL: string
  readonly VITE_CORS_PROXY: string
  readonly VITE_PODCASTS_GENRE_ID: number
  readonly VITE_PODCASTS_LIMIT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
