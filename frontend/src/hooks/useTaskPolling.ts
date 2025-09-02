import { useCallback, useRef, useEffect, useMemo } from 'react';
import { taskService } from '@/services/taskService';
import { ActiveTask } from '@/components/TaskCard';

interface UseTaskPollingProps {
  activeTasks: ActiveTask[];
  onTaskUpdate: (taskId: string, status: string, result?: any) => void;
  onMessageUpdate: (taskId: string, content: string) => void;
  onIframeRefresh: () => void;
}

export const useTaskPolling = ({
  activeTasks,
  onTaskUpdate,
  onMessageUpdate,
  onIframeRefresh
}: UseTaskPollingProps) => {
  
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const pollingAttemptsRef = useRef<number>(0);
  const pollTasksRef = useRef<(() => Promise<void>) | null>(null);
  const maxPollingAttempts = 20;
  const POLLING_INTERVAL = 30000; // 30 seconds

  // Create a stable string representation of tasks that need polling
  const pollingTasksKey = useMemo(() => {
    const tasksToPoll = activeTasks.filter(task => 
      task.status === 'pending' || task.status === 'in_progress'
    );
    return tasksToPoll.map(task => `${task.id}:${task.status}`).join(',');
  }, [activeTasks]);

  const pollTasks = useCallback(async () => {
    // Get current active tasks that need polling
    const currentActiveTasks = activeTasks.filter(task => 
      task.status === 'pending' || task.status === 'in_progress'
    );

    console.log("Polling for tasks:", currentActiveTasks);
    
    if (currentActiveTasks.length === 0) {
      // No active tasks to poll, clear interval
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
      pollingAttemptsRef.current = 0;
      return;
    }

    // Increment polling attempts
    pollingAttemptsRef.current += 1;

    // Stop polling if we've exceeded max attempts
    if (pollingAttemptsRef.current > maxPollingAttempts) {
      console.warn('Max polling attempts reached, stopping polling');
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
      return;
    }

    // Batch API calls for better performance
    const taskPromises = currentActiveTasks.map(async (activeTask) => {
      try {
        const response = await taskService.getTaskById(activeTask.id);
        return { activeTask, response };
      } catch (error) {
        console.error('Error polling task:', error);
        return { activeTask, response: null };
      }
    });

    const results = await Promise.all(taskPromises);
    
    // Process results
    for (const { activeTask, response } of results) {
      if (response?.success) {
        const task = response.task;
        
        // Update the task status
        onTaskUpdate(activeTask.id, task.status);
        
        if (taskService.isTaskComplete(task.status)) {
          // Update the bot message with the result
          let resultMessage = "";
          
          if (task.status === 'completed') {
            if (task.result?.task?.summary) {
              resultMessage = task.result.task.summary;
            } else if (task.result?.message) {
              resultMessage = task.result.message;
            } else {
              resultMessage = "Task completed successfully! Your changes have been applied.";
            }
          } else if (task.status === 'failed') {
            resultMessage = "Task failed. Please try again or contact support if the issue persists.";
          }
          
          onMessageUpdate(activeTask.id, resultMessage);
          
          // Refresh the iframe to show updated website
          onIframeRefresh();
        }
      } else if (response) {
        console.error('Failed to fetch task status:', (response as any).message);
      }
    }
  }, [activeTasks, onTaskUpdate, onMessageUpdate, onIframeRefresh]);

  // Store the latest pollTasks function in ref
  pollTasksRef.current = pollTasks;

  // Start/stop polling based on active tasks
  useEffect(() => {
    // Check if we have active tasks that need polling
    const hasActiveTasks = pollingTasksKey.length > 0;
    
    if (hasActiveTasks && pollTasksRef.current) {
      // Reset polling attempts when starting new polling
      pollingAttemptsRef.current = 0;
      
      // Poll immediately, then every 30 seconds
      pollTasksRef.current();
      pollingIntervalRef.current = setInterval(() => {
        if (pollTasksRef.current) {
          pollTasksRef.current();
        }
      }, POLLING_INTERVAL);
    } else {
      // No active tasks, clear any existing interval
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    }
    
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    };
  }, [pollingTasksKey]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    };
  }, []);

  return {
    stopPolling: () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
      }
    }
  };
};
