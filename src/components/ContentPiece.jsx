import React from "react";
import Tab from "./Tab";

function ContentPiece({ type, object }) {
  if (type === "game") {
    return (
      <div className="h-3/4 flex flex-col w-1/3">
        <p className="text-white/80 text-[1.5vw] font-bold w-full">
          {object.caption || "Outstanding Game"}
        </p>
        <p className="text-white/60 text-[1vw]">
          Updated {new Date(object.date).toLocaleDateString()}
        </p>
        <p className="text-white/70 text-[1.2vw] font-bold">{object.title}</p>
        <p className="text-white/60 text-[1vw] font-bold ">
          {object.description}
        </p>
        <a href={object.link} target="_blank">
          <Tab className={"mt-[0.5vw] !scale-97 w-full"}>View Match</Tab>
        </a>
      </div>
    );
  } else if (type === "quote") {
    return (
      <div className="h-3/4 flex flex-col w-1/3">
        <p className="text-white/80 text-[1.5vw] font-bold w-full">
          {object.caption || "Wise Words"}
        </p>
        <p className="text-white/60 text-[1vw]">
          Updated {new Date(object.date).toLocaleDateString()}
        </p>
        <p className="text-white/70 text-[1.2vw] font-bold">"{object.quote}"</p>
        <a
          className="text-[1.05vw] text-white/70 hover:text-white/80 mr-auto text-left"
          target="_blank"
          href={`https://chess.com/member/${object.from}`}
        >
          <i> From {object.from} ⧉</i>
        </a>
        <p className="text-white/60 text-[1vw] font-bold ">
          {object.description}
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default ContentPiece;
