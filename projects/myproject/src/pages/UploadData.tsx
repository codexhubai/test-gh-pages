import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "@/components/dashboard/AdminSidebar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Upload, FileSpreadsheet, Check } from "lucide-react";
import { categories, locations } from "@/constants";

const UploadData = () => {
  const navigate = useNavigate();
  const [sidebarWidth] = useState(240);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !description || !category || !location || !price || !file) {
      alert("Please fill out all fields");
      return;
    }
    
    // Show success dialog
    setShowSuccess(true);
  };
  
  const handleContinue = () => {
    setShowSuccess(false);
    navigate("/admin-dashboard");
  };
  
  return (
    <div className="bg-background min-h-screen">
      <AdminSidebar />
      
      <div style={{ marginLeft: `${sidebarWidth}px` }} className="p-8 transition-all duration-300">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground">Upload Dataset</h1>
            <p className="text-muted-foreground">
              Share your valuable data with potential buyers
            </p>
          </div>
          
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Dataset Information</CardTitle>
              <CardDescription>
                Provide details about your dataset to help potential buyers understand its value.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Dataset Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., US Tech Startups 2023"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-input border-t-2 border-l-2 border-border"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select value={category} onValueChange={setCategory} required>
                      <SelectTrigger className="bg-card border-t-2 border-l-2 border-border">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.filter(c => c !== "All Categories").map((cat) => (
                          <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Select value={location} onValueChange={setLocation} required>
                      <SelectTrigger className="bg-card border-t-2 border-l-2 border-border">
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.filter(l => l !== "All Locations").map((loc) => (
                          <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Provide a detailed description of your dataset..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="min-h-[120px] bg-input border-t-2 border-l-2 border-border resize-none"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Price ($)</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0.99"
                    step="0.01"
                    placeholder="e.g., 49.99"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-input border-t-2 border-l-2 border-border"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file">Upload CSV/XLS File</Label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center ${
                      isDragging ? "border-primary bg-primary/5" : "border-border"
                    } transition-colors duration-200`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                  >
                    {file ? (
                      <div className="flex items-center justify-center">
                        <FileSpreadsheet className="h-8 w-8 text-primary mr-2" />
                        <div className="text-left">
                          <p className="font-medium text-foreground">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-foreground font-medium">
                          Drag & drop your file here, or click to browse
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Supports CSV, XLS, or XLSX (Max 50MB)
                        </p>
                      </div>
                    )}
                    
                    <input
                      id="file"
                      type="file"
                      accept=".csv,.xls,.xlsx"
                      onChange={handleFileChange}
                      className="hidden"
                      required={!file}
                    />
                    
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("file")?.click()}
                      className="mt-4 border-primary/30"
                    >
                      Browse Files
                    </Button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Publish Dataset
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      {/* Success dialog */}
      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <Check className="h-10 w-10 text-green-500" />
              </div>
            </div>
            <AlertDialogTitle className="text-center">Upload Successful!</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Dataset "{title}" has been uploaded successfully and is now available in your dashboard.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex justify-center">
            <AlertDialogAction onClick={handleContinue} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Continue to Dashboard
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default UploadData;