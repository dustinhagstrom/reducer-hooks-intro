import React, { useContext } from "react";
import { CountContext } from "../../context/CountContext";

function Counter() {
  //   const context = useContext(CountContext);
  //   console.log(context);

  // const { state, dispatch } = useContext(CountContext);
  // console.log(state);
  // console.log(dispatch);

  const {
    state: { count }, //this is nested destructuring
    dispatch,
  } = useContext(CountContext);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "TRIPLE" })}>Count * 3</button>
      <button onClick={() => dispatch({ type: "HALVE" })}>Count / 2</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Clear Count</button>
    </div>
  );
}

export default Counter;
