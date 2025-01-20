
import React, { useState } from "react";

function Input() {
  const [inputText, setInputText] = useState("");

  return (
    <div
      className="mt-8 flex flex-col items-center">
        <p className="font-bold text-2xl pb-9">Input</p>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Type something..."
        className="p-2 w-[300px] border border-black rounded"
      />
      <div
        className="mt-5 p-3 bg-slate-300 w-[300px] rounded-md"
      >
        {inputText}
      </div>
    </div>
  );
}

export default Input;

