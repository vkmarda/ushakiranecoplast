import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getProductBySlug, getRelatedProducts } from '../data/Products.js'
import { getIndustryBySlug } from '../data/industries'
import { productIndustryMap } from '../data/Productindustrymap.js'
import './ProductDetail.css'

function useInView(threshold = 0.15) {
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

function FaqItem({ faq }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`pd-faq-item ${open ? 'pd-faq-open' : ''}`}>
      <button className="pd-faq-question" onClick={() => setOpen(o => !o)}>
        <span>{faq.q}</span>
        <span className={`pd-faq-icon ${open ? 'open' : ''}`}>+</span>
      </button>
      {open && (
        <div className="pd-faq-answer">
          <p>{faq.a}</p>
        </div>
      )}
    </div>
  )
}

function RelatedCard({ product, onClick }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="pd-related-card"
      onClick={onClick}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity .5s ease, transform .5s ease',
      }}
    >
      <div className="pd-related-img">
        <img src={product.img} alt={product.name} loading="lazy" />
        <span className="pd-related-tag" style={{ background: product.tagColor }}>{product.tag}</span>
      </div>
      <div className="pd-related-body">
        <div className="pd-related-tagline">{product.tagline}</div>
        <h4>{product.name}</h4>
        <span className="pd-related-link">View Product →</span>
      </div>
    </div>
  )
}

function IndustryCard({ industry, onClick }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="pd-industry-card"
      onClick={onClick}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity .45s ease, transform .45s ease',
        borderTop: `3px solid ${industry.accentColor}`,
      }}
    >
      <div className="pd-industry-icon">{industry.icon}</div>
      <div className="pd-industry-name">{industry.name}</div>
      <p className="pd-industry-desc">{industry.subheadline.slice(0, 72)}...</p>
      <span className="pd-industry-link" style={{ color: industry.accentColor }}>
        View Solutions →
      </span>
    </div>
  )
}

