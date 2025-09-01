import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Clock, Loader2, CheckCircle, XCircle } from "lucide-react";

interface ActiveTask {
  id: string;
  task: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  createdAt: Date;
  updatedAt: Date;
  messageId?: string;
}

interface TaskCardProps {
  task: ActiveTask;
  onRemove: (taskId: string) => void;
}

const TaskCard = ({ task, onRemove }: TaskCardProps) => {
  const getStatusIcon = () => {
    switch (task.status) {
      case 'pending':
        return <Clock className="w-3 h-3 text-yellow-500" />;
      case 'in_progress':
        return <Loader2 className="w-3 h-3 text-blue-500 animate-spin" />;
      case 'completed':
        return <CheckCircle className="w-3 h-3 text-green-500" />;
      case 'failed':
        return <XCircle className="w-3 h-3 text-red-500" />;
      default:
        return <Clock className="w-3 h-3 text-gray-500" />;
    }
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'pending':
        return 'bg-yellow-50 border-yellow-200';
      case 'in_progress':
        return 'bg-blue-50 border-blue-200';
      case 'completed':
        return 'bg-green-50 border-green-200';
      case 'failed':
        return 'bg-red-50 border-red-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  const getStatusText = () => {
    switch (task.status) {
      case 'pending':
        return 'Queued';
      case 'in_progress':
        return 'In Progress';
      case 'completed':
        return 'Completed';
      case 'failed':
        return 'Failed';
      default:
        return 'Unknown';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="mb-2"
    >
      <div className={`p-2 border rounded-md ${getStatusColor()} w-full`}>
        <div className="flex items-start gap-2">
          <div className="flex items-center gap-1 flex-shrink-0">
            {getStatusIcon()}
            <Badge variant="outline" className="text-xs px-1.5 py-0.5">
              {getStatusText()}
            </Badge>
          </div>
          <div className="flex-1 min-w-0">
            <span className="text-xs text-gray-600 break-words leading-relaxed block">
              {task.task}
            </span>
          </div>
          {(task.status === 'completed' || task.status === 'failed') && (
            <button
              onClick={() => onRemove(task.id)}
              className="h-4 w-4 p-0 opacity-50 hover:opacity-100 flex-shrink-0 text-xs leading-none flex items-center justify-center rounded-full hover:bg-gray-200"
            >
              ×
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TaskCard;
export type { ActiveTask };
