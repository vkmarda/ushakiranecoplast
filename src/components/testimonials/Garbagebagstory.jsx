import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import './Garbagebagstory.css'

const stats = [
  { value: '62M', unit: 'tonnes', label: 'of solid waste generated in India every year' },
  { value: '80%', unit: '', label: 'ends up in open dumpsites without proper bagging' },
  { value: '3x', unit: 'faster', label: 'waste collection when garbage bags are used' },
  { value: '₹0', unit: '', label: 'cost of disease prevention — priceless' },
]

const testimonials = [
  {
    quote: "Before switching to proper garbage bags, our housekeeping staff had to handle loose waste directly. Infection risks were real. Now every floor has colour-coded bags — it changed everything.",
    name: "Facilities Head",
    org: "5-Star Hotel, Hyderabad",
    icon: "🏨",
    tag: "Hospitality",
    tagColor: "#c8873a",
  },
  {
    quote: "We process clinical waste daily. A torn or substandard bag is not just inconvenient — it's a biohazard. Ushakiran's bags have never failed us in three years of daily use.",
    name: "Procurement Manager",
    org: "Multi-Specialty Hospital, Bengaluru",
    icon: "🏥",
    tag: "Healthcare",
    tagColor: "#b5451b",
  },
  {
    quote: "Our apartment complex generates nearly 200 kg of waste per day. The moment we standardised to one bag type and size, segregation improved dramatically and our dry waste value went up.",
    name: "RWA Secretary",
    org: "Residential Complex, Hyderabad",
    icon: "🏘️",
    tag: "Residential",
    tagColor: "#2d6a4f",
  },
  {
    quote: "We supply to 40+ restaurants across the city. Garbage bags are the silent hero — no customer sees them, but without them the kitchen shuts down in an hour.",
    name: "Operations Manager",
    org: "Food & Beverage Chain, Telangana",
    icon: "🍽️",
    tag: "F&B",
    tagColor: "#7a4a8a",
  },
  {
    quote: "During monsoons, open waste bins become disease breeding grounds. We mandated garbage bags across all our facilities. Complaints about odour and pests dropped by 70%.",
    name: "Admin Director",
    org: "Corporate Campus, Pune",
    icon: "🏢",
    tag: "Corporate",
    tagColor: "#1a6b9a",
  },
  {
    quote: "I never thought a garbage bag could be sustainable. When I found out these are made from recycled plastic, I became a loyal customer. My family of four uses one less virgin-plastic product.",
    name: "Priya R.",
    org: "Household Customer, Hyderabad",
    icon: "🏠",
    tag: "Household",
    tagColor: "#3a7a2a",
  },
]

const useCases = [
  {
    icon: "🧹",
    title: "Hygiene",
    body: "A garbage bag creates a sealed barrier between waste and the environment — preventing odour, leakage and direct contact with harmful pathogens.",
  },
  {
    icon: "♻️",
    title: "Segregation",
    body: "Colour-coded bags make wet/dry and hazardous waste segregation effortless, enabling recycling and safe disposal at scale.",
  },
  {
    icon: "🚛",
    title: "Collection Efficiency",
    body: "Bagged waste is picked up 3x faster. Municipal workers, hotel staff and facility managers all save hours every single day.",
  },
  {
    icon: "🌍",
    title: "Environment",
    body: "When made from recycled LDPE, each bag repurposes plastic that would otherwise reach a landfill or waterway — closing the loop.",
  },
  {
    icon: "⚕️",
    title: "Safety",
    body: "In clinical settings, certified bags are the last line of defence against infectious waste contamination for healthcare workers.",
  },
  {
    icon: "💰",
    title: "Cost",
    body: "The cost of a bag is ₹1–3. The cost of a disease outbreak, contaminated water or pest infestation runs into lakhs. The math is clear.",
  },
]

function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, inView]
}

