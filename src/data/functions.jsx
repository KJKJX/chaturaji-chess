export const convertRankToString = function (rank) {
  if (rank < 1500) {
    return "bronze";
  } else if (rank < 1583.33) {
    return "low silver";
  } else if (rank < 1666.66) {
    return "silver";
  } else if (rank < 1750) {
    return "high silver";
  } else if (rank < 1833.33) {
    return "low gold";
  } else if (rank < 1916.66) {
    return "gold";
  } else if (rank < 2000) {
    return "high gold";
  } else if (rank < 2083.33) {
    return "low platinum";
  } else if (rank < 2166.66) {
    return "platinum";
  } else if (rank < 2250) {
    return "high platinum";
  } else if (rank < 2333.33) {
    return "low diamond";
  } else if (rank < 2416.66) {
    return "diamond";
  } else if (rank < 2500) {
    return "high diamond";
  } else if (rank < 2583.33) {
    return "grandmaster";
  } else if (rank < 2666.66) {
    return "ultra master";
  } else {
    return "hypermaster";
  }
};
