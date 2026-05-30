import { ranks } from "./ranks";
import { tips } from "./tips";
export const convertEloToString = function (rank) {
  const match = [...ranks].reverse().find((tier) => rank >= tier.requiredElo);
  return match ? match.title : "unranked";
};
export const convertStringToRankObject = function (rankString) {
  return ranks.find((rank) => rank.title === rankString);
};
export const getNextRankObject = function (currentRankObj) {
  return ranks.at(ranks.indexOf(currentRankObj) + 1) || ranks.at(-1);
};
export const getRandomTips = function (amount) {
  if (typeof amount !== "number") {
    return [];
  }
  let randomTips = [];
  let tipAmount = amount;
  while (tipAmount > 0) {
    const newTip = tips[Math.trunc(Math.random() * tips.length)];
    if (randomTips.every((tip) => tip?.id !== newTip?.id)) {
      randomTips.push(newTip);
      tipAmount -= 1;
    }
  }
  console.log(randomTips);
  return randomTips;
};
