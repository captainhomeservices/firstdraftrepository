import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Permitting', href: '/permitting' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    scrollToTop();
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    scrollToTop();
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-3 flex-shrink-0 min-w-0">
            <img
              src="/captain logo green  copy copy.png"
              alt="Captain Home Services Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain flex-shrink-0 rounded-full transition-transform duration-200 hover:scale-105"
            />
            <div className="min-w-0">
              <span className="font-bold text-xl md:text-2xl text-gray-900 hidden sm:block truncate tracking-tight">
                Captain Home Services
              </span>
              <span className="font-bold text-base text-gray-900 sm:hidden block truncate">
                Captain Home Services
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.slice(0, -1).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={scrollToTop}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-[#00B47B]'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={scrollToTop}
              className="ml-4 px-6 py-2.5 bg-[#00B47B] hover:bg-[#009966] text-white rounded-lg text-sm font-semibold transition-all duration-200 transform hover:scale-105 shadow-sm hover:shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#00B47B] focus:outline-none focus:text-[#00B47B] p-2 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center h-20 px-4 border-b">
            <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-2">
              <img
                src="/captain logo green  copy copy.png"
                alt="Captain Home Services Logo"
                className="h-10 w-10 object-contain rounded-full"
              />
              <span className="font-bold text-lg text-gray-900">Captain Home Services</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-[#00B47B] focus:outline-none p-2 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="px-4 py-6 space-y-2 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-[#00B47B]'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-gray-200 mt-4">
              <a
                href="tel:(737)-300-9033"
                className="block w-full bg-[#00B47B] hover:bg-[#009966] text-white text-center px-4 py-3 rounded-lg text-lg font-semibold transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                Call (737) 300-9033
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;