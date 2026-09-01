import standard_opening from "../imgs/headlines/standard_opening.png";
import fianchetto_opening from "../imgs/headlines/fianchetto_opening.png";
let openingBoard = [
  "red.boat.a1",
  "red.knight.b1",
  "red.bishop.c1",
  "red.king.d1",
  "red.pawn1.a2",
  "red.pawn2.b2",
  "red.pawn3.c2",
  "red.pawn4.d2",
  // "blue.king1.b4",
];
export const openings = [
  {
    title: "The Standard Opening",
    tags: ["safe"],
    moves: ["c2 c3", "d1 c2", "b2 b3"],
    board: openingBoard,
    sections: [
      {
        type: "title",
        text: "General Desctiption",
      },
      {
        type: "paragraph",
        text: "The standard opening is used by most players. The king stands in a safe positon, and the knight, bishop, and rook can be easily activated.",
      },
      {
        type: "title",
        text: "Pros",
      },
      {
        type: "list",
        list: ["Safe King", "Easy Activation", "Clear Followups"],
      },
      {
        type: "title",
        text: "Cons",
      },
      {
        type: "list",
        list: ["Readable by Opponents", "Stopable (Degenerate Opening)"],
      },
      {
        type: "title",
        text: "Followups",
      },
      {
        type: "paragraph",
        text: "Some followups consist of...",
      },
      {
        type: "list",
        list: ["4.Bb2 5.c4", "4.Na1 5.Bb2"],
      },
      {
        type: "paragraph",
        text: `Search "Standard Followups" to gather more information on these opening variations.`,
      },
      {
        type: "title",
        text: "Extra Note",
      },
      {
        type: "paragraph",
        text: "Though the Standard Opening is tried and trusted, watch out if you are green and red uses the Degenerate Opening, as they will do Bf4 and ruin your opening.",
      },
    ],
    description:
      "The standard opening is used by most players. The king stands in a safe positon.",
    link: "https://www.chess.com/variants/chaturaji/game/103455763/0/1",
    img: standard_opening,
  },
  {
    title: "The Fianchetto Opening",
    tags: ["safe"],
    moves: ["b2 b3", "c1 b2", "d1 c1"],
    board: openingBoard,
    sections: [
      {
        type: "title",
        text: "General Desctiption",
      },
      {
        type: "paragraph",
        text: "The Fianchetto Opening is an interesting one. The king stands is in a nearly un-touchable and the bishop makes sure that the opposite knight's pawn cannot move (else the rook will be taken free).",
      },
      {
        type: "title",
        text: "Pros",
      },
      {
        type: "list",
        list: ["Extremely Safe King", "Aggressive Attack (opposite color)"],
      },
      {
        type: "title",
        text: "Cons",
      },
      {
        type: "list",
        list: ["Knight & Rook not so active"],
      },
      // {
      //   type: "title",
      //   text: "Followups",
      // },
      // {
      //   type: "paragraph",
      //   text: "Some followups consist of...",
      // },
      // {
      //   type: "list",
      //   list: ["4.Bb2 5.c4", "4.Na1 5.Bb2"],
      // },
      // {
      //   type: "paragraph",
      //   text: `Search "Standard Followups" to gather more information on these opening variations.`,
      // },
      {
        type: "title",
        text: "Extra Note",
      },
      {
        type: "paragraph",
        text: "There aren't many variations of this opening rather than progressing with your pawns. Once doing that, your knight and rook can become more active.",
      },
    ],
    description:
      "The fianchetto opening is an interesting opening. The king is in a nearly un-touchable positon.",
    link: "https://www.chess.com/variants/chaturaji/game/104807521/0/1",
    img: fianchetto_opening,
  },
  // {
  //   title: "The Standard Opening",
  //   tags: ["safe"],
  //   moves: [
  //     "b7 c5",
  //     "e4 e5",
  //     "c5 e6 CAPTURE.red.bishop",
  //     "e5 e6 CAPTURE.blue.knight",
  //     "a6 c8",
  //     "e6 f6",
  //     "c8 g4 CAPTURE.red.boat",
  //   ],
  //   board: [
  //     "blue.king.a5",
  //     "blue.bishop.a6",
  //     "blue.knight.b7",
  //     "red.king.e4",
  //     "red.bishop.e6",
  //     "red.boat.g4",
  //   ],
  //   sections: [
  //     {
  //       type: "title",
  //       text: "General Desctiption",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "The standard opening is used by most players. The king stands in a safe positon, and the knight, bishop, and rook can be easily activated.",
  //     },
  //     {
  //       type: "title",
  //       text: "Pros",
  //     },
  //     {
  //       type: "list",
  //       list: ["Safe King", "Easy Activation", "Clear Followups"],
  //     },
  //     {
  //       type: "title",
  //       text: "Cons",
  //     },
  //     {
  //       type: "list",
  //       list: ["Readable by Opponents", "Stopable (Degenerate Opening)"],
  //     },
  //     {
  //       type: "title",
  //       text: "Followups",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Some followups consist of...",
  //     },
  //     {
  //       type: "list",
  //       list: ["4.Bb2 5.c4", "4.Na1 5.Bb2"],
  //     },
  //     {
  //       type: "paragraph",
  //       text: `Search "Standard Followups" to gather more information on these opening variations.`,
  //     },
  //     {
  //       type: "title",
  //       text: "Extra Note",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "Though the Standard Opening is tried and trusted, watch out if you are green and red uses the Degenerate Opening, as they will do Bf4 and ruin your opening.",
  //     },
  //   ],
  //   description:
  //     "The standard opening is used by most players. The king stands in a safe positon.",
  //   link: "https://www.chess.com/variants/chaturaji/game/103455763/0/1",
  //   img: standard_opening,
  // },
].map((opening, i) => {
  return { ...opening, id: i + 1 };
});
