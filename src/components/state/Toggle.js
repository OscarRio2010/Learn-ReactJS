import React, { useState } from "react";
import "./ToggleStyle.css";

// stateless functional component: component nhưng không sử dụng state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// stateful functional component: component nhưng có sử dụng state
// function Toggle2() {
//const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  //1. enabling state: useState(initialize value)
  //2. initialize state: useSate(false)
  //3. reading state
  //4. update state
  const [on, setOn] = useState(false);
  // console.log(on);
  const handleToggle = () => {
    setOn((on) => { 
      console.log(on);
      return !on;
    });
  };
  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>

      {/* này là khi ấn nút on và off thì thay đổi thằng trên*/}
      {/* <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div> */}
    </div>
  );
}
export default Toggle;
