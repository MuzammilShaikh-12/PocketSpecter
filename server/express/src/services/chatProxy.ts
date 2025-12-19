import axios, { AxiosError } from 'axios';

const FASTAPI_URL = process.env.FASTAPI_URL || 'http://localhost:8000';

interface HealthResponse {
  status: string;
  service: string;
  mongodb: string;
  timestamp: string;
}

interface ChatResponse {
  reply: string;
  chat_session: number;
}

interface NewChatResponse {
  status: string;
  chat_session: number;
}

interface LoadChatResponse {
  status: string;
  chat: Array<{ role: string; content: string }>;
}

interface DeleteChatResponse {
  status: string;
}

interface UserChatsResponse {
  status: string;
  chat_sessions: number[];
}

/**
 * Check if FastAPI service is healthy
 */
export const checkFastAPIHealth = async (): Promise<HealthResponse> => {
  try {
    const response = await axios.get<HealthResponse>(`${FASTAPI_URL}/health`, {
      timeout: 5000,
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(`FastAPI health check failed: ${err.message}`);
  }
};

/**
 * Send chat message to FastAPI
 */
export const sendChatMessage = async (
  userId: string,
  chatSession: number,
  message: string
): Promise<ChatResponse> => {
  try {
    const response = await axios.post<ChatResponse>(
      `${FASTAPI_URL}/api/chat`,
      {
        chat_session: chatSession,
        message: message,
        user_id: userId,
      },
      {
        headers: { 'Content-Type': 'application/json', 'X-User-ID': userId },

        timeout: 30000,
      }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError<{ error: string }>;
    if (err.response) {
      throw new Error(err.response.data.error || 'FastAPI error');
    }
    throw new Error(`Failed to communicate with chat service: ${err.message}`);
  }
};

/**
 * Create new chat session
 */
export const createNewChat = async (userId: string): Promise<NewChatResponse> => {
  try {
    const response = await axios.post<NewChatResponse>(
      `${FASTAPI_URL}/api/new_chat`,
      { user_id: userId },
      {
        headers: { 'Content-Type': 'application/json', 'X-User-ID': userId },
        timeout: 5000,
      }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(`Failed to create new chat: ${err.message}`);
  }
};

/**
 * Load chat history
 */
export const loadChatHistory = async (
  userId: string,
  chatSession: number
): Promise<LoadChatResponse> => {
  try {
    const response = await axios.post<LoadChatResponse>(
      `${FASTAPI_URL}/api/load_chat`,
      {
        user_id: userId,
        chat_session: chatSession,
      },
      {
        headers: { 'Content-Type': 'application/json', 'X-User-ID': userId },
        timeout: 5000,
      }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(`Failed to load chat: ${err.message}`);
  }
};

/**
 * Delete chat session
 */
export const deleteChat = async (
  userId: string,
  chatSession: number
): Promise<DeleteChatResponse> => {
  try {
    const response = await axios.post<DeleteChatResponse>(
      `${FASTAPI_URL}/api/delete_chat`,
      {
        user_id: userId,
        chat_session: chatSession,
      },
      {
        headers: { 'Content-Type': 'application/json', 'X-User-ID': userId },
        timeout: 5000,
      }
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(`Failed to delete chat: ${err.message}`);
  }
};

/**
 * Get all user's chat sessions
 */
export const getUserChats = async (userId: string): Promise<UserChatsResponse> => {
  try {
    const response = await axios.get<UserChatsResponse>(`${FASTAPI_URL}/api/user_chats/${userId}`, {
      headers: { 'X-User-ID': userId },
      timeout: 5000,
    });
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    throw new Error(`Failed to get user chats: ${err.message}`);
  }
};
