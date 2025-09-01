import { motion } from 'framer-motion';
import { Truck, Clock, BadgePercent, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const features = [
  {
    icon: <Truck className="h-10 w-10 text-green-600" />,
    title: 'Fast Delivery',
    description: 'Get your groceries delivered within 2 hours in select areas.',
  },
  {
    icon: <Clock className="h-10 w-10 text-green-600" />,
    title: 'Fresh Products',
    description: 'We source our products daily for maximum freshness.',
  },
  {
    icon: <BadgePercent className="h-10 w-10 text-green-600" />,
    title: 'Weekly Deals',
    description: 'Enjoy special discounts and offers every week.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
    title: 'Quality Guaranteed',
    description: 'We stand by the quality of all our products.',
  },
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We're committed to providing the best grocery shopping experience with quality products and exceptional service.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Image */}
        <div className="mt-16">
          <motion.img
            src="/features-image.webp"
            alt="Grocery shopping experience"
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;