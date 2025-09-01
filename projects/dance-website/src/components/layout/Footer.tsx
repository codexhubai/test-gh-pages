import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dance Wiki — A community-driven encyclopedia of dance forms
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>for dancers worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;