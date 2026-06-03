import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Tab from "./Tab";
function Main({ tabs, loading, onTabClick, selectedTab, className, children }) {
  return loading ? null : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className={`${className} scale-125 max-h-[60vh] w-[60vw] bg-black/10 rounded-[1vw] border-[0.1vw] border-white/20 mt-auto flex flex-col items-center text-white py-[2vw] overflow-clip`}
    >
      {tabs && (
        <div className="border-b-[0.1vw] border-white/20 pb-[2vw] w-full mb-[1vw]">
          <div className="flex flex-row items-center jutify-center w-fit mx-auto *:mx-[2vw]">
            {tabs.map((tab, i) => (
              <Tab
                active={tab.title === selectedTab}
                disabled={tab.disabled}
                onClick={() => onTabClick(tab.title)}
              >
                {tab.title}
              </Tab>
            ))}
          </div>
        </div>
      )}
      <>{children}</>
    </motion.div>
  );
}

export default Main;
