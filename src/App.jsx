import { useRef, useState } from "react";
import Main from "./components/Main";
import Inserter from "./components/Inserter";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { convertEloToString } from "./data/functions";
import Spinner from "./components/Spinner";
import Profile from "./components/Profile";
import Nav from "./components/Navbar";
import tile from "./imgs/chess_tile.png";
import ProfilePage from "./pages/ProfilePage";
import { useQueryState } from "nuqs";
import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import NewsPage from "./pages/NewsPage";
import RecordsPage from "./pages/RecordsPage";
function App() {
  const [tab] = useQueryState("tab");
  const [lastVisitedNews, setLastVisitedNews] = useState(
    localStorage.lastVisitedNews || "1926-06-30T01:11:07.487Z",
  );
  const handleUpdateLastVisitedNews = () => {
    localStorage.lastVisitedNews = new Date().toISOString();
    setLastVisitedNews(localStorage.lastVisitedNews);
  };
  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col items-center">
      <div
        className="absolute h-full w-full"
        style={{
          backgroundImage: `url(${tile})`,
          backgroundRepeat: "repeat",
          backgroundSize: "25vw",
          opacity: 0.1,
        }}
      />
      <Nav lastVisitedNews={lastVisitedNews} />
      <AnimatePresence mode="wait">
        {!tab && <HomePage key="home" />}
        {tab === "profile" && <ProfilePage key="profile" />}
        {tab === "learn" && <LearnPage key="learn" />}
        {tab === "news" && (
          <NewsPage
            key="news"
            updateLastVisited={handleUpdateLastVisitedNews}
          />
        )}
        {tab === "records" && <RecordsPage key="records" />}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
