const products = [
  {
    id: 'garbage-bags',
    title: 'Garbage Bags',
    desc: 'Durable, eco-friendly garbage bags for home and industrial use in multiple sizes.',
    img: '/images/garbage-bags.jpg',
  },
  {
    id: 'bio-medical-bags',
    title: 'Bio-Hazard Bags',
    desc: 'Certified bio-medical waste collection bags meeting strict safety standards.',
    img: '/images/biohazard-bags.jpg',
  },
  {
    id: 'bags-on-rolls',
    title: 'Bags on Rolls',
    desc: 'Perforated continuous-roll bags for high-volume retail and industrial dispensing.',
    img: '/images/bags-on-rolls.jpg',
  },
  {
    id: 'ldpe-sheets',
    title: 'Shrink Film',
    desc: 'High-quality LDPE shrink films for secure and professional product packaging.',
    img: '/images/shrink-roll.jpg',
  },
]

export default function Products({ setPage }) {
  function goToProduct(id) {
    setPage('products')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section className="products" id="products">
      <div className="section-header">
        <div className="section-label">OUR PRODUCTS</div>
        <h2>100% Premium Products</h2>
        <p>Reliable, high-quality plastic products tailored to your needs</p>
      </div>
      <div className="products-grid">
        {products.map((p) => (
          <div
            className="product-card"
            key={p.title}
            onClick={() => goToProduct(p.id)}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-img-real">
              <img src={p.img} alt={p.title} />
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
      <div className="products-cta">
        <a href="#contact" className="btn-primary">Get a Quote</a>
      </div>
    </section>
  )
}