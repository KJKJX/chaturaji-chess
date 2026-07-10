import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import Spinner from "../components/Spinner";
import { AnimatePresence, motion } from "motion/react";
import Tab from "../components/Tab";
import Board from "../components/Board";
import OpeningInfo from "../components/OpeningInfo";
import { openings } from "../data/openings";
import OpeningsList from "../components/OpeningsList";
import Article from "../components/Article";
import { guides } from "../data/guides";
import GuidesList from "../components/GuidesList";
import TipsList from "../components/TipsList";
import NewsList from "../components/NewsList";
import WeeklyContent from "../components/WeeklyContent";
import RanksList from "../components/RanksList";
let tabs = [
  {
    title: "ranks",
  },
  {
    title: "player profiles",
    disabled: true,
  },
  {
    title: "contributors",
    disabled: true,
  },

  // {
  //   title: "chaturaji content",
  //   // disabled: true,
  // },
];
function RecordsPage() {
  const [selectedTab, setSelectedTab] = useState("ranks");
  const [loading, setLoading] = useState(false);
  return (
    <Main
      className={"!w-[60vw] !h-[40vw]"}
      tabs={tabs}
      selectedTab={selectedTab}
      onTabClick={(tab) => setSelectedTab(tab)}
    >
      <AnimatePresence mode="wait">
        {loading && <Spinner key="spinner" />}
        {selectedTab === "ranks" && <RanksList key="ranks_list" />}
      </AnimatePresence>
    </Main>
  );
}

export default RecordsPage;
