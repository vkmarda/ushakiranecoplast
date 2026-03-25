import { useEffect, useRef, useState } from 'react'

function CountUp({ target, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{count}{suffix}</span>
}

// ─── Live KG Counter config ───────────────────────────────────────────────────
const KG_BASE = 50000000       
const KG_PER_MINUTE = 11
const START_DATE = new Date('2026-03-18T00:00:00') 

function calcKg() {
  const minutesElapsed = Math.floor((Date.now() - START_DATE.getTime()) / 60000)
  return KG_BASE + minutesElapsed * KG_PER_MINUTE
}

const stats = [
  { target: 13, suffix: '+', label: 'Years of Experience', desc: 'Serving industries across India since 2013' },
  { target: 500, suffix: '+', label: 'Active Clients', desc: 'Pan-India delivery from our Hyderabad facility' },
  { target: 90, suffix: '%', label: 'Customer Retention', desc: 'Clients who keep coming back, year after year' },
  
  { target: 50000000, suffix: '+', unit: 'KG', label: 'Of Plastic Recycled', desc: 'and saved from polluting the environment over the years' },
]
export default function About() {
  const [kgCount, setKgCount] = useState(calcKg)

  useEffect(() => {
    const interval = setInterval(() => {
      setKgCount(calcKg())
    }, 60000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div>
      <section className="about-v2" id="about">
        <div className="section-label">Why Choose Us</div>
        <h2>Trusted expertise in sustainable plastic recycling.</h2>
        <div className="about-stats">
          {stats.map((s) => (
            <div className="astat" key={s.label}>
              <div className="astat-num">
                {s.unit === 'KG' ? (
                  <CountUp target={kgCount} suffix={s.suffix} />
                  
                ) : (
                  <CountUp target={s.target} suffix={s.suffix} />
                )}
                {s.unit && <span className="unit"> {s.unit}</span>}
              </div>
              <div className="astat-label">{s.label}</div>
              <div className="astat-desc">{s.desc}</div>
            </div>
          ))}
        </div>

      <div className="about-header">
        <div className="section-label">Who We Are</div>
        <h2>Built on trust. Driven by purpose.</h2>
      </div>

      <div className="about-body">
        <div className="about-img-wrap">
          <img src="/images/team.webp" alt="UKEP manufacturing facility" loading='lazy' style={{ objectPosition: '30% center' }} />
          <div className="about-img-badge">
            <span className="aib-val">ISO</span>
            <span className="aib-lab">Certified Facility</span>
          </div>
        </div>

        <div className="about-text">
          <p className="about-lead">Founded in 2013, Ushakiran Ecoplast Pvt. Ltd. is committed to revolutionizing waste management through sustainable, high-quality plastic solutions. Over the years, we have expanded our capabilities to serve industries across India including hospitality, healthcare, construction, agriculture, and household sectors.</p>
          <p className="about-lead">From producing our first batches of eco-friendly bags to achieving large-scale manufacturing capacity, our journey has been marked by continuous innovation, customer trust, and an unwavering focus on environmental responsibility.</p>
          <div className="about-pillars">
            <div className="ap"><span className="ap-icon">🏭</span><span>In-house manufacturing in Hyderabad</span></div>
            <div className="ap"><span className="ap-icon">♻️</span><span>100% recycled raw material — circular by design</span></div>
            <div className="ap"><span className="ap-icon">🚚</span><span>Pan-India delivery</span></div>
          </div>
        </div>
      </div>

      

    </section>
          <section className="about-impact">
  <div className="section-header">
    <div className="section-label">Our Impact</div>
    <h2>Every Bag Tells a Story</h2>
    <p style={{ maxWidth: 520, margin: '0 auto' }}>
      Behind every product we ship is plastic that never reached a river, a landfill, or the ocean.
    </p>
  </div>

  <div className="impact-asymmetric">

    {/* Big card */}
    <div className="impact-big-card">
      <div className="impact-big-tag">Primary Impact</div>
      <h3>Less carbon, same quality</h3>
      <p>Recycling plastic uses significantly less energy than producing virgin plastic, reducing the carbon footprint of every order.</p>
      <div className="impact-big-line" />
      <span className="impact-big-note">Recycling · Environment · Circular Economy</span>
    </div>

    {/* Small cards grid */}
    <div className="impact-small-grid">
      {[
        {
          title: 'Keeping plastic out of waterways',
desc: `Every tonne of recycled plastic we process is a tonne that didn't flow into India's rivers, lakes or coastline. Since 2013, that has added up to thousands of tonnes diverted from the environment — one order at a time. `        },

        {
          title: 'A circular factory, not a linear one',
          desc: 'Our entire production runs on post-consumer waste — closing the loop on plastic that would otherwise have no future.',
        },
                {
          title: 'Safer disposal for hazardous waste',
          desc: 'Our bio-medical bags ensure clinical waste is contained without putting hospital workers or communities at risk.',
        },
        {
          title: 'Products that outlive their guilt',
          desc: 'A recycled bag started as waste, not as new plastic. Multiplied across millions of bags, that difference adds up.',
        },
      ].map((s, i) => (
        <div className="impact-small-card" key={i}>
          <div className="isc-dot" />
          <h4>{s.title}</h4>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>
    </div>
  )
}