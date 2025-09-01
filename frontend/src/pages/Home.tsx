
import { useNavigate } from "react-router-dom";
import WebsiteBuilderForm from "@/components/WebsiteBuilderForm";

const Home = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (data: {
    message: string;
    apiKey: string;
    projectName: string;
  }) => {
    console.log("Form submitted:", data);
    
    // Store API key in localStorage for the chat interface
    localStorage.setItem('codexhub_api_key', data.apiKey);
    
    // Navigate to chat interface
    navigate(`/projects/${data.projectName}`);
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
      <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6 py-12">
        <WebsiteBuilderForm onSubmit={handleFormSubmit} />
      </main>
    </div>
  );
};

export default Home;