import React from "react";
import "./Button.scss";
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    <div>
      {/* styles kiểu scss */}
      {/* <button className={`button ${props.className || ""}`}>
        {props.children}
      </button> */}
      <button
        className={` ${styles.button} ${
          props.secondary ? styles.buttonSecondary : ""
        } `}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
