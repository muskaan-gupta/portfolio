import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

type EducationProps = {
  darkMode: boolean;
};

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Pranveer Singh Institute of Technology",
      period: "2022 - 2026",
      Persentage: "8/10 GPA (Till 5th Semester)",
      description: "Specialized in Artificial Intelligence"

    },
    {
      degree: "High School",
      institution: "Kanpur Vidya Mandir Girls Inter College",
      period: "2018 - 2019",
      Persentage: "86.5%",
      description: "Completed comprehensive curriculum with a focus on Mathematics and Science."
    },
    {
      degree: "Intermediate",
      institution: "Kanpur Vidya Mandir Girls Inter College",
      period: "2020-2021",
      Persentage: "80%",
      description: "Completed comprehensive curriculum with a focus on Mathematics and Science."
    },
  ];
  
  const certifications = [
    {
      title: 'AgentBlazer Championship',
      issuer: 'Salesforce',
      date: 'April 2025',
      url: 'https://drive.google.com/file/d/11oA0XRcwolloCu82Kw4_7kb34FgwxCe3/view?usp=sharing',
    },
    {
      title: 'Data Science Essentials with Python',
      issuer: 'Cisco',
      date: 'June 2025',
      url: 'https://drive.google.com/file/d/1xaxq3qAnELC9y-zdfdVj_WeMk8-qXGOt/view?usp=sharing',
    },
    {
      title: ' Objecjt Oriented Programming using Python',
      issuer: 'Infosys',
      date: 'January 2023',
      url: 'https://drive.google.com/file/d/1eOFJYZwVE8oc97TI6BrChbVmhvhEo3vO/view?usp=sharing',
    },
    {
      title: 'C++ Essentials',
      issuer: 'Cisco',
      date: 'June 2025',
      url: 'https://drive.google.com/file/d/1YseU_-NYxnmP_nS3Ul8c4Tzb8GfXGPZ9/view?usp=sharing',
    },
    {
      title: 'React',
      issuer: 'Coursera',
      date: 'August 2024',
      url: 'https://drive.google.com/file',
    },
     {
      title: 'Introduction to Data Science',
      issuer: 'Infosys',
      date: 'August 2024',
      url: 'https://drive.google.com/file/d/1T7wiSDwTSlQTMHPJBs5_gZPDYz092JXt/view?usp=sharing',
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
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <GraduationCap className={darkMode ? "text-teal-400" : "text-green-600"} />
            <span>Academic Background</span>
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full mt-2 md:mt-0 ${
                    darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-green-100 text-green-600'
                  }`}>
                    {edu.period}
                  </span>
                </div>
                <h5 className={`text-lg mb-3 ${darkMode ? 'text-teal-400' : 'text-green-600'}`}>
                  {edu.institution}
                </h5>
                <p className="text-sm text-gray-600 dark:text-white-300 mb-2">
                  <strong>Percentage:</strong> {edu.Persentage}
                </p>
                <p className="text-gray-600 dark:text-white-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <Award className={darkMode ? "text-teal-400" : "text-green-600"} />
            <span>Certifications</span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-5 rounded-lg transition-transform duration-300 hover:-translate-y-1 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white shadow-md hover:shadow-lg'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                  darkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-green-100 text-green-600'
                }`}>
                  <Award size={20} />
                </div>
                <h4 className="text-lg font-bold mb-1">{cert.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{cert.issuer}</p>
                <p className={`text-xs ${darkMode ? 'text-teal-400' : 'text-green-600'}`}>
                  {cert.date}
                </p>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
