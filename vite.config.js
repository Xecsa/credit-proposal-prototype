import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
// base './' so the built site works from any sub-path (e.g. https://<user>.github.io/<repo>/)
// Two pages: the prototype (index.html) and the separate research workspace (research/index.html).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        research: resolve(__dirname, 'research/index.html')
      }
    }
  }
});
