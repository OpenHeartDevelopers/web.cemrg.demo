// MainPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '56px',
    margin: '5px',
    backgroundColor: '#833471', // Blue color as an example
    color: '#ffffff', // White text
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none', // Remove underline from links
  };

  const videoContainerStyle = {
    textAlign: 'center',
    margin: '20px 0',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust the height as needed
  };

  return (
    <div style={contentContainerStyle}>
      {/* Title */}
      <h1 style={{ textAlign: 'center', fontSize: '66px', fontFamily: 'Arial' }}>Can you match this heart?</h1>

      {/* Video Container */}
      <div style={videoContainerStyle}>
        <video width="600" height="400" controls autoPlay loop>
          <source src="motion_pvloop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Menu Buttons */}
      <div id="menu">
        <Link to="/level1" style={buttonStyle}>Level 1</Link>
        <Link to="/level2" style={buttonStyle}>Level 2</Link>
        <Link to="/level3" style={buttonStyle}>Level 3</Link>
      </div>
    </div>
  );
};

export default MainPage;
