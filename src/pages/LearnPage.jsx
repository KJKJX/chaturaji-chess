import React, { useState } from "react";
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
let tabs = [
  {
    title: "openings",
    disabled: false,
  },
  {
    title: "tips",
    disabled: false,
  },
  {
    title: "guides",
    disabled: false,
  },
];
function LearnPage() {
  const [selectedTab, setSelectedTab] = useState("openings");
  const [loading, setLoading] = useState(false);
  const [currentOpening, setCurrentOpening] = useState(null);
  const [currentGuide, setCurrentGuide] = useState(null);
  function handleOnOpeningPreviewClick(opening) {
    setCurrentOpening(opening);
    // setTimeout(() => {
    setLoading(false);
    setSelectedTab("opening");
    // }, 1500 + Math.random() * 1500);
  }
  function handleOnGuidePreviewClick(guide) {
    setCurrentGuide(guide);
    // setTimeout(() => {
    setLoading(false);
    setSelectedTab("guide");
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
        {selectedTab === "guide" && !loading && (
          <Article
            key="guide"
            article={currentGuide}
            setSelectedTab={setSelectedTab}
            backTab={"guides"}
          />
        )}
        {selectedTab === "guides" && !loading && (
          <GuidesList
            key="guides"
            onGuidePreviewClick={handleOnGuidePreviewClick}
          />
        )}
        {selectedTab === "tips" && !loading && <TipsList key="tips" />}
      </AnimatePresence>
    </Main>
  );
}

export default LearnPage;
