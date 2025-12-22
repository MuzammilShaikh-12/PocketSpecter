"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import {
  useRouter,
  useParams,
} from "next/navigation";

import { useAuth } from "@/hooks/use-Auth";
import { useChat } from "@/hooks/use-chat";

import Navbar from "@/components/custom/Navbar";
import SideBar from "../components/SideBar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import SnapWindow from "../components/SnapWindow";

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const chatIdString =
    params.id as string;
  const chatId =
    chatIdString === "new"
      ? null
      : parseInt(chatIdString, 10);

  const {
    user,
    isAuthenticated,
    loading: authLoading,
    logout,
  } = useAuth();

  const {
    messages,
    sessions,
    currentSession,
    loading: chatLoading,
    error,
    createNewChat,
    loadChat,
    loadSessions,
    sendMessage,
    deleteChat,
  } = useChat();

  const [input, setInput] =
    useState("");
  const hasInitializedRef =
    useRef(false);
  const isNewChat =
    chatIdString === "new";

  // Mock data for right panel
  const quickSnapshot = [
    "Case Law References",
    "Rights Database",
    "Legal Process Guides",
  ];

  const documentDrafts = [
    "New RTI App",
    "Review Contract",
  ];

  // Authentication check
  useEffect(() => {
    if (
      !authLoading &&
      !isAuthenticated
    ) {
      router.push("/auth");
    }
  }, [
    authLoading,
    isAuthenticated,
    router,
  ]);

  // Load chat sessions
  useEffect(() => {
    if (
      isAuthenticated &&
      !hasInitializedRef.current
    ) {
      hasInitializedRef.current = true;
      loadSessions();
    }
  }, [isAuthenticated, loadSessions]);

  // Load the specific chat based on ID from URL
  useEffect(() => {
    if (
      !isAuthenticated ||
      sessions.length === 0
    )
      return;

    // /chat/new → do nothing, empty state
    if (isNewChat) return;

    // Existing chat
    if (
      chatId !== null &&
      !isNaN(chatId)
    ) {
      if (currentSession !== chatId) {
        loadChat(chatId);
      }
      return;
    }

    // Invalid route → redirect
    router.replace("/chat/new");
  }, [
    isAuthenticated,
    sessions,
    chatId,
    isNewChat,
    currentSession,
    loadChat,
    router,
  ]);

  // Reset the loaded flag when chatId changes
  useEffect(() => {}, [chatIdString]);

  const handleSendMessage =
    async () => {
      if (!input.trim() || chatLoading)
        return;

      const message = input.trim();
      setInput("");

      const newChatId =
        await sendMessage(message);

      if (isNewChat && newChatId) {
        router.replace(
          `/chat/${newChatId}`
        );
      }
    };

  const handleNewChat = async () => {
    // Just navigate to /chat/new - no need to create session yet
    const newChatId =
      await createNewChat();

    if (newChatId) {
      router.push(`/chat/${newChatId}`);
    }
  };

  const handleLoadChat = (
    sessionId: number
  ) => {
    router.push(`/chat/${sessionId}`);
  };

  const handleDeleteChat = async (
    sessionId: number
  ) => {
    await deleteChat(sessionId);

    // If we deleted the current chat, redirect to another one
    if (sessionId === chatId) {
      const remainingSessions =
        sessions.filter(
          (s) => s !== sessionId
        );
      if (
        remainingSessions.length > 0
      ) {
        router.push(
          `/chat/${remainingSessions[0]}`
        );
      } else {
        // No more sessions, create a new chat
        router.push("/chat/new");
      }
    }
  };

  // Global loading
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-white" />
      </div>
    );
  }

  if (!isAuthenticated) return null;

  // Show loading while sessions are being fetched (but not for new chats)
  if (
    sessions.length === 0 &&
    !isNewChat &&
    !hasInitializedRef.current
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-white" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      <Navbar
        height="90px"
        maxWidth="w-4xl"
      />

      <main className="flex h-[calc(100vh-10px)] pt-3 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-1/5 p-4 h-full">
          <SideBar
            user={user}
            sessions={sessions}
            currentSession={
              isNewChat
                ? null
                : currentSession
            }
            onNewChat={handleNewChat}
            onLoadChat={handleLoadChat}
            onDeleteChat={
              handleDeleteChat
            }
            onLogout={logout}
          />
        </aside>

        {/* Main Chat */}
        <section className="flex flex-col flex-1 relative pt-8">
          <div className="flex-1 overflow-y-auto p-4">
            <ChatWindow
              messages={messages}
              loading={chatLoading}
              error={error}
            />
          </div>
          <div className="p-3 bottom-3 ">
            <ChatInput
              value={input}
              onChange={setInput}
              onSend={handleSendMessage}
              loading={chatLoading}
            />
          </div>
        </section>

        {/* Right Panel */}
        <aside className="w-1/5 p-4 flex flex-col gap-6">
          <SnapWindow
            title="Quick Snapshot"
            items={quickSnapshot}
          />
          <SnapWindow
            title="Document Drafts"
            items={documentDrafts}
          />
        </aside>
      </main>
    </div>
  );
}
