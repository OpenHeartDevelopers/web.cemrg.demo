// MainPage.js

import React from 'react';
import { Link } from 'react-router-dom';
// import video_heart from './motion_pvloop.mp4';
import videoLookupTable from './videoLookupTable.json';


const MainPage = () => {
  const buttonStyle = {
    padding: '2vh 4vh',
    fontSize: '56px',
    margin: '5px',
    backgroundColor: '#833471', 
    color: '#ffffff', // White text
    border: 'none',
    borderRadius: '5vh',
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

  const videoId = videoLookupTable['100'];
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;


  return (
    <div style={contentContainerStyle}>
      {/* Title */}
      <h1 style={{ textAlign: 'center', fontSize: '66px', fontFamily: 'Arial' }}>Can you match this heart?</h1>

      {/* Video Container */}
      <div style={videoContainerStyle}>
        {/* <video width="600" height="400" controls autoPlay loop> */}
          {/* <source src={video_heart} type="video/mp4" /> */}
          <iframe
          width="600"
          height="400"
          src={youtubeUrl}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          autoPlay
          loop
        ></iframe>
        {/* </video> */}
      </div>


{/* <img src={image} alt="Descriptive text" width="600" height="400" /> */}



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
