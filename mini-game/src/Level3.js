// Level3.js

import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles.css';

const Level3 = () => {
  const [selectedStiffness, setSelectedStiffness] = useState(null);
  const [selectedPressure, setSelectedPressure] = useState(null);
  const [selectedResistance, setSelectedResistance] = useState(null);

  const handleSliderChange = (row, value) => {
    switch (row) {
      case 'stiffness':
        setSelectedStiffness(value);
        break;
      case 'pressure':
        setSelectedPressure(value);
        break;
      case 'resistance':
        setSelectedResistance(value);
        break;
      default:
        break;
    }
  };

  const simulate = () => {
    // Check if all sliders are selected before redirecting to the video
    if (selectedStiffness !== null && selectedPressure !== null && selectedResistance !== null) {
      // Construct the YouTube embedded URL for full-screen playback
      const videoId = 'dQw4w9WgXcQ';
      const embeddedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&fs=1`;

      // Open the YouTube video in a new window
      window.open(embeddedUrl, '_blank');
    } else {
      alert('Please select one position on each slider before simulating.');
    }
  };

  return (
    <div className="level3-container">
      <h2>Level 3</h2>

      {/* Row 1: Stiffness */}
      <div className="slider-row">
        <div className="slider-label">Stiffness</div>
        <div className="slider-wrapper">
          <Slider
            min={1}
            max={5}
            step={1}
            value={selectedStiffness}
            onChange={(value) => handleSliderChange('stiffness', value)}
          />
          <span>{selectedStiffness}</span>
        </div>
      </div>

      {/* Row 2: Pressure */}
      <div className="slider-row">
        <div className="slider-label">Pressure</div>
        <div className="slider-wrapper">
          <Slider
            min={1}
            max={5}
            step={1}
            value={selectedPressure}
            onChange={(value) => handleSliderChange('pressure', value)}
          />
          <span>{selectedPressure}</span>
        </div>
      </div>

      {/* Row 3: Valve Resistance */}
      <div className="slider-row">
        <div className="slider-label">Valve Resistance</div>
        <div className="slider-wrapper">
          <Slider
            min={1}
            max={5}
            step={1}
            value={selectedResistance}
            onChange={(value) => handleSliderChange('resistance', value)}
          />
          <span>{selectedResistance}</span>
        </div>
      </div>

      {/* Simulate Button */}
      <button
        className="simulate-button"
        onClick={simulate}
        disabled={selectedStiffness === null || selectedPressure === null || selectedResistance === null}
      >
        Simulate!
      </button>
    </div>
  );
};

export default Level3;
