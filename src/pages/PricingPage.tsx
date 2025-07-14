import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, CheckCircle, Target, Truck, Award, Scissors, Sun } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The True Value of Clear Water
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Take back your Lakefront
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            We offer the highest value to homeowners wishing to enjoy their waterfront effortlessly
          </p>
        </div>
      </section>

      {/* Our Advantage - Moved to top */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Process: Where Your Investment Goes
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-4xl mx-auto">
            Our pricing is a direct reflection of our comprehensive, hands-on approach, ensuring you get the most bang for your buck. Here's how your investment translates into a crystal-clear waterfront with <strong>Captain Home Services</strong>:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Precise Identification and up front Pricing</h3>
              <p className="text-gray-600">We identify the issues and build a plan to remove the nuisance vegetation at a price that can't be beat</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2. TPWD Permitting and Treatment Plan Approval</h3>
              <p className="text-gray-600">Complete permitting process and approved treatment plans submitted and approved with TPWD</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Scissors className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Lake Weed Removal</h3>
              <p className="text-gray-600">Meticulous manual removal of each plant, root and all, using specialized tools</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">4. No-Mess Transport</h3>
              <p className="text-gray-600">Clean removal and transport off your property without damaging landscaping, using heavy equipment or leaving any trace of the work behind</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Responsible Disposal</h3>
              <p className="text-gray-600">Professional composting facility disposal to prevent environmental spread</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">6. Immediate Enjoyment</h3>
              <p className="text-gray-600">Your lakefront is clean, clear and ready for fun in the sun</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Range - Moved up */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Up-front Pricing 
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The cost of lake weed removal is between $950-$1,850 for most residential projects. This includes permitting/compliance with local and state authorities, manual removal of invasive aquatic vegetation, no-mess transport off your property and responsible disposal of exotic invasive species. 
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 mb-12">
            <div className="text-center mb-8">
              <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-10 w-10 text-teal-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">$950 - $1,850</h3>
              <p className="text-lg text-gray-600">Typical price of Hydrilla removal for most residents</p>
            </div>            
            <div className="mt-8 text-center">
              <p className="text-gray-700">
                <strong>Captain Home Services</strong> provides a transparent, upfront quote after our initial assessment, so you know exactly what to expect. Weeds do grow back, as their infestation has taken over the Highland Lakes and no permanent solution from authorities is in sight. When they do grow back, our past customers receive a returning customer discount to reflect our commitment to keeping our customers' recreational areas clean and clear at a high value. Long-term lake management plans are available, and usually do not require more than 2-3 treatments per year. For larger lots with extensive infestations, costs may vary.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition - Moved down */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              True Value, Not Just Low Price
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              When it comes to restoring beauty and usability to your waterfront, we are your highest value option. Our pricing reflects a commitment to quality, precision, and a long-term solution that saves you money and headaches down the line.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://cdn11.bigcommerce.com/s-94ve5l/images/stencil/500x659/products/2411/4162/WeedRay-1__62680.1736887802.jpg?c=2"
                alt="Aquatic lake weed removal"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                We Don't Just Clear Weeds
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We manage your shoreline, dock areas, and swimming areas to ensure your property is the place family and friends dream of spending long weekends. <strong>Captain Home Services</strong> maintains your lake recreational areas at a value that's worth the results.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Root-deep removal prevents rapid re-growth</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Chemical-free approach protects your shoreline and swim areas</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Complete permitting and compliance included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Comparison */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Manual Removal is the Highest Value Option
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Precise Accuracy</h3>
                <p className="text-gray-600">Plant by Plant</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Surgical precision targeting each invasive plant</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Complete root system extraction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Preserves native vegetation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Cleaner lake, healthier ecosystem</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <DollarSign className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Cost Effective</h3>
                <p className="text-gray-600">Better Than Big Machines</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Mechanical Harvesters are more suitable for larger commercial projects at $3,000+</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Machinery can damage your yard, shoreline, and docks during removal and access to your shoreline from your driveway</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Our method is significantly more affordable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Right tool for the right job</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center mb-6">
                <Award className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900">Lasting Results</h3>
                <p className="text-gray-600">True Value Investment</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Root removal = longer-term solutions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Fewer treatments needed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Less frustration, more enjoyment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                  <span>Long-term waterfront clarity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pride Statement */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Your Highest Value Solution</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            We take immense pride in our work, and we believe in delivering a high value solution to every one of our customers. We're not just selling our lake weed removal service; we're selling the promise of a pristine Texas waterfront, restored with care, precision, and a deep understanding of our unique aquatic ecosystems.
          </p>
          <p className="text-2xl font-bold mb-8">
            Choose <span className="text-teal-300">Captain Home Services</span>, and choose the highest value for your home.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready for your quote?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact <strong>Captain Home Services</strong> today for a personalized quote. Let's talk about bringing precision, value, and lasting beauty back to your lake.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              Get Free Quote
            </Link>
            <Link
              to="/how-it-works"
              className="bg-gray-200 hover:bg-gray-300 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;