function StatCard({ stat, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="gbs-stat"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity .6s ease ${index * 0.12}s, transform .6s ease ${index * 0.12}s`,
      }}
    >
      <div className="gbs-stat-val">{stat.value}<span className="gbs-stat-unit">{stat.unit}</span></div>
      <div className="gbs-stat-label">{stat.label}</div>
    </div>
  )
}

function TestiCard({ t, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="gbs-testi"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity .55s ease ${(index % 3) * 0.1}s, transform .55s ease ${(index % 3) * 0.1}s`,
      }}
    >
      <div className="gbs-testi-top">
        <span className="gbs-testi-icon">{t.icon}</span>
        <span className="gbs-testi-tag" style={{ background: t.tagColor + '18', color: t.tagColor, border: `1px solid ${t.tagColor}30` }}>{t.tag}</span>
      </div>
      <blockquote className="gbs-testi-quote">"{t.quote}"</blockquote>
      <div className="gbs-testi-author">
        <div className="gbs-testi-name">{t.name}</div>
        <div className="gbs-testi-org">{t.org}</div>
      </div>
    </div>
  )
}

function UseCaseCard({ u, index }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className="gbs-usecase"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(.94)',
        transition: `opacity .5s ease ${(index % 3) * 0.08}s, transform .5s ease ${(index % 3) * 0.08}s`,
      }}
    >
      <div className="gbs-usecase-icon">{u.icon}</div>
      <h4>{u.title}</h4>
      <p>{u.body}</p>
    </div>
  )
}

export default function GarbageBagStory({ openQuote, setPage }) {
  const [heroRef, heroIn] = useInView(0.05)

  return (
    <div className="gbs-page">
      <Helmet>
        <title>Why Garbage Bags Matter | Ushakiran Ecoplast</title>
        <meta name="description" content="Discover why proper garbage bags are essential for hygiene, waste segregation, and environmental responsibility — told through real customer stories." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="gbs-hero">
        <div className="gbs-hero-bg" />
        <div
          ref={heroRef}
          className="gbs-hero-content"
          style={{
            opacity: heroIn ? 1 : 0,
            transform: heroIn ? 'translateY(0)' : 'translateY(40px)',
            transition: 'opacity .9s ease, transform .9s ease',
          }}
        >
          <div className="gbs-hero-eyebrow">The Unsung Essential</div>
          <h1 className="gbs-hero-h1">
            The bag nobody<br />
            notices — until<br />
            <em>it's gone.</em>
          </h1>
          <p className="gbs-hero-sub">
            Every day, millions of garbage bags silently hold together the hygiene infrastructure of hospitals, hotels, homes and cities. This is their story.
          </p>
          {/* <button className="btn-primary" onClick={openQuote}>Get a Quote →</button> */}
        </div>
        <div className="gbs-hero-scroll">scroll ↓</div>
      </section>

      {/* ── STATS ── */}
      <section className="gbs-stats-section">
        <div className="gbs-stats-label">The Scale of the Problem</div>
        <div className="gbs-stats-grid">
          {stats.map((s, i) => <StatCard key={i} stat={s} index={i} />)}
        </div>
      </section>

      {/* ── EDITORIAL BREAK ── */}
      <section className="gbs-editorial">
        <div className="gbs-editorial-inner">
          <div className="gbs-editorial-line" />
          <p className="gbs-editorial-text">
            A garbage bag costs less than a cup of tea.<br />
            <strong>The cost of not using one is immeasurable.</strong>
          </p>
          <div className="gbs-editorial-line" />
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section className="gbs-usecases-section">
        <div className="gbs-section-header">
          <div className="section-label">Why It Matters</div>
          <h2>Six reasons a garbage bag<br />is never just a bag</h2>
        </div>
        <div className="gbs-usecases-grid">
          {useCases.map((u, i) => <UseCaseCard key={i} u={u} index={i} />)}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="gbs-testimonials-section">
        <div className="gbs-section-header">
          <div className="section-label">Real Voices</div>
          <h2>What happens when<br />you get it right</h2>
          <p>From hospitals to households — customers share what changed when they switched to proper garbage bags.</p>
        </div>
        <div className="gbs-testi-grid">
          {testimonials.map((t, i) => <TestiCard key={i} t={t} index={i} />)}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="gbs-cta">
        <div className="gbs-cta-inner">
          <div className="section-label" style={{ color: 'var(--accent)' }}>Made in Hyderabad</div>
          <h2>Ready to get the right bag<br />for your needs?</h2>
          <p>We manufacture to your exact specifications — size, thickness, colour, quantity. Talk to us.</p>
          <div className="gbs-cta-btns">
            <button className="btn-primary" onClick={openQuote}>Request a Quote</button>
            <button className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }} onClick={() => setPage('products')}>View All Products</button>
          </div>
        </div>
      </section>
    </div>
  )
}