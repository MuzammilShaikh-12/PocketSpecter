"use client";

import React, {
  useEffect,
  useState,
} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => Promise<void> | void;
  loading: boolean;
}

export default function ChatInput({
  value,
  onChange,
  onSend,
  loading,
}: ChatInputProps) {
  const [isTyping, setIsTyping] =
    useState(false);

  // ✨ Typing accent effect (unchanged)
  useEffect(() => {
    if (value.length > 0 && !loading) {
      setIsTyping(true);
      const timeout = setTimeout(
        () => setIsTyping(false),
        1200
      );
      return () =>
        clearTimeout(timeout);
    }
  }, [value, loading]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSend();
      }}
      className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-2 flex items-center gap-3 relative transition-all duration-300 ">
      {/* Glow Effect */}
      {/* TODO: fix the ring light effect after sending message and make the input field scrollable */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-700 pointer-events-none ${
          isTyping
            ? "ring-2 ring-[#FFD700]/70 shadow-[0_0_15px_rgba(225,194,118,0.2)]"
            : "ring-0 shadow-none"
        }`}
      />

      {/* Input */}
      <Textarea
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Type your legal query..."
        disabled={loading}
        className="flex-1 resize-none bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none text-sm text-white placeholder-gray-500 relative z-10 max-h-40 overflow-auto"
      />

      {/* Send Button */}
      <Button
        type="submit"
        disabled={
          loading || !value.trim()
        }
        variant="ghost"
        className="rounded-full p-2 relative group transition-all duration-300 bg-transparent hover:bg-transparent active:bg-transparent">
        {/* Glow */}
        <span className="absolute inset-0 rounded-full bg-[#E1C276] opacity-30 blur-md transition-all duration-300 group-hover:opacity-70 group-hover:blur-lg" />

        {/* Loading / Send Icon */}
        {loading ? (
          <span className="relative z-10 flex items-center justify-center">
            <span className="size-4 border-[2px] border-[#E1C276] border-t-transparent rounded-full animate-spin" />
          </span>
        ) : (
          <Send className="relative z-10 size-5 text-[#E1C276] transition-transform duration-300 group-hover:scale-110 group-hover:text-[#FFD700]" />
        )}
      </Button>
    </form>
  );
}
