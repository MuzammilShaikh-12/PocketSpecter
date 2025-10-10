"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React, {
  useState,
  useEffect,
} from "react";

const ChatInput = () => {
  const [message, setMessage] =
    useState("");
  const [isSending, setIsSending] =
    useState(false);
  const [isTyping, setIsTyping] =
    useState(false);

  // Typing accent effect
  useEffect(() => {
    if (message.length > 0) {
      setIsTyping(true);
      const timeout = setTimeout(
        () => setIsTyping(false),
        1200
      );
      return () =>
        clearTimeout(timeout);
    }
  }, [message]);

  const handleSend = async () => {
    if (!message.trim()) return;
    setIsSending(true);

    // Simulated send delay (replace with actual API later)
    await new Promise((res) =>
      setTimeout(res, 1200)
    );

    setMessage("");
    setIsSending(false);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-4 flex items-center gap-3 relative transition-all duration-300">
      {/* Intelligent Typing Glow Effect */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none ${
          isTyping
            ? "ring-2 ring-[#FFD700]/70 shadow-[0_0_15px_rgba(225,194,118,0.2)]"
            : "ring-0 shadow-none"
        }`}
      />

      {/* Input */}
      <Input
        type="text"
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Type your legal query..."
        className="flex-1 bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none text-sm text-white placeholder-gray-500 relative z-10"
      />

      {/* Send Button */}
      <Button
        onClick={handleSend}
        disabled={isSending}
        className={`rounded-full p-2 relative group transition-all duration-300 bg-transparent hover:bg-transparent active:bg-transparent ${
          isSending ? "cursor-wait" : ""
        }`}
        variant="ghost">
        {/* Glow background */}
        <span className="absolute inset-0 rounded-full bg-[#E1C276] opacity-30 blur-md transition-all duration-300 group-hover:opacity-70 group-hover:blur-lg" />

        {/* Sending Animation */}
        {isSending ? (
          <span className="relative z-10 flex items-center justify-center">
            <span className="size-4 border-[2px] border-[#E1C276] border-t-transparent rounded-full animate-spin"></span>
          </span>
        ) : (
          <Send className="relative z-10 size-5 text-[#E1C276] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#FFD700]" />
        )}
      </Button>
    </div>
  );
};

export default ChatInput;
