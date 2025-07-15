import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Layout wrapper component
  const PageLayout = ({ children }: { children: React.ReactNode }) => (
      <div className={`min-h-screen transition-colors duration-300 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="pt-16"> {/* Add padding-top to account for fixed navigation */}
          {children}
        </main>

        {/* Footer */}
        <footer className={`py-8 ${
            darkMode ? 'bg-gray-900 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-200'
        } transition-colors duration-300`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                © 2025 Mohamed Amine MACHERKI . Tous droits réservés.
              </p>
              <p className={`text-sm mt-2 ${
                  darkMode ? 'text-gray-500' : 'text-gray-500'
              }`}>
                Développé avec React, TypeScript et Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
  );

  return (
      <Router>
        <Routes>
          {/* Home page - Hero section */}
          <Route path="/" element={
            <PageLayout>
              <Hero darkMode={darkMode} />
            </PageLayout>
          } />

          {/* About page */}
          <Route path="/about" element={
            <PageLayout>
              <About darkMode={darkMode} />
            </PageLayout>
          } />

          {/* Experience page */}
          <Route path="/experience" element={
            <PageLayout>
              <Experience darkMode={darkMode} />
            </PageLayout>
          } />

          {/* Skills page */}
          <Route path="/skills" element={
            <PageLayout>
              <Skills darkMode={darkMode} />
            </PageLayout>
          } />

          {/* Education page */}
          <Route path="/education" element={
            <PageLayout>
              <Education darkMode={darkMode} />
            </PageLayout>
          } />

          {/* Projects page */}
          <Route path="/projects" element={
            <PageLayout>
              <Projects darkMode={darkMode} />
            </PageLayout>
          } />

          {/* Achievements page */}
          <Route path="/achievements" element={
            <PageLayout>
              <Achievements darkMode={darkMode} />
            </PageLayout>
          } />

          {/* Contact page */}
          <Route path="/contact" element={
            <PageLayout>
              <Contact darkMode={darkMode} />
            </PageLayout>
          } />

          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
  );
}

export default App;