import { useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { industrySubPages, productVariantSubPages, geoSubPages } from '../data/GarbageBagSubPages.js'
import './GarbageBagsIndex.css'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ushakiranecoplast.com/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://ushakiranecoplast.com/products' },
    { '@type': 'ListItem', position: 3, name: 'Garbage Bags', item: 'https://ushakiranecoplast.com/products/garbage-bags' }
  ]
}

export default function GarbageBagsIndex({ openQuote }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  useEffect(() => {
    document.body.classList.add('page-with-sticky-breadcrumb')
    return () => document.body.classList.remove('page-with-sticky-breadcrumb')
  }, [])

  return (
    <div className="gbi-page">
      <Helmet>
        <title>Garbage Bags Manufacturer in Hyderabad | All Types | Ushakiran Ecoplast</title>
        <meta name="description" content="Ushakiran Ecoplast manufactures garbage bags in Hyderabad for hotels, hospitals, factories, restaurants, offices, supermarkets and more. ISO certified, 100% recycled LDPE, custom sizes, pan-India supply." />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta property="og:title" content="Garbage Bags Manufacturer in Hyderabad | All Types | Ushakiran Ecoplast" />
        <meta property="og:description" content="ISO certified manufacturer of recycled LDPE garbage bags in Hyderabad. Serving hotels, hospitals, factories, FM companies and retail chains across India." />
        <meta property="og:url" content="https://ushakiranecoplast.com/products/garbage-bags" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ushakiran Ecoplast" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <nav className="gbi-breadcrumb" aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <span className="gbi-bc-sep">›</span>
        <Link to="/products">Products</Link>
        <span className="gbi-bc-sep">›</span>
        <span>Garbage Bags</span>
      </nav>

      {/* HERO */}
      <section className="gbi-hero">
        <div className="gbi-hero-inner">
          <div className="section-label">Recycled LDPE · ISO Certified · Pan-India Supply</div>
          <h1>Garbage Bags Manufacturer in Hyderabad</h1>
          <p className="gbi-hero-desc">
            Ushakiran Ecoplast manufactures 100% recycled LDPE garbage bags for every industry and buyer type.
            12 years of production experience, ISO certification, custom sizes and pan-India supply from our
            Hyderabad facility. Select your industry below or{' '}
            <Link to="/products/recycled-garbage-bags-hyderabad/">view our main garbage bags product page</Link>.
          </p>
          <div className="gbi-hero-btns">
            <button className="btn-primary" onClick={openQuote}>Get a Quote →</button>
            <Link to="/products/recycled-garbage-bags-hyderabad/" className="btn-outline">View Main Product Page</Link>
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID */}
      <section className="gbi-grid-section">
        <div className="gbi-grid-inner">
          <div className="section-label">By Industry</div>
          <h2>Garbage Bags by Industry and Buyer Type</h2>
          <p className="gbi-grid-sub">
            Each page covers the specific waste management requirements for that buyer, with FAQs, supplier criteria and
            details on how Ushakiran Ecoplast serves that sector.
          </p>
          <div className="gbi-grid">
            {industrySubPages.map(page => (
              <Link
                key={page.slug}
                to={`/products/garbage-bags/${page.slug}`}
                className="gbi-card"
              >
                <span className="gbi-card-icon">{page.icon}</span>
                <div className="gbi-card-body">
                  <h3>{page.label}</h3>
                  <p>{page.tagline}</p>
                </div>
                <span className="gbi-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT VARIANT GRID */}
      <section className="gbi-grid-section gbi-grid-alt">
        <div className="gbi-grid-inner">
          <div className="section-label">By Product Type</div>
          <h2>Garbage Bags by Product Type</h2>
          <p className="gbi-grid-sub">
            Looking for a specific bag type? Browse our product variant pages for black bags, coloured bags,
            wholesale supply, eco-friendly options and more.
          </p>
          <div className="gbi-grid">
            {productVariantSubPages.map(page => (
              <Link
                key={page.slug}
                to={`/products/garbage-bags/${page.slug}`}
                className="gbi-card"
              >
                <div className="gbi-card-body">
                  <h3>{page.label}</h3>
                  <p>{page.tagline}</p>
                </div>
                <span className="gbi-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GEOGRAPHY GRID */}
      <section className="gbi-grid-section">
        <div className="gbi-grid-inner">
          <div className="section-label">By Location</div>
          <h2>Garbage Bags Supply by Location</h2>
          <p className="gbi-grid-sub">
            We supply garbage bags across South India and pan-India. Select your state or city to see
            delivery timelines, local buyer information and supply details.
          </p>
          <div className="gbi-grid">
            {geoSubPages.map(page => (
              <Link
                key={page.slug}
                to={`/products/garbage-bags/${page.slug}`}
                className="gbi-card"
              >
                <div className="gbi-card-body">
                  <h3>{page.label}</h3>
                  <p>{page.tagline}</p>
                </div>
                <span className="gbi-card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CREDENTIALS STRIP */}
      <section className="gbi-creds">
        <div className="gbi-creds-inner">
          <div className="gbi-cred">
            <span className="gbi-cred-value">12</span>
            <span className="gbi-cred-label">Years manufacturing in Hyderabad</span>
          </div>
          <div className="gbi-cred">
            <span className="gbi-cred-value">100%</span>
            <span className="gbi-cred-label">Recycled LDPE on every bag</span>
          </div>
          <div className="gbi-cred">
            <span className="gbi-cred-value">ISO</span>
            <span className="gbi-cred-label">Certified manufacturer</span>
          </div>
          <div className="gbi-cred">
            <span className="gbi-cred-value">90%</span>
            <span className="gbi-cred-label">Client retention rate</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gbi-cta">
        <div className="gbi-cta-inner">
          <div className="gbi-cta-left">
            <div className="section-label" style={{ color: 'var(--accent)' }}>
              ISO Certified · Pan-India Supply · Made in Hyderabad
            </div>
            <h2>Ready to order garbage bags?</h2>
            <p>
              Custom sizes, bulk pricing and reliable delivery to all states from our Hyderabad facility.
              View full specifications on the{' '}
              <Link to="/products/recycled-garbage-bags-hyderabad/" className="gbi-cta-link">
                recycled garbage bags product page
              </Link>{' '}
              or contact our team directly.
            </p>
          </div>
          <div className="gbi-cta-right">
            <button className="btn-primary" onClick={openQuote}>Request a Quote</button>
            <a href="tel:+918919428973" className="gbi-cta-call">
              <span className="gbi-cta-call-icon">📞</span>
              <span>
                <span className="gbi-cta-call-label">Call Us Directly</span>
                <span className="gbi-cta-call-num">+91 8919428973</span>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
