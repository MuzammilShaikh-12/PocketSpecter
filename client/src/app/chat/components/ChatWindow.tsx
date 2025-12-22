"use client";

import React, {
  useEffect,
  useRef,
} from "react";
import { Card } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { motion } from "framer-motion";

import {
  userMessageVariants,
  botMessageVariants,
} from "@/app/chat/animations/messageMotion";

interface ChatWindowProps {
  messages: {
    role: "user" | "assistant";
    content: string;
    time?: string;
  }[];
  loading: boolean;
  error?: string | null;
}

export default function ChatWindow({
  messages,
  loading,
  error,
}: ChatWindowProps) {
  const bottomRef =
    useRef<HTMLDivElement | null>(null);

  // 🔽 Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  // Empty state
  if (
    messages.length === 0 &&
    !loading &&
    !error
  ) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-gray-400">
        <p className="text-lg">
          Start the conversation by
          typing a message below.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 h-[500px] overflow-y-auto">
      {messages.map((msg, idx) => (
        <motion.div
          key={idx}
          variants={
            msg.role === "user"
              ? userMessageVariants
              : botMessageVariants
          }
          initial="hidden"
          animate="visible"
          className={`flex items-end gap-2 ${
            msg.role === "user"
              ? "justify-end"
              : "justify-start"
          }`}>
          {/* Bot Avatar */}
          {msg.role === "assistant" && (
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="/bot.png"
                alt="Bot"
              />
              <AvatarFallback>
                🤖
              </AvatarFallback>
            </Avatar>
          )}

          {/* Message Bubble */}
          <Card
            className={`px-3 py-3 rounded-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl 
              border-none break-words ${
                msg.role === "user"
                  ? "bg-[#393735] text-[#FFD700] rounded-br-none"
                  : "bg-[#D7D9DC] text-black rounded-bl-none"
              }`}>
            <p className="text-sm whitespace-pre-wrap">
              {msg.content}
            </p>
            <span className="block text-[10px] text-gray-500 mt-0.5 text-right">
              {msg.time ?? ""}
            </span>
          </Card>

          {/* User Avatar */}
          {msg.role === "user" && (
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="/user.png"
                alt="User"
              />
              <AvatarFallback>
                👤
              </AvatarFallback>
            </Avatar>
          )}
        </motion.div>
      ))}

      {/* Typing Indicator */}
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/bot.png" />
            <AvatarFallback>
              🤖
            </AvatarFallback>
          </Avatar>
          <Card className="px-3 py-2 bg-[#D7D9DC] text-black rounded-xl rounded-bl-none">
            <span className="text-sm animate-pulse">
              Pocket Specter is typing…
            </span>
          </Card>
        </motion.div>
      )}

      {/* Error */}
      {error && (
        <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
          {error}
        </div>
      )}

      <div ref={bottomRef} />
    </div>
  );
}
