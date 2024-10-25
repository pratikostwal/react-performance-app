// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-performance-app/',  // Update this to match your repository name
  plugins: [react()]
});
