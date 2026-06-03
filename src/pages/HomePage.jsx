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
          Welcome to the Offical Chaturaji Chess Team Webstie
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/80 text-[1.2vw] text-center mb-auto"
        >
          (More Content Soon! Volunteer{" "}
          <a
            href="https://www.chess.com/club/notes/chaturaji-chess-team"
            target="_blank"
            className="underline hover:text-white/90"
          >
            here
          </a>
          ! Click the Profile tab for the main feature.) <br /> 🎉 Added 1st
          opening in Learn tab!
        </motion.p>
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
