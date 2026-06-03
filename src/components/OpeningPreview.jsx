import React from "react";

import { motion } from "motion/react";
function OpeningPreview({ opening, i, onClick }) {
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 2 + i / 5,
        },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="flex overflow-clip flex-col items-center h-[18vw] w-31/100 border-[0.1vw] border-white/50 rounded-[1vw] bg-gray-950/50 cursor-pointer scale-90"
      onClick={onClick}
    >
      <div className="overflow-clip h-1/2 w-full p-[0.5vw]">
        <img src={opening.img} className="w-full rounded-[0.8vw] m-auto" />
      </div>
      <div className="w-full h-[0.05vw] bg-white/50" />
      <div className="flex flex-col px-[0.5vw] pt-[0.5vw]">
        <i className="text-white/80 text-[1.3vw] !font-[900] capitalize w-[13vw] truncate">
          {opening.title}
        </i>
        <i className="text-white/60 text-[1.1vw] !font-[900] capitalize w-full capitalize">
          {opening.moves.length} moves;{" "}
          {opening.moves.length <= 3
            ? "short"
            : opening.moves.length <= 6
            ? "medium-length"
            : "long"}
          ; {opening.tags.map((tag) => tag)}
        </i>
        <p className="text-left text-white/70 text-[0.85vw] w-[12vw] truncate">
          {opening.description}
        </p>
        <p className="mt-[0.4vw] text-center text-[1.3vw]">Click to learn!</p>
      </div>
    </motion.div>
  );
}

export default OpeningPreview;
