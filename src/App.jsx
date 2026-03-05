import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Products from './components/Products'
import Sustainability from './components/Sustainability'
import FAQ from './components/FAQ'
import Testimonials from './components/Testimonials'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import Team from './components/Team'
import ProductsPage from './components/ProductsPage'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Navbar page={page} setPage={setPage} />
      {page === 'home' && (
        <>
          <Hero setPage={setPage} />
          <About />
          <Products setPage={setPage}/>
          <Features />
          <Sustainability />
          <FAQ />
          <Testimonials />
          <Certifications />
          <Footer />
        </>
      )}
      {page === 'team' && <Team setPage={setPage} />}
      {page === 'products' && <ProductsPage setPage={setPage} />}
    </>
  )
}