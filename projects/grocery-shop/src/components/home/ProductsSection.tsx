import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Star } from 'lucide-react';

// Sample product data
const products = [
  {
    id: 1,
    name: "Organic Apples",
    category: "Fruits",
    price: 3.99,
    unit: "lb",
    rating: 4.8,
    image: "/products-image.webp"
  },
  {
    id: 2,
    name: "Fresh Sourdough Bread",
    category: "Bakery",
    price: 4.50,
    unit: "loaf",
    rating: 4.9,
    image: "/products-image.webp"
  },
  {
    id: 3,
    name: "Organic Green Mix",
    category: "Vegetables",
    price: 2.99,
    unit: "bundle",
    rating: 4.7,
    image: "/products-image.webp"
  },
  {
    id: 4,
    name: "Local Dairy Selection",
    category: "Dairy",
    price: 5.99,
    unit: "pack",
    rating: 4.6,
    image: "/products-image.webp"
  },
];

// Categories for filter buttons
const categories = ["All", "Fruits", "Vegetables", "Bakery", "Dairy"];

const ProductsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our selection of fresh, high-quality groceries at competitive prices.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <Button 
              key={index}
              variant={index === 0 ? "default" : "outline"} 
              className={index === 0 ? "bg-green-600 hover:bg-green-700" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-medium text-green-600">
                    {product.category}
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                          fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <div className="mt-2 text-lg font-bold">
                    ${product.price} <span className="text-sm font-normal text-gray-600">/ {product.unit}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <Button className="w-full bg-green-600 hover:bg-green-700">Add to Cart</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;