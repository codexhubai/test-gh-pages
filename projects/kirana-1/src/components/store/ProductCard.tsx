import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  category: string;
  discount?: number;
  organic?: boolean;
}

const ProductCard = ({
  name,
  price,
  unit,
  image,
  discount,
  organic,
}: ProductCardProps) => {
  const [quantity, setQuantity] = useState(0);
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  const handleAdd = () => setQuantity((prev) => prev + 1);
  const handleRemove = () => setQuantity((prev) => Math.max(0, prev - 1));

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48 bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
          {discount && (
            <Badge
              variant="destructive"
              className="absolute top-2 right-2"
            >
              {discount}% OFF
            </Badge>
          )}
          {organic && (
            <Badge
              variant="outline"
              className="absolute top-2 left-2 bg-green-100 text-green-800 border-green-300"
            >
              Organic
            </Badge>
          )}
        </div>
        <CardContent className="pt-4 flex-grow flex flex-col">
          <h3 className="font-medium text-gray-900">{name}</h3>
          <div className="flex items-baseline mt-1 space-x-2">
            <span className="text-lg font-bold text-green-600">
              ₹{discountedPrice.toFixed(2)}
            </span>
            {discount && (
              <span className="text-sm text-gray-400 line-through">
                ₹{price.toFixed(2)}
              </span>
            )}
            <span className="text-xs text-gray-500">/{unit}</span>
          </div>

          <div className="mt-4 pt-2 border-t flex items-center justify-between">
            {quantity === 0 ? (
              <Button
                onClick={handleAdd}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Add to Cart
              </Button>
            ) : (
              <div className="flex items-center justify-between w-full">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleRemove}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleAdd}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;