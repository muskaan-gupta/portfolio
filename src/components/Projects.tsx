import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

type ProjectsProps = {
  darkMode: boolean;
};

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);
  
  const projects = [
    {
      title: 'CraftedNest',
      category: 'Web App',
      description: "An online marketplace that bridges the gap between passionate local artisans and customers seeking unique, handcrafted goods. Built using Next.js, the platform delivers a fast, seamless, and mobile-friendly experience, empowering creators to showcase and sell their beautiful creations with ease.",
      technologies:  ["Next.js", "React", "Tailwind CSS", "Firebase"],
      videoUrl: 'craftednest.mp4',
      liveUrl: 'https://crafted-nest.vercel.app/',
      githubUrl: 'https://github.com/muskaan-gupta/CraftedNest',
    },
    
    {
      title: 'QuizWhiz',
      category: 'Mobile App',
      description: "It is an interactive online quiz game that offers users a fun way to test their knowledge across categories like Brain Teasers, History, Coding, and Science. It features a clean and responsive UI built using modern web technologies. The project aims to combine learning with engagement in an accessible format.",
      technologies: ["React", "Tailwind CSS", "Context API"],
      videoUrl: '/quizwhiz.mp4',
      liveUrl: "https://quizwhiz-mu.vercel.app/",
      githubUrl: "https://github.com/muskaan-gupta/QuizWhiz",
    },
    {
      title: 'Fitness Tracker',
      category: 'Mobile App',
      description: 'A fitness application for tracking workouts, nutrition, and progress over time.',
      technologies: ['Flutter', 'Firebase', 'Google Fit API'],
      videoUrl: '/fitness.mp4',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
    },
    {
      title: 'FlashLearn',
      category: 'Web App',
      description: "FlashLearn is a responsive flashcard app that helps users study using custom flip cards. Users can manage profiles, create, like, delete cards, and explore public flashcards anonymously.It’s a clean, intuitive interface designed to make studying engaging and organized.",
      technologies:  ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
      videoUrl: '/Flashlearn.mp4',
      liveUrl: 'https://app-flashlearn.onrender.com/',
      githubUrl: 'https://github.com/muskaan-gupta/Flashcard-Learning-Tool',
    },
    {
      title: 'Learning Managment System(LMS)',
      category: 'Web App',
      description: "The Learning Management System (LMS) is a full-stack web application for managing and delivering educational content. It supports user and admin roles, course creation, enrollment, subscription management, and analytics.",
      technologies:  ["React.js", "MongoDB", "Tailwind CSS", "Firebase", "Cloudnary","Redux", "Node.js", "Express.js"],
      videoUrl: 'LMS.mp4',
      liveUrl: '#',
      githubUrl: 'https://github.com/muskaan-gupta/Learning-Management-System',
    },
    
    {
      title: 'Customer Churn Analysis',
      category: 'ML',
      description: "Performed exploratory data analysis and built a logistic regression model to predict customer churn, uncovering key factors influencing customer retention.",
      technologies:  ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      videoUrl: '#',
      liveUrl: '#',
      githubUrl: 'https://github.com/muskaan-gupta/Customer-Churn-Analysis-',
    },
    {
      title: 'Sales Report- Dashboard(Power BI)',
      category: 'Data Analysis',
      description: "Created an interactive sales performance dashboard using Power BI, Power Query, and DAX to visualize revenue trends, customer segments, and product growth metrics.",
      technologies:  ["Power BI", "Power Query", "DAX", "Excel"],
      videoUrl: 'Dashboard.mp4',
      liveUrl: '#',
      githubUrl: 'https://github.com/muskaan-gupta/Sales-Report',
    },
    {
      title: '"Weather Dashboard"',
      category: 'CMS',
      description: "A beautiful weather dashboard that displays current weather and forecasts. Features include location search and weather maps.",
      technologies: ["JavaScript", "OpenWeather API", "HTML", "CSS"],
      videoUrl: '/weather.mp4',
      liveUrl: "https://weather-today-three.vercel.app/",
      githubUrl: "https://github.com/muskaan-gupta/Weather-today",
    },
        {
      title: 'Netflix Clone',
      category: 'Web App',
      description: "A Netflix clone built with React and Tailwind CSS, featuring a responsive design, user authentication, and a movie browsing experience. Users can explore a wide range of movies and TV shows, complete with trailers and detailed information.",
      technologies: ["JavaScript", "HTML", "CSS"],
      videoUrl: '/netflix.mp4',
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/muskaan-gupta/Netflix-clone',
    },
    
    {
      title: 'TalkHub',
      category: 'ML',
      description: "Developing an AI voice assistant that provides real-time, context-aware responses using natural language processing to enhance user interaction and productivity.",
      technologies: ["Google Speech APIs", "OpenAI GPT","Node.js","Express", "MongoDB","JavaScript", "HTML", "CSS"],
      videoUrl: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/53b47869571929.5b8609caeabed.gif',
      liveUrl: 'https://github.com/muskaan-gupta/talkhub',
      githubUrl: "https://github.com/muskaan-gupta/talkhub",
    },
    {
      title: 'Machine-and-Deep-Learning-Projects',
      category: 'ML',
      description: "Turning raw data into smart predictions: Regression, Classification & NLP in action.",
      technologies: ["Python", "Numpy","Pandas","Matplotlib", "Scikit-learn","TensorFlow", "Google colab"],
      videoUrl: 'https://rubikscode.net/wp-content/uploads/2022/08/Was-kommt-auf-uns-zu.gif',
      liveUrl: 'https://github.com/muskaan-gupta/Machine-and-Deep-Learning-Projects',
      githubUrl: "https://github.com/muskaan-gupta/Machine-and-Deep-Learning-Projects",
    },
    
  ];
  
  const filters = ['All', 'Web App', 'Mobile App', 'ML', 'Data Analysis'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
      
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeFilter === filter
                ? darkMode 
                  ? 'bg-teal-500 text-black hover:bg-teal-600'
                  : 'bg-green-500 text-black'
                : darkMode
                  ? 'bg-gray-800 text-teal-500 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
       {filteredProjects.map((project, index) => (
  <motion.div
    key={index}
    className="project-card rounded-xl overflow-hidden relative group flex flex-col"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
      onClick={() => {
              // Only toggle on small screens
              if (window.innerWidth < 768) {
                setActiveOverlay(activeOverlay === index ? null : index);
              }
            }}
  >
    {/* Video Background */}
    <div className="relative h-60 overflow-hidden">
      <video 
        className="project-image w-full h-full object-cover transition-transform duration-500"
        src={project.videoUrl}
        autoPlay
        muted
        loop
      />
      {/* Overlay: Only description and technologies */}
     <div
                className={
                  `project-overlay absolute inset-0 bg-black bg-opacity-70
                  transition-opacity duration-300 flex flex-col justify-center items-center p-6
                  opacity-0 group-hover:opacity-100
                  ` +
                  // Show overlay if active on mobile
                  (activeOverlay === index ? ' !opacity-100' : '')
                }
                style={{ cursor: 'pointer' }}
              >
        <p className="text-sm text-gray-300 text-center mb-4">{project.description}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech, i) => (
            <span 
              key={i} 
              className={`text-xs px-2 py-1 rounded-full ${
                darkMode ? 'bg-teal-900/50 text-teal-300' : 'bg-green-100/80 text-green-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    {/* Project title, category, and links always visible */}
    <div className={`p-4 flex flex-col gap-2 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <h3 className="font-bold">{project.title}</h3>
      <div className="flex items-center justify-between">
        <p className={`text-sm ${darkMode ? 'text-teal-400' : 'text-green-600'}`}>{project.category}</p>
        <div className="flex gap-2">
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`p-2 rounded-full ${
              darkMode ? 'bg-teal-500 hover:bg-teal-600' : 'bg-green-500 hover:bg-green-600'
            } text-white transition-colors duration-300`}
            aria-label="View live project"
          >
            <ExternalLink size={18} />
          </a>
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-900 text-white transition-colors duration-300"
            aria-label="View GitHub repository"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
))}
      </div>
    </div>
  );
};

export default Projects;
