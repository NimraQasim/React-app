import React, { useState } from 'react';

function MultiplyNumbers() {
  const [result, setResult] = useState(null);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Multiplication</h1>
      <input id="num1" type="number" placeholder="First number"  />
      <input id="num2" type="number" placeholder="Second number"  />
      <button onClick={() => {
        const num1 = document.getElementById('num1').value;
        const num2 = document.getElementById('num2').value;
        setResult(Number(num1) * Number(num2));
      }}>Multiply</button>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default MultiplyNumbers;
