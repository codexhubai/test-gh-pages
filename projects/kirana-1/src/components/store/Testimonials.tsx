import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Regular Customer",
    content: "I've been shopping at Fresh Kirana for over a year now, and I'm always impressed by the quality of their fruits and vegetables. Everything is always fresh, and their prices are very reasonable.",
    rating: 5,
  },
  {
    id: "2",
    name: "Rahul Verma",
    role: "Weekly Shopper",
    content: "The convenience of getting fresh produce delivered to my doorstep has made Fresh Kirana my go-to store. Their delivery is always prompt, and their staff is very courteous.",
    rating: 4,
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "Health Enthusiast",
    content: "As someone who's very particular about organic produce, I appreciate that Fresh Kirana has a dedicated section for organic fruits and vegetables. The quality is consistently excellent.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="relative">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonials[currentIndex].rating
                      ? "text-yellow-500 fill-yellow-500"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            <blockquote className="text-lg text-gray-700 italic mb-6">
              "{testimonials[currentIndex].content}"
            </blockquote>

            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 w-2.5 rounded-full ${
                  index === currentIndex ? "bg-green-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-4 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md"
              onClick={prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-4 hidden md:block">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white shadow-md"
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;