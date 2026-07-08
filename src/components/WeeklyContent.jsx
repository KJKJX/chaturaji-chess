import React from "react";
import { motion } from "motion/react";
import { currentQuotes, outstandingGames } from "../data/weeklyData";
import Board from "./Board";
import Tab from "./Tab";
import ContentPiece from "./ContentPiece";
function WeeklyContent() {
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
        Chaturaji Content
      </motion.i>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 2,
            duration: 0.75,
          },
        }}
        exit={{
          opacity: 0,
        }}
        className="h-full w-full flex flex-row overflow-scroll justify-evenly space-x-[1vw] space-y-[3vw] mt-[1vw] flex-wrap"
      >
        {outstandingGames.map((game) => (
          <ContentPiece object={game} type={"game"} />
        ))}

        {currentQuotes.map((quote) => (
          <ContentPiece object={quote} type={"quote"} />
        ))}

        {/* <ContentPiece object={currentQuote} type={"quote"} /> */}
      </motion.div>
    </motion.div>
  );
}

export default WeeklyContent;
