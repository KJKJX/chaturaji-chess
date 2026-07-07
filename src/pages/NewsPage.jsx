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
let tabs = [
  {
    title: "news",
  },
  {
    title: "events",
  },
  {
    title: "announcements",
  },
  {
    title: "chaturaji content",
    // disabled: true,
  },
];
function NewsPage({ updateLastVisited }) {
  const [selectedTab, setSelectedTab] = useState("news");
  const [loading, setLoading] = useState(false);
  const [currentArticle, setCurrentArticle] = useState(null);
  function handleOnNewsArticlePreviewClick(article) {
    setCurrentArticle(article);
    // setTimeout(() => {
    setLoading(false);
    setSelectedTab("article");
    // }, 1500 + Math.random() * 1500);
  }
  useEffect(() => {
    updateLastVisited();
  }, []);
  return (
    <Main
      className={"!w-[60vw] !h-[40vw]"}
      tabs={tabs}
      selectedTab={selectedTab}
      onTabClick={(tab) => setSelectedTab(tab)}
    >
      <AnimatePresence mode="wait">
        {loading && <Spinner key="spinner" />}
        {(selectedTab === "news" ||
          selectedTab === "events" ||
          selectedTab === "announcements") &&
          !loading && (
            <NewsList
              tab={selectedTab}
              key="news_list"
              onNewsArticlePreviewClick={handleOnNewsArticlePreviewClick}
            />
          )}
        {selectedTab === "article" && !loading && (
          <Article
            key="article"
            article={currentArticle}
            setSelectedTab={setSelectedTab}
            backTab={"news"}
          />
        )}
        {selectedTab === "chaturaji content" && !loading && <WeeklyContent />}
      </AnimatePresence>
    </Main>
  );
}

export default NewsPage;
