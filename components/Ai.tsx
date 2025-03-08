"use client";
import React, { useState } from "react";
import Header from "./Header";

export default function Ai() {
    const [draw, setDraw] = useState(false);
    const [boxes, setBoxes] = useState(Array(9).fill(""));
    const [winner, setWinner] = useState<string | null>(null);
    const [turnO, setTurnO] = useState(true);

    const winPatterns = [
        [0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7],
        [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]
    ];

    const resetGame = () => {
        setBoxes(Array(9).fill(""));
        setWinner(null);
        setTurnO(true);
        setDraw(false);
    };

    const handleBoxClick = (index: number) => {
        if (boxes[index] !== "" || winner || !turnO) return;  // Prevent clicking if AI's turn
    
        const updatedBoxes = [...boxes];
        updatedBoxes[index] = "O";
        setBoxes(updatedBoxes);
        setTurnO(false); // Switch to AI's turn
    
        if (checkWinner(updatedBoxes)) return;
    
        // AI makes a move after 500ms
        setTimeout(() => makeComputerMove(updatedBoxes), 500);
    };
    


    const makeComputerMove = (currentBoxes: string[]) => {
        const bestMove = minimax(currentBoxes, "X").index;
        if (bestMove === -1) return;
    
        const updatedBoxes = [...currentBoxes];
        updatedBoxes[bestMove] = "X";
        setBoxes(updatedBoxes);
        
        if (!checkWinner(updatedBoxes)) {
            setTurnO(true); // Switch back to player's turn after AI moves
        }
    };
    

    const checkWinner = (currentBoxes: string[]) => {
        for (const [a, b, c] of winPatterns) {
            if (currentBoxes[a] !== "" && currentBoxes[a] === currentBoxes[b] && currentBoxes[a] === currentBoxes[c]) {
                setWinner(currentBoxes[a]);
                return true;
            }
        }
        if (currentBoxes.every(box => box !== "")) {
            setDraw(true);
        }
        return false;
    };

    const getWinner = (newBoxes: string[]) => {
        for (const [a, b, c] of winPatterns) {
            if (newBoxes[a] !== "" && newBoxes[a] === newBoxes[b] && newBoxes[a] === newBoxes[c]) {
                return newBoxes[a];
            }
        }
        return null;
    };

    const minimax = (newBoxes: string[], player: string) => {
        const emptyIndices = newBoxes.map((box, idx) => (box === "" ? idx : null)).filter(idx => idx !== null);
        const winner = getWinner(newBoxes);
        if (winner) return { score: winner === "X" ? 1 : -1, index: -1 };
        if (emptyIndices.length === 0) return { score: 0, index: -1 };

        let bestMove = player === "X" ? { score: -Infinity, index: -1 } : { score: Infinity, index: -1 };

        for (const idx of emptyIndices) {
            const newBoard = [...newBoxes];
            newBoard[idx as number] = player;
            const result = minimax(newBoard, player === "X" ? "O" : "X");

            if (player === "X" && result.score > bestMove.score) {
                bestMove = { score: result.score, index: idx as number };
            } else if (player === "O" && result.score < bestMove.score) {
                bestMove = { score: result.score, index: idx as number };
            }
        }
        return bestMove;
    };

    return (
        <>
            <Header />
            <main
                className={`flex flex-col items-center justify-center min-h-screen bg-custom-blue z-20 ${winner === "O" ? "bg-green-500" : winner === "X" ? "bg-red-500" :  draw ? "bg-pink-500" : "bg-custom-blue"} `}
            >      {!winner && <div className={`flex flex-col md:flex-row items-center justify-between w-full max-w-4xl p-4 lg:bg-purple-950 shadow-lg rounded-lg z-10`}>
                <div
                    className={`flex flex-col items-center justify-center w-24 h-18 md:w-1/4 md:h-auto p-4 m-2 rounded-md cursor-pointer ${turnO ? "bg-green-500" : "bg-white"
                        }`}
                >          <span className="text-white font-bold">Player 1</span>
                </div>
                <div className={`grid grid-cols-3 gap-4 p-4 shadow-lg rounded-lg ${turnO ? "bg-green-500" : "bg-red-500"}`}>
                    {boxes.map((value, index) => (
                        <button
                            onClick={() => handleBoxClick(index)}
                            disabled={!!winner || value !== ""}
                            key={index}
                            className={`bg-custom-blue w-24 h-24 flex items-center justify-center rounded-md cursor-pointer font-bold text-3xl z-20 ${value === "O" ? "text-green-500" : value === "X" ? "text-red-500" : ""}`}>
                            {value}

                        </button>
                    ))}
                </div>
                <div
                    className={`flex flex-col items-center justify-center w-24 h-18 md:w-1/4 md:h-auto p-4 m-2 rounded-md cursor-pointer ${!turnO ? "bg-red-500" : "bg-white"
                        }`}
                >          <span className="text-white font-bold">AI OPPONENT</span>
                </div>
            </div>}
                {
                    winner && (
                        <div className="mt-4 text-lg lg:text-[5rem]  font-bold text-black">{winner === "O" ? "🎉 Congratulations! You won!" : "😞 Sorry, you lost!"}{winner}</div>
                    )
                }
                {
                    draw && (
                        <div className="mt-4 text-lg font-bold text-yellow-500">
                            Game was a Draw.. 👇click <span className="text-red-500">RESET</span> to play again
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


