import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HowItWorksPage from './pages/HowItWorksPage';
import PermittingPage from './pages/PermittingPage';
import ContactPage from './pages/ContactPage';
import ThankYouPage from './pages/ThankYouPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';

// Blog Post Pages
import UnderstandingHydrillaPage from './pages/blog/UnderstandingHydrillaPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/permitting" element={<PermittingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          
          {/* Blog Post Routes */}
          <Route path="/blog/understanding-hydrilla-most-invasive-aquatic-weed-austin-lakes" element={<UnderstandingHydrillaPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;