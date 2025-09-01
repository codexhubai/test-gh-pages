import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCw, ExternalLink } from "lucide-react";

interface WebsitePreviewProps {
  projectName: string;
}

const WebsitePreview = ({ projectName }: WebsitePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const refreshWebsite = () => {
    if (iframeRef.current) {
      iframeRef.current.src = iframeRef.current.src;
    }
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
              onClick={refreshWebsite}
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`/projects/${projectName}`, '_blank')}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Open in New Tab
            </Button>
          </div>
        </div>
      </div>

      {/* Iframe */}
      <div className="flex-1 bg-white">
        <iframe
          ref={iframeRef}
          src={`${import.meta.env.VITE_GITHUB_PAGES_URL}/${projectName}`}
          className="w-full h-full border-0"
          title={`${projectName} Preview`}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
        />
      </div>
    </div>
  );
};

export default WebsitePreview;
