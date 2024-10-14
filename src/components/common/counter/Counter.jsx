import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const sumar = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2>Contador = {counter}</h2>
      <button onClick={sumar}>sumar</button>
    </div>
  );
};
