import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

type ResumeProps = {
  darkMode: boolean;
};

const Resume: React.FC<ResumeProps> = ({ darkMode }) => {
  return (
    <div className="container mx-auto px-2 md:px-6">
      <div className="mt-12 flex flex-col items-center">
        {/* Header and actions above the preview box */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 w-full max-w-4xl">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
              darkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-green-100 text-green-600'
            }`}>
              <FileText size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-bold">My Resume</h3>
              <p className="text-gray-600 dark:text-gray-300">Updated May 2025</p>
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://drive.google.com/file/d/1ovIKfmZ8p0LHwLgntnqxYRwAQ3MjkaHh/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`btn flex items-center gap-2 ${
                darkMode ? 'btn-outline border-teal-500 text-teal-400' : 'btn-outline'
              }`}
            >
              <Eye size={20} />
              <span>View</span>
            </a>
            <a 
              href="https://drive.google.com/file/d/1ovIKfmZ8p0LHwLgntnqxYRwAQ3MjkaHh/view?usp=sharing" 
              download="Muskan's_Resume.pdf"
              className="btn btn-primary flex items-center gap-2"
            >
              <Download size={20} />
              <span>Download</span>
            </a>
          </div>
        </div>

        {/* Resume preview box */}
        <motion.div
          className={`rounded-lg max-w-4xl w-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg`}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="aspect-[7.5/11] w-full h-full">
            <iframe
              src="https://drive.google.com/file/d/1ovIKfmZ8p0LHwLgntnqxYRwAQ3MjkaHh/preview"
              title="Resume Preview"
              className="w-full h-full"
              allow="autoplay"
              style={{ border: 'none', height: '100%', width: '100%' }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
