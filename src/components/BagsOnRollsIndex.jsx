import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { bagsOnRollsPages } from '../data/BagsOnRollsData.js'
import './GarbageBagsIndex.css'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ushakiranecoplast.com/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://ushakiranecoplast.com/products/' },
    { '@type': 'ListItem', position: 3, name: 'Bags on Rolls', item: 'https://ushakiranecoplast.com/products/bags-on-rolls/' },
  ],
}

const pageGroups = [
  {
    label: 'By Industry and Buyer',
    sublabel: 'Industry',
    description: 'Each page covers the specific roll format requirements for that buyer type, with FAQs, specification guidance and supply details.',
    slugs: [
      'hotel-bags-on-rolls-hyderabad',
      'hospital-bags-on-rolls-india',
      'supermarket-bags-on-rolls-india',
      'housekeeping-bags-on-rolls-india',
      'restaurant-bags-on-rolls-hyderabad',
      'industrial-bags-on-rolls-india',
    ],
  },
  {
    label: 'By Product Type and Location',
    sublabel: 'Product and Location',
    description: 'Looking for a specific roll type or supply location? Browse perforated rolls, wholesale supply and location-specific pages.',
    slugs: [
      'bags-on-rolls-manufacturer-hyderabad',
      'bags-on-rolls-manufacturer-india',
      'perforated-bags-on-rolls-hyderabad',
      'bags-on-rolls-wholesale-india',
    ],
  },
]

const pageLabels = {
  'bags-on-rolls-manufacturer-hyderabad': { label: 'Bags on Rolls Manufacturer Hyderabad', tagline: 'LDPE rolls for hotels, hospitals and supermarkets in Hyderabad' },
  'bags-on-rolls-manufacturer-india':     { label: 'Bags on Rolls Manufacturer India', tagline: 'Pan-India supply of perforated rolls from Hyderabad' },
  'hotel-bags-on-rolls-hyderabad':        { label: 'Hotel Bags on Rolls Hyderabad', tagline: 'Trolley-compatible rolls for hotel housekeeping operations' },
  'hospital-bags-on-rolls-india':         { label: 'Hospital Bags on Rolls India', tagline: 'Colour-coded rolls for ward dispensers and healthcare' },
  'supermarket-bags-on-rolls-india':      { label: 'Supermarket Bags on Rolls India', tagline: 'Perforated rolls for produce sections and retail chains' },
  'housekeeping-bags-on-rolls-india':     { label: 'Housekeeping Bags on Rolls India', tagline: 'High-frequency dispensing rolls for FM and hotel operations' },
  'perforated-bags-on-rolls-hyderabad':   { label: 'Perforated Bags on Rolls Hyderabad', tagline: 'Clean-tear perforated rolls for all commercial applications' },
  'bags-on-rolls-wholesale-india':        { label: 'Bags on Rolls Wholesale India', tagline: 'Direct manufacturer wholesale pricing, pan-India supply' },
  'restaurant-bags-on-rolls-hyderabad':   { label: 'Restaurant Bags on Rolls Hyderabad', tagline: 'Kitchen-grade star seal rolls for food service operations' },
  'industrial-bags-on-rolls-india':       { label: 'Industrial Bags on Rolls India', tagline: 'Heavy duty rolls for factory floors and warehouses' },
}

