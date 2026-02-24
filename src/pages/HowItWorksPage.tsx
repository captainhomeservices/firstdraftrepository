import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Scissors, CheckCircle, Shield, ClipboardList, Waves, Sun, Wind } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const HowItWorksPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const howItWorksSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How Captain Home Services Removes Lake Weeds Permanently",
    "description": "Custom lake weed management plans built around each property — root extraction, site assessment, benthic barriers where applicable, and year-long eradication strategy.",
    "totalTime": "P1Y",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Property Assessment",
        "text": "We evaluate weed species, infestation extent, water depth, light penetration, sediment type, and other site-specific growth factors."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Custom Management Plan",
        "text": "We build a year-long eradication strategy tailored to your property's unique conditions, species, and homeowner goals."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Root Extraction",
        "text": "We pull all invasive vegetation by the root with minimal fragmentation — no cutting, no chemicals."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Benthic Barriers (Where Applicable)",
        "text": "On select properties where conditions are right, we install lake bottom barriers to block sunlight and suppress regrowth."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "name": "Ongoing Monitoring & Maintenance",
        "text": "We return on a schedule to monitor growth, maintain barriers, and adapt the plan as seasonal conditions change."
      }
    ]
  };

  return (
    <>
      <SEOHead
        title="How Lake Weed Removal Works | Custom Management Plans | Captain Home Services"
        description="Captain Home Services builds custom year-long lake weed management plans for each property. We pull hydrilla by the root, assess growth factors, and install benthic barriers where conditions allow. TPWD permitted."
        keywords="lake weed removal Austin, hydrilla management plan, custom aquatic weed control, benthic barriers Lake Austin, root extraction hydrilla, TPWD permitted weed removal, Lake Austin weed management"
        canonicalUrl="https://austinlakemanagement.com/how-it-works"
        structuredData={howItWorksSchema}
      />
      <div className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-gradient-to-r from-green-700 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Custom Management Plans for Every Waterfront
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              We pull weeds by the root, assess your property's unique conditions, and build a year-long strategy to eradicate invasive lake weeds for good.
            </p>
          </div>
        </section>

        {/* Core message */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">No Two Waterfronts Are the Same</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hydrilla growth is driven by light penetration, water depth, sediment conditions, seasonal temperature, and more. A plan that works for one property may not work for another. That's why we start every job with a thorough assessment before recommending any solution.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <Sun className="h-8 w-8 text-amber-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Light & Depth</h3>
                <p className="text-gray-600 text-sm">Hydrilla thrives in shallow, clear water where sunlight reaches the bottom. We factor water clarity and depth into every plan.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <Waves className="h-8 w-8 text-blue-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Sediment & Root Systems</h3>
                <p className="text-gray-600 text-sm">Soft sediment allows hydrilla tubers to persist for years. We assess root depth and sediment conditions to ensure full extraction.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <Wind className="h-8 w-8 text-teal-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Seasonal Growth Cycles</h3>
                <p className="text-gray-600 text-sm">Weed growth accelerates in warm months. Your management plan schedules treatments around seasonal growth patterns for maximum effectiveness.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <Target className="h-8 w-8 text-red-500 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Species Identification</h3>
                <p className="text-gray-600 text-sm">Hydrilla and Eurasian watermilfoil behave differently. Correct identification determines the right removal method and follow-up strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-step process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>

            <div className="space-y-8">
              <div className="flex gap-5 items-start">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">1. Property Assessment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We visit your waterfront and evaluate weed species, infestation coverage, water depth, light penetration, sediment type, and any site-specific conditions that affect how weeds grow and spread. This shapes everything that follows.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">2. Custom Management Plan</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    We build a year-long eradication strategy specific to your property and goals. This includes treatment frequency, timing around seasonal growth cycles, and a decision on whether benthic barriers are appropriate for your conditions. No cookie-cutter packages — your plan is built around your waterfront.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                    <p className="text-green-800 text-sm font-medium">Every plan accounts for hydrilla reduction targets, homeowner priorities, and the specific biological factors driving growth at your property.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Scissors className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">3. Root Extraction — Always</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We pull every invasive plant by the root with minimal fragmentation. Cutting alone encourages regrowth and fragmentation spreads hydrilla further. Root extraction is the foundation of every job we do — no exceptions.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">4. Benthic Barriers — Where Conditions Allow</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    After extraction, some properties benefit from lake bottom barrier installation. These barriers block sunlight from reaching the lake floor, suppressing regrowth without chemicals. We recommend barriers only when site conditions — depth, sediment type, boat traffic, and coverage area — make them effective and practical.
                  </p>
                  <Link
                    to="/benthic-barriers"
                    onClick={scrollToTop}
                    className="inline-flex items-center text-teal-700 hover:text-teal-800 font-semibold underline underline-offset-4 text-sm"
                  >
                    Learn more about benthic barriers
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="flex gap-5 items-start">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">5. Ongoing Monitoring & Plan Adaptation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We return on a scheduled basis to monitor regrowth, maintain barriers, remove any resurgent weeds, and adjust your plan as conditions change across the seasons. Long-term results require long-term commitment — we stay with you through the process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Roots Matter */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Why Root Removal Matters</h2>
            <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
              Want to go deeper?{' '}
              <Link to="/blog" onClick={scrollToTop} className="text-teal-600 hover:text-teal-700 font-semibold underline">Read our blog</Link>{' '}
              or check the{' '}
              <Link to="/blog/lake-weed-removal-faq" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 font-semibold underline">FAQ</Link>{' '}
              for common questions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-red-600 mb-4">Hydrilla (Hydrilla verticillata)</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Most problematic aquatic plant in the United States</li>
                  <li>• A single cut fragment can produce over 6,000 new tubers per square meter</li>
                  <li>• Tubers remain viable in sediment for years</li>
                  <li>• Clogs boat propellers and entangles swimmers</li>
                  <li>• Forms suffocating mats from bottom to surface</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="text-lg font-bold text-red-600 mb-4">Eurasian Watermilfoil</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Regenerates aggressively from tiny fragments</li>
                  <li>• Spreads rapidly through established root systems</li>
                  <li>• Forms thick underwater stands that crowd out native plants</li>
                  <li>• Outcompetes beneficial native vegetation</li>
                  <li>• Creates serious safety hazards for swimmers and boaters</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits summary */}
        <section className="py-16 bg-teal-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Our Approach Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Root-level extraction</h3>
                  <p className="text-gray-600 text-sm">Eliminates the plant at its source, not just the visible growth above the sediment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Property-specific planning</h3>
                  <p className="text-gray-600 text-sm">Your management plan accounts for your unique conditions — not a generic treatment applied to every job.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Benthic barriers when appropriate</h3>
                  <p className="text-gray-600 text-sm">Suppresses light to the lake floor, allowing decomposition and blocking new growth without ongoing chemical treatments.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">No machinery or chemicals</h3>
                  <p className="text-gray-600 text-sm">Safe for your property, your family, native fish populations, and the lake ecosystem.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:col-span-2">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Fully TPWD permitted</h3>
                  <p className="text-gray-600 text-sm">
                    All work complies with Texas Parks and Wildlife Department regulations.{' '}
                    <Link to="/permitting" onClick={scrollToTop} className="text-blue-600 hover:text-blue-700 underline font-medium">Learn more about our permitting process.</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-green-700 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for a Plan Built Around Your Property?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
              We'll assess your waterfront, identify what's driving growth, and build a custom eradication strategy. All work is{' '}
              <Link to="/permitting" onClick={scrollToTop} className="text-white hover:text-emerald-200 font-semibold underline">fully permitted</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:(737)-300-9033"
                className="inline-flex items-center justify-center bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                <svg className="mr-2 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="bg-green-600 hover:bg-green-500 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowItWorksPage;
