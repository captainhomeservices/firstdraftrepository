import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle, Phone, ArrowRight, AlertTriangle, Settings, Anchor, Leaf, Trash2 } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const BenthicBarriersPage = () => {
  const benthicBarriersSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Benthic Barrier Installation and Maintenance",
    "name": "Benthic Barriers & Lake Mats Service",
    "description": "Professional benthic barrier installation, maintenance, and removal service for Austin lakes including LakeMat and Lake Bottom Blanket products",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Captain Home Services",
      "areaServed": {
        "@type": "City",
        "name": "Austin"
      }
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Lake Austin"
      },
      {
        "@type": "Place",
        "name": "Lake Travis"
      },
      {
        "@type": "Place",
        "name": "Highland Lakes"
      }
    ],
    "offers": {
      "@type": "Offer",
      "description": "Complete benthic barrier service including assessment, installation, seasonal maintenance, and removal"
    }
  };

  return (
    <>
      <SEOHead
        title="Benthic Barriers & Lake Mats - Installation & Maintenance | Captain Home Services"
        description="Professional benthic barrier service for Austin lakes including LakeMat & Lake Bottom Blanket. Complete assessment, installation, maintenance, and removal. Instant clear swim and boat areas."
        keywords="benthic barriers, lake mats, lake bottom blankets, LakeMat, aquatic weed prevention, hydrilla control, Austin lake barriers"
        canonicalUrl="https://austinlakemanagement.com/benthic-barriers"
        structuredData={benthicBarriersSchema}
      />

      <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 min-h-screen">
        {/* Hero */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lake weed removal tools.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-emerald-900/95"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-400/30 rounded-full px-6 py-2 mb-8">
                <Shield className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-emerald-300 font-semibold text-sm">Authorized Dealer - LakeMat & Lake Bottom Blanket</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Benthic Barrier Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed max-w-3xl mx-auto">
                We <Link to="/how-it-works" className="text-emerald-300 hover:text-emerald-200 font-semibold underline">remove your lake weeds manually</Link>, then install professional benthic barriers that block remaining growth and prevent future weeds—delivering instant, clear swim and boat areas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl"
                >
                  Get Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:(737)-300-9033"
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (737) 300-9033
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* What Are Benthic Barriers */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/benthic barrier pic.jpeg"
                  alt="Benthic barrier blocking sunlight on lake bottom"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  What Are Benthic Barriers?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Benthic barriers are heavy-duty, gas-permeable mats placed on the lake bottom. They block sunlight using the "snowshoe" principle—distributing weight evenly to create a firm, stable surface. Without light, aquatic weeds cannot grow.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  As authorized dealers for LakeMat and Lake Bottom Blanket, we use commercial-grade nonwoven polypropylene fabric designed specifically for aquatic environments. The material is gas-permeable, environmentally safe, and creates instant clear water.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  We can cover any size area—from small dock zones to expansive waterfront properties.
                </p>
                <p className="text-lg text-gray-600">
                  Learn about our complete process on our <Link to="/how-it-works" className="text-green-600 hover:text-green-700 font-semibold underline">How It Works</Link> page, or check our <Link to="/blog/lake-weed-removal-faq" className="text-purple-600 hover:text-purple-700 font-semibold underline">FAQ</Link> for common questions. All installations are <Link to="/permitting" className="text-blue-600 hover:text-blue-700 font-semibold underline">fully permitted</Link>.
                </p>
              </div>
            </div>
          </div>

          {/* Our Method */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Method
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete service from assessment to removal
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Assess</h3>
                <p className="text-gray-600">
                  Measure your waterfront, evaluate bottom conditions, and create a custom plan.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Remove Vegetation</h3>
                <p className="text-gray-600">
                  If necessary, manually remove most existing weeds to prepare the lake bottom.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Anchor className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Install Barriers</h3>
                <p className="text-gray-600">
                  Secure barriers using weighted systems. Instant clear swim and boat areas.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Maintain</h3>
                <p className="text-gray-600">
                  Clean and monitor barriers to ensure optimal performance throughout the season.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Trash2 className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Remove</h3>
                <p className="text-gray-600">
                  Remove barriers after they've killed the plants and before they become part of the lake ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Best Timing */}
          <div className="mb-20">
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-8 shadow-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-8 w-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Best Time for Installation</h3>
                  <p className="text-gray-700 mb-4">
                    We recommend installing benthic barriers <strong>after weed removal</strong> or <strong>in early spring</strong> before large infestations take over (ideally when water temperatures are below 60°F).
                  </p>

                  <div className="bg-white rounded-lg p-6 border border-amber-200">
                    <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                      <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                      Don't Cover Heavy Vegetation
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Installing barriers over dense weed growth causes serious problems. Decomposing vegetation produces excessive gas that cannot escape fast enough, resulting in:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>Bubbling and ballooning from gas buildup</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>Barrier displacement and instability</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">•</span>
                        <span>Foul odors and oxygen depletion</span>
                      </li>
                    </ul>
                    <p className="mt-4 text-gray-900 font-semibold">
                      This is why we <Link to="/how-it-works" className="text-green-600 hover:text-green-700 underline">remove most vegetation first</Link>. The barriers then handle remaining growth and prevent future infestations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src="/lake bottom blanket.jpg"
                  alt="Lake bottom blanket installation"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Use Benthic Barriers?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Instant Clear Water</h4>
                      <p className="text-gray-600">Immediate results—swim and boat the day they're installed.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Chemical-Free</h4>
                      <p className="text-gray-600">Environmentally safe for fish, wildlife, and swimmers.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Long-Term Prevention</h4>
                      <p className="text-gray-600">Blocks hydrilla tubers and fragments from establishing new growth.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Any Size Area</h4>
                      <p className="text-gray-600">From small personal docks to expansive waterfront estates.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ideal Areas */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Perfect For
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 flex-shrink-0" />
                      <span className="text-lg">Swim Areas</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 flex-shrink-0" />
                      <span className="text-lg">Boat Docking Areas</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 flex-shrink-0" />
                      <span className="text-lg">Beach Fronts</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 flex-shrink-0" />
                      <span className="text-lg">Boat Launches</span>
                    </div>
                    <div className="flex items-center text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 flex-shrink-0" />
                      <span className="text-lg">Marinas & Boat Ramps</span>
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[300px] md:min-h-0">
                  <img
                    src="/lakemat.jpg"
                    alt="LakeMat product showing how benthic barriers work"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Extended Reading */}
          <div className="mb-20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Learn More
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/blog"
                  className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg"
                >
                  <span className="underline">Read Our Blog</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <span className="text-gray-400 hidden sm:block">•</span>
                <Link
                  to="/permitting"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  <span className="underline">Permitting Info</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <span className="text-gray-400 hidden sm:block">•</span>
                <a
                  href="https://humanwildlifeecology.wordpress.com/2018/04/12/hydrilla-verticillata-management-strategy-section-62/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold text-lg"
                >
                  <span className="underline">Hydrilla Research</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready for Clear Water?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today for a professional consultation and personalized solution for your waterfront property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(737)-300-9033"
                className="inline-flex items-center justify-center bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 shadow-lg"
              >
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenthicBarriersPage;
