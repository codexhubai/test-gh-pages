import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartItem, { CartItemType } from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import EmptyCart from "@/components/cart/EmptyCart";
import { Button } from "@/components/ui/button";

// Sample cart data
const sampleCartItems: CartItemType[] = [
  {
    id: "1",
    name: "Fresh Tomatoes",
    price: 80,
    unit: "kg",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/db4cf9e8-d5ba-44bc-9610-8c626e1abb5d.webp",
    quantity: 2,
    discount: 5
  },
  {
    id: "2",
    name: "Organic Apples",
    price: 120,
    unit: "kg",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/96e4a236-2554-4581-b4ff-469f02cfd5b4.webp",
    quantity: 1,
    discount: 0
  },
  {
    id: "3",
    name: "Fresh Spinach",
    price: 30,
    unit: "bundle",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/1257696a-71bc-4457-b091-9fb4956c6df8.webp",
    quantity: 3,
    discount: 0
  },
  {
    id: "4",
    name: "Organic Carrots",
    price: 60,
    unit: "kg",
    image: "https://storage.googleapis.com/fenado-ai-farm-public/generated/6d0f815e-8fff-4200-9daa-2a8965075b71.webp",
    quantity: 1,
    discount: 10
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>(sampleCartItems);
  
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 0,
    shipping: 0,
    tax: 0,
    discount: 0,
    total: 0
  });

  // Calculate order summary
  useEffect(() => {
    const subtotal = cartItems.reduce((acc, item) => {
      const price = item.discount 
        ? item.price - (item.price * item.discount / 100)
        : item.price;
      return acc + (price * item.quantity);
    }, 0);
    
    // Free shipping for orders above 500
    const shipping = subtotal > 500 ? 0 : 40;
    
    // 5% tax
    const tax = subtotal * 0.05;
    
    // Total discount
    const discount = cartItems.reduce((acc, item) => {
      if (!item.discount) return acc;
      return acc + ((item.price * item.discount / 100) * item.quantity);
    }, 0);
    
    const total = subtotal + shipping + tax;
    
    setOrderSummary({
      subtotal,
      shipping,
      tax,
      discount,
      total
    });
  }, [cartItems]);

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    toast.success("Checkout process initiated!");
    // In a real app, navigate to checkout page
  };

  // Page transitions
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1 },
    out: { opacity: 0 }
  };

  return (
    <>
      <Navbar />
      
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.3 }}
      >
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-green-600">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Continue Shopping
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 mt-2">Shopping Cart</h1>
        </div>

        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <AnimatePresence>
                  {cartItems.map(item => (
                    <CartItem 
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                    />
                  ))}
                </AnimatePresence>

                <div className="mt-4 flex justify-between items-center border-t pt-4">
                  <span className="text-sm text-gray-500">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in cart
                  </span>
                  <Button
                    variant="outline"
                    onClick={() => setCartItems([])}
                    className="text-sm"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <CartSummary 
                subtotal={orderSummary.subtotal}
                shipping={orderSummary.shipping}
                tax={orderSummary.tax}
                discount={orderSummary.discount}
                total={orderSummary.total}
                onCheckout={handleCheckout}
              />

              <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-sm font-medium text-gray-900 mb-4">Have a promo code?</h3>
                <div className="flex">
                  <input
                    type="text"
                    className="min-w-0 flex-1 rounded-l-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 sm:text-sm"
                    placeholder="Enter code"
                  />
                  <Button className="rounded-l-none bg-green-600 hover:bg-green-700">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Banner image */}
        <div className="mt-12">
          <img 
            src="https://storage.googleapis.com/fenado-ai-farm-public/generated/4ccf4fbd-1024-4484-a26a-0655830feca0.webp" 
            alt="Fresh groceries banner" 
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default CartPage;