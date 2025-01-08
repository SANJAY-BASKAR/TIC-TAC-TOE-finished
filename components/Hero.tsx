"use client";
import React, { useState } from "react";
import Header from "./Header";

export default function Home() {
  // const boxes[index] = Array.from({length:9}); // how it is called
  const [draw, setdraw] = useState(false);
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState<string | null>(null); // Correct typing here
  const [turnO, setTurnO] = useState(true);  //O - true and X - false
  
  const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

  // const resetGame = () => {

  // }
  const resetGame = () => {
    // all set to be resetted to default
    setBoxes(Array(9).fill(""));
    setWinner(null);
    setTurnO(true);
    setdraw(false);
  }


  const handleBoxClick = (index: number) => {
    //already winner present || box is already filled
    if (boxes[index] !== "" || winner) return;
    //update the box
    const updatedBoxes = [...boxes];
    updatedBoxes[index] = turnO ? "O" : "X";
    setBoxes(updatedBoxes);
    setTurnO(!turnO)

    //check winner
    const isWinner = checkWinner(updatedBoxes);

    //conditional check for draw
    // if it is not a winner and all the boxes are already filled
    if (!isWinner && updatedBoxes.every((boxes) => boxes !== "")) {
      setdraw(true);
    }
  }

  const checkWinner = (currentBoxes : string[])=> {  // helper function for handleBoxClick()
    for (const i of winPatterns) {
      const [ a,b,c ] = i;
      if (currentBoxes[a] !== "" && currentBoxes[a] === currentBoxes[b] && currentBoxes[a] === currentBoxes[c])
      {
        setWinner(currentBoxes[a]);
        return true;
      }

    }
    return false;
  }


  return (
    <>
    <Header />
    <main
        className={`flex flex-col items-center justify-center min-h-screen bg-custom-blue z-20 ${winner === "O" ? "bg-green-500" : winner === "X" ? "bg-red-500" : ""} transition-colors duration-500 ease-in-out`}
      >      { !winner && <div className={`flex flex-col md:flex-row items-center justify-between w-full max-w-4xl p-4 lg:bg-purple-950 shadow-lg rounded-lg z-10`}>
      <div
          className={`flex flex-col items-center justify-center w-24 h-18 md:w-1/4 md:h-auto p-4 m-2 rounded-md cursor-pointer ${
            turnO ? "bg-green-500" : "bg-white"
          }`}
        >          <span className="text-white font-bold">Player 1</span>
        </div>
        <div className={`grid grid-cols-3 gap-4 p-4 shadow-lg rounded-lg ${turnO ? "bg-green-500" : "bg-red-500"}`}>
          {boxes.map((value, index) => (
              <button 
                onClick={() => handleBoxClick(index)} 
                disabled={!!winner || value !==""} 
                key={index} 
                className={`bg-custom-blue w-24 h-24 flex items-center justify-center rounded-md cursor-pointer font-bold text-3xl z-20 ${value === "O" ? "text-green-500" : value === "X" ? "text-red-500" : ""}`}>
                {value}

              </button>
          ))}
        </div>
        <div
          className={`flex flex-col items-center justify-center w-24 h-18 md:w-1/4 md:h-auto p-4 m-2 rounded-md cursor-pointer ${
            !turnO ? "bg-red-500" : "bg-white"
          }`}
        >          <span className="text-white font-bold">Player 2</span>
        </div>
      </div>}
      {
        winner && (
          <div className="mt-4 text-lg lg:text-[5rem]  font-bold text-black">Congratulation the winner is {winner}</div>
        )
      }
      {
        draw && (
          <div className="mt-4 text-lg font-bold text-yellow-500">
            Game was a Draw.. Shift turns
          </div>
        )
      }

      {/* Wrapper to push the button further down */}
      <div className="mt-12">
        <button className=" px-6 py-2  bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-md shadow " onClick={resetGame}>
          Reset
        </button>
      </div>
    </main>
    </>
  );
}


