import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: 'src/core.js' // Specify your entry point here
    }
  }
});