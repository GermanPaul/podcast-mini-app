import { defineConfig } from 'vitest/config'
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())}

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    server: {
      proxy: {
        '/api': {
          target: process.env.VITE_PODCASTS_API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
}
