import React from "react";
import { counter } from "./App";
import { useContext } from "react";

const ChildA = () => {
  const name = useContext(counter);
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default ChildA;
