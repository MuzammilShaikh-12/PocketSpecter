import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { FileText, Calendar, MapPin, Play, Phone, BookOpen } from 'lucide-react';
import React from 'react'

const QuickAccess = () => {
   const quickActions = [
     {
       name: "Draft New Document",
       icon: FileText,
       color:
         "from-cyan-500 to-blue-600",
     },
     {
       name: "Legal Timeline",
       icon: Calendar,
       color:
         "from-purple-500 to-pink-600",
     },
     {
       name: "Nearest Authorities",
       icon: MapPin,
       color:
         "from-green-500 to-teal-600",
     },
   ];

   const quickLinks = [
     {
       name: "Video Tutorials",
       icon: Play,
     },
     {
       name: "Contact Support",
       icon: Phone,
     },
     {
       name: "Legal Resources",
       icon: BookOpen,
     },
   ];
  return (
    <Card className="bg-white/5  border border-white/10 rounded-2xl shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-lg text-cyan-400">
          Quick Access
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick Actions */}
        <div className="space-y-3">
          {quickActions.map(
            (action, index) => (
              <Button
                key={index}
                className={`w-full flex items-center space-x-3 p-3 bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                <action.icon className="w-5 h-5 text-white" />
                <span className="text-sm font-medium text-white">
                  {action.name}
                </span>
              </Button>
            )
          )}
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/10 pt-4 space-y-3">
          <h4 className="text-sm font-semibold text-gray-400 mb-3">
            Quick Links
          </h4>
          <div className="space-y-2">
            {quickLinks.map(
              (link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full flex items-center space-x-3 p-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30 rounded-lg transition-all duration-300 justify-start">
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm">
                    {link.name}
                  </span>
                </Button>
              )
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default QuickAccess