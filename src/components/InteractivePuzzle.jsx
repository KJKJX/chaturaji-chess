import React, { useEffect, useState } from "react";
import Board from "./Board";
import PuzzleSidebar from "./PuzzleSidebar";
import { applyMoveToBoard, moveToMoveString } from "../data/functions";
import { motion } from "motion/react";

function InteractivePuzzle({ puzzle, setTab, backToAllPuzzles }) {
  const { moves } = puzzle;
  const [move, setMove] = useState(-1);
  const [message, setMessage] = useState("Start!");
  const [board, setBoard] = useState(puzzle.board);
  function handleCheckPuzzleMoveCorrect(puzzleMove) {
    let toCheck = moves[move + 1];
    if (toCheck.split(" ").length === 4) {
      toCheck = toCheck.split(" ");
      toCheck.pop();
      toCheck = toCheck.join(" ");
    }
    console.log(toCheck);

    if (toCheck === puzzleMove) {
      setMove(Math.min(moves.length, move + 1));
      // console.log(applyMoveToBoard(moves, move + 1, 0, puzzle.board));

      setMessage(
        `${moveToMoveString(applyMoveToBoard(moves, move + 1, 0, board), puzzleMove)} was correct!`,
      );
    } else {
      setMessage(`Incorrect!`);
    }
  }
  function handleContinueTurn() {
    setTimeout(() => {
      setMove(Math.min(moves.length, move + 1));
    }, 1500);
  }
  function handleReplayPuzzle() {
    setTab("");
    setTimeout(() => {
      setTab("puzzle");
    }, 500);
  }
  useEffect(() => {
    if (move >= moves.length) {
      setMessage("Puzzle Complete!");
    }
  }, [move]);
  return (
    <motion.div
      className="flex flex-row w-full h-full py-[1vw] justify-center overflow-y-scroll"
      exit={{
        opacity: 0,
      }}
    >
      <PuzzleSidebar
        puzzle={puzzle}
        message={message}
        replayPuzzle={handleReplayPuzzle}
        backToAllPuzzles={backToAllPuzzles}
      />
      <Board
        key="board"
        interactive
        size={23.5}
        currentMove={move}
        checkPuzzleMoveCorrect={handleCheckPuzzleMoveCorrect}
        continueTurn={handleContinueTurn}
        updateBoard={(board) => setBoard(board)}
        {...puzzle}
      />
    </motion.div>
  );
}

export default InteractivePuzzle;
