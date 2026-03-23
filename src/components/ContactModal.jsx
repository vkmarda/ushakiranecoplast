// ContactModal.jsx
import { useState, useEffect } from 'react'

export default function ContactModal() {
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    function handleOpen() { setContactOpen(true) }
    window.addEventListener('open-contact-modal', handleOpen)
    return () => window.removeEventListener('open-contact-modal', handleOpen)
  }, [])

  if (!contactOpen) return null

  return (
    <div className="contact-modal-overlay" onClick={() => setContactOpen(false)}>
      <div className="contact-modal" onClick={e => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={() => setContactOpen(false)}>✕</button>
        <h3>Get in Touch</h3>
        <p>We're happy to help with orders, custom requirements, and bulk enquiries.</p>
        <div className="contact-modal-items">
          <a href="tel:+919885134991" className="contact-modal-item">
            <div className="cmi-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
            </div>
            <div className="cmi-text">
              <span className="cmi-label">Call Us</span>
              <span className="cmi-value">+91 98851 34991</span>
            </div>
          </a>
          <a href="mailto:enquiry@ushakiranecoplast.com" className="contact-modal-item">
            <div className="cmi-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="cmi-text">
              <span className="cmi-label">Email Us</span>
              <span className="cmi-value">enquiry@ushakiranecoplast.com</span>
            </div>
          </a>
        </div>
        <div className="contact-modal-footer">
          <div className="contact-modal-divider"><span>Follow us</span></div>
          <div className="contact-modal-socials">
            <a href="https://www.facebook.com/people/Ushakiran-Ecoplast/61572005610667/" className="social-btn" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ushakiran_ecoplast" className="social-btn" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <defs>
                  <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497"/>
                    <stop offset="20%" stopColor="#fd5949"/>
                    <stop offset="60%" stopColor="#d6249f"/>
                    <stop offset="90%" stopColor="#285AEB"/>
                  </radialGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="url(#ig-grad)"/>
                <circle cx="12" cy="12" r="4" fill="none" stroke="white" strokeWidth="2"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="white"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/ushakiran-ecoplast" className="social-btn" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UCUzRKWUtDGSJyzmieWz3l-Q" className="social-btn" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <path fill="#FF0000" d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58a2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}