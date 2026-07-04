import React from "react";
import { motion } from "motion/react";
export default function Tab({
  active,
  disabled,
  onClick,
  className,
  children,
  notify = false,
}) {
  return (
    <motion.button
      whileHover={disabled || { scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${
        disabled && "!cursor-not-allowed opacity-50"
      } min-h-[3vw] min-w-[9vw] border-[0.1vw] text-[1.2vw] border-white/20 rounded-[1vw] flex items-center justify-center capitalize text-white/80 scale-120 px-[1vw] cursor-pointer relative ${
        active ? "bg-white/10" : ""
      } ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {notify && (
        <div className="animate-pulse -top-[0.2vw] -right-[0.2vw] h-[1.2vw] w-[1.2vw] absolute rounded-full bg-red-500"></div>
      )}
      {children}
    </motion.button>
  );
}
