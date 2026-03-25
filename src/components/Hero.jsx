import { useNavigate } from 'react-router-dom'

const heroProducts = [
  {
    id: 'garbage-bags',
    img: '/images/garbage-bags.webp',
    title: 'Garbage Bags & Covers',
    desc: 'Industrial & household liners in all sizes and gauges.',
    tag: 'Most Popular',
  },
  {
    id: 'bio-medical-bags',
    img: '/images/biohazard-bags.webp',
    title: 'Bio-Medical Bags',
    desc: 'Certified colour-coded bags for clinical waste disposal.',
    tag: 'Certified',
  },
  {
    id: 'bags-on-rolls',
    img: '/images/bags-on-rolls.webp',
    title: 'Bags on Rolls',
    desc: 'High-volume perforated roll bags for industrial dispensing.',
    tag: 'High Volume',
  },
  {
    id: 'ldpe-sheets',
    img: '/images/shrink-roll.webp',
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

export default function Hero({ setPage, openQuote }) {
  const navigate = useNavigate()
  function goToProduct(id) {
    setPage('products')
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-badge">100% Recycled & Recyclable Plastic Products</div>
        <h1>Turning Waste into <em>Products</em> Of Use.</h1>
        <p className="hero-sub">
          USHAKIRAN ECOPLAST manufactures high-quality, eco-friendly plastic bags
          and packaging material from recycled material for industries across India.
        </p>
        <div className="hero-btns">
          <button
          className="btn-primary"
          onClick={() => {
            navigate('/products')
            window.scrollTo({ top: 0 })
          }}
        >
          Explore Products →
        </button>
          <button className="btn-outline" onClick={openQuote}>Get a Quote</button>
        </div>
         
      </div>
      <div className="hero-right">
        <img
  src="/images/hero-products-lineup.webp"
  alt="UKEP Product Range"
  className="hero-lineup-img"
  loading="eager"
  fetchPriority="high"
  width="1195"
  height="896"
/>
      </div>

    </section>
  )
}