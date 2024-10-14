import { useState, useEffect } from "react";

export const CartContainer = () => {
  const [counter, setCounter] = useState(0);
  const [nombre, setNombre] = useState("lucas");

  const sumar = () => {
    setCounter(counter + 1);
  };
  const cambiarNombre = () => {
    setNombre(nombre === "lucas" ? "pepe" : "lucas ");
  };

  console.log("aca me ejecuto");
  console.log(nombre);

  useEffect(() => {
    console.log("pedimos info a la india");
  }, []);
  return (
    <div>
      <h2>Contador = {counter}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={cambiarNombre}>cambiar nombre</button>
    </div>
  );
};
