import { useRef, useState } from "react";
import ChessPiece from "../components/ChessPiece";
import { useEffect } from "react";
import { applyMoveToBoard, colorToRealColor } from "../data/functions";
import PlayerStats from "./PlayerStats";
import { motion } from "motion/react";
const colorToTurnNumber = function (color) {
  switch (color) {
    case "red":
      return 0;
    case "blue":
      return 1;
    case "yellow":
      return 2;
    case "green":
      return 3;

    default:
      return 0;
  }
};
const numberToLetter = function (number) {
  switch (number) {
    case 1:
      return "a";
    case 2:
      return "b";
    case 3:
      return "c";

    case 4:
      return "d";
    case 5:
      return "e";
    case 6:
      return "f";
    case 7:
      return "g";
    case 8:
      return "h";
    default:
      return 0;
  }
};
function Board({
  moves = [],
  startingPlayers = [],
  board = [],
  currentMove = 0,
  interactive = false,
  startingTurn = 0,
  checkPuzzleMoveCorrect = () => {},
  className,
  continueTurn = () => {},
  size = 25,
  updateBoard = () => {},
  sizeKind = "vw",
}) {
  // const [board] = useState(board || baseBoard);
  const [players, setPlayers] = useState(
    JSON.parse(JSON.stringify([...startingPlayers])),
  );
  const [changeableBoard, setChangeableBoard] = useState(
    JSON.parse(JSON.stringify([...board])),
  );
  const prevCurrentMove = useRef(currentMove);
  const [turn, setTurn] = useState(startingTurn);
  const [nextMove, setNextMove] = useState("");
  const [selectedPiece, setSelectedPiece] = useState("");
  const [completed, setCompleted] = useState(
    !interactive ? true : currentMove >= moves.length,
  );
  const rendered = useRef(false);
  const resetBoardState = () => {
    setPlayers(JSON.parse(JSON.stringify([...startingPlayers])));
    setChangeableBoard(JSON.parse(JSON.stringify([...board])));
    setTurn(startingTurn);
    setNextMove("");
    setSelectedPiece("");
    setCompleted(!interactive ? true : currentMove >= moves.length);
  };
  // useEffect(() => {
  //   let newMove;
  //   if (prevCurrentMove.current > currentMove) {
  //     console.log("less");
  //     newMove = prevMoves[Math.min(currentMove + 1, moves.length)];
  //   } else {
  //     newMove = moves[Math.min(currentMove, moves.length)];
  //     console.log("more");
  //   }
  //   prevCurrentMove.current = currentMove;
  //   if (!newMove) {
  //     return;
  //   }
  //   let newBoard = [...changeableBoard];
  //   let toChange = newBoard.findIndex((piece) => {
  //     return (
  //       newMove.split(".")[1] === piece.split(".")[1] &&
  //       newMove.split(".")[0] === piece.split(".")[0]
  //     );
  //   });
  //   newBoard[toChange] = newMove;
  //   setChangeableBoard(newBoard);
  // }, [currentMove]);
  function onClickPiece(color, piece, position) {
    if (!interactive || completed) return;
    if (colorToTurnNumber(color) === startingTurn && turn === startingTurn) {
      setNextMove(`${position}`);
      setSelectedPiece(
        selectedPiece === `${color}.${piece}.${position}`
          ? ""
          : `${color}.${piece}.${position}`,
      );
    }
  }
  function onClickSquare(position) {
    if (!interactive || completed) return;
    if (selectedPiece) {
      setNextMove(nextMove + ` ${position}`);
      setSelectedPiece("");
      checkPuzzleMoveCorrect(nextMove + ` ${position}`);
    }
  }
  function onClickOpposingPiece(position, color, piece) {
    if (!interactive || completed) return;
    if (selectedPiece && piece) {
      setNextMove(nextMove + ` ${position} CAPTURE.${color}.${piece}`);
      setSelectedPiece("");
      checkPuzzleMoveCorrect(
        nextMove + ` ${position} CAPTURE.${color}.${piece}`,
      );
    }
  }
  useEffect(() => {
    if (!rendered.current) return () => {};
    const newBoard = applyMoveToBoard(
      moves,
      currentMove,
      prevCurrentMove.current,
      changeableBoard,
      setPlayers,
      completed,
    );

    if (interactive) {
      let newTurn = prevCurrentMove.current > currentMove ? turn - 1 : turn + 1;

      while (newTurn < 0 || newTurn > 3 || players[newTurn]?.alive === false) {
        if (newTurn < 0) {
          newTurn = 3;
        } else if (newTurn > 3) {
          newTurn = 0;
        } else if (players[newTurn]?.alive === false) {
          newTurn =
            prevCurrentMove.current > currentMove ? newTurn - 1 : newTurn + 1;
        }
      }

      setTurn(newTurn);
    }

    prevCurrentMove.current = currentMove;
    setChangeableBoard(newBoard);
  }, [currentMove, interactive]);
  useEffect(() => {
    if (interactive && turn !== startingTurn && !completed) {
      console.log(turn, startingTurn);

      continueTurn();
    }
  }, [interactive, turn, startingTurn, completed]);
  useEffect(() => {
    rendered.current = true;
    return () => {
      rendered.current = false;
      resetBoardState();
    };
  }, []);
  useEffect(() => {
    if (currentMove >= moves.length) {
      setCompleted(true);
      setTurn(null);
    }
  }, [currentMove]);
  useEffect(() => {
    updateBoard(changeableBoard);
  }, [changeableBoard]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`${className} flex flex-col`}
    >
      {interactive && (
        <div
          // style={{
          //   width: size + "vw",
          // }}
          className="h-[2.5vw] flex w-full justify-between"
        >
          <PlayerStats player={players[1]} isTurn={turn === 1} />
          <PlayerStats player={players[2]} reverse isTurn={turn === 2} />
        </div>
      )}
      <div
        style={{
          height: size + sizeKind,
          width: size + sizeKind,
        }}
        className="bg-black/20 grid grid-cols-8 grid-rows-8 gap-0 outline-none grid rotate-270 relative my-[1vw]"
      >
        {Array.from({ length: 64 }, (_, i) => ({
          square: i,
          row: Math.floor(i / 8),
          col: i % 8,
          color:
            Math.floor(i / 8) % 2
              ? i % 2 === 0
                ? "bg-gray-300"
                : "bg-gray-400"
              : i % 2 === 0
                ? "bg-gray-400"
                : "bg-gray-300",
        })).map((square) => (
          <div
            style={{
              "--hover-color": `color-mix(in srgb, ${colorToRealColor(selectedPiece?.split(".")[0])}99 50%, white)`,
              gridRow: square.row + 1,
              gridColumn: square.col + 1,
            }}
            className={`h-full w-full ${square.color} border-black bg-clip-padding ${interactive && selectedPiece && "cursor-pointer hover:bg-[var(--hover-color)] duration-100"}`}
            onClick={
              interactive
                ? () =>
                    onClickSquare(
                      `${numberToLetter(square.row + 1)}${square.col + 1}`,
                    )
                : undefined
            }
          />
        ))}
        {changeableBoard.map((string) => {
          const [color, piece, position] = string.split(".");
          // console.log(color, piece, position);
          let realColor = colorToRealColor(color);
          return (
            <div
              onClick={
                interactive
                  ? () => {
                      if (colorToTurnNumber(color) === startingTurn) {
                        onClickPiece(color, piece, position);
                      } else {
                        onClickOpposingPiece(position, color, piece);
                      }
                    }
                  : undefined
              }
              className={`rotate-90 ${interactive && "cursor-pointer active:scale-90"} scale-105 m-auto duration-100 row-start-${
                position.at(0).charCodeAt(0) - 96
              } col-start-${position.at(-1)} ${interactive && selectedPiece && colorToTurnNumber(color) !== startingTurn && "hover:bg-red-500/50!"}`}
              style={{
                gridRow: `${position.at(0).charCodeAt(0) - 96}`,
                gridColumn: position.at(-1),
                height: size * 0.12 + sizeKind,
                width: size * 0.12 + sizeKind,
                filter: realColor,
                backgroundColor:
                  interactive && selectedPiece === string
                    ? `${realColor}75`
                    : "transparent",
              }}
            >
              <ChessPiece color={realColor} piece={piece.replace(/\d/g, "")} />
            </div>
          );
        })}
      </div>
      {interactive && (
        <div
          // style={{
          //   width: size + "vw",
          // }}
          className="h-[2.5vw] flex w-full justify-between"
        >
          <PlayerStats player={players[0]} isTurn={turn === 0} />
          <PlayerStats player={players[3]} reverse isTurn={turn === 3} />
        </div>
      )}
    </motion.div>
  );
}

export default Board;
