import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleDivision = () => {
    setResult(num2 !== '0' ? num1 / num2 : 'Cannot divide by 0');
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Division</h1>
      <input type="number" placeholder='First number' value={num1} onChange={(e) => setNum1(e.target.value)}  />
      <input type="number" placeholder='Second number' value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleDivision}>Divide</button>
      <div>{result}</div>
    </div>
  );
}

export default App;
