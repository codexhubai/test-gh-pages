import { useState } from "react";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import { categories, locations, priceRanges } from "@/constants";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";

interface SearchFiltersProps {
  onSearch: (filters: {
    query: string;
    category: string;
    location: string;
    priceRange: string;
  }) => void;
}

const SearchFilters = ({ onSearch }: SearchFiltersProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [location, setLocation] = useState("All Locations");
  const [priceRange, setPriceRange] = useState("All Prices");
  
  const handleSearch = () => {
    onSearch({ query, category, location, priceRange });
  };
  
  const handleReset = () => {
    setQuery("");
    setCategory("All Categories");
    setLocation("All Locations");
    setPriceRange("All Prices");
    onSearch({ 
      query: "", 
      category: "All Categories", 
      location: "All Locations", 
      priceRange: "All Prices" 
    });
  };
  
  return (
    <div className="w-full mb-8">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Input
            placeholder="Search datasets..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 bg-input border-t-2 border-l-2 border-border focus:ring-1 focus:ring-offset-1 focus:ring-primary"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
        </div>
        
        <div className="hidden md:flex gap-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-[180px] bg-card border-t-2 border-l-2 border-border">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>{cat}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-[180px] bg-card border-t-2 border-l-2 border-border">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="w-[180px] bg-card border-t-2 border-l-2 border-border">
              <SelectValue placeholder="Price Range" />
            </SelectTrigger>
            <SelectContent>
              {priceRanges.map((price) => (
                <SelectItem key={price} value={price}>{price}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full flex items-center justify-center border-primary/30">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-card">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Narrow down your search results
                </SheetDescription>
              </SheetHeader>
              
              <div className="py-6 space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="w-full bg-card">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="w-full bg-card">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((loc) => (
                        <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Price Range</label>
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="w-full bg-card">
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      {priceRanges.map((price) => (
                        <SelectItem key={price} value={price}>{price}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <SheetFooter>
                <Button variant="outline" onClick={handleReset}>Reset</Button>
                <Button onClick={handleSearch}>Apply Filters</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="hidden md:block">
          <Button onClick={handleSearch} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Search
          </Button>
        </div>
        
        <div className="hidden md:block">
          <Button variant="outline" onClick={handleReset} className="border-primary/30">
            Reset
          </Button>
        </div>
      </div>
      
      <div className="md:hidden mt-4">
        <Button onClick={handleSearch} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchFilters;