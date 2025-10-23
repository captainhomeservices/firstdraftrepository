import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Scissors, Truck, CheckCircle, Shield } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const HowItWorksPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="How Lake Weed Removal Works | Captain Home Services Austin"
        description="Learn how Captain Home Services removes lake weeds by pulling roots and offers long-term benthic barrier solutions. Complete hydrilla removal in Lake Austin."
        keywords="lake weed removal, hydrilla removal Austin, benthic barriers, root removal, Lake Austin weed control"
        canonicalUrl="https://austinlakemanagement.com/how-it-works"
      />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Long-Term Hydrilla Removal
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Pulling by the roots with minimal fragmentation + benthic barrier installation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Clear, Beautiful Waterfront Starts Here
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Imagine stepping off your dock into crystal-clear water, free from tangled weeds and invasive growth. A pristine waterfront where your family can swim, boat, and enjoy the lake without obstacles. That's what we create for every Austin lakefront property we serve.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The secret? Pulling vegetation by the roots, not just cutting at the surface. While other methods can damage docks or require repeated treatments, our approach eliminates weeds at the source and prevents regrowth with long-lasting benthic barriers.
              </p>
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4">
                <p className="text-emerald-900 font-semibold">
                  <strong>Captain Home Services</strong> pulls invasive vegetation by the roots with minimal fragmentation, then installs <Link to="/benthic-barriers" onClick={scrollToTop} className="text-emerald-700 hover:text-emerald-800 underline">benthic barriers</Link> for complete long-term control. All work is <Link to="/permitting" onClick={scrollToTop} className="text-emerald-700 hover:text-emerald-800 underline">fully permitted</Link>.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://mdc.mo.gov/sites/default/files/styles/gallery_main_image/public/mo_nature/media/images/2010/07/eurasian_water_milfoilcmyk.jpg?itok=efZIYgsg"
                alt="Eurasian watermilfoil invasive aquatic vegetation"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Why Roots Matter */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Why Roots Matter
            </h2>
            <p className="text-center text-gray-600 mb-6 max-w-3xl mx-auto">
              Read more about these invasive species in our <Link to="/blog" onClick={scrollToTop} className="text-teal-600 hover:text-teal-700 font-semibold underline">educational blog</Link>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4">Hydrilla (Hydrilla verticillata)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Most problematic aquatic plant in the United States</li>
                  <li>• Single cut fragment can produce over 6,000 new tubers per square meter</li>
                  <li>• Tubers remain viable for over four years</li>
                  <li>• Clogs boat propellers and entangles swimmers</li>
                  <li>• Forms suffocating mats from bottom to surface</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4">Eurasian Watermilfoil</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Masters of regrowth from tiny fragments</li>
                  <li>• Spreads rapidly through root systems</li>
                  <li>• Forms thick underwater stands</li>
                  <li>• Outcompetes native plants</li>
                  <li>• Creates safety hazards for swimmers and boaters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Complete Solution */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Complete Removal Solution
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Identify</h3>
                <p className="text-gray-600">Assess species and infestation extent</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Scissors className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Pull by the Roots</h3>
                <p className="text-gray-600">Pull entire plants by the roots with minimal fragmentation</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Install Barriers</h3>
                <p className="text-gray-600"><Link to="/benthic-barriers" onClick={scrollToTop} className="text-emerald-600 hover:text-emerald-700 font-semibold underline">Benthic barriers</Link> for long-term prevention</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Dispose Safely</h3>
                <p className="text-gray-600">Responsible disposal prevents spread</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Maintain</h3>
                <p className="text-gray-600">Monitor and maintain barriers seasonally</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-teal-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our Method?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Root Removal</h3>
                  <p className="text-gray-700">Pulling by the roots with minimal fragmentation prevents rapid regrowth</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Long-Term Prevention</h3>
                  <p className="text-gray-700">Benthic barriers block remaining tubers and prevent future growth</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">No Property Damage</h3>
                  <p className="text-gray-700">No heavy machinery, no lawn damage, no dock destruction</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">Chemical-Free</h3>
                  <p className="text-gray-700">Environmentally safe for fish, wildlife, and swimmers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Complete Solution?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Pulling by the roots + <Link to="/benthic-barriers" onClick={scrollToTop} className="text-white hover:text-emerald-200 font-semibold underline">benthic barriers</Link> = long-term hydrilla control. All work is <Link to="/permitting" onClick={scrollToTop} className="text-white hover:text-blue-200 font-semibold underline">fully permitted</Link>. Restore your lakefront's health and beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(737)-300-9033"
              className="inline-flex items-center justify-center bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg"
            >
              <svg className="mr-2 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors duration-200 shadow-lg"
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
