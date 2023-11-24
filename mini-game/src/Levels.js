import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles.css';

export const Level1 = () => {
  const [selectedStiffness, setSelectedStiffness] = useState('');
  const [isSimulateDisabled, setIsSimulateDisabled] = useState(true);

  useEffect(() => {
    // Check if the slider has the value "" after the Simulate button activation
    const sliderEmpty = selectedStiffness === '';

    // Update the disabled state based on the condition
    setIsSimulateDisabled(sliderEmpty);
  }, [selectedStiffness]);

  const handleSliderChange = (row, value) => {
    switch (row) {
      case 'stiffness':
        setSelectedStiffness(value);
        break;
      default:
        break;
    }
  };

  const simulate = () => {
    if (selectedStiffness !== '') {
      const videoId = 'dQw4w9WgXcQ';
      const embeddedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&fs=1`;
      window.open(embeddedUrl, '_blank');
    } else {
      alert('Please select values other than "" on each slider before simulating.');
    }
  };

  return (
    <div className="level-container">
      <h2>Level 1</h2>
      {/* Row 1: Stiffness */}
      <div className="slider-row">
        <div className="slider-label">Stiffness</div>
        <div className="slider-wrapper">
          <Slider
            min={0}
            max={5}
            step={1}
            marks={{ 0: '', 1: 'Soft', 2: 'Medium', 3: 'Stiff' }}
            value={selectedStiffness}
            onChange={(value) => handleSliderChange('stiffness', value)}
          />
        </div>
      </div>

      {/* Simulate Button */}
      <button className="simulate-button" onClick={simulate} disabled={isSimulateDisabled}>
        Simulate!
      </button>
    </div>
  );
};

export const Level2 = () => {
  const [selectedStiffness, setSelectedStiffness] = useState('');
  const [selectedPressure, setSelectedPressure] = useState('');
  const [isSimulateDisabled, setIsSimulateDisabled] = useState(true);

  useEffect(() => {
    // Check if any slider has the value "" after the Simulate button activation
    const anySliderEmpty = selectedStiffness === '' || selectedPressure === '';

    // Update the disabled state based on the condition
    setIsSimulateDisabled(anySliderEmpty);
  }, [selectedStiffness, selectedPressure]);

  const handleSliderChange = (row, value) => {
    switch (row) {
      case 'stiffness':
        setSelectedStiffness(value);
        break;
      case 'pressure':
        setSelectedPressure(value);
        break;
      default:
        break;
    }
  };

  const simulate = () => {
    if (selectedStiffness !== '' && selectedPressure !== '' ) {
      const videoId = 'dQw4w9WgXcQ';
      const embeddedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&fs=1`;
      window.open(embeddedUrl, '_blank');
    } else {
      alert('Please select values other than "" on each slider before simulating.');
    }
  };

  return (
    <div className="level-container">
      <h2>Level 2</h2>
      {/* Row 1: Stiffness */}
      <div className="slider-row">
        <div className="slider-label">Stiffness</div>
        <div className="slider-wrapper">
          <Slider
            min={0}
            max={5}
            step={1}
            marks={{ 0: '', 1: '1', 2: '2', 3: '3' }}
            value={selectedStiffness}
            onChange={(value) => handleSliderChange('stiffness', value)}
          />
        </div>
      </div>

      {/* Row 2: Pressure */}
      <div className="slider-row">
        <div className="slider-label">Pressure</div>
        <div className="slider-wrapper">
          <Slider
            min={0}
            max={5}
            step={1}
            marks={{ 0: '', 1: '1', 2: '2', 3: '3' }}
            value={selectedPressure}
            onChange={(value) => handleSliderChange('pressure', value)}
          />
        </div>
      </div>

      {/* Simulate Button */}
      <button className="simulate-button" onClick={simulate} disabled={isSimulateDisabled}>
        Simulate!
      </button>
    </div>
  );
};

export const Level3 = () => {
  const [selectedStiffness, setSelectedStiffness] = useState('');
  const [selectedPressure, setSelectedPressure] = useState('');
  const [selectedResistance, setSelectedResistance] = useState('');
  const [isSimulateDisabled, setIsSimulateDisabled] = useState(true);

  useEffect(() => {
    // Check if any slider has the value "" after the Simulate button activation
    const anySliderEmpty = selectedStiffness === '' || selectedPressure === '' || selectedResistance === '';

    // Update the disabled state based on the condition
    setIsSimulateDisabled(anySliderEmpty);
  }, [selectedStiffness, selectedPressure, selectedResistance]);

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
    if (selectedStiffness !== '' && selectedPressure !== '' && selectedResistance !== '') {
      const videoId = 'dQw4w9WgXcQ';
      const embeddedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&fs=1`;
      window.open(embeddedUrl, '_blank');
    } else {
      alert('Please select values other than "" on each slider before simulating.');
    }
  };

  return (
    <div className="level-container">
      <h2>Level 3</h2>
      {/* Row 1: Stiffness */}
      <div className="slider-row">
        <div className="slider-label">Stiffness</div>
        <div className="slider-wrapper">
          <Slider
            min={0}
            max={5}
            step={1}
            marks={{ 0: '', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }}
            value={selectedStiffness}
            onChange={(value) => handleSliderChange('stiffness', value)}
          />
        </div>
      </div>

      {/* Row 2: Pressure */}
      <div className="slider-row">
        <div className="slider-label">Pressure</div>
        <div className="slider-wrapper">
          <Slider
            min={0}
            max={5}
            step={1}
            marks={{ 0: '', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }}
            value={selectedPressure}
            onChange={(value) => handleSliderChange('pressure', value)}
          />
        </div>
      </div>

      {/* Row 3: Valve Resistance */}
      <div className="slider-row">
        <div className="slider-label">Valve Resistance</div>
        <div className="slider-wrapper">
          <Slider
            min={0}
            max={5}
            step={1}
            marks={{ 0: '', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' }}
            value={selectedResistance}
            onChange={(value) => handleSliderChange('resistance', value)}
          />
        </div>
      </div>

      {/* Simulate Button */}
      <button className="simulate-button" onClick={simulate} disabled={isSimulateDisabled}>
        Simulate!
      </button>
    </div>
  );
};
