import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate, Link} from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getIndustryBySlug } from '../data/industries'
import { getProductById } from '../data/Products'
import './IndustryPage.css'

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

function WhyCard({ item, index, accentColor }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="ip-why-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity .5s ease ${(index % 3) * 0.1}s, transform .5s ease ${(index % 3) * 0.1}s`,
        borderTop: `3px solid ${accentColor}`,
      }}
    >
      <div className="ip-why-icon">{item.icon}</div>
      <h4>{item.title}</h4>
      <p>{item.body}</p>
    </div>
  )
}

function ProductCard({ product, onClick }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="ip-product-card"
      onClick={onClick}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity .5s ease, transform .5s ease',
      }}
    >
      <div className="ip-product-img">
        <img src={product.img} alt={`${product.name} for ${product.tagline}`} loading="lazy" />
        <span className="ip-product-tag" style={{ background: product.tagColor }}>{product.tag}</span>
      </div>
      <div className="ip-product-body">
        <div className="ip-product-tagline">{product.tagline}</div>
        <h4>{product.name}</h4>
        <p>{product.description.slice(0, 85)}...</p>
        <span className="ip-product-link">View Full Specs →</span>
      </div>
    </div>
  )
}

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`ip-faq-item ${open ? 'ip-faq-open' : ''}`}>
      <button className="ip-faq-q" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className={`ip-faq-icon ${open ? 'open' : ''}`}>+</span>
      </button>
      {open && (
        <div className="ip-faq-a">
          <p>{faq.a}</p>
        </div>
      )}
    </div>
  )
}

