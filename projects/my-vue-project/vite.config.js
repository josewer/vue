import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    historyApiFallback: true // 🔹 Esto asegura que HMR funcione en rutas profundas
  }, 
  test: {
    globals: true,
    environment : "jsdom"
  }
})
