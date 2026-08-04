import { useState } from "react";
import Main from "../components/Main";
import Spinner from "../components/Spinner";
import { AnimatePresence } from "motion/react";
import RanksList from "../components/RanksList";
import PlayersList from "../components/PlayersList";
let tabs = [
  {
    title: "ranks",
  },
  {
    title: "player profiles",
    // disabled: true,
  },
  {
    title: "updates",
    disabled: true,
  },

  // {
  //   title: "chaturaji content",
  //   // disabled: true,
  // },
];
function RecordsPage() {
  const [selectedTab, setSelectedTab] = useState("ranks");
  const [loading] = useState(false);
  return (
    <Main
      className={"!w-[60vw] !h-[40vw]"}
      tabs={tabs}
      selectedTab={selectedTab}
      onTabClick={(tab) => setSelectedTab(tab)}
    >
      <AnimatePresence mode="wait">
        {loading && <Spinner key="spinner" />}
        {selectedTab === "ranks" && <RanksList key="ranks_list" />}
        {selectedTab === "player profiles" && (
          <PlayersList key="players_list" />
        )}
      </AnimatePresence>
    </Main>
  );
}

export default RecordsPage;
