import React from "react";
import { motion } from "motion/react";
function Rank({ rank, size = 1, animated = false, delay = 0 }) {
  return (
    rank && (
      <div
        className="grid *:col-start-1 *:row-start-1 *:mx-auto"
        style={{
          height: `${rank.height || "fit-content"}vw`,
          translate: `0vw ${rank.shiftY || 0}vw`,
        }}
      >
        {rank.main && (
          <motion.img
            initial={
              animated && {
                opacity: 0,
              }
            }
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: delay,
            }}
            src={rank.main.image}
            alt="Main Rank"
            style={{
              zIndex: 1,
              width: `${rank.main.size * size}vw`,
              translate: `${rank.main.position[0] * size}vw ${
                rank.main.position[1] * size
              }vw`,
            }}
          />
        )}
        {rank.piece && (
          <motion.img
            initial={
              animated && {
                opacity: 0,
                scale: 0,
              }
            }
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: delay + 0.5,
            }}
            src={rank.piece.image}
            alt="Rank Piece"
            style={{
              zIndex: 1,
              width: `${rank.piece.size * size}vw`,
              translate: `${rank.piece.position[0] * size}vw ${
                rank.piece.position[1] * size
              }vw`,
            }}
          />
        )}
        {rank.outline && (
          <motion.img
            initial={
              animated && {
                opacity: 0,
                scaleY: 0,
              }
            }
            animate={{
              opacity: 1,
              scaleY: 1,
            }}
            transition={{
              delay: delay + 0.75,
            }}
            src={rank.outline.image}
            alt="Rank Outline"
            style={{
              zIndex: -1,
              width: `${rank.outline.size * size}vw`,
              translate: `${rank.outline.position[0] * size}vw ${
                rank.outline.position[1] * size
              }vw`,
            }}
          />
        )}
        {rank.ribbon && (
          <motion.img
            initial={
              animated && {
                opacity: 0,
                y: 100,
              }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: delay + 1,
            }}
            src={rank.ribbon.image}
            alt="Rank Ribbon"
            style={{
              zIndex: 0,
              width: `${rank.ribbon.size * size}vw`,
              translate: `${rank.ribbon.position[0] * size}vw ${
                rank.ribbon.position[1] * size
              }vw`,
            }}
          />
        )}
        {rank.wings && (
          <motion.img
            initial={
              animated && {
                opacity: 0,
                y: -25,
              }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: delay + 1.25,
              type: "spring",
              stiffness: 25,
            }}
            src={rank.wings.image}
            alt="Rank Wings"
            style={{
              zIndex: -1,
              width: `${rank.wings.size * size}vw`,
              translate: `${rank.wings.position[0] * size}vw ${
                rank.wings.position[1] * size
              }vw`,
            }}
          />
        )}
        {rank.crown && (
          <motion.img
            initial={
              animated && {
                opacity: 0,
                y: -25,
              }
            }
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: delay + 1.5,
              type: "spring",
              stiffness: 25,
            }}
            src={rank.crown.image}
            alt="Rank Crown"
            style={{
              zIndex: -1,
              width: `${rank.crown.size * size}vw`,
              translate: `${rank.crown.position[0] * size}vw ${
                rank.crown.position[1] * size
              }vw`,
            }}
          />
        )}
      </div>
    )
  );
}

export default Rank;
