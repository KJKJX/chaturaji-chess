import React, { useState } from "react";
import Board from "./Board";
import Tab from "./Tab";
import { motion } from "motion/react";
import SectionReader from "./SectionReader";
function OpeningInfo({ opening, setSelectedTab }) {
  if (!opening?.moves) {
    return null;
  }
  const totalMoves = opening.moves.length;
  const [currentMove, setCurrentMove] = useState(-1);

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
      className="h-[30vw] flex flex-row w-full  overflow-scroll"
    >
      <div className="w-1/3 border-white/20 flex flex-col items-center mx-[2vw] mt-[0.8vw] overflow-scroll">
        <i className="text-white/80 text-[1.4vw] !font-[900] capitalize w-full">
          {opening.title}
        </i>
        <i className="text-white/60 text-[1vw] !font-[900] capitalize w-full capitalize mt-[0.3vw]">
          {opening.moves.length} moves;{" "}
          {totalMoves <= 3
            ? "short"
            : totalMoves <= 6
              ? "medium-length"
              : "long"}
          ; {opening.tags.map((tag) => tag)}
        </i>
        <div className="flex flex-row  *:text-[1vw] *:h-fit items-center my-[0.5vw] *:p-[0.3vw]">
          <p
            className="cursor-pointer hover:scale-110 duration-150"
            onClick={() => {
              if (currentMove > -1) {
                setCurrentMove(currentMove - 1);
              }
            }}
          >
            {"◀︎"}
          </p>
          <div className="w-full overflow-x-scroll flex flex-row flex-wrap space-x-[0.7vw]">
            {opening.moves.map((move, i) => {
              const [color, piece, position] = move.split(".");
              return (
                <p
                  className={`${
                    i === currentMove && "bg-white/40"
                  } rounded-[0.1vw]`}
                >
                  {i + 1}. {piece.at(0).toUpperCase().replace("P", "")}
                  {position}{" "}
                </p>
              );
            })}
          </div>
          <p
            className="cursor-pointer hover:scale-110 duration-150"
            onClick={() => {
              if (currentMove + 1 < opening.moves.length) {
                setCurrentMove(currentMove + 1);
              }
            }}
          >
            {"►"}
          </p>
        </div>
        {/* <p className="text-left text-white/70 text-[1vw] w-full">
          {opening.description}
        </p> */}
        <SectionReader sections={opening.sections} />
        <a
          href={opening.link}
          target="_blank"
          className="hover:underline text-gray-100/90 hover:text-white/90 text-[1.12vw] duration-300 mt-[0.5vw]"
        >
          See a match with this opening!
        </a>
        <Tab
          onClick={() => setSelectedTab("openings")}
          className={"mt-[0.5vw] !scale-90"}
        >
          Back
        </Tab>
      </div>
      <div className="h-full w-[0.05vw] bg-white/20" />
      <Board
        moves={opening.moves}
        prevMoves={opening.prevMoves}
        currentMove={currentMove}
        className={"m-auto"}
        size={20}
      />
    </motion.div>
  );
}

export default OpeningInfo;
