import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// On Vercel the site is served from the domain root ("/").
// On GitHub Pages it is served from "/<repo-name>/".
// Vercel sets process.env.VERCEL during the build, so we switch the base path accordingly.
const base = process.env.VERCEL ? "/" : "/my-e-commerce-app-project/"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})