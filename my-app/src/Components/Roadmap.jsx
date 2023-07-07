import React from 'react';
import Frontend from '../RoadMaps/Frontend';
import './RoadMap.css'
const file = 'https://drive.google.com/file/d/15_UyboPBeVxWvXHYUD2BVTrYbUoUvSt1/view?usp=drive_link';
const fil2 = 'https://drive.google.com/file/d/1IyrC_kvCdcYYPYmIKK1Xf5zCKXgo2lDA/view?usp=drive_link';
const fil3 = 'https://drive.google.com/file/d/1Xlqs3e4NKgcuROVVWKiQRPlizSGKe3ky/view?usp=drive_link';
const fil4 = 'https://drive.google.com/file/d/1FYyfN7Ulq6cXBsovw4h4kekKnYxyzbb6/view?usp=drive_link';

const Roadmap = () => {
  const handleDownload = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <div>
      <Frontend title="Frontend" />
      <button onClick={() => { handleDownload(file) }}>Show</button>

      <Frontend title="Backend" />
      <button onClick={() => { handleDownload(fil2) }}>Show</button>

      <Frontend title="UI/UX" />
      <button onClick={() => { handleDownload(fil3) }}>Show</button>

      <Frontend title="Blockchain" />
      <button onClick={() => { handleDownload(fil4) }}>Show</button>

      <Frontend title="Android" />
      <button onClick={() => { handleDownload(file) }}>Show</button>
    </div>
  );
};

export default Roadmap;
