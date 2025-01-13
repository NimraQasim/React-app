// import React, { useState } from 'react';

// function ClickButton() {
//   const [message, setMessage] = useState('Hello, Welcome to React!');

//   const changeMessage = () => {
//     setMessage('You have clicked the button!');
//   };

//   return (
//     <div style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>{message}</h1>
//       <button onClick={changeMessage} style={{ padding: '10px 20px', fontSize: '16px' }}>
//         Click Me
//       </button>
//     </div>
//   );
// // }

// export default ClickButton;

import React, { useState } from "react";

function DisplayInputText() {
  const [inputText, setInputText] = useState(""); 
  const [outputText, setOutputText] = useState(""); 

  const handleInputChange = (e) => {
    setInputText(e.target.value); 
  };

  const handleButtonClick = () => {
    setOutputText(inputText);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
        style={{
          padding: "10px",
          marginRight: "10px",
          width: "300px",
        }}
      />
      <button
        onClick={handleButtonClick}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Show Text
      </button>
      {outputText && (
        <p style={{ marginTop: "20px",  }}>
          {outputText}
        </p>
      )}
    </div>
  );
}

export default DisplayInputText;
