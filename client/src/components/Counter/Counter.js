import React from "react";
import Quiz from "../Quiz"

const Counter = props => (
  <div>
      <p>Your score so far: {props.score}</p>
  </div>
);

export default Counter;
