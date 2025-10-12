import React from 'react'
import { Routes, Route } from "react-router-dom";
import HeroSection from './components/HeroSection.jsx'
// import Navbar from './components/Navbar.jsx'
import CompanyInfo from './components/CompanyInfo.jsx'
import ProductInSlide from './components/ProductInSlide.jsx'
import QuerySection from './components/QuerySection.jsx'
import Footer from './components/Footer.jsx'
import ProductPage from './pages/Products.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Careers from './pages/Carrers.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <HeroSection />
          {/* <Navbar /> */}
          <CompanyInfo />
          <ProductInSlide />
          <QuerySection />
          <Footer />
        </>
      }/>
       {/* Other Pages */}
      <Route path="/about us" element={<AboutUs />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/contact us" element={<ContactUs />} />
      <Route path="/careers" element={<Careers />} />
    </Routes>
  )
}

export default App