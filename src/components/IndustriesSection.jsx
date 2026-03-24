import { useNavigate } from 'react-router-dom'
import { useRef, useState, useEffect } from 'react'
import { industries } from '../data/industries'
import './IndustriesSection.css'

function useInView(threshold = 0.12) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

function IndustryCard({ industry, index }) {
  const navigate = useNavigate()
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className="is-card"
      onClick={() => {
        navigate(`/industries/${industry.slug}`)
        window.scrollTo({ top: 0 })
      }}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity .5s ease ${(index % 4) * 0.08}s, transform .5s ease ${(index % 4) * 0.08}s`,
        '--accent': industry.accentColor,
        '--light': industry.lightColor,
      }}
    >
      <div className="is-card-top" style={{ background: industry.lightColor }}>
        <span className="is-card-icon"><h3>{industry.name}</h3></span>
        {/* <span className="is-card-badge" style={{ color: industry.accentColor, background: `${industry.accentColor}15`, border: `1px solid ${industry.accentColor}30` }}>
          {industry.badge.split(' · ')[0]}
        </span> */}
      </div>
      <div className="is-card-body">
        
        <p>{industry.subheadline.slice(0, 80)}...</p>
        <div className="is-card-products">
          {industry.productIds.slice(0, 2).map(id => (
            <span
              key={id}
              className="is-card-product-tag"
              style={{ color: industry.accentColor, background: industry.lightColor }}
            >
              {id.replace(/-/g, ' ').split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
            </span>
          ))}
          {industry.productIds.length > 2 && (
            <span className="is-card-product-tag" style={{ color: industry.accentColor, background: industry.lightColor }}>
              +{industry.productIds.length - 2} more
            </span>
          )}
        </div>
        <div className="is-card-footer" style={{ borderTop: `2px solid ${industry.lightColor}` }}>
          <span className="is-card-link" style={{ color: industry.accentColor }}>
            View Solutions →
          </span>
        </div>
      </div>
    </div>
  )
}

export default function IndustriesSection() {
  const navigate = useNavigate()

  return (
    <section className="is-section">
      <div className="is-header">
        <div className="section-label">Industries We Serve</div>
        <h2>Solutions built for your industry</h2>
        <p>From hospitals to highways, hotels to farms — our recycled LDPE products are trusted across India's key industries.</p>
      </div>

      <div className="is-grid">
        {industries.map((ind, i) => (
          <IndustryCard key={ind.id} industry={ind} index={i} />
        ))}
      </div>

      <div className="is-cta">
        <button
          className="btn-outline"
          onClick={() => {
            navigate('/industries')
            window.scrollTo({ top: 0 })
          }}
        >
          View All Industries →
        </button>
      </div>
    </section>
  )
}