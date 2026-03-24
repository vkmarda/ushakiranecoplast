import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),

    // Auto-optimize images at build time
    ViteImageOptimizer({
      png:  { quality: 80 },
      jpg:  { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
    }),

    // Auto-generate sitemap.xml at build time
    sitemap({
      hostname: 'https://ushakiranecoplast.com',
      dynamicRoutes: [
        // Core pages
        { url: '/', priority: 1.0, changefreq: 'daily' },
        { url: '/aboutus', priority: 0.7, changefreq: 'monthly' },
        { url: '/products', priority: 0.8, changefreq: 'weekly' },
        { url: '/gallery', priority: 0.5, changefreq: 'monthly' },
        { url: '/team', priority: 0.5, changefreq: 'yearly' },
        { url: '/industries', priority: 0.8, changefreq: 'weekly' },
        { url: '/why-garbage-bags', priority: 0.6, changefreq: 'monthly' },

        // Product detail pages
        { url: '/products/recycled-garbage-bags-hyderabad', priority: 0.8, changefreq: 'monthly' },
        { url: '/products/biomedical-waste-bags-bmwm-compliant', priority: 0.8, changefreq: 'monthly' },
        { url: '/products/plastic-bags-on-rolls-manufacturer', priority: 0.8, changefreq: 'monthly' },
        { url: '/products/stretch-wrap-film-pallet-wrapping', priority: 0.8, changefreq: 'monthly' },
        { url: '/products/ldpe-shrink-film-manufacturer-hyderabad', priority: 0.8, changefreq: 'monthly' },
        { url: '/products/ldpe-sheets-manufacturer-hyderabad', priority: 0.8, changefreq: 'monthly' },
        { url: '/products/ldpe-cover-industrial-packaging', priority: 0.8, changefreq: 'monthly' },
        { url: '/products/mulch-film-uv-resistant-agriculture', priority: 0.8, changefreq: 'monthly' },

        // Industry pages
        { url: '/industries/healthcare', priority: 0.8, changefreq: 'monthly' },
        { url: '/industries/hospitality', priority: 0.8, changefreq: 'monthly' },
        { url: '/industries/construction', priority: 0.8, changefreq: 'monthly' },
        { url: '/industries/agriculture', priority: 0.8, changefreq: 'monthly' },
        { url: '/industries/fmcg-retail', priority: 0.8, changefreq: 'monthly' },
        { url: '/industries/facility-management', priority: 0.8, changefreq: 'monthly' },
        { url: '/industries/pharma-laboratories', priority: 0.8, changefreq: 'monthly' },
        { url: '/industries/cold-storage-logistics', priority: 0.8, changefreq: 'monthly' },
      ]
    }),
  ],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        }
      }
    }
  }
})