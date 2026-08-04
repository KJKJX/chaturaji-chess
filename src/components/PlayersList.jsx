// import React from "react";
import { motion } from "motion/react";
import { openings } from "../data/openings";
import { players } from "../data/players";
import PlayerPreview from "./PlayerPreview";

function PlayersList({ onOpeningPreviewClick }) {
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
        Players' Profiles
      </motion.i>
      <div className="flex flex-row flex-wrap space-x-[1vw] w-full px-[1vw] justify-center space-y-0 overflow-scroll h-fit">
        {players.map((player, i) => (
          <PlayerPreview player={player} i={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default PlayersList;
