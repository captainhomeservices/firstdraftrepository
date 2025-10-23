import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Mail, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ThankYouPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Thank You - Captain Home Services | Austin Lake Weed Removal"
        description="Thank you for contacting Captain Home Services. We'll be in touch soon to discuss your Austin lake weed removal project and schedule your free estimate."
        keywords="thank you, Captain Home Services, Austin lake weed removal estimate, contact confirmation"
        canonicalUrl="https://austinlakemanagement.com/thank-you"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-20 w-20 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Thank You!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Your estimate request has been received
          </p>
          <p className="text-lg max-w-3xl mx-auto">
            We'll be in touch within 24 hours to discuss your lake weed removal project and schedule your free consultation.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Happens Next?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what you can expect from <strong>Captain Home Services</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">1. We'll Call You</h3>
              <p className="text-gray-700">
                Within 24 hours, we'll call you to discuss your specific lake weed problem and answer any questions you have.
              </p>
            </div>
            
            <div className="text-center p-8 bg-green-50 rounded-lg">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Schedule Site Visit</h3>
              <p className="text-gray-700">
                We'll arrange a convenient time to visit your property and assess the aquatic vegetation situation firsthand.
              </p>
            </div>
            
            <div className="text-center p-8 bg-teal-50 rounded-lg">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Free Estimate</h3>
              <p className="text-gray-700">
                You'll receive a detailed, no-obligation estimate that includes permitting, removal, and disposal - everything you need.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need to Reach Us Sooner?
            </h2>
            <p className="text-xl text-gray-600">
              Don't wait - give us a call or send an email anytime
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call or Text</h3>
              <p className="text-gray-600 mb-4">Ready to chat right now?</p>
              <a 
                href="tel:(737)-300-9033" 
                className="text-teal-600 hover:text-teal-700 font-semibold text-xl transition-colors"
              >
                (737) 300-9033
              </a>
            </div>
            
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send additional details or photos</p>
              <a 
                href="mailto:captainhomeservices@gmail.com" 
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors break-all"
              >
                captainhomeservices@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Reminder */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proudly Serving the Austin Metro Area
          </h2>
          <div className="bg-green-50 rounded-lg p-8 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              <strong>Cities:</strong> Austin, Spicewood, Marble Falls, Horseshoe Bay, Kingsland, Granite Shoals, Lakeway, Bee Cave, Dripping Springs & surrounding areas
            </p>
            <p className="text-lg text-gray-700">
              <strong>Lakes:</strong> Lake Austin • Lake Travis • Lake LBJ • Inks Lake • Lake Marble Falls • Lake Buchanan • Lady Bird Lake
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            While You Wait, Learn More About Our Services
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover why <strong>Captain Home Services</strong> is Austin's premier choice for lake weed removal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/how-it-works"
              onClick={scrollToTop}
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 transform hover:scale-105"
            >
              How It Works
            </Link>
            <Link
              to="/blog"
              onClick={scrollToTop}
              className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-teal-500"
            >
              Read Our Blog
            </Link>
            <Link
              to="/blog"
              onClick={scrollToTop}
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border border-blue-500"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThankYouPage;