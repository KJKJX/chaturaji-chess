import React from "react";
import Main from "../components/Main";
import { motion } from "motion/react";
import Tab from "../components/Tab";

function HomePage() {
  return (
    <Main className={"!h-[30vw]"}>
      <div className="h-full w-full items-center justify-center flex flex-col">
        <motion.p
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", damping: 7, bounce: 1 }}
          className="text-white/80 text-[1.7vw] text-center mb-auto"
        >
          Welcome to the Official Chaturaji Chess Team Website
        </motion.p>
        <div className="flex flex-row items-center justify-center mb-[1.6vw] w-full h-full *:my-auto gap-[1vw]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/80 text-[0.85vw] text-left mb-auto w-1/3"
          >
            This is the official Chaturaji Chess Team website! This was created
            to: 1. Let players see their "rank", 2. To teach players about
            openings, strategies, techniques, and more, and 3. To inform players
            about current news. Hop in and check your rank and level in the
            Profile tab, soak up some clever tips in the Learn tab, check out
            active players in the Records tab, scroll through past posts in the
            News tab, or solve some puzzles! Thank you to everyone who made this
            website possible. Enjoy it!
          </motion.p>
          <motion.img
            src="https://images.chesscomfiles.com/uploads/v1/group/677445.7fbed332.160x160o.d5e7c41d9ebf@2x.png"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white/80 text-[1.2vw] text-center mb-auto w-1/4 rounded-[1vw]"
          />
        </div>
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 2,
            type: "spring",
          }}
          className="flex flex-row justify-evenly w-full h-fit"
        >
          <a
            target="_blank"
            href="https://www.chess.com/variants/chaturaji/lobby"
          >
            <Tab className="!text-[0.9vw] w-[10vw]">Play Chaturaji!</Tab>
          </a>
          <a
            target="_blank"
            href="https://www.chess.com/club/chaturaji-chess-team"
          >
            <Tab className="!text-[0.9vw] w-[10vw]">Chaturaji Club</Tab>
          </a>
        </motion.div>
      </div>
    </Main>
  );
}

export default HomePage;
