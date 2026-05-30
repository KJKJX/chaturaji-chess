import React from "react";
import boat from "../../public/favicon.svg";
import { motion } from "motion/react";
import { clearSearchParams, setSearchParams } from "../functions/urlFunctions";
import { useQueryState } from "nuqs";
import Tab from "./Tab";

function Nav() {
  const tabs = [
    { title: "profile" },
    { title: "puzzles", disabled: true },
    { title: "learn", disabled: true },
    { title: "records", disabled: true },
    { title: "news", disabled: true },
  ];
  const [selectedTab, setSelectedTab] = useQueryState("tab");
  const [subTab, setSubTab] = useQueryState("subTab");
  return (
    <nav className="bg-black/10 border-b-[0.1vw] border-white/20 w-full h-[7vw] flex items-center">
      <div className="flex flex-row items-center ml-[1vw]">
        <img src={boat} className="h-[5vw] brightness-120 grayscale-20" />
        <p className="cursive text-white/70 text-[2vw] ml-[1vw] font-black">
          Chaturaji Chess Team
        </p>
      </div>
      <div className="h-full w-[0.07vw] bg-white/20 ml-[2vw]" />
      <div className="flex flex-row items-center *:mx-[2vw] ml-[2vw]">
        {tabs.map((mappedTab) => (
          <Tab
            active={selectedTab === mappedTab.title}
            disabled={mappedTab.disabled}
            onClick={() => {
              if (mappedTab.title === selectedTab) {
                setSelectedTab(null);
                setSubTab(null);
                return;
              }
              setSelectedTab(mappedTab.title);
            }}
          >
            {mappedTab.title}
          </Tab>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
