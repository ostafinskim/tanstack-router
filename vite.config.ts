import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("./src")
    }
  },
  plugins: [
    tailwindcss(),
    tanstackRouter({
      target: 'react',
      // prefetching, bundling
      autoCodeSplitting: true
    }),
    react()
  ],
})
