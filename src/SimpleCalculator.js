
import React, { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Second number"
      />
      <button onClick={() => setResult(+num1 + +num2)}>Add</button>
      {result !== null && <p>Result: {num1} + {num2} = {result}</p>}
    </div>
  );
}
