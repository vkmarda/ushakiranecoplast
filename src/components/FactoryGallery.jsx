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
  { step: '11', title: 'Dispatch', desc: 'Pan-India delivery from our Hyderabad facility — reliable, on time, every time.', img: '/images/gallery/step12.webp' },
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
export default function FactoryGallery({ setPage, openQuote }) {
  const [lightbox, setLightbox] = useState(null)
  const { pathname } = useLocation()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'

  return (
    <div className="gallery-page">
      <Helmet>
        <title>Gallery | Ushakiran Ecoplast</title>
        <meta name="description" content="See inside Ushakiran Ecoplast's recycling and manufacturing facility in Hyderabad. Watch our 11-step process from plastic waste to finished eco-friendly product." />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero */}
      <div className="gallery-hero">
        <div className="gallery-hero-content">
          <div className="section-label" style={{ color: 'rgba(255,255,255,.7)' }}>Inside UKEP</div>
          <h1>Factory &amp; Process</h1>
          <p>From waste collection to finished product — see how we turn recycled plastic into quality solutions.</p>
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
                : `Step ${processSteps[lightbox].step} — ${processSteps[lightbox].title}`}
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