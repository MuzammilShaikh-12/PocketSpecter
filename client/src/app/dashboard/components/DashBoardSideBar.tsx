"use client";

import { useState } from "react";
import {
  Home,
  Scale,
  FileText,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Sidebar = () => {
  const [active, setActive] = useState(
    "Dashboard"
  );

  const navItems = [
    { name: "Dashboard", icon: Home },
    { name: "Cases", icon: Scale },
    {
      name: "Documents",
      icon: FileText,
    },
    {
      name: "Calendar",
      icon: Calendar,
    },
    {
      name: "Analytics",
      icon: BarChart3,
    },
    { name: "Team", icon: Users },
  ];

  const generalItems: {
    name: string;
    icon: React.ElementType;
    variant: "ghost" | "destructive" | "link" | "default" | "outline" | "secondary";
  }[] = 
  [
    {
      name: "Settings",
      icon: Settings,
      variant: "ghost"
    },
    { name: "Help", icon: HelpCircle,
      variant: "ghost"
     },
    {
      name: "Logout",
      icon: LogOut,
      variant: "destructive",
    },
  ];

  return (
    <div className="absolute top-3 bottom-3 left-3 w-64 shadow-lg flex flex-col border-r bg-gray-100 rounded-lg">
      {/* Logo */}
      <div className="p-6 border-b ">
        <div className="flex items-center space-x-2 mt-3 ">
          <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-blue-700 rounded-lg flex items-center justify-center ">
            <Scale className="w-5 h-5 text-white " />
          </div>
          <span className="text-xl font-bold">
            LawBot
          </span>
        </div>
      </div>
      <Separator />
      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          {navItems.map((item) => (
            <Button
              key={item.name}
              onClick={() =>
                setActive(item.name)
              }
              variant={
                active === item.name
                  ? "secondary"
                  : "ghost"
              }
              className={`w-full justify-start ${
                active === item.name
                  ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                  : ""
              }`}>
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Button>
          ))}
        </div>
      </nav>
      <Separator />

      {/* General Section */}
      <div className="p-4 border-t">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          General
        </h4>
        <div className="space-y-1">
          {generalItems.map((item) => (
            <Button
              key={item.name}
              variant={item.variant}
              className="w-full justify-start">
              <item.icon className="w-5 h-5 mr-3" />
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
