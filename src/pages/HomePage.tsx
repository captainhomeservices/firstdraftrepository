import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, Shield, Users } from 'lucide-react';

const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-teal-600 text-white py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white drop-shadow-lg">Austin Lake Weed Removal</span><br />
              <span className="text-white drop-shadow-lg">We Clear Out Lake Weeds Fast</span><br />
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-white font-medium drop-shadow-lg">
              Serving Lake Austin, Lake LBJ and the rest of the Highland Lakes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
              >
                Get A Quote
              </Link>
              <Link
                to="/how-it-works"
                onClick={scrollToTop}
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 border border-white border-opacity-30"
              >
                How It Works
              </Link>
              <a
                href="tel:(737)-300-9033"
                className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
              >
                Call or Text (737) 300-9033
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Aquatic Vegetation Removal That Works
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Are you tired of battling stubborn aquatic vegetation that chokes out your beautiful lake or pond? Thinking about dousing that precious water with harsh chemicals, hoping for a quick fix? Manual lake weed removal is the only way to ensure invasive aquatic vegetation is pulled by the roots and allows your dock and shoreline a chance to be beautiful again.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong>Captain Home Services</strong>, we use specialized tools and equipment to remove tubers and roots, leaving minimal debris that causes rapid re-growth of lake weeds. Our method of manual <strong>Austin aquatic vegetation removal</strong> isn't just about clearing weeds; it's about restoring the natural beauty and balance of your dock area and shoreline. Let our <strong>Lake Management</strong> experts take care of your dock and shoreline for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Immediate, visible results with minimal environmental impact</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Complete root removal prevents rapid regrowth</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Chemical-free approach protects your family and ecosystem</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://static01.nyt.com/images/2023/12/10/nyregion/10Conn-River-01-wvbc/Conn-River--01-wvbc-superJumbo.jpg?quality=75&auto=webp"
                alt="Family enjoying clear lake water"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              When Invasive Species Take Over
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your waterfront isn't just a patch of water; it's a living, breathing part of your property, a sanctuary for native plants, a recreational oasis for you and your family, and part of a thriving large mouth bass population we aim to protect and enjoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://parks.traviscountytx.gov/files/images/loop-360/hero.jpg"
                alt="Dense aquatic vegetation problem"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Lake Austin Hydrilla Problem</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When aggressive aquatic weeds like <strong>Lake Austin hydrilla</strong> and <strong>Eurasian watermilfoil</strong> invade, they throw that delicate balance into chaotic mess. These fast-growing intruders can turn your serene beach into an itchy, algae festering, impenetrable jungle.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our seasoned team at <strong>Captain Home Services</strong> is ready to tackle any lake weed removal challenge, big or small. We're experts in getting your water back to its healthy, vibrant condition, ensuring your slice of Texas paradise remains just that – paradise.
              </p>
              <Link
                to="/how-it-works"
                onClick={scrollToTop}
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Learn Our Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Can Do For You
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive aquatic vegetation control with the precision and care your waterfront deserves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision Manual Removal</h3>
              <p className="text-gray-600">Root-deep extraction using specialized tools for long-term results</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exotic Invasive Species Removal Permits</h3>
              <p className="text-gray-600">We handle permitting and compliance with State and Local regulations including approved TPWD and LCRA Treatment Proposals for every job</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean and Efficient Haul-Away and Responsible Disposal</h3>
              <p className="text-gray-600">No-mess removal and disposal keeps your property from being damaged by large machinery and making a mess</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">Chemical-free solutions that protect your family and environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Reclaim Your Waterfront?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contact <strong>Captain Home Services</strong> today for a free consultation and let's talk about bringing that Texas sparkle back to your lake or pond. No chemicals, no heavy machinery on your property, just efficient and professional permitted and insured invasive lake weed removal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              Contact Us Today
            </Link>
            <Link
              to="/pricing"
              onClick={scrollToTop}
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-teal-500"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;