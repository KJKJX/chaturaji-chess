export const players = [
  {
    name: "Bird-Seed",
    peak: 2162,
    color: "text-amber-100",
    status: "contributor+",
    playRate: 1,
    img: "https://images.chesscomfiles.com/uploads/v1/user/386504429.74a7e1ee.50x50o.c2afe78a792b@2x.jpg",
    description:
      "Bird-Seed is the owner of the Chaturaji Chess Team Club and, along with is-this-allowed, has relentlessly encouraged and supported this website. He also wrote a book! His profile has more on it.",
  },
  {
    name: "Articpolarbear",
    peak: 2745,
    color: "text-green-100",
    status: "legend",
    playRate: 3,
    img: "https://images.chesscomfiles.com/uploads/v1/user/91208070.376b1063.161x161o.d3cd82b3a454.png",
    description:
      "The TRULY legendary Articpolarbear one of the absolute best Chaturaji players and is super respectable and cool. He created the 'Big Bear' method.",
  },
  {
    name: "King_Chessable",
    peak: 2654,
    color: "text-sky-300",
    status: "legend",
    playRate: 4,
    img: "https://images.chesscomfiles.com/uploads/v1/user/527453507.5734a778.50x50o.ff43954f3a7a@2x.png",
    description:
      "The legendary King_Chessable is a cool guy who peaked at 2972, but sadly dropped due to screen time limits. His KC method is very powerful!",
  },
  {
    name: "oh-no-botezgambit",
    peak: 2443,
    color: "text-yellow-200",
    status: "player",
    playRate: 3,
    img: "https://images.chesscomfiles.com/uploads/v1/user/354858343.81951701.50x50o.d0caa5390176@2x.jpg",
    description:
      "oh-no-botezgambit is (no offense) a talkative and annoying player, but he has the knowledge to back it up. He seems to be friends with KrkAlex too.",
  },
  {
    name: "waterdragon888",
    peak: 2147,
    color: "text-purple-100",
    status: "contributor",
    contributions: ["Helped with board feature", "Codes with Python"],
    playRate: 3,
    img: "https://images.chesscomfiles.com/uploads/v1/user/53442930.eef5436e.50x50o.3b099df89b40@2x.jpg",
    description:
      "waterdragon888 is a friend of Universoul's and formerly was top 20 in hyper Chaturaji. He's a wemmbu fan and (supposedly) has a private vocabulary tutor.",
  },
  {
    name: "Universoul_Crown",
    peak: 2329,
    color: "text-emerald-100",
    status: "creator",
    contributions: ["Created the website"],
    playRate: 4,
    img: "https://images.chesscomfiles.com/uploads/v1/user/412575645.5dfce214.50x50o.52d0d0dedc88@2x.jpg",
    description:
      "Universoul_Crown is the official creator of this website. His passions are coding, playing Chaturaji, and video games. (Idk if u can tell but my pfp is magolor from kirby.)",
  },
  {
    name: "SxbZer0",
    peak: 2225,
    color: "text-sky-200",
    status: "sub creator",
    contributions: ["Helped create the website", "Close friend of Universoul"],
    playRate: 4,
    img: "https://images.chesscomfiles.com/uploads/v1/user/412555867.82821537.200x200o.ee8e85be5add@2x.jpg",
    description:
      "SxbZer0 is a close friend of Universoul_Crown whose passions are Chaturaji, BlockBench, and (of course) video games as well.",
  },
  {
    name: "Diamond_427",
    peak: 2242,
    color: "text-amber-100",
    status: "contributor",
    contributions: ["Gave ideas for updates"],
    playRate: 2,
    img: "https://images.chesscomfiles.com/uploads/v1/user/407514455.f1f3f1d7.50x50o.622b3b2e9b85.png",
    description: "",
  },
  {
    name: "KrkAlex",
    peak: 2410,
    color: "text-indigo-300",
    status: "player",
    playRate: 4,
    contributions: [],
    img: "https://images.chesscomfiles.com/uploads/v1/user/567570344.24324556.48x48o.27c56878820d@2x.jpg",
    description:
      "KrkAlex is one of chaturaji's most influential players. He has a very experimental playstyle, frequently sacrificing pieces in order to create weaknesses for others.",
  },
  {
    name: "is-this-allowed",
    peak: 2081,
    color: "text-red-100",
    matches: 550,
    status: "contributor+",
    contributions: [
      "Helped with rank assets (a lot)",
      "Constantly Supports",
      "Admin of CCT club",
    ],
    playRate: 0,
    img: "https://images.chesscomfiles.com/uploads/v1/user/380120947.b7a12c83.160x160o.f755c7471549@2x.png",
    description: "",
  },
].sort((a, b) => {
  const statusOrder = {
    creator: 0,
    "sub creator": 1,
    legend: 2,
    "contributor+": 3,
    contributor: 4,
    player: 5,
  };

  return (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99);
});
