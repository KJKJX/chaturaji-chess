export const puzzles = [
  {
    title: "Forked You!",
    moves: [
      "b7 c5",
      "e4 e5",
      "c5 e6 CAPTURE.red.bishop",
      "e5 e6 CAPTURE.blue.knight",
      "a6 c8",
      "e6 f6",
      "c8 g4 CAPTURE.red.boat",
    ],
    startingPlayers: [
      {
        color: "red",
        points: 10,
        alive: true,
      },
      {
        color: "blue",
        points: 10,
        alive: true,
      },
      {
        color: "yellow",
        points: 8,
        alive: false,
      },
      {
        color: "green",
        points: 3,
        alive: false,
      },
    ],
    startingTurn: 1,
    board: [
      "blue.king.a5",
      "blue.bishop.a6",
      "blue.knight.b7",
      "red.king.e4",
      "red.bishop.e6",
      "red.boat.g4",
    ],
    goal: "Finish off Red's chances of winning by capturing all of their pieces!",
    hint: "Start with a fork.",
    difficulty: "intermediate",
  },
];
