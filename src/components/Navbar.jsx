import { useState, useEffect} from 'react'


export default function Navbar({ page, setPage }) {
  
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSticky, setShowSticky] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShowSticky(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function goHome(hash) {
    setPage('home')
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  function goPage(p) {
    setPage(p)
    setMenuOpen(false)
  }

  return (
    <>
      <div className="topbar">
        <strong>Call:</strong>{' '}
        <a href="tel:+919885134991">+91 98851 34991</a>
        &nbsp;|&nbsp;
        <strong>Email:</strong>{' '}
        <a href="mailto:sales@ushakiranecoplast.com">sales@ushakiranecoplast.com</a>
      </div>
      <nav>
        <button onClick={() => goHome('#home')} className="logo" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <div className="logo-icon">
            <svg viewBox="0 0 24 24">
              <path d="M17 8C8 10 5.9 16.17 3.82 19.9L5.71 21l1-2.3A4.49 4.49 0 0 0 8 19c8 0 10-6 10-6a7 7 0 0 0 1 4c1.8-2 2-4 2-6s-1-4-4-9z"/>
            </svg>
          </div>
          <div className="logo-text">
            USHAKIRAN ECOPLAST
            <span>Eco-Friendly Solutions</span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><button onClick={() => goHome('#home')} className="nav-text-btn">Home</button></li>
          <li><button onClick={() => goHome('#about')} className="nav-text-btn">About Us</button></li>
          <li><button onClick={() => goPage('products')} className="nav-text-btn">Our Products</button></li>
          <li><button onClick={() => goPage('team')} className="nav-text-btn">Our Team</button></li>
          <li><button onClick={() => goHome('#contact')} className="nav-text-btn">Contact</button></li>
        </ul>
        

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          <button onClick={() => goHome('#home')} className="nav-mobile-item">Home</button>
          <button onClick={() => goHome('#about')} className="nav-mobile-item">About Us</button>
          <button onClick={() => goPage('products')} className="nav-mobile-item">Our Products</button>
          <button onClick={() => goPage('team')} className="nav-mobile-item">Our Team</button>
          <button onClick={() => goHome('#contact')} className="nav-mobile-item">Contact</button>
        </div>
      )}

      {showSticky && (
        <div className="sticky-contact">
          <a href="tel:+919885134991" className="sticky-btn sticky-call">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Us
          </a>
          <a href="mailto:sales@ushakiranecoplast.com" className="sticky-btn sticky-email">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Email Us
          </a>
        </div>
      )}
    </>
  )
}

