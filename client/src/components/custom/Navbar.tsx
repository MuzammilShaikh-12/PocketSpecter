"use client";

import React from "react";
import { Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { navConfig } from "@/config/navLinks";
import { actionButtonConfig } from "@/config/actionButtons";

interface NavbarProps {
  height?: string; // e.g., "h-20" or "h-14"
  maxWidth?: string; // e.g., "max-w-7xl" or "max-w-full"
}

const Navbar: React.FC<NavbarProps> = ({
  height,
  maxWidth,
}) => {
  const pathname = usePathname();

  // Dynamic navigation items based on route/pathname
  let navItems = navConfig.default;
  for (const key in navConfig) {
    if (
      pathname.startsWith(key) &&
      key !== "default"
    ) {
      navItems = navItems.concat(
        navConfig[key]
      );
      break;
    }
  }

  let actionIcons =
    actionButtonConfig.default;
  for (const key in actionButtonConfig) {
    if (
      pathname.startsWith(key) &&
      key !== "default"
    ) {
      actionIcons = actionIcons.concat(
        actionButtonConfig[key]
      );
      break;
    }
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-20 py-4 pointer-events-none"
      style={{
        height: height || "80px",
      }} // dynamic height
    >
      <div
        className={`flex items-center justify-between ${maxWidth} mx-auto bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg shadow-black/20 px-6`}
        style={{ height: "100%" }} // make inner container fill header
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
            <Scale className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold text-white hover:text-amber-400 transition-colors duration-300">
            Pocket Specter
          </span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center space-x-8 pointer-events-auto">
          {navItems.map(
            ({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-white hover:text-cyan-400 transition-colors duration-300 font-medium">
                {label}
              </Link>
            )
          )}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2 pointer-events-auto">
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

export default Navbar;
