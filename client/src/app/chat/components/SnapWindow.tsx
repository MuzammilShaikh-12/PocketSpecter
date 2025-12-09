import { Button } from "@/components/ui/button";
import React from "react";

interface SidebarSectionProps {
  title: string;
  items: string[];
}
// This is fully experimental and might be removed later
// Use case: Chat/Context related hyperlinks or actions
//TODO: fix ui

const SnapWindow = ({
  title,
  items,
}: SidebarSectionProps) => {
  return (
    <div className="bg-white/5  border border-white/10 rounded-2xl shadow-lg p-6">
      <h2 className="text-sm font-semibold text-gray-400 mb-2 ">
        {title}
      </h2>
      <div className="space-y-2">
        {items.map((item, i) => (
          <Button
            key={i}
            variant="secondary"
            className="w-full justify-start text-[#feb204] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-gray-600/50">
            {item}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SnapWindow;
