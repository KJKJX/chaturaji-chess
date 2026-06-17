import React, { useRef, useState } from "react";
// import { king } from "../imgs/pieces/king.jsx";
// import { knight } from "../imgs/pieces/knight.jsx";
// import { bishop } from "../imgs/pieces/bishop.jsx";
// import { pawn } from "../imgs/pieces/pawn.jsx";
// import { boat } from "../imgs/pieces/boat.jsx";
import ChessPiece from "../components/ChessPiece";
import Tab from "./Tab";
import { motion } from "motion/react";
import { useEffect } from "react";
const board = [
  // === RED PLAYER (South-West Corner) ===
  "red.boat1.a1",
  "red.knight1.b1",
  "red.bishop.c1", // Historically Elephant/Gaja, often moves like a Bishop or Rook variant
  "red.king1.d1",
  "red.pawn1.a2", // <--- Your original piece
  "red.pawn2.b2",
  "red.pawn3.c2",
  "red.pawn4.d2",

  // === GREEN PLAYER (North-West Corner) ===
  "blue.boat1.a8",
  "blue.knight1.a7",
  "blue.bishop.a6",
  "blue.king1.a5",
  "blue.pawn1.b8",
  "blue.pawn2.b7",
  "blue.pawn3.b6",
  "blue.pawn4.b5",

  // === YELLOW PLAYER (North-East Corner) ===
  "yellow.boat1.h8",
  "yellow.knight1.g8",
  "yellow.bishop.f8",
  "yellow.king1.e8",
  "yellow.pawn1.h7",
  "yellow.pawn2.g7",
  "yellow.pawn3.f7",
  "yellow.pawn4.e7",

  // === BLACK/BLUE PLAYER (South-East Corner) ===
  "green.boat1.h1",
  "green.knight1.h2",
  "green.bishop.h3",
  "green.king1.h4",
  "green.pawn1.g1",
  "green.pawn2.g2",
  "green.pawn3.g3",
  "green.pawn4.g4",
];
function Board({ moves, prevMoves, currentMove, className, size = 25 }) {
  const [changeableBoard, setChangeableBoard] = useState(
    JSON.parse(JSON.stringify([...board]))
  );
  const prevCurrentMove = useRef(currentMove);
  useEffect(() => {
    let newMove;
    if (prevCurrentMove.current > currentMove) {
      console.log("less");
      newMove = prevMoves[Math.min(currentMove + 1, moves.length)];
    } else {
      newMove = moves[Math.min(currentMove, moves.length)];
      console.log("more");
    }
    prevCurrentMove.current = currentMove;
    if (!newMove) {
      return;
    }
    let newBoard = [...changeableBoard];
    let toChange = newBoard.findIndex((piece) => {
      return (
        newMove.split(".")[1] === piece.split(".")[1] &&
        newMove.split(".")[0] === piece.split(".")[0]
      );
    });
    newBoard[toChange] = newMove;
    setChangeableBoard(newBoard);
  }, [currentMove]);
  return (
    <div className={`${className} flex flex-col`}>
      <div
        style={{
          height: size + "vw",
          width: size + "vw",
        }}
        className="bg-black/20 grid grid-cols-8 grid-rows-8 gap-0 outline-none grid rotate-270 relative"
      >
        {Array.from({ length: 64 }, (_, i) => ({
          square: i,
          row: Math.floor(i / 8),
          col: i % 8,
          color:
            Math.floor(i / 8) % 2
              ? i % 2 === 0
                ? "bg-gray-300"
                : "bg-gray-400"
              : i % 2 === 0
              ? "bg-gray-400"
              : "bg-gray-300",
        })).map((square) => (
          <div
            className={`h-full w-full  ${square.color} border-black bg-clip-padding`}
            style={{
              gridRow: square.row + 1,
              gridColumn: square.col + 1,
            }}
          />
        ))}
        {changeableBoard.map((string) => {
          const [color, piece, position] = string.split(".");
          // console.log(color, piece, position);
          let realColor;
          if (color === "green") {
            realColor = "#81b64c";
          } else if (color === "blue") {
            realColor = "#3ca0ff";
          } else if (color === "red") {
            realColor = "#c34646";
          } else {
            realColor = "#e39e44";
          }
          return (
            <div
              className={`rotate-90 row-start-${
                position.at(0).charCodeAt(0) - 96
              } col-start-${position.at(-1)}`}
              style={{
                gridRow: `${position.at(0).charCodeAt(0) - 96}`,
                gridColumn: position.at(-1),
                height: size * 0.12 + "vw",
                width: size * 0.12 + "vw",
                // filter: realColor,
              }}
            >
              <ChessPiece color={realColor} piece={piece.replace(/\d/g, "")} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Board;
