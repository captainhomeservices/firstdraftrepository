import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Leaf, Clock, CheckCircle, Phone, ArrowRight, AlertTriangle, Calendar, Anchor, Settings } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const BenthicBarriersPage = () => {
  return (
    <>
      <SEOHead
        title="Benthic Barriers & Lake Mats - Complete Installation & Maintenance | Captain Home Services"
        description="Professional benthic barrier installation for Austin lakes. We assess, install, maintain, and remove lake bottom blankets. Instant clear swim and boat areas. Custom solutions for any size waterfront."
        keywords="benthic barriers, lake mats, lake bottom blankets, LakeMat, aquatic weed prevention, hydrilla control, Austin lake barriers, weed mat installation"
      />

      <div className="bg-gradient-to-br from-slate-50 via-white to-emerald-50 min-h-screen">
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
                Benthic Barrier Installation & Service
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                Complete Solutions: Assessment, Installation, Maintenance & Removal
              </p>
              <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
                We remove most of your lake weeds manually, then install professional benthic barriers that do the rest—delivering instant, crystal-clear swim and boat areas that last.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  Get a Free Assessment
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
                Professional-grade lake mats and bottom blankets that create instant, weed-free zones
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
                        Benthic barriers are heavy-duty, gas-permeable fabrics that sit on the lake bottom and block sunlight using the "snowshoe" principle—distributing weight evenly across the surface. Without light, aquatic weeds cannot photosynthesize and are prevented from growing.
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Materials</h3>
                      <p className="text-gray-600">
                        As authorized dealers for LakeMat and Lake Bottom Blanket, we use commercial-quality nonwoven polypropylene fabric specifically designed for aquatic environments. The material is gas-permeable, environmentally safe, and 100% guaranteed.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-teal-100 rounded-lg p-3 mr-4">
                      <CheckCircle className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Results</h3>
                      <p className="text-gray-600">
                        Unlike manual removal that takes time to see complete results, benthic barriers provide instantaneous satisfaction—creating a clear, weed-free swim and boating area the moment they're installed.
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
                Our Complete Barrier Service
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial assessment to seasonal removal, we handle every aspect of your benthic barrier needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Settings className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
                <p className="text-gray-600">
                  We measure your waterfront, evaluate bottom conditions, weed density, and create a custom plan tailored to your needs and budget.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Anchor className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Installation</h3>
                <p className="text-gray-600">
                  Professional installation using weighted systems to secure barriers. We can cover any size area—from small swim zones to expansive waterfront properties.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-teal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Maintenance</h3>
                <p className="text-gray-600">
                  Regular monitoring and maintenance to ensure optimal performance. We address any shifting, edge growth, or gas buildup issues promptly.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="bg-slate-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Removal</h3>
                <p className="text-gray-600">
                  Seasonal or permanent removal service. We safely lift, clean, and store your barriers or dispose of them responsibly.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The Complete Solution for Homeowners & Managers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Custom options designed for complete weed removal with clear swim and boat docking areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8 shadow-lg border border-emerald-200">
                <div className="text-4xl font-bold text-emerald-600 mb-4">Step 1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Manual Weed Removal</h3>
                <p className="text-gray-700 mb-4">
                  We manually remove most of your existing aquatic vegetation by the roots—including hydrilla, watermilfoil, and other invasive plants. While we remove the majority of weeds, it's difficult to get every single one by pulling alone.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Removes most weeds by the roots</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Chemical-free and eco-friendly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proper disposal off-site</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Prepares bottom for barrier installation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-200">
                <div className="text-4xl font-bold text-blue-600 mb-4">Step 2</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Barrier Installation</h3>
                <p className="text-gray-700 mb-4">
                  Once most weeds are removed, we install professional benthic barriers that do the rest—blocking any remaining growth and preventing future weeds. The barriers provide instant, clear water for swimming and boating.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Instant clear swim and boat areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Blocks remaining weed growth</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gas-permeable, weighted installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom-sized for your property</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-8 shadow-lg">
              <div className="flex items-start">
                <AlertTriangle className="h-8 w-8 text-amber-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Important: Timing & Vegetation Management</h3>

                  <div className="space-y-4 text-gray-700">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Best Time for Installation:</h4>
                      <p className="mb-2">We strongly recommend installing benthic barriers:</p>
                      <ul className="list-disc list-inside space-y-1 ml-4">
                        <li><strong>After having weeds manually removed</strong> by our team</li>
                        <li><strong>In early spring</strong> before large infestations take over (ideally when water temperatures are below 60°F)</li>
                      </ul>
                    </div>

                    <div className="bg-white rounded-lg p-6 border border-amber-200">
                      <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-amber-600 mr-2" />
                        The Danger of Covering Too Much Vegetation
                      </h4>
                      <p className="mb-3">
                        Installing barriers over heavy weed growth can create serious problems. When large amounts of vegetation are trapped under the barrier and begin to decompose, they produce excessive amounts of gas that cannot escape fast enough—even through gas-permeable fabric.
                      </p>
                      <p className="mb-3 font-semibold text-gray-900">This can result in:</p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          <span><strong>Bubbling and ballooning</strong> as decomposition gases build up under the barrier</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          <span><strong>Barrier displacement</strong> where gas pockets lift and shift the mat</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          <span><strong>Foul odors</strong> from anaerobic decomposition</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          <span><strong>Reduced effectiveness</strong> as the barrier becomes unstable</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          <span><strong>Oxygen depletion</strong> in the water beneath the barrier</span>
                        </li>
                      </ul>
                      <p className="mt-4 text-gray-900 font-semibold">
                        This is why we remove most vegetation first, ensuring a clean bottom before installation. The barriers then handle any remaining growth and prevent future infestations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Benthic Barriers Work
                </h2>
                <p className="text-gray-600 mb-6">
                  According to aquatic management research, benthic barriers are scientifically proven to control hydrilla and other invasive aquatic vegetation. They're most effective for localized areas with shallow, slow-moving water—making them perfect for residential waterfronts.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Instant Satisfaction</h4>
                      <p className="text-gray-600">Unlike manual removal alone, barriers provide immediate, crystal-clear water for swimming and boating the day they're installed.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Complete Coverage</h4>
                      <p className="text-gray-600">We can cover any size area—small dock zones or expansive waterfront properties. Custom solutions for every situation.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Environmentally Safe</h4>
                      <p className="text-gray-600">No chemicals, no harm to fish, wildlife, or water quality. Completely safe for swimming and all recreational activities.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Long-Term Prevention</h4>
                      <p className="text-gray-600">Prevents hydrilla tubers and fragments from establishing new growth, protecting your waterfront season after season.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img
                  src="/IMG_0772 Medium.jpeg"
                  alt="Lakefront property with heavy aquatic weed growth"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Custom Options for Every Property
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Whether you're a homeowner or property manager, we have solutions for your specific needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Homeowners</h3>
                <p className="text-gray-600 mb-6">
                  Protect your lakefront investment with custom-designed weed management solutions. Perfect for creating pristine swim areas and clear boat docking zones.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Small to medium swim areas (6' x 8' to 12' x 20')</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dock and boat lift perimeter protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Beach front weed control</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Seasonal or year-round installation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Optional maintenance packages</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Managers</h3>
                <p className="text-gray-600 mb-6">
                  Large-scale solutions for multi-property lakefront management. Keep common areas, marinas, and beaches completely clear of invasive vegetation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Large-area coverage (up to 100' lengths)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Multiple location management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Marina and boat ramp protection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Comprehensive maintenance contracts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Seasonal removal and storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Gas-Permeable Technology
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Our professional-grade barriers feature gas-permeable fabric that allows natural decomposition gases to escape, preventing the bubbling and ballooning that can occur with non-permeable materials or when barriers are installed over heavy vegetation.
                  </p>
                  <p className="text-gray-300 mb-6">
                    Combined with our weighted installation method (not staked), the barriers stay securely in place while maintaining the natural lake bottom environment.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Gas-permeable nonwoven polypropylene</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Weighted installation for stability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Prevents gas buildup and displacement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Creates firm, walkable lake bottom</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Authorized LakeMat & Lake Bottom Blanket products</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Perfect For These Areas
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Swim Areas</h4>
                        <p className="text-emerald-100">Instant clear, weed-free swimming zones for the whole family.</p>
                      </div>
                    </div>
                    <div className="flex items-start text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Boat Docking Areas</h4>
                        <p className="text-emerald-100">Keep docks and boat lifts completely clear for easy access.</p>
                      </div>
                    </div>
                    <div className="flex items-start text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Beach Fronts</h4>
                        <p className="text-emerald-100">Maintain pristine sandy beaches without unwanted vegetation.</p>
                      </div>
                    </div>
                    <div className="flex items-start text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Boat Launches</h4>
                        <p className="text-emerald-100">Safe, clear entry and exit without tangling in weeds.</p>
                      </div>
                    </div>
                    <div className="flex items-start text-white">
                      <CheckCircle className="h-6 w-6 text-emerald-200 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold mb-1">Any Size Area</h4>
                        <p className="text-emerald-100">From small personal docks to expansive waterfront estates.</p>
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
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Learn More About Benthic Barriers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Want to dive deeper into the science behind benthic barriers and hydrilla management?
              </p>
              <a
                href="https://humanwildlifeecology.wordpress.com/2018/04/12/hydrilla-verticillata-management-strategy-section-62/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-semibold text-lg"
              >
                <span className="underline">Read: Hydrilla Management Strategy - Extended Reading</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready for Instant, Clear Water?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free assessment and custom quote for your waterfront property. We handle everything from weed removal to barrier installation, maintenance, and removal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Your Free Assessment
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
