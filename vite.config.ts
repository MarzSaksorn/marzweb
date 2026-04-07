import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      Valentine: path.resolve(__dirname, './Valentine'),
    },
  },
  preview: {
    port: 5173,
    strictPort: true, 
  },
})
