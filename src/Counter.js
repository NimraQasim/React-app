import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };
  return (
    <div className="mt-12 items-center flex flex-col ">
      <h1 className="font-bold text-2xl">React Counter</h1>
      <div className="flex flex-col items-center gap-6 justify-center mt-8">
        <button  className="border border-red-400 px-3  rounded-md" onClick={Increment}>Increment</button>
        <button  className="border border-red-400 px-3  rounded-md" onClick={Decrement}>Decrement</button>
        <button  className="border border-red-400 px-3  rounded-md" onClick={Reset}>Reset</button>
      </div>
      <h2 className="mt-5">{count}</h2>
    </div>
  );
};
export default Counter;
