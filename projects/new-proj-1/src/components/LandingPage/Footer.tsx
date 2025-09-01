import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/d2974bf5-402d-4bfc-99cd-5a7e60082c79.webp" 
                alt="Quantum Code Logo" 
                className="h-8 w-8"
              />
              <span className="text-xl font-bold text-white">Quantum Code</span>
            </div>
            <p className="text-gray-300 mb-6">
              Empowering businesses with innovative software solutions. We transform ideas into powerful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Mobile App Development</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Cloud Solutions</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Data Analytics</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Cybersecurity</a></li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Our Team</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Blog</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Tech Avenue, Suite 400</li>
              <li>San Francisco, CA 94107</li>
              <li className="mt-4">info@quantumcode.tech</li>
              <li>+1 (555) 123-4567</li>
            </ul>
            <a href="#contact" className="block mt-4 text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Get in Touch →
            </a>
          </motion.div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Quantum Code. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;