import { motion } from "framer-motion";
import { ShoppingBasket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center py-16 text-center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-full bg-gray-100 p-6 mb-6"
      >
        <ShoppingBasket className="h-12 w-12 text-gray-400" />
      </motion.div>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Looks like you haven't added any products to your cart yet. 
        Browse our fresh selection and start shopping!
      </p>
      
      <Button 
        asChild
        size="lg"
        className="bg-green-600 hover:bg-green-700"
      >
        <Link to="/">
          Continue Shopping
        </Link>
      </Button>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 text-sm">
        <div className="flex flex-col items-center">
          <ShoppingBasket className="h-6 w-6 text-green-600 mb-2" />
          <span className="text-gray-700 font-medium">Fresh Products</span>
          <span className="text-gray-500">Directly from farms</span>
        </div>
        <div className="flex flex-col items-center">
          <ShoppingBasket className="h-6 w-6 text-green-600 mb-2" />
          <span className="text-gray-700 font-medium">Free Delivery</span>
          <span className="text-gray-500">On orders above ₹500</span>
        </div>
        <div className="flex flex-col items-center">
          <ShoppingBasket className="h-6 w-6 text-green-600 mb-2" />
          <span className="text-gray-700 font-medium">Easy Returns</span>
          <span className="text-gray-500">No questions asked</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EmptyCart;