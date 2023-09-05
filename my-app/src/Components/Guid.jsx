import React from 'react'
import vdata from '../Data/gdata.json';
import Frontend from '../RoadMaps/Frontend';
import './Video.css';
const Guid = () => {

  return (
      <div className='roadmapg' id='roadmapg'>
        {vdata.map((item, index) => (
          <div key={index} className='guiddata'>
            <a href={item.link1}>
              <Frontend title={item.title1} className='guiddata' />
            </a>
            <a href={item.link2}>
              <Frontend title={item.title2} className='guiddata' />
            </a>
            <a href={item.link3}>
              <Frontend title={item.title3} className='guiddata' />
            </a>
            <a href={item.link4}>
              <Frontend title={item.title4} className='guiddata' />
            </a>
            <a href={item.link5}>
              <Frontend title={item.title5} className='guiddata' />
            </a>
            <a href={item.link6}>
              <Frontend title={item.title6} className='guiddata' />
            </a>
            <a href={item.link7}>
              <Frontend title={item.title7} className='guiddata' />
            </a>
            
          </div>
        ))}
        <div className='v1'>
        <video width="900" height="550" controls>
        <source src="https://youtu.be/91Vdve_SlTE" />
        
      </video>
        </div>
      </div>
  
  );
};


export default Guid
