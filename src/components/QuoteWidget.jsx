import { useState } from 'react'

const products = ['Garbage Bags', 'Bio-Medical Bags', 'Bags on Rolls', 'LDPE Sheets & Film', 'Other']

export default function QuoteWidget({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', phone: '', email: '', product: '', quantity: '', message: ''
  })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleClose() {
    setSubmitted(false)
    setForm({ name: '', company: '', phone: '', email: '', product: '', quantity: '', message: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="qw-overlay" onClick={handleClose}>
      <div className="qw-panel" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="qw-header">
          <div>
            <div className="qw-label">Free & No Obligation</div>
            <h3 className="qw-title">Get a Quote</h3>
          </div>
          <button className="qw-close" onClick={handleClose}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {submitted ? (
          <div className="qw-success">
            <div className="qw-success-icon">✓</div>
            <h4>Thank you, {form.name}!</h4>
            <p>We've received your enquiry and will get back to you within 24 hours.</p>
            <button className="btn-primary" onClick={handleClose}>Done</button>
          </div>
        ) : (
          <form className="qw-form" onSubmit={handleSubmit}>
            <div className="qw-row">
              <div className="qw-field">
                <label>Your Name *</label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required />
              </div>
              <div className="qw-field">
                <label>Company</label>
                <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
              </div>
            </div>
            <div className="qw-row">
              <div className="qw-field">
                <label>Phone *</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className="qw-field">
                <label>Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              </div>
            </div>
            <div className="qw-row">
              <div className="qw-field">
                <label>Product *</label>
                <select name="product" value={form.product} onChange={handleChange} required>
                  <option value="">Select product</option>
                  {products.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className="qw-field">
                <label>Quantity</label>
                <input name="quantity" value={form.quantity} onChange={handleChange} placeholder="e.g. 500 kg / month" />
              </div>
            </div>
            <div className="qw-field">
              <label>Additional Requirements</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Size, colour, packaging, delivery location..." rows={3} />
            </div>
            <button type="submit" className="btn-primary qw-submit">Send Enquiry →</button>
          </form>
        )}
      </div>
    </div>
  )
}