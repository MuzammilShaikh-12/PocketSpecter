import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const nav_links = ["Home", "Documents", "Chatbot", "Contact Us"];

const page = () => {
  return (
    <main className="h-screen bg-[url(/backdrop.png)] bg-cover bg-center p-2">
      <nav className="text-white flex justify-end space-x-16 px-32">
        {nav_links.map((link, index) => (
          <Link
            key={index}
            href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
            className="hover:underline"
          >
            {link}
          </Link>
        ))}
      </nav>
      <div className="flex text-white justify-center items-center h-screen px-16">
        <div className="w-1/2 flex flex-col justify-center items-start">
          <h1 className="text-7xl font-bold mb-4">Pocket Specter</h1>
          <p className="text-lg">
            Explore features that boost your productivity. From document
            automation to advanced research, we've got the hard work covered.
          </p>
        </div>

        <div className="w-1/2 bg-[#D9D9D9] text-[#512F14] rounded-xl p-12 flex flex-col justify-center items-center text-center">
          <h1 className="text-7xl font-bold leading-snug">
            Your Personal Legal AI Assistant
          </h1>
          <Button className="mt-6 p-6 bg-blue-500 hover:bg-blue-950 text-white text-2xl rounded-4xl">
            Try for Free
          </Button>
          <p className="text-lg mt-6">Say goodbye to expensive legal consultation, long waits for appointments, and confusing legal texts.</p>
        </div>
      </div>
    </main>
  );
};

export default page;
