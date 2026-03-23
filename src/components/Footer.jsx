import { openContactModal } from '../utils/openContact'
import { useNavigate } from 'react-router-dom'

export default function Footer({setPage}) {
  const navigate = useNavigate()
  function goToProduct(productId) {
    setPage('products')
    setTimeout(() => {
      const el = document.getElementById(productId)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 300) // wait for products page to render
  }
  return (
    <footer id="contact">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo-footer">USHAKIRAN <span>ECOPLAST</span></div>
          <p>Reliable, high-quality plastic shrink films and waste bags. Tailored solutions, timely delivery, unmatched expertise.</p>
          <div className="footer-socials">
            {/* Facebook - Blue */}
<a href="https://www.facebook.com/people/Ushakiran-Ecoplast/61572005610667/" className="social-btn" target="_blank" rel="noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
</a>

{/* Instagram - Gradient */}
<a href="https://www.instagram.com/ushakiran_ecoplast" className="social-btn" target="_blank" rel="noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
    <defs>
      <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="20%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-grad)"/>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="url(#ig-grad)"/>
    <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
  </svg>
</a>

{/* LinkedIn - Blue */}
<a href="https://www.linkedin.com/company/ushakiran-ecoplast" className="social-btn" target="_blank" rel="noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
</a>

{/* YouTube - Red */}
<a href="https://www.youtube.com/channel/UCUzRKWUtDGSJyzmieWz3l-Q" className="social-btn" target="_blank" rel="noreferrer">
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
    <path fill="#FF0000" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
  </svg>
</a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
      <li><button onClick={() => setPage('home')} className="footer-link-btn">Home</button></li>
      <li><button onClick={() => setPage('aboutus')} className="footer-link-btn">About Us</button></li>
      <li><button onClick={() => setPage('products')} className="footer-link-btn">Our Products</button></li>
      <li><button onClick={openContactModal} className="footer-link-btn">Contact Us</button></li>
      <li><button onClick={() => setPage('gallery')} className="footer-link-btn">Gallery</button></li>
    </ul>
        </div>
        <div>
          <h4>Our Products</h4>
          <ul>
        <li><button onClick={() => {
              navigate(`/products/recycled-garbage-bags-hyderabad`)
              window.scrollTo({ top: 0 })
            }} className="footer-link-btn">Garbage Bags</button></li>
        <li><button onClick={() => {
              navigate(`/products/biomedical-waste-bags-bmwm-compliant`)
              window.scrollTo({ top: 0 })
            }} className="footer-link-btn">Bio-Hazard Bags</button></li>
        <li><button onClick={() => {
              navigate(`/products/plastic-bags-on-rolls-manufacturer`)
              window.scrollTo({ top: 0 })
            }} className="footer-link-btn">Bags on Rolls</button></li>
        <li><button onClick={() => {
              navigate(`/products/ldpe-shrink-film-manufacturer-hyderabad`)
              window.scrollTo({ top: 0 })
            }} className="footer-link-btn">Shrink Films</button></li>
        <li><button onClick={() => {
              navigate(`/products/stretch-wrap-film-pallet-wrapping`)
              window.scrollTo({ top: 0 })
            }} className="footer-link-btn">Stretch Films</button></li>
        <li><button onClick={() => {
              navigate(`/products/ldpe-sheets-manufacturer-hyderabad`)
              window.scrollTo({ top: 0 })
            }} className="footer-link-btn">LDPE Sheet</button></li>
        <li><button onClick={() => {
              navigate(`/products/ldpe-cover-industrial-packaging`)
              window.scrollTo({ top: 0 })
            }} className="footer-link-btn">LDPE Cover</button></li>
        <li><button onClick={() => {
              navigate(`/products/mulch-film-uv-resistant-agriculture`)
              window.scrollTo({ top: 0 })
            }} className="footer-link-btn">Mulch Film</button></li>
      </ul>
        </div>
        <div>
          <h4>Reach Us</h4>
          <div className="contact-item"><span>📍</span><span>Hyderabad</span></div>
          <div className="contact-item"><span>📞</span><a href="tel:+919885134991">+91 98851 34991</a></div>
          <div className="contact-item"><span>✉️</span><a href="mailto:enquiry@ushakiranecoplast.com">enquiry@ushakiranecoplast.com</a></div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2026 USHA KIRAN ECO PLAST. All Rights Reserved.</p>
      </div>
    </footer>
  )
}