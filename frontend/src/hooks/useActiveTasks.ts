import { useState, useEffect } from 'react';
import { ActiveTask } from '@/components/TaskCard';

export const useActiveTasks = (projectName: string | undefined) => {
  const [activeTasks, setActiveTasks] = useState<ActiveTask[]>([]);

  // Initialize active tasks from localStorage
  useEffect(() => {
    if (projectName) {
      const existingTaskData = localStorage.getItem(`codexhub_task_${projectName}`);
      console.log(`Looking for task data for project: ${projectName}`, existingTaskData);
      
      if (existingTaskData) {
        try {
          const taskData = JSON.parse(existingTaskData);
          const activeTask: ActiveTask = {
            id: taskData.id,
            task: taskData.task,
            status: taskData.status,
            createdAt: new Date(taskData.createdAt),
            updatedAt: new Date(taskData.updatedAt)
          };
          
          console.log('Setting active task:', activeTask);
          setActiveTasks([activeTask]);
          
          // Clean up the localStorage entry after reading it
          localStorage.removeItem(`codexhub_task_${projectName}`);
        } catch (error) {
          console.error('Error parsing existing task data:', error);
          // Clean up corrupted data
          localStorage.removeItem(`codexhub_task_${projectName}`);
        }
      }
    }
  }, [projectName]);

  const addTask = (task: ActiveTask) => {
    setActiveTasks(prev => [...prev, task]);
  };

  const updateTask = (taskId: string, status: string) => {
    setActiveTasks(prev => prev.map(task => 
      task.id === taskId 
        ? { ...task, status: status as ActiveTask['status'], updatedAt: new Date() }
        : task
    ));
  };

  const removeTask = (taskId: string) => {
    setActiveTasks(prev => prev.filter(task => task.id !== taskId));
  };

  return {
    activeTasks,
    addTask,
    updateTask,
    removeTask
  };
};
