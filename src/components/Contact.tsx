import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Linkedin, Github, Instagram , 
} from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';

type ContactProps = {
  darkMode: boolean;
};

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  

  return (
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <p className="text-lg leading-relaxed mb-8 text-gray-600 dark:text-gray-300">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out using the form or contact me directly through 
            any of the channels below.
          </p>
          
          <div className="space-y-6">
            {[
              { icon: <Mail size={24} />, label: 'Email', value: 'muskangupta7414@gmail.com' },
              { icon: <Phone size={24} />, label: 'Phone', value: '+91 8303741467' },
              { icon: <MapPin size={24} />, label: 'Location', value: 'Uttar Pradesh, Kanpur' },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center ${
                  darkMode ? 'bg-teal-900/50 text-teal-400' : 'bg-green-100 text-green-600'
                }`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-medium">{item.label}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10">
            <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/muskan-gupta-858753252/' },
                { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/muskaan-gupta' },
                { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://www.instagram.com/muskaan.gupta__/#' },
                 { icon: <SiLeetcode size={20} />, label: 'LeetCode', href: 'https://lhttps://leetcode.com/u/muskan_gupta67/eetcode.com/your-username/' },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    darkMode 
                      ? 'bg-gray-800 text-teal-400 hover:bg-teal-500 hover:text-white' 
                      : 'bg-gray-100 text-green-600 hover:bg-green-500 hover:text-white'
                  } transition-colors duration-300`}
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className={`p-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form  action="https://api.web3forms.com/submit"
  method="POST">
    <input type="hidden" name="access_key" value="e648a27d-6937-4a75-ba96-1418d21692eb" />
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-teal-500' : 'focus:ring-green-500'
                    }`}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-teal-500' : 'focus:ring-green-500'
                    }`}
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-teal-500' : 'focus:ring-green-500'
                    }`}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white' 
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    } border focus:outline-none focus:ring-2 ${
                      darkMode ? 'focus:ring-teal-500' : 'focus:ring-green-500'
                    } resize-none`}
                  />
                </div>
                
                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg flex items-center justify-center gap-2 ${
                    darkMode ? 'bg-teal-500 hover:bg-blue-600' : 'bg-blue-500 hover:bg-green-600'
                  } text-green-900 transition-colors duration-300`}
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;