import React, { useReducer } from "react";

export const CountContext = React.createContext({}); //create a context

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        count: state.count - 1,
      };

    case "TRIPLE":
      return {
        count: state.count * 3,
      };
    case "HALVE":
      return {
        count: state.count / 2,
      };
    case "RESET":
      return {
        count: (state.count = 0),
      };

    default:
      return state;
  }
}

function CountContextWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider value={{ state, dispatch }}>
      {children}
    </CountContext.Provider>
  );
}

export default CountContextWrapper;
