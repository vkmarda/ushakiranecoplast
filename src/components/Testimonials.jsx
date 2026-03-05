const testimonials = [
  { text: 'USHAKIRAN ECOPLAST has been our trusted partner for eco-friendly packaging. Their commitment to quality, sustainability, and timely delivery is unmatched.', name: 'Rajesh Kumar', role: 'Managing Director', initial: 'R' },
  { text: 'Their eco-friendly packaging solutions are truly a game-changer. Their focus on sustainability aligns perfectly with our company values.', name: 'Ananya Gupta', role: 'CEO, EcoGreen Ventures', initial: 'A' },
  { text: 'We have been using their products for years. Durable, reliable, and environmentally responsible — a vendor we can trust.', name: 'Sunil Verma', role: 'Operations Manager, Fresh Farms', initial: 'S' },
  { text: 'Professional and dedicated team. Their LDPE bags and custom solutions have exceeded our expectations completely.', name: 'Deepti Saxena', role: 'Founder, Clean City Initiative', initial: 'D' },
]

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-header">
        <div className="section-label">What Our Clients Say</div>
        <h2>Trusted by Businesses Across India</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <div className="testi" key={t.name}>
            <div className="stars">★★★★★</div>
            <p>{t.text}</p>
            <div className="testi-author">
              <div className="testi-avatar">{t.initial}</div>
              <div>
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}