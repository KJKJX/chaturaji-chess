import { motion } from "motion/react";
import { updates } from "../data/updates";
import packageJson from "../../package.json";
function UpdatesList() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 1,
          duration: 0.75,
        },
      }}
      exit={{
        opacity: 0,
      }}
      className="h-full w-full flex flex-col overflow-scroll"
    >
      <motion.i
        initial={{ opacity: 0, filter: "blur(5px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.5, delay: 1 }}
        className="text-white/80 text-[2vw] font-bold text-center"
      >
        All Updates
      </motion.i>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 2 }}
        className="w-full h-fit grid grid-cols-1 p-[2vw] text-[1.1vw] text-white/80 gap-[1vw]"
      >
        {updates.map((update) => {
          const versionCompleted =
            +update.version.replaceAll(".", "") <=
            +packageJson.version.replaceAll(".", "");
          return (
            <div className="flex flex-col">
              <p className="capitalize flex flex-row text-[1.3vw] space-x-[0.4vw]">
                <span
                  className={`h-[1.3vw] w-[1.3vw] my-auto rounded-full border-[0.075vw] border-white/50 ${versionCompleted && "bg-emerald-400"}`}
                />
                <span className="text-white/60">{update.version}</span>{" "}
                <p>{update.title}:</p>
              </p>

              <p className="text-white/70 text-[1.1vw]">{update.description}</p>
              <p className="text-white/60 text-[1vw]">
                {!versionCompleted
                  ? `Expected ${new Date(update.date).toLocaleDateString()}`
                  : "Completed!"}
              </p>
            </div>
          );
        })}
        <p className="text-white/50 text-[1vw]">
          NOTE: Some updates will come out later than expected due to other
          things that the creator(s) have to do (like actually playing
          Chaturaji).
        </p>
      </motion.div>
    </motion.div>
  );
}

export default UpdatesList;
