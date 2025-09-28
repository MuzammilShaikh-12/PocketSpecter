import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { User, Star } from 'lucide-react';
import React from 'react'

const UserProfileCard = () => {
  return (
    <Card className="bg-white/5  border border-white/10 rounded-2xl shadow-lg p-6">
      <CardContent className="p-6">
         
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <Avatar className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/25">
              <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-xl">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 shadow-lg"></div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              Rajesh Kumar
            </h3>
            <p className="text-gray-400 text-sm">
              Roarit Alka Taet
            </p>
            <div className="flex items-center justify-center space-x-1">
              <span className="text-sm text-gray-400 ml-2">
                @Email
              </span>
            </div>
          </div>

          <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            Profile Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default UserProfileCard