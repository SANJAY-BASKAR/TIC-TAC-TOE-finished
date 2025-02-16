"use client";

import Link from 'next/link';

export default function Intro() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-custom-blue ">
      {/* <h1 className="lg:text-9xl text-4xl font-bold text-white">TIC - TAC - TOE</h1> */}
      {/*<div className="text-white lg:text-9xl text-4xl z-40">🎮😎🫵</div>*/}
        <img src="../../favicon.ico" alt="tic-tac-toe" className="w-96 h-96" />

      <p className="text-lg text-gray-100 mt-4"><span className="text-[#A31D1D]">TIC</span>-<span className="text-[#074799]">TAC</span>-<span className="text-[#A31D1D]">TOE</span></p>
      <br />
      <button className="text-purple-400 font-serif">
        <Link className='hover:text-white font-bold' href="/rules">Check how to play </Link>🤷‍♂️
      </button>
        <div className='flex flex-row items-center gap-4 '>
      <Link
        href="/loader"
        className="mt-6 px-4 py-2 text-white font-bold rounded-md shadow bg-purple-500 hover:bg-purple-600 "
      >
        START GAME 🎮
      </Link>
      <Link
        href="/bot"
        className="mt-6 px-4 py-2 text-white font-bold rounded-md shadow bg-purple-500 hover:bg-purple-600"
      >
        AI OPPONENT 🤖
      </Link>

        </div>
    </main>
  );
}
