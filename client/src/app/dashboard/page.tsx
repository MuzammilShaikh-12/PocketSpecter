import React from 'react'
import DashBoardSideBar from './components/DashBoardSideBar'
import NotificationBar from './components/NotificationBar'

const page = () => {
  return (
     <main className="h-screen bg-gray-100 flex p-2">
      {/* Sidebar */}
      <DashBoardSideBar/>

      {/* Main content wrapper (shifted right by sidebar width) */}
      <div className="flex flex-col flex-1 ml-64">
        {/* Fixed-height Notification Bar */}
        <div className="h-30">
          <NotificationBar />
        </div>

        {/* Page Content */}
        <div className="m-3 flex-1 shadow-lg border rounded-lg bg-white p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold">Dashboard Content</h1>
          <p className="text-gray-600 mt-2">
            This is where your main dashboard widgets, charts, or pages will go.
          </p>
        </div>
      </div>
    </main>
  );
}

export default page