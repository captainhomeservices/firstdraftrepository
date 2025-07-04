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
import UnderstandingLakeWeedsPage from './pages/blog/UnderstandingLakeWeedsPage';
import NavigatingPermittingPage from './pages/blog/NavigatingPermittingPage';
import ManualRemovalBenefitsPage from './pages/blog/ManualRemovalBenefitsPage';
import HealthyLakefrontPage from './pages/blog/HealthyLakefrontPage';
import LakeAustinHydrillaManagementPage from './pages/blog/LakeAustinHydrillaManagementPage';

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
          <Route path="/blog/understanding-lake-weeds-why-they-grow-and-how-to-manage-them" element={<UnderstandingLakeWeedsPage />} />
          <Route path="/blog/navigating-permitting-aquatic-vegetation-removal-texas" element={<NavigatingPermittingPage />} />
          <Route path="/blog/benefits-manual-aquatic-weed-removal-sustainable-approach" element={<ManualRemovalBenefitsPage />} />
          <Route path="/blog/importance-aquatic-vegetation-removal-healthy-lakefront" element={<HealthyLakefrontPage />} />
          <Route path="/blog/lake-austin-hydrilla-management-methods" element={<LakeAustinHydrillaManagementPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;