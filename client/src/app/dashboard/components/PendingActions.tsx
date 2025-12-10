import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Scale, AlertCircle } from 'lucide-react';
import React from 'react'

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
          Pending Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Animated Icon */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-purple-500/25">
              <Scale className="w-8 h-8 text-white animate-bounce" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          </div>
        </div>

        <div className="space-y-3">
          {notifications.map(
            (notification, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:bg-gray-800/50 cursor-pointer">
                <div
                  className={`w-2 h-2 rounded-full ${
                    notification.urgent
                      ? "bg-red-400 animate-pulse"
                      : "bg-cyan-400"
                  }`}></div>
                <span className="text-sm text-gray-300 flex-1">
                  {notification.text}
                </span>
                <AlertCircle
                  className={`w-4 h-4 ${
                    notification.urgent
                      ? "text-red-400"
                      : "text-cyan-400"
                  }`}
                />
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default PendingActions