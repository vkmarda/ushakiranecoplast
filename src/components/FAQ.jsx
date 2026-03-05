import { useState } from 'react'

const faqs = [
  { q: 'How can I get in touch for inquiries?', a: 'Reach us at sales@ushakiranecoplast.com or call +91 98851 34991. Our team responds within 24-48 hours.' },
  { q: 'What information do I need to provide for a quote?', a: 'Please include the product type, quantity, size, material preferences, and any specific requirements.' },
  { q: 'Do you offer customized packaging solutions?', a: 'Yes — from design to material selection, we tailor every order to your exact specifications.' },
  { q: 'What is the typical response time?', a: 'We respond within 24-48 business hours. For urgent matters, call us directly.' },
  { q: 'Where are you located and can I visit?', a: 'IDA Mankhal, Maheshwaram, Hyderabad (T.S). Visits welcome — schedule an appointment first.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((item, i) => (
        <div className="faq-item" key={i}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            {item.q}
            <span className={open === i ? 'faq-icon open' : 'faq-icon'}>+</span>
          </button>
          {open === i && <p className="faq-answer">{item.a}</p>}
        </div>
      ))}
    </section>
  )
}