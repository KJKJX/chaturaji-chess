export const outstandingGames = [
  {
    title: "The 335 Move Game",
    caption: "Longest Recent Game",
    description:
      "I_Will_pawn_you, Martinaxo, Kirilovski, and Tetris_4_Jeff battled each other, turning into a one of a kind match lasting 335 moves, 132 turns, and a winner with 42 points.",
    link: "https://www.chess.com/variants/chaturaji/game/105283853/0/1",
    date: "2026-07-07T01:14:22.739Z",
  },
  {
    title: "2050+ Anonymous? 24 moves?",
    caption: "Quickest Recent Game",
    description:
      "In an anonymous 2050+ match, 4 players, Shai-guy, Universoul_Crown, SenhorDasDrogas, and bo_mb played one of the quickest matches for a lobby with 2100+ experienced players.",
    link: "https://www.chess.com/variants/chaturaji/game/105576934/0/1",
    date: "2026-07-08T23:04:23.873Z",
  },
].sort((x, y) => new Date(y.date) - new Date(x.date));

export const currentQuotes = [
  {
    quote: "Points for Power.",
    caption: "Quote #1",
    description:
      "It's simple. Your points is your chance to win. Your points are your power. This does NOT mean to trade all of your pieces though.",
    from: "agm2920",
    date: "2026-07-07T01:14:22.739Z",
  },
  {
    quote: "Maximize you value.",
    caption: "Quote #2",
    description:
      "Don't just trade everything. Think before trading, 'Can I get more points with this piece than trading it off?' This is especially useful with knights.",
    from: "Universoul_Crown",
    date: "2026-07-08T23:04:23.873Z",
  },
].sort((x, y) => new Date(y.date) - new Date(x.date));
