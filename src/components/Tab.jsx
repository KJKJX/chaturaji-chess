import React from "react";
import { motion } from "motion/react";
export default function Tab({
  active,
  disabled,
  onClick,
  className,
  children,
}) {
  return (
    <motion.button
      whileHover={disabled || { scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${
        disabled && "!cursor-not-allowed opacity-50"
      } h-[3vw] w-[9vw] border-[0.1vw] text-[1.2vw] border-white/20 rounded-[1vw] flex items-center justify-center capitalize text-white/80 scale-120 px-[1vw] cursor-pointer ${
        active ? "bg-white/10" : ""
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
