// import React, { useState } from "react";

// function Input() {
//   const [inputText, setInputText] = useState("");

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   return (
//     <div style={{ padding: "20px",  }}>
//       <input
//         type="text"
//         value={inputText}
//         onChange={handleInputChange}
//         placeholder="Type something..."
//         style={{ padding: "8px", width: "300px", textAlign: 'center' }}
//       />
//       <div
//         style={{
//           marginTop: "20px",
//           padding: "10px",
//           backgroundColor: "#f0f0f0",
//           width: "300px",
//           textAlign: "center",
//         }}
//       >
//         {inputText}
//       </div>
//     </div>
//   );
// }
// export default Input;

import React, { useState } from "react";

function Input() {
  const [inputText, setInputText] = useState("");

  return (
    <div
      className="mt-8 flex flex-col items-center"
    >
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

