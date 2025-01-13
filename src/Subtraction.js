import React, { useState } from 'react';

export default function SubtractNumbers() {
  const [result, setResult] = useState('');

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Subtraction</h1>
      <input id="num1" type="number" placeholder="First number" />
      <input id="num2" type="number" placeholder="Second number" />
      <button onClick={() => {
        const num1 = +document.getElementById('num1').value;
        const num2 = +document.getElementById('num2').value;
        setResult(`${num1} - ${num2} = ${num1 - num2}`);
      }}>
        Subtract
      </button>
      <p>{result}</p>
    </div>
  );
}

