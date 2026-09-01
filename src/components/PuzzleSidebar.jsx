import React from "react";
import puzzle_complete from "../imgs/puzzle_complete.png";
import { AnimatePresence, motion } from "motion/react";
import { colorToRealColor } from "../data/functions";
import Tab from "./Tab";
function PuzzleSidebar({ puzzle, message, replayPuzzle, backToAllPuzzles }) {
  return (
    <div className="h-full w-[20vw] border-[0.1vw] border-white/30 mr-[5vw] rounded-[1vw] bg-black/30 flex flex-col px-[0.5vw]">
      <i className="text-center mx-auto text-[1.7vw] flex items-center text-white/70 mt-[1vw]">
        {puzzle.title}
      </i>
      <p className="text-white/80 text-[0.95vw] text-center">{puzzle.goal}</p>
      <p className="text-white/80 text-[0.6vw] text-center mt-[0.5vw]">
        Tap a piece, then tap on the square where you want to move it.
      </p>
      <p className="text-white/90 text-[0.7vw] text-center mt-[0.5vw] underline">
        HINT: {puzzle.hint}
      </p>

      {/* <hr /> */}
      <AnimatePresence mode="wait">
        <motion.p
          key={message}
          initial={{ scale: 1.2, opacity: 1 }}
          animate={{
            scale: 1,
            opacity: 1,
            backgroundColor:
              message === "Incorrect!"
                ? colorToRealColor("red")
                : colorToRealColor("green"),
            // 2. WIGGLE: Looped keyframes that take over
          }}
          exit={{
            scale: 1.2,
            opacity: 0,
          }}
          transition={{
            // Spring configuration for the pop-up phase
            scale: { type: "spring", stiffness: 260, damping: 20 },
            // Loop settings for the wiggle phase
          }}
          className="text-white/80 text-[1.5vw] text-center  border-[0.1vw] border-white/30 rounded-[1vw] mt-[1vw] py-[0.5vw]"
        >
          {message}
        </motion.p>
      </AnimatePresence>
      {message === "Puzzle Complete!" && (
        <>
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 7, bounce: 1 }}
            src={puzzle_complete}
            className="mx-auto mt-[1vw] h-[11vw] grayscale-80"
          />
          <div className="flex flex-row">
            {" "}
            <Tab className="!scale-85 mt-[0.75vw]" onClick={backToAllPuzzles}>
              Back
            </Tab>
            <Tab className="!scale-85 mt-[0.75vw]" onClick={replayPuzzle}>
              Replay
            </Tab>
          </div>
        </>
      )}
    </div>
  );
}

export default PuzzleSidebar;
