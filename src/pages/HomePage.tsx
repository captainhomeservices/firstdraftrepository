import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, Shield, Phone, FileText, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const HomePage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Lake Austin Hydrilla Removal | We Pull Lake Weeds By The Roots",
    "description": "Professional Lake Austin hydrilla removal services. We pull lake weeds by the roots and install benthic barriers for long-term results. TPWD permitted.",
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
        title="Lake Austin Hydrilla Removal | We Pull Lake Weeds By The Roots"
        description="Professional Lake Austin hydrilla removal. We pull lake weeds by the roots and install benthic barriers for long-term results. TPWD permitted, chemical-free."
        keywords="Lake Austin hydrilla removal, Lake Austin weeds, Austin lake weed removal, hydrilla control, manual lake weed removal, benthic barriers, TPWD permits"
        canonicalUrl="https://austinlakemanagement.com/"
        structuredData={homePageSchema}
      />

      {/* SECTION 1: HERO */}
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

        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-4 opacity-0 animate-fadeInUp">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl">
                Lake Austin Hydrilla Removal &amp; Lake Weed Management
              </h1>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#00B47B] drop-shadow-2xl leading-tight tracking-tight">
                We Pull Lake Weeds By The Roots
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4 opacity-0 animate-fadeInUp animation-delay-200">
                <a
                  href="tel:(737)-300-9033"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/90 hover:bg-white text-gray-900 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  <Phone className="mr-2 w-5 h-5 flex-shrink-0" />
                  Call Us
                </a>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="group inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#00B47B] hover:bg-[#009966] text-white text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 shadow-2xl hover:scale-105"
                >
                  Get a Weed Management Plan
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="pt-4 opacity-0 animate-fadeInUp animation-delay-400">
                <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-4 sm:px-6 py-3 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
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
                    <span className="font-semibold text-white text-sm sm:text-base whitespace-nowrap">Root Removal</span>
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

      {/* SECTION 2: BEFORE / AFTER RESULTS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Real Lake Austin Hydrilla Removal Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We pull hydrilla by the roots and remove the biomass from the lake.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <figure className="relative m-0 rounded-xl shadow-2xl overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <img
                  src="/booth-hydrilla-bad.webp"
                  alt="Lake Austin dock surrounded by dense hydrilla infestation before professional removal"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
              <figcaption className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                Before
              </figcaption>
            </figure>
            <figure className="relative m-0 rounded-xl shadow-2xl overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <img
                  src="/dock copy.webp"
                  alt="Lake Austin dock with clear water after professional hydrilla removal by Captain Home Services"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="600"
                />
              </div>
              <figcaption className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                After
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY ROOT REMOVAL MATTERS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Root Removal Matters
            </h2>
          </div>

          <div className="space-y-6 text-lg text-gray-700">
            <p>
              Most hydrilla cutting services only trim the plant canopy. This provides temporary relief, but the root systems and tubers remain in the lake bed.
            </p>
            <p>
              Because the roots are still there, hydrilla grows back quickly - often within weeks. You end up paying for the same service over and over.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-green-900 font-semibold">
                Our method pulls hydrilla by the roots and removes it from the lake to reduce regrowth. Combined with <Link to="/benthic-barriers" onClick={scrollToTop} className="text-green-700 underline font-semibold">benthic barrier installation</Link> (when applicable), this provides lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW THE PROCESS WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How the Process Works
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Lake Assessment</h3>
              <p className="text-sm text-gray-600">Evaluate the extent of hydrilla growth</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Root Removal</h3>
              <p className="text-sm text-gray-600">Pull weeds by roots with minimal fragmentation</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Biomass Removal</h3>
              <p className="text-sm text-gray-600">Remove all vegetation from the lake</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Benthic Barriers</h3>
              <p className="text-sm text-gray-600">Install barriers to prevent regrowth (when applicable)</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
              <h3 className="font-semibold text-gray-900 mb-2">Management Plan</h3>
              <p className="text-sm text-gray-600">Long-term maintenance strategy</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/how-it-works"
              onClick={scrollToTop}
              className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More About Our Process
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/benthic-barriers"
              onClick={scrollToTop}
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              About Benthic Barriers
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/permitting"
              onClick={scrollToTop}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Permitting Information
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE LAKE AUSTIN HYDRILLA PROBLEM (SEO) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Lake Austin Hydrilla Problem
            </h2>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Lake Austin faces a serious challenge from invasive aquatic vegetation. <strong>Hydrilla</strong> and <strong>Eurasian watermilfoil</strong> have spread throughout the lake, creating problems for property owners and recreational users.
            </p>
            <p>
              These invasive species form dense weed mats that can grow up to an inch per day in the right conditions. When left unchecked, Lake Austin weeds block boat access, make swimming impossible, and reduce property values.
            </p>
            <p>
              Professional Austin lake weed removal addresses these problems at their source. Rather than simply cutting the visible growth, our approach targets the root systems that allow hydrilla to return season after season.
            </p>

            <div className="w-full rounded-xl shadow-xl overflow-hidden my-8">
              <img
                src="/echelon.webp"
                alt="Clear Lake Austin waterfront after professional hydrilla removal"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>

            <p>
              If you're dealing with Lake Austin hydrilla at your waterfront property, understanding your options is the first step. We work with homeowners throughout the Highland Lakes region to develop effective, long-term weed management plans.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Get a Lake Weed Management Plan
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us and we will evaluate your hydrilla problem and recommend the best long-term management solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(737)-300-9033"
              className="inline-flex items-center justify-center bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (737) 300-9033
            </a>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center bg-white/20 hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              <FileText className="mr-2 w-5 h-5" />
              Submit Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
