import React from "react";
import { motion } from "motion/react";
import { currentQuote, outstandingGame } from "../data/weeklyData";
import Board from "./Board";
import Tab from "./Tab";
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
        className="h-full w-full flex flex-row overflow-scroll justify-evenly mt-[1vw]"
      >
        <div className="h-3/4 flex flex-col w-1/3">
          <p className="text-white/80 text-[1.5vw] font-bold w-full">
            Outstanding Game
          </p>
          <p className="text-white/60 text-[1vw]">
            Updated {new Date(outstandingGame.date).toLocaleDateString()}
          </p>
          <p className="text-white/70 text-[1.2vw] font-bold">
            {outstandingGame.title}
          </p>
          <p className="text-white/60 text-[1vw] font-bold ">
            {outstandingGame.description}
          </p>
          <a href={outstandingGame.link} target="_blank">
            <Tab className={"mt-[0.5vw] !scale-97 w-full"}>View Match</Tab>
          </a>
        </div>
        <div className="h-3/4 flex flex-col w-1/3">
          <p className="text-white/80 text-[1.5vw] font-bold w-full">
            Wise Words
          </p>
          <p className="text-white/60 text-[1vw]">
            Updated {new Date(currentQuote.date).toLocaleDateString()}
          </p>
          <p className="text-white/70 text-[1.2vw] font-bold">
            "{currentQuote.quote}"
          </p>
          <a
            className="text-[1.05vw] text-white/70 hover:text-white/80 mr-auto text-left"
            target="_blank"
            href={`https://chess.com/member/${currentQuote.from}`}
          >
            <i> From {currentQuote.from} ⧉</i>
          </a>
          <p className="text-white/60 text-[1vw] font-bold ">
            {currentQuote.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default WeeklyContent;
