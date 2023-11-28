// MainPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    margin: '5px',
    backgroundColor: '#3498db', // Blue color as an example
    color: '#ffffff', // White text
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h1>Calibration Game - Can you match this heart?</h1>
      <div id="menu">
        <Link to="/level1" style={buttonStyle}>Level 1</Link>
        <Link to="/level2" style={buttonStyle}>Level 2</Link>
        <Link to="/level3" style={buttonStyle}>Level 3</Link>
      </div>
    </div>
  );
};

export default MainPage;
