import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

type ExperienceProps = {
  darkMode: boolean;
};

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      period: 'Jan 2021 - Present',
      description: 'Lead the frontend development team in building scalable web applications using React and TypeScript. Implemented responsive designs, improved performance, and mentored junior developers.',
      achievements: [
        'Reduced loading time by 40% through code optimization',
        'Implemented a component library used across 5 projects',
        'Led the migration from JavaScript to TypeScript',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'WebSolutions Group',
      period: 'Mar 2018 - Dec 2020',
      description: 'Developed responsive web applications using React, Redux, and SASS. Collaborated with UX designers to implement user interfaces and worked with backend developers to integrate APIs.',
      achievements: [
        'Built a real-time dashboard for monitoring system metrics',
        'Contributed to the company\'s design system',
        'Implemented automated testing with Jest and Cypress',
      ],
    },
    {
      title: 'Junior Web Developer',
      company: 'Digital Creatives',
      period: 'Jun 2016 - Feb 2018',
      description: 'Created responsive websites using HTML, CSS, and JavaScript. Assisted in the development of WordPress themes and plugins. Worked closely with designers to implement pixel-perfect designs.',
      achievements: [
        'Developed 20+ client websites',
        'Learned and implemented modern JavaScript frameworks',
        'Improved site performance across client projects',
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 md:px-8">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>
      
      <div className="mt-12">
        <div className="relative pl-8 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="timeline-connector"></div>
              )}
              
              {/* Timeline node */}
              <div className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center -translate-x-5 ${
                darkMode ? 'bg-teal-900 text-teal-400' : 'bg-green-100 text-green-600'
              }`}>
                <Briefcase size={20} />
              </div>
              
              <div className={`ml-8 p-6 rounded-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
              }`}>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0 ${
                    darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-green-100 text-green-600'
                  }`}>
                    {exp.period}
                  </span>
                </div>
                <h4 className={`text-lg font-medium mb-4 ${
                  darkMode ? 'text-teal-400' : 'text-green-600'
                }`}>
                  {exp.company}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                
                <h5 className="font-medium mb-2">Key Achievements:</h5>
                <ul className="list-disc pl-5 space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-600 dark:text-gray-300">{achievement}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;