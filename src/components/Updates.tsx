import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar } from 'lucide-react';

type UpdatesProps = {
  darkMode: boolean;
};

const Updates: React.FC<UpdatesProps> = ({ darkMode }) => {
  const updates = [
    {
  title: 'Top 30% in LeetCode Contest',
  date: 'August 2025',
  category: 'Competitive Programming',
  description: 'Achieved a ranking within the top 30% of participants in a LeetCode contest, demonstrating consistent coding practice and algorithmic proficiency.',
},
    {
  title: 'Learned OpenAI Integration',
  date: 'August 2025',
  category: 'Technical Skills',
  description: 'Acquired hands-on experience in integrating OpenAI APIs into applications, enabling AI-powered features such as chatbots, text generation, and data analysis.',
},
   {
  title: 'Cleared Flipkart GRiD 7.0 & Adobe 2025 Assessments (Round 2)',
  date: 'July 2025',
  category: 'Career Milestone',
  description: 'Successfully cleared assessment rounds for Flipkart and Adobe recruitment processes, showcasing strong problem-solving and technical skills.',
},
    {
      title: '700+ Problem Soved on LeetCode and HackerRank',
      date: 'March 2025',
      category: 'Achievement',
      description: 'Achieved a significant milestone by solving over 500 problems on LeetCode, enhancing my problem-solving skills and algorithmic thinking. This accomplishment has prepared me for competitive programming and technical interviews.',
    },
    {
      title: 'Started learning Machine Learning',
      date: 'June 2025',
      category: 'Personal Development',
      description: 'Began a new journey into machine learning, focusing on Python libraries like TensorFlow and scikit-learn. The goal is to build predictive models and explore data science applications.',
    },
    {
      title: 'Developed a new project - CraftedNest',
      date: 'March 2025',
      category: 'project',
      description: 'Initiated a new project called CraftedNest, a platform for handmade crafts and artisan goods. The project aims to connect local artisans with customers looking for unique, handcrafted items using Next.js and Tailwind CSS.',
    },
    {
      title: 'Developed a new Application FitLife-AI',
      date: 'January  2025',
      category: 'project',
      description: 'Launched FitLife-AI, a health and fitness application that provides personalized workout and nutrition plans using AI algorithms. The app is designed to help users achieve their fitness goals with tailored recommendations.',
    },
    {
      title: 'Launched Personal Portfolio Website',
      date: 'May 30, 2025',
      category: 'Project',
      description: 'Created a new personal portfolio website to showcase my projects and skills. Built with React.js and Tailwind CSS for a modern look.',
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
