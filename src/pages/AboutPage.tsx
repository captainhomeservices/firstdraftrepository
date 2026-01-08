import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, Waves, Mountain, Anchor } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="About Us | Austin Lake Management | Cameron & Kalyn"
        description="Meet Cameron Reid and Kalyn Ohrt, founders of Austin Lake Management with 10+ years of Lake Austin experience. Learn about our sustainable approach to hydrilla control and why we do what we do."
        keywords="about Austin Lake Management, Cameron Reid, Kalyn Ohrt, lake care Austin, Lake Austin conservation, local lake service, Austin waterfront care, sustainable hydrilla control"
        canonicalUrl="https://austinlakemanagement.com/about"
        ogImage="https://austinlakemanagement.com/captain logo green  copy copy.png"
        structuredData={aboutSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-700 via-teal-600 to-blue-600 text-white py-20 md:py-28">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Heart className="h-5 w-5 mr-2 text-white" />
            <span className="text-sm font-medium">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About Austin Lake Management
          </h1>
          <p className="text-xl md:text-2xl text-teal-50 max-w-3xl mx-auto leading-relaxed mb-8">
            Started by people who love the lake, for people who love the lake
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="tel:(737)-300-9033"
              className="inline-block bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Call (737) 300-9033
            </a>
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-block bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border-2 border-white shadow-lg"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I'm <strong>Cameron Reid</strong>, and I grew up in Austin spending my time on Lake Austin—boating, skiing, swimming, fishing, and hanging out at Emma Long for lightning storms, smores, and lazy afternoons that slip away before you know it. The lake has always been where weekends happen, where friends meet up, and where I get to slow down in the middle of this wild, crazy, fun city we all call home.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I started this thing with my partner, <strong>Kalyn Ohrt</strong>, and a few folks I've worked with, trained to drive boats, enjoyed long afternoons with, and call my friends and family. We started Captain Home Services and AustinLakeManagement.com to take care of a problem that affects us all and that we knew we could do something about.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I've spent <strong>10+ years working on Lake Austin</strong> and know its bends and lake bottom like the back of my hand. In thinking about this hydrilla and how it returned, I came to realize there's another way to combat the weed besides what has always been done (lawnmowing). We strive to provide a sustainable solution that's good for our customers, the lake, and recreational lake users.
            </p>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">People We Trust</h3>
              <p className="text-gray-700 leading-relaxed">
                The people we work with matter a lot to us. Most of our crew are people we've known and trusted for a long time—friends, long-time contacts, and people who share our values. We want this to be a place where everyone enjoys showing up, feels respected, and is proud of the work they're doing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Anchor className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Lake Knowledge</h3>
              <p className="text-gray-700 leading-relaxed">
                With 10+ years working on Lake Austin, we know its bends and lake bottom like the back of our hands. This deep knowledge allows us to provide sustainable solutions that work with the lake's natural ecosystem.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Mountain className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Adventure Seekers</h3>
              <p className="text-gray-700 leading-relaxed">
                When we're not on the water, we're usually riding bikes, cooking, traveling the country and world, chasing endurance events, or wandering through national parks. We call South Austin home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-teal-100">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              A Better Way Forward
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center max-w-3xl mx-auto">
              We love what we do and who we do it with. This work is about taking care of a problem that affects us all and providing a sustainable solution that's good for our customers, the lake, and recreational lake users.
            </p>
            <p className="text-xl font-semibold text-gray-900 text-center">
              — Cameron & Kalyn
            </p>
          </div>
        </div>
      </section>

      {/* Placeholder for Photos */}
      <section className="bg-gray-100 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Life on the Lake
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Photos coming soon of our team, our work, and the Austin waterways we protect
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Waves className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                <span className="text-gray-600 font-medium">Team Photo</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Anchor className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                <span className="text-gray-600 font-medium">On the Water</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <Heart className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                <span className="text-gray-600 font-medium">Lake Austin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Protect Your Waterfront Together
          </h2>
          <p className="text-xl text-teal-50 mb-8 leading-relaxed">
            We'd love to help you keep your slice of Lake Austin clean, clear, and enjoyable for years to come.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="inline-block bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Your Free Estimate
            </Link>
            <Link
              to="/how-it-works"
              onClick={scrollToTop}
              className="inline-block bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 border-2 border-white shadow-lg"
            >
              Learn About Our Process
            </Link>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20">
            <a
              href="tel:(737)-300-9033"
              className="text-2xl font-bold hover:text-teal-100 transition-colors duration-200"
            >
              Call (737) 300-9033
            </a>
            <p className="text-teal-100 mt-2">Ready to talk? Give us a call today</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
