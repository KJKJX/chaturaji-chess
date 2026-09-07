import React from "react";
import { colorToRealColor } from "../data/functions";
function PlayerStats({ player, reverse = false, isTurn }) {
  return (
    <div
      className={`flex h-full w-fit rounded-[0.2vw] gap-[0.75vw] justify-center items-center ${reverse ? "flex-row-reverse" : "flex-row"} ${player.alive || "opacity-50"} ${isTurn || "opacity-50"}`}
      //   style={{ backgroundColor: colorToRealColor(player.color) }}
    >
      <p className="drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]  text-[1.75vw]">
        {player.points}
      </p>
      <div
        className={
          "flex flex-row h-full w-[5vw] rounded-[0.3vw] text-[1.2vw] justify-center items-center"
        }
        style={{ backgroundColor: colorToRealColor(player.color) }}
      >
        1:00
      </div>
      <p className="drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]  text-[1vw] capitalize">
        {player.color}
      </p>
    </div>
  );
}

export default PlayerStats;
