"use client";
import Link from 'next/link';
import React from 'react'

const page = () => {
    return (
        <main className="flex items-center justify-center min-h-screen bg-custom-blue overflow-hidden mb-10">
          <div className="relative w-full overflow-hidden">
            <h1 className="animate-marquee font-bold lg:text-[20rem] text-9xl whitespace-nowrap bg-gradient-to-b from-purple-500 to-transparent bg-clip-text text-transparent">
              TIC TAC TOE
            </h1>
          </div>
          
          <Link
            href="/front"
            className="px-4 py-2 absolute text-white font-bold rounded-md shadow bg-purple-500 hover:bg-purple-600"
          >
            GET STARTED
          </Link>
  
          {/* CSS ONLY FOR MARQUEE ANIMATION */}
          <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-marquee {
            display: inline-block;
            animation: marquee 10s linear infinite;
            white-space: nowrap;/* Ensure text doesn't wrap */
          }
        `}</style>
        </main>
      );
}

export default page
