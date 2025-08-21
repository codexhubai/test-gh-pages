import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link to="/" className="flex items-center">
              <img 
                src="https://storage.googleapis.com/fenado-ai-farm-public/generated/6ff049a6-be87-4dfd-b21c-aea854b93555.webp" 
                alt="DataSheet Connect Logo" 
                className="h-8 w-auto mr-3" 
              />
              <span className="text-xl font-semibold text-gradient">
                DataSheet Connect
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-md">
              Your marketplace for unlocking and monetizing valuable datasets.
              Connect with data buyers and sellers in a secure environment.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link to="/login" className="text-muted-foreground hover:text-foreground transition-colors">
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to="/login?role=seller" className="text-muted-foreground hover:text-foreground transition-colors">
                    Sell Data
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2024 DataSheet Connect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;