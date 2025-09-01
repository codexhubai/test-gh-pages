import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  discount: number;
  total: number;
  onCheckout: () => void;
}

const CartSummary = ({
  subtotal,
  shipping,
  tax,
  discount,
  total,
  onCheckout
}: CartSummaryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-50 rounded-lg p-6"
    >
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">₹{subtotal.toFixed(2)}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {shipping > 0 ? `₹${shipping.toFixed(2)}` : 'Free'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">₹{tax.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span className="font-medium">-₹{discount.toFixed(2)}</span>
          </div>
        )}
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between text-base font-medium">
        <span className="text-gray-900">Total</span>
        <span className="text-gray-900">₹{total.toFixed(2)}</span>
      </div>
      
      <Button 
        onClick={onCheckout}
        className="w-full mt-6 bg-green-600 hover:bg-green-700"
      >
        Proceed to Checkout
      </Button>
      
      <div className="mt-4 text-xs text-center text-gray-500">
        <p>We accept all major credit cards and UPI payments</p>
      </div>
    </motion.div>
  );
};

export default CartSummary;