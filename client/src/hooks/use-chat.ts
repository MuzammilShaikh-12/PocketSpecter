"use client";

import {
  useState,
  useCallback,
} from "react";
import { api } from "@/lib/api";
import { ChatMessage } from "@/lib/types";

export function useChat() {
  const [
    currentSession,
    setCurrentSession,
  ] = useState<number>(0);
  const [messages, setMessages] =
    useState<ChatMessage[]>([]);
  const [sessions, setSessions] =
    useState<number[]>([]);
  const [loading, setLoading] =
    useState(false);
  const [error, setError] = useState<
    string | null
  >(null);

  // Load all user sessions
  const loadSessions =
    useCallback(async () => {
      try {
        setError(null);
        const response =
          await api.getUserChats();
        setSessions(
          response.chat_sessions
        );
        return response.chat_sessions;
      } catch (err) {
        setError(
          "Failed to load sessions"
        );
        console.error(err);
        return [];
      }
    }, []);

  // Create new chat session
  const createNewChat =
    useCallback(async () => {
      try {
        setLoading(true);
        setError(null);
        const response =
          await api.createNewChat();
        setCurrentSession(
          response.chat_session
        );
        setMessages([]);
        await loadSessions(); // Refresh session list
        return response.chat_session;
      } catch (err) {
        setError(
          "Failed to create new chat"
        );
        console.error(err);
        return null;
      } finally {
        setLoading(false);
      }
    }, [loadSessions]);

  // Load chat history
  const loadChat = useCallback(
    async (chatSession: number) => {
      try {
        setLoading(true);
        setError(null);
        const response =
          await api.loadChatHistory(
            chatSession
          );
        setMessages(response.chat);
        setCurrentSession(chatSession);
      } catch (err) {
        setError("Failed to load chat");
        console.error(err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const sendMessage = useCallback(
    async (message: string) => {
      if (!message.trim()) return null;

      try {
        setLoading(true);
        setError(null);

        // Optimistic user message
        const userMessage: ChatMessage =
          {
            role: "user",
            content: message,
          };

        setMessages((prev) => [
          ...prev,
          userMessage,
        ]);

        // Send to backend
        const response =
          await api.sendMessage(
            currentSession,
            message
          );

        // 🔑 IMPORTANT: if backend created a new chat
        if (response.chat_session) {
          setCurrentSession(
            response.chat_session
          );
        }

        // Assistant message
        const assistantMessage: ChatMessage =
          {
            role: "assistant",
            content: response.reply,
          };

        setMessages((prev) => [
          ...prev,
          assistantMessage,
        ]);

        // 🔑 RETURN CHAT ID (not reply)
        return (
          response.chat_session ??
          currentSession
        );
      } catch (err) {
        setError(
          "Failed to send message"
        );
        console.error(err);

        // rollback optimistic message
        setMessages((prev) =>
          prev.slice(0, -1)
        );

        return null;
      } finally {
        setLoading(false);
      }
    },
    [currentSession]
  );

  // Delete chat
  const deleteChat = useCallback(
    async (chatSession: number) => {
      try {
        setError(null);
        await api.deleteChat(
          chatSession
        );

        // If deleted current session, reset
        if (
          chatSession === currentSession
        ) {
          setCurrentSession(0);
          setMessages([]);
        }

        await loadSessions(); // Refresh session list
      } catch (err) {
        setError(
          "Failed to delete chat"
        );
        console.error(err);
      }
    },
    [currentSession, loadSessions]
  );

  return {
    currentSession,
    messages,
    sessions,
    loading,
    error,
    createNewChat,
    loadChat,
    loadSessions,
    sendMessage,
    deleteChat,
  };
}
