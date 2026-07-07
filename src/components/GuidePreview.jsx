import React from "react";
import { motion } from "motion/react";
function GuidePreview({ guide, i, onClick }) {
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
      className="flex overflow-clip flex-col items-center h-[19vw] w-37/100 border-[0.1vw] border-white/50 rounded-[1vw] bg-gray-950/50 cursor-pointer scale-90"
      onClick={onClick}
    >
      <div className="overflow-clip h-[10.25vw] w-full p-[0.5vw]">
        <img src={guide.img} className="w-full rounded-[0.8vw] m-auto" />
      </div>
      <div className="w-full h-[0.05vw] bg-white/50" />
      <div className="flex flex-col px-[0.5vw] pt-[0.5vw] ml-[0.2vw]">
        <p className="text-white/80 text-[1.3vw] !font-[900] capitalize w-[15vw] truncate">
          {guide.title}
        </p>
        <i className="text-white/60 text-[0.9vw] !font-[900] capitalize w-full capitalize">
          Created {new Date(guide.date).toLocaleDateString()} | {guide.minRead}{" "}
          Minute Read
        </i>
        <a
          className="text-[1vw] text-white/60 hover:text-white/80 mr-auto text-left italicize"
          target="_blank"
          href={`https://chess.com/member/${guide.from}`}
        >
          by {guide.from}
        </a>{" "}
        {/* <p className="text-left text-white/70 text-[0.9vw]">
          {guide.description.split(" ").slice(0, 10).join(" ")}...
        </p> */}
        <p className="mt-[0.4vw] text-center text-[1.3vw]">Click to read!</p>
      </div>
    </motion.div>
  );
}

export default GuidePreview;
