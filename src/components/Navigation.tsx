import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector'; // Assuming LanguageSelector path is correct
import { useLanguage } from '../contexts/LanguageContext'; // Assuming useLanguage path is correct

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: 'hero', label: t('nav.home'), path: '/' },
    { id: 'about', label: t('nav.about'), path: '/about' },
    { id: 'experience', label: t('nav.experience'), path: '/experience' },
    { id: 'skills', label: t('nav.skills'), path: '/skills' },
    { id: 'education', label: t('nav.education'), path: '/education' },
    { id: 'projects', label: t('nav.projects'), path: '/projects' },
    { id: 'achievements', label: t('nav.achievements'), path: '/achievements' },
    { id: 'contact', label: t('nav.contact'), path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu when navigating
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          darkMode
              ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700'
              : 'bg-white/95 backdrop-blur-md border-b border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-lg ${
                  darkMode ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'
              }`}>
                MA
              </div>
              <span className={`hidden sm:block font-semibold text-lg ${
                  darkMode ? 'text-white' : 'text-gray-900'
              }`}>
              Med Amine Macherki
            </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                  <Link
                      key={item.id}
                      to={item.path}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                          isActive(item.path)
                              ? 'bg-blue-600 text-white'
                              : darkMode
                                  ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                  >
                    {item.label}
                  </Link>
              ))}
              <LanguageSelector darkMode={darkMode} />
              <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                      darkMode
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>

            {/* Dark Mode Toggle and Mobile Menu Button for Mobile */}
            <div className="flex items-center space-x-4 md:hidden">
              <LanguageSelector darkMode={darkMode} />
              <button
                  onClick={toggleDarkMode}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                      darkMode
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                      darkMode
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
              <div className={`md:hidden border-t ${
                  darkMode ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navItems.map((item) => (
                      <Link
                          key={item.id}
                          to={item.path}
                          onClick={() => setIsMenuOpen(false)} // Close menu on click
                          className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                              isActive(item.path)
                                  ? 'bg-blue-600 text-white'
                                  : darkMode
                                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                          }`}
                      >
                        {item.label}
                      </Link>
                  ))}
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};