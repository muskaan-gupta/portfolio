import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

type ExperienceProps = {
  darkMode: boolean;
};

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
     {
      title: 'Software Developer',
      company: 'Rudraksha Wellfare Foundation',
      period: 'July 2025- Currently',
      Location: 'Remote',
      description: "Developed a complete NGO web platform end-to-end, covering requirement analysis, system design, backend development, SQL-based relational database modeling, and cloud deployment. Implemented a scalable client–server architecture with secure APIs, optimized database schemas, and production-ready deployment following the full SDLC process.",
      achievements: [
        "Led end-to-end SDLC execution, delivering the NGO platform from requirement analysis to cloud deployment.",
        "Designed a normalized SQL database schema with proper relationships, ensuring data integrity and scalability.",
        "Built secure and scalable backend APIs using a client–server architecture.",
        "Delivered a fully functional, impact-driven system ready for real-world use.",
      ],
      technologies: ["React.js", "Tailwind CSS", "Node.js", "Express", "SQL","Cloud hosting"]

    },
    {
      title: 'Full Stack Developer',
      company: 'WokGenics ',
      period: 'November 2024- December 2024',
      Location: 'Remote',
      description: "Worked on a project to develop a full-stack web application using React and Node.js. Collaborated with designers and backend developers to create a seamless user experience.",
      achievements: [
        "Led the development of key frontend modules using React and Tailwind CSS, improving UI responsiveness and user engagement",
        "Built scalable backend APIs using Node.js and Express, reducing response times and supporting smooth data handling.",
        "Contributed to deployment and testing, ensuring smooth production releases with minimal bugs",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express", "MongoDB"]
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
                <h5 className="font-medium mt-4 mb-2">Technologies Used:</h5>
                <div className="flex flex-wrap gap-2 mt-2">
  {exp.technologies.map((tech, i) => (
    <span
      key={i}
      className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm
        ${darkMode
          ? 'bg-teal-900/60 text-teal-300'
          : 'bg-green-100 text-green-700 border border-green-200'
        }`}
    >
      {tech}
    </span>
  ))}
</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;