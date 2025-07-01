import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Permitting', href: '/permitting' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    'Lake Austin Hydrilla Removal',
    'Eurasian Watermilfoil Removal',
    'Aquatic Vegetation Management',
    'Lake Weed Removal',
    'TPWD Permit Assistance'
  ];

  const isActive = (path: string) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo - Much Larger */}
          <Link to="/" onClick={scrollToTop} className="flex items-center space-x-4 group">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-teal-50 to-blue-50 flex-shrink-0 ring-2 ring-teal-100 group-hover:ring-teal-200 transition-all duration-300">
              <img 
                src="/Captain home services logo.PNG" 
                alt="Captain Home Services Logo" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-2xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Captain Home Services
              </span>
              <p className="text-sm text-gray-600 font-medium">Austin Lake Management</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={scrollToTop}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="flex items-center px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200"
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {isDropdownOpen && (
                  <div
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                  >
                    {services.map((service, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 cursor-pointer transition-colors duration-200"
                      >
                        {service}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {navigation.slice(4).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={scrollToTop}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link
                to="/contact"
                onClick={scrollToTop}
                className="ml-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600 p-2 rounded-lg hover:bg-teal-50 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-4 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-md'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                }`}
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile Services */}
            <div className="pt-2 border-t border-gray-100">
              <p className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Our Services</p>
              {services.map((service, index) => (
                <div
                  key={index}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                >
                  {service}
                </div>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => {
                  setIsOpen(false);
                  scrollToTop();
                }}
                className="block w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg text-center font-semibold transition-all duration-200 shadow-md"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;