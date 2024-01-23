import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  resolve: {
    alias: {
      scss: '/src/scss',
      js: '/src/js',
    },
  },
});
