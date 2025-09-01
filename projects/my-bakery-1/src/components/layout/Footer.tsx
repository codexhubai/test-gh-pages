import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import { bakeryName, contactInfo, socialLinks } from '@/constants';

export default function Footer() {
  return (
    <footer className="bg-muted mt-16 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/bakery-logo.webp"
                alt={bakeryName}
                className="h-8 w-auto"
              />
              <span className="font-bold text-lg">{bakeryName}</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Bringing freshly baked goodness to your table every day with passion, quality ingredients, and traditional methods.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(social => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  {social.name === "Instagram" && <Instagram size={20} />}
                  {social.name === "Facebook" && <Facebook size={20} />}
                  {social.name === "Twitter" && <Twitter size={20} />}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Hours Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Clock size={18} />
              <span>Opening Hours</span>
            </h3>
            <ul className="space-y-3">
              {contactInfo.hours.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <span className="font-medium">{item.days}</span>
                  <span className="text-muted-foreground">{item.hours}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Phone size={18} />
              <span>Contact Us</span>
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="flex-shrink-0 mt-1 text-muted-foreground" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="flex-shrink-0 text-muted-foreground" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="flex-shrink-0 text-muted-foreground" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-semibold text-lg mb-4">Join Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to get updates on new products, special offers, and baking tips.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-3 py-2 rounded-md border border-border bg-background"
                required
              />
              <button
                type="submit"
                className="px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} {bakeryName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}