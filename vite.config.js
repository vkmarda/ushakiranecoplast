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
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date('2026-04-16'),
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

        // Garbage bags index + sub-pages
        '/products/garbage-bags',
        '/products/garbage-bags/hotel-garbage-bags-hyderabad',
        '/products/garbage-bags/hospital-garbage-bags-hyderabad',
        '/products/garbage-bags/industrial-garbage-bags-hyderabad',
        '/products/garbage-bags/facility-management-garbage-bags-india',
        '/products/garbage-bags/restaurant-garbage-bags-hyderabad',
        '/products/garbage-bags/construction-garbage-bags-hyderabad',
        '/products/garbage-bags/supermarket-garbage-bags-india',
        '/products/garbage-bags/pharmaceutical-waste-bags-hyderabad',
        '/products/garbage-bags/cold-storage-garbage-bags-india',
        '/products/garbage-bags/office-garbage-bags-hyderabad',
        '/products/garbage-bags/school-college-garbage-bags-india',
        '/products/garbage-bags/airport-garbage-bags-india',
        '/products/garbage-bags/plastic-bags-manufacturer-hyderabad',
        '/products/garbage-bags/plastic-bags-manufacturer-india',
        '/products/garbage-bags/black-garbage-bags-hyderabad',
        '/products/garbage-bags/garbage-bags-wholesale-hyderabad',
        '/products/garbage-bags/dustbin-bags-hyderabad',
        '/products/garbage-bags/coloured-garbage-bags-india',
        '/products/garbage-bags/eco-friendly-garbage-bags-hyderabad',
        '/products/garbage-bags/plastic-bags-supplier-hyderabad',
        '/products/garbage-bags/garbage-bags-telangana',
        '/products/garbage-bags/garbage-bags-andhra-pradesh',
        '/products/garbage-bags/garbage-bags-bangalore',
        '/products/garbage-bags/garbage-bags-chennai',
        '/products/garbage-bags/garbage-bags-south-india',
        '/products/garbage-bags/garbage-bags-secunderabad',
        '/products/garbage-bags/garbage-bags-mumbai',

        // Industry pages
        '/industries/healthcare',
        '/industries/hospitality',
        '/industries/construction',
        '/industries/agriculture',
        '/industries/fmcg-retail',
        '/industries/facility-management',
        '/industries/pharma-laboratories',
        '/industries/cold-storage-logistics',
      ],
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