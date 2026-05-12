import { useRef, useState } from "react";
import Main from "./components/Main";
import Inserter from "./components/Inserter";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { convertRankToString } from "./data/functions";
import Spinner from "./components/Spinner";
import Profile from "./components/Profile";

function App() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [stats, setStats] = useState({
    level: 0,
    elo: 0,
    matches: 0,
    rank: "",
  });
  function handleOnClickDisplay(elo, matches) {
    setLoading(true);
    setTimeout(() => {
      let rank = convertRankToString(elo);
      setStats({
        level: (elo * matches) / 10000,
        elo: elo,
        matches: matches,
        rank: rank,
      });
      setLoading(false);
      setPage(2);
    }, 1500 + Math.random() * 1500);
  }
  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col items-center">
      <Main>
        <AnimatePresence mode="wait">
          {loading && <Spinner key="spinner" />}
          {page === 1 && !loading && (
            <Inserter key="inserter" onClickDisplay={handleOnClickDisplay} />
          )}
          {page === 2 && !loading && <Profile key="profile" stats={stats} />}
        </AnimatePresence>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
