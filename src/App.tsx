import { useState } from 'react'
import RootLayout from './layout';
import Home from './page';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from './pages/about/page';
import ServicesPage from './pages/services/page';
import ContactPage from './pages/contact/page';
import PortfolioPage from './pages/portfolio/page';


export default function App() {
  return (
    <Router>
      <Routes>
      <Route
        path="/"
        element={
              <RootLayout />
        }
      >
        <Route 
          index 
          element={<Home />} 
        />
        <Route path="/about" element={<AboutPage  />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<div>404 Not Found</div>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Route>
      </Routes>
    </Router>
  );
}