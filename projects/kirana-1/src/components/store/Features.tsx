import { Truck, Clock, Leaf, DollarSign } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Truck className="h-10 w-10 text-green-600" />,
    title: "Fast Delivery",
    description: "We deliver all orders within 24 hours to ensure you get the freshest produce.",
  },
  {
    icon: <Leaf className="h-10 w-10 text-green-600" />,
    title: "Farm Fresh",
    description: "All products are sourced directly from local farms for maximum freshness.",
  },
  {
    icon: <DollarSign className="h-10 w-10 text-green-600" />,
    title: "Best Prices",
    description: "We offer competitive prices by cutting out middlemen in our supply chain.",
  },
  {
    icon: <Clock className="h-10 w-10 text-green-600" />,
    title: "24/7 Support",
    description: "Our customer service team is available around the clock to assist you.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best quality produce with exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;