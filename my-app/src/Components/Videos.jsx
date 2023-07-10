import React, { useState } from 'react';
import './Video.css';
import Frontend from '../RoadMaps/Frontend';
const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoTitle) => {
    setSelectedVideo(videoTitle);
    
    window.open('', '_blank');
  };

  const renderVideo = () => {
    if (selectedVideo === 'Frontend') {
      return (
        <div>
        
        </div>
      );
    } else if (selectedVideo === 'Backend') {
      return (
        <div>
          {}
        </div>
      );
    } else if (selectedVideo === 'UI/UX') {
      return (
        <div>
          {}
        </div>
      );
    } else if (selectedVideo === 'Blockchain') {
      return (
        <div>
          {}
        </div>
      );
    } else if (selectedVideo === 'Android') {
      return (
        <div>
          {}
        </div>
      );
    }
    return null; 
  };

  return (
    <div className='v'>
      {renderVideo()}
      <div>
        <a href='#' onClick={() => handleVideoClick('Frontend')} target="_blank" rel="noopener noreferrer">
        <Frontend className=" showing" title="Frontend" />
        </a>
      </div>
      <div>
        <a href='#' onClick={() => handleVideoClick('Backend')} target="_blank" rel="noopener noreferrer">
        <Frontend title="Backend" />
        </a>
      </div>
      <div>
        <a href='#' onClick={() => handleVideoClick('UI/UX')} target="_blank" rel="noopener noreferrer">
        <Frontend title="UI/UX" />
        </a>
      </div>
      <div>
        <a href='#' onClick={() => handleVideoClick('Blockchain')} target="_blank" rel="noopener noreferrer">
        <Frontend title="Blockchain" />
        </a>
      </div>
      <div>
        <a href='#' onClick={() => handleVideoClick('Android')} target="_blank" rel="noopener noreferrer">
        <Frontend title="Android" />
        </a>
      </div>
    </div>
  );
};

export default Videos;



