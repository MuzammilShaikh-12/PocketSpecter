"use client";

import React from "react";
import UserProfileCard from "./components/UserProfileCard";
import PendingActions from "./components/PendingActions";
import RecentDocument from "./components/RecentDocument";
import QuickAccess from "./components/QuickAccess";
import { Meteors } from "@/components/ui/meteors";
import { ShineBorder } from "@/components/ui/shine-border";
import Navbar from "../../components/custom/Navbar";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-600 text-white relative overflow-x-hidden">
      {/* Falling Meteor Background */}
      <Meteors />
      {
        /* Shine Border Effect */
      }

      {/* Header Navigation */}
      <Navbar height="100px" maxWidth="w-4xl" />

      {/* Main Dashboard Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12">
        <div className="gap-8 p-3">
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-3">
            <UserProfileCard />
            <PendingActions />
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-3">
            <RecentDocument />
            <QuickAccess />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
