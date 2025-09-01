// Types for Task Management
export type AgentResult = {
  message: string;
  spend?: number;
  agent: {
    success: boolean;
  };
  task: {
    success: boolean;
    codeChanges?: boolean;
    summary?: string;
    baseCommit?: string;
    headCommit?: string;
  };
};

export interface Task {
  id: string;
  task: string;
  status: 'pending' | 'in_progress' | 'completed' | 'failed';
  ownerType: 'user' | 'organization';
  ownerId: string;
  // Add Details about the agent
  agentId: string;
  agentName: string;
  agentFullName: string; // owner/name format
  a2aTaskId?: string;
  triggerDevId?: string;
  // Add Details about the repository
  repositoryId: string;
  repositoryName: string;
  repositoryBranchName: string;
  result?: AgentResult;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskResponse {
  success: boolean;
  task: Task;
}

export interface TaskError {
  success: false;
  message: string;
}

export class TaskService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'https://codexhub.ai/api/v1';
  }

  /**
   * Fetch task status by task ID
   * @param taskId - The task ID to fetch
   * @param apiKey - The API key for authentication
   * @returns Promise<TaskResponse | TaskError>
   */
  async getTaskById(taskId: string, apiKey: string): Promise<TaskResponse | TaskError> {
    const url = `${this.baseUrl}/tasks/${taskId}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || `HTTP error! status: ${response.status}`,
        };
      }

      return data as TaskResponse;
    } catch (error) {
      console.error('Error fetching task:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred while fetching the task',
      };
    }
  }

  /**
   * Check if a task is in a terminal state (completed or failed)
   * @param status - The task status
   * @returns boolean
   */
  isTaskComplete(status: Task['status']): boolean {
    return status === 'completed' || status === 'failed';
  }

  /**
   * Check if a task is still processing (pending or in_progress)
   * @param status - The task status
   * @returns boolean
   */
  isTaskProcessing(status: Task['status']): boolean {
    return status === 'pending' || status === 'in_progress';
  }
}

// Export a singleton instance
export const taskService = new TaskService();
