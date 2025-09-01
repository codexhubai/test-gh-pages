// Types for the API request and response
export interface Attachment {
  fileUrl: string;
  name: string;
  mimeType: string;
  size: number;
}

export interface RunAgentRequest {
  repoUrl: string;
  prompt: string;
  branchName?: string | null;
  autoMerge?: boolean | null;
  attachments?: Attachment[];
}

export interface TaskResponse {
  taskId: string;
  status: {
    state: string;
  };
  metadata?: {
    codexTaskId?: string;
  };
}

export interface RunAgentResponse {
  success: boolean;
  task: TaskResponse;
}

export interface ApiError {
  error: string;
  details?: any;
}

export class AgentService {
  private agentUrl: string;

  constructor() {
    // Get base URL from environment variable
    this.agentUrl = import.meta.env.VITE_CODEXHUB_AGENT_URL || '';
    
    if (!this.agentUrl) {
      throw new Error('VITE_CODEXHUB_AGENT_URL environment variable is not set');
    }
    
    // Remove trailing slash if present
    this.agentUrl = this.agentUrl.replace(/\/$/, '');
  }

  /**
   * Run an agent by username and agent name
   * @param username - The username of the agent owner
   * @param agentName - The name of the agent
   * @param request - The request payload
   * @returns Promise<RunAgentResponse>
   */
  async runAgent(
    apiKey: string, 
    request: RunAgentRequest
  ): Promise<RunAgentResponse> {
    const url = this.agentUrl;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData: ApiError = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data: RunAgentResponse = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('An unexpected error occurred while calling the agent');
    }
  }

  /**
   * Get the base URL being used by the service
   * @returns string
   */
  getagentUrl(): string {
    return this.agentUrl;
  }
}

// Export a singleton instance
export const agentService = new AgentService();
