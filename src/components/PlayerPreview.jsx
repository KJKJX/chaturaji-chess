import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
const activeRateToObj = function (rate) {
  switch (rate) {
    case 0:
      return ["text-red-400", "never plays"];
    case 1:
      return ["text-red-300", "rarely plays"];
    case 2:
      return ["text-yellow-400", "plays sometimes"];
    case 3:
      return ["text-lime-300", "plays occasionally"];
    case 4:
      return ["text-green-300", "plays often"];
    case 5:
      return ["text-emerald-400", "plays constantly"];

    default:
      break;
  }
};
function PlayerPreview({ player, i }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <motion.div
      initial={{ y: 25, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 2 + i / 5,
        },
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="flex overflow-clip flex-col justify-center min-h-[5vw] h-fit w-30/100 border-[0.1vw] border-white/50 rounded-[1vw] p-[0.3vw] bg-gray-950/50 cursor-pointer scale-90 mt-[1vw] space-y-[1vw]"
      onClick={() => setDropdownOpen(!dropdownOpen)}
    >
      <div className="flex flex-row items-center justify-center h-full my-auto">
        <img src={player.img} className="rounded-[0.8vw] h-[4vw] my-auto" />
        <div className="flex flex-col h-full w-full mx-[0.5vw] justify-center text-left">
          <p className="font-black! text-white/90 text-[1.3vw]">
            {player.name}
          </p>
          <p className={`text-[1vw] ${player.color} font-black! capitalize`}>
            {player.status} | {player.peak} Elo
          </p>
        </div>
      </div>
      {/* <p className="text-gray-300 text-[1.1vw]">(Click for more)</p> */}
      <AnimatePresence mode="wait">
        {dropdownOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "fit-content" }}
            exit={{ height: 0 }}
            key="content"
            className="flex flex-col w-full mt-[0.2vw]"
          >
            <p className="text-center text-[0.8vw] text-white/90">
              {player.description}
            </p>
            <p
              className={`text-center capitalize text-[1vw] ${activeRateToObj(player.playRate)[0]}`}
            >
              {activeRateToObj(player.playRate)[1]}
            </p>
            {player.contributions?.length > 0 && (
              <div className="flex flex-col text-white/90 text-[1vw]">
                <p className="w-full text-center">Contributions:</p>
                {player.contributions.map((contribution) => (
                  <p className="before:content-['•'] before:transform before:mr-[0.5vw] ml-[0.5vw] text-[0.8vw]  text-center">
                    {contribution}
                  </p>
                ))}
              </div>
            )}
            <a
              target="_blank"
              className="hover:text-white/90 duration-100 text-white/80 hover:underline text-center text-[1.1vw]"
              href={`https://www.chess.com/member/${player.name}`}
            >
              Click For User's Profile
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default PlayerPreview;
