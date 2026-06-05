import { Link, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { industries } from '../data/industries'
import './IndustriesIndex.css'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ushakiranecoplast.com/' },
    { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://ushakiranecoplast.com/industries/' },
  ],
}

export default function IndustriesIndex() {
  const { pathname } = useLocation()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'

  return (
    <div className="ii-page">
      <Helmet>
        <title>Industries We Serve | Ushakiran Ecoplast Hyderabad</title>
        <meta name="description" content="Ushakiran Ecoplast supplies ISO certified recycled LDPE products to healthcare, hospitality, construction, agriculture, FMCG, pharma and logistics industries across India." />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta property="og:title" content="Industries We Serve | Ushakiran Ecoplast Hyderabad" />
        <meta property="og:description" content="Ushakiran Ecoplast supplies ISO certified recycled LDPE products to healthcare, hospitality, construction, agriculture, FMCG, pharma and logistics industries across India." />
        <meta property="og:image" content="https://ushakiranecoplast.com/logo.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://ushakiranecoplast.com/industries/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ushakiran Ecoplast" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industries We Serve | Ushakiran Ecoplast Hyderabad" />
        <meta name="twitter:description" content="Ushakiran Ecoplast supplies ISO certified recycled LDPE products to healthcare, hospitality, construction, agriculture, FMCG, pharma and logistics industries across India." />
        <meta name="twitter:image" content="https://ushakiranecoplast.com/logo.webp" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="ii-hero">
        <div className="ii-hero-content">
          <div className="section-label" style={{ color: 'var(--accent)' }}>ISO Certified · Hyderabad</div>
          <h1>Industries We Serve</h1>
          <p>From hospitals and hotels to farms and factories, our recycled LDPE products solve waste management and packaging challenges across India's key industries.</p>
        </div>
      </div>

      {/* Intro content */}
      <div className="ii-intro-section">
        <div className="ii-intro-inner">
          <h2>Recycled LDPE Products for Every Industry, Manufactured in Hyderabad</h2>
          <p>
            Ushakiran Ecoplast is an ISO 9001:2015 certified manufacturer of recycled LDPE garbage bags, biomedical bags, bags on rolls, stretch wrap film and industrial packaging, based in IDA Mankhal, Hyderabad. Over 12 years, we have built supply relationships with buyers across eight industries — from hospital procurement teams needing PCB-approved biomedical bags to hotel chains needing consistent bag specifications across pan-India properties, and from pharma manufacturers needing documented quality to construction contractors needing heavy-duty bulk supply.
          </p>
          <p>
            Every industry has different requirements. Healthcare operations need colour-coded bags that meet BMWM 2016 regulations and withstand audit. Hospitality operations need roll packs sized for housekeeping trolleys and specifications that stay consistent across every property in a chain. Construction and industrial buyers need heavy-gauge liners that hold under sharp debris and high loads. FMCG and retail operations need bags and rolls for back-of-house and produce sections. Agriculture buyers need UV-stabilised mulch film and protective LDPE covers. What every buyer has in common is the need for a manufacturer whose quality does not vary batch to batch, whose documentation is in order, and who delivers reliably on a recurring cycle.
          </p>
          <p>
            Select your industry below to see the specific products, specifications and supply terms relevant to your operation.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="ii-grid-section">
        <div className="ii-grid">
          {industries.map(ind => (
            <Link
              key={ind.id}
              to={`/industries/${ind.slug}/`}
              className="ii-card"
              style={{ borderTop: `3px solid ${ind.accentColor}` }}
            >
              <div className="ii-card-icon">{ind.icon}</div>
              <div className="ii-card-name">{ind.name}</div>
              <p className="ii-card-desc">{ind.subheadline.slice(0, 90)}...</p>
              <div className="ii-card-products">
                {ind.productIds.slice(0, 2).map(id => (
                  <span key={id} className="ii-card-tag" style={{ color: ind.accentColor, background: ind.lightColor }}>
                    {id.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                  </span>
                ))}
              </div>
              <span className="ii-card-link" style={{ color: ind.accentColor }}>Explore Solutions →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom context section */}
      <div className="ii-bottom-section">
        <div className="ii-bottom-inner">
          <h2>Why Industry Buyers Across India Choose Ushakiran Ecoplast</h2>
          <div className="ii-bottom-grid">
            <div className="ii-bottom-item">
              <h3>ISO 9001:2015 Certified Manufacturing</h3>
              <p>Our certification covers the full manufacturing process at our IDA Mankhal, Hyderabad facility. Institutional, pharma, healthcare and government buyers can use our documentation for supplier qualification without complication.</p>
            </div>
            <div className="ii-bottom-item">
              <h3>100% Recycled LDPE — Verified and Documented</h3>
              <p>Every product we manufacture uses 100% post-consumer recycled LDPE. Material certificates confirming recycled content are available for ESG procurement reporting, LEED certification and sustainability disclosures across all industries.</p>
            </div>
            <div className="ii-bottom-item">
              <h3>Custom Specifications Across All Product Lines</h3>
              <p>Standard sizes, custom dimensions, thickness, colour and print options are available across garbage bags, bags on rolls, biomedical bags and film products. No industry has exactly the same requirement, and we manufacture to specification rather than forcing buyers into a fixed catalogue.</p>
            </div>
            <div className="ii-bottom-item">
              <h3>Pan-India Supply from Hyderabad</h3>
              <p>Our Hyderabad facility supplies buyers across all major Indian markets. South Indian buyers receive delivery within 1–3 business days. Pan-India delivery to major metros within 3–7 business days on established supply cycles. Multi-site hotel chains and FM companies receive consistent specifications across all locations from a single supply agreement.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}