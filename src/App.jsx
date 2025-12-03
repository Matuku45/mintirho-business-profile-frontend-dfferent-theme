import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import CompanyProfile from './pages/CompanyProfile';
import Management from './pages/Management';
import ProductsServices from './pages/ProductsServices';
import Projects from './pages/Projects';
import Equipment from './pages/Equipment';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App-container"> {/* A container div is needed if you want a class name */}
        
        {/* Header */}
        <Header /> 
        
        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/management" element={<Management />} />
            <Route path="/products-services" element={<ProductsServices />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div> 
    </Router>
  );
}

export default App;