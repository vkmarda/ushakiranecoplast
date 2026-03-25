import { useEffect, useRef, useState } from 'react'

// ── Animated counter ──
function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const steps = 60, duration = 1800
        const increment = target / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= target) { setCount(target); clearInterval(timer) }
          else setCount(Math.floor(current))
        }, duration / steps)
      }
    }, { threshold: 0.3 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])
  return <span ref={ref}>{count}{suffix}</span>
}

// ── Timeline ──
const timeline = [
  {
    year: '2013',
    title: 'The Beginning',
    icon: '🌱',
    tag: 'Founded',
    color: '#1b4332',
    desc: 'Aditya & Ramakanth Sarda founded Ushakiran Ecoplast in Hyderabad with a clear mission — convert plastic waste into reusable, everyday products.',
    milestone: 'First garbage bags manufactured',
  },
  {
    year: '2015',
    title: 'Expanding Range',
    icon: '📦',
    tag: 'Growth',
    color: '#2d6a4f',
    desc: 'Launched bio-medical bags and LDPE sheets, entering hospitals and facility management companies. Trust built through consistent quality and timely delivery.',
    milestone: 'Bio-medical & LDPE lines launched',
  },
  {
    year: '2018',
    title: 'Pan-India Reach',
    icon: '🚚',
    tag: 'Expansion',
    color: '#40916c',
    desc: 'Scaled distribution across 20+ cities. Established reliable logistics partnerships and strengthened direct B2B relationships with MNCs, hotels and railways.',
    milestone: '20+ cities · 200+ clients',
  },
  {
    year: '2020',
    title: 'COVID Resilience',
    icon: '🛡️',
    tag: 'Resilience',
    color: '#1b4332',
    desc: 'During the pandemic, we prioritised clients over profit — supplying critical bio-medical waste bags to hospitals at fair prices throughout the crisis.',
    milestone: '90%+ client retention through COVID',
  },
  {
    year: '2022',
    title: 'ISO Certified',
    icon: '🏆',
    tag: 'Certified',
    color: '#2d6a4f',
    desc: 'Achieved ISO certification and strengthened our full recycling supply chain. Expanded to 50+ cities with a growing workforce committed to sustainable quality.',
    milestone: 'ISO Certified · 50+ cities',
  },
  {
    year: '2025+',
    title: 'Scaling Up',
    icon: '🚀',
    tag: 'Future',
    color: '#40916c',
    desc: 'Serving 500+ clients across hotels, hospitals, railways, MNCs and municipalities.',
    milestone: '500+ clients · 6000+ MT/year & growing',
  },
]

const values = [
  { icon: '♻️', title: 'Circular by Design', desc: 'We believe plastic doesn\'t have to be a problem. Every product we make starts as waste and ends as something useful — that\'s the only kind of manufacturing we do.' },
  { icon: '🌱', title: 'Sustainability Without Compromise', desc: 'Eco-friendly should never mean lower quality. We prove that recycled products can match — and often exceed — the performance of virgin plastic alternatives.' },
  { icon: '🤲', title: 'Responsibility at Every Step', desc: 'From the waste collectors in our supply chain to the organizations trusting us — we take our obligations to people and planet seriously.' },
  { icon: '🏗️', title: 'Built to Last', desc: 'We are not chasing trends. We are building a company designed for decades — with consistent processes, long-term client relationships, and a facility that grows with demand.' },
  { icon: '🔍', title: 'Honest About What We Make', desc: 'Plastic is complex. We don\'t pretend otherwise. We\'re transparent about our materials, our certifications, and what recycled really means in practice.' },
  { icon: '🤝', title: 'Partnership Over Transaction', desc: 'A client placing their first order gets the same attention as one who has been with us for a decade. We grow when our clients grow — that alignment drives everything.' },
]

const problemStats = [
  { val: '400M', label: 'Tonnes of plastic waste generated globally every year' },
  { val: '9%', label: 'Of global plastic waste is actually recycled' },
  { val: '24.2M', label: 'Tonnes of plastic waste generated in India annually' },
  { val: '19%', label: 'Annual growth rate of India\'s plastic waste problem' },
]

