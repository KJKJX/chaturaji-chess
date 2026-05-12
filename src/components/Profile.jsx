import { motion } from "motion/react";
import React from "react";
import { convertRankToString } from "../data/functions";
import pkg from "react-countup";
const CountUp = pkg.CountUp?.default || pkg.default;
console.log(CountUp);
function Profile({ stats }) {
  return (
    <motion.div className="flex flex-col items-center w-full">
      <motion.p
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="text-white/80 text-[2vw] font-bold w-full text-center"
      >
        Your Profile
        <div className="h-[0.1vw] bg-white/20 w-[100%] mt-[1vw] absolute" />
      </motion.p>

      <motion.i
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          delay: 2,
        }}
        className="mt-[1.5vw] text-[1.6vw] font-[500] text-white/80"
      >
        You Are
      </motion.i>
      <motion.p
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ delay: 3, type: "spring", damping: 7, bounce: 1 }}
        className="text-white/80 text-[2vw] font-bold capitalize"
      >
        {stats.rank} Rank
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
        <CountUp end={stats.level} prefix="Level " delay={6} />
      </motion.span>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 7, duration: 1.5 }}
        className="w-4/5 h-[2vw] rounded-full border-[0.1vw] border-white/20 bg-black/30 mt-[1vw] overflow-clip"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${+stats.level.toFixed(2).toString().split(".").at(-1)}%`,
          }}
          transition={{ delay: 7, duration: 2 }}
          className="h-full bg-white/70 rounded-r-full"
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Profile;
