import React from "react";
import { motion } from "motion/react";
import { openings } from "../data/openings";
import OpeningPreview from "./OpeningPreview";

function OpeningsList({ onOpeningPreviewClick }) {
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
      className="h-[30vw] w-full flex flex-col overflow-scroll"
    >
      <motion.i
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="text-white/80 text-[2vw] font-bold text-center"
      >
        Openings Collection
      </motion.i>
      <div className="flex flex-row flex-wrap gap-[2vw] w-full mt-[1vw] p-[1vw] justify-evenly overflow-scroll h-[20vw]">
        {openings.map((opening, i) => (
          <OpeningPreview
            opening={opening}
            i={i}
            onClick={() => onOpeningPreviewClick(opening)}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default OpeningsList;
