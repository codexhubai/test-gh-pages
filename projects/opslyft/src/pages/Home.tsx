import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronDown, Twitter, Linkedin, Facebook, ExternalLink, Quote } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Waitlist Modal */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 bg-indigo-600 text-white p-3 text-center z-50"
      >
        <div className="container mx-auto flex items-center justify-center">
          <p className="mr-4">Meet the next generation of AI-powered FinOps</p>
          <p className="font-semibold mr-4">Be the first to try it!</p>
          <Button variant="outline" className="bg-transparent border-white hover:bg-white hover:text-indigo-600">
            Join waitlist
          </Button>
          <button className="ml-4 hover:bg-indigo-700 p-1 rounded-full">
            ×
          </button>
        </div>
      </motion.div>

      {/* Navigation */}
      <nav className="py-6 px-4 md:px-8 lg:px-16 border-b sticky top-0 bg-white dark:bg-gray-950 z-40 mt-14">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/a740d212-7ebd-4786-8f28-632c624c8976.webp" 
              alt="OpsLyft Logo" 
              className="h-10 w-auto mr-2"
            />
            <span className="text-2xl font-bold text-indigo-600">opslyft</span>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center hover:text-indigo-600">
                Why OpsLyft?
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center hover:text-indigo-600">
                Product <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#pricing" className="hover:text-indigo-600">Pricing</a>
            <div className="relative group">
              <button className="flex items-center hover:text-indigo-600">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center hover:text-indigo-600">
                Company <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#docs" className="hover:text-indigo-600">Docs</a>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="link" className="hover:text-indigo-600">
              Login
            </Button>
            <Button variant="default" className="bg-indigo-600 hover:bg-indigo-700">
              Book a demo
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We make cloud cost management <span className="text-indigo-600">hassle-free.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                OpsLyft helps organizations reshape their software finances with comprehensive cloud cost management solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-6">
                  Book a demo
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6">
                  Learn more
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/2b1b2cdc-236b-4b9e-962a-59501023af52.webp"
                alt="Cloud Infrastructure" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Story</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <p className="text-lg mb-6 leading-relaxed">
                In 2019, Aayush witnessed firsthand that the rapid growth of cloud adoption was a double-edged sword – having immense potential, yet burdening on the organizations with massive costs that badly affected their gross margins. Opting for a challenging path, OpsLyft was born with a firm resolve to help organizations reshape their software finances.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Our journey swiftly gained momentum. What started as a response to a pressing need for cloud cost management soon changed into something greater. We transitioned from tackling specific challenges to offering comprehensive solutions that provided visibility, and actionable intelligence across cloud platforms and developer tools. Along the way, we partnered with customers who shared our vision, our capabilities expanded and our team grew.
              </p>
              <p className="text-lg leading-relaxed">
                We imagine a future where financial choices and technological innovation blend effortlessly, enabling companies to use resources wisely and achieve their cloud cost goals.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/29ea8fea-7ec0-410a-b9da-4cb0186708dd.webp" 
                alt="Team Meeting" 
                className="rounded-lg shadow-md w-full h-auto"
              />
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/b20d6255-3c0e-405d-b2cc-428f30bc4273.webp" 
                alt="Office Environment" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 bg-indigo-600 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-xl font-bold mb-6">OUR MISSION</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 max-w-4xl mx-auto leading-tight">
            To enable all the organizations in the world achieve a state of
            <span className="block">Zero overspending on software expenses.</span>
          </p>
          <div className="flex justify-center">
            <img 
              src="https://storage.googleapis.com/fenado-ai-farm-public/generated/5c3cbae0-0b60-4b5c-a1a3-1f711f1a0837.webp" 
              alt="3D Visualization" 
              className="rounded-lg w-full max-w-2xl shadow-xl"
            />
          </div>
        </motion.div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <div className="flex flex-col lg:flex-row items-center bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 lg:p-12">
            <div className="lg:w-1/4 mb-8 lg:mb-0 flex flex-col items-center">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/0f119846-35ee-49e4-82b9-0f508700e976.webp" 
                alt="Ajay Poddar" 
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h4 className="text-xl font-bold">Ajay Poddar</h4>
              <p className="text-gray-600 dark:text-gray-300">CTO (Retirement Tech)</p>
              <img 
                src="https://via.placeholder.com/150x50" 
                alt="Company Logo" 
                className="mt-4 h-8 w-auto"
              />
            </div>
            <div className="lg:w-3/4 lg:pl-12">
              <Quote className="h-12 w-12 text-indigo-400 mb-6" />
              <p className="text-xl leading-relaxed mb-6">
                It's fantastic to work with team OpsLyft on building a cost-efficient & secure infrastructure—a stellar product and excellent customer support. The keenness towards understanding the business use cases of our vision and the commitment to deliver things rapidly is delightful to watch. I recommend them to all startups/enterprises for their excellence in DevOps.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Investors Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">Backed by the Best</h2>
          <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
            OpsLyft is backed & supported by Leading Angel Investors
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Vijay Shekar Sharma, CEO, Paytm",
              "Gaurav Munjal, CEO, Unacademy",
              "Abhinav Sinha, Global COO, OYO",
              "Rajesh Yabaji, Co-Founder, Blackbuck",
              "Ankit Mathuria, CTO, OYO",
              "Ritesh Malik, CEO, Innov8 Coworking",
              "Anshoo Sharma, CEO, Magicpin",
              "Kanav Hasija, CCO, Innovaccer",
              "Rohit Agarwal, Ex-CFO, Zenoti",
              "Amit Bhalla, SVP, Investor Relations, Schneider Electric",
              "Vatsal Singhal, Co-Founder, Ultrahuman",
              "Pankaj Khandelwal, Ex-MD, Barclays Investment Bank",
              "Ravish Naresh, CEO, Khatabook",
              "Sandeep Gupta, COO, Innovaccer",
              "Maninder Gulati, Global Chief Strategy Officer, OYO",
            ].map((investor, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <p className="font-medium">{investor}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Client Logos */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-12">
            {['Innovaccer-logo', 'zenoti-logo', 'hdfc-logo', 'groww-logo', 'disprz-logo'].map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="bg-gray-200 dark:bg-gray-700 h-12 w-32 rounded-md flex items-center justify-center">
                  {logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/a740d212-7ebd-4786-8f28-632c624c8976.webp" 
                alt="OpsLyft Logo" 
                className="h-10 w-auto mb-4"
              />
              <p className="text-xl mb-6">We make cloud cost<br />management hassle-free.</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Use Case</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400">For Engineering</a></li>
                <li><a href="#" className="hover:text-indigo-400">For Finance</a></li>
                <li><a href="#" className="hover:text-indigo-400">For FinOps</a></li>
                <li><a href="#" className="hover:text-indigo-400">For Leadership</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400">Cost Saving Opportunities</a></li>
                <li><a href="#" className="hover:text-indigo-400">Adaptive Resource Scheduler</a></li>
                <li><a href="#" className="hover:text-indigo-400">Unified Cost Explorer</a></li>
                <li><a href="#" className="hover:text-indigo-400">Centralized Cloud Budgeting</a></li>
                <li><a href="#" className="hover:text-indigo-400">Dynamic Resource Inventory</a></li>
                <li><a href="#" className="hover:text-indigo-400">Customizable Cost Dashboards</a></li>
                <li><a href="#" className="hover:text-indigo-400">Shared Cost Allocation</a></li>
                <li><a href="#" className="hover:text-indigo-400">Kubernetes Cost Analyzer</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400">Blogs</a></li>
                <li><a href="#" className="hover:text-indigo-400">Case Studies</a></li>
                <li><a href="#" className="hover:text-indigo-400">Webinar</a></li>
                <li><a href="#" className="hover:text-indigo-400">Slack Community</a></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 mt-8">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400">About us</a></li>
                <li><a href="#" className="hover:text-indigo-400">News Room</a></li>
                <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-400">Book a demo</a></li>
                <li><a href="#" className="hover:text-indigo-400">Contact Us</a></li>
              </ul>

              <h3 className="text-lg font-semibold mb-4 mt-8">Pricing</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-indigo-400">Plans</a></li>
                <li><a href="#" className="hover:text-indigo-400">FAQs</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">Terms & Conditions | Privacy Policy</p>
              <p className="text-sm text-gray-400 mt-2">© 2025 OpsLyft, Inc. All rights reserved. Suite-403, 550 Battery Street, San Francisco, CA, 94111</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;