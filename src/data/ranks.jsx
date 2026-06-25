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

import ruby_main from "../imgs/ruby/main.svg";
import ruby_outline from "../imgs/ruby/outline.svg";
import ruby_piece from "../imgs/ruby/piece.svg";
import ruby_ribbon from "../imgs/ruby/ribbon.svg";
import ruby_wings from "../imgs/ruby/wings.svg";
import ruby_crown from "../imgs/ruby/crown.svg";

import diamond_main from "../imgs/diamond/main.svg";
import diamond_outline from "../imgs/diamond/outline.svg";
import diamond_piece from "../imgs/diamond/piece.svg";
import diamond_ribbon from "../imgs/diamond/ribbon.svg";
import diamond_wings from "../imgs/diamond/wings.svg";
import diamond_crown from "../imgs/diamond/crown.svg";
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
const ruby = {
  main: {
    image: ruby_main,
    position: [0, 0],
    size: 11.5,
  },
  outline: {
    image: ruby_outline,
    position: [0, -4],
    size: 16,
  },
  piece: {
    image: ruby_piece,
    position: [0, 1.5],
    size: 3.6,
  },
  ribbon: {
    image: ruby_ribbon,
    position: [0, 6.5],
    size: 5.5,
  },
  wings: {
    image: ruby_wings,
    position: [0, 0.2],
    size: 15.5,
  },
  crown: {
    image: ruby_crown,
    position: [0, -3.1],
    size: 6,
  },
};
const diamond = {
  main: {
    image: diamond_main,
    position: [0, 0],
    size: 10,
  },
  outline: {
    image: diamond_outline,
    position: [0, -4.25],
    size: 21.5,
  },
  piece: {
    image: diamond_piece,
    position: [0, 2.5],
    size: 5,
  },
  ribbon: {
    image: diamond_ribbon,
    position: [0, 8],
    size: 10.5,
  },
  wings: {
    image: diamond_wings,
    position: [0, 0.2],
    size: 21.75,
  },
  crown: {
    image: diamond_crown,
    position: [0, -3.75],
    size: 7.75,
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
    height: 10,
  },
  {
    requiredElo: 2500,
    title: "ruby I",
    main: ruby.main,
    piece: ruby.piece,
    crown: ruby.crown,
    ribbon: ruby.ribbon,
    height: 11,
    shiftY: 2.5,
  },
  {
    requiredElo: 2583.33,
    title: "ruby II",
    main: ruby.main,
    piece: ruby.piece,
    wings: ruby.wings,
    ribbon: ruby.ribbon,
    crown: ruby.crown,
    shiftY: 2.5,
    height: 11,
  },
  { requiredElo: 2666.66, title: "ruby III", ...ruby, shiftY: 3, height: 11.5 },
  {
    requiredElo: 2750,
    title: "diamond I",
    main: diamond.main,
    piece: diamond.piece,
    crown: diamond.crown,
    wings: diamond.wings,
    shiftY: 3,
    height: 11.5,
  },
  {
    requiredElo: 2850,
    title: "diamond II",
    main: diamond.main,
    piece: diamond.piece,
    wings: diamond.wings,
    ribbon: diamond.ribbon,
    crown: diamond.crown,
    shiftY: 3,
    height: 11.5,
  },
  {
    requiredElo: 3000,
    title: "diamond III",
    ...diamond,
    shiftY: 3,
    height: 11.5,
  },
];
