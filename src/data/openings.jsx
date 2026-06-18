import standard_opening from "../imgs/headlines/standard_opening.png";
import fianchetto_opening from "../imgs/headlines/fianchetto_opening.png";
export const openings = [
  {
    title: "The Standard Opening",
    tags: ["safe"],
    moves: ["red.pawn3.c3", "red.king1.c2", "red.pawn2.b3"],
    prevMoves: ["red.pawn3.c2", "red.king1.d1", "red.pawn2.b2"],
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
      "The standard opening is used by most players. The king stands in a safe positon, and the knight, bishop, and rook can be easily activated. Follow-ups like Ba2 or Na3 are also common. Do not use this opening in higher ranks if you are green and red starts with The Degenerate Opening, as they will do Bf4 and entirely mess up your opening.",
    link: "https://www.chess.com/variants/chaturaji/game/103455763/0/1",
    img: standard_opening,
  },
  // {
  //   title: "The Fianchetto Opening",
  //   tags: ["safe"],
  //   moves: ["red.pawn3.c3", "red.king1.c2", "red.pawn2.b3"],
  //   prevMoves: ["red.pawn3.c2", "red.king1.d1", "red.pawn2.b2"],
  //   description:
  //     "The fianchetto opening is used by most players. The king stands in a safe positon, and the knight, bishop, and rook can be easily activated. Follow-ups like Ba2 or Na3 are also common. Do not use this opening in higher ranks if you are green and red starts with The Degenerate Opening, as they will do Bf4 and entirely mess up your opening.",
  //   link: "https://www.chess.com/variants/chaturaji/game/103455763/0/1",
  //   img: fianchetto_opening,
  // },
  // {
  //   title: "The Standard Opening",
  //   tags: ["safe"],
  //   moves: ["red.pawn3.c3", "red.king1.c2", "red.pawn2.b3"],
  //   prevMoves: ["red.pawn3.c2", "red.king1.d1", "red.pawn2.b2"],
  //   description:
  //     "The standard opening is used by most players. The king stands in a safe positon, and the knight, bishop, and rook can be easily activated. Follow-ups like Ba2 or Na3 are also common.",
  //   link: "https://www.chess.com/variants/chaturaji/game/103455763/0/1",
  //   img: "",
  // },
  // {
  //   title: "The Standard Opening",
  //   tags: ["safe"],
  //   moves: ["red.pawn3.c3", "red.king1.c2", "red.pawn2.b3"],
  //   prevMoves: ["red.pawn3.c2", "red.king1.d1", "red.pawn2.b2"],
  //   description:
  //     "The standard opening is used by most players. The king stands in a safe positon, and the knight, bishop, and rook can be easily activated. Follow-ups like Ba2 or Na3 are also common.",
  //   link: "https://www.chess.com/variants/chaturaji/game/103455763/0/1",
  //   img: "",
  // },
  // {
  //   title: "The Standard Opening",
  //   tags: ["safe"],
  //   moves: ["red.pawn3.c3", "red.king1.c2", "red.pawn2.b3"],
  //   prevMoves: ["red.pawn3.c2", "red.king1.d1", "red.pawn2.b2"],
  //   description:
  //     "The standard opening is used by most players. The king stands in a safe positon, and the knight, bishop, and rook can be easily activated. Follow-ups like Ba2 or Na3 are also common.",
  //   link: "https://www.chess.com/variants/chaturaji/game/103455763/0/1",
  //   img: "",
  // },
];
