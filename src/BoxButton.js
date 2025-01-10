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
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Change Color
      </button>
    </div>
  );
};

export default ColorChangingBox;
