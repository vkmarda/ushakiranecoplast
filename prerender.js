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
]

const template = fs.readFileSync(toAbsolute('dist/client/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

for (const url of routes) {
  const { html: appHtml, helmet } = await render(url)

  let finalHtml = template.replace('<!--app-html-->', appHtml)

  // Inject per-page <title> and <meta> tags from react-helmet-async
  if (helmet) {
    const titleTag = helmet.title.toString()
    const metaTags = helmet.meta.toString()
    const linkTags = helmet.link.toString()

    if (titleTag) {
      finalHtml = finalHtml.replace(/<title>.*?<\/title>/, titleTag)
    }
    const extra = [metaTags, linkTags].filter(s => s.trim()).join('\n  ')
    if (extra) {
      finalHtml = finalHtml.replace('</head>', `  ${extra}\n</head>`)
    }
  }

  const filePath = url === '/'
    ? 'dist/client/index.html'
    : `dist/client${url}/index.html`

  fs.mkdirSync(path.dirname(toAbsolute(filePath)), { recursive: true })
  fs.writeFileSync(toAbsolute(filePath), finalHtml)
  console.log('pre-rendered:', url)
}
