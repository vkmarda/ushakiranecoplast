import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const processSteps = [
  { step: '01', title: 'Waste Collection', desc: 'Post-consumer plastic waste collected from households, industries and municipalities across India.', img: '/images/gallery/step1.webp' },
  { step: '02', title: 'Sorting & Segregation', desc: 'Plastic waste carefully sorted by type, colour and grade for optimal recycling output.', img: '/images/gallery/step2.webp' },
  { step: '03', title: 'Cleaning, Washing & Shredding', desc: 'Thorough industrial cleaning to remove all contaminants before processing begins. Material is then shredded into uniform flakes', img: '/images/gallery/step3.webp' },
  { step: '04', title: 'Granulation', desc: 'Flakes are melted and formed into recycled granules.', img: '/images/gallery/step4.webp' },
  { step: '05', title: 'Extrusion', desc: 'Granules extruded into film of precisely specified thickness for each product type.', img: '/images/gallery/step5.webp' },
  { step: '06', title: 'Quality Check', desc: 'Extruded films rigorously tested for consistency, strength and purity at every batch.', img: '/images/gallery/step6.webp' },
  { step: '07', title: 'Cutting & Sealing', desc: 'Film cut and heat-sealed to exact dimensions with consistent seam strength.', img: '/images/gallery/step7.webp' },
  { step: '08', title: 'Final Inspection & Quality Check', desc: 'Every batch undergoes a final quality inspection before it is cleared for packaging.', img: '/images/gallery/step10.webp' },
  { step: '09', title: 'Packaging', desc: 'Products packed neatly in rolls, flat packs or bulk bags as per customer requirements.', img: '/images/gallery/step8.webp' },
  { step: '10', title: 'Stacking Up', desc: 'Packaged products are stacked up in facility', img: '/images/gallery/step11.webp' },
  { step: '11', title: 'Dispatch', desc: 'Pan-India delivery from our Hyderabad facility, reliable, on time, every time.', img: '/images/gallery/step12.webp' },
]

// const galleryImages = [
//   { img: 'https://ushakiranecoplast.com/wp-content/uploads/2025/02/ab21.webp', caption: 'Manufacturing Floor' },
//   { img: 'https://ushakiranecoplast.com/wp-content/uploads/2025/02/ab12.webp', caption: 'Production Line' },
//   { img: '/images/hero-bg.webp', caption: 'Factory Operations' },
//   { img: '/images/team.webp', caption: 'Our Team' },
// ]

function ProcessStep({ s, index, onClick }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const isLeft = index % 2 === 0

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const card = (
    <div className="ps-card" onClick={onClick}>
      <div className="ps-img-wrap">
        <img src={s.img} alt={s.title} loading="lazy" />
      </div>
      <div className="ps-card-body">
        <h4>{s.title}</h4>
        <p>{s.desc}</p>
      </div>
    </div>
  )

  return (
    <div
      ref={ref}
      className={`ps-row ${isLeft ? 'ps-left' : 'ps-right'} ${visible ? 'ps-visible' : ''}`}
    >
      {/* Desktop: left side */}
      <div className="ps-side ps-side-left ps-desktop-only">
        {isLeft && card}
      </div>

      {/* Centre dot */}
      <div className="ps-centre">
        <div className="ps-dot"><span>{s.step}</span></div>
      </div>

      {/* Desktop: right side */}
      <div className="ps-side ps-side-right ps-desktop-only">
        {!isLeft && card}
      </div>

      {/* Mobile: always show card */}
      <div className="ps-mobile-only">
        {card}
      </div>
    </div>
  )
}
const videoSchema = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'Ushakiran Ecoplast — Recycled Plastic Bag Manufacturing Process, Hyderabad',
  description: 'Inside our IDA Mankhal, Hyderabad facility: from post-consumer plastic waste collection through sorting, washing, granulation, extrusion, cutting, sealing and quality inspection to final dispatch. 11 steps, one ISO certified manufacturing cycle.',
  thumbnailUrl: 'https://ushakiranecoplast.com/images/hero-bg.webp',
  contentUrl: 'https://ushakiranecoplast.com/images/gallery/Usha.mp4',
  uploadDate: '2024-06-01',
  duration: 'PT2M',
  publisher: {
    '@type': 'Organization',
    name: 'Ushakiran Ecoplast',
    logo: {
      '@type': 'ImageObject',
      url: 'https://ushakiranecoplast.com/logo.webp',
    },
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ushakiranecoplast.com/' },
    { '@type': 'ListItem', position: 2, name: 'Factory & Manufacturing Process', item: 'https://ushakiranecoplast.com/gallery/' },
  ],
}

