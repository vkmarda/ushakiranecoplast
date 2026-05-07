import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import './GarbageBagsIndex.css'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ushakiranecoplast.com/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://ushakiranecoplast.com/products' },
    { '@type': 'ListItem', position: 3, name: 'Biomedical Bags', item: 'https://ushakiranecoplast.com/products/biomedical-bags' },
  ],
}

const pageGroups = [
  {
    label: 'By Compliance Category',
    sublabel: 'Compliance',
    description: 'Each page covers the specific BMWM 2016 requirements for that waste category, with FAQs, documentation requirements and supply details.',
    pages: [
      { slug: 'yellow-biomedical-bags-india', label: 'Yellow Biomedical Bags India', tagline: 'BMWM compliant yellow bags for incineration waste' },
      { slug: 'red-biomedical-bags-india', label: 'Red Biomedical Bags India', tagline: 'BMWM compliant red bags for autoclavable recyclable waste' },
      { slug: 'bmwm-compliant-bags-india', label: 'BMWM Compliant Bags India', tagline: 'All four colour categories from one PCB approved manufacturer' },
      { slug: 'colour-coded-biomedical-bags-india', label: 'Colour Coded Biomedical Bags India', tagline: 'Colour compounded in LDPE for audit-ready batch quality' },
    ],
  },
  {
    label: 'By Buyer Type and Location',
    sublabel: 'Buyer and Location',
    description: 'Looking for hospital waste bags, PCB approved supply or pan-India manufacturer? Browse by buyer type and location.',
    pages: [
      { slug: 'biomedical-bags-manufacturer-hyderabad', label: 'Biomedical Bags Manufacturer Hyderabad', tagline: 'BMWM compliant bags manufactured and supplied in Hyderabad' },
      { slug: 'biomedical-bags-manufacturer-india', label: 'Biomedical Bags Manufacturer India', tagline: 'Pan-India supply of BMWM compliant biomedical bags' },
      { slug: 'pcb-approved-biomedical-bags-india', label: 'PCB Approved Biomedical Bags India', tagline: 'PCB approved manufacturer for compliant procurement' },
      { slug: 'hospital-waste-bags-hyderabad', label: 'Hospital Waste Bags Hyderabad', tagline: 'General and biomedical bags for hospitals from one supplier' },
    ],
  },
]

export default function BiomedicalBagsIndex({ openQuote }) {
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
        <title>Biomedical Bags Manufacturer Hyderabad | BMWM Compliant | Ushakiran Ecoplast</title>
        <meta name="description" content="Ushakiran Ecoplast manufactures BMWM 2016 compliant biomedical waste bags in Hyderabad. Yellow, red, blue and black colour categories. PCB approved, non-chlorinated LDPE, pan-India supply." />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta property="og:title" content="Biomedical Bags Manufacturer Hyderabad | BMWM Compliant | Ushakiran Ecoplast" />
        <meta property="og:description" content="PCB approved manufacturer of BMWM 2016 compliant biomedical bags in Hyderabad. Supplying hospitals, clinics and healthcare facilities across India." />
        <meta property="og:url" content="https://ushakiranecoplast.com/products/biomedical-bags" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ushakiran Ecoplast" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <nav className="gbi-breadcrumb" aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <span className="gbi-bc-sep">›</span>
        <Link to="/products">Products</Link>
        <span className="gbi-bc-sep">›</span>
        <span>Biomedical Bags</span>
      </nav>

      <section className="gbi-hero">
        <div className="gbi-hero-inner">
          <div className="section-label">PCB Approved · ISO Certified · Pan-India Supply</div>
          <h1>Biomedical Bags Manufacturer in Hyderabad</h1>
          <p className="gbi-hero-desc">
            Ushakiran Ecoplast manufactures BMWM 2016 compliant biomedical waste bags for hospitals, clinics, diagnostic centres and healthcare facilities across India.
            PCB approved, non-chlorinated LDPE, biohazard printing and facility name as required by BMWM Rules 2016.
            Select your requirement below or{' '}
            <Link to="/products/biomedical-waste-bags-bmwm-compliant/">view our main biomedical bags product page</Link>.
          </p>
          <div className="gbi-hero-btns">
            <button className="btn-primary" onClick={openQuote}>Get a Quote →</button>
            <Link to="/products/biomedical-waste-bags-bmwm-compliant/" className="btn-outline">View Main Product Page</Link>
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
              {group.pages.map(page => (
                <Link
                  key={page.slug}
                  to={`/products/biomedical-bags/${page.slug}`}
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
      ))}

      <section className="gbi-creds">
        <div className="gbi-creds-inner">
          <div className="gbi-cred">
            <span className="gbi-cred-value">PCB</span>
            <span className="gbi-cred-label">Approved manufacturing facility</span>
          </div>
          <div className="gbi-cred">
            <span className="gbi-cred-value">ISO</span>
            <span className="gbi-cred-label">9001:2015 Certified</span>
          </div>
          <div className="gbi-cred">
            <span className="gbi-cred-value">4</span>
            <span className="gbi-cred-label">BMWM colour categories available</span>
          </div>
          <div className="gbi-cred">
            <span className="gbi-cred-value">Pan</span>
            <span className="gbi-cred-label">India supply from Hyderabad</span>
          </div>
        </div>
      </section>

      <section className="gbi-cta">
        <div className="gbi-cta-inner">
          <div className="gbi-cta-left">
            <div className="section-label" style={{ color: 'var(--accent)' }}>
              PCB Approved · ISO Certified · Made in Hyderabad
            </div>
            <h2>Ready to order biomedical bags?</h2>
            <p>
              All four BMWM colour categories, facility name printing, compliance documentation and pan-India delivery from our Hyderabad facility.
              View full specifications on the{' '}
              <Link to="/products/biomedical-waste-bags-bmwm-compliant/" className="gbi-cta-link">
                biomedical waste bags product page
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
