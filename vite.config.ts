import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// ⚠️ Replace 'my-vite-app' with your actual GitHub repo name
export default defineConfig({
  base: '/Cybervantage',
  plugins: [
    react(),
    svgr(), // Add SVGR plugin here
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
