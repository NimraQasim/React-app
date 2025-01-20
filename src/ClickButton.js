
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
    <div className="text-center mt-12 flex flex-col gap-3">
   <div className="flex items-center gap-6 justify-center">
   <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
        className=" p-2 w-[300px] border border-black rounded"
      />
      <button
        onClick={handleButtonClick}
        className=" p-2 rounded text-sm border border-red-400 bg-red-300 cursor-pointer mr-2"
      >
        Show Text
      </button>
   </div>
   {outputText && <p className="mb-2">{outputText}</p>}
    </div>
  );
}
export default DisplayInputText;
