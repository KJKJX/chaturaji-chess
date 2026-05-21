export const convertRankToString = function (rank) {
  if (rank < 1500) {
    return "bronze";
  } else if (rank < 1583.33) {
    return "silver I";
  } else if (rank < 1666.66) {
    return "silver II";
  } else if (rank < 1750) {
    return "silver III";
  } else if (rank < 1833.33) {
    return "gold I";
  } else if (rank < 1916.66) {
    return "gold II";
  } else if (rank < 2000) {
    return "gold III";
  } else if (rank < 2083.33) {
    return "platinum I";
  } else if (rank < 2166.66) {
    return "platinum II";
  } else if (rank < 2250) {
    return "platinum III";
  } else if (rank < 2333.33) {
    return "emerald I";
  } else if (rank < 2416.66) {
    return "emerald II";
  } else if (rank < 2500) {
    return "emerald III";
  } else if (rank < 2583.33) {
    return "grandmaster I";
  } else if (rank < 2666.66) {
    return "grandmaster II";
  } else {
    return "grandmaster III";
  }
};
