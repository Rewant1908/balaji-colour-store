import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Brands from './components/Brands.jsx'
import Services from './components/Services.jsx'
import PaintExperience from './components/PaintExperience.jsx'
import Gallery from './components/Gallery.jsx'
import WhyChoose from './components/WhyChoose.jsx'
import Testimonials from './components/Testimonials.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark overflow-x-hidden">
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <PaintExperience />
      <Gallery />
      <WhyChoose />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}