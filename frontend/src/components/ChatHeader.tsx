import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ActiveTask } from "./TaskCard";

interface ChatHeaderProps {
  projectName: string;
  activeTasks: ActiveTask[];
}

const ChatHeader = ({ projectName, activeTasks }: ChatHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="p-4 border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="p-1"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">C</span>
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-800">CodexHub Chat</h1>
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500">Project: {projectName}</p>
            </div>
            {activeTasks.length > 0 && (
              <div className="mt-1">
                <Badge variant="outline" className="text-xs">
                  {activeTasks.filter(t => t.status === 'pending' || t.status === 'in_progress').length} active task{activeTasks.filter(t => t.status === 'pending' || t.status === 'in_progress').length !== 1 ? 's' : ''}
                </Badge>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
