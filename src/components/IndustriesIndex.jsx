import { useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { industries } from '../data/industries'
import './IndustriesIndex.css'

export default function IndustriesIndex() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'

  return (
    <div className="ii-page">
      <Helmet>
        <title>Industries We Serve | Ushakiran Ecoplast</title>
        <meta name="description" content="Ushakiran Ecoplast supplies ISO certified recycled LDPE products to healthcare, hospitality, construction, agriculture, FMCG, pharma and logistics industries across India." />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero */}
      <div className="ii-hero">
        <div className="ii-hero-content">
          <div className="section-label" style={{ color: 'var(--accent)' }}>ISO Certified · Hyderabad</div>
          <h1>Industries We Serve</h1>
          <p>From hospitals and hotels to farms and factories — our recycled LDPE products solve waste management and packaging challenges across India's key industries.</p>
        </div>
      </div>

      {/* Grid */}
      <div className="ii-grid-section">
        <div className="ii-grid">
          {industries.map(ind => (
            <div
              key={ind.id}
              className="ii-card"
              onClick={() => navigate(`/industries/${ind.slug}`)}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}