export default function BagsOnRollsIndex({ openQuote }) {
  const { pathname } = useLocation()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'

  useEffect(() => { window.scrollTo({ top: 0 }) }, [])

  useEffect(() => {
    document.body.classList.add('page-with-sticky-breadcrumb')
    return () => document.body.classList.remove('page-with-sticky-breadcrumb')
  }, [])

  return (
    <div className="gbi-page">
      <Helmet>
        <title>Bags on Rolls Manufacturer India | Ushakiran Ecoplast</title>
        <meta name="description" content="Ushakiran Ecoplast manufactures bags on rolls in Hyderabad. Perforated LDPE rolls for hotels, hospitals and supermarkets. ISO certified, pan-India supply." />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta property="og:title" content="Bags on Rolls Manufacturer India | Ushakiran Ecoplast" />
        <meta property="og:description" content="ISO certified manufacturer of LDPE bags on rolls in Hyderabad. Custom core sizes, perforation specifications, pan-India supply." />
        <meta property="og:url" content="https://ushakiranecoplast.com/products/bags-on-rolls/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ushakiran Ecoplast" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <nav className="gbi-breadcrumb" aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <span className="gbi-bc-sep">›</span>
        <Link to="/products/">Products</Link>
        <span className="gbi-bc-sep">›</span>
        <span>Bags on Rolls</span>
      </nav>

      <section className="gbi-hero">
        <div className="gbi-hero-inner">
          <div className="section-label">ISO Certified · Custom Core Sizes · Pan-India Supply</div>
          <h1>Bags on Rolls Manufacturer in Hyderabad</h1>
          <p className="gbi-hero-desc">
            Ushakiran Ecoplast manufactures bags on rolls for hotels, hospitals, supermarkets, restaurants and industrial buyers.
            12 years of production experience, custom core sizes, ISO certification and pan-India supply from our Hyderabad facility.
            Select your buyer type below or{' '}
            <Link to="/products/plastic-bags-on-rolls-manufacturer/">view our main bags on rolls product page</Link>.
          </p>
          <div className="gbi-hero-btns">
            <button className="btn-primary" onClick={openQuote}>Get a Quote →</button>
            <Link to="/products/plastic-bags-on-rolls-manufacturer/" className="btn-outline">View Main Product Page</Link>
          </div>
        </div>
      </section>

      {pageGroups.map((group, gi) => (
        <section key={gi} className={`gbi-grid-section${gi % 2 === 1 ? ' gbi-grid-alt' : ''}`}>
          <div className="gbi-grid-inner">
            <div className="section-label">{group.sublabel}</div>
            <h2>{group.label}</h2>
            <p className="gbi-grid-sub">{group.description}</p>
            <div className="gbi-grid">
              {group.slugs.map(slug => {
                const meta = pageLabels[slug]
                if (!meta) return null
                return (
                  <Link
                    key={slug}
                    to={`/products/bags-on-rolls/${slug}/`}
                    className="gbi-card"
                  >
                    <div className="gbi-card-body">
                      <h3>{meta.label}</h3>
                      <p>{meta.tagline}</p>
                    </div>
                    <span className="gbi-card-arrow">→</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      <section className="gbi-creds">
        <div className="gbi-creds-inner">
          <div className="gbi-cred">
            <span className="gbi-cred-value">12</span>
            <span className="gbi-cred-label">Years manufacturing bags on rolls</span>
          </div>
          <div className="gbi-cred">
            <span className="gbi-cred-value">ISO</span>
            <span className="gbi-cred-label">9001:2015 Certified facility</span>
          </div>
          <div className="gbi-cred">
            <span className="gbi-cred-value">Custom</span>
            <span className="gbi-cred-label">Core sizes and bag dimensions</span>
          </div>
          <div className="gbi-cred">
            <span className="gbi-cred-value">Pan</span>
            <span className="gbi-cred-label">India supply from Hyderabad</span>
          </div>
        </div>
      </section>

      {/* Browse All */}
      <section className="browse-all">
        <div className="browse-all-inner">
          <div className="section-label" style={{ color: 'var(--green)' }}>COMPLETE RANGE</div>
          <h2>Browse All Bags on Rolls Pages</h2>
          <div className="browse-all-grid">
            <div>
              <div className="browse-all-group-label">By Industry</div>
              <ul className="browse-all-links">
                <li><Link to="/products/bags-on-rolls/hotel-bags-on-rolls-hyderabad/">→ Hotel Bags on Rolls</Link></li>
                <li><Link to="/products/bags-on-rolls/hospital-bags-on-rolls-india/">→ Hospital Bags on Rolls</Link></li>
                <li><Link to="/products/bags-on-rolls/supermarket-bags-on-rolls-india/">→ Supermarket Bags on Rolls</Link></li>
                <li><Link to="/products/bags-on-rolls/restaurant-bags-on-rolls-hyderabad/">→ Restaurant Bags on Rolls</Link></li>
                <li><Link to="/products/bags-on-rolls/industrial-bags-on-rolls-india/">→ Industrial Bags on Rolls</Link></li>
                <li><Link to="/products/bags-on-rolls/housekeeping-bags-on-rolls-india/">→ Housekeeping Bags on Rolls</Link></li>
              </ul>
            </div>
            <div>
              <div className="browse-all-group-label">By Product Type</div>
              <ul className="browse-all-links">
                <li><Link to="/products/bags-on-rolls/perforated-bags-on-rolls-hyderabad/">→ Perforated Bags on Rolls</Link></li>
                <li><Link to="/products/bags-on-rolls/bags-on-rolls-wholesale-india/">→ Bags on Rolls Wholesale</Link></li>
              </ul>
            </div>
            <div>
              <div className="browse-all-group-label">By Location</div>
              <ul className="browse-all-links">
                <li><Link to="/products/bags-on-rolls/bags-on-rolls-manufacturer-hyderabad/">→ Hyderabad</Link></li>
                <li><Link to="/products/bags-on-rolls/bags-on-rolls-manufacturer-india/">→ India</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="gbi-cta">
        <div className="gbi-cta-inner">
          <div className="gbi-cta-left">
            <div className="section-label" style={{ color: 'var(--accent)' }}>
              ISO Certified · Pan-India Supply · Made in Hyderabad
            </div>
            <h2>Ready to order bags on rolls?</h2>
            <p>
              Custom core sizes, bulk pricing and reliable delivery to all states from our Hyderabad facility.
              View full specifications on the{' '}
              <Link to="/products/plastic-bags-on-rolls-manufacturer/" className="gbi-cta-link">
                bags on rolls product page
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
