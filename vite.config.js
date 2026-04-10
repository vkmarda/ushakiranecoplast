import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [
    react(),

    // Auto-optimize images at build time
    // ViteImageOptimizer({
    //   png:  { quality: 80 },
    //   jpg:  { quality: 80 },
    //   jpeg: { quality: 80 },
    //   webp: { quality: 80 },
    // }),

    // Auto-generate sitemap.xml at build time
    sitemap({
  hostname: 'https://ushakiranecoplast.com',
  dynamicRoutes: [
    '/',
    '/aboutus',
    '/products',
    '/gallery',
    '/team',
    '/industries',
    '/why-garbage-bags',

    // Product detail pages
    '/products/recycled-garbage-bags-hyderabad',
    '/products/biomedical-waste-bags-bmwm-compliant',
    '/products/plastic-bags-on-rolls-manufacturer',
    '/products/stretch-wrap-film-pallet-wrapping',
    '/products/ldpe-shrink-film-manufacturer-hyderabad',
    '/products/ldpe-sheets-manufacturer-hyderabad',
    '/products/ldpe-cover-industrial-packaging',
    '/products/mulch-film-uv-resistant-agriculture',

    // Industry pages
    '/industries/healthcare',
    '/industries/hospitality',
    '/industries/construction',
    '/industries/agriculture',
    '/industries/fmcg-retail',
    '/industries/facility-management',
    '/industries/pharma-laboratories',
    '/industries/cold-storage-logistics',
  ]
}),
  ],

  build: {
    outDir: 'dist/client',
    rollupOptions: {
      output: {
        manualChunks: isSsrBuild ? undefined : {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
}))