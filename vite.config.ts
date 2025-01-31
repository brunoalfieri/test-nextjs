import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    setupFiles: ['./tests/setupTests.ts'],
    environment: 'jsdom',
    reporters: ['verbose'],
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['text-summary'],
      exclude: ['**/node_modules/**', '**/dist/**'],
      include: ['tests/**/*.spec.{ts,tsx}'],
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
