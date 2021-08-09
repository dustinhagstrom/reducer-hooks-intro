import React, { useReducer } from "react";
import { INCREMENT, DECREMENT, TRIPLE, HALVE, RESET } from "./types";

export const CountContext = React.createContext({}); //create a context

const initialState = {
  count: 0,
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: state.count - 1,
      };

    case TRIPLE:
      return {
        count: state.count * 3,
      };
    case HALVE:
      return {
        count: state.count / 2,
      };
    case RESET:
      return {
        count: 0,
      };

    default:
      return state;
  }
}

//children input below is deconstructed from props obj
function CountContextWrapper({ children }) {
  //useReducer takes 2 args. a func and a initialstate and returns a state and a dispatch func
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

export default CountContextWrapper;
