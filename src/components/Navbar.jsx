import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { openContactModal } from '../utils/openContact'

export default function Navbar({ page, setPage }) {

  const [menuOpen, setMenuOpen] = useState(false)
  const [showSticky, setShowSticky] = useState(false)
  const location = useLocation()



  
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleScroll() {
      setShowSticky(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function goHome(hash) {
    setPage('home')
    setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  function goPage(p) {
    setPage(p)
  }

  return (
    <>
      <div className="topbar">
        <strong>Call:</strong>{' '}
        <a href="tel:+919885134991">+91 98851 34991</a>
        &nbsp;|&nbsp;
        <strong>Email:</strong>{' '}
        <a href="mailto:sales@ushakiranecoplast.com">enquiry@ushakiranecoplast.com</a>
      </div>
      <nav>
        <button onClick={() => goHome('#home')} className="logo" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <img src="/images/ukep-logo.png" alt="Ushakiran Ecoplast" className="logo-img" />
        </button>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><button onClick={() => goHome('#home')} className="nav-text-btn">Home</button></li>
          <li><button onClick={() => goPage('aboutus')} className="nav-text-btn">About Us</button></li>
          <li><button onClick={() => goPage('products')} className="nav-text-btn">Our Products</button></li>
          <li><button onClick={() => goPage('industries')} className="nav-text-btn">Industries</button></li>
          <li><button onClick={() => goPage('team')} className="nav-text-btn">Our Team</button></li>
          <li><button onClick={openContactModal} className="nav-text-btn">Contact Us</button></li>
          <li><button onClick={() => goPage('gallery')} className="nav-text-btn">Gallery</button></li>
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
          <button onClick={() => goPage('aboutus')} className="nav-mobile-item">About Us</button>
          <button onClick={() => goPage('products')} className="nav-mobile-item">Our Products</button>
          <button onClick={() => goPage('industries')} className="nav-mobile-item">Industries</button>
          <button onClick={() => goPage('team')} className="nav-mobile-item">Our Team</button>
          <button onClick={openContactModal} className="nav-mobile-item">Contact Us</button>
          <button onClick={() => goPage('gallery')} className="nav-mobile-item">Gallery</button>
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