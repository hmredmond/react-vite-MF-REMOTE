import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_app',
      filename: 'remoteEntry.js',
      exposes: {
        './Sample1': './src/pages/Sample1',
        './Sample2': './src/pages/Sample2',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
});
