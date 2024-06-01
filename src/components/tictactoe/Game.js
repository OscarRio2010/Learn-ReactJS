import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameStyle.css";
import { calculateWinner } from "../../helpers";

// 2 initialState, gameReducer  của cách 3
const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
//immutable
//[...arr] , {...obj}
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;

      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }
    default:
      break;
  }
};
const Game = () => {
  //CÁCH 1:
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const handleClick = (index) => {
  //   const boardCopy = [...board];
  //   if (winner || boardCopy[index]) return;
  //   boardCopy[index] = xIsNext ? "X" : "O";
  //   setBoard(boardCopy);
  //   setXIsNext((xIsNext) => !xIsNext);
  // };
  // const [xIsNext, setXIsNext] = useState(true);
  // const winner = calculateWinner(board);
  // const handleResetGame = () => {
  //   setBoard(Array(9).fill(null));
  // };
  //  return (
  //   <div>
  //     <Board cells={board} onClick={handleClick}></Board>
  //     {winner && <div className="game-winner">Winner is {winner}</div>}
  //     <button onClick={handleResetGame}>Reset game</button>
  //   </div>
  // );

  //CÁCH 2: Xử lý state phức tạp
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  //   //2 cái ở trên là 1 object
  // });
  // const handleClick = (index) => {
  //   const boardCopy = [...state.board];
  //   if (winner || boardCopy[index]) return;
  //   boardCopy[index] = state.xIsNext ? "X" : "O";
  //   console.log(boardCopy[index]);
  //   setState({
  //     ...state,
  //     board: boardCopy,
  //     xIsNext: !state.xIsNext,
  //   });
  //   console.log(state);
  // };
  // const winner = calculateWinner(state.board);
  // const handleResetGame = () => {
  //   // setBoard(Array(9).fill(null));
  // };
  // return (
  //   <div>
  //     <Board cells={state.board} onClick={handleClick}></Board>
  //     {winner && <div className="game-winner">Winner is {winner}</div>}
  //     <button onClick={handleResetGame}>Reset game</button>
  //   </div>
  // );

  // CÁCH 3: DÙNG HOOK useReducer

  const [state, dispatch] = useReducer(gameReducer, initialState);
  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };
  const winner = calculateWinner(state.board);
  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button onClick={handleResetGame}>Reset game</button>
    </div>
  );
};

export default Game;
