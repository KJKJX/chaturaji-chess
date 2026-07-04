import React from "react";

function TagsList({ tags }) {
  return (
    <div className="flex flex-row w-full flex-wrap space-x-[0.5vw] min-h-[1vw] my-[0.5vw]">
      {tags.map((tag) => (
        <div className="h-[2vw] w-fit border-[0.1vw] rounded-full border-white/90 text-[0.9vw] px-[0.5vw] flex items-center justify-center bg-white/20 min-w-[3vw] capitalize">
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
}

export default TagsList;
