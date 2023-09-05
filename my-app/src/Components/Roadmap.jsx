import React from 'react';
import Frontend from '../RoadMaps/Frontend';
import './RoadMap.css';
import vdata from '../Data/vdata.json';

const Roadmap = () => {
  return (
    <div className='rd_cont' >
      <div id='textrd'>
        <h1 id='h1_lay'>Welcome to Roadmaps</h1>
        <p id='p_lay'>
          Website made for college students as well as new joiners in
          undergraduate programs who are finding a clear roadmap for becoming a
          developer. It is inspired by a site named Roadmap.sh <br />
        </p>
      </div>
      <div className='roadmap' id='roadmap'>
        {vdata.map((item, index) => (
          <div key={index} className='andr'>
            <a href={item.link1}>
              <Frontend title={item.title1} className='andr' />
            </a>
            <a href={item.link2}>
              <Frontend title={item.title2} className='andr' />
            </a>
            <a href={item.link3}>
              <Frontend title={item.title3} className='andr' />
            </a>
            <a href={item.link4}>
              <Frontend title={item.title4} className='andr' />
            </a>
            <a href={item.link5}>
              <Frontend title={item.title5} className='andr' />
            </a>
            <a href={item.link6}>
              <Frontend title={item.title6} className='andr' />
            </a>
            <a href={item.link7}>
              <Frontend title={item.title7} className='andr' />
            </a>
            <a href={item.link8}>
              <Frontend title={item.title8} className='andr' />
            </a>
            <a href={item.link9}>
              <Frontend title={item.title9} className='andr' />
            </a>
            <a href={item.link10}>
              <Frontend title={item.title10} className='andr' />
            </a>
            <a href={item.link11}>
              <Frontend title={item.title11} className='andr' />
            </a>
            <a href={item.link12}>
              <Frontend title={item.title12} className='andr' />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
