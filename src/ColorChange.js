import React, { useState } from 'react';

const ColorChanging = () => {
  const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange']; 
  const [colorIndex, setColorIndex] = useState(0); 
  const changeColor = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % colors.length); 
  };

  const resetColor = () => {
    setColorIndex(0); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          margin: '0 auto',
          backgroundColor: colors[colorIndex],
          transition: 'background-color 0.3s ease',
        }}
      ></div>

      <button
        onClick={changeColor}
      className='mt-5 p-3 rounded text-sm border border-red-400 bg-red-300 cursor-pointer mr-2'
      >
        Change Color
      </button>
      <button
        onClick={resetColor}
       className='mt-5 p-3 rounded text-sm border border-red-400 bg-red-300 cursor-pointer'
      >
        Reset
      </button>
    </div>
  );
};

export default ColorChanging;
