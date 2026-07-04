import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { openings } from "../data/openings";
import { news } from "../data/news";
import NewsArticlePreview from "./NewsArticlePreview";
// import OpeningPreview from "./OpeningPreview";

function NewsList({ tab, onNewsArticlePreviewClick }) {
  const [filteredNews, setFilteredNews] = useState(
    news.sort((a, b) => (a.date > b.date ? -1 : 1)),
  );
  const [latestNews] = useState(
    news.sort((a, b) => (a.date > b.date ? -1 : 1))[0],
  );
  const [renderPreviews, setRenderPreviews] = useState(false);
  useEffect(() => {
    setFilteredNews(
      news.filter(
        (article) =>
          article.type === (tab === "events" ? "event" : tab) || "news" === tab,
      ),
    );
  }, [tab]);
  useEffect(() => {
    setTimeout(() => {
      setRenderPreviews(true);
    }, 2000);
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1,
          duration: 0.75,
        },
      }}
      exit={{
        opacity: 0,
      }}
      className="h-full w-full flex flex-row overflow-scroll"
    >
      <div className="w-2/5 h-full border-r-[0.11vw] border-white/20 flex flex-col">
        <motion.i
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-white/80 text-[2vw] font-bold text-center mx-auto"
        >
          Latest News
        </motion.i>
        {renderPreviews && (
          <NewsArticlePreview
            article={latestNews}
            i={0}
            type={latestNews.type}
            onClick={() => onNewsArticlePreviewClick(latestNews)}
            className={"!w-6/10 mx-auto scale-110 mt-[2vw]"}
          />
        )}
      </div>
      <div className="w-3/5 h-full flex flex-col">
        {" "}
        <motion.i
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="text-white/80 text-[2vw] font-bold text-center mx-auto capitalize"
        >
          All {tab}
        </motion.i>
        <div className="flex flex-row flex-wrap gap-[2vw] w-full px-[1vw] justify-evenly overflow-scroll h-full">
          {renderPreviews &&
            filteredNews.map((article, i) => (
              <NewsArticlePreview
                article={article}
                i={i}
                type={article.type}
                onClick={() => onNewsArticlePreviewClick(article)}
              />
            ))}
        </div>
      </div>
    </motion.div>
  );
}

export default NewsList;
