import { color, motion } from "motion/react";
import React from "react";
import Board from "./Board";
import { colorToRealColor } from "../data/functions";

function PuzzlePreview({ puzzle, i, openPuzzle }) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 2 + i / 5,
        },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="flex overflow-clip flex-row items-center w-3/7 px-[1vw] h-fit border-[0.1vw] border-white/50 rounded-[1vw] bg-gray-950/50 cursor-pointer scale-90"
      onClick={() => openPuzzle(puzzle)}
    >
      <Board {...puzzle} size={10} />
      <div className="flex flex-col text-left ml-[0.75vw]">
        <i className="text-white/70 text-[1.4vw]">{puzzle.title}</i>
        <p className="text-white/70 text-[0.8vw]">{puzzle.goal}</p>
        <span className="text-white/80 text-[0.85vw] capitalize flex flex-row items-center mt-[0.5vw]">
          <div
            className="size-[0.7vw] my-auto m-[0.2vw] rounded-[0.1vw]  border-[0.1vw] border-white/50"
            style={{
              backgroundColor: colorToRealColor(
                ["red", "blue", "yellow", "green"][puzzle.startingTurn],
              ),
            }}
          />
          Play as {["red", "blue", "yellow", "green"][puzzle.startingTurn]}
        </span>
        <p className="text-white/90 text-[1vw] capitalize">
          {puzzle.difficulty} Difficulty
        </p>
      </div>
    </motion.div>
  );
}

export default PuzzlePreview;
