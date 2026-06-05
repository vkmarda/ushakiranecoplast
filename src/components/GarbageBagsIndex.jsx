import { useEffect } from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { industrySubPages, productVariantSubPages, geoSubPages, keywordSubPages } from '../data/GarbageBagSubPages.js'
import './GarbageBagsIndex.css'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ushakiranecoplast.com/' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://ushakiranecoplast.com/products/' },
    { '@type': 'ListItem', position: 3, name: 'Garbage Bags', item: 'https://ushakiranecoplast.com/products/garbage-bags/' }
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
        <meta property="og:url" content="https://ushakiranecoplast.com/products/garbage-bags/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ushakiran Ecoplast" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <nav className="gbi-breadcrumb" aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <span className="gbi-bc-sep">›</span>
        <Link to="/products/">Products</Link>
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
                to={`/products/garbage-bags/${page.slug}/`}
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
                to={`/products/garbage-bags/${page.slug}/`}
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
                to={`/products/garbage-bags/${page.slug}/`}
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

      {/* KEYWORD GRID */}
      <section className="gbi-grid-section gbi-grid-alt">
        <div className="gbi-grid-inner">
          <div className="section-label">By Product Category</div>
          <h2>Garbage Bags by Material and Format</h2>
          <p className="gbi-grid-sub">
            Looking for a specific material, format or sustainability requirement? Browse by product keyword, plain, heavy duty, HDPE, household, biodegradable and more.
          </p>
          <div className="gbi-grid">
            {keywordSubPages.map(page => (
              <Link
                key={page.slug}
                to={`/products/garbage-bags/${page.slug}/`}
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

      {/* Browse All */}
      <section className="browse-all">
        <div className="browse-all-inner">
          <div className="section-label" style={{ color: 'var(--green)' }}>COMPLETE RANGE</div>
          <h2>Browse All Garbage Bag Pages</h2>
          <div className="browse-all-grid">
            <div>
              <div className="browse-all-group-label">By Industry</div>
              <ul className="browse-all-links">
                <li><Link to="/products/garbage-bags/hotel-garbage-bags-hyderabad/">→ Hotel Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/hospital-garbage-bags-hyderabad/">→ Hospital Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/restaurant-garbage-bags-hyderabad/">→ Restaurant Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/industrial-garbage-bags-hyderabad/">→ Industrial Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/construction-garbage-bags-hyderabad/">→ Construction Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/supermarket-garbage-bags-india/">→ Supermarket Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/facility-management-garbage-bags-india/">→ Facility Management Bags</Link></li>
                <li><Link to="/products/garbage-bags/office-garbage-bags-hyderabad/">→ Office Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/school-college-garbage-bags-india/">→ School &amp; College Bags</Link></li>
                <li><Link to="/products/garbage-bags/airport-garbage-bags-india/">→ Airport Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/pharmaceutical-waste-bags-hyderabad/">→ Pharmaceutical Waste Bags</Link></li>
                <li><Link to="/products/garbage-bags/cold-storage-garbage-bags-india/">→ Cold Storage Bags</Link></li>
                <li><Link to="/products/garbage-bags/hospital-usage-garbage-bags-manufacturer/">→ Hospital Usage Bags</Link></li>
                <li><Link to="/products/garbage-bags/healthcare-garbage-bags-manufacturer/">→ Healthcare Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/kitchen-garbage-bags-manufacturer/">→ Kitchen Garbage Bags</Link></li>
              </ul>
            </div>
            <div>
              <div className="browse-all-group-label">By Product Type</div>
              <ul className="browse-all-links">
                <li><Link to="/products/garbage-bags/black-garbage-bags-hyderabad/">→ Black Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/coloured-garbage-bags-india/">→ Coloured Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/plain-garbage-bags-manufacturer/">→ Plain Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/disposable-garbage-bags-manufacturer/">→ Disposable Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/heavy-duty-garbage-bags-manufacturer/">→ Heavy Duty Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/hdpe-garbage-bags-manufacturer/">→ HDPE Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/biodegradable-garbage-bags-manufacturer/">→ Biodegradable Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/household-garbage-bags-manufacturer/">→ Household Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/large-garbage-bags-manufacturer/">→ Large Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/jumbo-garbage-bags-manufacturer/">→ Jumbo Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/dustbin-bags-hyderabad/">→ Dustbin Bags</Link></li>
                <li><Link to="/products/garbage-bags/dustbin-covers-manufacturer/">→ Dustbin Covers</Link></li>
                <li><Link to="/products/garbage-bags/garbage-covers-manufacturer/">→ Garbage Covers</Link></li>
                <li><Link to="/products/garbage-bags/transparent-garbage-bags-manufacturer/">→ Transparent Bags</Link></li>
                <li><Link to="/products/garbage-bags/biohazard-bags-manufacturer/">→ Biohazard Bags</Link></li>
                <li><Link to="/products/garbage-bags/autoclave-bags-manufacturer/">→ Autoclave Bags</Link></li>
                <li><Link to="/products/garbage-bags/refuse-bags-manufacturer/">→ Refuse Bags</Link></li>
                <li><Link to="/products/garbage-bags/waste-bags-manufacturer/">→ Waste Bags</Link></li>
              </ul>
            </div>
            <div>
              <div className="browse-all-group-label">By Material</div>
              <ul className="browse-all-links">
                <li><Link to="/products/garbage-bags/ldpe-garbage-bin-bags-manufacturer/">→ LDPE Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/polythene-bags-manufacturer/">→ Polythene Bags</Link></li>
                <li><Link to="/products/garbage-bags/poly-bags-manufacturer/">→ Poly Bags</Link></li>
                <li><Link to="/products/garbage-bags/plastic-garbage-bags-manufacturer/">→ Plastic Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/eco-friendly-garbage-bags-hyderabad/">→ Eco-Friendly Bags</Link></li>
                <li><Link to="/products/garbage-bags/compostable-garbage-bags-manufacturer/">→ Compostable Bags</Link></li>
                <li><Link to="/products/garbage-bags/eco-friendly-garbage-bags-manufacturer/">→ Recycled Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/industrial-polyliners-manufacturer/">→ Industrial Polyliners</Link></li>
                <li><Link to="/products/garbage-bags/garbage-bin-bags-manufacturer/">→ Garbage Bin Bags</Link></li>
              </ul>
              <div className="browse-all-group-label" style={{ marginTop: '28px' }}>By Buying Intent</div>
              <ul className="browse-all-links">
                <li><Link to="/products/garbage-bags/garbage-bags-wholesale-hyderabad/">→ Wholesale Garbage Bags</Link></li>
                <li><Link to="/products/garbage-bags/plastic-bags-supplier-hyderabad/">→ Plastic Bags Supplier</Link></li>
                <li><Link to="/products/garbage-bags/plastic-bags-manufacturer-india/">→ Plastic Bags Manufacturer India</Link></li>
                <li><Link to="/products/garbage-bags/plastic-bags-manufacturer-hyderabad/">→ Plastic Bags Manufacturer Hyderabad</Link></li>
              </ul>
            </div>
            <div>
              <div className="browse-all-group-label">By Location</div>
              <ul className="browse-all-links">
                <li><Link to="/products/garbage-bags/plastic-bags-manufacturer-hyderabad/">→ Hyderabad</Link></li>
                <li><Link to="/products/garbage-bags/garbage-bags-secunderabad/">→ Secunderabad</Link></li>
                <li><Link to="/products/garbage-bags/garbage-bags-telangana/">→ Telangana</Link></li>
                <li><Link to="/products/garbage-bags/garbage-bags-andhra-pradesh/">→ Andhra Pradesh</Link></li>
                <li><Link to="/products/garbage-bags/garbage-bags-bangalore/">→ Bangalore</Link></li>
                <li><Link to="/products/garbage-bags/garbage-bags-chennai/">→ Chennai</Link></li>
                <li><Link to="/products/garbage-bags/garbage-bags-mumbai/">→ Mumbai</Link></li>
                <li><Link to="/products/garbage-bags/garbage-bags-south-india/">→ South India</Link></li>
              </ul>
              <div className="browse-all-group-label" style={{ marginTop: '28px' }}>Blue Segregation Bags</div>
              <ul className="browse-all-links">
                <li><Link to="/products/garbage-bags/blue-hdpe-garbage-bags-manufacturer/">→ Blue HDPE Garbage Bags</Link></li>
              </ul>
            </div>
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
