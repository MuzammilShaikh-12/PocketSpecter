import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import React from "react";

const ChatInput = () => {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 flex items-center gap-3 px-4 py-2">
      <Input
        type="text"
        placeholder="Type your legal query or speak..."
        className="flex-1 bg-transparent border-none focus:ring-0 text-sm placeholder-gray-500"
      />

      <Button
        className="rounded-full p-2 relative group transition-all duration-300 hover:scale-110 bg-transparent hover:bg-transparent active:bg-transparent"
        variant="ghost">
        {/* Glow background */}
        <span className="absolute inset-0 rounded-full bg-[#E1C276] opacity-30 blur-md transition-all duration-300 group-hover:opacity-70 group-hover:blur-lg" />

        {/* Icon */}
        <Send className="relative z-10 size-5 text-[#E1C276] transition-colors duration-300 group-hover:text-[#FFD700]" />
      </Button>
    </div>
  );
};

export default ChatInput;
