import React from 'react';
import { 
  User, Briefcase, Code, GraduationCap, 
  FileText, Mail, Home, Bell, Folder, X
} from 'lucide-react';
import { FaTwitter, FaLinkedin, FaGithub, FaDribbble, FaMedium } from 'react-icons/fa';

type MobileMenuProps = {
  darkMode: boolean;
  onClose: () => void;
};

const socialLinks = [
  { icon: <FaTwitter size={18} />, url: 'https://twitter.com', label: 'Twitter' },
  { icon: <FaLinkedin size={18} />, url: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <FaGithub size={18} />, url: 'https://github.com', label: 'GitHub' },
  { icon: <FaDribbble size={18} />, url: 'https://dribbble.com', label: 'Dribbble' },
  { icon: <FaMedium size={18} />, url: 'https://medium.com', label: 'Medium' },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ darkMode, onClose }) => {
  return (
    <div 
      className={`fixed inset-0 z-40 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      } transition-colors duration-300 p-6 flex flex-col items-center overflow-y-auto max-w-full`}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6"
        aria-label="Close menu"
      >
        <X size={24} />
      </button>
      
      <div className="mt-16 flex flex-col items-center w-full max-w-xs mx-auto">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-green-500 dark:border-teal-400">
          <img 
            src="/avtar.png" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-xl font-bold">Your Name</h2>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
           Software Developer
        </p>
      </div>

      {/* Navigation */}
      <nav className="mt-8 w-full max-w-xs mx-auto">
        <ul className="space-y-4">
          {[
            { icon: <Home size={20} />, label: 'Home', href: '#home' },
            { icon: <User size={20} />, label: 'About Me', href: '#about' },
            { icon: <Folder size={20} />, label: 'Portfolio', href: '#projects' },
            { icon: <Code size={20} />, label: 'Skills', href: '#skills' },
            { icon: <Briefcase size={20} />, label: 'Experience', href: '#experience' },
            { icon: <GraduationCap size={20} />, label: 'Education', href: '#education' },
            { icon: <Bell size={20} />, label: 'Updates', href: '#updates' },
            { icon: <FileText size={20} />, label: 'Resume', href: '#resume' },
            { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
          ].map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="flex items-center gap-4 py-3 text-lg font-medium w-full"
                onClick={() => {
                  onClose();
                }}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-4 w-full">
        {socialLinks.map((social) => (
          <a 
            key={social.label}
            href={social.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors
              ${darkMode 
                ? 'bg-gray-800 text-teal-400 hover:bg-teal-500 hover:text-white' 
                : 'bg-green-100 text-green-600 hover:bg-green-500 hover:text-white'
            }`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;