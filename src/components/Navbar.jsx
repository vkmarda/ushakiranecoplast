import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar({ setPage, setContactOpen }) {

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

  return (
    <>
      <div className="topbar">
        <strong>Call:</strong>{' '}
        <a href="tel:+918919428973">+91 8919428973</a>
        &nbsp;|&nbsp;
        <strong>Email:</strong>{' '}
        <a href="mailto:enquiry@ushakiranecoplast.com">enquiry@ushakiranecoplast.com</a>
      </div>
      <nav className="site-nav">
        <Link to="/" className="logo">
          <img
            src="/images/ukep-logo.webp"
            alt="Ushakiran Ecoplast"
            className="logo-img"
            width="239"
            height="52"
          />
        </Link>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><Link to="/" className="nav-text-btn">Home</Link></li>
          <li><Link to="/aboutus" className="nav-text-btn">About Us</Link></li>
          <li><Link to="/products" className="nav-text-btn">Our Products</Link></li>
          <li><Link to="/industries" className="nav-text-btn">Industries</Link></li>
          <li><Link to="/team" className="nav-text-btn">Our Team</Link></li>
          <li><a href="https://ushakiranecoplast.com/blog" target="_blank" rel="noreferrer" className="nav-text-btn">Blog</a></li>
          <li><button className="nav-text-btn" onClick={() => setContactOpen(true)}>Contact Us</button></li>
          <li><Link to="/gallery" className="nav-text-btn">Gallery</Link></li>
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
          <Link to="/" className="nav-mobile-item">Home</Link>
          <Link to="/aboutus" className="nav-mobile-item">About Us</Link>
          <Link to="/products" className="nav-mobile-item">Our Products</Link>
          <Link to="/industries" className="nav-mobile-item">Industries</Link>
          <Link to="/team" className="nav-mobile-item">Our Team</Link>
          <a href="https://ushakiranecoplast.com/blog" target="_blank" rel="noreferrer" className="nav-mobile-item">Blog</a>
          <button className="nav-mobile-item" onClick={() => { setContactOpen(true); setMenuOpen(false) }}>Contact Us</button>
          <Link to="/gallery" className="nav-mobile-item">Gallery</Link>
        </div>
      )}

      {showSticky && (
        <div className="sticky-contact">
          <a href="tel:+918919428973" className="sticky-btn sticky-call">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Us
          </a>
          <a href="mailto:enquiry@ushakiranecoplast.com" className="sticky-btn sticky-email">
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
