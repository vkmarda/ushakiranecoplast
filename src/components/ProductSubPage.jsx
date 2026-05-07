import { useState, useEffect, useRef } from 'react'
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import FactorySection from './FactorySection.jsx'
import './GarbageBagSubPage.css'

const BADGE_ICONS = {
  'ISO 9001:2015 Certified': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
    </svg>
  ),
  '100% Recycled LDPE': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
    </svg>
  ),
  '12+ Years in Operation': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  'Pan-India Supply': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
  'PCB Approved': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      <path d="M9 12l2 2 4-4"/>
    </svg>
  ),
}

const SECTION_LABELS = ['About This Product', 'Specifications', 'About Us']

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`gbsp-faq-item ${isOpen ? 'gbsp-faq-open' : ''}`}>
      <button className="gbsp-faq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span>{faq.q}</span>
        <svg
          className={`gbsp-faq-chevron ${isOpen ? 'open' : ''}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="gbsp-faq-answer" aria-hidden={!isOpen}>
        <div className="gbsp-faq-answer-inner">
          <p>{faq.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductSubPage({
  openQuote,
  pages,
  getFactoryAlt,
  clusterSlug,
  clusterName,
  clusterPath,
  mainProductUrl,
  mainProductName,
}) {
  const { subSlug } = useParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'
  const page = pages.find(p => p.slug === subSlug) || null
  const [openFaq, setOpenFaq] = useState(null)
  const heroRef = useRef(null)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  useEffect(() => { window.scrollTo({ top: 0 }); setOpenFaq(null) }, [subSlug])

  useEffect(() => {
    document.body.classList.add('page-with-sticky-breadcrumb')
    return () => document.body.classList.remove('page-with-sticky-breadcrumb')
  }, [])

  useEffect(() => {
    setShowStickyCTA(false)
    const hero = heroRef.current
    if (!hero) return
    const obs = new IntersectionObserver(
      ([entry]) => setShowStickyCTA(!entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(hero)
    return () => obs.disconnect()
  }, [subSlug])

  if (!page) {
    return (
      <div className="gbsp-not-found">
        <h2>Page not found</h2>
        <button className="btn-primary" onClick={() => navigate(clusterPath)}>
          {'←'} Back to {clusterName}
        </button>
      </div>
    )
  }

  const factoryImgSrc = `/images/factory/${page.factoryImg}`
  const factoryImgAlt = getFactoryAlt(page.factoryImg)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ushakiranecoplast.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://ushakiranecoplast.com/products' },
      { '@type': 'ListItem', position: 3, name: clusterName, item: `https://ushakiranecoplast.com${clusterPath}` },
      { '@type': 'ListItem', position: 4, name: page.h1, item: `https://ushakiranecoplast.com${clusterPath}/${page.slug}` },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div className="gbsp-page">
      <Helmet>
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.seoMeta} />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta property="og:title" content={page.seoTitle} />
        <meta property="og:description" content={page.seoMeta} />
        <meta property="og:url" content={`https://ushakiranecoplast.com${clusterPath}/${page.slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ushakiran Ecoplast" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={page.seoTitle} />
        <meta name="twitter:description" content={page.seoMeta} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* BREADCRUMB */}
      <nav className="gbsp-breadcrumb" aria-label="breadcrumb">
        <Link to="/">Home</Link>
        <span className="gbsp-bc-sep">›</span>
        <Link to="/products">Products</Link>
        <span className="gbsp-bc-sep">›</span>
        <Link to={clusterPath}>{clusterName}</Link>
        <span className="gbsp-bc-sep">›</span>
        <span>{page.h1}</span>
      </nav>

      {/* HERO */}
      <section className="gbsp-hero" ref={heroRef}>
        <div className="gbsp-hero-inner">
          <div className="gbsp-hero-text">
            <div className="section-label">ISO Certified · Pan-India Supply · Made in Hyderabad</div>
            <h1>{page.h1}</h1>
            {page.badges && page.badges.length > 0 && (
              <div className="gbsp-trust-pills">
                {page.badges.map((badge, i) => (
                  <span key={i} className="gbsp-trust-pill">
                    {BADGE_ICONS[badge]}
                    {badge}
                  </span>
                ))}
              </div>
            )}
            <p className="gbsp-intro">{page.intro}</p>
            <p className="gbsp-intro-link">
              View our full range on the{' '}
              <Link to={mainProductUrl}>{mainProductName}</Link>.
            </p>
            <div className="gbsp-hero-btns">
              <button className="btn-primary" onClick={openQuote}>Get a Quote →</button>
              <Link to={mainProductUrl} className="btn-outline">View More Details</Link>
            </div>
          </div>
          {page.heroImg && (
            <div className="gbsp-hero-img-col">
              <img src={page.heroImg} alt={page.heroImgAlt} loading="eager" />
            </div>
          )}
        </div>
      </section>

      {/* FACTORY SECTION */}
      <FactorySection
        imageSrc={factoryImgSrc}
        imageAlt={factoryImgAlt}
        heading={page.factoryHeading}
        body={page.factoryBody}
      />

      {/* CONTENT SECTIONS */}
      {page.sections.map((section, idx) => (
        <section
          key={idx}
          className={idx === 1 ? 'gbsp-mid' : idx === 0 ? 'gbsp-needs' : 'gbsp-why'}
        >
          <div className={idx === 1 ? 'gbsp-mid-inner' : idx === 0 ? 'gbsp-needs-inner' : 'gbsp-why-inner'}>
            <div className="section-label">{SECTION_LABELS[idx]}</div>
            <h2>{section.heading}</h2>
            {idx === 2 ? (
              <p dangerouslySetInnerHTML={{ __html: section.body }} />
            ) : (
              <p>{section.body}</p>
            )}
          </div>
        </section>
      ))}

      {/* FAQS */}
      <section className="gbsp-faqs">
        <div className="gbsp-faqs-inner">
          <div className="section-label">Common Questions</div>
          <h2>Frequently Asked Questions</h2>
          <div className="gbsp-faqs-list">
            {page.faqs.map((f, i) => (
              <FaqItem
                key={i}
                faq={f}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PAGES */}
      {page.related && page.related.length > 0 && (
        <section className="gbsp-related">
          <div className="gbsp-related-inner">
            <h2>You might also find these useful</h2>
            <div className="gbsp-related-cards">
              {page.related.map((r, i) => (
                <a key={i} href={r.url} className="gbsp-related-card">
                  <div className="gbsp-related-card-body">
                    <div className="gbsp-related-title">{r.title}</div>
                    <div className="gbsp-related-desc">{r.desc}</div>
                  </div>
                  <span className="gbsp-related-arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="gbsp-cta">
        <div className="gbsp-cta-inner">
          <div className="gbsp-cta-left">
            <div className="section-label" style={{ color: 'var(--accent)' }}>
              ISO Certified · Pan-India Supply · Made in Hyderabad
            </div>
            <h2>Ready to place an order?</h2>
            <p>
              We manufacture to your exact specification. Delivery across Telangana, Andhra Pradesh and pan-India from our Hyderabad facility.
              View our full{' '}
              <Link to={mainProductUrl} className="gbsp-cta-inline-link">
                {mainProductName}
              </Link>{' '}
              or contact us directly.
            </p>
          </div>
          <div className="gbsp-cta-right">
            <button className="btn-primary" onClick={openQuote}>Request a Quote</button>
            <a href="tel:+918919428973" className="gbsp-cta-call">
              <span className="gbsp-cta-call-icon">📞</span>
              <span>
                <span className="gbsp-cta-call-label">Call Us Directly</span>
                <span className="gbsp-cta-call-num">+91 8919428973</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* STICKY PHONE CTA */}
      <div className={`gbsp-sticky-cta${showStickyCTA ? ' visible' : ''}`}>
        <a href="tel:+919885134991" className="gbsp-sticky-cta-link">
          Call to order: +91 98851 34991
        </a>
      </div>
    </div>
  )
}
