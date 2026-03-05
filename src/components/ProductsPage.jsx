import { useState } from 'react'

const products = [
  {
    id: 'garbage-bags',
    name: 'Garbage Bags',
    tagline: 'Industrial & Household Waste Management',
    img: '/images/garbage-bags.jpg',
    tag: 'Most Popular',
    tagColor: '#2d6a4f',
    description:
      'Our recycled garbage bags are manufactured from 100% post-consumer plastic waste, offering a durable and eco-friendly solution for waste collection across households, hotels, airports, railways, and facility management companies.',
    specs: [
      { label: 'Material', value: '100% Recycled LDPE' },
      { label: 'Sizes', value: '19×21" to 32×42"' },
      { label: 'Colours', value: 'Black, Grey, Green, Custom' },
      { label: 'Packaging', value: 'Roll / Flat Pack / Bulk' },
      { label: 'Thickness', value: '30 – 120 micron' },
      { label: 'Certifications', value: 'ISO, PCB Compliant' },
    ],
    customers: ['Hotels & Resorts', 'Airports & Railways', 'MNCs', 'Facility Management', 'Households', 'Restaurants'],
  },
  {
    id: 'bio-medical-bags',
    name: 'Bio-Medical Bags',
    tagline: 'Certified Clinical Waste Disposal',
    img: '/images/biohazard-bags.jpg',
    tag: 'Certified',
    tagColor: '#b5451b',
    description:
      'Colour-coded bio-medical waste bags manufactured to strict PCB and CPCB norms for safe segregation and disposal of infectious, hazardous, and clinical waste. Available in all standard colours as per bio-medical waste management rules.',
    specs: [
      { label: 'Material', value: 'Virgin / Recycled LDPE' },
      { label: 'Colours', value: 'Yellow, Red, Blue, Black, White' },
      { label: 'Sizes', value: '19×21" to 32×42"' },
      { label: 'Compliance', value: 'BMWM Rules 2016' },
      { label: 'Thickness', value: '50 – 100 micron' },
      { label: 'Certifications', value: 'ISO, GMP, PCB Approved' },
    ],
    customers: ['Hospitals', 'Pharma Companies', 'Laboratories', 'Clinics', 'Diagnostic Centres'],
  },
  {
    id: 'bags-on-rolls',
    name: 'Bags on Rolls',
    tagline: 'High-Volume Dispensing Solution',
    img: '/images/bags-on-rolls.jpg',
    tag: 'High Volume',
    tagColor: '#1a6b9a',
    description:
      'Perforated continuous-roll bags designed for high-volume dispensing in retail, industrial, and household environments. Easy to tear, consistent in size, and available in custom prints and dimensions to suit your exact requirements.',
    specs: [
      { label: 'Material', value: '100% Recycled LDPE' },
      { label: 'Roll Length', value: '100 – 500 bags per roll' },
      { label: 'Sizes', value: '8×12" to 24×32"' },
      { label: 'Colours', value: 'Natural, Black, Custom' },
      { label: 'Thickness', value: '20 – 60 micron' },
      { label: 'Custom Print', value: 'Available on request' },
    ],
    customers: ['Supermarkets', 'Retail Chains', 'MNCs', 'Households', 'Restaurants'],
  },
  {
    id: 'ldpe-sheets',
    name: 'LDPE Sheets & Film',
    tagline: 'Industrial Moisture Barriers & Wrapping',
    img: '/images/shrink-roll.jpg',
    tag: 'Industrial',
    tagColor: '#5a3e8a',
    description:
      'High-quality LDPE sheets and shrink films for construction, agriculture, road construction, and electronics industries. Provides superior moisture resistance, flexibility, and durability for demanding industrial applications.',
    specs: [
      { label: 'Material', value: 'Recycled / Virgin LDPE' },
      { label: 'Width', value: '12" to 120"' },
      { label: 'Thickness', value: '25 – 300 micron' },
      { label: 'Colours', value: 'Black, Natural, Custom' },
      { label: 'Form', value: 'Sheet / Roll / Tube' },
      { label: 'Applications', value: 'DPC, Mulching, Wrapping' },
    ],
    customers: ['Construction Companies', 'Road Construction', 'Agriculture', 'Electronics', 'Packaging Industry'],
  },
]

function ProductSection({ product, index }) {
  const isEven = index % 2 === 0

  return (
    <div className="pps-section" id={product.id}>
      <div className={`pps-inner ${isEven ? '' : 'pps-reverse'}`}>

        {/* Image */}
        <div className="pps-img-wrap">
          <img src={product.img} alt={product.name} />
          <span className="pps-tag" style={{ background: product.tagColor }}>{product.tag}</span>
        </div>

        {/* Details */}
        <div className="pps-details">
          <div className="section-label">{product.tagline}</div>
          <h2>{product.name}</h2>
          <p className="pps-desc">{product.description}</p>

          {/* Specs */}
          <div className="pps-specs">
            {product.specs.map(s => (
              <div className="pps-spec" key={s.label}>
                <span className="pps-spec-label">{s.label}</span>
                <span className="pps-spec-value">{s.value}</span>
              </div>
            ))}
          </div>

          {/* Customers */}
          <div className="pps-customers">
            {product.customers.map(c => (
              <span className="pps-customer-tag" key={c}>✓ {c}</span>
            ))}
          </div>

          <a href="mailto:sales@ushakiranecoplast.com" className="btn-primary pps-cta">
            Get a Quote →
          </a>
        </div>

      </div>
    </div>
  )
}

export default function ProductsPage({ setPage }) {
  return (
    <div className="products-page">

      {/* Hero */}
      <div className="pp-hero">
        <div className="pp-hero-content">
          <div className="section-label">What We Make</div>
          <h1>Our Products</h1>
          <p>100% recycled plastic products — built to specification, delivered pan-India.</p>
          <button onClick={() => setPage('home')} className="btn-outline">← Back to Home</button>
        </div>
      </div>

      {/* Quick jump nav */}
      <div className="pps-nav">
        {products.map(p => (
          <a
            key={p.id}
            href={`#${p.id}`}
            className="pps-nav-item"
            onClick={e => {
              e.preventDefault()
              document.getElementById(p.id)?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            {p.name}
          </a>
        ))}
      </div>

      {/* Product sections */}
      {products.map((p, i) => (
        <ProductSection key={p.id} product={p} index={i} />
      ))}

      {/* Footer */}
      <footer id="contact">
        <div className="footer-bottom" style={{ padding: '28px 60px', borderTop: '1px solid rgba(255,255,255,.1)', background: 'var(--dark)', color: 'rgba(255,255,255,.6)', textAlign: 'center', fontSize: '12.5px' }}>
          <p>Copyright 2024 USHA KIRAN ECO PLAST. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  )
}