import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { User } from "lucide-react";
import React from "react";

interface UserProfileCardProps {
  userName?: string;
  userEmail?: string;
  profilePictureUrl?: string;
}

const UserProfileCard = ({
  userName,
  userEmail,
  profilePictureUrl,
}: UserProfileCardProps) => {
  return (
    <Card className="bg-white/5 border border-white/10 rounded-2xl shadow-lg p-6">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <Avatar className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/25">
              {/* Image */}
              <AvatarImage
                src={profilePictureUrl}
                alt={`${userName}'s profile`}
                className="object-cover"
              />

              {/* Fallback */}
              <AvatarFallback className="bg-gradient-to-br from-cyan-400 to-blue-500 text-white">
                <User className="w-12 h-12" />
              </AvatarFallback>
            </Avatar>

            {/* Online indicator */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 shadow-lg" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              {userName}
            </h3>
            <p className="text-sm text-gray-400">
              {userEmail}
            </p>
          </div>

          <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
            Profile Settings
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
