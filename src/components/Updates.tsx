import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';

type UpdatesProps = {
  darkMode: boolean;
};

const Updates: React.FC<UpdatesProps> = ({ darkMode }) => {
  const updates = [
    {
      title: 'Launched New Project',
      date: 'June 15, 2023',
      category: 'Project',
      description: 'Successfully deployed a new e-commerce platform for a client. Built with React, Node.js, and MongoDB.',
    },
    {
      title: 'Spoke at React Conference 2023',
      date: 'May 22, 2023',
      category: 'Event',
      description: 'Presented a talk on "Advanced State Management in React" at the annual React Conference.',
    },
    {
      title: 'Published Article on Medium',
      date: 'April 10, 2023',
      category: 'Publication',
      description: 'Published an in-depth article about microservices architecture and best practices.',
    },
    {
      title: 'Completed AWS Certification',
      date: 'March 5, 2023',
      category: 'Achievement',
      description: 'Earned the AWS Certified Solutions Architect certification after months of preparation.',
    },
    {
      title: 'Joined Open Source Project',
      date: 'February 18, 2023',
      category: 'Contribution',
      description: 'Started contributing to a popular open-source JavaScript library as a core maintainer.',
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
        Updates
      </motion.h2>
      
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-6">
          {updates.map((update, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-lg transition-all ${
                darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white shadow-md hover:shadow-lg'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${
                  darkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-green-100 text-green-600'
                }`}>
                  <Bell size={20} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{update.title}</h3>
                    <div className="flex items-center mt-2 sm:mt-0">
                      <Calendar size={16} className={darkMode ? "text-teal-400" : "text-green-600"} />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">{update.date}</span>
                    </div>
                  </div>
                  
                  <span className={`inline-block text-sm px-3 py-1 rounded-full mb-3 ${
                    darkMode ? 'bg-teal-900/30 text-teal-400' : 'bg-green-100 text-green-600'
                  }`}>
                    {update.category}
                  </span>
                  
                  <p className="text-gray-600 dark:text-gray-300">{update.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;