import React, { useRef } from "react";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import SectionReader from "./SectionReader";
import Tab from "./Tab";
function Article({ article, setSelectedTab, backTab }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
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
      className="h-[30vw] flex flex-row w-full overflow-scroll relative justify-center"
    >
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
        }}
        className="fixed bg-white/60 rounded-full w-4/5 duration-300 h-[1vw] -translate-y-[0.75vw]"
      />
      <div
        className="w-8/10 mx-auto border-white/20 flex flex-col items-center mx-[2vw] mt-[0.8vw] overflow-scroll"
        ref={containerRef}
      >
        <p className="text-white/80 text-[1.6vw] !font-[900] capitalize w-full">
          {article.title}
        </p>
        {
          <p className="text-[1.15vw] text-left w-full text-white/70">
            {" "}
            {new Date(article.date).toLocaleDateString()}{" "}
            {article.minRead &&
              `| ${article.minRead}
            Minute Read`}
          </p>
        }
        {article.from && (
          <a
            className="text-[1vw] text-white/60 hover:text-white/80 mr-auto text-left italicize"
            target="_blank"
            href={`https://chess.com/member/${article.from}`}
          >
            by {article.from}
          </a>
        )}{" "}
        {article?.link && (
          <a
            className="text-[0.8vw] text-white/60 hover:text-white/80 text-left mr-auto mt-[0.4vw]"
            target="_blank"
            href={`${article.link}`}
          >
            Click for Original Article
          </a>
        )}
        {/* <p className="text-left text-white/70 text-[1vw] w-full">
          {opening.description}
        </p> */}
        <SectionReader
          sections={article.sections}
          className="*:my-[1vw] w-full"
        />
        <Tab
          onClick={() => setSelectedTab(backTab)}
          className={"mt-[0.5vw] !scale-90"}
        >
          Back
        </Tab>
      </div>
    </motion.div>
  );
}

export default Article;
