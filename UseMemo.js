//use memo used when stat gets change.
//use memo helps to  improve perfomance.
import React, { useState, useMemo } from "react";
const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [first, setfirst] = useState(0);

  const getConsole = useMemo(() => {
    console.log("hii");
  }, [first]);

  return (
    <div>
      <h5>{count}</h5>
      <h5>{first}</h5>
      {getConsole}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        inc
      </button>   
      <button
        onClick={() => {
          setfirst(first + 2);
        }}
      >
        first
      </button>
    </div>
  );
};

export default UseMemo;
