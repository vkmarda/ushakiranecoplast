const heroProducts = [
  {
    id: 'garbage-bags',
    img: '/images/garbage-bags.jpg',
    title: 'Garbage Bags & Covers',
    desc: 'Industrial & household liners in all sizes and gauges.',
    tag: 'Most Popular',
  },
  {
    id: 'bio-medical-bags',
    img: '/images/biohazard-bags.jpg',
    title: 'Bio-Medical Bags',
    desc: 'Certified colour-coded bags for clinical waste disposal.',
    tag: 'Certified',
  },
  {
    id: 'bags-on-rolls',
    img: '/images/bags-on-rolls.jpg',
    title: 'Bags on Rolls',
    desc: 'High-volume perforated roll bags for industrial dispensing.',
    tag: 'High Volume',
  },
  {
    id: 'ldpe-sheets',
    img: '/images/shrink-roll.jpg',
    title: 'LDPE Shrink Film',
    desc: 'Moisture barriers & wrapping for industry & agriculture.',
    tag: 'Industrial',
  },
]

const trustItems = [
  { val: '90%', lab: 'Customer retention' },
  { val: '12+', lab: 'Years in business' },
  { val: '50+', lab: 'Cities served' },
  { val: 'ISO', lab: 'Certified facility' },
]

export default function Hero({ setPage }) {

  function goToProduct(id) {
    setPage('products')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-badge">100% Recycled Plastic Products</div>
        <h1>Turning Waste Into <em>Products</em> That Work.</h1>
        <p className="hero-sub">
          USHAKIRAN ECOPLAST manufactures high-quality, eco-friendly plastic bags
          and packaging from recycled material for industries across India.
        </p>
        <div className="hero-btns">
          <a href="#products" className="btn-primary">Explore Products</a>
          <a href="#contact" className="btn-outline">Get a Quote</a>
        </div>
        <div className="hero-trust">
          {trustItems.map((item, i) => (
            <div key={item.val} style={{ display: 'contents' }}>
              <div className="trust-item">
                <span className="trust-val">{item.val}</span>
                <span className="trust-lab">{item.lab}</span>
              </div>
              {i < trustItems.length - 1 && <div className="trust-div" />}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-bg-img" />
        <div className="hero-caption">From waste to product</div>
        <div className="hero-products">
          {heroProducts.map((p) => (
            <div
              className="hp-card"
              key={p.title}
              onClick={() => goToProduct(p.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={p.img} alt={p.title} />
              <div className="hp-card-body">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <span className="hp-tag">{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}