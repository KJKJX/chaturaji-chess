export const outstandingGames = [
  {
    title: "1 Lucky Man with 35 points",
    caption: "Free points everywhere!",
    description:
      "A 1400, two 2100, and a 2200 fought in what started as a 'Normal 1|5.' But 1 man quickly gained the advantage, and soon, the winner was clearly visible. He was never stopped, ending out with 35 points.",
    link: "https://www.chess.com/variants/chaturaji/game/107197779/0/3",
    date: "2026-08-15T15:00:40.680Z",
  },
  {
    title: "Even faster 8 move game?!",
    caption: "Why so many fast games?",
    description:
      "I know. 8 moves. That can't be right, espically for 4 2300+ players. But apperantly, fast games are becoming more common. Doesn't make sense, right? Well, check it out for yourself.",
    link: "https://www.chess.com/variants/chaturaji/game/109677514/0/1",
    date: "2026-10-05T14:52:03.465Z",
  },
].sort((x, y) => new Date(y.date) - new Date(x.date));

export const currentQuotes = [
  {
    quote: "Points for Power.",
    caption: "Quote #2",
    description:
      "It's simple. Your points is your chance to win. Your points are your power. This does NOT mean to trade all of your pieces though.",
    from: "agm2920",
    date: "2026-07-07T01:14:22.739Z",
  },
  {
    quote: "Don't Maximize Rating. Minimize Losses.",
    caption: "Quote #1",
    description:
      "Becoming better means shifting your focus from always maximizing rating gain to minimizing loss. Don't try to always get first. Try and aim for 2nd or 3rd if necessary.",
    from: "IHaveTheSauce",
    date: "2026-08-04T23:04:23.873Z",
  },
].sort((x, y) => new Date(y.date) - new Date(x.date));
