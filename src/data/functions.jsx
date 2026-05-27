import { rankData } from "./rankData";
import { ranks } from "./ranks";
import { tips } from "./tips";
export const convertEloToString = function (rank) {
  const match = [...rankData]
    .reverse()
    .find((tier) => rank >= tier.requiredElo);
  return match ? match.title : "unranked";
};
export const convertStringToRankObject = function (rankString) {
  return rankData.find((dataRank) => dataRank.title === rankString);
};
export const convertStringToImage = function (rankString) {
  return ranks.find((rankImage) => rankString?.includes(rankImage.rank)) || "";
};
export const getNextRankObject = function (currentRankString) {
  return (
    rankData.at(
      rankData.indexOf(convertStringToRankObject(currentRankString)) + 1
    ) || rankData.at(-1)
  );
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
