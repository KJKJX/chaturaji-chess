let initTips = [
  {
    title: "If you move first, start by pushing your king's pawn.",
    type: "opening",
    info: "...",
    from: "is-this-allowed",
    elo: 0,
  },
  {
    title:
      "Try to maintain open lines for your bishops so they stay active and useful.",
    type: "tip",
    info: "...",
    from: "is-this-allowed",
    elo: 0,
  },
  {
    title: "Always keep your king in a safe, defendable position.",
    type: "tip",
    info: "...",
    from: "is-this-allowed",
    elo: 0,
  },
  {
    title: "Don't trade too much! You might end up with too little material.",
    type: "mistake",
    info: "...",
    from: "is-this-allowed",
    elo: 0,
  },
  {
    title:
      "Pay attention to the whole board, or else you might be caught off guard!",
    type: "mistake",
    info: "...",
    from: "is-this-allowed",
    elo: 0,
  },
  {
    title:
      "Forks make the knight a powerful piece. Sometimes, your rook might need to trade with it!",
    type: "tip",
    info: "...",
    from: "Universoul_Crown",
    elo: 2000,
  },
  {
    title:
      "If you have a 2-square gap between your king and an opposing knight, you won't be checked for a while!",
    type: "tip",
    info: "...",
    from: "Universoul_Crown",
    elo: 0,
  },
  {
    title: "Remember the 2-loss rule; If you lose twice, take a break!",
    type: "tip",
    info: "...",
    from: "Universoul_Crown",
    elo: 0,
  },
];
initTips.map((tip, i) => (tip.id = i));

export const tips = initTips;
