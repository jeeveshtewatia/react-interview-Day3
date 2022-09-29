import React from "react";
import { useReducer } from "react";

let initialState = {
  firstCounter: 0,
  secoundCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrememt":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secoundCounter: state.secoundCounter + action.value };
    case "decrememt2":
      return { ...state, secoundCounter: state.secoundCounter - action.value };
    case "reset":
      return initialState;

    default:
      return state;
  }
};

const HookReaducertwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>First count {count.firstCounter} </div>
      <div>Second count {count.secoundCounter} </div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrememt", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrememt", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 2 })}>
        Increment 2
      </button>
      <button onClick={() => dispatch({ type: "decrememt2", value: 2 })}>
        Decrement 2
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default HookReaducertwo;
