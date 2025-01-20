import React, { useState } from "react";

function MultiplyNumbers() {
  const [result, setResult] = useState(null);

  return (
    <div className="text-center mt-12 flex flex-col gap-3 justify-center items-center">
      <h1 className="font-bold text-2xl">Multiplication</h1>
      <div className="flex items-center gap-6 justify-center">
        <input
          id="num1"
          type="number"
          placeholder="First number"
          className="border border-red-400 pl-2
          rounded"
        />
        <input
          id="num2"
          type="number"
          placeholder="Second number"
          className="border border-red-400 pl-2
           rounded"
        />
        <button
          className="border border-red-400 px-3  rounded-md"
          onClick={() => {
            const num1 = document.getElementById("num1").value;
            const num2 = document.getElementById("num2").value;
            setResult(Number(num1) * Number(num2));
          }}
        >
          Multiply
        </button>
      </div>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default MultiplyNumbers;
