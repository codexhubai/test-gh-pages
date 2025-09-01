import { motion } from "framer-motion";
import { Clock, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { ActiveTask } from "./TaskCard";

interface TaskStatusProps {
  activeTask: ActiveTask;
  showTaskId?: boolean;
  className?: string;
}

const TaskStatus = ({ activeTask, showTaskId = true, className = "" }: TaskStatusProps) => {
  const getStatusIcon = () => {
    switch (activeTask.status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-blue-500 animate-pulse" />;
      case 'in_progress':
        return <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusText = () => {
    switch (activeTask.status) {
      case 'pending':
        return 'Task queued...';
      case 'in_progress':
        return 'Creating your website...';
      case 'completed':
        return 'Website created successfully!';
      case 'failed':
        return 'Task failed';
      default:
        return 'Unknown status';
    }
  };

  const getStatusColor = () => {
    switch (activeTask.status) {
      case 'pending':
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 border rounded-lg ${getStatusColor()} ${className}`}
    >
      <div className="flex items-center gap-3">
        {getStatusIcon()}
        <div>
          <p className={`text-sm font-medium ${
            activeTask.status === 'completed' ? 'text-green-700' : 
            activeTask.status === 'failed' ? 'text-red-700' : 'text-blue-700'
          }`}>
            {getStatusText()}
          </p>
          {showTaskId && (
            <p className="text-xs text-blue-600 mt-1">
              Task ID: {activeTask.id.slice(0, 8)}...
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TaskStatus;
