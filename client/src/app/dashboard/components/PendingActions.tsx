import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import React from "react";

const PendingActions = () => {
  const notifications = [
    {
      text: "Review RTI Application",
      urgent: true,
    },
    {
      text: "Legal Rights Compliance Check",
      urgent: false,
    },
    {
      text: "Consult AI Assistant for Case Review",
      urgent: false,
    },
  ];

  return (
    <Card className="bg-white/5  border border-white/10 rounded-2xl shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-lg text-cyan-400">
          Recent Chats
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {notifications.map(
            (notification, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:bg-gray-800/50 cursor-pointer">
                <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                <span className="text-sm text-gray-300 flex-1">
                  {notification.text}
                </span>
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PendingActions;
