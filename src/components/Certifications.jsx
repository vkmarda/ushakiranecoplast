const certLogos = [
  { src: '/images/certs/c1.png', alt: 'Certification 1' },
  { src: '/images/certs/c2.png', alt: 'Make in India' },
  { src: '/images/certs/gmp-logo.png', alt: 'GMP' },
  { src: '/images/certs/footprint.png', alt: 'Carbon Footprint' },
  { src: '/images/certs/fda.png', alt: 'FDA Approved' },
  { src: '/images/certs/iso.png', alt: 'ISO 9001:2015' },
]

export default function Certifications() {
  return (
    <section className="certs">
      <div className="section-header">
        <div className="section-label">Approved By</div>
        <h2>Our Certifications</h2>
        <p>Every product meets the highest regulatory and quality standards.</p>
      </div>
      <div className="cert-logos-grid">
        {certLogos.map((c, i) => (
          <div className="cert-logo-item" key={i}>
            <img src={c.src} alt={c.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}