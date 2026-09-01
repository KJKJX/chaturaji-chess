import { useState } from "react";
import Main from "../components/Main";
import { AnimatePresence } from "motion/react";
import Board from "../components/Board";
import InteractivePuzzle from "../components/InteractivePuzzle";
import { puzzles } from "../data/puzzles";
import PuzzlesList from "../components/PuzzlesList";
let moves = [
  "b7 c5",
  "e4 e5",
  "c5 e6 CAPTURE.red.bishop",
  "e5 e6 CAPTURE.blue.knight",
  "a6 c8",
  "e6 f6",
  "c8 g4 CAPTURE.red.boat",
];
function PuzzlesPage() {
  const [selectedTab, setSelectedTab] = useState("puzzle_list");
  const [selectedPuzzle, setSelectedPuzzle] = useState(null);
  // console.log(move);
  function handleBackToAllPuzzles() {
    setSelectedPuzzle(null);
    setSelectedTab("puzzle_list");
  }
  function handleOpenPuzzle(puzzle) {
    setSelectedPuzzle(puzzle);
    setSelectedTab("puzzle");
  }
  return (
    <Main
      className={"!w-[60vw] !h-[40vw]"}
      selectedTab={selectedTab}
      onTabClick={(tab) => setSelectedTab(tab)}
    >
      <AnimatePresence mode="wait">
        {selectedTab === "puzzle" && selectedPuzzle && (
          <InteractivePuzzle
            puzzle={selectedPuzzle}
            setTab={setSelectedTab}
            backToAllPuzzles={handleBackToAllPuzzles}
            key={"puzzle"}
          />
        )}
        {selectedTab === "puzzle_list" && (
          <PuzzlesList openPuzzle={handleOpenPuzzle} key={"puzzle_list"} />
        )}
      </AnimatePresence>
    </Main>
  );
}

export default PuzzlesPage;
