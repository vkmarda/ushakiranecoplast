import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { products } from '../data/Products.js'


export default function ProductsPage() {
  const navigate = useNavigate()

  return (
    <div className="products-page">
      <Helmet>
        <title>Recycled Plastic Bags & LDPE Products Manufacturer Hyderabad | Ushakiran Ecoplast</title>
        <meta name="description" content="ISO certified manufacturer of recycled LDPE garbage bags, biomedical waste bags, shrink film, mulch film, LDPE sheets and more in Hyderabad. Pan-India supply. Get a quote today." />
        <link rel="canonical" href="https://ushakiranecoplast.com/products" />
        <meta property="og:title" content="Products | Ushakiran Ecoplast — Recycled Plastic Manufacturer Hyderabad" />
        <meta property="og:description" content="ISO certified recycled LDPE products — garbage bags, biomedical bags, shrink film, mulch film and more. Manufacturer in Hyderabad." />
      </Helmet>

      {/* Hero */}
      <div className="pp-hero">
        <div className="pp-hero-content">
          <div className="pp-hero-badge">ISO Certified · Made in Hyderabad · Pan-India Supply</div>
          <h1>Our Products</h1>
          <p>100% recycled LDPE products built to your specification — delivered across India from our Hyderabad manufacturing facility.</p>
          <button onClick={() => navigate('/')} className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>← Back to Home</button>
        </div>
      </div>

      {/* Catalogue Grid */}
      <div className="pp-catalogue">
        <div className="pp-catalogue-header">
          <div className="section-label">ISO Certified · Hyderabad</div>
          <h2>Our Complete Product Range</h2>
          <p>Click any product to view full specifications, applications, FAQs and request a quote.</p>
        </div>
        <div className="pp-catalogue-grid">
          {products.map(p => (
            <div
              key={p.id}
              className="pp-cat-card"
              onClick={() => navigate(`/products/${p.slug}`)}
            >
              <div className="pp-cat-img">
                <img src={p.img} alt={`${p.name} manufacturer Hyderabad`} loading="lazy" />
                <span className="pp-cat-tag" style={{ background: p.tagColor }}>{p.tag}</span>
              </div>
              <div className="pp-cat-body">
                <div className="pp-cat-tagline">{p.tagline}</div>
                <h3>{p.name}</h3>
                <p>{p.description.slice(0, 90)}...</p>
                <div className="pp-cat-footer">
                  <div className="pp-cat-customers">
                    {p.customers.slice(0, 2).map(c => (
                      <span key={c} className="pp-cat-customer">{c}</span>
                    ))}
                    {p.customers.length > 2 && (
                      <span className="pp-cat-customer">+{p.customers.length - 2} more</span>
                    )}
                  </div>
                  <span className="pp-cat-link">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div className="pp-trust-strip">
        {['ISO Certified', 'PCB Compliant', '100% Recycled LDPE', '50M+ kg Plastic Recycled', 'Pan-India Delivery', 'Custom Specifications'].map(t => (
          <div key={t} className="pp-trust-item">
            <span className="pp-trust-dot" />
            {t}
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="pp-bottom-cta">
        <div className="section-label">Custom Manufacturing · Hyderabad</div>
        <h2>Need a custom specification?</h2>
        <p>We manufacture custom LDPE products to your exact size, thickness, colour and quantity. Reach out and we'll build it for you.</p>
        <a href="mailto:sales@ushakiranecoplast.com" className="btn-primary">Contact Our Team →</a>
      </div>
    </div>
  )
}