import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/crmdashboardone/',   // 👈 Important for subfolder hosting
  plugins: [tailwindcss(), react()],
    server: {
    host: '0.0.0.0',     // 🔓 Allow access from other devices
    port: 5173,           // Optional: force same port if needed
  },
})
