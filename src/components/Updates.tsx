import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';

type UpdatesProps = {
  darkMode: boolean;
};

const Updates: React.FC<UpdatesProps> = ({ darkMode }) => {
  const updates = [
    {
      title: 'Started a new project -CraftedNest',
      date: 'December 5, 2024',
      category: 'project',
      description: 'Initiated a new project called CraftedNest, a platform for handmade crafts and artisan goods. The project aims to connect local artisans with customers looking for unique, handcrafted items using Next.js and Tailwind CSS.',
    },
    {
      title: 'Completed React Native Course',
      date: 'May 15, 2025',
      category: 'Education',
      description: 'Finished an advanced course on React Native, enhancing my skills in mobile app development.',
    },
    {
      title: 'Attended React Conference 2025',
      date: 'April 20, 2025',
      category: 'Event',
      description: 'Participated in the annual React Conference, learning about the latest trends and best practices in React development.',

    },
    {
      title: 'Launched Personal Portfolio Website',
      date: 'May 30, 2025',
      category: 'Project',
      description: 'Created a new personal portfolio website to showcase my projects and skills. Built with React.js and Tailwind CSS for a modern look.',
    },
    {
      title: 'Published Article on Medium',
      date: 'April 10, 2023',
      category: 'Publication',
      description: 'Published an in-depth article about microservices architecture and best practices.',
    },
    {
      title: 'Completed Agentblazer Champion Certification',
      date: 'May, 2025',
      category: 'Achievement',
      description: 'This milestone marks my achievement in mastering Foundational AI agent development techniques and best practices from Agentforce.',
    },
    {
      title: 'Joined Open Source Project',
      date: 'November 10, 2024',
      category: 'Contribution',
      description: 'Became a contributor to an open-source project focused on improving accessibility in web applications. Working on enhancing ARIA support and keyboard navigation.',
    },
    {
      title: 'Launched New Project - E-commerce Platform',
      date: 'June 15, 2024',
      category: 'Project',
      description: 'Successfully deployed a new e-commerce platform for a client. Built with React, Node.js, and MongoDB.',
    }
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