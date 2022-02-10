import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      utils: path.resolve(__dirname, './src/utils'),
      services: path.resolve(__dirname, './src/services'),
      ui: path.resolve(__dirname, './src/ui'),
      types: path.resolve(__dirname, './src/@types'),
      'redux/hooks': path.resolve(__dirname, './src/redux/hooks'),
    },
  },
  plugins: [react()],
})
