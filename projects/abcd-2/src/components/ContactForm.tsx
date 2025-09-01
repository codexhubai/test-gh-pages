import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  Loader2,
  GraduationCap,
  Calendar,
  Clock
} from 'lucide-react';
import { FaDiscord, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Mock form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="px-3 py-1 text-sm text-indigo-600 dark:text-indigo-400 border-indigo-600 dark:border-indigo-400">
            Enrollment Open
          </Badge>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white"
          >
            Start Your Coding Journey Today
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 mx-auto"
          >
            Flexible learning options with dedicated support every step of the way
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700"
          >
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Academy Information</h4>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Campus Location</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    88 Tech Hub, Suite 200<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Calendar className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Next Cohort</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Starting October 15, 2025</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Admissions</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">+1 (555) 234-5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">admissions@codecraftacademy.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Clock className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="ml-3">
                  <p className="text-base font-medium text-gray-900 dark:text-white">Office Hours</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Mon-Fri: 9AM - 6PM PT</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-700">
              <h5 className="text-base font-medium text-gray-900 dark:text-white mb-4">Connect With Us</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                  <span className="sr-only">Discord</span>
                  <FaDiscord className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
                  <span className="sr-only">YouTube</span>
                  <FaYoutube className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <div className="flex items-center mb-2">
                <GraduationCap className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mr-2" />
                <p className="font-medium text-gray-900 dark:text-white">Financial Aid Available</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We offer scholarships and payment plans to make quality education accessible to everyone.
              </p>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center h-full flex flex-col items-center justify-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Application Received!</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Thank you for your interest in CodeCraft Academy! A member of our admissions team will contact you within 24-48 hours to discuss next steps.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white"
                >
                  Submit Another Application
                </Button>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Apply Now</h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="First Name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Last Name" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="course">Course Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="webdev">Web Development Bootcamp</SelectItem>
                        <SelectItem value="javascript">Advanced JavaScript</SelectItem>
                        <SelectItem value="react">React & Redux Masterclass</SelectItem>
                        <SelectItem value="fullstack">Full Stack Development</SelectItem>
                        <SelectItem value="dsa">Data Structures & Algorithms</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="experience">Current Experience Level</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (No experience)</SelectItem>
                        <SelectItem value="some">Some basics (HTML/CSS)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (Some JavaScript)</SelectItem>
                        <SelectItem value="advanced">Advanced (Looking to specialize)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Why are you interested in learning to code?</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your goals..." 
                      rows={4}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : 'Submit Application'}
                  </Button>
                  
                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;