import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import './tailwind.config.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
