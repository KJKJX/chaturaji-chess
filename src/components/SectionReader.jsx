import React from "react";
import Markdown from "react-markdown";
import Board from "./Board";
//  <Board
//   moves={opening.moves}
//   prevMoves={opening.prevMoves}
//   board={opening.board}
//   currentMove={currentMove}
//   className={"m-auto"}
//   interactive={false}
//   size={20}
// />
function SectionReader({ sections, className }) {
  return (
    <div className={className}>
      {sections?.map((section) => {
        if (!section?.type) {
          return null;
        }
        if (section.type === "title") {
          return (
            <>
              <i
                className={
                  section.className + " text-left text-white/90 text-[1.5vw]"
                }
              >
                <Markdown>{section.text}</Markdown>
              </i>
            </>
          );
        } else if (section.type === "paragraph") {
          return (
            <>
              <p
                className={
                  section.className + " text-left text-white/70 text-[0.9vw]"
                }
              >
                <Markdown>{section.text}</Markdown>
              </p>
            </>
          );
        } else if (section.type === "list") {
          return (
            <>
              {section?.list.map((item) => (
                <p
                  className={`${section.className} text-left text-white/70 text-[0.9vw] before:content-['•'] before:transform before:mr-[0.4vw] indent-[0.6vw] flex flex-row`}
                >
                  <Markdown>{item}</Markdown>
                </p>
              ))}
            </>
          );
        } else if (section.type === "image") {
          return <img src={section.image} className={section.className} />;
        } else if (section.type === "link") {
          return (
            <>
              <a
                className="text-[1.1vw] text-white/60 hover:text-white/80 duration-150"
                target="_blank"
                href={section.link}
              >
                <Markdown>{section.text}</Markdown>
              </a>
            </>
          );
        } else if (section.type === "board") {
          return (
            <>
              <Board
                moves={[]}
                board={section.board}
                currentMove={0}
                className={"m-auto mb-[-0.9vw]!"}
                interactive={false}
                size={20}
              />
              <p
                className={
                  section.className +
                  " text-left text-white/60 text-[0.7vw] italic mt-0!"
                }
              >
                <Markdown>{section.caption}</Markdown>
              </p>
            </>
          );
        }
      })}
    </div>
  );
}

export default SectionReader;
