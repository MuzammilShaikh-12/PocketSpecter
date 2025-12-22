"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/use-Auth";
import { useChat } from "@/hooks/use-chat";

export default function ChatRedirect() {
  const router = useRouter();
  const {
    isAuthenticated,
    loading: authLoading,
  } = useAuth();
  const {
    sessions,
    loading: chatLoading,
    loadSessions,
  } = useChat();

  useEffect(() => {
    if (isAuthenticated) {
      loadSessions();
    }
  }, [isAuthenticated, loadSessions]);

  useEffect(() => {
    const redirectToChat = async () => {
      if (authLoading || chatLoading)
        return;

      if (!isAuthenticated) {
        router.push("/auth");
        return;
      }

      // If there are existing sessions, redirect to the first one
      if (sessions.length > 0) {
        router.push(
          `/chat/${sessions[0]}`
        );
      } else {
        // No sessions, redirect to new chat
        router.push("/chat/new");
      }
    };

    redirectToChat();
  }, [
    isAuthenticated,
    authLoading,
    chatLoading,
    sessions,
    router,
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-white" />
    </div>
  );
}
