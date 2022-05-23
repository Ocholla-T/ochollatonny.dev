import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layouts': path.resolve(__dirname, './src/components/layouts'),
      '@images': path.resolve(__dirname, './src/images'),
      '@styles': path.resolve(__dirname, './src/styles'),
    },
  },
  plugins: [
    svgr({
      icon: true,
      typescript: true,
      ref: true,
    }),
    react(),
  ],
})
