import { useRef, useState } from "react";
import Main from "./components/Main";
import Inserter from "./components/Inserter";
import Footer from "./components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { convertRankToString } from "./data/functions";
import Spinner from "./components/Spinner";
import Profile from "./components/Profile";
import Nav from "./components/Navbar";
import tile from "./imgs/chess_tile.png";
import ProfilePage from "./pages/ProfilePage";
import { useQueryState } from "nuqs";
import HomePage from "./pages/HomePage";
function App() {
  const [tab] = useQueryState("tab");
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
      <Nav />
      <AnimatePresence mode="wait">
        {!tab && <HomePage key="home" />}
        {tab === "profile" && <ProfilePage key="profile" />}
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
