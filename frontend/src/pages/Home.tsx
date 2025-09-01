import { motion } from "framer-motion";
import WebsiteBuilderForm from "@/components/WebsiteBuilderForm";

const Home = () => {
  const handleFormSubmit = async (data: {
    message: string;
    apiKey: string;
    projectName: string;
  }) => {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your API
    // For now, we'll just log it
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