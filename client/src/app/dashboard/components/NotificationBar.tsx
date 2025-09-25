"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, Bell, MessageCircle } from "lucide-react";


const NotificationBar = () => {
   return (
      <header className="flex items-center justify-between shadow-lg border rounded-lg bg-gray-100 m-3 h-25 px-4 flex-1">
      {/* Left: Searchbar */}
      <div className="w-1/4 ml-7">
  <div className="relative">
    {/* Search Icon inside input */}
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-5 text-black" />

    {/* Input field */}
    <Input
      type="text"
      placeholder="Search..."
      className="pl-10 h-11 w-full bg-white rounded-full"
    />
  </div>
</div>


      {/* Right: Actions + User */}
      <div className="flex items-center space-x-4 m-2">
        {/* Notifications */}
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full hover:bg-slate-300"
        >
          <Bell className="size-5" />
        </Button>

        {/* Messages */}
        <Button
          size="icon"
          variant="ghost"
          className="rounded-full hover:bg-slate-300"
        >
          <MessageCircle className="size-5" />
        </Button>

        {/* User Profile */}
        <div className="flex items-center space-x-3 mr-3">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>MS</AvatarFallback>
          </Avatar>
          <div className="text-sm p-2">
            <p className="font-medium">UserName</p>
            <p className="text-xs text-muted-foreground">
              user@example.com
            </p>
          </div>
        </div>
      </div>
    </header>
   )
}

export default NotificationBar;