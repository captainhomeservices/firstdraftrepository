import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const AboutPage = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Captain Home Services",
      "alternateName": "Austin Lake Management",
      "description": "Professional lake weed removal and aquatic vegetation management service founded by Cameron Reid and Kalyn Ohrt, providing sustainable hydrilla control solutions for Lake Austin",
      "founder": [
        {
          "@type": "Person",
          "name": "Cameron Reid",
          "jobTitle": "Co-Founder",
          "description": "10+ years of experience working on Lake Austin"
        },
        {
          "@type": "Person",
          "name": "Kalyn Ohrt",
          "jobTitle": "Co-Founder"
        }
      ],
      "areaServed": {
        "@type": "City",
        "name": "Austin",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="About Us | Austin Lake Management | Cameron & Kalyn"
        description="Meet Cameron Reid and Kalyn Ohrt, founders of Austin Lake Management with 10+ years of Lake Austin experience. Learn about our sustainable approach to hydrilla control and why we do what we do."
        keywords="about Austin Lake Management, Cameron Reid, Kalyn Ohrt, lake care Austin, Lake Austin conservation, local lake service, Austin waterfront care, sustainable hydrilla control"
        canonicalUrl="https://austinlakemanagement.com/about"
        ogImage="https://austinlakemanagement.com/captain logo green  copy copy.png"
        structuredData={aboutSchema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-xl text-teal-50">
            Started by people who love the lake, for people who love the lake
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I'm Cameron Reid, and I grew up in Austin spending my time on Lake Austin—boating, skiing, swimming, fishing, and hanging out at Emma Long for lightning storms, smores, and lazy afternoons that slip away before you know it. The lake has always been where weekends happen, where friends meet up, and where I get to slow down in the middle of this wild, crazy, fun city we all call home.
          </p>

          <div className="my-8 flex justify-center">
            <img
              src="/cam_kay.jpeg"
              alt="Cameron Reid and Kalyn Ohrt, founders of Austin Lake Management, on Lake Austin"
              className="max-w-lg w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I started this thing with my partner, Kalyn Ohrt, and a few folks I've worked with, trained to drive boats, enjoyed long afternoons with, and call my friends and family. We started Captain Home Services and AustinLakeManagement.com to take care of a problem that affects us all and that we knew we could do something about.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I've spent 10+ years working on Lake Austin and know its bends and lake bottom like the back of my hand. In thinking about this hydrilla and how it returned, I came to realize there's another way to combat the weed besides what has always been done (lawnmowing). We strive to provide a sustainable solution that's good for our customers, the lake, and recreational lake users.
          </p>

          <div className="my-8 flex justify-center">
            <img
              src="/weed_removal_worker copy.jpg"
              alt="Lake weed removal specialist working on Lake Austin removing hydrilla by hand"
              className="max-w-lg w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The people we work with matter a lot to us. Most of our crew are people we've known and trusted for a long time—friends, long-time contacts, and people who share our values. We want this to be a place where everyone enjoys showing up, feels respected, and is proud of the work they're doing. We love what we do and who we do it with.
          </p>

          <div className="my-8 flex justify-center">
            <img
              src="/gabriel_ramon copy copy copy.jpg"
              alt="Austin Lake Management team member working on Lake Austin"
              className="max-w-lg w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            When we're not on the water, we're usually riding bikes, cooking, traveling the country and world, chasing endurance events, or wandering through national parks. We call South Austin home.
          </p>

          <p className="text-xl text-gray-900 mt-12 mb-8">
            — Cameron & Kalyn
          </p>

        </div>
      </section>

      {/* Simple CTA */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Let's Protect Your Waterfront Together
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We'd love to help you keep your slice of Lake Austin clean, clear, and enjoyable for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(737)-300-9033"
              className="inline-block bg-teal-600 text-white hover:bg-teal-700 px-8 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
            >
              Call (737) 300-9033
            </a>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-block bg-white text-teal-600 hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-teal-600 transition-colors duration-200"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
