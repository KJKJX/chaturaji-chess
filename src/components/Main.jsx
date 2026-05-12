import React from "react";
import { motion } from "motion/react";
function Main({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="scale-125 h-[25vw] w-[50vw] bg-black/20 rounded-[1vw] border-[0.1vw] border-white/20 m-auto flex flex-col items-center text-white py-[2vw] overflow-clip"
    >
      <> {children}</>
    </motion.div>
  );
}

export default Main;
