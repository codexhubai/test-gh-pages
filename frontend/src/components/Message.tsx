import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Bot, User } from "lucide-react";
import TaskCard, { ActiveTask } from "./TaskCard";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  taskId?: string;
}

interface MessageProps {
  message: Message;
  associatedTask?: ActiveTask;
  onRemoveTask: (taskId: string) => void;
}

const Message = ({ message, associatedTask, onRemoveTask }: MessageProps) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`flex gap-3 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
      >
        {message.sender === 'bot' && (
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
            <Bot className="w-4 h-4 text-white" />
          </div>
        )}
        
        <Card className={`max-w-[85%] p-3 ${
          message.sender === 'user' 
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' 
            : 'bg-white border-gray-200'
        }`}>
          <p className="text-sm break-words whitespace-pre-wrap leading-relaxed">{message.content}</p>
          <p className={`text-xs mt-2 ${
            message.sender === 'user' ? 'text-purple-100' : 'text-gray-400'
          }`}>
            {message.timestamp.toLocaleTimeString()}
          </p>
        </Card>

        {message.sender === 'user' && (
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-gray-600" />
          </div>
        )}
      </motion.div>
      
      {/* Show task card inline after bot message if there's an associated task */}
      {message.sender === 'bot' && associatedTask && (
        <div className="ml-11 mt-3 w-[calc(100%-2.75rem)]">
          <TaskCard
            task={associatedTask}
            onRemove={onRemoveTask}
          />
        </div>
      )}
    </div>
  );
};

export default Message;
export type { Message };