export default function IndustryPage({ openQuote }) {
  const { industrySlug } = useParams()
  const navigate = useNavigate()
  const industry = getIndustryBySlug(industrySlug)
  const [heroRef, heroIn] = useInView(0.05)

  useEffect(() => { window.scrollTo({ top: 0 }) }, [industrySlug])

  if (!industry) {
    return (
      <div className="ip-not-found">
        <h2>Industry page not found</h2>
        <button className="btn-primary" onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    )
  }

  const industryProducts = industry.productIds
    .map(id => getProductById(id))
    .filter(Boolean)

  // Schema markup
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${industry.name} Plastic Solutions`,
    description: industry.subheadline,
    url: `https://ushakiranecoplast.com/industries/${industry.slug}`,
    serviceType:`Plastic waste management and packaging solutions for the ${industry.name.toLowerCase()} industry`,
    provider: {
      '@type': 'Organization',
      name: 'Ushakiran Ecoplast',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN'
      }
    },
    areaServed: ['Hyderabad', 'Telangana', 'Andhra Pradesh', 'India'],
  }

  const faqSchema = industry.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: industry.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  } : null

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ushakiranecoplast.com/' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://ushakiranecoplast.com/industries' },
      { '@type': 'ListItem', position: 3, name: industry.name, item: `https://ushakiranecoplast.com/industries/${industry.slug}` }
    ]
  }

  const ac = industry.accentColor
  const lc = industry.lightColor

  return (
    <div className="ip-page">
      <Helmet>
        <title>{industry.seoTitle}</title>
        <meta name="description" content={industry.seoDescription} />
        <link rel="canonical" href={`https://ushakiranecoplast.com/industries/${industry.slug}`} />
        <meta property="og:title" content={industry.seoTitle} />
        <meta property="og:description" content={industry.seoDescription} />
        <meta property="og:image" content="https://ushakiranecoplast.com/logo.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={`https://ushakiranecoplast.com/industries/${industry.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ushakiran Ecoplast" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={industry.seoTitle} />
        <meta name="twitter:description" content={industry.seoDescription} />
        <meta name="twitter:image" content="https://ushakiranecoplast.com/logo.webp" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* ── BREADCRUMB ── */}
      <nav className="ip-breadcrumb">
        <Link to="/">Home</Link>
        <span>›</span>
        <Link to="/industries">Industries</Link>
        <span>›</span>
        <span>{industry.name}</span>
      </nav>

      {/* ── HERO ── */}
      <section className="ip-hero" style={{ background: industry.darkColor }}>
        <div className="ip-hero-bg" style={{ background: `radial-gradient(ellipse 60% 70% at 80% 50%, ${ac}30, transparent 70%)` }} />
        <div
          ref={heroRef}
          className="ip-hero-content"
          style={{
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? 'translateY(0)' : 'translateY(32px)',
            transition: 'opacity .8s ease, transform .8s ease',
          }}
        >
          <div className="ip-hero-eyebrow">
            <span className="ip-hero-icon">{industry.icon}</span>
            <span className="ip-hero-badge" style={{ color: ac, border: `1px solid ${ac}50`, background: `${ac}15` }}>
              {industry.badge}
            </span>
          </div>
          <div className="ip-hero-tagline" style={{ color: ac }}>{industry.heroTagline}</div>
          <h1>{industry.headline}</h1>
          <p className="ip-hero-sub">{industry.subheadline}</p>
          <div className="ip-hero-btns">
            <button className="btn-primary" onClick={openQuote} style={{ background: ac, border: 'none' }}>
              Get a Quote →
            </button>
            <a href="tel:+919885134991" className="ip-hero-call">
              📞 +91 98851 34991
            </a>
          </div>
        </div>
      </section>

      {/* ── CHALLENGE + STATS ── */}
      <section className="ip-challenge" style={{ background: lc }}>
        <div className="ip-challenge-inner">
          <div className="ip-challenge-text">
            <div className="section-label" style={{ color: ac }}>{industry.name}</div>
            <h2>{industry.challenge.heading}</h2>
            <p>{industry.challenge.body}</p>
          </div>
          <div className="ip-stats-grid">
            {industry.challenge.stats.map((s, i) => (
              <div key={i} className="ip-stat" style={{ borderLeft: `3px solid ${ac}` }}>
                <div className="ip-stat-val" style={{ color: ac }}>{s.value}</div>
                <div className="ip-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      

      {/* ── LONG CONTENT ── */}
      <section className="ip-long-content">
        <div className="ip-long-inner">
          <div className="section-label" style={{ color: ac }}>In Depth</div>
          <h2>How We Serve the {industry.name} Sector</h2>
          <div
            className="ip-long-body"
            dangerouslySetInnerHTML={{ __html: industry.longContent }}
          />
        </div>
      </section>
      {/* ── WHY UKEP ── */}
      <section className="ip-why-section" style={{ background: lc }}>
        <div className="ip-why-inner">
          <div className="section-label" style={{ color: ac }}>Why Ushakiran Ecoplast</div>
          <h2>Why {industry.name} Operations Choose Us</h2>
          <div className="ip-why-grid">
            {industry.whyUkep.map((item, i) => (
              <WhyCard key={i} item={item} index={i} accentColor={ac} />
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="ip-products-section">
        <div className="ip-products-inner">
          <div className="section-label" style={{ color: ac }}>Our Solutions</div>
          <h2>Products for {industry.name}</h2>
          <p className="ip-products-sub">Click any product to view full specifications, certifications and place an order.</p>
          <div className={`ip-products-grid ip-products-${industryProducts.length}`}>
            {industryProducts.map(p => (
              <ProductCard
                key={p.id}
                product={p}
                onClick={() => navigate(`/products/${p.slug}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      {industry.faqs?.length > 0 && (
        <section className="ip-faqs-section" style={{ background: lc }}>
          <div className="ip-faqs-inner">
            <div className="section-label" style={{ color: ac }}>Common Questions</div>
            <h2>Frequently Asked Questions</h2>
            <div className="ip-faqs-list">
              {industry.faqs.map((f, i) => (
                <FaqItem key={i} faq={f} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="ip-cta" style={{ background: industry.darkColor }}>
        <div className="ip-cta-bg" style={{ background: `radial-gradient(ellipse 50% 80% at 80% 50%, ${ac}25, transparent)` }} />
        <div className="ip-cta-inner">
          <div className="ip-cta-left">
            <div className="ip-cta-label" style={{ color: ac }}>
              ISO Certified · Manufactured in Hyderabad · Pan-India Supply
            </div>
            <h2>Ready to supply your {industry.name.toLowerCase()} operation?</h2>
            <p>
              Custom specifications, bulk pricing and reliable delivery across Hyderabad,
              Telangana, Andhra Pradesh and pan-India.
            </p>
          </div>
          <div className="ip-cta-right">
            <button className="btn-primary" onClick={openQuote} style={{ background: ac }}>
              Request a Quote
            </button>
            <a href="mailto:enquiry@ushakiranecoplast.com" className="ip-cta-email">
              enquiry@ushakiranecoplast.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}