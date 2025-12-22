// User types
export interface User {
  id: string;
  email: string;
  name: string;
  profilePicture?: string;
  lastLogin: string;
  createdAt: string;
}

// Chat types
export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatSession {
  chat_session: number;
  lastMessage?: string;
  createdAt?: string;
}

// API Response types
export interface AuthStatusResponse {
  authenticated: boolean;
  user?: User;
}

export interface ChatResponse {
  reply: string;
  chat_session: number;
}

export interface NewChatResponse {
  status: string;
  chat_session: number;
}

export interface LoadChatResponse {
  status: string;
  chat: ChatMessage[];
  chat_session: number;
}

export interface DeleteChatResponse {
  status: string;
  deleted_count: number;
}

export interface UserChatsResponse {
  status: string;
  chat_sessions: number[];
  count: number;
}

export interface HealthResponse {
  status: string;
  service: string;
  mongodb?: string;
  timestamp: string;
}
