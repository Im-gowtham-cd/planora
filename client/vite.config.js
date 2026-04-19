import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allows any tunnel (zrok, ngrok, etc.) to access the dev server
    allowedHosts: true, 
    // Necessary for Docker/Termux to expose the port correctly
    host: true,
    port: 3000
  }
})