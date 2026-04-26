import { useState, useEffect, useRef } from 'react'
import { useParams, useLocation, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getSubPageBySlug } from '../data/GarbageBagSubPages.js'
import { pageBadges, pageRelated, pageDescriptions, getFactoryImageProps, getFactoryText } from '../data/GarbageBagMeta.js'
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
}

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

export default function GarbageBagSubPage({ openQuote }) {
  const { subSlug } = useParams()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'
  const page = getSubPageBySlug(subSlug)
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => { window.scrollTo({ top: 0 }); setOpenFaq(null) }, [subSlug])

  useEffect(() => {
    document.body.classList.add('page-with-sticky-breadcrumb')
    return () => document.body.classList.remove('page-with-sticky-breadcrumb')
  }, [])

  if (!page) {
    return (
      <div className="gbsp-not-found">
        <h2>Page not found</h2>
        <button className="btn-primary" onClick={() => navigate('/products/garbage-bags')}>
          ← Back to Garbage Bags
        </button>
      </div>
    )
  }

  const factoryImg = getFactoryImageProps(page.slug)
  const factoryText = getFactoryText(page.slug)
  const badges = pageBadges[page.slug] || []
  const heroRef = useRef(null)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

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
  const relatedSlugs = pageRelated[page.slug] || []
  const related = relatedSlugs
    .map(slug => {
      const rPage = getSubPageBySlug(slug)
      return rPage ? { slug, title: rPage.h1, desc: pageDescriptions[slug] || '' } : null
    })
    .filter(Boolean)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ushakiranecoplast.com/' },
      { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://ushakiranecoplast.com/products' },
      { '@type': 'ListItem', position: 3, name: 'Garbage Bags', item: 'https://ushakiranecoplast.com/products/garbage-bags' },
      { '@type': 'ListItem', position: 4, name: page.h1, item: `https://ushakiranecoplast.com/products/garbage-bags/${page.slug}` }
    ]
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  }

  return (
    <div className="gbsp-page">
      <Helmet>
        <title>{page.seoTitle}</title>
        <meta name="description" content={page.seoMeta} />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta property="og:title" content={page.seoTitle} />
        <meta property="og:description" content={page.seoMeta} />
        <meta property="og:url" content={`https://ushakiranecoplast.com/products/garbage-bags/${page.slug}`} />
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
        <Link to="/products/garbage-bags">Garbage Bags</Link>
        <span className="gbsp-bc-sep">›</span>
        <span>{page.h1}</span>
      </nav>

      {/* HERO */}
      <section className="gbsp-hero" ref={heroRef}>
        <div className="gbsp-hero-inner">
          <div className="gbsp-hero-text">
            <div className="section-label">Recycled LDPE · ISO Certified · Pan-India Supply</div>
            <h1>{page.h1}</h1>
            {badges.length > 0 && (
              <div className="gbsp-trust-pills">
                {badges.map((badge, i) => (
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
              <Link to="/products/recycled-garbage-bags-hyderabad/">recycled garbage bags product page</Link>.
            </p>
            {page.linkToRolls && (
              <p className="gbsp-intro-link">
                We also manufacture{' '}
                <Link to="/products/plastic-bags-on-rolls-manufacturer/">bags on rolls</Link>{' '}
                for housekeeping trolleys and retail operations.
              </p>
            )}
            <div className="gbsp-hero-btns">
              <button className="btn-primary" onClick={openQuote}>Get a Quote →</button>
              <Link to="/products/garbage-bags" className="btn-outline">← All Garbage Bags</Link>
            </div>
          </div>
          {page.heroImg && (
            <div className="gbsp-hero-img-col">
              <img src={page.heroImg} alt={page.heroImgAlt} loading="eager" />
            </div>
          )}
        </div>
      </section>

      {/* FACTORY SECTION — immediately after hero */}
      {factoryImg && (
        <FactorySection
          imageSrc={factoryImg.src}
          imageAlt={factoryImg.alt}
          heading={factoryText.heading}
          body={factoryText.body}
        />
      )}

      {/* NEEDS SECTION */}
      <section className="gbsp-needs">
        <div className="gbsp-needs-inner">
          <div className="section-label">Buyer Requirements</div>
          <h2>{page.needsHeading}</h2>
          <p>{page.needsBody}</p>
        </div>
      </section>

      {/* MID SECTION */}
      {page.midSection && (
        <section className="gbsp-mid">
          <div className="gbsp-mid-inner">
            <div className="section-label">{page.midSection.label || 'Details'}</div>
            <h2>{page.midSection.heading}</h2>
            <p>{page.midSection.body}</p>
          </div>
        </section>
      )}

      {/* WHY UKEP SECTION */}
      <section className="gbsp-why">
        <div className="gbsp-why-inner">
          <div className="section-label">About Us</div>
          <h2>{page.whyHeading}</h2>
          <p>{page.whyBody}</p>
          <p className="gbsp-why-link">
            See full product specifications on our{' '}
            <Link to="/products/recycled-garbage-bags-hyderabad/">recycled garbage bags page</Link>.
          </p>
        </div>
      </section>

      {/* SECONDARY PRODUCT CARD */}
      {page.secondaryCard && (
        <section className="gbsp-also">
          <div className="gbsp-also-inner">
            <div className="gbsp-also-card">
              <div className="gbsp-also-img">
                <img src={page.secondaryCard.img} alt={page.secondaryCard.imgAlt} loading="lazy" />
              </div>
              <div className="gbsp-also-body">
                <div className="section-label">Also Available</div>
                <h3>{page.secondaryCard.name}</h3>
                <Link to={page.secondaryCard.link} className="btn-primary">View Product →</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EXTRA SECTION (page 13 only) */}
      {page.extraSection && (
        <section className="gbsp-extra">
          <div className="gbsp-extra-inner">
            <div className="section-label">Product Range</div>
            <h2>{page.extraSection.heading}</h2>
            <p>{page.extraSection.body}</p>
          </div>
        </section>
      )}

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
      {related.length > 0 && (
        <section className="gbsp-related">
          <div className="gbsp-related-inner">
            <h2>You might also find these useful</h2>
            <div className="gbsp-related-cards">
              {related.map(r => (
                <Link key={r.slug} to={`/products/garbage-bags/${r.slug}/`} className="gbsp-related-card">
                  <div className="gbsp-related-card-body">
                    <div className="gbsp-related-title">{r.title}</div>
                    <div className="gbsp-related-desc">{r.desc}</div>
                  </div>
                  <span className="gbsp-related-arrow" aria-hidden="true">→</span>
                </Link>
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
            <h2>Ready to order garbage bags?</h2>
            <p>
              We manufacture to your exact specification — size, colour and quantity.
              Delivery across Telangana, Andhra Pradesh and pan-India from our Hyderabad facility.
              View our full{' '}
              <Link to="/products/recycled-garbage-bags-hyderabad/" className="gbsp-cta-inline-link">
                recycled garbage bags range
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

      {/* STICKY PHONE CTA — mobile only, shown after hero scrolls out of view */}
      <div className={`gbsp-sticky-cta${showStickyCTA ? ' visible' : ''}`}>
        <a href="tel:+919885134991" className="gbsp-sticky-cta-link">
          Call to order: +91 98851 34991
        </a>
      </div>
    </div>
  )
}
