const certs = ['ISO Certified', 'FDA Approved', 'Eco Certified', 'Green Approved', 'Quality Standard']

export default function Certifications() {
  return (
    <section className="certs">
      <h3>Approved and Certified By</h3>
      <div className="cert-logos">
        {certs.map((c) => (
          <div className="cert-badge" key={c}>{c}</div>
        ))}
      </div>
    </section>
  )
}