const INTERVAL_MS = 5000

export default function AboutPage({ setPage, openQuote }) {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)
  const progressRef = useRef(null)
  const timerRef = useRef(true)

  function startAuto(fromStep) {
    clearInterval(intervalRef.current)
    clearInterval(progressRef.current)
    setProgress(0)

    let p = 0
    progressRef.current = setInterval(() => {
      p += 100 / (INTERVAL_MS / 50)
      setProgress(Math.min(p, 100))
    }, 50)

    intervalRef.current = setInterval(() => {
      setActiveStep(s => (s + 1) % timeline.length)
      setProgress(0)
      p = 0
    }, INTERVAL_MS)
  }

  useEffect(() => {
  setProgress(0)
  if (timerRef.current === null) return

  const interval = setInterval(() => {
    setProgress(p => {
      if (p >= 100) return 0
      return p + (100 / (3200 / 100))
    })
  }, 100)

  timerRef.current = interval
  return () => clearInterval(interval)
}, [activeStep])

  const prevProgress = useRef(0)
useEffect(() => {
  if (prevProgress.current >= 90 && progress === 0 && timerRef.current !== null) {
    setActiveStep(s => (s + 1) % timeline.length)
  }
  prevProgress.current = progress
}, [progress])


  function selectStep(i) {
  setActiveStep(i)
  setProgress(0)
  if (timerRef.current) {
    clearInterval(timerRef.current)
    timerRef.current = null  // null = user stopped it
  }
}

  const active = timeline[activeStep]

  return (
    <div className="about-page">

      {/* HERO */}
      <div className="about-page-hero">
        <div className="about-page-hero-content">
          <div className="section-label" style={{ color: 'rgba(255,255,255,.75)' }}>Our Story</div>
          <h1>A Step Towards a Cleaner &amp; Greener Tomorrow</h1>
          <p>From a small Hyderabad factory in 2013 to serving 500+ clients across 50+ Indian cities — this is our journey.</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <button className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }} onClick={() => setPage('home')}>← Back to Home</button>
          </div>
        </div>
      </div>

      {/* THE PROBLEM */}
      <section className="about-problem">
        <div className="about-problem-inner">
          <div className="about-problem-text">
            <div className="section-label">Why We Exist</div>
            <h2>The Problem We're Solving</h2>
            <p>Plastic is one of humanity's greatest inventions — yet human irresponsibility has turned it into a crisis. Manufacturing virgin plastic bags worsens the problem. Compostable bags are too expensive and fragile. <strong>There had to be a better way.</strong></p>
            <p>We found it: take plastic waste that already exists, recycle it, and turn it into durable, affordable, useful products. Waste becomes resource. Problem becomes solution.</p>
            <button className="btn-primary" onClick={() => setPage('gallery')}>See Our Process →</button>
          </div>
          <div className="about-problem-stats">
            {problemStats.map((s, i) => (
              <div className="problem-stat" key={i}>
                <div className="problem-stat-val">{s.val}</div>
                <div className="problem-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="about-founders">
        <div className="section-header">
          <div className="section-label">The People Behind It</div>
          <h2>Founded by Brothers, Built on Purpose</h2>
          <p>Aditya and Ramakanth Sarda saw the plastic waste crisis as an opportunity — to build a business that does good while doing well.</p>
        </div>
        <div className="founders-quote-grid">
            <div className="founder-quote-card">
            <div className="fq-avatar"><img src="/images/team-aditya.webp" alt="Aditya Sarda" /></div>
            <blockquote>"Healthy competition drives innovation. Our focus on quality, customization and customer retention has been the foundation of our consistent growth."</blockquote>
            <div className="fq-name">Aditya Sarda</div>
            <div className="fq-role">Co-Founder &amp; Director</div>
          </div>
          <div className="founder-quote-card">
            <div className="fq-avatar"><img src="/images/team-ramakant.webp" alt="Ramakanth Sarda" /></div>
            <blockquote>"We started in 2013 with one clear mission — convert plastic waste into reusable products. Every bag we make is a step towards a cleaner India."</blockquote>
            <div className="fq-name">Ramakanth Sarda</div>
            <div className="fq-role">Co-Founder &amp; Managing Director</div>
          </div>
          
        </div>
      </section>
      {/* VISION / MISSION / GOAL */}
      <section className="about-vision">
        <div className="vm-card">
          <div className="vm-icon">🔭</div>
          <h3>Vision</h3>
          <p>To become a global leader in sustainable packaging solutions by driving innovation and reducing environmental impact.</p>
        </div>
        <div className="vm-card vm-accent">
          <div className="vm-icon">🎯</div>
          <h3>Mission</h3>
          <p>To provide high-quality, eco-friendly packaging products that support the circular economy and surpass customer expectations.</p>
        </div>
        <div className="vm-card">
          <div className="vm-icon">🌱</div>
          <h3>Goal</h3>
          <p>To achieve sustainable growth while promoting environmental awareness and scaling production capacity significantly.</p>
        </div>
      </section>

      {/* DYNAMIC JOURNEY */}
      <section className="about-timeline">
        <div className="section-header">
          <div className="section-label">Our Journey</div>
          <h2>A Decade of Growth</h2>
          <p>Built on trust, recycled material, and relentless consistency.</p>
        </div>

        <div className="journey-widget">

          {/* Step pills */}
          <div className="journey-pills">
            {timeline.map((t, i) => (
              <button
                key={t.year}
                className={`journey-pill ${activeStep === i ? 'jp-active' : ''}`}
                style={activeStep === i ? { background: t.color, borderColor: t.color } : {}}
                onClick={() => selectStep(i)}
              >
                <span className="jp-icon">{t.icon}</span>
                <span className="jp-year">{t.year}</span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="journey-progress-track">
            <div className="journey-progress-fill" style={{ width: `${progress}%`, background: active.color }} />
          </div>

          {/* Main display */}
          <div className="journey-display" key={activeStep}>
            <div className="journey-left" style={{ borderColor: active.color }}>
              <div className="journey-big-icon" style={{ background: active.color }}>{active.icon}</div>
              <div className="journey-year-label" style={{ color: active.color }}>{active.year}</div>
              <div className="journey-tag" style={{ background: active.color + '22', color: active.color }}>{active.tag}</div>
            </div>
            <div className="journey-right">
              <h3 className="journey-title">{active.title}</h3>
              <p className="journey-desc">{active.desc}</p>
              <div className="journey-milestone" style={{ borderColor: active.color }}>
                <span className="jm-dot" style={{ background: active.color }}>●</span>
                <span>{active.milestone}</span>
              </div>
            </div>
          </div>

          {/* Dot nav */}
          <div className="journey-dot-nav">
            <button className="jdn-arrow" onClick={() => selectStep((activeStep - 1 + timeline.length) % c)}>‹</button>
            <div className="jdn-dots">
              {timeline.map((_, i) => (
                <button
                  key={i}
                  className={`jdn-dot ${activeStep === i ? 'jdn-active' : ''}`}
                  style={activeStep === i ? { background: active.color } : {}}
                  onClick={() => selectStep(i)}
                />
              ))}
            </div>
            <button className="jdn-arrow" onClick={() => selectStep((activeStep + 1) % timeline.length)}>›</button>
          </div>

        </div>
      </section>

      {/* IMPACT */}


      {/* VALUES */}
      <section className="about-values">
        <div className="section-header">
          <div className="section-label">What Drives Us</div>
          <h2>Our Core Values</h2>
          <p>The pillars that add value to every product we manufacture.</p>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* CTA */}
      <section className="about-page-cta">
        <div className="section-label" style={{ color: 'var(--accent)' }}>Join the Journey</div>
        <h2>Be Part of a Greener Future</h2>
        <p>Whether you're a bulk buyer, a distributor, or an investor — we'd love to have you on board.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" style={{ background: '#fff', color: 'var(--green)' }} onClick={openQuote}>Get a Quote</button>
          <button className="btn-outline" style={{ borderColor: '#fff', color: '#fff' }} onClick={() => setPage('gallery')}>View Our Factory</button>
        </div>
      </section>

    </div>
  )
}