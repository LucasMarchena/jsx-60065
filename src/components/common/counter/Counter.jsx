import { useState } from "react";

export const CartContainer = () => {
  const [counter, setCounter] = useState(0);

  const sumar = () => {
    setCounter(counter + 1);
  };
  const restar = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="container-counter">
      <button onClick={sumar}>sumar</button>
      <h2>Contador = {counter}</h2>
      <button onClick={restar}>restar</button>
    </div>
  );
};
