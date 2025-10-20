import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Leaf, Clock, CheckCircle, Phone, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const BenthicBarriersPage = () => {
  return (
    <>
      <SEOHead
        title="Benthic Barriers Installation - Long-Term Aquatic Weed Prevention | Captain Home Services"
        description="Keep lake weeds from coming back with professional benthic barrier installation. Gas-permeable barriers block sunlight and prevent regrowth after manual weed removal in Austin lakes."
        keywords="benthic barriers, lake bottom blankets, aquatic weed prevention, long-term weed control, hydrilla prevention, Austin lake maintenance"
      />

      <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 min-h-screen">
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/lake weed removal tools.jpg')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-emerald-900/95"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-emerald-500/20 border border-emerald-400/30 rounded-full px-6 py-2 mb-8">
                <Shield className="h-5 w-5 text-emerald-400 mr-2" />
                <span className="text-emerald-300 font-semibold text-sm">New Service Offering</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Benthic Barrier Installation
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                The Complete Solution: Manual Removal + Long-Term Prevention
              </p>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                After we remove your lake weeds by the roots, keep them from coming back with professional-grade benthic barriers that block sunlight and prevent regrowth.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Get a Free Quote
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
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Are Benthic Barriers?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional-grade fabric barriers placed on the lake bottom to prevent aquatic weed growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="/IMG_0761 Medium.jpeg"
                  alt="Lake with aquatic weeds before benthic barrier installation"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-emerald-100 rounded-lg p-3 mr-4">
                      <Shield className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">How They Work</h3>
                      <p className="text-gray-600">
                        Benthic barriers are heavy-duty, gas-permeable fabrics that sit on the lake bottom and block sunlight from reaching plants. Without light, aquatic weeds cannot photosynthesize and simply cannot grow.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-blue-100 rounded-lg p-3 mr-4">
                      <Leaf className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Professional-Grade Materials</h3>
                      <p className="text-gray-600">
                        We use commercial-quality nonwoven polypropylene fabric that is specifically designed for aquatic environments. The material is gas-permeable, allowing natural decomposition gases to escape while blocking light.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-lg p-3 mr-4">
                      <Clock className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Solution</h3>
                      <p className="text-gray-600">
                        When properly installed and maintained, benthic barriers can provide years of weed-free swimming and boating. They're the perfect complement to our manual removal service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Perfect Two-Step Solution
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive approach combines immediate relief with long-term prevention
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-lg border border-emerald-200">
                <div className="text-4xl font-bold text-emerald-600 mb-4">Step 1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Manual Weed Removal</h3>
                <p className="text-gray-700 mb-4">
                  We start by manually removing all existing aquatic vegetation by the roots. This includes hydrilla, watermilfoil, and other invasive plants. We pull weeds completely out of the lake bed and dispose of them properly.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Complete root removal</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Environmentally friendly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Immediate results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proper disposal</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-4">Step 2</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Barrier Installation</h3>
                <p className="text-gray-700 mb-4">
                  Once the area is clear, we install custom-fit benthic barriers that are properly anchored to the lake bottom. The barriers block sunlight and prevent weeds from regrowing in your swim and dock areas.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom-fit to your area</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gas-permeable fabric</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Secure anchoring system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Long-term prevention</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src="/IMG_0772 Medium.jpeg"
                  alt="Lakefront property with heavy aquatic weed growth"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose Benthic Barriers?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Prevent Regrowth</h4>
                      <p className="text-gray-600">Stops weeds from coming back after manual removal, saving you time and money on repeated treatments.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Environmentally Friendly</h4>
                      <p className="text-gray-600">No chemicals, no harm to fish or wildlife. A completely safe and natural weed prevention method.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Maintain Property Value</h4>
                      <p className="text-gray-600">Keep your waterfront clear and beautiful year-round, protecting your investment.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Enjoy Your Lake</h4>
                      <p className="text-gray-600">Swim, boat, and fish without worrying about getting tangled in weeds.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Proven Technology</h4>
                      <p className="text-gray-600">Benthic barriers are scientifically proven to control aquatic vegetation effectively and safely.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Installation Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional installation ensures maximum effectiveness and longevity
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Site Assessment</h3>
                <p className="text-gray-600">
                  We measure your swim and dock areas, assess bottom conditions, and create a custom installation plan.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Weed Removal</h3>
                <p className="text-gray-600">
                  Complete manual removal of all existing vegetation by the roots, leaving a clean lake bottom.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Barrier Installation</h3>
                <p className="text-gray-600">
                  We install professional-grade barriers with proper anchoring systems to keep them secure on the lake bottom.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-emerald-600">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance Plan</h3>
                <p className="text-gray-600">
                  We provide instructions for simple monitoring and can handle any maintenance needs that arise.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Understanding Gas Management
                </h2>
                <p className="text-gray-600 mb-4">
                  One of the most important aspects of benthic barrier success is proper gas management. When organic material decomposes on the lake bottom, it naturally produces gases.
                </p>
                <p className="text-gray-600 mb-6">
                  That's why we use professional-grade, gas-permeable fabric that allows these gases to escape naturally. This prevents bubble formation under the barrier and ensures long-term stability.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-bold text-gray-900 mb-3">Our Gas-Permeable Barriers Include:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Specially designed fabric that allows gas to pass through</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure anchoring system that stays in place</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Simple monitoring and maintenance procedures</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Professional installation for optimal performance</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <img
                  src="/IMG_0777 Medium.jpeg"
                  alt="Clean lakefront after weed removal ready for benthic barrier"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Ideal For These Areas
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Swim Areas</h4>
                        <p className="text-emerald-100">Keep your swimming zone clear and weed-free all season long.</p>
                      </div>
                    </div>
                    <div className="flex items-start text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Dock Areas</h4>
                        <p className="text-emerald-100">Prevent weeds from growing around boat docks and lifts.</p>
                      </div>
                    </div>
                    <div className="flex items-start text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Beach Fronts</h4>
                        <p className="text-emerald-100">Maintain sandy beaches without unwanted vegetation.</p>
                      </div>
                    </div>
                    <div className="flex items-start text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Boat Launches</h4>
                        <p className="text-emerald-100">Easy entry and exit without tangling in weeds.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative min-h-[300px] md:min-h-0">
                  <img
                    src="/IMG_4906 Medium.jpeg"
                    alt="Lakefront property showing swim and dock area"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Maintenance & Monitoring
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                While benthic barriers are low-maintenance, simple monitoring ensures optimal performance
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Clock className="h-10 w-10 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Monthly Checks</h3>
                  <p className="text-gray-300">
                    Simple visual inspections to ensure barriers remain in place and functioning properly.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <Shield className="h-10 w-10 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Gas Release</h3>
                  <p className="text-gray-300">
                    Our gas-permeable barriers naturally release gases, but we can address any concerns.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <CheckCircle className="h-10 w-10 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">Professional Support</h3>
                  <p className="text-gray-300">
                    We're here to help with any maintenance needs or questions that arise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Keep Your Lake Weed-Free?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Combine manual weed removal with benthic barriers for the ultimate long-term solution. Get a free custom quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:(737)-300-9033"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (737) 300-9033
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenthicBarriersPage;
