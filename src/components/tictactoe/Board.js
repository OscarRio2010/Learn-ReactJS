import React from "react";
import Cell from "./Cell";

const Board = (props) => {
  console.log(props);
  // const show = () => {
  //   const cells = [null, null, null, "X", "X", "X", null, null, null];
  //   console.log(calculateWinner(cells));
  // };
  return (
    //Array(9).fill() -> Underfine. nếu mà làm mãng có giá trị gì cả dùng cách này.
    <div className="game-board">
      {props.cells.map((item, index) => (
        <Cell
          key={index}
          value={item}
          onClick={() => props.onClick(index)}
          className={item === "X" ? "is-x" : item === "O" ? "is-o" : ""}
        ></Cell>
      ))}
    </div>
  );
};

export default Board;
