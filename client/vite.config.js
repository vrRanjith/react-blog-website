import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 8000 - API
  // 5173 - CLIENT
  // /api -> http://localhost:5173/api
  server: {
    proxy: {
      "/api": "http://localhost:8000",
    }
  } ,
  plugins: [react()],
})
