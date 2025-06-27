import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, CheckCircle, AlertTriangle } from 'lucide-react';

const PermittingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Navigating the Waters
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Our Permitting & Treatment Plan Expertise
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            We handle the red tape so you can enjoy your blue water, ensuring every job is done by the book.
          </p>
        </div>
      </section>

      {/* Why Permits Matter */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Compliance Matters
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                The Texas Parks and Wildlife Department (TPWD) has a strict permitting and treatment proposal process for <strong>exotic invasive vegetation removal</strong> on public waters.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                These regulations are in place to protect our precious natural resources, prevent the spread of invasive species, and ensure that any work done on our lakes is environmentally sound. Ignoring these rules or hiring a service that ignores these regulations can lead to hefty fines, project delays, and a whole heap of trouble you don't need.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800 font-semibold">
                  That's why <strong>Captain Home Services</strong> helps navigate this comples process.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://i.imgur.com/dmrnTO6.jpg"
                alt="Official documentation and permits"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* TPWD Process */}
          <div className="bg-blue-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The TPWD Permitting Process: We Handle the Heavy Lifting
            </h2>
            <p className="text-lg text-gray-700 mb-8 text-center max-w-4xl mx-auto">
              If you're not familiar with the ins and outs of environmental regulations the permitting and treatment proposal process can be a huge pain and take months of your precious boating and swimming season. Our team at <strong>Captain Home Services</strong> is here to clean your shoreline up and take care of the red tape for you.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Site Assessment</h3>
                <p className="text-gray-600">Thorough evaluation of your specific aquatic vegetation problem</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Treatment Plan Design</h3>
                <p className="text-gray-600">Detailed, compliant <strong>proposed treatment plan</strong> tailored to your situation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Application Submission</h3>
                <p className="text-gray-600">Complete and submit all required forms to TPWD on your behalf</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-Up</h3>
                <p className="text-gray-600">Liaison with TPWD officials to expedite permit approval</p>
              </div>
            </div>
          </div>

          {/* Compliance Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://www.petzooie.com/assets/uploaded_images/pet_care_images/original/pp90.jpg"
                alt="Proper vegetation removal techniques"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trust Us to Do It Right
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                When you choose <strong>Captain Home Services</strong>, you can trust us to stay in strict compliance with all regulations concerning the removal, treatment, transportation, and disposal of invasive aquatic vegetation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Legal Removal Methods</h3>
                    <p className="text-gray-700">Ensuring our manual techniques align with permitted practices</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Safe Transportation</h3>
                    <p className="text-gray-700">Proper handling and transport to prevent further spread</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ecologically Sound Disposal</h3>
                    <p className="text-gray-700">Including proper <strong>Austin hydrilla disposal</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-green-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Experience You Can Bank On
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Approved Plans</h3>
                <p className="text-gray-700">Extensive experience designing approved <strong>proposed treatment plans</strong> that meet TPWD requirements</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Permit Expertise</h3>
                <p className="text-gray-700">Track record of obtaining and holding permits for various <strong>Austin aquatic vegetation removal</strong> projects</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-10 w-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Legal Compliance</h3>
                <p className="text-gray-700">Deep understanding of Texas environmental laws for <strong>Austin exotic species aware vegetation removal</strong></p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                Our team at <strong>Captain Home Services</strong> boasts extensive experience in navigating the permitting landscape. We've got the know-how, the connections, and the tools to ensure your waterfront restoration is a seamless, legal, and ultimately successful endeavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-8 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-100 border border-red-300 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-8 w-8 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">Important  Notice</h3>
                <p className="text-red-700">
                  Invasive aquatic vegetation removal from public waters by unpermitted businesses can result in significant fines and legal consequences. Always ensure proper permits are obtained before beginning any exotic invasive species vegetation removal project. <strong>Captain Home Services</strong> handles all permitting requirements to keep your project compliant and legal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Navigate the Waters?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Got questions about permits or ready to get started? Reach out to <strong>Captain Home Services</strong> today, and let's talk about a compliant, effective plan for your waterfront. We're here to offer a simple and cost-effective approach to lake weed removal around Austin Texas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Get Permit Consultation
            </Link>
            <Link
              to="/how-it-works"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-blue-500"
            >
              Learn Our Process
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PermittingPage;