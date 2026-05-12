import React from "react";
import { motion } from "motion/react";

function Spinner() {
  return (
    <motion.span exit={{ opacity: 0 }} className="loader m-auto scale-175" />
  );
}

export default Spinner;
