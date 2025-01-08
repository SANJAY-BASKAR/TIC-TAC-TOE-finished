"use client";

import Link from 'next/link';

export default function Intro() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-custom-blue">
      {/* <h1 className="lg:text-9xl text-4xl font-bold text-white">TIC - TAC - TOE</h1> */}
      <div className="text-white lg:text-9xl text-4xl z-40">🎮😎🫵</div>
    
      <p className="text-lg text-gray-100 mt-4">TIC-TAC-TOE</p>
      <br />
      <button className="text-purple-400">
        <Link href="/rules">Check how to play </Link>🤷‍♂️
      </button>
      <Link
        href="/loader"
        className="mt-6 px-4 py-2 text-white font-bold rounded-md shadow bg-purple-500 hover:bg-purple-600"
      >
        START GAME 🎮
      </Link>
    </main>
  );
}
