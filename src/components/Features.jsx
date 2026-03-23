import { useRef } from 'react'

const badges = [
  { src: '/images/badges/supports-environment.png', label: 'Supports Environment' },
  { src: '/images/badges/certified.png', label: 'Certified & Approved' },
  { src: '/images/badges/circular-economy.png', label: 'Circular Economy' },
  { src: '/images/badges/recyclable.png', label: 'Recyclable' },
  { src: '/images/badges/plastic-recycle.png', label: 'Plastic-recycle' },
]

export default function Features() {
  return (
    <section className="features-section">
      <div className="section-header">
        <div className="section-label">Our Committments</div>
        <h2></h2>
        <p>Recognized for quality, sustainability, and responsible manufacturing.</p>
      </div>
      <div className="badges-carousel-wrap">
        <div className="badges-track">
          {/* Render 4 copies for seamless infinite loop */}
          {[...Array(4)].map((_, setIdx) =>
            badges.map((b, i) => (
              <div className="badge-item" key={`${setIdx}-${i}`}>
                <img src={b.src} alt={b.label} />
                <span>{b.label}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}