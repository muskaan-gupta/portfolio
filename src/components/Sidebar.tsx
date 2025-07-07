import React from 'react';
import {
  User, Briefcase, Code, GraduationCap,
  FileText, Mail, Home, Bell, Folder
} from 'lucide-react';
// Import react-icons for social icons
import { FaLinkedin, FaGithub, FaHackerrank  } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

type SidebarProps = {
  darkMode: boolean;
};

const socialLinks = [
  { icon: <FaLinkedin size={18} />, url: 'https://www.linkedin.com/in/muskan-gupta-858753252/', label: 'LinkedIn' },
  { icon: <FaGithub size={18} />, url: 'https://github.com/muskaan-gupta', label: 'GitHub' },
  { icon: <SiLeetcode size={20} />, url: 'https://leetcode.com/u/muskan_gupta67/', label: 'LeetCode' },
   { icon: <FaHackerrank size={18} />, url: 'https://www.hackerrank.com/profile/CSAI_1520110', label: 'HackerRank' },
  { icon: <Mail size={18} />, url: 'mailto:muskangupta7414@gmail.com', label: 'Mail' },
];

const Sidebar: React.FC<SidebarProps> = ({ darkMode }) => {
  return (
    <div
      className={`fixed h-screen w-64 ${
        darkMode ? 'bg-gray-800' : 'bg-green-50'
      } transition-colors duration-300 flex flex-col py-6 px-2 shadow-lg overflow-y-auto`}
    >
      <div className="text-center mb-8">
        <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden  dark:border-teal-400">
          <img
            src="/avtar.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-2 text-xl font-bold">Muskan Gupta</h2>
        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Software Developer
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-3 mb-2">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors
              ${darkMode
                ? 'bg-gray-700 text-teal-400 hover:bg-teal-500 hover:text-white'
                : 'bg-green-100 text-green-600 hover:bg-green-500 hover:text-white'
              }`}
            aria-label={social.label}
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* Navigation */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {[
            { icon: <Home size={20} />, label: 'Home', href: '#home' },
            { icon: <User size={20} />, label: 'About Me', href: '#about' },
            { icon: <Folder size={20} />, label: 'Project', href: '#projects' },
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
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                  ${darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-100'
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
