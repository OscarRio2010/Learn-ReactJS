import React from "react";

// const props = {
//   value: "X",
//   onClick: () => true,
// };

const Cell = ({ value, onClick, className }) => {
  // lam cach nay ngan gon hon khi dung props
  // object destructuring

  return (
    <div className={`game-cell ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Cell;
