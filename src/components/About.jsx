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

const stats = [
  { target: 12, suffix: '+', label: 'Years in Business', desc: 'Serving industries across India since 2013' },
  { target: 90, suffix: '%', label: 'Customer Retention', desc: 'Clients who keep coming back, year after year' },
  { target: 50, suffix: '+', label: 'Cities Served', desc: 'Pan-India delivery from our Hyderabad facility' },
  { target: 2500, suffix: ' MT', label: 'Annual Output', desc: 'Tonnes of recycled plastic processed every year' },
]

export default function About() {
  return (
    <section className="about-v2" id="about">

      {/* Top: label + heading */}
      <div className="about-header">
        <div className="section-label">Who We Are</div>
        <h2>Built on trust.<br />Driven by purpose.</h2>
      </div>

      {/* Middle: photo + text side by side */}
      <div className="about-body">
        <div className="about-img-wrap">
          <img
  src="/images/team.jpg"
  alt="UKEP manufacturing facility"
  style={{ objectPosition: '30% center' }}
/>
          <div className="about-img-badge">
            <span className="aib-val">ISO</span>
            <span className="aib-lab">Certified Facility</span>
          </div>
        </div>

        <div className="about-text">
          <p className="about-lead">
            Ushakiran Ecoplast has been manufacturing recycled plastic products
            from our Hyderabad facility since 2013 — supplying hospitals, hotels,
            corporations, and factories across India.
          </p>
          <p>
            We supply all types of garbage bags for industrial and home use  customers. When you need industrial strength clear Environment friendly Recyclable Plastic Products or a large volume of Environment friendly Recycled products for your merchandise, don’t hesitate to contact us, the wholesale Environment friendly garbage bags supplier for businesses.
          </p>
          <div className="about-pillars">
            <div className="ap">
              <span className="ap-icon">🏭</span>
              <span>In-house manufacturing in IDA Mankhal, Hyderabad</span>
            </div>
            <div className="ap">
              <span className="ap-icon">♻️</span>
              <span>100% recycled raw material — circular by design</span>
            </div>
            <div className="ap">
              <span className="ap-icon">🚚</span>
              <span>Pan-India delivery </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: stat strip */}
      <div className="about-stats">
        {stats.map((s) => (
          <div className="astat" key={s.label}>
            <div className="astat-num">
              <CountUp target={s.target} suffix={s.suffix} />
            </div>
            <div className="astat-label">{s.label}</div>
            <div className="astat-desc">{s.desc}</div>
          </div>
        ))}
      </div>

    </section>
  )
}