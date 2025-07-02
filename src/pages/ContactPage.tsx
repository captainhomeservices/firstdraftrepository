import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create FormData for Netlify form submission
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('form-name', 'contact');
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('project', formData.project);

      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSubmit as any).toString()
      });

      if (response.ok) {
        // Redirect to thank you page
        navigate('/thank-you');
      } else {
        // Fallback to mailto if Netlify form fails
        const subject = encodeURIComponent('New Estimate Request - Captain Home Services');
        const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Project Details:
${formData.project}

---
This estimate request was sent from the Captain Home Services website contact form.
        `);
        
        const mailtoLink = `mailto:captainhomeservices@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        navigate('/thank-you');
      }
      
    } catch (error) {
      console.error('Error sending form:', error);
      // Fallback to mailto
      const subject = encodeURIComponent('New Estimate Request - Captain Home Services');
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Project Details:
${formData.project}

---
This estimate request was sent from the Captain Home Services website contact form.
      `);
      
      const mailtoLink = `mailto:captainhomeservices@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      navigate('/thank-you');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Captain Home Services - Austin Lake Weed Removal",
    "description": "Contact Captain Home Services for professional Austin lake weed removal, hydrilla control, and aquatic vegetation management. Free estimates available.",
    "url": "https://austinlakemanagement.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Captain Home Services",
      "telephone": "(737) 300-9033",
      "email": "captainhomeservices@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Austin Metro Area",
        "addressLocality": "Austin",
        "addressRegion": "TX",
        "postalCode": "78701",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 30.2672,
        "longitude": -97.7431
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Austin",
          "sameAs": "https://en.wikipedia.org/wiki/Austin,_Texas"
        },
        {
          "@type": "City", 
          "name": "Spicewood"
        },
        {
          "@type": "City",
          "name": "Marble Falls"
        },
        {
          "@type": "City",
          "name": "Horseshoe Bay"
        },
        {
          "@type": "City",
          "name": "Kingsland"
        },
        {
          "@type": "City",
          "name": "Granite Shoals"
        },
        {
          "@type": "City",
          "name": "Lakeway"
        },
        {
          "@type": "City",
          "name": "Bee Cave"
        },
        {
          "@type": "City",
          "name": "Dripping Springs"
        }
      ],
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 30.2672,
          "longitude": -97.7431
        },
        "geoRadius": "80467"
      },
      "openingHours": [
        "Mo-Fr 08:00-18:00",
        "Sa 10:00-14:00"
      ],
      "serviceArea": [
        "Lake Austin",
        "Lake Travis",
        "Lake LBJ", 
        "Inks Lake",
        "Lake Marble Falls",
        "Lake Buchanan",
        "Lady Bird Lake"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Contact Captain Home Services - Austin Lake Weed Removal Experts"
        description="Contact Captain Home Services for professional Austin lake weed removal, hydrilla control, and aquatic vegetation management. Free estimates available. Call (737) 300-9033."
        keywords="contact Austin lake weed removal, Captain Home Services contact, Austin hydrilla removal quote, lake management consultation Austin, TPWD permit assistance"
        canonicalUrl="https://austinlakemanagement.com/contact"
        structuredData={contactPageSchema}
      />

      {/* Hero Section */}
      <section className="bg-green-600 text-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Howdy Neighbor!
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-4xl mx-auto">
            Schedule a lake weed removal estimate
          </p>
        </div>
      </section>

      {/* Contact Form - Moved above contact info */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Get Fast Results - We'll Call You Today
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
              Got a question about a stubborn patch of <strong>Lake Austin hydrilla</strong>? Curious about our chemical-free approach to <strong>Austin lake weed removal</strong>? Or maybe you just want to shoot the breeze about the best fishing spots on the Lake? Whatever your <strong>Austin aquatic vegetation removal</strong> needs, <strong>Captain Home Services</strong> is here to chat and help.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8">
            <form 
              onSubmit={handleSubmit} 
              className="space-y-6"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-base"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-base"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors text-base"
                  placeholder="(737) 300-9033"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Project *
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={6}
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors resize-none text-base"
                  placeholder="The more details you can provide, the better we can understand your needs and get back to you with the right solutions. Don't be shy; no project is too big or too small for our dedicated team at Captain Home Services."
                />
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-base md:text-lg font-semibold transition-colors duration-200 transform hover:scale-105 disabled:transform-none w-full md:w-auto"
                >
                  {isSubmitting ? 'Sending...' : 'Request an Estimate'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information - Moved below form */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="text-center p-6 md:p-8 bg-gray-50 rounded-lg">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Ready to chat? Give us a holler!</p>
              <a href="tel:(737)-300-9033" className="text-teal-600 hover:text-teal-700 font-semibold text-lg">
                (737) 300-9033
              </a>
            </div>
            
            <div className="text-center p-6 md:p-8 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your questions anytime</p>
              <a href="mailto:captainhomeservices@gmail.com" className="text-blue-600 hover:text-blue-700 font-semibold break-all">
                captainhomeservices@gmail.com
              </a>
            </div>
            
            <div className="text-center p-6 md:p-8 bg-gray-50 rounded-lg">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">Service Area</h3>
              <p className="text-gray-600 mb-4">Proudly serving the Austin metro area</p>
              <div className="text-green-600 font-semibold text-sm md:text-base">
                <p className="mb-2">Austin, Spicewood, Marble Falls, Horseshoe Bay, Kingsland, Granite Shoals, Lakeway, Bee Cave, Dripping Springs</p>
                <p>Lake Austin • Lake Travis • Lake LBJ • Inks Lake • Lake Marble Falls • Lake Buchanan • Lady Bird Lake</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg p-6 md:p-8 text-white text-center">
            <div className="flex justify-center mb-4">
              <Clock className="h-8 md:h-12 w-8 md:w-12" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Business Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-2xl mx-auto text-sm md:text-base">
              <div>
                <h4 className="font-semibold mb-2">Consultation & Estimates</h4>
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Field Work</h4>
                <p>Monday - Saturday: 7:00 AM - 5:00 PM</p>
                <p>Emergency services available</p>
                <p>Weather dependent</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Ready to Make Your Waterfront Perfect?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
            Once you hit that 'Request an Estimate' button, consider it done. We'll reach out real quick.
          </p>
          <p className="text-base md:text-lg font-semibold text-gray-900">
            Choose <span className="text-teal-600">Captain Home Services</span> for your <strong>Austin lake weed removal</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;