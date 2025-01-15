import React, { useState } from 'react';

const ColorChangingBox = () => {
  const [color, setColor] = useState('blue');

  const changeColor = () => {

    setColor(color === 'blue' ? 'red' : 'blue');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          margin: '0 auto',
          backgroundColor: color,
          transition: 'background-color 0.3s ease',
        }}
      ></div>

      <button
        onClick={changeColor}
        className='mt-5 p-3 rounded text-sm border border-red-400 bg-red-300 cursor-pointer'
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorChangingBox;
