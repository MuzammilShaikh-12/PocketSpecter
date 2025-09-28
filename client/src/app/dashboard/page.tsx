"use client"

import React from 'react'
import DashBoardNav from './components/DashBoardNav';
import UserProfileCard from './components/UserProfileCard';
import PendingActions from './components/PendingActions';
import RecentDocument from './components/RecentDocument';
import QuickAccess from './components/QuickAccess';
import { Meteors } from '@/components/ui/meteors';
import { ShineBorder } from '@/components/ui/shine-border';

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-slate-600 text-white relative overflow-x-auto scrollbar-hide ">
      {/* Falling Meteor Background */}
      <Meteors />

      {/* Header Navigation */}

      <DashBoardNav />
      {/* Main Dashboard Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-25 pb-8">
        <div className="gap-8 p-3  ">
          {/* <ShineBorder
          shineColor={["#becbd6", ]} 
          duration={7} 
          borderWidth={2}
          /> */}
          {/* Row 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-3 ">
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
}

export default page