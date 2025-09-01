import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { ActiveTask } from "./TaskCard";

interface ChatInputProps {
  inputMessage: string;
  setInputMessage: (message: string) => void;
  onSendMessage: () => void;
  isLoading: boolean;
  activeTasks: ActiveTask[];
}

const ChatInput = ({ 
  inputMessage, 
  setInputMessage, 
  onSendMessage, 
  isLoading, 
  activeTasks 
}: ChatInputProps) => {
  const hasActiveTasks = activeTasks.some(task => 
    task.status === 'pending' || task.status === 'in_progress'
  );

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  return (
    <div className="p-4 border-t border-gray-200 bg-white">
      {hasActiveTasks && (
        <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-blue-700">
            A task is currently running. Please wait for it to complete before sending another message.
          </p>
        </div>
      )}
      <div className="flex gap-2">
        <Textarea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={hasActiveTasks ? "Please wait for the current task to complete..." : "Describe the changes you want to make..."}
          className="flex-1 min-h-[80px] resize-none"
          disabled={isLoading || hasActiveTasks}
          rows={3}
        />
        <Button
          onClick={onSendMessage}
          disabled={!inputMessage.trim() || isLoading || hasActiveTasks}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 self-end"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
