import { ArrowUp } from 'lucide-react';
import { FaDiscord, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Code, BookOpen, GraduationCap } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                className="h-8 w-8 mr-2" 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/4c23c72b-eb21-4a66-92ac-92a701a6b7b1.webp" 
                alt="CodeCraft Academy Logo" 
              />
              <span className="font-bold text-xl text-indigo-400">CodeCraft Academy</span>
            </div>
            <p className="text-gray-400 mb-6">
              Learn to code with industry experts. Transform your career with hands-on courses designed to help you succeed in today's tech industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <span className="sr-only">Discord</span>
                <FaDiscord className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <span className="sr-only">YouTube</span>
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-indigo-400 transition-colors">Courses</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#instructors" className="text-gray-400 hover:text-indigo-400 transition-colors">Instructors</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-indigo-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Courses</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Code className="h-4 w-4 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Web Development Bootcamp</a>
              </li>
              <li className="flex items-center">
                <Code className="h-4 w-4 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Advanced JavaScript</a>
              </li>
              <li className="flex items-center">
                <Code className="h-4 w-4 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">React & Redux Masterclass</a>
              </li>
              <li className="flex items-center">
                <Code className="h-4 w-4 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Full Stack Development</a>
              </li>
              <li className="flex items-center">
                <Code className="h-4 w-4 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Data Structures & Algorithms</a>
              </li>
              <li className="flex items-center">
                <Code className="h-4 w-4 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Collaborative Coding</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Free Tutorials</a>
              </li>
              <li className="flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Blog</a>
              </li>
              <li className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Student Community</a>
              </li>
              <li className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Career Resources</a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="font-medium text-sm text-white mb-2">Subscribe to Our Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 border border-gray-700 text-white text-sm rounded-l-md px-3 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-indigo-500" 
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-2 text-sm rounded-r-md transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800"></div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CodeCraft Academy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-indigo-400">Cookie Policy</a>
          </div>
        </div>
        
        {/* Scroll to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;