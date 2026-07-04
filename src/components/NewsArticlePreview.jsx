import React from "react";

import { motion } from "motion/react";
import TagsList from "./TagsList";
function NewsArticlePreview({ article, i, type, onClick, className }) {
  if (type === "info") {
    return (
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: i / 5,
          },
        }}
        whileHover={{ scale: 1.05 }}
        className={`flex flex-col items-center min-h-[2vw] h-fit p-[0.5vw] w-9/20 border-[0.1vw] border-white/50 rounded-[1vw] bg-gray-950/50 scale-90 ${className}`}
      >
        <div className="flex flex-col ml-[0.2vw]">
          <p className="text-white/80 text-[1.3vw] !font-[900] capitalize truncate">
            {article.title}
          </p>
          <p className="text-left text-white/70 text-[0.9vw]">
            {new Date(article.date).toLocaleDateString()}
          </p>
          <p className="text-left text-white/70 text-[0.9vw]">
            {article.description}
          </p>
          {article.tags && <TagsList tags={article.tags} />}
        </div>
      </motion.div>
    );
  } else if (type === "event") {
    const tagsToMap = ["event", ...article.tags];
    const articleDateStart = new Date(
      article.details.dateStart,
    ).toLocaleDateString();
    const articleDateEnd = new Date(
      article.details.dateEnd,
    ).toLocaleDateString();
    return (
      <motion.div
        initial={{ y: 25, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: i / 5,
          },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        className={`flex flex-col items-center min-h-[2vw] h-fit p-[0.5vw] w-9/20 border-[0.1vw] border-white/50 rounded-[1vw] bg-gray-950/50 cursor-pointer scale-90  ${className}`}
      >
        <div className="flex flex-col ml-[0.2vw]">
          <TagsList tags={tagsToMap} />
          <hr className="mt-[0.2vw]" />
          <p className="text-white/90 text-[1.5vw] !font-[900] capitalize truncate">
            {article.title.slice(0, 16)}...
          </p>
          <p className="text-left text-white/80 text-[1vw]">
            {articleDateStart == "Invalid Date"
              ? article.details.dateStart
              : articleDateStart}{" "}
            —{" "}
            {articleDateEnd == "Invalid Date"
              ? article.details.dateEnd
              : articleDateEnd}
          </p>
          <p className="text-left text-white/70 text-[0.9vw] mt-[0.2vw]">
            {article.sections
              ?.find((section) => section.type === "paragraph")
              .text.split(" ")
              .slice(0, 20)
              .join(" ")}
            ...
          </p>
          <p className="mt-[0.4vw] text-white/90 text-center text-[1.3vw] capitalize">
            Click to Read more
          </p>
          {/* {article.tags && <TagsList tags={article.tags} />} */}
        </div>
      </motion.div>
    );
  }
}

export default NewsArticlePreview;
