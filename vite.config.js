import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path:
//  - Custom domain at root (cartXform.com)         -> base '/'  (default)
//  - GitHub Pages project site (no custom domain)  -> set VITE_BASE=/cart-transformations/
//    e.g.  VITE_BASE=/cart-transformations/ npm run build
export default defineConfig({
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})
