import React, { useState } from "react";
import App from "../App";
import "../index.css";


const Step = ({ messages }) => {
  const [count, setCount] = useState(0);
  let length = messages.length - 1;

  function handlePrev() {
    if (count >= 1) setCount(count - 1);
    // (count => 2 && count <=0 ) ? setCount(count-1) : setDisabled(!disabled)
  }
  function handleNext() {
    if (count < length) setCount(count + 1);
  }

  return (
    <>
      <div className="steps">
        <div className="numbers">
          <div className={count === 0 ? ` active` : ""}>1</div>
          <div className={count === 1 ? ` active` : ""}>2</div>
          <div className={count === 2 ? ` active` : ""}>3</div>
          <div className={count === 3 ? ` active` : ""}>4</div>
          <div className={count === 4 ? ` active` : ""}>5</div>
        </div>

        <p className="message"> {messages[count]} </p>
        <div className="buttons">
          <button onClick={handlePrev}>
            <span>prev </span>
          </button>
          <button onClick={handleNext}>
            <span>next </span>
          </button>
        </div>
      </div>




    </>
  );
};
export default Step;
