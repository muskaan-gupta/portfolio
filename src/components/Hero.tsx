import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

type HeroProps = {
  darkMode: boolean;
};

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <div className="relative h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className={darkMode ? "text-teal-400" : "text-green-600"}>Muskan Gupta</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-4">
            <TypeAnimation
              sequence={[
                2000,
                'Software Engineer',
                2000,
                'Full-Stack Developer',
                2000,
                'Debugger',
                2000,
                'Problem Solver',
                2000,
                'Student',
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className={darkMode ? "text-gray-300" : "text-gray-800"}
            />
          </h2>
          <p className="text-lg mb-8 max-w-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I'm a passionate Full-Stack Developer crafting modern, scalable web applications with clean code, intuitive design, and real-world impact.

          </p>
          <div className="flex gap-4">
            <a href="#projects" className="btn btn-primary ">
              View Projects
            </a>
            <a href="#resume" className="btn btn-outline">
              View Resume
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full overflow-hidden  dark:border-teal-400">
              <img 
                src="/avtar.jpeg" 
                alt="Muskan" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
      
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={darkMode ? "text-teal-400" : "text-green-600"}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;