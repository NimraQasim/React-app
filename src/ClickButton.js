
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
    <p className="font-bold text-2xl pb-9 flex flex-wrap mx-auto  max-w-[420px]">After typing in the input field, when we click the button, the text from the input will start appearing below separately.</p>
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
