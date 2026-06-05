import { useState } from 'react'
import { Link } from 'react-router-dom'

const products = [
  {
    id: 'garbage-bags',
    slug: 'recycled-garbage-bags-hyderabad',
    title: 'Garbage Bags',
    desc: 'Recycled LDPE garbage bags in custom sizes for hotels, hospitals, factories and institutions.',
    img: '/images/garbage-bags-latest.webp',
    category: 'Bags',
  },
  {
    id: 'bio-medical-bags',
    slug: 'biomedical-waste-bags-bmwm-compliant',
    title: 'Bio-Hazard Bags',
    desc: 'PCB approved, BMWM 2016 compliant colour-coded bags for biomedical waste management.',
    img: '/images/biohazard-bags.webp',
    category: 'Bags',
  },
  {
    id: 'bags-on-rolls',
    slug: 'plastic-bags-on-rolls-manufacturer',
    title: 'Bags on Rolls',
    desc: 'Perforated roll bags for housekeeping trolleys, produce sections and retail dispensers.',
    img: '/images/bags-on-rolls.webp',
    category: 'Bags',
  },
  {
    id: 'shrink-film',
    slug: 'ldpe-shrink-film-manufacturer-hyderabad',
    title: 'Shrink Film',
    desc: 'High-clarity LDPE shrink film for product bundling and tamper-evident packaging.',
    img: '/images/shrink-film.webp',
    category: 'Films',
  },
  {
    id: 'stretch-film',
    slug: 'stretch-wrap-film-pallet-wrapping',
    title: 'Stretch Film',
    desc: 'High-stretch LDPE film for pallet wrapping, load securing and transport protection.',
    img: '/images/stretch-film.webp',
    category: 'Films',
  },
  {
    id: 'ldpe-sheets',
    slug: 'ldpe-sheets-manufacturer-hyderabad',
    title: 'LDPE Sheets',
    desc: 'Moisture-resistant LDPE sheets for construction, agriculture and industrial protection.',
    img: '/images/ldpe-sheets.webp',
    category: 'Industrial',
  },
  {
    id: 'ldpe-cover',
    slug: 'ldpe-cover-industrial-packaging',
    title: 'LDPE Cover',
    desc: 'Flexible LDPE covers for machinery, equipment and industrial packaging applications.',
    img: '/images/ldpe-cover.webp',
    category: 'Industrial',
  },
  {
    id: 'mulch-film',
    slug: 'mulch-film-uv-resistant-agriculture',
    title: 'Mulch Film',
    desc: 'UV-stabilised mulch film for soil retention, weed suppression and improved crop yields.',
    img: '/images/mulch-film.webp',
    category: 'Industrial',
  },
]

const TABS = ['All', 'Bags', 'Films', 'Industrial']

export default function Products({ setPage }) {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section className="products" id="products">
      <div className="section-header">
        <div className="section-label">OUR PRODUCTS</div>
        <h2>Explore Our Range</h2>
        <p>ISO certified recycled LDPE products manufactured in Hyderabad for every industry</p>
      </div>

      <div className="products-toggle">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`products-toggle-btn${active === tab ? ' active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filtered.map(p => (
          <Link
            className="product-card"
            key={p.id}
            to={`/products/${p.slug}/`}
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <div className="product-img-real">
              <img src={p.img} alt={p.title} loading="lazy" />
            </div>
            <div className="product-card-body">
              <span className="product-card-tag">{p.category}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span className="product-card-link">View Details →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
