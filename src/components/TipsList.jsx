import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { tips } from "../data/tips";
import Input from "../components/Input";
const shuffledTips = tips.sort(() => Math.random() - 0.5);
function TipsList() {
  const [filteredTips, setFilteredTips] = useState(shuffledTips);
  const [eloRange, setEloRange] = useState(+localStorage.elo || 0);
  const [query, setQuery] = useState("");
  useEffect(() => {
    let newTips = shuffledTips;
    newTips = newTips.filter((tip) => tip.title.includes(query));
    newTips = newTips.filter((tip) => !(tip.elo > eloRange));
    setFilteredTips(newTips);
  }, [eloRange, query]);
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
      className="h-full w-full flex flex-col overflow-scroll"
    >
      <motion.i
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="text-white/80 text-[2vw] font-bold text-center"
      >
        All Tips
      </motion.i>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 1.9 }}
        className=" flex flex-row space-x-[0.75vw] justify-center items-center"
      >
        <Input
          placeholder={"Search Tips"}
          type={"text"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={
            "!h-[1vw] !border-white/50 !border-[0.1vw] rounded-[1vw] mt-[1vw] w-[12vw] text-[1.4vw]"
          }
        />
        <div className="flex flex-row text-[1.4vw]">
          <p className="!font-black mx-[1vw space-x-[0.5vw] text-white/90">
            <Input
              placeholder={"Elo"}
              type={"text"}
              value={eloRange}
              onChange={(e) => setEloRange(e.target.value)}
              className={
                "!h-[1vw] !border-white/50 !border-[0.1vw] rounded-[1vw] mt-[1vw]  text-[1.4vw] mr-[0.5vw] w-[7vw]"
              }
            />{" "}
            Elo And Above
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 2 }}
        className="w-full h-fit grid grid-cols-2 p-[2vw] text-[1.1vw] text-white/70 gap-[1vw]"
      >
        {filteredTips.map((tip) => (
          <div className="flex flex-col space-y-[0.1vw]">
            <div>{tip.title}</div>
            <a
              className="text-[1vw] text-white/60 hover:text-white/80 mr-auto text-left italicize"
              target="_blank"
              href={`https://chess.com/member/${tip.from}`}
            >
              by {tip.from}
            </a>
            {tip.elo > 0 && (
              <p className="text-[1vw] text-white/60">{tip.elo}+</p>
            )}
          </div>
        ))}
        {filteredTips.length === 0 && (
          <p className="mx-auto text-[1.5vw] text-white/60 w-full text-center absolute">
            No tips found...
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}

export default TipsList;
