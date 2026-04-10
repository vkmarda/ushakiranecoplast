import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
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

function HomePage({ setPage, openQuote }) {
  return (
    <>
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
        <Route path="/products/:productSlug" element={<ProductDetail openQuote={openQuote} />} />

        {/* Industry routes */}
        <Route path="/industries" element={<IndustriesIndex />} />
        <Route path="/industries/:industrySlug" element={<IndustryPage openQuote={openQuote} />} />

        {/* Content pages */}
        <Route path="/why-garbage-bags" element={<GarbageBagStory setPage={setPage} openQuote={openQuote} />} />
      </Routes>
      <QuoteWidget isOpen={quoteOpen} onClose={() => setQuoteOpen(false)} />
      <Footer openQuote={openQuote} setPage={setPage} setContactOpen={setContactOpen} />
      <ContactModal />
    </>
  )
}

export default function App() {
  return <AppInner />
}