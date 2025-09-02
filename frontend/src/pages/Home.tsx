
import { useNavigate } from "react-router-dom";
import WebsiteBuilderForm from "@/components/WebsiteBuilderForm";
import { Button } from "@/components/ui/button";
import { ExternalLink, Info } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (data: {
    message: string;
    projectName: string;
    taskId?: string;
    taskStatus?: string;
  }) => {
    console.log("Form submitted:", data);
    
    // Store task information in localStorage for the chat interface
    if (data.taskId) {
      const taskData = {
        id: data.taskId,
        task: data.message,
        status: data.taskStatus || 'pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(`codexhub_task_${data.projectName}`, JSON.stringify(taskData));
      console.log("Task data stored in localStorage:", taskData);
    }
    
    // Small delay to ensure localStorage is set before navigation
    setTimeout(() => {
      // Navigate to chat interface
      navigate(`/projects/${data.projectName}`);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="w-full px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">C</span>
            </div>
            <span className="text-xl font-bold text-gray-800">CodexHub</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center  px-6 py-24">
        <WebsiteBuilderForm onSubmit={handleFormSubmit} />
      </main>


      {/* Build & Deploy Status Banner */}
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Info className="w-4 h-4 text-blue-600" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Build & Deploy Status
                </h3>
                <p className="text-blue-800 mb-4 leading-relaxed">
                  Your website previews may not automatically refresh as we need to wait for deployment on GitHub Pages. 
                  Please be patient while your changes are being deployed. You can check the deployment status by visiting our GitHub repository.
                </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;