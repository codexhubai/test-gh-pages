import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

const categories: Category[] = [
  {
    id: "fruits",
    name: "Fresh Fruits",
    description: "Seasonal and exotic fruits sourced directly from farms",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/241c5501-2452-4ae0-ba17-c314ecd42489.webp",
    itemCount: 24
  },
  {
    id: "vegetables",
    name: "Fresh Vegetables",
    description: "Locally grown vegetables harvested at peak freshness",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/cf2e0b0e-4329-4982-b87c-6fab445cc05d.webp",
    itemCount: 32
  },
  {
    id: "organic",
    name: "Organic Selection",
    description: "100% organic produce certified and chemical-free",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/241c5501-2452-4ae0-ba17-c314ecd42489.webp",
    itemCount: 18
  },
];

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

const Categories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Categories</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of fresh produce categories
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category) => (
            <motion.div key={category.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {category.itemCount} items
                    </span>
                    <Button 
                      variant="outline" 
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      Browse
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;