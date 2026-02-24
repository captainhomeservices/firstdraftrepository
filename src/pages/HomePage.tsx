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

      {/* Hero Section with Video Background */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://zyslabgmutwpcyabzcag.supabase.co/storage/v1/object/public/videos/1o%20second%20weed%20removal.mp4" type="video/mp4" />
          </video>

          {/* Gradient Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-start justify-center pt-8 sm:pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-3 sm:space-y-4 opacity-0 animate-fadeInUp px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
                Long-Term Hydrilla Removal.
                <span className="block mt-1 text-[#00B47B] drop-shadow-2xl">
                  Restore Your Waterfront.
                </span>
              </h1>
           

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 sm:pt-3 opacity-0 animate-fadeInUp animation-delay-200 px-4">
                <a
                  href="tel:(737)-300-9033"
                  className="inline-flex items-center justify-center px-5 sm:px-7 py-3 sm:py-4 bg-white/50 hover:bg-white/70 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl backdrop-blur-sm whitespace-nowrap"
                >
                  <svg className="mr-2 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="group inline-flex items-center justify-center px-5 sm:px-7 py-3 sm:py-4 bg-[#00B47B]/50 hover:bg-[#009966]/70 text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-emerald-500/50 hover:scale-105 backdrop-blur-sm"
                >
                  Book a Consultation
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 sm:pt-3 opacity-0 animate-fadeInUp animation-delay-400 px-4">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-3 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#00B47B] flex-shrink-0" />
                    <span className="font-semibold text-white text-sm sm:text-base whitespace-nowrap">TPWD Permitted</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#00B47B] flex-shrink-0" />
                    <span className="font-semibold text-white text-sm sm:text-base whitespace-nowrap">Chemical-Free</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-[#00B47B] flex-shrink-0" />
                    <span className="font-semibold text-white text-sm sm:text-base whitespace-nowrap">Same-Day Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Overview - Moved to second position */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Long-Term Solution
            </h2>
            <p className="text-xl text-gray-600">
              Pulling Hydrilla by the roots with minimal fragmentation + benthic barrier installation for lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Leaf className="h-10 w-10 sm:h-12 sm:w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Root Removal</h3>
              <p className="text-sm sm:text-base text-gray-600">Pulling by the roots with minimal fragmentation prevents rapid regrowth</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Benthic Barriers</h3>
              <p className="text-sm sm:text-base text-gray-600">Long-term prevention through professional barrier installation and maintenance</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">TPWD Permitted</h3>
              <p className="text-sm sm:text-base text-gray-600">Full compliance with state regulations and proper disposal</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-blue-900 font-semibold mb-2">Working with TPWD's Integrated Pest Management Plan</p>
                <p className="text-blue-800">
                  Captain Home Services works in alignment with <a href="https://tpwd.texas.gov/landwater/water/aquatic-invasives/aquatic_invasive_plants.phtml" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 font-semibold">Texas Parks and Wildlife Department's integrated pest management approach</a> to help homeowners effectively manage hydrilla infestations while protecting lake ecosystems.
                </p>
              </div>
            </div>
          </div>

          {/* Bridge Image under the boxes */}
          <div className="text-center">
            <img
              src="/dock.jpg"
              alt="Beautiful Lake Austin waterfront with clean, clear water after professional aquatic weed removal by Captain Home Services"
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
              When Invasive Species Take Over
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Your waterfront isn't just a patch of water; it's a living, breathing part of your property, a sanctuary for native plants, a recreational oasis for you and your family, and part of a thriving large mouth bass population we aim to protect and enjoy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <img
                src="/Hydrilla-patch.jpeg.JPG"
                alt="Hydrilla patch being manually removed from Lake Austin — invasive aquatic weed pulled by roots by Captain Home Services crew"
                className="rounded-lg shadow-xl w-full h-72 md:h-96 object-cover object-top"
              />
            </div>
            <div className="px-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">The Hydrilla Problem</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">
                <strong>Lake Austin hydrilla</strong> and <strong>Eurasian watermilfoil</strong> create dense mats that make swimming and boating impossible. Our team pulls these invasive species by the roots, then installs <Link to="/benthic-barriers" onClick={scrollToTop} className="text-emerald-600 hover:text-emerald-700 font-semibold underline">benthic barriers</Link> for long-term prevention.
              </p>
              <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
                All our work is fully <Link to="/permitting" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 font-semibold underline">TPWD permitted and LCRA compliant</Link> for legal peace of mind.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/how-it-works"
                  onClick={scrollToTop}
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Learn Our Process
                </Link>
                <Link
                  to="/benthic-barriers"
                  onClick={scrollToTop}
                  className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  Benthic Barriers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Moved to fourth position */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="px-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Complete Long-Term Solution
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-4 leading-relaxed">
                Tired of battling stubborn hydrilla that returns every season? <strong>Captain Home Services</strong> offers a complete solution: we <Link to="/how-it-works" onClick={scrollToTop} className="text-green-600 hover:text-green-700 font-semibold underline">pull weeds by the roots</Link> with minimal fragmentation, then install <Link to="/benthic-barriers" onClick={scrollToTop} className="text-emerald-600 hover:text-emerald-700 font-semibold underline">benthic barriers</Link> to prevent regrowth.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Learn more about our <Link to="/permitting" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 font-semibold underline">permitting process</Link>, check out our <Link to="/blog/lake-weed-removal-faq" onClick={scrollToTop} className="text-purple-600 hover:text-purple-700 font-semibold underline">comprehensive FAQ</Link>, and read our <Link to="/blog" onClick={scrollToTop} className="text-teal-600 hover:text-teal-700 font-semibold underline">educational blog</Link> for lake management tips.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Pulling by the roots with minimal fragmentation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Benthic barrier installation for long-term prevention</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Chemical-free, eco-friendly approach</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">No heavy machinery damaging your property</p>
                </div>
              </div>
            </div>
            <div className="relative px-4">
              <img
                src="/Hydrilla-load.jpeg.JPG"
                alt="Dump trailer overflowing with manually extracted hydrilla removed from Lake Austin by Captain Home Services — full load of invasive aquatic weed hauled off after professional lake weed removal"
                className="rounded-lg shadow-2xl w-full h-80 md:h-[500px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Serving the Highland Lakes
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
              Professional <strong>Lake Austin hydrilla removal</strong> and <strong>benthic barrier installation</strong> for Lake Travis, Lake Austin, Lake LBJ, and all Highland Lakes.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready for Long-Term Results?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto px-4">
            Pulling by the roots + benthic barriers = lasting hydrilla control. No chemicals, no property damage, just professional lake management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a
              href="tel:(737)-300-9033"
              className="inline-flex items-center justify-center bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 transform hover:scale-105 shadow-lg"
            >
              <svg className="mr-2 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;