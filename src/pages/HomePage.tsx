import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, Shield, ClipboardList } from 'lucide-react';
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
      "description": "Professional aquatic vegetation removal services specializing in manual lake weed removal, hydrilla root extraction, custom management plans, and TPWD-permitted lake management solutions in Austin, Texas.",
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
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Austin Lake Weed Removal | Hydrilla Control | Captain Home Services"
        description="Professional Austin lake weed removal and hydrilla control. We pull weeds by the root and create custom multi-year management plans for lasting results. TPWD permitted, chemical-free."
        keywords="Austin lake weed removal, Lake Austin hydrilla removal, aquatic vegetation removal Austin, TPWD permits, LCRA compliance, manual lake weed removal, chemical-free lake cleaning, Austin lake management, Highland Lakes weed control, custom lake management plan"
        canonicalUrl="https://austinlakemanagement.com/"
        structuredData={homePageSchema}
      />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        </div>

        <div className="relative h-full flex items-start justify-center pt-8 sm:pt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-3 sm:space-y-4 opacity-0 animate-fadeInUp px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
                Hydrilla Pulled by the Root.
                <span className="block mt-1 text-[#00B47B] drop-shadow-2xl">
                  Long-Term Results.
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
                    <span className="font-semibold text-white text-sm sm:text-base whitespace-nowrap">Custom Management Plans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* How We Work - Core 3 pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              How We Eliminate Lake Weeds
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every property is different. We build a custom plan around your specific conditions, weed species, and long-term goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10">
            <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
              <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Root Extraction</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We always pull weeds by the root with minimal fragmentation — no cutting, no chemicals, no shortcuts.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
              <ClipboardList className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Management Plan</h3>
              <p className="text-gray-600 text-sm leading-relaxed">We assess your property, weed species, and growth factors, then build a long-term eradication strategy tailored to your waterfront.</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
              <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Benthic Barriers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">On select properties where conditions allow, we install lake bottom barriers to block regrowth and extend results.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/how-it-works"
              onClick={scrollToTop}
              className="inline-flex items-center text-green-700 hover:text-green-800 font-semibold underline underline-offset-4"
            >
              See our full process
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Real Results on Lake Austin</h2>
            <p className="text-gray-600 max-w-xl mx-auto">The same property, before and after our team got to work.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <figure className="m-0">
              <img
                src="/booth-hydrilla-bad.webp"
                alt="Lake Austin boathouse surrounded by dense hydrilla infestation covering the water surface — invasive aquatic weeds blocking waterfront access before professional removal"
                className="rounded-lg shadow-2xl w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-center"
                loading="lazy"
                width="1170"
                height="1560"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-2 font-medium">Before: Hydrilla covering the waterfront</figcaption>
            </figure>
            <figure className="m-0">
              <img
                src="/booth-clear.webp"
                alt="Clear, weed-free water in front of a Lake Austin boathouse after professional hydrilla removal by Captain Home Services — same location restored to clean, open water"
                className="rounded-lg shadow-2xl w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-center"
                loading="lazy"
                width="1170"
                height="1560"
              />
              <figcaption className="text-center text-sm text-gray-500 mt-2 font-medium">After: Restored to clean, open water</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Trailer Image Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-3">The Proof is in the Trailer</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              If it's not on the trailer, it's still in your lake.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
              We pull every root, load every haul, and leave your waterfront cleaner than we found it. Call us to remove yours today.
            </p>
            <a
              href="tel:(737)-300-9033"
              className="inline-flex items-center justify-center px-7 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 shadow-md text-base"
            >
              <svg className="mr-2 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us to Remove Yours Today
            </a>
          </div>
          <figure className="m-0">
            <img
              src="/Hydrilla-load.jpeg.JPG"
              alt="Trailer loaded with hydrilla pulled from a Lake Austin waterfront by Captain Home Services"
              className="rounded-2xl shadow-2xl w-full h-72 sm:h-80 md:h-[28rem] object-cover object-center"
              loading="lazy"
            />
            <figcaption className="text-center text-sm text-gray-500 mt-3 font-medium">A full day's haul — roots and all</figcaption>
          </figure>
        </div>
      </section>

      {/* TPWD Notice + Links */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-10 rounded-r-lg">
            <div className="flex items-start">
              <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-blue-900 font-semibold mb-1">Aligned with TPWD's Integrated Pest Management Approach</p>
                <p className="text-blue-800 text-sm leading-relaxed">
                  All work is fully permitted and compliant with{' '}
                  <a href="https://tpwd.texas.gov/landwater/water/aquatic-invasives/aquatic_invasive_plants.phtml" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-900 font-semibold">Texas Parks and Wildlife Department</a>{' '}
                  and LCRA regulations.{' '}
                  <Link to="/permitting" onClick={scrollToTop} className="underline hover:text-blue-900 font-semibold">Learn about permitting.</Link>
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <Link
              to="/how-it-works"
              onClick={scrollToTop}
              className="block p-5 bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl transition-colors duration-200"
            >
              <p className="font-bold text-gray-900 mb-1">How It Works</p>
              <p className="text-sm text-gray-600">Our step-by-step process and management strategy</p>
            </Link>
            <Link
              to="/blog/lake-weed-removal-faq"
              onClick={scrollToTop}
              className="block p-5 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-colors duration-200"
            >
              <p className="font-bold text-gray-900 mb-1">FAQ</p>
              <p className="text-sm text-gray-600">Common questions about lake weed removal</p>
            </Link>
            <Link
              to="/benthic-barriers"
              onClick={scrollToTop}
              className="block p-5 bg-gray-50 hover:bg-emerald-50 border border-gray-200 hover:border-emerald-300 rounded-xl transition-colors duration-200"
            >
              <p className="font-bold text-gray-900 mb-1">Benthic Barriers</p>
              <p className="text-sm text-gray-600">When and how we use lake bottom barriers</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Serving the Highland Lakes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Professional lake weed removal and custom management plans for Lake Austin, Lake Travis, Lake LBJ, and all Highland Lakes.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Reclaim Your Waterfront?
          </h2>
          <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto px-4 text-white/90">
            We start with root extraction and build a plan designed to keep your lake clear for the long haul — no chemicals, no heavy machinery.
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
              className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg"
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