export default function ProductDetail({ openQuote }) {
  const { productSlug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(productSlug)
  const related = product ? getRelatedProducts(product) : []
  const [heroRef, heroIn] = useInView(0.05)

  // Get industries this product is used in
  const industrySlugList = product ? (productIndustryMap[product.id] || []) : []
  const productIndustries = industrySlugList
    .map(slug => getIndustryBySlug(slug))
    .filter(Boolean)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [productSlug])

  if (!product) {
    return (
      <div className="pd-not-found">
        <h2>Product not found</h2>
        <button className="btn-primary" onClick={() => navigate('/products')}>
          ← Back to All Products
        </button>
      </div>
    )
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: `https://ushakiranecoplast.com${product.img}`,
    brand: { '@type': 'Brand', name: 'Ushakiran Ecoplast' },
    manufacturer: {
      '@type': 'Organization',
      name: 'Ushakiran Ecoplast',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        addressCountry: 'IN'
      }
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'INR',
      seller: { '@type': 'Organization', name: 'Ushakiran Ecoplast' }
    }
  }

  const faqSchema = product.faqs?.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  } : null

  return (
    <div className="pd-page">
      <Helmet>
        <title>{product.seoTitle}</title>
        <meta name="description" content={product.seoDescription} />
        <link rel="canonical" href={`https://ushakiranecoplast.com/products/${product.slug}`} />
        <meta property="og:title" content={product.seoTitle} />
        <meta property="og:description" content={product.seoDescription} />
        <meta property="og:image" content={`https://ushakiranecoplast.com${product.img}`} />
        <meta property="og:url" content={`https://ushakiranecoplast.com/products/${product.slug}`} />
        <meta property="og:type" content="product" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
        {faqSchema && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      {/* ── BREADCRUMB ── */}
      <nav className="pd-breadcrumb" aria-label="breadcrumb">
        <button onClick={() => navigate('/')}>Home</button>
        <span className="pd-bc-sep">›</span>
        <button onClick={() => navigate('/products')}>Products</button>
        <span className="pd-bc-sep">›</span>
        <span>{product.name}</span>
      </nav>

      {/* ── HERO ── */}
      <section className="pd-hero">
        <div
          ref={heroRef}
          className="pd-hero-img-wrap"
          style={{
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? 'translateX(0)' : 'translateX(-32px)',
            transition: 'opacity .7s ease, transform .7s ease',
          }}
        >
          <img
            src={product.img}
            alt={`${product.name} manufacturer Hyderabad — Ushakiran Ecoplast`}
            loading="eager"
          />
          <span className="pd-hero-tag" style={{ background: product.tagColor }}>{product.tag}</span>
        </div>
        <div
          className="pd-hero-content"
          style={{
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? 'translateX(0)' : 'translateX(32px)',
            transition: 'opacity .7s ease .1s, transform .7s ease .1s',
          }}
        >
          <div className="section-label">{product.tagline}</div>
          <h1>{product.name} — Manufacturer in Hyderabad</h1>
          <p className="pd-hero-desc">{product.description}</p>
          <div className="pd-hero-btns">
            <button className="btn-primary" onClick={openQuote}>Get a Quote →</button>
            <button className="btn-outline" onClick={() => navigate('/products')}>← All Products</button>
          </div>
        </div>
      </section>

      {/* ── SPECS ── */}
      <section className="pd-specs-section">
        <div className="pd-specs-inner">
          <div className="pd-specs-left">
            <div className="section-label">Specifications</div>
            <h2>Product Details</h2>
            <div className="pd-specs-grid">
              {product.specs.map(s => (
                <div className="pd-spec" key={s.label}>
                  <span className="pd-spec-label">{s.label}</span>
                  <span className="pd-spec-value">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pd-specs-right">
            <div className="section-label">Industries Served</div>
            <h2>Who Uses This Product</h2>
            <div className="pd-customers-grid">
              {product.customers.map(c => (
                <div className="pd-customer-tag" key={c}>
                  <span className="pd-customer-dot" />
                  {c}
                </div>
              ))}
            </div>
            <div className="pd-specs-cta">
              <p>Need custom specifications for your industry?</p>
              <button className="btn-primary" onClick={openQuote}>Talk to Our Team →</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── LONG DESCRIPTION ── */}
      {product.longDescription && (
        <section className="pd-long-desc-section">
          <div className="pd-long-desc-inner">
            <div className="section-label">About This Product</div>
            <h2>{product.name} Manufacturer in Hyderabad — Ushakiran Ecoplast</h2>
            <div
              className="pd-long-desc-body"
              dangerouslySetInnerHTML={{ __html: product.longDescription }}
            />
          </div>
        </section>
      )}

      {/* ── USED IN THESE INDUSTRIES ── */}
      {productIndustries.length > 0 && (
        <section className="pd-industries-section">
          <div className="pd-industries-inner">
            <div className="section-label">Industry Applications</div>
            <h2>Industries That Use {product.name}</h2>
            <p className="pd-industries-sub">
              Click any industry to see how {product.name.toLowerCase()} solve specific challenges in that sector.
            </p>
            <div className={`pd-industries-grid pd-industries-${productIndustries.length}`}>
              {productIndustries.map(ind => (
                <IndustryCard
                  key={ind.id}
                  industry={ind}
                  onClick={() => {
                    navigate(`/industries/${ind.slug}`)
                    window.scrollTo({ top: 0 })
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQs ── */}
      {product.faqs?.length > 0 && (
        <section className="pd-faqs-section">
          <div className="pd-faqs-inner">
            <div className="section-label">Common Questions</div>
            <h2>Frequently Asked Questions</h2>
            <div className="pd-faqs-list">
              {product.faqs.map((f, i) => (
                <FaqItem key={i} faq={f} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ── */}
      <section className="pd-cta-banner">
        <div className="pd-cta-inner">
          <div className="pd-cta-left">
            <div className="section-label" style={{ color: 'var(--accent)' }}>
              ISO Certified · Pan-India Supply · Made in Hyderabad
            </div>
            <h2>Ready to order {product.name}?</h2>
            <p>
              We manufacture to your exact specification — size, thickness, colour and quantity.
              Delivery across Telangana, Andhra Pradesh and pan-India from our Hyderabad facility.
            </p>
          </div>
          <div className="pd-cta-right">
            <button className="btn-primary" onClick={openQuote}>Request a Quote</button>
            <a href="tel:+919885134991" className="pd-cta-call">
              <span className="pd-cta-call-icon">📞</span>
              <span>
                <span className="pd-cta-call-label">Call Us Directly</span>
                <span className="pd-cta-call-num">+91 98851 34991</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      {related.length > 0 && (
        <section className="pd-related-section">
          <div className="pd-related-inner">
            <div className="section-label">You May Also Need</div>
            <h2>Related Products</h2>
            <div className="pd-related-grid">
              {related.map(p => (
                <RelatedCard
                  key={p.id}
                  product={p}
                  onClick={() => navigate(`/products/${p.slug}`)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}