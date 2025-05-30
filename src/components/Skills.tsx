import React from 'react';
import { motion } from 'framer-motion';
import SkillsSphere from './SkillsSphere';



type SkillsProps = {
  darkMode: boolean;
};

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills = [
    { name: 'JavaScript', icon:'JS' },
    { name: 'React', icon: '⚛️' },

    { name: 'Angular', icon: '🅰️' },

    { name: 'Tailwind CSS', icon: '🌊' },
    { name: 'Express.js', icon: 'EX' },
    { name: 'Django', icon: '🐍' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: 'Node' },
    
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐋' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Git', icon: '📚' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: 'CSS' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
  ];

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Vue', 'Angular', 'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Python', 'Java', 'PHP', 'Express', 'Django', 'Spring Boot']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      title: 'DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'CI/CD', 'Jenkins']
    },
    {
      title: 'Tools',
      skills: ['Git', 'Webpack', 'Vite', 'Jest', 'Cypress', 'Postman']
    },
    {
      title: 'Mobile',
      skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Ionic']
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-8">
      
      <div className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              <span className={darkMode ? "text-teal-400" : "text-green-600"}>Technical Expertise</span>
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
              Main area of my expertise is front-end development (client side of the web). 
              I'm proficient with HTML, CSS, JavaScript (TypeScript), building small and medium 
              web apps with React, Angular, Vue, and creating custom components and interactive layouts.
            </p>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I also have experience with back-end development using Node.js, Express, and database 
              technologies like MongoDB and PostgreSQL. I'm familiar with cloud platforms such as AWS and 
              containerization with Docker.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-[650px]"
          >
            <SkillsSphere skills={skills} darkMode={darkMode} />
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          className="mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                }`}
              >
                <h4 className={`text-xl font-semibold mb-4 ${
                  darkMode ? 'text-teal-400' : 'text-green-600'
                }`}>
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode 
                          ? 'bg-teal-900/30 text-teal-400' 
                          : 'bg-green-100 text-green-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
      