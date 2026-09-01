import { ranks } from "./ranks";
import { tips } from "./tips";
export const convertEloToString = function (rank) {
  const match = [...ranks].reverse().find((tier) => rank >= tier.requiredElo);
  return match ? match.title : ranks[0].title;
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
  return randomTips;
};
export const getPieceFromBoardPosition = (board, pos) => {
  let toChange = board.findIndex((piece) => {
    return pos === piece.split(".")[2];
  });

  return board[toChange];
};

export const applyMoveToBoard = (
  moves,
  currentMove,
  prevCurrentMove = -1,
  board,
  setPlayers = null,
  completed = false,
) => {
  const getPointsForPiece = (pieceType) => {
    if (pieceType === "pawn") return 1;
    if (pieceType === "knight") return 3;
    if (pieceType === "bishop" || pieceType === "boat") return 5;
    if (pieceType === "king") return 3;
    return 0;
  };

  const updatePlayerPoints = (playerColor, changeAmount) => {
    if (typeof setPlayers !== "function") {
      return;
    }

    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      const playerIndex = updatedPlayers.findIndex(
        (p) => p.color === playerColor,
      );
      if (playerIndex !== -1) {
        updatedPlayers[playerIndex].points += changeAmount;
      }
      return updatedPlayers;
    });
  };

  let newMove;

  if (prevCurrentMove > currentMove) {
    newMove = moves[Math.min(currentMove, moves.length)]
      .split(" ")
      .reverse()
      .join(" ");

    if (newMove.split(" ")[0].includes("CAPTURE")) {
      let oldMove = newMove;
      newMove = newMove.split(" ");
      newMove.shift();
      newMove.push(oldMove.split(" ").at(0));
      newMove = newMove.join(" ");
      newMove = newMove.replaceAll("CAPTURE", "RESTORE");
    }
  } else {
    newMove =
      moves[Math.min(completed ? prevCurrentMove : currentMove, moves.length)];
  }

  if (!newMove) {
    return board;
  }

  let [beforeMoveArea, afterMoveArea] = newMove.split(" ");
  let newBoard = [...board];
  let toChange = newBoard.findIndex((piece) => {
    return beforeMoveArea === piece.split(".")[2];
  });

  const movingPiece = newBoard[toChange];
  // console.log(movingPiece);
  const movingPlayerColor = movingPiece.split(".")[0];

  newBoard[toChange] =
    `${newBoard[toChange].split(".")[0]}.${newBoard[toChange].split(".")[1]}.${afterMoveArea}`;

  if (newMove.includes("CAPTURE")) {
    let captureIndex = newBoard.findIndex((piece) => {
      return (
        newMove.split(" ").at(-1).replaceAll("CAPTURE.", "") ===
        [piece.split(".")[0], piece.split(".")[1]].join(".")
      );
    });

    const capturedPiece = newBoard[captureIndex];
    const capturedPieceType = capturedPiece.split(".")[1].replace(/\d/g, "");

    const points = getPointsForPiece(capturedPieceType);

    newBoard = newBoard.filter((_, i) => i !== captureIndex);

    updatePlayerPoints(movingPlayerColor, points / 2);
  }

  if (newMove.includes("RESTORE")) {
    const restoredPieceInfo = newMove
      .split(" ")
      .at(-1)
      .replaceAll("RESTORE.", "");
    const restoredPieceType = restoredPieceInfo
      .split(".")[1]
      .replace(/\d/g, "");

    const points = getPointsForPiece(restoredPieceType);

    newBoard.push(`${restoredPieceInfo}.${beforeMoveArea}`);

    updatePlayerPoints(movingPlayerColor, -(points / 2));
  }

  return newBoard;
};
export const moveToMoveString = (board, move) => {
  let afterMoveArea = move.split(" ")[1];
  let fullString = `${getPieceFromBoardPosition(board, afterMoveArea)
    .split(".")
    .at(1)
    .at(0)
    .toUpperCase()
    .replace("P", "")
    .replace(
      "K",
      getPieceFromBoardPosition(board, afterMoveArea).split(".")[1] === "knight"
        ? "N"
        : "K",
    )}${move.includes("CAPTURE") ? "x" : ""}${afterMoveArea}`;
  return fullString;
};
export const colorToRealColor = function (color) {
  let realColor;
  if (color === "green") {
    realColor = "#81b64c";
  } else if (color === "blue") {
    realColor = "#3ca0ff";
  } else if (color === "red") {
    realColor = "#c34646";
  } else {
    realColor = "#e39e44";
  }
  return realColor;
};