export default function FactoryGallery({ setPage, openQuote }) {
  const [lightbox, setLightbox] = useState(null)
  const { pathname } = useLocation()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'

  return (
    <div className="gallery-page">
      <Helmet>
        <title>Factory &amp; Manufacturing Process | Ushakiran Ecoplast Hyderabad</title>
        <meta name="description" content="See inside Ushakiran Ecoplast's ISO certified recycling and manufacturing facility in Hyderabad. An 11-step process turning post-consumer plastic waste into finished garbage bags and LDPE products." />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta property="og:title" content="Factory &amp; Manufacturing Process | Ushakiran Ecoplast Hyderabad" />
        <meta property="og:description" content="See inside Ushakiran Ecoplast's ISO certified recycling and manufacturing facility in Hyderabad. An 11-step process turning post-consumer plastic waste into finished garbage bags and LDPE products." />
        <meta property="og:image" content="https://ushakiranecoplast.com/images/hero-bg.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://ushakiranecoplast.com/gallery/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Ushakiran Ecoplast" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Factory &amp; Manufacturing Process | Ushakiran Ecoplast Hyderabad" />
        <meta name="twitter:description" content="See inside Ushakiran Ecoplast's ISO certified recycling and manufacturing facility in Hyderabad. An 11-step process turning post-consumer plastic waste into finished garbage bags and LDPE products." />
        <meta name="twitter:image" content="https://ushakiranecoplast.com/images/hero-bg.webp" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero */}
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <div className="section-label" style={{ color: 'rgba(255,255,255,.7)' }}>Inside UKEP</div>
          <h1>Factory &amp; Process</h1>
          <p>From waste collection to finished product, see how we turn recycled plastic into quality solutions.</p>
          <button onClick={() => setPage('home')} className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>← Back to Home</button>
        </div>
      </div>

      {/* Factory Video */}
      <section className="gallery-video-section">
        <div className="section-header">
          <div className="section-label">Watch Us Work</div>
          <h2>Inside Our Factory</h2>
          <p>A look at our state-of-the-art recycling and manufacturing facility in Hyderabad.</p>
        </div>
        <div className="gallery-video-wrap">
          <video
  src="/images/gallery/Usha.mp4"
  autoPlay
  muted
  loop
  playsInline
  poster="/images/hero-bg.webp"
  className="gallery-video"
/>
        </div>
      </section>

      {/* Facility overview */}
      <section className="gallery-overview">
        <div className="gallery-overview-inner">
          <h2>Our Manufacturing Facility in Hyderabad</h2>
          <p>
            Ushakiran Ecoplast operates an ISO 9001:2015 certified manufacturing facility at IDA Mankhal, Maheshwaram, Hyderabad. The facility has been in continuous operation since 2013 and has processed over 5 crore kilograms of post-consumer plastic waste into finished LDPE products. Every bag, roll, film and sheet that leaves our facility is manufactured from 100% recycled LDPE — not virgin plastic.
          </p>
          <p>
            The facility houses the full manufacturing cycle under one roof: incoming material inspection, washing and shredding, granulation, extrusion, cutting and sealing, quality inspection and packing. Keeping the entire process in-house gives us direct control over material quality and specification consistency at every step, which is why our clients see the same product on order ten as they approved in the initial sample.
          </p>
          <p>
            The facility supplies buyers across Hyderabad, Telangana, Andhra Pradesh and pan-India. It is open for visits by appointment. Buyers placing large first orders are welcome to review the facility and production process before confirming. Contact us on <a href="tel:+918919428973">+91 8919428973</a> or at <a href="mailto:enquiry@ushakiranecoplast.com">enquiry@ushakiranecoplast.com</a> to arrange a visit.
          </p>
        </div>
      </section>

      {/* ── SCROLL TIMELINE ── */}
      <section className="gallery-process">
        <div className="section-header">
          <div className="section-label">How We Make It</div>
          <h2>Our Manufacturing Process</h2>
          <p>11 meticulous steps from raw waste to finished eco-friendly product.</p>
        </div>

        <div className="ps-timeline">
          <div className="ps-spine" />
          {processSteps.map((s, i) => (
            <ProcessStep key={s.step} s={s} index={i} onClick={() => setLightbox(i)} />
          ))}
          <div className="ps-spine-end"><span>✓</span></div>
        </div>
      </section>

      

      {/* CTA */}
      <section className="gallery-cta">
        <div className="section-label">Ready to Partner?</div>
        <h2>Impressed by what you see?</h2>
        <p>Get in touch and let's build a sustainable supply chain together.</p>
        <button className="btn-primary" onClick={openQuote}>Get a Quote →</button>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={lightbox >= 100 ? galleryImages[lightbox - 100].img : processSteps[lightbox].img}
              alt=""
            />
            <p className="lightbox-caption">
              {lightbox >= 100
                ? galleryImages[lightbox - 100].caption
                : `Step ${processSteps[lightbox].step}, ${processSteps[lightbox].title}`}
            </p>
          </div>
          <button className="lightbox-nav lightbox-prev"
            onClick={e => { e.stopPropagation(); setLightbox(l => Math.max(0, l - 1)) }}>‹</button>
          <button className="lightbox-nav lightbox-next"
            onClick={e => { e.stopPropagation(); setLightbox(l => Math.min(processSteps.length - 1, l + 1)) }}>›</button>
        </div>
      )}
    </div>
  )
}