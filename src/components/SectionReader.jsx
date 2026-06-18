import React from "react";

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
                {section.text}
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
                {section.text}
              </p>
            </>
          );
        } else if (section.type === "list") {
          return (
            <>
              {section?.list.map((item) => (
                <p
                  className={
                    " text-left text-white/70 text-[0.9vw] before:content-['•'] before:transform before:mr-[0.4vw] indent-[0.6vw]"
                  }
                >
                  {item}
                </p>
              ))}
            </>
          );
        }
      })}
    </div>
  );
}

export default SectionReader;
