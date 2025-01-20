import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleDivision = () => {
    setResult(num2 !== "0" ? num1 / num2 : "Cannot divide by 0");
  };

  return (
    <div className="text-center mt-12 flex flex-col gap-3">
      <p className="font-bold text-2xl">Division</p>
      <div className="flex items-center gap-6 justify-center flex-col">
        <input
          className="border border-red-400 pl-2 rounded"
          type="number"
          placeholder="First number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          className="border border-red-400 pl-2 rounded"
          type="number"
          placeholder="Second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button className="border border-red-400 px-3 rounded-md" onClick={handleDivision}>
          Divide
        </button>
      </div>
      <div>{result}</div>
    </div>
  );
}
export default App;
