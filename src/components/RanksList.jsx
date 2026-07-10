import { motion } from "motion/react";
import React from "react";
import { ranks } from "../data/ranks";
import Rank from "./Rank";
import { convertEloToString } from "../data/functions";

function RanksList() {
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
        All Ranks
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
        className="h-full w-full grid grid-cols-3 grid-rows-5 overflow-scroll gap-y-[19vw] pb-[5vw] pt-[1vw]"
      >
        {ranks.map((rank, i) => (
          <div className="flex flex-col items-center">
            <p className="text-[2vw] capitalize font-black">{rank.title}</p>
            {convertEloToString(localStorage.elo) === rank.title && (
              <p className="text-[1vw] capitalize">
                You are here | {localStorage.elo} Elo
              </p>
            )}
            <p className="text-[1.5vw] capitalize font-black mb-[0.5vw]">
              {Math.round(rank.requiredElo)}
              {isNaN(Math.round(ranks.at(i + 1)?.requiredElo))
                ? "+"
                : "-" + Math.round(ranks.at(i + 1)?.requiredElo)}{" "}
              Elo
            </p>

            <Rank
              // delay={2 + i * 0.5}
              // animated={true}
              size={
                rank.title.includes("emerald") || rank.title.includes("diamond")
                  ? 0.8
                  : 0.9
              }
              rank={rank}
            />
          </div>
        ))}
        {/* <p>
          NOTICE: If you are below 1500, you will still be counted as{" "}
          {ranks.at(0).title}
        </p> */}
      </motion.div>
    </motion.div>
  );
}

export default RanksList;
