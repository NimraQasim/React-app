import React, { useState } from "react";

export default function SubtractNumbers() {
  const [result, setResult] = useState("");

  return (
    <div className="text-center mt-12 flex flex-col gap-3">
      <h1 className="font-bold text-2xl">Subtraction</h1>
      <div className="flex items-center gap-6 justify-center">
        <input
          className="border border-red-400 pl-2
          rounded"
          id="num1"
          type="number"
          placeholder="First number"
        />
        <input
          className="border border-red-400 pl-2
          rounded"
          id="num2"
          type="number"
          placeholder="Second number"
        />
        <button
          className="border border-red-400 px-3
          rounded-md"
          onClick={() => {
            const num1 = +document.getElementById("num1").value;
            const num2 = +document.getElementById("num2").value;
            setResult(`${num1} - ${num2} = ${num1 - num2}`);
          }}
        >
          Subtract
        </button>
      </div>
      <p>{result}</p>
    </div>
  );
}
