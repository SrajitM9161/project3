import React, { useState } from 'react';
import './Video.css';
import Frontend from '../RoadMaps/Frontend';
const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoTitle) => {
    setSelectedVideo(videoTitle);
    // You can remove the window.open() function if you want to open the video in the same window
    window.open('https://www.youtube.com/embed/fxtN1lY0YL8', '_blank');
  };

  const renderVideo = () => {
    if (selectedVideo === 'Frontend') {
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fxtN1lY0YL8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
      );
    } else if (selectedVideo === 'Backend') {
      return (
        <div>
          {/* Insert the URL of the backend video */}
        </div>
      );
    } else if (selectedVideo === 'UI/UX') {
      return (
        <div>
          {/* Insert the URL of the UI/UX video */}
        </div>
      );
    } else if (selectedVideo === 'Blockchain') {
      return (
        <div>
          {/* Insert the URL of the blockchain video */}
        </div>
      );
    } else if (selectedVideo === 'Android') {
      return (
        <div>
          {/* Insert the URL of the Android video */}
        </div>
      );
    }
    return null; // Return null if no video is selected
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



