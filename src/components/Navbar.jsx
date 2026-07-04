import React from "react";
import boat from "../imgs/favicon.svg";
import { motion } from "motion/react";
import { clearSearchParams, setSearchParams } from "../functions/urlFunctions";
import { useQueryState } from "nuqs";
import Tab from "./Tab";
import { news } from "../data/news";

function Nav({ lastVisitedNews }) {
  const notifyNews =
    new Date(
      [...news].sort((x, y) => new Date(y.date) - new Date(x.date))[0].date,
    ) > new Date(lastVisitedNews);

  const tabs = [
    { title: "profile" },
    { title: "learn" },
    { title: "puzzles", disabled: true },
    { title: "records", disabled: true },
    { title: "news", notify: notifyNews },
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
            notify={mappedTab.notify}
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
