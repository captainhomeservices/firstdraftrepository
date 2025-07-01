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
      <section className="relative bg-gradient-to-br from-blue-900 to-teal-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://www.austinmonitor.com/wp-content/uploads/2024/07/red_bud_isle_ii_by_mkocaoglu_d9blj0t-fullview-620x365.jpg")',
            backgroundBlendMode: 'multiply'
          }}
        >
          <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-green-600 drop-shadow-lg">Austin Hydrilla Removal</span><br />
                <span className="text-green-600 drop-shadow-lg">We Clear Out Lake Weeds Fast</span><br />
              </h1>
              <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto leading-relaxed text-green-600 font-semibold drop-shadow-lg">
                Serving Lake Austin, Lake LBJ and the rest of the Highland Lakes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
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
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
                >
                  Call or Text (737) 300-9033
                </a>
              </div>
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
                Are you tired of battling stubborn aquatic vegetation that chokes out your beautiful lakefront? Manual lake weed removal is the only way to ensure invasive aquatic vegetation is pulled by the roots and brings nack that beauty to your lakefront you've been missing.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong>Captain Home Services</strong>, we use specialized tools and equipment to remove invasive aqautic vegetation's tubers and roots, leaving minimal debris that causes rapid re-growth of lake weeds. Our method of manual <strong> aquatic vegetation removal</strong> isn't just about clearing weeds; it's about restoring the natural beauty and balance of your dock area and shoreline. Let our <strong>Lake Management</strong> experts take care of your dock and shoreline for you.
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
                When aggressive aquatic weeds like <strong>Lake Austin hydrilla</strong> and <strong>Eurasian watermilfoil</strong> invade, they throw that delicate balance into chaotic mess. These fas