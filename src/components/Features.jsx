const features = [
  { icon: 'clock', title: 'Cost-Effective', desc: 'High quality at competitive prices, ensuring affordability without compromising durability.' },
  { icon: 'shield', title: 'Sustainable Community', desc: 'Eco-friendly solutions, recycling initiatives, and responsible manufacturing for a greener future.' },
  { icon: 'layers', title: 'Fully Customizable', desc: 'Various sizes, colors, and designs to meet specific business needs with total flexibility.' },
  { icon: 'star', title: 'Premium Products', desc: 'Crafted with precision and superior materials for reliability, strength, and long-lasting performance.' },
]

const icons = {
  clock: <svg viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  shield: <svg viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  layers: <svg viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
  star: <svg viewBox="0 0 24 24" fill="none" stroke="#2d6a4f" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>,
}

export default function Features() {
  return (
    <section className="features">
      {features.map((f) => (
        <div className="feature-card" key={f.title}>
          <div className="feature-icon">{icons[f.icon]}</div>
          <h3>{f.title}</h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </section>
  )
}
