import standard_opening from "../imgs/headlines/standard_opening.png";
import standard_variation from "../imgs/headlines/standard_variation.png";
import fianchetto_opening from "../imgs/headlines/fianchetto_opening.png";
import degenerate_opening from "../imgs/headlines/degenerate_opening.png";
import degenerate_variation from "../imgs/headlines/degenerate_variation.png";
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
        text: "General Description",
      },
      {
        type: "paragraph",
        text: "The standard opening is used by most players. The king stands in a safe position, and the knight, bishop, and rook can be easily activated.",
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
        text: `The link below leads to my favorite standard opening variation:`,
      },
      {
        type: "link",
        link: `${window.location.origin}/?tab=learn&opening=4`,
        text: "Click Here",
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
      "The standard opening is used by most players. The king stands in a safe position.",
    link: "https://www.chess.com/variants/chaturaji/game/103455763/0/1",
    img: standard_opening,
  },
  {
    title: "The Degenerate Opening",
    tags: ["aggressive"],
    moves: ["d2 d3", "c1 d2", "d1 c1"],
    board: openingBoard,
    sections: [
      {
        type: "title",
        text: "General Description",
      },
      {
        type: "paragraph",
        text: "The degenerate opening is commonly used by noobs, but with the right understanding on when to use it, it can be very effective. The bishop attacks the person in front of you and your knight is ready to be activated.",
      },
      {
        type: "title",
        text: "Pros",
      },
      {
        type: "list",
        list: ["aggressive Attack", "Easy Activation", "Many Followups"],
      },
      {
        type: "title",
        text: "Cons",
      },
      {
        type: "list",
        list: ["Not Very Safe"],
      },
      {
        type: "title",
        text: "Followups",
      },
      {
        type: "paragraph",
        text: "My favorite followup is 4.Bc3 5.b3 6.Kb2. It puts your king in a safer positons and readies for a trade with your opposite's bishop.",
      },
      {
        type: "paragraph",
        text: `The link below leads to that opening::`,
      },
      {
        type: "link",
        link: `${window.location.origin}/?tab=learn&opening=3`,
        text: "Click Here",
      },
      {
        type: "title",
        text: "Extra Note",
      },
      {
        type: "paragraph",
        text: "If you are red, I advise to use this opening, unless you are uncomfortable with it. However, if you are green, (quoting KrkAlex) you might as well premove degenreate.",
      },
    ],
    description:
      "The degenerate opening is commonly used by noobs, but with the right understanding on when to use it, it can be very effective",
    link: "https://www.chess.com/variants/chaturaji/game/108958057/0/1",
    img: degenerate_opening,
  },
  {
    title: "The Passive-Aggressive Variation",
    tags: ["trade-focused"],
    moves: ["d2 c3", "b2 b3", "c1 b2"],
    board: [
      "red.boat.a1",
      "red.knight.b1",
      "red.king.c1",
      "red.pawn.a2",
      "red.pawn.b2",
      "red.pawn.c2",
      "red.bishop.d2",
      "red.pawn.d3",
    ],
    sections: [
      {
        type: "title",
        text: "General Description",
      },
      {
        type: "paragraph",
        text: "This is my main and favorite degenerate opening variation for many reasons. While it keeps the aggressive aspect of the degenerate opening, it also focuses on trading with your opponent's bishop and maintaining a safer position.",
      },
      {
        type: "title",
        text: "Pros",
      },
      {
        type: "list",
        list: ["Trade-Focused", "Safer than Normal"],
      },
      {
        type: "title",
        text: "Cons",
      },
      {
        type: "paragraph",
        text: "Honestly, I can't think of any major cons for this opening. It's overall safe, aggressive, point-focused, and clean.",
      },
      {
        type: "title",
        text: "Extra Note",
      },
      {
        type: "paragraph",
        text: "Remember that this is an optional opening, as if better variations are going to be more effective, e.g. the 'green killer,' then consider those instead. Also, if you can take the bishop trade, take it, as in the match I did.",
      },
    ],
    description:
      "This is my main and favorite degenerate opening variation for many reasons. While it keeps the aggressive aspect",
    link: "https://www.chess.com/variants/chaturaji/game/108958057/0/1",
    img: degenerate_variation,
  },
  {
    title: "The Safest Opening",
    tags: ["variation"],
    moves: ["c1 b2", "b3 b4"],
    board: [
      "red.boat.a1",
      "red.knight.b1",
      "red.bishop.c1",
      "red.pawn.a2",
      "red.king.c2",
      "red.pawn.d2",
      "red.pawn.b3",
      "red.pawn.c3",
    ],
    sections: [
      {
        type: "title",
        text: "General Description",
      },
      {
        type: "paragraph",
        text: "This variation of the standard opening is passive, mostly safe, and has gotten me to 2350+. This makes your king nearly impossible to be attacked, and you can easily move your a pawn forwards.",
      },
      {
        type: "title",
        text: "Pros",
      },
      {
        type: "paragraph",
        text: "This variation really only has 1 pro: it's nearly impenetrable base. It is difficult to get into a tight position, or even get checked, except if the person to your right pushes their pawn forwards and checks you. In that case, move your king to b3",
      },
      {
        type: "title",
        text: "Cons",
      },
      {
        type: "paragraph",
        text: "If you are the type who is aggressive, this variation isn't for you, as it's recommended for you to not move your knight, lest the person to your right attempts to trade with your d pawn.",
      },
      {
        type: "title",
        text: "Followups",
      },
      {
        type: "paragraph",
        text: "The best followup that has worked for me is progressing your a pawn to trade with the person in front of you's rook.",
      },
      {
        type: "title",
        text: "Extra Note",
      },
      {
        type: "paragraph",
        text: "If the person in front of you's bishop so happens to be on b5 while you are at the end of this variation.... well you're cooked. They will soon move to a4, forcing you to move down, where then it is the person who is to your right's turn to bother you, ending in a checkmate.",
      },
    ],
    description:
      "This is one of the most safest, passive openings. Personally, this opening has gotten me to my peak of 2360...",
    link: "https://www.chess.com/variants/chaturaji/game/108870607/0/3",
    img: standard_variation,
  },
  {
    title: "The Fianchetto Opening",
    tags: ["safe"],
    moves: ["b2 b3", "c1 b2", "d1 c1"],
    board: openingBoard,
    sections: [
      {
        type: "title",
        text: "General Description",
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
      "The fianchetto opening is an interesting opening. The king is in an interesting position.",
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
  //       text: "General Description",
  //     },
  //     {
  //       type: "paragraph",
  //       text: "The standard opening is used by most players. The king stands in a safe position, and the knight, bishop, and rook can be easily activated.",
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
  //     "The standard opening is used by most players. The king stands in a safe position.",
  //   link: "https://www.chess.com/variants/chaturaji/game/103455763/0/1",
  //   img: standard_opening,
  // },
].map((opening, i) => {
  return { ...opening, id: i + 1 };
});
