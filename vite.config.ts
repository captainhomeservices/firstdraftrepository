import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

function copyPublicPlugin() {
  return {
    name: 'copy-public-resilient',
    enforce: 'post' as const,
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const publicDir = path.resolve(__dirname, 'public');
      if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
      const files = fs.readdirSync(publicDir);
      for (const file of files) {
        const src = path.join(publicDir, file);
        const dest = path.join(distDir, file);
        const stat = fs.statSync(src);
        if (stat.isFile()) {
          try {
            fs.copyFileSync(src, dest);
          } catch {
          }
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), copyPublicPlugin()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    copyPublicDir: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['lucide-react'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  server: {
    port: 5173,
    host: true,
  },
});
