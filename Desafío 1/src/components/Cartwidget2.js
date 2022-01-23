import React from "react";
import { useReducer, useState } from "react";

const initialState = { contador: 0 };

const TYPES = {
  INCREMENT:"INCREMET",
  INCREMENT5:"INCREMENT5",
  DECREMENT:"DECREMENT",
  DECREMENT5:"DECREMENT5",
  RESET:"RESET"
};

function reducer(state, action) {
  switch (action.type) {
    case TYPES.INCREMENT:
      return { contador: state.contador + 1 };
    case TYPES.DECREMENT:
      return { contador: state.contador - 1 };
    default:
      return state;
  }
}

const Contador = () => {
  //const [contador, setContador] = useState(0);
  const [state, dispacth] = useReducer(reducer, initialState);
  //const sumar = () => setContador(contador + 1);
  const sumar = () => dispacth({ type:TYPES.INCREMENT });
  //const restar = () => setContador(contador - 1);
  const restar = () => dispacth({ type:TYPES.DECREMENT });
  return (
    <div style={{ textAlign:"center" }}>
      <h2>Contador Reducer</h2>
      <nav>
        <button>+5</button>
        <button onClick={sumar}>+</button>
        <button>0</button>
        <button onClick={restar}>-</button>
        <button>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;