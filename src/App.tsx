import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Updates from './components/Updates';

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300`}>
      <button 
        onClick={() => setDarkMode(!darkMode)} 
        className={`fixed right-4 top-4 z-50 p-3 rounded-full ${darkMode ? 'bg-blue-900 text-green-400' : 'bg-blue-100 text-green-600'} transition-all duration-300 shadow-lg`}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={15} /> : <Moon size={15} />}
      </button>
      
      <div className="flex w-full max-w-full overflow-x-hidden">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:block">
          <Sidebar darkMode={darkMode} />
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden fixed right-4 top-16 z-50 p-3 rounded-full bg-green-500 text-green-900 "
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-4 flex flex-col gap-1">
            <span className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block h-0.5 w-full bg-current transform transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <MobileMenu 
            darkMode={darkMode} 
            onClose={() => setIsMobileMenuOpen(false)}
          />
        )}
        
        {/* Main content */}
        <main className="flex-1 md:ml-64 transition-all duration-300 w-full max-w-full">
          <section id="home" className="min-h-screen">
            <Hero darkMode={darkMode} />
          </section>
          
          <section id="about" className="min-h-screen py-20">
            <About darkMode={darkMode} />
          </section>
          
          <section id="skills" className="min-h-screen py-20">
            <Skills darkMode={darkMode} />
          </section>
          
          <section id="experience" className="min-h-screen py-20">
            <Experience darkMode={darkMode} />
          </section>
          
          <section id="projects" className="min-h-screen py-20">
            <Projects darkMode={darkMode} />
          </section>
          
          <section id="education" className="min-h-screen py-20">
            <Education darkMode={darkMode} />
          </section>
          
          <section id="updates" className="min-h-screen py-20">
            <Updates darkMode={darkMode} />
          </section>
          
          <section id="resume" className="min-h-screen py-20">
            <Resume darkMode={darkMode} />
          </section>
          
          <section id="contact" className="min-h-screen py-20">
            <Contact darkMode={darkMode} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;