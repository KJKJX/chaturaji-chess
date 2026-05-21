import { motion } from "motion/react";
import React from "react";
import { convertRankToString } from "../data/functions";
import pkg from "react-countup";
import Rank from "./Rank";
import { ranks } from "../data/ranks";
const CountUp = pkg.CountUp?.default || pkg.default;
console.log(CountUp);
function calculateRequirements(stats) {
  // 1. Calculate current XP out of 100 using your exact logic
  // Note: Math.floor handles the floating-point rounding issue of toFixed(0)
  const currentExp = Math.floor((stats.level - Math.floor(stats.level)) * 100);
  const expNeeded = 100 - currentExp;

  // 2. Calculate how many matches are needed if Elo stays exactly the same
  // Formula: (Exp Needed * 100) / Current Elo
  const matchesNeeded = Math.ceil((expNeeded * 100) / stats.elo);

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
  // console.log(stats.level, stats.level, stats.level - stats.level.toFixed(0));
  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="flex flex-row items-center w-full"
    >
      <div className="w-1/2 h-full flex flex-col items-center">
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
              convertRankToString(stats.elo).includes("emerald") ? 0.8 : 0.9
            }
            animated={true}
            delay={2}
            rank={ranks.find((rank) => rank.rank === stats.rank.split(" ")[0])}
          />
          <motion.p
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ delay: 3, type: "spring", damping: 7, bounce: 1 }}
            className="text-white/80 text-[2vw] font-bold capitalize mt-[1.5vw]"
          >
            {stats.rank}
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1.5 }}
            className="text-white/60 text-[1.5vw] font-bold capitalize"
          >
            {" "}
            <CountUp end={stats.elo} suffix=" Elo" delay={4} />
          </motion.span>
        </div>
      </div>
      <div className="w-1/2 h-full flex flex-col items-center">
        <motion.i
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 5,
          }}
          className="mt-[0.5vw] text-[1.6vw] font-[500] text-white/80"
        >
          And On
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
          className="w-1/2 h-[2vw] rounded-full border-[0.1vw] border-white/20 bg-black/30 mt-[1vw] overflow-clip"
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
            </>
          )}
        </ul>
      </div>
    </motion.div>
  );
}

export default Profile;
