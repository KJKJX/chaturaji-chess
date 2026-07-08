import { motion } from "motion/react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  convertEloToString,
  getNextRankObject,
  getRandomTips,
} from "../data/functions";
import pkg from "react-countup";
import Rank from "./Rank";
import { useEffect } from "react";
import { ranks } from "../data/ranks";
const CountUp = pkg.CountUp?.default || pkg.default;
function calculateRequirements(stats) {
  // 1. Calculate current XP out of 100 using your exact logic
  // Note: Math.floor handles the floating-point rounding issue of toFixed(0)
  const currentExp = Math.floor((stats.level - Math.floor(stats.level)) * 100);
  const expNeeded = 100 - currentExp;

  // 2. Calculate how many matches are needed if Elo stays exactly the same
  // Formula: (Exp Needed * 100) / Current Elo
  const matchesNeeded = Math.ceil(
    (expNeeded * 100) / ((stats.elo + stats.peak) / 2),
  );

  // 3. Calculate how much Elo is needed to level up in exactly 1 more match
  // Formula: (Exp Needed * 100) / (Current Matches + 1)
  const eloNeededInOneMatch = (expNeeded * 100) / (stats.matches + 1);
  return {
    currentExp: currentExp,
    expNeeded: expNeeded,
    matchesNeeded: matchesNeeded,
    eloNeededInOneMatch: eloNeededInOneMatch * 10,
  };
}
// disclaimer that function is AI because it's wild crazt insane math. nothing else in this file is tho.
function Profile({ stats }) {
  const nextRank = useMemo(() => {
    return getNextRankObject(stats.rank);
  }, [stats]);
  const [tips, setTips] = useState([]);
  useEffect(() => setTips(getRandomTips(2)), []);
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="flex flex-row items-center w-full"
    >
      <div className="w-1/3 h-full flex flex-col items-center">
        {/* <div className="flex-col flex scale-100 h-[26vw] overflow-scroll">
        <Rank rank={ranks[0]} />
        <Rank rank={ranks[1]} />
        <Rank rank={ranks[2]} />
        <Rank rank={ranks[3]} />
      </div> */}
        <motion.p
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-white/80 text-[2vw] font-bold w-full text-center"
        >
          Your Rank
        </motion.p>

        <div className="flex flex-col items-center">
          <Rank
            size={
              convertEloToString(stats.elo).includes("emerald") ||
              convertEloToString(stats.elo).includes("diamond")
                ? 0.8
                : 0.9
            }
            animated={true}
            delay={2}
            rank={stats.rank}
          />
          <motion.p
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ delay: 3, type: "spring", damping: 7, bounce: 1 }}
            className="text-white/80 text-[2vw] font-bold capitalize mt-[1.5vw]"
          >
            {stats.rank.title}
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1.5 }}
            className="text-white/60 text-[1.5vw] font-bold capitalize"
          >
            {" "}
            <CountUp end={stats.elo} suffix=" Elo" delay={4} /> |{" "}
            <CountUp end={stats.peak} suffix=" Peak" delay={4} />
          </motion.span>
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col items-center">
        <motion.i
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 5,
          }}
          className="text-white/60 text-[2vw] font-bold w-full text-center"
        >
          Your Level
        </motion.i>
        <motion.span
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ delay: 6, type: "spring", damping: 7, bounce: 1 }}
          className="text-white/80 text-[2vw] font-bold capitalize"
        >
          <CountUp end={Math.trunc(stats.level)} prefix="Level " delay={6} />
        </motion.span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7, duration: 1.5 }}
          className="w-7/10 h-[2vw] rounded-full border-[0.1vw] border-white/20 bg-black/30 mt-[1vw] overflow-clip"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${(stats.level - Math.trunc(stats.level)) * 100}%`,
            }}
            transition={{ delay: 7, duration: 2 }}
            className="h-full bg-white/70 rounded-r-full"
          />
        </motion.div>
        <motion.i
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 7.5,
          }}
          className="mt-[0.75vw] text-[1.6vw] font-[500] text-white/80"
        >
          To Level Up
        </motion.i>
        <ul className="*:text-[1.5vw] flex flex-col *:text-left *:before:content-['•'] *:before:transform *:before:mr-[1vw]">
          <motion.i
            initial={{
              x: -50,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 8 }}
            className="text-center text-white/60 mt-[0.5vw]"
          >
            {Math.trunc((stats.level - Math.trunc(stats.level)) * 100)}/100 Exp
          </motion.i>

          {stats.matches > 0 && (
            <>
              <motion.i
                initial={{
                  x: -50,
                  opacity: 0,
                }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 8.5 }}
                className="text-center text-white/60"
              >
                {calculateRequirements(stats).matchesNeeded} More Match
                {calculateRequirements(stats).matchesNeeded > 1 && "es"}
              </motion.i>
              {/* {stats.elo === stats.peak && (
                <motion.i
                  initial={{
                    x: -50,
                    opacity: 0,
                  }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 9 }}
                  className="text-center text-white/60"
                >
                  {Math.round(calculateRequirements(stats).eloNeededInOneMatch)}{" "}
                  More Elo
                </motion.i>
              )} */}
            </>
          )}
        </ul>
      </div>
      <div className="w-1/3 h-full flex flex-col items-center">
        <motion.i
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 10,
          }}
          className="text-white/60 text-[2vw] font-bold w-full text-center"
        >
          Extra
        </motion.i>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 11,
            duration: 1,
          }}
          className="*:text-[1.2vw] *:text-white/70 flex flex-col *:text-left *:before:content-['-'] *:before:transform *:before:mr-[0.5vw] mt-[0.2vw] mx-auto w-9/10 h-4/5  overflow-y-scroll"
        >
          {stats.rank !== ranks.at(-1) && (
            <li>
              <span className="capitalize text-white/90 !font-[900]">
                {nextRank.title}
              </span>{" "}
              ({Math.trunc(nextRank.requiredElo)} Elo) is in{" "}
              {Math.trunc(nextRank.requiredElo - stats.elo)} more Elo.
            </li>
          )}
          {tips.map((tip) => (
            <li>
              {tip?.title} <br />
              <a
                className="text-[1vw] text-white/60 hover:text-white/80"
                target="_blank"
                href={`https://chess.com/member/${tip.from}`}
              >
                by {tip.from}
              </a>
            </li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Profile;
