import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import reactLazy from 'vite-plugin-react-lazy'

export default defineConfig({
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
})
