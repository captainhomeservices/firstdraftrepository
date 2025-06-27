import React from 'react';
import { Anchor, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-8 w-8 text-teal-400" />
              <span className="font-bold text-xl">Captain Home Services</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional aquatic invasive vegetation removal in Austin, Texas. We pull lake weeds by the roots and dispose of them properly so your shoreline stays clear, beautiful, and healthy.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300">(737) 300-0933</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300">captainhomeservices@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-teal-400" />
                <span className="text-gray-300">Austin, Texas</span>
              </div>
            </div>
          </div>

{/* Quick Links */}
<div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/how-it-works" className="hover:text-teal-400 transition-colors">How It Works</a></li>
              <li><a href="/permitting" className="hover:text-teal-400 transition-colors">Permitting</a></li>
              <li><a href="/pricing" className="hover:text-teal-400 transition-colors">Pricing</a></li>
              <li><a href="/blog" className="hover:text-teal-400 transition-colors">Captain's Log</a></li>
              <li><a href="/contact" className="hover:text-teal-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Lake Austin Hydrilla Removal</li>
              <li>Austin Lake Weed Removal</li>
              <li>Eurasian Watermilfoil Removal</li>
              <li>Aquatic Vegetation Management</li>
              <li>Lake Management</li>
              <li>Lake cleaning</li>
              <li>Lake Weed Removal</li>
              <li>Aqautic Vegetation Removal</li>
              <li>Nuissance Vegetation Removal</li>
              <li>Exotic Invasive Vegetation Removal</li>
              <li>Invasive Lake Vegetation Removal</li>
              <li>TPWD Permit Assistance</li>
            </ul>
          </div>

          
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-400">
            © 2025 Captain Home Services. All rights reserved. | Licensed & Insured | Austin, Texas
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;