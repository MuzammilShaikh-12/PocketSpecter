import Navbar from "@/components/custom/Navbar";
import ChatInput from "./components/ChatInput";
import ChatWindow from "./components/ChatWindow";
import SideBar from "./components/SideBar";
import SnapWindow from "./components/SnapWindow";


export default function page() {

   const quickSnapshot = [
     "Case Law References",
     "Rights Database",
     "Legal Process Guides",
   ];
   const documentDrafts = [
     "New RTI App",
     "Review Contract",
   ];

   return (
     <div className="min-h-screen bg-slate-900 text-white relative">

        {/* Header Navigation */}
        
        <Navbar height="90px" maxWidth="w-4xl" />

       <main className="flex h-[calc(100vh-5px)] pt-20 overflow-hidden">
         {/* Sidebar */}
         <aside className="w-1/5 p-4 ">
           <SideBar />
         </aside>

         {/* Main Chat */}
         <section className="flex flex-col flex-1 relative">
           <div className="flex-1 overflow-y-auto p-4">
             <ChatWindow />
           </div>
           <div className=" p-3">
             <ChatInput />
           </div>
         </section>

         {/* Right Panel */}
         <aside className="w-1/5  p-4 flex flex-col gap-6">
           <SnapWindow
             title="Quick Snapshot"
             items={quickSnapshot}
           />
           <SnapWindow
             title="Document Drafts"
             items={documentDrafts}
           />
         </aside>
       </main>
     </div>
   );
}