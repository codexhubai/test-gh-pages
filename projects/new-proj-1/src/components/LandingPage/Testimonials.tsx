import { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with Quantum Code transformed our business. Their team delivered a custom solution that streamlined our operations and improved customer satisfaction by 40%.",
    author: "Jessica Miller",
    position: "CEO, TechGrowth Inc.",
    company: "TechGrowth Inc.",
    rating: 5
  },
  {
    quote: "The mobile app they built for us exceeded all expectations. User engagement increased by 65% in the first month after launch. Their attention to detail and user experience is outstanding.",
    author: "Robert Chen",
    position: "Marketing Director",
    company: "Nova Retail",
    rating: 5
  },
  {
    quote: "Quantum Code revamped our outdated systems into a modern, cloud-based solution. Their team was communicative throughout the process and delivered on time and within budget.",
    author: "Samantha Park",
    position: "CTO",
    company: "FinServe Solutions",
    rating: 5
  },
  {
    quote: "We hired Quantum Code to build our SaaS platform from scratch. Not only did they deliver an exceptional product, but they also provided valuable insights that improved our business model.",
    author: "David Wilson",
    position: "Founder",
    company: "CloudSync",
    rating: 5
  },
  {
    quote: "Their UI/UX design expertise transformed our application. User feedback has been overwhelmingly positive, and we've seen a significant reduction in support tickets related to usability issues.",
    author: "Emma Thompson",
    position: "Product Manager",
    company: "CreativeWorks",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(testimonials.length - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 14.113l-4.21 2.205.8-4.66-3.387-3.303 4.676-.679L10 3.628l2.12 4.048 4.677.679-3.386 3.303.8 4.66z"
            clipRule="evenodd"
          />
        </svg>
      ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 dark:text-blue-400 font-medium"
          >
            Client Success Stories
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-4"
          >
            What Our Clients Say
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Don't just take our word for it. Hear from some of the businesses we've helped transform through our software solutions.
          </motion.p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            ref={carouselRef}
            className="cursor-grab overflow-hidden"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              animate={{ x: -currentIndex * (carouselRef.current?.offsetWidth || 0) }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="min-w-full p-4"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white dark:bg-gray-900 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
                    <CardContent className="p-8">
                      <div className="mb-6 flex justify-between items-start">
                        <Quote className="h-10 w-10 text-blue-600 dark:text-blue-400 opacity-30" />
                        <div className="flex">{renderStars(testimonial.rating)}</div>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-xl font-bold text-blue-600 dark:text-blue-400">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>

          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index
                  ? "bg-blue-600 dark:bg-blue-400"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;