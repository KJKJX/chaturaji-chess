import React, { useEffect, useState } from "react";
import Main from "../components/Main";
import { AnimatePresence } from "motion/react";
import Spinner from "../components/Spinner";
import Inserter from "../components/Inserter";
import Profile from "../components/Profile";
import {
  convertEloToString,
  convertStringToRankObject,
} from "../data/functions";
import { useQueryState } from "nuqs";
const tabs = [
  {
    title: "input",
    disabled: false,
  },
  {
    title: "profile",
    disabled: false,
  },
];
function ProfilePage() {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({
    level: 0,
    elo: 0,
    matches: 0,
    rank: "",
  });
  const [selectedTab, setSelectedTab] = useState("profile");

  function handleOnClickDisplay(elo, matches, peak) {
    setLoading(true);
    setTimeout(
      () => {
        let rank = convertStringToRankObject(convertEloToString(elo));
        setStats({
          level: (((elo + peak) / 2) * matches) / 10000,
          elo: elo,
          matches: matches,
          peak,
          rank: rank,
        });
        setLoading(false);
        setSelectedTab("profile");
      },
      1500 + Math.random() * 1500,
    );
  }
  useEffect(() => {
    if (localStorage.elo && localStorage.matches && localStorage.peak) {
      let elo = +localStorage.elo;
      let matches = +localStorage.matches;
      let peak = +localStorage.peak;
      let rank = convertStringToRankObject(convertEloToString(elo));
      setStats({
        level: (((elo + peak) / 2) * matches) / 10000,
        elo: elo,
        matches: matches,
        peak,
        rank: rank,
      });
    } else {
      localStorage.elo = 1501;
      localStorage.matches = 0;
    }
  }, []);
  return (
    <Main
      tabs={tabs}
      selectedTab={selectedTab}
      onTabClick={(tab) => setSelectedTab(tab)}
      className={"!h-[30vw]"}
    >
      <AnimatePresence mode="wait">
        {loading && <Spinner key="spinner" />}
        {selectedTab === "input" && !loading && (
          <Inserter key="inserter" onClickDisplay={handleOnClickDisplay} />
        )}
        {selectedTab === "profile" && !loading && (
          <Profile key="profile" stats={stats} />
        )}
      </AnimatePresence>
    </Main>
  );
}

export default ProfilePage;
