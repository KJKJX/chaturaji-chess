import React from "react";
import { motion } from "motion/react";
import { puzzles } from "../data/puzzles";
import PuzzlePreview from "./PuzzlePreview";

function PuzzlesList({ openPuzzle }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1,
          duration: 0.75,
        },
      }}
      exit={{
        opacity: 0,
      }}
      className="h-full w-full flex flex-col overflow-scroll"
    >
      <motion.i
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="text-white/80 text-[2vw] font-bold text-center"
      >
        Puzzles Collection
      </motion.i>
      <div className="flex flex-row flex-wrap gap-[2vw] w-full px-[1vw] justify-evenly overflow-scroll h-full">
        {puzzles.map((puzzle, i) => (
          <PuzzlePreview puzzle={puzzle} i={i} openPuzzle={openPuzzle} />
        ))}
      </div>
    </motion.div>
  );
}

export default PuzzlesList;
