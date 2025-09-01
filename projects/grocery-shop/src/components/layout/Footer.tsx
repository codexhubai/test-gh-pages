import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Fresh Grocer</h3>
            <p className="text-gray-600 mb-4">
              We provide the freshest produce, quality groceries, and exceptional service to our community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-600">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Shop</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Fresh Produce</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Dairy & Eggs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Bakery</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Meat & Seafood</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Pantry Items</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Frozen Foods</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-green-600">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Shipping & Delivery</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Return Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get special offers, free giveaways, and deals.</p>
            <div className="flex space-x-2">
              <Input 
                type="email"
                placeholder="Your email"
                className="max-w-xs"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fresh Grocer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;