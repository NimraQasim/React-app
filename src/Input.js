import React, { useState } from "react";

function Input() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div style={{ padding: "20px",  }}>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type something..."
        style={{ padding: "8px", width: "300px", textAlign: 'center' }}
      />
      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          backgroundColor: "#f0f0f0",
          width: "300px",
          textAlign: "center",
        }}
      >
        {inputText}
      </div>
    </div>
  );
}
export default Input;
