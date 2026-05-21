import React from "react";
import Main from "../components/Main";
import { motion } from "motion/react";

function HomePage() {
  return (
    <Main>
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
          ! Click Profile for the main feature.)
        </motion.p>
      </div>
    </Main>
  );
}

export default HomePage;
