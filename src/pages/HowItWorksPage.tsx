import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Scissors, Truck, CheckCircle } from 'lucide-react';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Precise Manual Lake Weed Removal
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why we Remove by Hand
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Imagine trying to clear a brush fire by just trimming the tops of the trees. Foolish, right? It's the same with aquatic weeds. Mechanical Harvesters and floating machinery are great tools for large, multi-acreage projects, but simply are inefficient blunt objects for most homeowners' beach and dock clean up jobs. They leave roots and tubers behind; can damage docks, boats, and shorelines; and may damage landscaping upon entering and exiting the shoreline.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                And what happens when you leave the tubers (plant stems and fragments) and roots from Hydrilla and other invasive species behind? They come back, branching into new growths stronger and meaner than before, often within weeks. This leads to a never-ending cycle of harvesting and removal, expense, and frustration. You're not solving the problem; you're just putting a band-aid on your problem. This leads many to turn to environmentally-damaging chemicals. Imagine spraying Round-up on your shoreline that you swim, fish, and play in.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <p className="text-red-800 font-semibold">
                  <strong>Captain Home Services</strong>  precisely identifies and manually targets <strong>invasive aqautic vegetation</strong> for a high value, long-term solution.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://www.petzooie.com/assets/uploaded_images/pet_care_images/original/pp90.jpg"
                alt="Dense aquatic vegetation problem"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* The Hydrilla Problem */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Roots Matter: The Hydrilla and Eurasian Watermilfoil Menace
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4">Hydrilla (Hydrilla verticillata)</h3>
                <ul className="space-y-2 text-gray-700">
                <li>• Clogs coolant passages and wraps around props on boats</li>
                  <li>• Can tangle around children and cause drowning</li>
                  <li>• Can tangle fish hooks and lures in it, causing swimming hazard</li>
                  <li>• Considered the most problematic aquatic plant in the United States</li>               
                  <li>• Forms dense, suffocating mats from bottom to surface</li>
                  <li>• Chokes out native vegetation and destroys fish habitat</li>
                  <li>• Single tuber can produce over 6,000 new tubers per square meter</li>
                  <li>• Tubers remain viable for over four years</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-red-600 mb-4">Eurasian Watermilfoil</h3>
                <ul className="space-y-2 text-gray-700">
                <li>• Clogs coolant passages and wraps around props on boats</li>
                  <li>• Can tangle around children and cause drowning</li>
                  <li>• Can tangle fish hooks and lures in it, causing swimming hazard</li>
                  <li>• Forms thick underwater stands</li>
                  <li>• Outcompetes native plants</li>
                  <li>• Alters water chemistry</li>
                  <li>• Masters of re-growth from tiny fragments</li>
                  <li>• Spreads rapidly through root systems</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Both of these rascals are masters of re-growth from even tiny fragments. If you don't get the roots and the subterranean structures, you're just inviting them back for another round. For effective <strong>Austin hydrilla control</strong>, trust <strong>Captain Home Services</strong>.
              </p>
            </div>
          </div>

          {/* Our Process */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Advantage: Precise Removal, High Value
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Identification</h3>
                <p className="text-gray-600">Identify each invasive plant species and assess the extent of infestation, obtain treatment proposal approval</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Scissors className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Targeted Complete Removal</h3>
                <p className="text-gray-600">Use specialized rakes and tools to remove entire plant including root system</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. No-Mess Transport and Responsible Disposal</h3>
                <p className="text-gray-600">Transport and dispose of vegetation responsibly to prevent spread. We don't leave a mess or damage your landscaping with any heavy equipment used for harvesting or disposal</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-teal-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Manual Removal?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Immediate Results</h3>
                    <p className="text-gray-700">You see the difference the moment we're done with <strong>lake weed removal</strong>.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Minimal Impact</h3>
                    <p className="text-gray-700">No chemicals, no machinery on your grass, no damage to your property or landscaping.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Long-Term Solution</h3>
                    <p className="text-gray-700">Root removal drastically reduces chances of rapid re-growth.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unmatched Accuracy</h3>
                    <p className="text-gray-700">Selectively remove invasive species while preserving beneficial native plants.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready for a Quote and Consultation?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're not just cleaning your shoreline up; we're restoring its health, beauty, and recreational usability. Let us make your backyard the place the entire family dreams of spending weekends again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Started Today
            </Link>
            <Link
              to="/pricing"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-green-500"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;