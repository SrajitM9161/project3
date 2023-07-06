import React from 'react';
import { Link } from 'react-router-dom';
import Img from "../assets/logo3.png";
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <nav className='NavBar'>
        <img src={Img} alt="erro" />
        <div>
          <ul className='navdata'>
            <li>
              <Link to="/roadmaps">Home</Link>
            </li>
            <li>
              <Link to="/roadmaps">Road Maps</Link>
            </li>
            <li>
              <Link to="/video">Video</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

