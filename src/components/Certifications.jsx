const certLogos = [
  { src: '/images/certs/c1.webp', alt: 'Certification 1' },
  { src: '/images/certs/c2.webp', alt: 'Make in India' },
  { src: '/images/certs/gmp-logo.webp', alt: 'GMP' },
  { src: '/images/certs/footprint.webp', alt: 'Carbon Footprint' },
  { src: '/images/certs/fda.webp', alt: 'FDA Approved' },
  { src: '/images/certs/iso.webp', alt: 'ISO 9001:2015' },
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
            <img src={c.src} alt={c.alt} width="147" height="147" />
          </div>
        ))}
      </div>
    </section>
  )
}