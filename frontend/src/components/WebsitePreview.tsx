import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, ExternalLink, Info, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import LoadingOverlay from "./LoadingOverlay";

interface WebsitePreviewProps {
  projectName: string;
}

const WebsitePreview = ({ projectName }: WebsitePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isInfoDialogOpen, setIsInfoDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isWebsiteReady, setIsWebsiteReady] = useState(false);

  const websiteUrl = `${import.meta.env.VITE_GITHUB_PAGES_URL}/${projectName}`;

  useEffect(() => {
    const checkWebsiteStatus = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(websiteUrl, { method: 'HEAD' });
        
        if (response.ok) {
          setIsWebsiteReady(true);
        } else {
          setIsWebsiteReady(false);
        }
      } catch (error) {
        console.error('Error checking website status:', error);
        setIsWebsiteReady(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkWebsiteStatus();
  }, [websiteUrl]);

  const refreshWebsite = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
  };

  const retryWebsiteCheck = () => {
    setIsLoading(true);
    setIsWebsiteReady(false);
    // Re-trigger the useEffect by updating the dependency
    const checkWebsiteStatus = async () => {
      try {
        const response = await fetch(websiteUrl, { method: 'HEAD' });
        
        if (response.ok) {
          setIsWebsiteReady(true);
        } else {
          setIsWebsiteReady(false);
        }
      } catch (error) {
        console.error('Error checking website status:', error);
        setIsWebsiteReady(false);
      } finally {
        setIsLoading(false);
      }
    };
    checkWebsiteStatus();
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Preview Header */}
      <div className="p-4 border-b border-gray-200 bg-white">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Website Preview</h2>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsInfoDialogOpen(true)}
              className="flex items-center gap-2 text-blue-600 border-blue-300 hover:bg-blue-50"
            >
              <Info className="w-4 h-4" />
              Info
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={refreshWebsite}
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(websiteUrl, '_blank')}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Open in New Tab
            </Button>
          </div>
        </div>
      </div>

      {/* Iframe Container with Loading Overlay */}
      <div className="flex-1 bg-white relative">
        {(!isWebsiteReady || isLoading) && (
          <LoadingOverlay 
            isLoading={isLoading} 
            onRetry={retryWebsiteCheck}
          />
        )}
        
        <iframe
          ref={iframeRef}
          src={websiteUrl}
          className="w-full h-full border-0"
          title={`${projectName} Preview`}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          style={{ opacity: isWebsiteReady ? 1 : 0 }}
        />
      </div>

      {/* Info Dialog */}
      <Dialog open={isInfoDialogOpen} onOpenChange={setIsInfoDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600" />
              Deployment Status
            </DialogTitle>
            <DialogDescription className="text-left">
              <div className="space-y-4 mt-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  Your website previews may not automatically refresh as we need to wait for deployment on GitHub Pages. 
                  Please be patient while your changes are being deployed.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  You can check the deployment status by visiting our GitHub repository to see the latest build progress.
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(import.meta.env.VITE_GITHUB_REPO_URL, '_blank')}
                    className="flex items-center gap-2 text-blue-700 border-blue-300 hover:bg-blue-50"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Check Status on GitHub
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default WebsitePreview;
