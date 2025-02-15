import Link from 'next/link';
import React from 'react'

const page = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-custom-blue p-4">
          <p className="text-gray-100 mt-4 text-5xl">TIC-TAC-TOE</p>
    
          {/* Rules Section */}
          <div className="mt-8 max-w-3xl p-6 bg-purple-200 text-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Tic Tac Toe Rules</h2>
            <ul className="list-inside list-disc space-y-2">
              <li><span className="font-semibold">Objective:</span> The goal is to be the first to get three of your marks (either X or O) in a row, column, or diagonal.</li>
              <li><span className="font-semibold">Game Board:</span> The board consists of 9 squares arranged in a 3x3 grid.</li>
              <li><span className="font-semibold">Turns:</span> Players take turns to mark a square with their respective symbol (X or O).</li>
              <li><span className="font-semibold">Winning:</span> A player wins by having three of their marks in a row, column, or diagonal.</li>
              <li><span className="font-semibold">Draw:</span> The game results in a draw if all squares are filled and no player has won.</li>
            </ul>
          </div>
    
          {/* Buttons */}
          <div className="mt-6 flex flex-col items-center space-y-4">
            <button className="text-purple-400"> 🤷‍♂️</button>
            <Link
              href="/front"
              className="mt-6 px-4 py-2 text-white font-bold rounded-md shadow bg-purple-500 hover:bg-purple-600 "
            >
              Home
            </Link>
            <Link
              href="/get"
              className="mt-6 px-4 py-2 text-white font-bold rounded-md shadow bg-purple-500 hover:bg-purple-600 "
            >
              Play
            </Link>
          </div>
        </main>
      );
}

export default page
