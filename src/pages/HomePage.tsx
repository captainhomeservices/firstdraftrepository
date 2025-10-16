import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, Shield, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Austin Lake Weed Removal | Hydrilla Control | Captain Home Services",
    "description": "Professional Austin lake weed removal and hydrilla control services. Manual aquatic vegetation removal for Lake Austin, Lake Travis, and Highland Lakes.",
    "url": "https://austinlakemanagement.com/",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Captain Home Services",
      "description": "Professional aquatic vegetation removal services specializing in manual lake weed removal, hydrilla control, and TPWD-permitted lake management solutions in Austin, Texas.",
      "telephone": "(737) 300-9033",
      "email": "captainhomeservices@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "serviceArea": [
        "Lake Austin",
        "Lake Travis", 
        "Lake LBJ",
        "Inks Lake",
        "Lake Marble Falls",
        "Lake Buchanan",
        "Lady Bird Lake"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Austin Lake Management Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Austin Hydrilla Removal",
              "description": "Complete manual hydrilla removal including root extraction for lasting results"
            },
            "priceRange": "$650-$1850"
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Eurasian Watermilfoil Removal",
              "description": "Professional removal of invasive Eurasian watermilfoil from Austin area lakes"
            },
            "priceRange": "$650-$1850"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "TPWD Permitting Services",
              "description": "Complete permitting and compliance assistance for legal aquatic vegetation removal"
            }
          }
        ]
      }
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Austin Lake Weed Removal | Hydrilla Control | Captain Home Services"
        description="Professional Austin lake weed removal and hydrilla control services. Manual aquatic vegetation removal for Lake Austin, Lake Travis, and Highland Lakes. TPWD permitted, chemical-free, eco-friendly solutions."
        keywords="Austin lake weed removal, Lake Austin hydrilla removal, aquatic vegetation removal Austin, TPWD permits, LCRA compliance, manual lake weed removal, chemical-free lake cleaning, Austin lake management, Highland Lakes weed control, Eurasian watermilfoil removal Austin"
        canonicalUrl="https://austinlakemanagement.com/"
        structuredData={homePageSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-green-100/20 to-emerald-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left space-y-8">
              <div className="space-y-6 opacity-0 animate-fadeInUp">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                  Clear Lake Weeds.
                  <span className="block mt-2 bg-gradient-to-r from-[#00B47B] to-[#004C3F] bg-clip-text text-transparent">
                    Restore Your Waterfront.
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Professional aquatic vegetation removal serving Lake Austin, Lake Travis, and the Highland Lakes. Chemical-free, TPWD-permitted solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-fadeInUp animation-delay-200">
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-[#00B47B] hover:bg-[#009966] text-white text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105"
                >
                  Get a Free Quote
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:(737)-300-9033"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 text-lg font-semibold rounded-xl transition-all duration-200 border-2 border-gray-200 hover:border-gray-300 hover:scale-105 shadow-sm"
                >
                  <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (737) 300-9033
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 opacity-0 animate-fadeInUp animation-delay-400">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#00B47B]" />
                    <span className="font-medium">TPWD Permitted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#00B47B]" />
                    <span className="font-medium">Chemical-Free</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-[#00B47B]" />
                    <span className="font-medium">Same-Day Service</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative opacity-0 animate-fadeIn animation-delay-600">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/lake weed removal pose copy.jpeg"
                  alt="Professional lake weed removal service on Lake Austin"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Trusted by Lakefront Homeowners</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">5+ Years Experience</p>
                    </div>
                    <div className="bg-gradient-to-br from-[#00B47B] to-[#004C3F] text-white rounded-lg px-4 py-2">
                      <p className="text-xs font-medium">Licensed &amp; Insured</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Overview - Moved to second position */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Precision Manual Removal</h3>
              <p className="text-gray-600">Root-deep extraction using specialized tools for long-term results</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exotic Invasive Species Removal Permits</h3>
              <p className="text-gray-600">We handle permitting and compliance with State and Local regulations including approved TPWD and LCRA
              Treatment Proposals for every job</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean and Efficient Haul-Away and Responsible Disposal</h3>
              <p className="text-gray-600">Clean removal and disposal keeps your property from being damaged by large machinery and making a mess</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Results</h3>
              <p className="text-gray-600">The beautiful, usable, clean and clear waterfront you desire</p>
            </div>
          </div>

          {/* Bridge Image under the boxes */}
          <div className="text-center">
            <img
              src="/lake weed removal pose copy.jpeg"
              alt="Austin lake weed removal experts from Captain Home Services performing manual hydrilla removal and aquatic vegetation extraction on Lake Austin using specialized tools"
              className="rounded-lg shadow-2xl mx-auto w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Problem & Solution - Third position */}
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
                src="https://static01.nyt.com/images/2023/12/10/nyregion/10Conn-River-01-wvbc/Conn-River--01-wvbc-superJumbo.jpg?quality=75&auto=webp"
                alt="Dense aquatic vegetation problem showing invasive hydrilla and watermilfoil infestation"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Lake Austin Hydrilla Problem</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                When aggressive aquatic weeds like <strong>Lake Austin hydrilla</strong> and <strong>Eurasian watermilfoil</strong> invade, they throw that delicate balance into chaotic mess. These fast-growing invasive species can quickly overwhelm native vegetation and create dense mats that make swimming, boating, and fishing nearly impossible.
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

      {/* Main Content - Moved to fourth position */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Aquatic Vegetation Removal That Works
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Are you tired of battling stubborn aquatic vegetation that chokes out your beautiful lakefront? Manual lake weed removal is the only way to ensure invasive aquatic vegetation is pulled by the roots and brings back that beauty to your lakefront you've been missing.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At <strong>Captain Home Services</strong>, we use specialized tools and equipment to remove invasive aquatic vegetation's tubers and roots, leaving minimal debris that causes rapid re-growth of lake weeds. Our method of manual <strong>aquatic vegetation removal</strong> isn't just about clearing weeds; it\'s about restoring the natural beauty and balance of your dock area and shoreline. Let our <strong>Lake Management</strong> experts take care of your dock and shoreline for you.
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
                src="https://cdn11.bigcommerce.com/s-94ve5l/images/stencil/500x659/products/2411/4162/WeedRay-1__62680.1736887802.jpg?c=2"
                alt="Professional aquatic vegetation removal tools used for manual lake weed extraction"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Austin's Premier Lake Management Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Serving the Highland Lakes with professional <strong>Austin aquatic vegetation removal</strong>, <strong>Lake Austin hydrilla control</strong>, and comprehensive <strong>Austin lake management</strong> solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lake Austin Hydrilla Removal</h3>
              <p className="text-gray-700">
                Specialized <strong>Lake Austin hydrilla removal</strong> services using manual extraction techniques. Our TPWD-permitted approach ensures complete root removal for lasting results.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Austin Eurasian Watermilfoil Control</h3>
              <p className="text-gray-700">
                Professional <strong>Austin Eurasian watermilfoil removal</strong> targeting this aggressive invasive species. Chemical-free methods protect your lake ecosystem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Highland Lakes Service Area</h3>
              <p className="text-gray-700">
                Comprehensive <strong>Austin lake weed removal</strong> serving Lake Travis, Lake LBJ, Inks Lake, Lake Marble Falls, Lake Buchanan, and Lady Bird Lake.
              </p>
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
            Contact <strong>Captain Home Services</strong> today for a free consultation and let's talk about bringing that Texas sparkle back to your lakefront. No chemicals, no heavy machinery on your property, just efficient and professional permitted and insured invasive lake weed removal.
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