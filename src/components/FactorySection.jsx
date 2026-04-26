import { useEffect, useRef } from 'react'
import './FactorySection.css'

export default function FactorySection({ imageSrc, imageAlt, heading, body }) {
  const imgRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Disable on touch/mobile devices
    if (window.matchMedia('(hover: none)').matches) return

    const img = imgRef.current
    const section = sectionRef.current
    if (!img || !section) return

    let inView = false

    const observer = new IntersectionObserver(
      ([entry]) => { inView = entry.isIntersecting },
      { threshold: 0 }
    )
    observer.observe(section)

    const onScroll = () => {
      if (!inView) return
      const rect = section.getBoundingClientRect()
      const sectionCenter = rect.top + rect.height / 2
      const viewportCenter = window.innerHeight / 2
      const raw = (sectionCenter - viewportCenter) * 0.12
      const clamped = Math.max(-25, Math.min(25, raw))
      img.style.transform = `translateY(${clamped}px)`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <section className="factory-section" ref={sectionRef}>
      <div className="factory-img-col">
        <div className="factory-img-wrap">
          <img
            ref={imgRef}
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="factory-img"
          />
        </div>
      </div>
      <div className="factory-text-col">
        <div className="factory-label">Inside Our Hyderabad Facility</div>
        <h2 className="factory-heading">{heading}</h2>
        <p className="factory-body">{body}</p>
        <div className="factory-trust">
          ISO 9001:2015 Certified · In operation since 2013 · 5 Cr+ KG Recycled
        </div>
      </div>
    </section>
  )
}
