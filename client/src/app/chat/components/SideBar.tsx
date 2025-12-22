import ConfirmDialog from "@/components/custom/ConfirmDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash } from "lucide-react";
import React from "react";
import { useState } from "react";

interface SideBarProps {
  user: unknown;
  sessions: number[];
  currentSession: number | null;
  onNewChat: () => void;
  onLoadChat: (id: number) => void;
  onDeleteChat: (id: number) => void;
  onLogout: () => void;
}

export default function SideBar({
  user,
  sessions,
  currentSession,
  onNewChat,
  onLoadChat,
  onDeleteChat,
  onLogout,
}: SideBarProps) {
  const [confirmOpen, setConfirmOpen] =
    useState(false);
  const [selectedId, setSelectedId] =
    useState<number | null>(null);

  return (
    <div className="flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl shadow-lg p-5">
      {/* New Chat */}
      <div className="flex flex-col space-y-4 mb-2">
        <Button
          onClick={() => {
            console.log("New Chat");
            onNewChat();
          }}
          variant="secondary"
          className="w-full justify-center text-[#feb204] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-gray-600/50 ">
          + New Chat
        </Button>
      </div>

      {/* Recent Chats */}
      <div className="flex flex-col flex-1 min-h-0">
        <h2 className="text-sm font-semibold text-gray-400 mb-2">
          Recent Chats
        </h2>

        <div className="flex-1 overflow-y-auto space-y-3 p-1">
          {sessions.map((sessionId) => (
            <Card
              key={sessionId}
              onClick={() =>
                onLoadChat(sessionId)
              }
              className={`
                flex p-3 bg-white/5 backdrop-blur-md border border-white/10 
                cursor-pointer group hover:bg-gray-600/50 
                ${
                  currentSession ===
                  sessionId
                    ? "ring-2 ring-[#feb204]"
                    : ""
                }
              `}>
              <div className="flex w-full items-center gap-2 ">
                {/* Chat title */}
                <div className="flex-1 min-w-0 gap-x-2">
                  <p className="text-sm text-[#feb204] font-medium truncate">
                    Chat {sessionId}
                  </p>
                </div>

                {/* Options TODO: Use 3 dots to make rename and delete (DELETE dialog is ready) */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedId(
                      sessionId
                    );
                    setConfirmOpen(
                      true
                    );
                  }}
                  className="shrink-0 text-gray-400 hover:text-white hover:bg-red-600/30 opacity-0 group-hover:opacity-100 transition  rounded-full">
                  <Trash />
                </Button>

                <ConfirmDialog
                  open={confirmOpen}
                  title="Delete Chat"
                  description="Are you sure you want to delete this chat? This action cannot be undone."
                  confirmText="Delete"
                  destructive={true}
                  onCancel={() =>
                    setConfirmOpen(
                      false
                    )
                  }
                  onConfirm={() => {
                    if (
                      selectedId !==
                      null
                    ) {
                      onDeleteChat(
                        sessionId
                      );
                    }
                    setConfirmOpen(
                      false
                    );
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
      {/* Can also add User Name and email using user props */}

      {/* Logout */}
      <div className="pt-4 border-t border-white/10 mt-4">
        <Button
          onClick={onLogout}
          variant="ghost"
          className="w-full text-red-400 hover:text-red-300 hover:bg-red-500/10">
          Logout
        </Button>
      </div>
    </div>
  );
}
