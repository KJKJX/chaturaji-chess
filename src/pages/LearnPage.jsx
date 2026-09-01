import { useEffect, useState } from "react";
import Main from "../components/Main";
import Spinner from "../components/Spinner";
import { AnimatePresence } from "motion/react";
import OpeningInfo from "../components/OpeningInfo";
import { openings } from "../data/openings";
import OpeningsList from "../components/OpeningsList";
import Article from "../components/Article";
import { guides } from "../data/guides";
import GuidesList from "../components/GuidesList";
import TipsList from "../components/TipsList";
import { useQueryState } from "nuqs";
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
  const [guide, setGuide] = useQueryState("guide");
  const [opening, setOpening] = useQueryState("opening");
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
  useEffect(() => {
    const foundGuideFromLink = guides.find(
      (mappedGuide) => mappedGuide.id === +guide,
    );
    if (foundGuideFromLink) {
      setCurrentGuide(foundGuideFromLink);
      setSelectedTab("guide");
    }
    setGuide(null);
  }, []);
  useEffect(() => {
    const foundOpeningFromLink = openings.find(
      (mappedOpening) => mappedOpening.id === +opening,
    );
    if (foundOpeningFromLink) {
      setCurrentOpening(foundOpeningFromLink);
      setSelectedTab("opening");
    }
    setOpening(null);
  }, []);
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
            from={"guide"}
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
