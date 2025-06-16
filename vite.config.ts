import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(), // Add SVGR plugin here
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
