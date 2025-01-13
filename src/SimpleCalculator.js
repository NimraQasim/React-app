import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button onClick={handleAddition} style={{ padding: "5px 10px" }}>
        Add
      </button>
      {result !== null && (
        <p style={{ marginTop: "20px" }}>
          Result: {num1} + {num2} = {result}
        </p>
      )}
    </div>
  );
}

export default App;
