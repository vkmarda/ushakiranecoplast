const items = [
  { icon: '🌿', label: 'Supports Environment' },
  { icon: '✅', label: 'Certified & Approved' },
  { icon: '♻️', label: 'Circular Economy' },
  { icon: '🔄', label: 'Recyclable Products' },
  { icon: '🚫', label: 'Plastic-Recycle Focus' },
]

export default function Sustainability() {
  return (
    <section className="sustainability">
      <div className="sust-header">
        <div className="section-label">Towards a Sustainable Future</div>
        <h2>Our Eco Commitments</h2>
      </div>
      {items.map((item) => (
        <div className="sust-item" key={item.label}>
          <div className="icon">{item.icon}</div>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  )
}