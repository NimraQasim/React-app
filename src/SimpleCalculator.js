
import React, { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div className="text-center mt-12 flex flex-col gap-3">
      <h1 className="font-bold text-2xl">Simple Calculator</h1>
   <div className="flex flex-col items-center gap-6 justify-center">
   <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
        className="border border-red-400 pl-2
          rounded"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
        className="border border-red-400 pl-2
          rounded"
      />
      <button className="border border-red-400 px-3
          rounded-md" onClick={() => setResult(+num1 + +num2)}>Add</button>
   </div>
      {result !== null && <p>Result: {num1} + {num2} = {result}</p>}
    </div>
  );
}
