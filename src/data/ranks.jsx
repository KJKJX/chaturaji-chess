import silver_main from "../imgs/silver/main.svg";
import silver_outline from "../imgs/silver/outline.svg";
import silver_piece from "../imgs/silver/piece.svg";

import gold_main from "../imgs/gold/main.svg";
import gold_outline from "../imgs/gold/outline.svg";
import gold_piece from "../imgs/gold/piece.svg";

import platinum_main from "../imgs/platinum/main.svg";
import platinum_outline from "../imgs/platinum/outline.svg";
import platinum_piece from "../imgs/platinum/piece.svg";
import platinum_ribbon from "../imgs/platinum/ribbon.svg";

import emerald_main from "../imgs/emerald/main.svg";
import emerald_outline from "../imgs/emerald/outline.svg";
import emerald_piece from "../imgs/emerald/piece.svg";
import emerald_ribbon from "../imgs/emerald/ribbon.svg";
import emerald_wings from "../imgs/emerald/wings.svg";
const silver = {
  main: {
    image: silver_main,
    position: [0, 0],
    size: 10,
  },
  outline: {
    image: silver_outline,
    position: [0, -0.85],
    size: 9.3,
  },
  piece: {
    image: silver_piece,
    position: [0, 4],
    size: 2.7,
  },
};

const gold = {
  main: {
    image: gold_main,
    position: [0, 0],
    size: 12,
  },
  outline: {
    image: gold_outline,
    position: [0, 0.88],
    size: 11.5,
  },
  piece: {
    image: gold_piece,
    position: [0, 4],
    size: 3.2,
  },
};

const platinum = {
  main: {
    image: platinum_main,
    position: [0, 0],
    size: 13,
  },
  outline: {
    image: platinum_outline,
    position: [0, 0.1],
    size: 13,
  },
  piece: {
    image: platinum_piece,
    position: [0, 4.5],
    size: 2.6,
  },
  ribbon: {
    image: platinum_ribbon,
    position: [0, 10.28],
    size: 3.9,
  },
};

const emerald = {
  main: {
    image: emerald_main,
    position: [0, 0],
    size: 11.5,
  },
  outline: {
    image: emerald_outline,
    position: [0, -0.5],
    size: 20.5,
  },
  piece: {
    image: emerald_piece,
    position: [0, 3.7],
    size: 3.6,
  },
  ribbon: {
    image: emerald_ribbon,
    position: [0, 10],
    size: 8,
  },
  wings: {
    image: emerald_wings,
    position: [0, 2],
    size: 21,
  },
};
export const ranks = [
  {
    title: "silver I",
    requiredElo: 1500,
    main: silver.main,
  },
  {
    title: "silver II",
    requiredElo: 1583.33,
    main: silver.main,
    piece: silver.piece,
  },
  {
    title: "silver III",
    requiredElo: 1666.66,
    ...silver,
  },

  {
    title: "gold I",
    requiredElo: 1750,
    main: gold.main,
  },
  {
    title: "gold II",
    requiredElo: 1833.33,
    main: gold.main,
    piece: gold.piece,
  },
  {
    title: "gold III",
    requiredElo: 1916.66,
    ...gold,
  },

  {
    title: "platinum I",
    requiredElo: 2000,
    main: platinum.main,
    piece: platinum.piece,
  },
  {
    title: "platinum II",
    requiredElo: 2083.33,
    main: platinum.main,
    piece: platinum.piece,
    outline: platinum.outline,
  },
  {
    title: "platinum III",
    requiredElo: 2166.66,
    ...platinum,
  },
  {
    title: "emerald I",
    requiredElo: 2250,
    main: emerald.main,
    piece: emerald.piece,
  },
  {
    title: "emerald II",
    requiredElo: 2333.33,
    main: emerald.main,
    piece: emerald.piece,
    wings: emerald.wings,
  },
  {
    title: "emerald III",
    requiredElo: 2416.66,
    ...emerald,
  },
  { requiredElo: 2500, title: "grandmaster I" },
  { requiredElo: 2583.33, title: "grandmaster II" },
  { requiredElo: 2666.66, title: "grandmaster III" },
  { requiredElo: 2750, title: "elite I" },
  { requiredElo: 2850, title: "elite II" },
  { requiredElo: 3000, title: "elite III" },
];
