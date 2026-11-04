import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const vendorChunks = {
  three: ['three'],
  react: ['react', 'react-dom', 'react-router-dom'],
  motion: ['framer-motion'],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          return Object.keys(vendorChunks).find((name) =>
            vendorChunks[name].some((pkg) => id.includes(`/node_modules/${pkg}/`))
          )
        },
      },
    },
  },
})
