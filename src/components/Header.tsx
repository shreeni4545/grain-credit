import React, { useState, useEffect } from 'react';
import { Menu, X, Sprout, Play } from 'lucide-react';

interface HeaderProps {
  onDemoClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onDemoClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'Problem', href: '#problem' },
    { name: 'Solution', href: '#solution' },
    { name: 'Market', href: '#market' },
    { name: 'Product', href: '#product' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 p-2 rounded-lg">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">GrainCredit</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
            <button 
              onClick={onDemoClick}
              className="bg-gradient-to-r from-emerald-600 to-blue-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200 font-medium flex items-center"
            >
              <Play className="mr-2 h-4 w-4" />
              Live Demo
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  onDemoClick();
                  setIsOpen(false);
                }}
                className="w-full mt-4 bg-gradient-to-r from-emerald-600 to-blue-500 text-white px-6 py-2 rounded-full font-medium flex items-center justify-center"
              >
                <Play className="mr-2 h-4 w-4" />
                Live Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;