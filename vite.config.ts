import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/ammartin8.github.io',  // GitHub Pages deployment path
  
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['framer-motion'],
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
