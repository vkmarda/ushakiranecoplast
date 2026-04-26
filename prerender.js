import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const routes = [
  '/',
  '/aboutus',
  '/products',
  '/gallery',
  '/team',
  '/industries',
  '/why-garbage-bags',
  '/products/recycled-garbage-bags-hyderabad',
  '/products/biomedical-waste-bags-bmwm-compliant',
  '/products/plastic-bags-on-rolls-manufacturer',
  '/products/stretch-wrap-film-pallet-wrapping',
  '/products/ldpe-shrink-film-manufacturer-hyderabad',
  '/products/ldpe-sheets-manufacturer-hyderabad',
  '/products/ldpe-cover-industrial-packaging',
  '/products/mulch-film-uv-resistant-agriculture',
  '/industries/healthcare',
  '/industries/hospitality',
  '/industries/construction',
  '/industries/agriculture',
  '/industries/fmcg-retail',
  '/industries/facility-management',
  '/industries/pharma-laboratories',
  '/industries/cold-storage-logistics',
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
]

// Always read from dist/client/index.html, but use a clean template:
// If it still has <!--app-html--> it's a fresh Vite build — save as template.
// Otherwise we're running standalone — use the previously saved template.
const clientHtml = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const templateBackupPath = toAbsolute('dist/template.html')

let template
if (clientHtml.includes('<!--app-html-->')) {
  template = clientHtml
  fs.writeFileSync(templateBackupPath, template)
} else {
  template = fs.readFileSync(templateBackupPath, 'utf-8')
}

const { render } = await import('./dist/server/entry-server.js')

