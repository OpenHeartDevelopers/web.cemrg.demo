import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './styles.css';
import videoLookupTable from './videoLookupTable.json';
import imageLookupTable from './imageLookupTable.json';
// import imageSrc from './images/comparison_cycle_97_cycle_0.png'; 
import { useNavigate } from 'react-router-dom';


const YOUTUBE_URL = 'https://www.youtube.com/embed';
const GITHUB_URL = 'https://github.com/OpenHeartDevelopers/web.cemrg.demo/blob/main/src/images/';




const VideoModal = ({ isOpen, onClose, videoUrl, imageUrl, isMainPageModal}) => {
  const [showImage, setShowImage] = useState(false);


  useEffect(() => {
    // Reset showImage state when modal is opened
    if (isOpen) {
      setShowImage(false);
    }
  }, [isOpen]);

  const handleVideoClose = () => {
    setShowImage(true);
  };



  return (
    isOpen && (
      <div className="modal-overlay">
        <div className="modal-content">
          {!showImage && (
            <button className="close-button" onClick={handleVideoClose}>
              Show PV loop comparison
            </button>
          )}
          {showImage ? (
            <div>
              <img src={imageUrl} alt='' height="500" />
            </div>
          ) : (
            <iframe
              width="560"
              height="315"
              src={`${videoUrl}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Embedded Video"
              loop
            ></iframe>
          )}
        </div>
        {/* {showImage && (
          <div className="modal-buttons">
            <button onClick={handleBackToMainPage}>Back to Main Page</button>
            <button onClick={handleChooseAnotherValue}>Choose Another Value</button>
          </div>
        )} */}
      </div>
    )
  );
};

const createSimulateFunction = (selectedStiffness, selectedPressure, selectedResistance, setIsModalOpen, setVideoUrl, setImageUrl) => {
  return () => {
    const values = [selectedStiffness, selectedPressure, selectedResistance].filter(Boolean);
    if (values.length === 3) {
      const key = values.join('');
      const videoId = videoLookupTable[key];
      const imageId = imageLookupTable[key];
      const embeddedUrl = `${YOUTUBE_URL}/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;
      const embeddedUrlimage = `${GITHUB_URL}/${imageId}?raw=true`;

      // Set the modal state to open
      setIsModalOpen(true);
      // Set the video URL to state if you need it in the modal
      setVideoUrl(embeddedUrl);
      setImageUrl(embeddedUrlimage);
    } else {
      alert('Please select a correct value from the slider!');
    }
  };
};

export const Level1 = () => {
  const [selectedStiffness, setSelectedStiffness] = useState('');
  const [isSimulateDisabled, setIsSimulateDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showComparisonButton, setShowComparisonButton] = useState(true);
  const navigate = useNavigate(); // Add this line to get the navigate function

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

  const simulate = createSimulateFunction(
    selectedStiffness,
    '0',
    '0',
    setIsModalOpen,
    setVideoUrl,
    setImageUrl,
    () => setShowComparisonButton(false) // Set showComparisonButton to false explicitly
  );

  const handleBackToMainPage = () => {
    // Use the navigate function to go back to the main page
    navigate('/');
  };

  const handleChooseAnotherValue = () => {
    // Implement logic to reset the modal state and choose another slider value
    console.log('Choose another value logic');
    setIsModalOpen(false);
    setShowComparisonButton(true);
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
            max={3}
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

 {/* Video Modal */}
  <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={videoUrl} imageUrl={imageUrl} isMainPageModal={false} />

      {/* Back to Main Page and Choose Another Value buttons */}
      {isModalOpen && showComparisonButton && (
        <div className="modal-buttons">
          <button onClick={handleBackToMainPage}>Back to Main Page</button>
          <button onClick={handleChooseAnotherValue}>Choose Another Value</button>
        </div>
      )}
    </div>
  );
};

// Repeat the same pattern for Level2 and Level3 components


export const Level2 = () => {
  const [selectedStiffness, setSelectedStiffness] = useState('');
  const [selectedPressure, setSelectedPressure] = useState('');
  const [isSimulateDisabled, setIsSimulateDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showComparisonButton, setShowComparisonButton] = useState(true);
  const navigate = useNavigate(); // Add this line to get the navigate function


  useEffect(() => {
    // Check if any slider has the value "" after the Simulate button activation
    const anySliderEmpty = selectedStiffness === '' || selectedPressure === '';

    // Update the disabled state based on the condition
    setIsSimulateDisabled(anySliderEmpty);
  }, [selectedStiffness, selectedPressure]);

  const handleSliderChange = (row, value) => {
    switch (row) {
      case 'bulk stiffness':
        setSelectedStiffness(value);
        break;
      case 'endocardial pressure':
        setSelectedPressure(value);
        break;
      default:
        break;
    }
  };

  const simulate = createSimulateFunction(
    selectedStiffness, 
    selectedPressure, 
    '0',
    setIsModalOpen,
    setVideoUrl,
    setImageUrl,
    () => setShowComparisonButton(false) // Set showComparisonButton to false explicitly
  );

  const handleBackToMainPage = () => {
    // Use the navigate function to go back to the main page
    navigate('/');
  };

  const handleChooseAnotherValue = () => {
    // Implement logic to reset the modal state and choose another slider value
    console.log('Choose another value logic');
    setIsModalOpen(false);
    setShowComparisonButton(true);
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
            max={3}
            step={1}
            marks={{ 0: '', 1: 'soft', 2: 'medium', 3: 'stiff' }}
            value={selectedStiffness}
            onChange={(value) => handleSliderChange('bulk stiffness', value)}
          />
        </div>
      </div>

      {/* Row 2: Pressure */}
      <div className="slider-row">
        <div className="slider-label">Pressure</div>
        <div className="slider-wrapper">
          <Slider
            min={0}
            max={3}
            step={1}
            marks={{ 0: '', 1: 'low', 2: 'medium', 3: 'high' }}
            value={selectedPressure}
            onChange={(value) => handleSliderChange('endocardial pressure', value)}
          />
        </div>
      </div>

      {/* Simulate Button */}
      <button className="simulate-button" onClick={simulate} disabled={isSimulateDisabled}>
        Simulate!
      </button>
 {/* Video Modal */}
  <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={videoUrl} imageUrl={imageUrl} isMainPageModal={false} />

      {/* Back to Main Page and Choose Another Value buttons */}
      {isModalOpen && showComparisonButton && (
        <div className="modal-buttons">
          <button onClick={handleBackToMainPage}>Back to Main Page</button>
          <button onClick={handleChooseAnotherValue}>Choose Another Value</button>
        </div>
      )}
    </div>
  );
};

// export default VideoModal;
// Repeat the same pattern for Level2 and Level3 components

export const Level3 = () => {
  const [selectedStiffness, setSelectedStiffness] = useState('');
  const [selectedPressure, setSelectedPressure] = useState('');
  const [selectedResistance, setSelectedResistance] = useState('');
  const [isSimulateDisabled, setIsSimulateDisabled] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [showComparisonButton, setShowComparisonButton] = useState(true);
  const navigate = useNavigate(); // Add this line to get the navigate function


  useEffect(() => {
    // Check if any slider has the value "" after the Simulate button activation
    const anySliderEmpty = selectedStiffness === '' || selectedPressure === '' || selectedResistance === '';

    // Update the disabled state based on the condition
    setIsSimulateDisabled(anySliderEmpty);
  }, [selectedStiffness, selectedPressure, selectedResistance]);

  const handleSliderChange = (row, value) => {
    switch (row) {
      case 'bulk stiffness (kPa)':
        setSelectedStiffness(value);
        break;
      case 'endocardial pressure (mmHg)':
        setSelectedPressure(value);
        break;
      case 'systemic resistance':
        setSelectedResistance(value);
        break;
      default:
        break;
    }
  };

  const simulate = createSimulateFunction(
    selectedStiffness, 
    selectedPressure, 
    selectedResistance,
    setIsModalOpen,
    setVideoUrl,
    setImageUrl,
    () => setShowComparisonButton(false) // Set showComparisonButton to false explicitly
    );


  const handleBackToMainPage = () => {
    // Use the navigate function to go back to the main page
    navigate('/');
  };

  const handleChooseAnotherValue = () => {
    // Implement logic to reset the modal state and choose another slider value
    console.log('Choose another value logic');
    setIsModalOpen(false);
    setShowComparisonButton(true);
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
            marks={{ 0: '', 1: '1.29', 2: '1.39', 3: '1.66', 4: '1.70', 5: '2.05' }}
            value={selectedStiffness}
            onChange={(value) => handleSliderChange('bulk stiffness (kPa)', value)}
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
            marks={{ 0: '', 1: '4.73', 2: '5.08', 3: '5.16', 4: '5.94', 5: '6.06' }}
            value={selectedPressure}
            onChange={(value) => handleSliderChange('endocardial pressure (mmHg)', value)}
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
            marks={{ 0: '', 1: '1.55', 2: '1.67', 3: '1.73', 4: '1.97', 5: '2.05' }}
            value={selectedResistance}
            onChange={(value) => handleSliderChange('systemic resistance', value)}
          />
        </div>
      </div>

      {/* Simulate Button */}
      <button className="simulate-button" onClick={simulate} disabled={isSimulateDisabled}>
        Simulate!
      </button>
 {/* Video Modal */}
  <VideoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} videoUrl={videoUrl} imageUrl={imageUrl} isMainPageModal={false} />

      {/* Back to Main Page and Choose Another Value buttons */}
      {isModalOpen && showComparisonButton && (
        <div className="modal-buttons">
          <button onClick={handleBackToMainPage}>Back to Main Page</button>
          <button onClick={handleChooseAnotherValue}>Choose Another Value</button>
        </div>
      )}
    </div>
  );
};

export default VideoModal;