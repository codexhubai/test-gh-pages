import { useState } from "react";
import { motion } from "framer-motion";
import { Trash, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  quantity: number;
  discount?: number;
}

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem = ({ item, onUpdateQuantity, onRemove }: CartItemProps) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleIncrement = () => {
    onUpdateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      onUpdateQuantity(item.id, item.quantity - 1);
    } else {
      handleRemove();
    }
  };

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(item.id);
      toast.info(`${item.name} removed from cart`);
    }, 300);
  };

  const actualPrice = item.discount 
    ? item.price - (item.price * item.discount / 100) 
    : item.price;
    
  const totalPrice = actualPrice * item.quantity;

  return (
    <motion.div 
      className="flex items-center py-4 border-b"
      initial={{ opacity: 1 }}
      animate={{ opacity: isRemoving ? 0 : 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
        <img 
          src={item.image} 
          alt={item.name}
          className="h-full w-full object-cover object-center" 
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-base font-medium text-gray-900">{item.name}</h3>
            <p className="mt-1 text-sm text-gray-500">₹{actualPrice.toFixed(2)} / {item.unit}</p>
          </div>
          <p className="text-right font-medium text-gray-900">
            ₹{totalPrice.toFixed(2)}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center border rounded-md">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleDecrement}
              className="h-8 w-8 rounded-none"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="px-2 py-1 w-8 text-center">{item.quantity}</span>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleIncrement}
              className="h-8 w-8 rounded-none"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleRemove}
            className="text-red-600 hover:text-red-500 hover:bg-red-50"
          >
            <Trash className="h-4 w-4 mr-1" />
            Remove
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;