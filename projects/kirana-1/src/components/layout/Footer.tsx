import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Store Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/1623b8f9-c679-4141-87c0-d0e5b2fab350.png"
                alt="Fresh Kirana Logo"
                className="h-10 w-10"
              />
              <h3 className="text-xl font-bold">Fresh Kirana</h3>
            </div>
            <p className="text-green-100 mb-6">
              Your neighborhood store for fresh fruits and vegetables. We source directly from local farmers to bring you the freshest produce daily.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-green-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/fruits" className="text-green-100 hover:text-white transition-colors">Fruits</Link>
              </li>
              <li>
                <Link to="/vegetables" className="text-green-100 hover:text-white transition-colors">Vegetables</Link>
              </li>
              <li>
                <Link to="/about" className="text-green-100 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-green-100 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="shrink-0 mt-1" />
                <span>123 Market Street, City Center, State - 123456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="shrink-0" />
                <span>info@freshkirana.com</span>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-green-100">
                Open Hours: 8:00 AM - 9:00 PM
              </p>
              <p className="text-sm text-green-100">
                All days of the week
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-10 pt-6 text-center text-green-100">
          <p>© {new Date().getFullYear()} Fresh Kirana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;