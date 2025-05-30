import React from 'react';
import { motion } from 'framer-motion';

type AboutProps = {
  darkMode: boolean;
};

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <div className="container text-2xl mx-auto px-4 md:px-8">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            <span className={darkMode ? "text-teal-400" : "text-green-600"}>Who I Am</span>
          </h3>
          <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
             I'm a passionate Full-Stack Developer with a strong focus on creating intuitive, responsive, and real-world web applications. I enjoy bringing ideas to life through clean code, modern UI, and scalable backend systems. Whether it's building from scratch or refining existing features, I love solving problems that make the user experience smoother and more impactful.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-gray-600 dark:text-gray-300">
            I specialize in the MERN stack, and have hands-on experience developing apps. My approach combines continuous learning, attention to detail, and a deep enthusiasm for building meaningful digital products.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
             When I'm not coding, you can find me exploring new technologies, 
, or enjoying the outdoors. 
          I believe in continuous learning and staying up-to-date with the 
          latest trends in web development.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">
            <span className={darkMode ? "text-teal-400" : "text-green-600"}>What I Do</span>
          </h3>
          
          <div className="space-y-6">
            {[
              {
                title: 'Frontend Development',
                description: 'Building responsive web applications with modern frameworks and libraries.',
              },
              {
                title: 'Backend Development',
                description: 'Creating robust and scalable server-side applications and APIs.',
              },
              {
                title: 'UI/UX Design',
                description: 'Designing intuitive user interfaces and engaging user experiences.',
              },
              {
                title: 'Technical Consultation',
                description: 'Providing expert advice on technology stack and architecture decisions.',
              },
            ].map((item, index) => (
              <div key={index} className="flex">
                <div className={`mt-1 mr-4 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full ${
                  darkMode ? 'bg-teal-900 text-teal-400' : 'bg-green-100 text-green-600'
                }`}>
                  <span className="font-bold">{index + 1}</span>
                </div>
                <div>
                  <h4 className="text-xl font-medium mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;