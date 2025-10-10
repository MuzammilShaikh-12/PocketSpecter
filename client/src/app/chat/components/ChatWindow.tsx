"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  userMessageVariants,
  botMessageVariants,
} from "@/app/chat/animations/messageMotion";
import { motion } from "framer-motion";

const messages = [
  {
    from: "user",
    text: "Draft FIR for Theft",
    time: "11:25",
  },
  {
    from: "bot",
    text: "Yes, here is a draft for theft FIR with legal references.",
    time: "11:26",
  },
  {
    from: "user",
    text: "Explain Legal Term",
    time: "11:27",
  },
  {
    from: "bot",
    text: "This term means XYZ in the legal context with references.",
    time: "11:28",
  },
  {
    from: "bot",
    text: "This term means XYZ in the legal context. asndasjdnasjdnasjd ajsd ajsd ajs dkjas dja sdj asjd asjddjas dkjas djas djsanjdnasidnasiondiasndioansidnasiodn",
    time: "11:30",
  },
];

const ChatWindow = () => {
  return (
    <div className="space-y-4 bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6 h-[500px] overflow-y-auto">
      {messages.map((msg, i) => {
        const isUser =
          msg.from === "user";
        return (
          <motion.div
            key={i}
            variants={
              isUser
                ? userMessageVariants
                : botMessageVariants
            }
            initial="hidden"
            animate="visible"
            className={`flex items-end gap-2 ${
              isUser
                ? "justify-end"
                : "justify-start"
            }`}>
            {!isUser && (
              <Avatar className="w-8 h-8 relative">
                <AvatarImage
                  src="/bot.png"
                  alt="Bot"
                />
                <AvatarFallback>
                  🤖
                </AvatarFallback>
              </Avatar>
            )}

            <Card
              className={`px-3 py-3 rounded-xl max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl border-none break-words gap-2 ${
                isUser
                  ? "bg-[#393735] text-[#FFD700] rounded-br-none"
                  : "bg-[#D7D9DC] text-black rounded-bl-none"
              }`}>
              <p className="text-sm">
                {msg.text}
              </p>
              <span className="block text-[10px] text-gray-500 mt-0.5 text-right">
                {msg.time}
              </span>
            </Card>

            {isUser && (
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
        );
      })}
    </div>
  );
};

export default ChatWindow;
