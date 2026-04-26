import { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Products from './components/Products'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import Team from './components/Team'
import ProductsPage from './components/ProductsPage'
import ProductDetail from './components/ProductDetail'
import IndustriesIndex from './components/IndustriesIndex'
import IndustryPage from './components/IndustryPage'
import QuoteWidget from './components/QuoteWidget'
import FactoryGallery from './components/FactoryGallery'
import AboutPage from './components/Aboutpage'
import GarbageBagStory from './components/testimonials/Garbagebagstory'
import ContactModal from './components/ContactModal'
import IndustriesSection from './components/Industriessection'
import GarbageBagsIndex from './components/GarbageBagsIndex'
import GarbageBagSubPage from './components/GarbageBagSubPage'

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How can I get in touch for inquiries?', acceptedAnswer: { '@type': 'Answer', text: 'Reach us at enquiry@ushakiranecoplast.com or call +91 8919428973. Our team responds within 24-48 hours.' } },
    { '@type': 'Question', name: 'What information do I need to provide for a quote?', acceptedAnswer: { '@type': 'Answer', text: 'Please include the product type, quantity, size, material preferences, and any specific requirements.' } },
    { '@type': 'Question', name: 'Do you offer customized packaging solutions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes — from design to material selection, we tailor every order to your exact specifications.' } },
    { '@type': 'Question', name: 'What is the typical response time?', acceptedAnswer: { '@type': 'Answer', text: 'We respond within 24-48 business hours. For urgent matters, call us directly.' } },
    { '@type': 'Question', name: 'Where are you located and can I visit?', acceptedAnswer: { '@type': 'Answer', text: 'IDA Mankhal, Maheshwaram, Hyderabad (T.S). Visits welcome — schedule an appointment first.' } },
  ],
}

function HomePage({ setPage, openQuote }) {
  const { pathname } = useLocation()
  const canonical = pathname.endsWith('/') ? pathname : pathname + '/'
  return (
    <>
      <Helmet>
        <title>Plastic Bags Manufacturer Hyderabad | Ushakiran Ecoplast</title>
        <meta name="description" content="ISO certified manufacturer of recycled LDPE garbage bags, bio-medical bags, shrink film, LDPE sheets and mulch film. Based in Hyderabad, supplying pan-India." />
        <link rel="canonical" href={`https://ushakiranecoplast.com${canonical}`} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(homeFaqSchema)}</script>
      </Helmet>
      <Hero setPage={setPage} openQuote={openQuote} />
      <About />
      <Products setPage={setPage} />
      <IndustriesSection />
      {/* <Features /> */}
      <Testimonials />
      <Certifications />
      <FAQ />
    </>
  )
}

function AppInner() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const navigate = useNavigate()

  function setPage(p) {
    if (p === 'home') navigate('/')
    else navigate(`/${p}`)
    if (typeof window !== 'undefined') window.scrollTo({ top: 0 })
  }

  const openQuote = () => setQuoteOpen(true)

  return (
    <>
      <Navbar setPage={setPage} setContactOpen={setContactOpen} />
      <Routes>
        {/* Core pages */}
        <Route path="/"         element={<HomePage setPage={setPage} openQuote={openQuote} />} />
        <Route path="/aboutus"  element={<AboutPage setPage={setPage} openQuote={openQuote} />} />
        <Route path="/gallery"  element={<FactoryGallery setPage={setPage} openQuote={openQuote} />} />
        <Route path="/team"     element={<Team setPage={setPage} />} />

        {/* Product routes */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/garbage-bags" element={<GarbageBagsIndex openQuote={openQuote} />} />
        <Route path="/products/garbage-bags/:subSlug" element={<GarbageBagSubPage openQuote={openQuote} />} />
        <Route path="/products/:productSlug" element={<ProductDetail openQuote={openQuote} />} />

        {/* Industry routes */}
        <Route path="/industries" element={<IndustriesIndex />} />
        <Route path="/industries/:industrySlug" element={<IndustryPage openQuote={openQuote} />} />

        {/* Content pages */}
        <Route path="/why-garbage-bags" element={<GarbageBagStory setPage={setPage} openQuote={openQuote} />} />
      </Routes>
      <QuoteWidget isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <Footer openQuote={openQuote} setPage={setPage} setContactOpen={setContactOpen} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  )
}

export default function App() {
  return <AppInner />
}