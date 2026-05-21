import React, { useState } from "react";
import Input from "./Input";
import { motion } from "motion/react";

function Inserter({ onClickDisplay }) {
  const [elo, setElo] = useState(localStorage.elo || "");
  const [matches, setMatches] = useState(localStorage.matches || "");
  return (
    <motion.div
      className="w-full flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.p
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="text-white/80 text-[2vw] font-bold w-full text-center"
      >
        Your Profile
      </motion.p>
      <motion.i
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          damping: 10,
          delay: 2,
        }}
        className="mt-[0.5vw] text-[1.6vw] font-[500] text-white/80"
      >
        Insert Your:
      </motion.i>
      <div className="flex flex-row justify-evenly w-full mt-[2vw]">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 3,
          }}
          className="flex flex-col items-center space-y-[0.5vw] scale-110"
        >
          <p className="text-center text-white/70 text-[1.3vw]">
            Chaturaji Elo
          </p>
          <Input
            type={"number"}
            placeholder={"Elo"}
            className={"w-[5vw] h-[2vw] rounded-[0.5vw] border-[0.1vw]"}
            value={elo}
            onChange={(e) => {
              if (e.target.value < 0) {
                setElo("");
                return;
              }
              setElo(e.target.value);
              localStorage.elo = e.target.value;
            }}
          />
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            damping: 10,
            delay: 3,
          }}
          className="flex flex-col items-center space-y-[0.5vw] scale-110"
        >
          <p className="text-center text-white/70 text-[1.3vw]">
            Matches Played
          </p>
          <Input
            placeholder={"Matches"}
            type={"number"}
            value={matches}
            onChange={(e) => {
              if (e.target.value < 0) {
                setMatches("");
                return;
              }
              setMatches(e.target.value);
              localStorage.matches = e.target.value;
            }}
            className={"w-[7vw] h-[2vw] rounded-[0.5vw] border-[0.1vw]"}
          />
        </motion.div>
      </div>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 4 } }}
        whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
        onClick={() => onClickDisplay(elo, matches)}
        className="mt-[2vw] bg-black/20 p-[1.2vw] rounded-[1vw] font-[500] px-[2vw] border-[0.1vw] border-white/20 cursor-pointer text-center text-[1.2vw] text-white/80"
      >
        Display Profile
      </motion.button>
    </motion.div>
  );
}

export default Inserter;
