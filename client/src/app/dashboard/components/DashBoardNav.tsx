"use client";

import React from "react";
import { Bell, Menu, Plus, Scale, Search, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";


const DashBoardNav = () => {
  const navItems = [
    "Home",
    "Documents",
    "Cases",
    "Help",
  ];

  const actionIcons = [
    { icon: Search, label: "Search" },
    { icon: Plus, label: "Add" },
    {
      icon: Bell,
      label: "Notifications",
    },
    {
      icon: Settings,
      label: "Settings",
    },
    { icon: Menu, label: "Menu" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-20 py-4 h-20 ">
      <div className="flex items-center justify-between max-w-7xl mx-auto py-5 bg-white/10 backdrop-blur-lg border border-white/10 p-4 rounded-2xl shadow-lg shadow-black/20 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 ">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <span
            className="text-xl font-bold 
    [text-shadow:none] 
    text-white 
    hover:text-amber-400
    transition-colors duration-300">
            Pocket Specter
          </span>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="text-gray-300 hover:text-cyan-400 font-medium transition-all duration-300 hover:scale-105 hover:bg-transparent">
              {item}
            </Button>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-2">
          {actionIcons.map(
            ({ icon: Icon, label }) => (
              <Button
                key={label}
                variant="ghost"
                size="icon"
                className="p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-[0_0_10px_rgba(0,200,255,0.3)] hover:scale-110"
                title={label}>
                <Icon className="w-5 h-5 text-gray-300 hover:text-cyan-400 transition-colors duration-300" />
              </Button>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default DashBoardNav;
