import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import React from 'react'

const RecentDocument = () => {

   const Calculator = ({
     className,
   }: {
     className?: string;
   }) => (
     <svg
       className={className}
       fill="currentColor"
       viewBox="0 0 24 24">
       <path d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v4h10V4H7zm0 6v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H7zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2H7zm4 0v2h6v-2h-6z" />
     </svg>
   );

   const recentDocuments = [
     {
       name: "FIR Application",
       type: "Legal",
       status: "Draft",
       icon: FileText,
       color: "text-yellow-400",
     },
     {
       name: "RTI Request Form",
       type: "Government",
       status: "Filed",
       icon: FileText,
       color: "text-green-400",
     },
     {
       name: "Consumer Complaint",
       type: "Consumer",
       status: "Review",
       icon: FileText,
       color: "text-blue-400",
     },
     {
       name: "Legal Notice Draft",
       type: "Legal",
       status: "Draft",
       icon: FileText,
       color: "text-yellow-400",
     },
     {
       name: "Bail Calculator",
       type: "Tool",
       status: "Active",
       icon: Calculator,
       color: "text-cyan-400",
     },
   ];

   const getStatusBadgeVariant = (
     status: string
   ) => {
     switch (status) {
       case "Draft":
         return "secondary";
       case "Filed":
         return "default";
       case "Review":
         return "outline";
       default:
         return "secondary";
     }
   };

   const getStatusColor = (status: string) => {
     switch (status) {
       case "Draft":
         return "bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30";
       case "Filed":
         return "bg-green-400/20 text-green-400 hover:bg-green-400/30";
       case "Review":
         return "bg-blue-400/20 text-blue-400 hover:bg-blue-400/30";
       case "Active":
         return "bg-cyan-400/20 text-cyan-400 hover:bg-cyan-400/30";
       default:
         return "bg-gray-400/20 text-gray-400 hover:bg-gray-400/30";
     }
   };

  return (
    <Card className="bg-white/5  border border-white/10 rounded-2xl shadow-lg p-6">
      <CardHeader>
        <CardTitle className="text-lg text-cyan-400">
          Recent Documents
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentDocuments.map(
            (doc, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-3 bg-gray-800/30 rounded-xl border border-white/5 hover:border-cyan-400/30 transition-all duration-300 hover:bg-gray-800/50 group cursor-pointer">
                <div className="w-10 h-10 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-gray-600/50 transition-colors duration-300">
                  <doc.icon
                    className={`w-5 h-5 ${doc.color}`}
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-white">
                    {doc.name}
                  </p>
                  <p className="text-xs text-gray-400">
                    {doc.type}
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge
                    variant={getStatusBadgeVariant(
                      doc.status
                    )}
                    className={`text-xs ${getStatusColor(
                      doc.status
                    )} border-0`}>
                    {doc.status}
                  </Badge>
                  {doc.status ===
                    "Filed" && (
                    <CheckCircle className="w-4 h-4 text-green-400" />
                  )}
                  {doc.status ===
                    "Review" && (
                    <Clock className="w-4 h-4 text-blue-400" />
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentDocument