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
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-2 flex-shrink-0">
            <img 
              src="/captain home logo wheel circle.webp" 
              alt="Captain Home Services Logo" 
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
            <span className="font-bold text-lg md:text-xl text-gray-900 hidden sm:block">
              Captain Home Services
            </span>
            <span className="font-bold text-base text-gray-900 sm:hidden">
              Captain Home
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={scrollToTop}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'bg-teal-50 text-teal-700'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex justify-between items-center h-16 px-4 border-b">
            <Link to="/" onClick={handleLinkClick} className="flex items-center space-x-2">
              <img 
                src="/captain home logo wheel circle.webp" 
                alt="Captain Home Services Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-lg text-gray-900">Captain Home</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none p-2"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="px-4 py-6 space-y-4 overflow-y-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-4 py-3 rounded-md text-lg font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50'
                }`}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-6 border-t border-gray-200">
              <a
                href="tel:(737)-300-9033"
                className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center px-4 py-3 rounded-md text-lg font-semibold transition-colors duration-200"
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