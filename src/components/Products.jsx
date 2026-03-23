import { useNavigate } from 'react-router-dom'

const products = [
  {
    id: 'garbage-bags',
    slug: 'recycled-garbage-bags-hyderabad',
    title: 'Garbage Bags',
    desc: 'Durable, eco-friendly garbage bags for home and industrial use in customizable sizes.',
    img: '/images/garbage-bags-latest.PNG',
  },
  {
    id: 'bio-medical-bags',
    slug: 'biomedical-waste-bags-bmwm-compliant',
    title: 'Bio-Hazard Bags',
    desc: 'Certified bio-medical waste collection bags meeting strict safety standards.',
    img: '/images/biohazard-bags.jpeg',
  },
  {
    id: 'bags-on-rolls',
    slug: 'plastic-bags-on-rolls-manufacturer',
    title: 'Bag on Rolls',
    desc: 'Perforated continuous-roll bags for high-volume retail and industrial dispensing.',
    img: '/images/bags-on-rolls.jpeg',
  },
  {
    id: 'shrink-film',
    slug: 'ldpe-shrink-film-manufacturer-hyderabad',
    title: 'Shrink Film',
    desc: 'High-quality shrink films for secure and professional product packaging.',
    img: '/images/shrink-film.jpeg',
  },
  {
    id: 'stretch-film',
    slug: 'stretch-wrap-film-pallet-wrapping',
    title: 'Stretch Film',
    desc: 'Highly stretchable LDPE film used to secure, bundle, and protect palletized goods during transport and storage.',
    img: '/images/stretch-film.jpeg',
  },
  {
    id: 'ldpe-sheets',
    slug: 'ldpe-sheets-manufacturer-hyderabad',
    title: 'LDPE Sheets',
    desc: 'Superior moisture resistance, flexibility and durability for construction and agriculture.',
    img: '/images/ldpe-sheets.PNG',
  },
  {
    id: 'ldpe-cover',
    slug: 'ldpe-cover-industrial-packaging',
    title: 'LDPE Cover',
    desc: 'Tough, flexible and reliable food-grade & industrial-grade covers for food processing and packaging industries.',
    img: '/images/ldpe-cover.jpeg',
  },
  {
    id: 'mulch-film',
    slug: 'mulch-film-uv-resistant-agriculture',
    title: 'Mulch Film',
    desc: 'Durable, UV-resistant crop covers for superior plant protection and enhanced yields.',
    img: '/images/mulch-film.jpg',
  },
]

export default function Products({ setPage }) {
  const navigate = useNavigate()

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
            key={p.id}
            onClick={() => {
              navigate(`/products/${p.slug}`)
              window.scrollTo({ top: 0 })
            }}
            style={{ cursor: 'pointer' }}
          >
            <div className="product-img-real">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
      {/* <div className="products-cta">
        <button
          className="btn-primary"
          onClick={() => {
            navigate('/products')
            window.scrollTo({ top: 0 })
          }}
        >
          View All Products →
        </button>
      </div> */}
    </section>
  )
}