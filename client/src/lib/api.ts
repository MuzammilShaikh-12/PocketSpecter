import {
  AuthStatusResponse,
  ChatResponse,
  NewChatResponse,
  LoadChatResponse,
  DeleteChatResponse,
  UserChatsResponse,
  HealthResponse,
  User,
} from "./types";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:3000";

class ApiClient {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  // Generic fetch wrapper with credentials
  private async fetch<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const config: RequestInit = {
      ...options,
      credentials: "include", // CRITICAL: Send cookies with every request
      headers: {
        "Content-Type":
          "application/json",
        ...options.headers,
      },
    };

    try {
      const response = await fetch(
        url,
        config
      );

      if (!response.ok) {
        const error = await response
          .json()
          .catch(() => ({
            error: "Request failed",
          }));
        throw new Error(
          error.error ||
            `HTTP ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      console.error(
        "API Error:",
        error
      );
      throw error;
    }
  }

  // ============================================
  // AUTHENTICATION
  // ============================================

  async checkAuthStatus(): Promise<AuthStatusResponse> {
    return this.fetch<AuthStatusResponse>(
      "/auth/status"
    );
  }

  getGoogleAuthUrl(): string {
    return `${this.baseURL}/auth/google`;
  }

  async logout(): Promise<{
    message: string;
  }> {
    return this.fetch("/auth/logout");
  }

  // ============================================
  // USER
  // ============================================

  async getUserProfile(): Promise<User> {
    return this.fetch<User>(
      "/api/user/profile"
    );
  }

  // ============================================
  // CHAT
  // ============================================

  async checkChatHealth(): Promise<HealthResponse> {
    return this.fetch<HealthResponse>(
      "/api/chat/health"
    );
  }

  async sendMessage(
    chatSession: number,
    message: string
  ): Promise<ChatResponse> {
    return this.fetch<ChatResponse>(
      "/api/chat/message",
      {
        method: "POST",
        body: JSON.stringify({
          chat_session: chatSession,
          message: message,
        }),
      }
    );
  }

  async createNewChat(): Promise<NewChatResponse> {
    return this.fetch<NewChatResponse>(
      "/api/chat/new",
      {
        method: "POST",
      }
    );
  }

  async loadChatHistory(
    chatSession: number
  ): Promise<LoadChatResponse> {
    return this.fetch<LoadChatResponse>(
      "/api/chat/load",
      {
        method: "POST",
        body: JSON.stringify({
          chat_session: chatSession,
        }),
      }
    );
  }

  async deleteChat(
    chatSession: number
  ): Promise<DeleteChatResponse> {
    return this.fetch<DeleteChatResponse>(
      `/api/chat/${chatSession}`,
      {
        method: "DELETE",
      }
    );
  }

  async getUserChats(): Promise<UserChatsResponse> {
    return this.fetch<UserChatsResponse>(
      "/api/chat/sessions"
    );
  }
}

export const api = new ApiClient(
  API_URL
);
