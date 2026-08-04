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
    title: "Remember the 2-loss rule; If you lose twice, take a break!",
    type: "tip",
    info: "...",
    from: "Universoul_Crown",
    elo: 0,
  },
  {
    title:
      "Don't trade pawns in the endgame! Instead, focus on promoting them to rooks.",
    type: "tip",
    info: "...",
    from: "Universoul_Crown",
    elo: 0,
  },
  {
    title:
      "Better safe than sorry! Don't have too many trades going on simultaneously.",
    type: "tip",
    info: "...",
    from: "Taran0915",
    elo: 0,
  },
  {
    title:
      "Be careful having a knight in a corner! It may get stuck with no option but to be lost.",
    type: "tip",
    info: "...",
    from: "SxbZer0",
    elo: 0,
  },
  {
    title:
      "A double check is worth 1 point, and if you're lucky, a triple check is 5!",
    type: "tip",
    info: "...",
    from: "SxbZer0",
    elo: 0,
  },
  {
    title:
      "Watch professional games when coming back from a break. It will help un-rust your skills.",
    type: "tip",
    info: "...",
    from: "SxbZer0",
    elo: 0,
  },
  {
    title:
      "The safest square for your king is 2 squares diagonally to the knight. It would take 3 knight hops for it to give a check, which would be a waste of moves for your opponent",
    type: "tip",
    info: "...",
    from: "Danny-2-8-4",
    elo: 0,
  },
  {
    title:
      "In Chaturaji, sometimes the best thing to do is just wait for one of your opponents to make a mistake. It might be necessary to make no real advancement with your pieces!",
    type: "tip",
    info: "...",
    from: "Bird-Seed",
    elo: 0,
  },
  {
    title:
      "Sacrificing a knight or bishop for two pawns can sometimes be very powerful. In certain spots, sacrificing a knight or bishop for a single pawn can do significant damage to an opponent's position.",
    type: "tip",
    info: "...",
    from: "Bird-Seed",
    elo: 2000,
  },
  {
    title:
      "Don't hold on to your pieces for as long as possible. It's generally the players with the least pieces on the board that win, because they have traded all their material and have stacked up on points.",
    type: "tip",
    info: "...",
    from: "VarostTheFlail",
    elo: 0,
  },
  {
    title:
      "Players with Rooks in the middlegame often become a target for multiple other players so you may be able to get your share.",
    type: "tip",
    info: "...",
    from: "Nyutixbrother",
    elo: 0,
  },
];
initTips.map((tip, i) => (tip.id = i));

export const tips = initTips;
