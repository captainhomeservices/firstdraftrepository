import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/captain logo green  copy copy.png" 
                alt="Captain Home Services Logo" 
                className="h-8 w-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="font-bold text-lg md:text-xl">Captain Home Services</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md text-sm md:text-base">
              Professional aquatic invasive vegetation removal in Austin, Texas. We pull lake weeds by the roots and dispose of them properly so your shoreline stays clear, beautiful, and healthy.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href="tel:(737)-300-9033" className="text-gray-300 hover:text-teal-400 transition-colors text-sm md:text-base">
                  (737) 300-9033
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <a href="mailto:captainhomeservices@gmail.com" className="text-gray-300 hover:text-teal-400 transition-colors text-sm md:text-base break-all">
                  captainhomeservices@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300 text-sm md:text-base">
                  <p>Austin Metro Area, Texas</p>
                  <p className="text-xs md:text-sm text-gray-400 mt-1">
                    Serving Austin, Spicewood, Marble Falls, Horseshoe Bay, Kingsland, Granite Shoals, Lakeway, Bee Cave, Dripping Springs & surrounding areas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <Link 
                  to="/how-it-works" 
                  onClick={scrollToTop}
                  className="hover:text-teal-400 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link 
                  to="/permitting" 
                  onClick={scrollToTop}
                  className="hover:text-teal-400 transition-colors"
                >
                  Permitting
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  onClick={scrollToTop}
                  className="hover:text-teal-400 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  onClick={scrollToTop}
                  className="hover:text-teal-400 transition-colors"
                >
                  Captain's Log
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={scrollToTop}
                  className="hover:text-teal-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-1 md:space-y-2 text-gray-300 text-xs md:text-sm">
              <li>Lake Austin Hydrilla Removal</li>
              <li>Austin Lake Weed Removal</li>
              <li>Eurasian Watermilfoil Removal</li>
              <li>Aquatic Vegetation Management</li>
              <li>Lake Management</li>
              <li>Lake Cleaning</li>
              <li>Lake Weed Removal</li>
              <li>Aquatic Vegetation Removal</li>
              <li>Nuisance Vegetation Removal</li>
              <li>Exotic Invasive Vegetation Removal</li>
              <li>Invasive Lake Vegetation Removal</li>
              <li>TPWD Permit Assistance</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400 text-xs md:text-sm">
            © 2025 Captain Home Services. All rights reserved. | Licensed & Insured | Austin, Texas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;