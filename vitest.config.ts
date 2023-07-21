import { defineConfig } from 'vitest';

export default defineConfig({
  globals: true,
  environment: 'happy-dom',
  setupFiles: '.vitest/setup',
  include: ['**/test.{ts,tsx}']
})
