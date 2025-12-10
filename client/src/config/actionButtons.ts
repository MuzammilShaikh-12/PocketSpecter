import {
  Bell,
  Menu,
  Plus,
  Scale,
  Search,
  Settings,
  MessageSquare,
  LogOut,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export const actionButtonConfig: Record<
  string,
  { icon: LucideIcon; label: string }[]
> = {
  // Default actions (shown on most pages)
  default: [],

  // Dashboard specific actions
  "/dashboard": [
    { icon: Plus, label: "New Case" },
    {
      icon: Settings,
      label: "Settings",
    },
  ],

  // Chat specific actions
  "/chat": [
    {
      icon: Search,
      label: "Search ",
    },
    {
      icon: MessageSquare,
      label: "New Chat",
    },
    {
      icon: LogOut,
      label: "Logout",
    },
  ],
};
