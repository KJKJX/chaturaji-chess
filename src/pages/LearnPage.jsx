import React, { useState } from "react";
import Main from "../components/Main";
import Spinner from "../components/Spinner";
import { AnimatePresence, motion } from "motion/react";
import Tab from "../components/Tab";
import Board from "../components/Board";
import OpeningInfo from "../components/OpeningInfo";
import { openings } from "../data/openings";
import OpeningsList from "../components/OpeningsList";
let tabs = [
  {
    title: "openings",
    disabled: false,
  },
  {
    title: "tactics",
    disabled: true,
  },
];
function LearnPage() {
  const [selectedTab, setSelectedTab] = useState("openings");
  const [loading, setLoading] = useState(false);
  const [currentOpening, setCurrentOpening] = useState(null);
  function handleOnOpeningPreviewClick(opening) {
    setLoading(true);
    setCurrentOpening(opening);
    setTimeout(() => {
      setLoading(false);
      setSelectedTab("opening");
    }, 1500 + Math.random() * 1500);
  }
  return (
    <Main
      className={"!w-[49vw] !h-[40vw]"}
      tabs={tabs}
      selectedTab={selectedTab}
      onTabClick={(tab) => setSelectedTab(tab)}
    >
      <AnimatePresence mode="wait">
        {loading && <Spinner key="spinner" />}
        {selectedTab === "opening" && !loading && (
          <OpeningInfo
            key="opening_info"
            opening={currentOpening}
            setSelectedTab={setSelectedTab}
          />
        )}
        {selectedTab === "openings" && !loading && (
          <OpeningsList
            key="opening_list"
            onOpeningPreviewClick={handleOnOpeningPreviewClick}
          />
        )}
      </AnimatePresence>
    </Main>
  );
}

export default LearnPage;
