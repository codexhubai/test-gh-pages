import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RootLayout from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Download, ChevronLeft, CreditCard, CheckCircle, Loader2 } from "lucide-react";
import { featuredDatasets } from "@/constants";
import { toast } from "sonner";

const DatasetDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showPurchaseDialog, setShowPurchaseDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const dataset = featuredDatasets.find((ds) => ds.id === id);
  
  if (!dataset) {
    return (
      <RootLayout>
        <div className="min-h-[80vh] flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold mb-4">Dataset Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The dataset you're looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate("/client-dashboard")}>
            Return to Dashboard
          </Button>
        </div>
      </RootLayout>
    );
  }
  
  const handlePurchase = () => {
    setShowPurchaseDialog(true);
  };
  
  const confirmPurchase = () => {
    setShowPurchaseDialog(false);
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccessDialog(true);
    }, 2000);
  };
  
  const handleDownload = () => {
    toast.success("Download started");
    
    // Simulate download
    setTimeout(() => {
      toast.success("Download completed");
      setShowSuccessDialog(false);
    }, 1500);
  };
  
  return (
    <RootLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="min-h-screen bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/client-dashboard")}
            className="mb-6 flex items-center text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back to Datasets
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-foreground">{dataset.title}</h1>
                <Badge variant="outline" className="bg-secondary/10 text-secondary border-secondary/20">
                  {dataset.category}
                </Badge>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span>Published: {dataset.publishDate}</span>
                <span>Updated: {dataset.updatedDate}</span>
                <span>Location: {dataset.location}</span>
              </div>
              
              <div className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-2">Description</h3>
                <p className="text-foreground/80">{dataset.description}</p>
                
                <div className="mt-4 flex flex-wrap gap-4">
                  <div className="bg-primary/5 rounded-md px-4 py-2">
                    <p className="text-sm text-muted-foreground">Total Rows</p>
                    <p className="text-lg font-semibold">{dataset.fullSize.rows.toLocaleString()}</p>
                  </div>
                  <div className="bg-primary/5 rounded-md px-4 py-2">
                    <p className="text-sm text-muted-foreground">Total Columns</p>
                    <p className="text-lg font-semibold">{dataset.fullSize.columns}</p>
                  </div>
                  <div className="bg-primary/5 rounded-md px-4 py-2">
                    <p className="text-sm text-muted-foreground">Author</p>
                    <p className="text-lg font-semibold">{dataset.author}</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Sample Data Preview</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Showing {dataset.sampleData.length} rows and {Object.keys(dataset.sampleData[0]).length} columns as sample data.
                  Full dataset contains {dataset.fullSize.rows} rows and {dataset.fullSize.columns} columns.
                </p>
                
                <div className="rounded-md border border-border overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        {Object.keys(dataset.sampleData[0]).map((key) => (
                          <TableHead key={key} className="bg-card/50">
                            {key}
                          </TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {dataset.sampleData.map((row, index) => (
                        <TableRow key={index}>
                          {Object.values(row).map((value, i) => (
                            <TableCell key={i}>{String(value)}</TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-card rounded-lg p-6 border-b-2 border-r-2 border-primary/20 sticky top-24">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  ${dataset.price.toFixed(2)}
                </h3>
                <p className="text-muted-foreground mb-6">
                  One-time purchase, instant access
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span>Full dataset access</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span>CSV/XLS format</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span>Commercial use license</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-secondary mr-2" />
                    <span>Updates for 1 year</span>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <Button 
                  onClick={handlePurchase}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground pill-button"
                >
                  Purchase Full Dataset
                </Button>
                
                <p className="text-xs text-muted-foreground text-center mt-4">
                  Secure payment processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      
      {/* Purchase confirmation dialog */}
      <Dialog open={showPurchaseDialog} onOpenChange={setShowPurchaseDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Confirm Your Purchase</DialogTitle>
            <DialogDescription>
              You are about to purchase '{dataset.title}' for ${dataset.price.toFixed(2)}. Do you want to proceed?
            </DialogDescription>
          </DialogHeader>
          <div className="bg-primary/5 rounded-md p-4 my-4">
            <div className="flex justify-between mb-2">
              <span>Dataset:</span>
              <span className="font-medium">{dataset.title}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Price:</span>
              <span className="font-medium">${dataset.price.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Format:</span>
              <span className="font-medium">CSV/XLS</span>
            </div>
          </div>
          <DialogFooter className="sm:justify-between">
            <Button 
              variant="outline" 
              onClick={() => setShowPurchaseDialog(false)}
              className="border-primary/30"
            >
              Cancel
            </Button>
            <Button 
              onClick={confirmPurchase}
              className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center"
            >
              <CreditCard className="mr-2 h-4 w-4" />
              Confirm Purchase
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Processing payment dialog */}
      <AlertDialog open={isProcessing}>
        <AlertDialogContent className="sm:max-w-md text-center">
          <div className="flex flex-col items-center justify-center py-6">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <AlertDialogHeader>
              <AlertDialogTitle>Processing Payment</AlertDialogTitle>
              <AlertDialogDescription>
                Please wait while we process your payment...
              </AlertDialogDescription>
            </AlertDialogHeader>
          </div>
        </AlertDialogContent>
      </AlertDialog>
      
      {/* Purchase success dialog */}
      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="sm:max-w-md">
          <AlertDialogHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 rounded-full p-3">
                <CheckCircle className="h-10 w-10 text-green-500" />
              </div>
            </div>
            <AlertDialogTitle className="text-center">Purchase Successful!</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Thank you for your purchase of {dataset.title}! Your payment has been processed.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex flex-col sm:flex-row sm:justify-center">
            <AlertDialogCancel onClick={() => setShowSuccessDialog(false)}>
              Close
            </AlertDialogCancel>
            <AlertDialogAction onClick={handleDownload} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-4 w-4" />
              Download Full Data
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </RootLayout>
  );
};

export default DatasetDetail;