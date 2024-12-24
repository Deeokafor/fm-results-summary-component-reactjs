import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://github.com/Deeokafor/fm-results-summary-component-reactjs.git',
  plugins: [react()],
})
