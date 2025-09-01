import { useState, ChangeEvent, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

interface SearchFilterProps {
  onSearch: (query: string) => void;
}

const SearchFilter = ({ onSearch }: SearchFilterProps) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // Optional: Trigger search as user types
    // onSearch(e.target.value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full max-w-md">
      <Input
        type="text"
        placeholder="Search dance styles, regions, or tags..."
        className="pr-16"
        value={query}
        onChange={handleChange}
      />
      {query && (
        <Button 
          type="button" 
          variant="ghost" 
          size="icon" 
          className="absolute right-8 top-0"
          onClick={clearSearch}
        >
          <X size={16} />
        </Button>
      )}
      <Button type="submit" variant="ghost" size="icon" className="absolute right-0 top-0">
        <Search size={16} />
      </Button>
    </form>
  );
};

export default SearchFilter;