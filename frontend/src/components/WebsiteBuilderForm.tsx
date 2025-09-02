import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { 
  Send,
  FolderOpen,
  CheckCircle,
  XCircle
} from "lucide-react";
import TaskStatus from "@/components/TaskStatus";
import { useWebsiteBuilder } from "@/hooks/useWebsiteBuilder";

interface WebsiteBuilderFormProps {
  onSubmit?: (data: {
    message: string;
    projectName: string;
    taskId?: string;
    taskStatus?: string;
  }) => void;
}

const WebsiteBuilderForm = ({ onSubmit }: WebsiteBuilderFormProps) => {
  
  // Use the custom hook for form logic
  const {
    message,
    setMessage,
    projectName,
    handleProjectNameChange,
    isSubmitting,
    projectNameError,
    taskResult,
    activeTasks,
    canSubmit,
    handleSubmit,
    iframeRef
  } = useWebsiteBuilder({ onSubmit });



  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-4xl mx-auto"
    >
      <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-4xl font-bold text-gray-800">
                Build something
              </h1>
              <div className="flex items-center gap-1">
                <span className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  CodexHub
                </span>
                <div className="w-6 h-6 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-600">
              Create apps and websites by chatting with AI
            </p>
          </div>

          {/* Task Status */}
          {activeTasks.length > 0 && activeTasks.map((task) => (
            <TaskStatus key={task.id} activeTask={task} />
          ))}

          {/* Task Result */}
          {taskResult && activeTasks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-4 border rounded-lg ${
                activeTasks[0].status === 'completed' 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-center gap-3">
                {activeTasks[0].status === 'completed' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500" />
                )}
                <p className={`text-sm font-medium ${
                  activeTasks[0].status === 'completed' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {taskResult}
                </p>
              </div>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Project Name */}
            <div className="space-y-2">
              <Label htmlFor="projectName" className="text-sm font-medium text-gray-700">
                <FolderOpen className="w-4 h-4 inline mr-2" />
                Project Name
              </Label>
              <Input
                id="projectName"
                type="text"
                placeholder="e.g., my-awesome-project"
                value={projectName}
                onChange={handleProjectNameChange}
                disabled={activeTasks.length > 0}
                className={`h-12 border-2 transition-colors ${
                  projectNameError 
                    ? "border-red-500 focus:border-red-500" 
                    : "border-gray-200 focus:border-purple-500"
                } ${activeTasks.length > 0 ? "opacity-50 cursor-not-allowed" : ""}`}
                required
              />
              {projectNameError && (
                <p className="text-sm text-red-500 mt-1">{projectNameError}</p>
              )}
            </div>

            {/* Main Message Input */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Describe your website or app
              </Label>
              <div className="relative">
                <Textarea
                  id="message"
                  placeholder={activeTasks.length > 0 ? "Please wait for the current task to complete..." : "Ask CodexHub to create a web app..."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={activeTasks.length > 0}
                  className={`min-h-[120px] resize-none border-2 border-gray-200 focus:border-purple-500 transition-colors pr-20 ${
                    activeTasks.length > 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  required
                />
                
                {/* Bottom toolbar */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={!canSubmit || isSubmitting}
                    className="h-10 w-10 p-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting || activeTasks.length > 0 ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </motion.div>
  );
};

export default WebsiteBuilderForm;
