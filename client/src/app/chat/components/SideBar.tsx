import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Ellipsis } from "lucide-react";
import React from "react";

const sampleChats = [
  {
    title: "Draft FIR for Theft",
    preview: "file me an FIR for theft",
  },
  {
    title: "Consumer Complaint",
    preview: "Drafting in progress",
  },
];

const SideBar = () => {
  return (
    <div className="space-y-6 bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6">
      {/* Recent Chats */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 mb-2">
          Recent Chats
        </h2>
        <div className="space-y-2">
          {sampleChats.map(
            (chat, i) => (
              <Card
                key={i}
                className="flex p-3 bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer group hover:bg-gray-600/50 ">
                {/* Chat content */}
                <div className="flex ">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-[#feb204] font-medium">
                      {chat.title}
                    </p>
                    <p className="text-xs pl-2 text-gray-400">
                      {chat.preview}
                    </p>
                  </div>
                  {/* Options button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="shrink-0 text-gray-400 hover:text-white hover:bg-gray-600/30 opacity-0 group-hover:opacity-100 transition rounded-full">
                    <Ellipsis />
                  </Button>
                </div>
              </Card>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
