import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { execSync } from 'node:child_process';

// Build identifier saved with each research recording, so it can be traced to the prototype build that was tested.
let commit = process.env.COMMIT_REF || '';
try { commit = commit || execSync('git rev-parse --short HEAD').toString().trim(); } catch (e) { /* not a git checkout */ }
const buildId = `${(commit || 'local').slice(0, 7)} · ${new Date().toISOString().slice(0, 10)}`;
// base './' so the built site works from any sub-path (e.g. https://<user>.github.io/<repo>/)
// Two pages: the prototype (index.html) and the separate research workspace (research/index.html).
export default defineConfig({
  base: './',
  plugins: [react()],
  define: { __BUILD_ID__: JSON.stringify(buildId) },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        research: resolve(__dirname, 'research/index.html')
      }
    }
  }
});