for (const url of routes) {
  const { html: appHtml } = await render(url)

  // ── React 19 + react-helmet-async v3 behaviour ──────────────────────────
  // Helmet tags are rendered as React elements. React 19's renderToString hoists
  // <title>, <meta>, <link> to the start of the output (before the first <div).
  // <script type="application/ld+json"> stay in the body at their render position.
  // We extract both groups and move them into <head>.

  const firstDivIdx = appHtml.indexOf('<div')
  const preDivContent = firstDivIdx > 0 ? appHtml.slice(0, firstDivIdx) : ''
  let bodyContent   = firstDivIdx > 0 ? appHtml.slice(firstDivIdx) : appHtml

  // 1. Separate <title> from the rest of the pre-div head tags
  const titleMatch = preDivContent.match(/<title[^>]*>[\s\S]*?<\/title>/)
  const titleTag      = titleMatch ? titleMatch[0] : ''
  const otherHeadTags = preDivContent.replace(titleTag, '').trim()

  // 2. Pull JSON-LD scripts out of the body
  const ldJsonRegex = /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/g
  const ldJsonScripts = [...bodyContent.matchAll(ldJsonRegex)].map(m => m[0])
  ldJsonScripts.forEach(s => { bodyContent = bodyContent.replace(s, '') })

  // 3. Assemble final HTML
  let finalHtml = template.replace('<!--app-html-->', bodyContent)

  // Replace template <title> with page-specific title
  if (titleTag) {
    finalHtml = finalHtml.replace(/<title>[\s\S]*?<\/title>/, titleTag)
  }

  // Remove template-level tags that Helmet will supply per-page,
  // so we don't end up with duplicates in <head>
  finalHtml = finalHtml
    .replace(/<link[^>]*rel=["']canonical["'][^>]*>/g, '')
    .replace(/<meta[^>]*name=["']description["'][^>]*>/g, '')
    .replace(/<meta[^>]*name=["']robots["'][^>]*>/g, '')

  // Inject other head tags (meta, link, preload) + JSON-LD scripts before </head>
  const headInjection = [otherHeadTags, ...ldJsonScripts].filter(Boolean).join('\n  ')
  if (headInjection) {
    finalHtml = finalHtml.replace('</head>', `  ${headInjection}\n</head>`)
  }

  const filePath = url === '/'
    ? 'dist/client/index.html'
    : `dist/client${url}/index.html`

  fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true })
  fs.writeFileSync(toAbsolute(filePath), finalHtml)
  console.log('pre-rendered:', url)
}

// ── Generate sitemap.xml with trailing slashes ──────────────────────────────
const BASE    = 'https://ushakiranecoplast.com'
const LASTMOD = '2026-04-17'

const sitemapRoutes = [
  { path: '/',            changefreq: 'weekly',  priority: '1.0' },
  { path: '/products/',   changefreq: 'weekly',  priority: '0.9' },
  { path: '/industries/', changefreq: 'weekly',  priority: '0.9' },
  { path: '/aboutus/',    changefreq: 'monthly', priority: '0.7' },
  { path: '/gallery/',    changefreq: 'monthly', priority: '0.6' },
  { path: '/team/',       changefreq: 'monthly', priority: '0.5' },
  { path: '/why-garbage-bags/', changefreq: 'monthly', priority: '0.7' },
  { path: '/products/recycled-garbage-bags-hyderabad/',        changefreq: 'monthly', priority: '0.8' },
  { path: '/products/biomedical-waste-bags-bmwm-compliant/',   changefreq: 'monthly', priority: '0.8' },
  { path: '/products/plastic-bags-on-rolls-manufacturer/',     changefreq: 'monthly', priority: '0.8' },
  { path: '/products/stretch-wrap-film-pallet-wrapping/',      changefreq: 'monthly', priority: '0.8' },
  { path: '/products/ldpe-shrink-film-manufacturer-hyderabad/',changefreq: 'monthly', priority: '0.8' },
  { path: '/products/ldpe-sheets-manufacturer-hyderabad/',     changefreq: 'monthly', priority: '0.8' },
  { path: '/products/ldpe-cover-industrial-packaging/',        changefreq: 'monthly', priority: '0.8' },
  { path: '/products/mulch-film-uv-resistant-agriculture/',    changefreq: 'monthly', priority: '0.8' },
  { path: '/industries/healthcare/',          changefreq: 'monthly', priority: '0.7' },
  { path: '/industries/hospitality/',         changefreq: 'monthly', priority: '0.7' },
  { path: '/industries/construction/',        changefreq: 'monthly', priority: '0.7' },
  { path: '/industries/agriculture/',         changefreq: 'monthly', priority: '0.7' },
  { path: '/industries/fmcg-retail/',         changefreq: 'monthly', priority: '0.7' },
  { path: '/industries/facility-management/', changefreq: 'monthly', priority: '0.7' },
  { path: '/industries/pharma-laboratories/', changefreq: 'monthly', priority: '0.7' },
  { path: '/industries/cold-storage-logistics/', changefreq: 'monthly', priority: '0.7' },
  { path: '/products/garbage-bags/',                                              changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/hotel-garbage-bags-hyderabad/',                changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/hospital-garbage-bags-hyderabad/',             changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/industrial-garbage-bags-hyderabad/',           changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/facility-management-garbage-bags-india/',      changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/restaurant-garbage-bags-hyderabad/',           changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/construction-garbage-bags-hyderabad/',         changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/supermarket-garbage-bags-india/',              changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/pharmaceutical-waste-bags-hyderabad/',         changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/cold-storage-garbage-bags-india/',             changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/office-garbage-bags-hyderabad/',               changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/school-college-garbage-bags-india/',           changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/airport-garbage-bags-india/',                  changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/plastic-bags-manufacturer-hyderabad/',         changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/plastic-bags-manufacturer-india/',             changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/black-garbage-bags-hyderabad/',                changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/garbage-bags-wholesale-hyderabad/',            changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/dustbin-bags-hyderabad/',                      changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/coloured-garbage-bags-india/',                 changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/eco-friendly-garbage-bags-hyderabad/',         changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/plastic-bags-supplier-hyderabad/',             changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/garbage-bags-telangana/',                      changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/garbage-bags-andhra-pradesh/',                 changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/garbage-bags-bangalore/',                      changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/garbage-bags-chennai/',                        changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/garbage-bags-south-india/',                    changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/garbage-bags-secunderabad/',                   changefreq: 'monthly', priority: '0.8' },
  { path: '/products/garbage-bags/garbage-bags-mumbai/',                         changefreq: 'monthly', priority: '0.8' },
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapRoutes.map(r => `  <url>
    <loc>${BASE}${r.path}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`

fs.writeFileSync(toAbsolute('dist/client/sitemap.xml'), sitemap)
console.log('sitemap.xml generated')
